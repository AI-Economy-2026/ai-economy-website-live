# Content Layer Guide

This folder is the default editing surface for copy, navigation, footer links, and page-level structured content.

## Edit here first

- `homepage.ts`: homepage section copy, CTA labels, social links used by the homepage
- `products.ts`: product and service data used by product pages and cards
- `site.ts`: site-wide brand settings, footer links, shared navigation, contact URLs
- `legal.ts`: privacy and terms page content

## Hardening rule

When content changes do not require a layout or interaction change, update `src/content/*` first instead of hardcoding copy into page components.

## Before opening a PR

Run:

```bash
npm run typecheck
npm run check:content
npm run build
```

If a content update requires new links or new product ids, keep labels unique and make sure every referenced product id exists in `products.ts`.
