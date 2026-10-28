// ---------------------------------------------------------------------------
// roundware.app: the service's public site, built into dist/.
//
//   npm run build          build once
//   npm run dev            build, serve on http://localhost:4321, rebuild on change
//
// Pages are HTML in src/pages/, wrapped in src/layout.html. The legal pages
// are built from the Markdown in legal/, the one source for those documents.
// Plans and prices come from the server at build time (PLANS_URL), with
// src/plans.json as the fallback.
// Nothing is loaded from anywhere else: no web fonts, no analytics.
// ---------------------------------------------------------------------------
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, watch, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, "src");
const DIST = join(ROOT, "dist");

export const site = {
  url: "https://roundware.app",
  admin: "https://admin.roundware.app",
  org: "https://roundware.org",
  github: "https://github.com/roundware",
  // Not yet set up: see README.
  contactEmail: "hello@roundware.app",
  privacyEmail: "privacy@roundware.app",
  // Paid plans can be chosen once billing is switched on (server docs/013).
  paidPlansOpen: false,
  plansUrl: process.env.PLANS_URL ?? "https://api.roundware.app/api/3/billing/plans/",
  // This repository, where each legal document's history is shown.
  repo: "https://github.com/roundware/roundware-saas-home",
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// -- the legal documents -------------------------------------------------------

const LEGAL = join(ROOT, "legal");
const historyUrl = (slug) => `${site.repo}/commits/main/legal/${slug}.md`;

/** The documents, in the order the legal README's table lists them. */
function legalDocs(dir) {
  const readme = readFileSync(join(dir, "README.md"), "utf8");
  const docs = [];
  for (const m of readme.matchAll(/^\|\s*\[([^\]]+)\]\(([\w-]+)\.md\)\s*\|\s*([^|]+?)\s*\|$/gm))
    docs.push({ title: m[1], slug: m[2], for: m[3] });
  return docs;
}

