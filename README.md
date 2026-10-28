# roundware.app

The Roundware service's public site: what it is, pricing, the legal documents and contact. Signing in and everything after is the admin, at [admin.roundware.app](https://admin.roundware.app). Projects' own sites are `*.roundware.app`. The open-source project is [roundware.org](https://roundware.org).

A plain static site: HTML pages, one stylesheet, and a small build script (`build.mjs`). Its only dependency is `marked`, for the legal documents' Markdown. Nothing loads from anywhere else: no web fonts, no analytics, no scripts.

## Working on it

```
npm install
npm run dev        # http://localhost:4321, rebuilds on every change
npm run build      # into dist/
```

| Where | What |
|---|---|
| `src/pages/*.html` | One page each: `index` is `/`, `pricing` is `/pricing/`, `legal` is `/legal/`. The first two lines give its title and description. |
| `src/layout.html` | The header, footer and `<head>` around every page |
| `src/styles.css` | All the styles |
| `src/assets/` | Logo, background, phone screenshots, share image |
| `src/plans.json` | The plans as last fetched (see below) |
| `legal/` | The legal documents, in Markdown: the one source for them (see below) |

In pages, `{{admin}}`, `{{org}}`, `{{github}}`, `{{contact_email}}` and `{{privacy_email}}` are filled in from `site` at the top of `build.mjs`.

## Where things come from

- **Legal documents:** `legal/*.md`, with their own [README](legal/README.md) (the list of documents, and the checklist before they take effect). They came from a separate roundware-legal repository on 2026-10-28, history included. Each document becomes `/legal/<name>/`, and the list on `/legal/` follows the table in `legal/README.md`. Links between the documents point at their pages here. "[GitHub link]", and the link at the foot of each page, go to that document's history in this repository. That's why the repository is public: every change to the documents is dated and visible. **A change to a legal document goes live when it's pushed.**
- **Plans and prices:** fetched from the server at build time (`PLANS_URL`, default `https://api.roundware.app/api/3/billing/plans/`), so they can't drift from the real ones. If the server can't be reached, the last copy (`src/plans.json`) is used. **Changing a plan means redeploying this site.** While `paidPlansOpen` is false in `build.mjs`, paid plans say "Coming soon".

## Netlify

- Build command `npm run build`, publish directory `dist` (both in `netlify.toml`).
- No environment variables are needed. `PLANS_URL` can point the plans at another server.
- Domains: `roundware.app` as the primary domain, with `www.roundware.app` redirecting to it. In DNS, the bare `roundware.app` and `www` must point at Netlify. The wildcard `*.roundware.app` stays on the Droplet for projects' sites, and `admin` and `api` keep their own records. A specific record beats the wildcard, so `www` is safe to point here.
- `netlify.toml` also sets short redirects (`/privacy`, `/terms`, `/login`, `/signup`) and security headers. The site runs no scripts at all.
- Plans are read when the site builds, so after changing one on the server, trigger a deploy (Deploys → Trigger deploy).

## Before it goes live

- [ ] **Who has used Roundware** (home page): confirm each name, or replace the names with logos used with permission.
- [ ] Check the home page's claims: "since 2008", and "artists, museums, schools and communities".
- [x] ~~**hello@roundware.app** and **privacy@roundware.app**: set up and tested.~~ Done 2026-10-28.
- [ ] The legal documents are drafts: their own checklist is in [legal/README.md](legal/README.md).
- [ ] Then point the admin's signed-out landing page at roundware.app, so there's one public site (the admin's `/` becomes sign-in).
