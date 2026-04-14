# AI Economy Live Site Next.js App

This folder is the new `Next.js` live-site codebase intended to replace the current WordPress frontend later.

## Important

This app can be developed and deployed in parallel without affecting the current WordPress live site.

The current WordPress site and its admin panel remain usable until you:

1. connect the production domain to the new deployment
2. change DNS to point `aieconomy.ai` at the new Vercel project

## Recommended Migration Flow

1. Finish building this Next.js app
2. Push this folder to a dedicated new GitHub repo for the live site
3. Deploy that repo to a new Vercel project
4. Review with preview/staging URLs
5. Only after approval, switch production DNS

## Current Status

Included now:

- App Router scaffold
- site metadata base
- robots and sitemap scaffold
- llms.txt placeholder
- live-site homepage starter
- copied image assets needed for homepage

Still to migrate:

- service detail pages
- product detail pages
- toolkit pages
- privacy and terms content
- full schema coverage
- redirect map from WordPress URLs
