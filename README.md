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

In pages, `{{admin}}`, `{{org}}`, `{{github}}`, `{{contact_email}}` and `{{privacy_email}}` are filled in from `site` at the top of `build.mjs`.

## Where things come from

- **Legal documents:** the [roundware-legal](../roundware-legal) repository is the one source. The build reads `../roundware-legal` when it's next to this folder. Otherwise (on Netlify) it clones `LEGAL_REPO`. Each document becomes `/legal/<name>/`, and the list on `/legal/` follows the legal README's table. Links between the documents point at their pages here. With `LEGAL_REPO_URL` set, "[GitHub link]" becomes a link to each document's history. **A change to a legal document goes live on the next deploy of this site.**
- **Plans and prices:** fetched from the server at build time (`PLANS_URL`, default `https://api.roundware.app/api/3/billing/plans/`), so they can't drift from the real ones. If the server can't be reached, the last copy (`src/plans.json`) is used. **Changing a plan means redeploying this site.** While `paidPlansOpen` is false in `build.mjs`, paid plans say "Coming soon".

## Netlify

- Build command `npm run build`, publish directory `dist` (both in `netlify.toml`).
- Environment variables, once roundware-legal is on GitHub:
  - `LEGAL_REPO`: its clone address, e.g. `https://github.com/roundware/roundware-legal.git`
  - `LEGAL_REPO_URL`: its page, e.g. `https://github.com/roundware/roundware-legal`
- Domains: `roundware.app` as the primary domain, with `www.roundware.app` redirecting to it. In DNS, the bare `roundware.app` and `www` must point at Netlify. The wildcard `*.roundware.app` stays on the Droplet for projects' sites, and `admin` and `api` keep their own records. A specific record beats the wildcard, so `www` is safe to point here.
- `netlify.toml` also sets short redirects (`/privacy`, `/terms`, `/login`, `/signup`) and security headers. The site runs no scripts at all.
- To publish a change to a legal document without changing this repo, use a Netlify build hook (Site settings → Build hooks). It can be triggered from roundware-legal's GitHub Actions later.

## Before it goes live

- [ ] **Who has used Roundware** (home page): confirm each name, or replace the names with logos used with permission.
- [ ] Check the home page's claims: "since 2008", and "artists, museums, schools and communities".
- [ ] **hello@roundware.app** (contact page and footer): set it up, or change `contactEmail` in `build.mjs`. Set up **privacy@roundware.app** too, and test both from an outside address.
- [ ] The legal documents are drafts: their own checklist is in roundware-legal's README.
- [ ] Then point the admin's signed-out landing page at roundware.app, so there's one public site (the admin's `/` becomes sign-in).