function renderLegal(md, slug) {
  // Links between the documents point at their pages here.
  md = md.replace(/\]\(([\w-]+)\.md(#[^)]*)?\)/g, (_, s, hash = "") => `](/legal/${s}/${hash})`);
  md = md.replace(/\[GitHub link\]/g, `[on GitHub](${historyUrl(slug)})`);
  const html = marked.parse(md);
  const title = (md.match(/^#\s+(.+)$/m) ?? [, slug])[1];
  const draft = /\*\*Draft\b/.test(md);
  return { html, title, draft };
}

// -- plans -----------------------------------------------------------------------

async function plans() {
  try {
    const r = await fetch(site.plansUrl, { signal: AbortSignal.timeout(10_000) });
    if (!r.ok) throw new Error(`${r.status}`);
    const list = await r.json();
    writeFileSync(join(SRC, "plans.json"), JSON.stringify(list, null, 2) + "\n");
    return list;
  } catch (e) {
    console.warn(`Plans: couldn't fetch ${site.plansUrl} (${e.message}); using src/plans.json.`);
    return JSON.parse(readFileSync(join(SRC, "plans.json"), "utf8"));
  }
}

// The plan cards as the admin's landing page has them (its planFeatures
// and formatPrice, src/utilities/plans.ts): keep them in step.
const UNLIMITED = -1;
const count = (n, one, many = `${one}s`) => `${n.toLocaleString("en-US")} ${n === 1 ? one : many}`;

function planFeatures(p) {
  return [
    p.max_projects === UNLIMITED ? "Unlimited projects" : count(p.max_projects, "project"),
    p.max_contributions === UNLIMITED
      ? "Unlimited contributions"
      : `${count(p.max_contributions, "contribution")}, across all projects`,
    p.max_members === UNLIMITED ? "Unlimited team members" : count(p.max_members, "team member"),
    ...(p.allows_custom_domain ? ["A custom URL for each project"] : []),
    ...(p.allows_custom_css ? ["Custom CSS"] : []),
  ];
}

function planCards(list) {
  const firstPaid = list.findIndex((p) => p.price_cents_monthly > 0);
  return list
    .map((p, i) => {
      const free = p.price_cents_monthly === 0;
      // As the admin's: the first paid plan's button is filled, the others outlined.
      const kind = i === firstPaid ? "button" : "button outline";
      const action = free
        ? `<a class="${kind}" href="${site.admin}/register">Get Started Free</a>`
        : site.paidPlansOpen
          ? `<a class="${kind}" href="${site.admin}/register">Choose ${esc(p.name)}</a>`
          : `<span class="${kind} disabled" aria-disabled="true">Coming Soon</span>`;
      return `<div class="plan${i === firstPaid ? " featured" : ""}">
  <h3>${esc(p.name)}</h3>
  <p class="price"><strong>${free ? "$0" : `$${Math.round(p.price_cents_monthly / 100)}`}</strong> ${free ? "forever" : "/month"}</p>
  <ul>${planFeatures(p).map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
  ${action}
</div>`;
    })
    .join("\n");
}

// -- pages ---------------------------------------------------------------------

function page(layout, { title, description, body, path, wide = false }) {
  const full = title ? `${title} · Roundware` : "Roundware: Build Location-Based Audio Experiences";
  return layout
    .replaceAll("{{title}}", esc(full))
    .replaceAll("{{description}}", esc(description))
    .replaceAll("{{canonical}}", site.url + path)
    .replaceAll("{{main_class}}", wide ? "wide" : "")
    .replace("{{content}}", () => body)
    .replaceAll("{{admin}}", site.admin)
    .replaceAll("{{org}}", site.org)
    .replaceAll("{{github}}", site.github)
    .replaceAll("{{contact_email}}", site.contactEmail)
    .replaceAll("{{privacy_email}}", site.privacyEmail)
    .replaceAll("{{year}}", String(new Date().getFullYear()))
    .replace(/<a href="(\/[^"]*)"/g, (m, href) => (href === path ? `<a href="${href}" aria-current="page"` : m));
}

function write(path, html) {
  const file = join(DIST, path.replace(/^\//, ""), path.endsWith("/") ? "index.html" : "");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

/** A page's own title and description, from its first lines:
 *  <!-- title: … --> and <!-- description: … --> */
function meta(html, key) {
  return (html.match(new RegExp(`<!--\\s*${key}:\\s*(.*?)\\s*-->`)) ?? [, ""])[1];
}

export async function build() {
  const started = Date.now();
  rmSync(DIST, { recursive: true, force: true });
  mkdirSync(DIST, { recursive: true });
  cpSync(join(SRC, "assets"), join(DIST, "assets"), { recursive: true });
  cpSync(join(SRC, "styles.css"), join(DIST, "styles.css"));
  for (const f of ["favicon.ico", "robots.txt"]) if (existsSync(join(SRC, f))) cpSync(join(SRC, f), join(DIST, f));

  const layout = readFileSync(join(SRC, "layout.html"), "utf8");
  const list = await plans();
  const dir = LEGAL;
  const docs = legalDocs(dir);

  const filled = (html) =>
    html
      .replace("{{plans}}", () => planCards(list))
      .replace(
        "{{legal_list}}",
        () => docs.map((d) => `<li><a href="/legal/${d.slug}/">${esc(d.title)}</a><span>${esc(d.for)}</span></li>`).join("\n")
      )
      .replace("{{paid_note}}", () => (site.paidPlansOpen ? "" : '<p class="note">Paid plans open soon. Until then, every project starts on Free.</p>'));

  const paths = [];
  for (const f of readdirSync(join(SRC, "pages"))) {
    if (extname(f) !== ".html") continue;
    const html = readFileSync(join(SRC, "pages", f), "utf8");
    const name = f.replace(/\.html$/, "");
    const path = name === "index" ? "/" : name === "404" ? "/404.html" : `/${name.replace(/--/g, "/")}/`;
    write(path, page(layout, { title: meta(html, "title"), description: meta(html, "description"), body: filled(html), path, wide: name === "index" }));
    if (name !== "404") paths.push(path);
  }

  let drafts = 0;
  for (const d of docs) {
    const { html, title, draft } = renderLegal(readFileSync(join(dir, `${d.slug}.md`), "utf8"), d.slug);
    drafts += draft ? 1 : 0;
    const history = `<p class="history"><a href="${historyUrl(d.slug)}">Every change to this document</a>, on GitHub</p>`;
    const body = `<nav class="crumbs"><a href="/legal/">Legal</a></nav><article class="legal">${html}${history}</article>`;
    const path = `/legal/${d.slug}/`;
    write(path, page(layout, { title, description: `${title}: ${d.for}.`, body, path }));
    paths.push(path);
  }

  writeFileSync(
    join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
      .map((p) => `  <url><loc>${site.url}${p}</loc></url>`)
      .join("\n")}\n</urlset>\n`
  );
  console.log(
    `Built ${paths.length} pages (${docs.length} legal, ${drafts} still drafts; ${list.length} plans) in ${Date.now() - started} ms.`
  );
}

// -- a local preview -----------------------------------------------------------

const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon", ".xml": "application/xml", ".txt": "text/plain" };

function serve(port) {
  createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = join(DIST, p);
    if (!file.startsWith(DIST)) return res.writeHead(403).end();
    if (existsSync(file) && !extname(file)) file = join(file, "index.html");
    if (!existsSync(file)) {
      res.writeHead(404, { "Content-Type": TYPES[".html"] });
      return res.end(readFileSync(join(DIST, "404.html")));
    }
    res.writeHead(200, { "Content-Type": TYPES[extname(file)] ?? "application/octet-stream" });
    res.end(readFileSync(file));
  }).listen(port, () => console.log(`http://localhost:${port}`));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await build();
  if (process.argv.includes("--serve")) {
    serve(Number(process.env.PORT ?? 4321));
    let timer;
    const again = () => {
      clearTimeout(timer);
      timer = setTimeout(() => build().catch((e) => console.error(e.message)), 150);
    };
    watch(SRC, { recursive: true }, (_, f) => f !== "plans.json" && again());
    watch(LEGAL, again);
  }
}
