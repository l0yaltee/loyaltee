# loyaltee

Websites for **Loyaltee** (the company) and **ilvolAI** (its first product), built with [Astro](https://astro.build) as a fully static site.

| Route    | Page                                   |
| -------- | -------------------------------------- |
| `/`      | Loyaltee company home                  |
| `/ilvol` | ilvolAI product page (download, plans) |
| `/ilvol/guides` | How-to guides index |
| `/ilvol/guides/<slug>` | One guide (e.g. `ringcentral`) |

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # type-checks, then writes static files to dist/
pnpm preview    # serves dist/
```

Node 22+ and pnpm 11.

## Where things live

- `src/config.ts` — links and contact details shared by both pages: installer download URL, Microsoft Store URL, privacy/terms, email, Telegram, phone. **Edit these first.**
- `src/data/` — page content (plans, FAQ, flow stages, audiences…), kept out of the markup.
- `src/pages/` — one file per page. Interactive bits (plan tabs, flow stops) are small inline scripts; there's no client framework.
- `src/styles/` — one stylesheet per site. The two sites deliberately look different: Loyaltee is the pixel/hard-edge violet world, ilvolAI uses the app's glass design system.
- `src/layouts/Base.astro` — `<head>`, mobile menu, intro replay. Each site's intro animation plays once per browser session.

## Adding a guide

A guide is one Markdown file; the index, the page, the table of contents and the nav links pick it up on their own.

1. Create `src/content/guides/<slug>.md`. The file name is the URL (`/ilvol/guides/<slug>`).
2. Frontmatter (see `src/content.config.ts`):
   ```yaml
   ---
   title: Connect RingCentral to IlvolAI
   description: One or two sentences, shown on the card and in search results.
   order: 1                 # lower comes first on the index
   updated: 2026-11-05      # shown as "Last updated"
   for: Dispatchers         # optional audience
   hero: ./assets/<slug>/hero.png
   heroAlt: Short description of the hero image
   ---
   ```
3. Put images in `src/content/guides/assets/<slug>/` and reference them with relative paths: `![alt](./assets/<slug>/01-step.png)`. They are optimised by `astro:assets` at build time. Use `##` headings for sections (they make the table of contents) and an ordered list for steps, with the screenshot indented under its step.
4. Callouts are blockquotes that start with a marker: `> [!WARNING] Optional title`, then the text on the next lines. Kinds: `NOTE`, `TIP`, `WARNING`. (Plugin: `src/plugins/callouts.mjs`.)

The "Still stuck?" footer uses `contact.telegram` from `src/config.ts`.

### Replacing the placeholder screenshots (RON-58)

The images in `src/content/guides/assets/ringcentral/` (`01-register-app` ... `06-ilvolai-connected`, plus `hero`) are placeholders. Save the real screenshot under the **same file name** (PNG, about 1280px wide, 16:9 looks best) and nothing else needs to change. **Blur the Client ID, Client Secret and JWT first** (and phone numbers); never commit a screenshot that shows them.

## Mobile

The original designs were desktop canvases. On top of them:

- a hamburger menu under 1000px on both sites,
- the Loyaltee "flow" stops become a swipeable road, plans on ilvolAI become a swipeable row,
- the ilvolAI "message for driver" card sits under the app mock instead of hanging off the edge,
- hero type, spacing and button widths scale down to 320px with no horizontal scroll.

## Deploy

`dist/` is plain static files, so any static host works:

- **Vercel / Netlify / Cloudflare Pages:** build command `pnpm build`, output directory `dist`.
- Update `site` in `astro.config.mjs` to the production domain so canonical and OG URLs are correct.

## Still to fill in

- `contact.phone` — hidden until set.
- Team PAYG per-load price in `src/data/ilvol.ts` (shows "On request").
