# loyaltee

Websites for **Loyaltee** (the company) and **ilvolAI** (its first product), built with [Astro](https://astro.build) as a fully static site.

| Route    | Page                                   |
| -------- | -------------------------------------- |
| `/`      | Loyaltee company home                  |
| `/ilvol` | ilvolAI product page (download, plans) |

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
