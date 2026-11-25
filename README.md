# Levant Bakery & Café — landing page

One-page site for Levant Bakery & Café, 6518 Martway St, Mission, KS. Built with Next.js 16 (App Router), Tailwind CSS v4, and no animation library. The page is prerendered as static HTML.

## Run locally

The parent folder name contains `&`, which breaks `npm run …` on Windows (cmd.exe treats `&` as a command separator). Call Next directly instead:

```powershell
node node_modules/next/dist/bin/next dev -p 3100
node node_modules/next/dist/bin/next build
```

On macOS, Linux or Vercel, `npm run dev` / `npm run build` work as usual.

## Where things live

- `lib/site.ts`: every business fact (hours, holiday closures, address, email, links, Google rating, reviews, menu items, drinks). Edit this file to update the page.
- `lib/hours.ts`: the open/closed logic, always computed in America/Chicago time so visitors in other time zones see the right status.
- `components/`: one file per section (hero, story, menu, cafe, reviews, orders, visit, instagram, footer).
- `public/images/`: photos from the café's Instagram and Google Business Profile, resized for the web.
- `app/fonts/`: self-hosted Cormorant (display, matches the LEVANT wordmark) and Jost (body and labels).

## Before going live

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain. It's used for the canonical URL, Open Graph, the sitemap and structured data.
2. Confirm the menu descriptions and drink notes in `lib/site.ts` with the owner. The item names come from their Instagram captions; the one-line descriptions were written for the site.
3. Remove past dates from `closures` in `lib/site.ts` (Thanksgiving 2026 is listed).
