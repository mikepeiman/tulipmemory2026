# Tulip Electronics — tulipmemory.com

Static Astro site. Dark mode by default with a persisted light/dark toggle.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel: **Add New Project → Import** the repo.
3. Vercel auto-detects Astro. Accept defaults (build: `astro build`, output: `dist`). Deploy.

> **If your repo has this project in a subfolder**, set **Root Directory → `astro-site`** in the Vercel project settings, or Vercel won't find `package.json`.

Or with the CLI: `npx vercel` from this folder.

## TODO before launch
- **Forms**: quote / reserve / newsletter / product-interest forms currently show a local
  confirmation only. Point them at a real endpoint — search for `TODO:FORM` in the code.
  Easiest options: [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com),
  or a Vercel serverless function.
- **Votes**: the requested-products upvote list (`src/components/ProductInterest.astro`)
  persists per-visitor in localStorage, so counts are local-only until wired up. For a
  shared, tamper-resistant tally, point `TODO:VOTES` at a Vercel function + small KV store,
  deduping server-side on the anonymous visitor id the component already generates.
- **Stripe**: "Buy" buttons route to the quote page for now. Replace with Stripe Payment
  Links per product/capacity when prices are set — search for `TODO:STRIPE`.
- **Deposit amounts** on /reserve ($500 / $250) are placeholders — confirm with Bill.
- **Hours** in the quote sidebar (Mon–Fri 8–5 ET) are placeholders.

## Structure
- `src/data/products.ts` — the catalogue: families, control platforms, SKUs, pricing, OEM cross-references
- `src/data/site.js` — contact info, services list, in-development products
- `src/layouts/Base.astro` — header, footer, theme toggle, SEO tags, JSON-LD
- `src/pages/` — index, products/ (full catalogue + per-SKU pages), controls/ (per-family finders), services/ (hub + per-service pages), product-development/, warranty, about, quote, reserve
- `public/` — assets, `robots.txt` (AI crawlers allowed), `llms.txt`, `sitemap.xml`

## SEO / sitemap
`public/sitemap.xml` is hand-written (referenced by `robots.txt`). When you add a page,
add a matching `<url>` block. It's a plain static file — no build step, nothing to crash.
