# AI Economy Website Deployment, SEO, GEO, and AI Operations Master Plan

## Document Purpose

This document is the execution plan for replacing the current WordPress site at `https://aieconomy.ai/` with a new AI-friendly website that is easier to maintain, easier to audit, and easier for AI agents to update directly.

It is written as an operating manual, not just a strategy note.

Use this document to decide:

- what stack to use
- where to host the site
- how to migrate from WordPress safely
- how to structure the site for SEO and GEO
- how to let AI agents manage content and improvements safely
- how to go live now, even before the final paid Vercel account is ready

## Executive Summary

### Final Recommendation

Use this stack:

- Registrar and DNS: `GoDaddy`
- Source control: `GitHub`
- Frontend framework: `Next.js 15`
- Routing and rendering: `App Router + React Server Components`
- Primary deployment platform: `Vercel`
- Content layer: `Markdown/MDX` first
- Optional CMS later: `Sanity`
- Automation layer: `Python scripts` and/or `n8n`
- SEO/GEO data layer: `JSON-LD`, `sitemap.xml`, `robots.txt`, `llms.txt`

### Recommended Operating Model

- Keep `GoDaddy` for domain registration and optionally DNS
- Stop using GoDaddy as the long-term application hosting layer
- Build the new site in `Next.js`
- Deploy the site on `Vercel`
- Store content in `Git + MDX` so AI agents can edit it safely
- Use GitHub pull requests and Vercel preview deployments for review
- Add `Sanity` only if a non-technical editing UI becomes necessary later

### Short Answer to the Main Decision

For your case, `Vercel` is the better choice than `Cloudflare Pages`.

Reason:

- you want the easiest possible setup for AI-agent-led site management
- you want the smoothest path for `Next.js`
- you want low-friction preview deployments, branch deploys, and rollback
- you want SEO and GEO handled in a predictable, code-first workflow

`Cloudflare` can still be used later as DNS, WAF, or CDN if needed, but it should not be the first-choice app hosting target for this website.

## Current Situation

### Live Site Today

The current live site at `https://aieconomy.ai/` is still a WordPress site.

Observed signals:

- WordPress JSON API is exposed through `wp-json`
- `robots.txt` is live
- `sitemap_index.xml` is live
- Yoast SEO is active
- Cloudflare is present in front of the site
- GoDaddy-managed WordPress hosting signals are present

This means the live site currently has a functional baseline for SEO, even if the editing and maintenance model is not ideal.

### New Staging Site Today

The current staging codebase in this repo is:

- `Vite + React + TypeScript`
- client-side routing with `react-router`
- built as a SPA

Observed SEO/GEO issues in the current staging implementation:

- `index.html` contains `noindex, nofollow`
- canonical tags are injected client-side, not server-side
- page metadata is not rendered in initial HTML
- the routing model is JS-first rather than search-first

This means the current staging app is not the right long-term production architecture for a serious SEO/GEO site.

## Goals

The replacement site must satisfy all of these requirements:

- easy for AI agents to audit and update
- easy for humans to review before publishing
- strong crawlability for Google and Bing
- strong interpretability for LLM crawlers and AI answer engines
- stable, clean information architecture
- easy future expansion into GEO pages, comparison pages, glossary pages, and insights
- low operational friction for title updates, schema changes, redirects, and content refreshes
- safer than WordPress for long-term maintenance

## Final Architecture

### Layer 1. Domain and DNS

Use `GoDaddy` for:

- domain registration
- optional DNS management

Do not use GoDaddy as the long-term application platform for the new site.

### Layer 2. Application Framework

Use `Next.js 15` with:

- `App Router`
- `React Server Components`
- `generateMetadata`
- route-based layouts
- static generation where possible
- ISR where useful

### Layer 3. Content Storage

Phase 1 default:

- `Markdown/MDX` stored in the repo

Phase 2 optional:

- add `Sanity` only if you later need a visual editor for non-technical users

### Layer 4. Deployment

Use `Vercel`.

### Layer 5. Automation

Use:

- `GitHub` for PR workflows
- `Python scripts` and/or `n8n` for automation
- LLM APIs for content drafts, updates, schema generation, and audit recommendations

### Layer 6. Search and AI Readability

Publish and maintain:

- `sitemap.xml`
- `robots.txt`
- `llms.txt`
- JSON-LD structured data
- server-rendered metadata

## Why This Stack Is Better Than the Current Setup

### Better Than WordPress

Advantages over the current WordPress setup:

- cleaner content model
- fewer moving parts
- less plugin risk
- easier version control
- easier review process
- better AI-agent compatibility
- easier structured output
- better preview and rollback workflows

### Better Than the Current Vite SPA

Advantages over the current Vite setup:

- each page can return meaningful HTML immediately
- metadata is generated on the server
- canonical tags are not delayed until client runtime
- structured data can be guaranteed per route
- search crawlers do not need to rely heavily on JS rendering

## Vercel vs Cloudflare Pages

### Recommendation

Use `Vercel`.

### Why Vercel Wins for This Project

- best default deployment target for `Next.js`
- easiest preview deployment flow
- easiest environment variable management
- easiest branch deploys and rollbacks
- easiest path for AI agents to open PRs and generate previews
- lowest maintenance overhead for a small team

### When Cloudflare Pages Would Make Sense

Cloudflare Pages would make more sense if:

- the site were primarily static
- cost minimization were more important than workflow simplicity
- you were comfortable with more platform-specific maintenance
- you preferred using the Cloudflare ecosystem heavily

### Why I Still Would Not Choose Cloudflare First

For your site, the main priority is not just cheap hosting.

The real priority is:

- maintainability
- AI editing workflow
- reliable Next.js behavior
- clean previews and fast review cycles

That makes `Vercel` the better default.

## Vercel Pricing and Practical Use

### Can You Start on the Free Plan

Yes, you can start on `Vercel Hobby` immediately to get the site online fast.

### Important Limitation

`Hobby` is intended by Vercel for personal, non-commercial use.

That means:

- it is acceptable as a short-term transition path
- it is not the correct long-term home for a business production site

### Best Practical Approach

Use this sequence:

1. deploy now on your own Vercel account using `Hobby`
2. test the site on the `vercel.app` domain and any staging domain
3. when your boss's `Pro` account or team is ready, transfer the project
4. bind the production domain to the `Pro` team
5. switch the live DNS

### Can the Project Be Transferred Later

Yes.

Vercel supports moving a project from one team to another, assuming the permissions are correct.

This means you can:

- deploy now under your account
- build and test now
- transfer later to your boss's paid Vercel team
- keep the same project rather than rebuilding from scratch

### Recommended Policy

- short-term launch pressure: `Hobby` is acceptable
- long-term production: move to `Pro`

## CMS Decision: MDX First, Headless CMS Later

### My Recommendation

Do not start with a CMS unless you already know you need it.

Start with:

- `MDX`
- frontmatter
- Git version control
- route-driven rendering in Next.js

### Why MDX First Is Better for AI-Agent Work

- text structure is predictable
- AI can generate it cleanly
- metadata can live in frontmatter
- changes are diffable in Git
- PR review is easy
- you avoid early CMS complexity

### When to Add Sanity

Add `Sanity` later if:

- multiple non-technical people need editing access
- you want editorial workflows and scheduling
- you need reusable content modules in a UI

### Recommended Sequence

Phase 1:

- `Next.js + MDX + GitHub + Vercel`

Phase 2:

- add `Sanity` only if the team workflow demands it

## Site Rendering Strategy

Use a hybrid model.

### SSG

Use static generation for:

- homepage
- service pages
- about page
- methodology pages
- evergreen landing pages

### ISR

Use incremental static regeneration for:

- case studies
- blog and insight pages
- FAQ collections
- GEO pages
- comparison pages
- glossary pages

### SSR

Use SSR only when necessary, such as:

- pages that depend on request-time personalization
- pages that need request-specific logic

Default bias:

- prefer SSG
- use ISR where content updates regularly
- minimize SSR

## Information Architecture Recommendation

Use stable, descriptive URLs.

Recommended sections:

- `/services/`
- `/industries/`
- `/case-studies/`
- `/insights/`
- `/geo/`
- `/tools/`
- `/glossary/`
- `/about/`
- `/contact/`
- `/authors/`
- `/methodology/`

Recommended page types:

- homepage
- service pages
- industry pages
- comparison pages
- FAQ pages
- case studies
- expert/author pages
- glossary pages
- methodology pages
- GEO resource pages

## SEO and GEO Design Principles

### Traditional SEO Requirements

The site must have:

- server-rendered page titles
- server-rendered descriptions
- server-rendered canonical tags
- good internal linking
- valid XML sitemap
- valid robots rules
- stable 301 redirects
- strong Core Web Vitals
- accessible HTML structure

### GEO Requirements

The site must also be:

- easy for LLMs to parse
- easy to quote
- easy to attribute
- rich in clear entity information
- rich in explicit answers

Practical GEO content traits:

- clear H1/H2 structure
- direct answer paragraphs near the top
- FAQ sections
- list-style summaries
- concrete definitions
- methodology explanation
- source-backed statements where possible
- authorship and organization trust signals

## Structured Data Plan

Use JSON-LD on all appropriate pages.

### Minimum Structured Data Coverage

Homepage:

- `Organization`
- `WebSite`

Service pages:

- `Service`
- `BreadcrumbList`

Blog and insight pages:

- `Article`
- `BreadcrumbList`

FAQ pages:

- `FAQPage`

Case studies:

- `Article` or `CreativeWork`
- `BreadcrumbList`

Author pages:

- `Person`

### Why This Matters

Structured data helps:

- search engines interpret page meaning
- AI systems understand entities and relationships
- content appear more citation-ready

## robots.txt, Sitemap, and llms.txt Policy

### robots.txt

The production site should:

- allow important public content
- disallow admin-only or irrelevant paths
- include the sitemap URL

### Sitemap

Generate a fresh sitemap automatically from routes and content.

### llms.txt

Add:

- `/llms.txt`
- optionally `/llms-full.txt`

Use them to expose:

- the key sections of the site
- your important topic pages
- author or company facts
- high-value explainer and methodology pages

### Bot Access Philosophy

Do not accidentally block important crawlers.

Be careful with:

- WAF rules
- rate limits
- bot challenges
- JS challenges

## Content Model

### Recommended Content File Shape

For MDX content, store frontmatter such as:

- `title`
- `description`
- `slug`
- `datePublished`
- `dateModified`
- `author`
- `tags`
- `canonical`
- `schemaType`
- `draft`

### Why This Works Well

It lets AI agents safely generate:

- the content body
- metadata
- schema hints
- section structure

## AI Agent Operating Model

### What AI Agents Should Be Allowed To Do

Agents should be able to:

- audit existing pages
- suggest metadata improvements
- generate or update MDX content
- update internal links
- add FAQ sections
- generate JSON-LD
- update `llms.txt`
- create redirect suggestions
- create PRs for review

### What Should Still Require Human Review

Human review should approve:

- publish decisions
- brand-sensitive claims
- legal or compliance-sensitive wording
- changes to conversion-critical pages
- homepage messaging changes
- pricing or service description changes

### Recommended Workflow

1. AI agent audits the site
2. AI agent opens a GitHub PR with suggested changes
3. Vercel creates a preview deployment
4. human reviews content, layout, and metadata
5. PR is merged
6. Vercel deploys to production

## Audit System for Ongoing SEO and GEO

Create a repeatable audit process.

### Weekly Audit

- broken links
- missing metadata
- missing schema
- redirect issues
- content freshness
- page speed regressions

### Monthly Audit

- internal linking opportunities
- FAQ expansion opportunities
- GEO opportunity pages
- comparison page opportunities
- keyword coverage gaps
- crawl/indexing issues in Search Console

### Quarterly Audit

- full content pruning review
- information architecture review
- redirect map cleanup
- schema coverage review
- brand authority and citation review

## WordPress Migration Strategy

The migration must protect existing SEO value.

### Primary Rule

Do not launch the new site without a URL mapping plan.

### Migration Tasks

You need to:

- inventory all current live URLs
- identify all indexed pages
- identify high-traffic pages
- identify pages with backlinks
- decide which pages will be kept, merged, replaced, or removed
- create a `301 redirect map`

### Redirect Categories

Each current WordPress URL must fall into one of these categories:

- direct equivalent exists on new site
- consolidated into another page
- intentionally retired and redirected to the closest relevant page

### Things Not To Do

Do not:

- change all URLs casually
- delete important pages without redirects
- launch without validating redirect behavior

## Recommended Migration Timeline

### Phase 0. Decision and Setup

Tasks:

- confirm stack choice
- confirm Vercel as deployment target
- confirm GitHub repo structure
- confirm content model

Deliverable:

- approved architecture

### Phase 1. Build the New Production Architecture

Tasks:

- create `Next.js` app
- migrate layouts
- migrate pages
- establish metadata generation
- establish content collections
- add sitemap and robots generation
- add schema generation

Deliverable:

- production-capable staging environment

### Phase 2. Content and URL Mapping

Tasks:

- export WordPress URLs
- map old URLs to new URLs
- decide final IA
- write missing pages

Deliverable:

- redirect map and final page inventory

### Phase 3. SEO and GEO Hardening

Tasks:

- validate all metadata
- validate schema
- validate internal links
- add FAQ sections
- add llms files
- optimize page performance

Deliverable:

- launch-ready site

### Phase 4. Pre-Launch QA

Tasks:

- preview all key routes
- validate canonical tags
- validate redirects
- validate structured data
- validate robots and sitemap
- test forms and CTAs
- test mobile and desktop rendering

Deliverable:

- signed-off launch checklist

### Phase 5. Launch

Tasks:

- point DNS to Vercel
- activate production domain
- monitor for errors
- keep WordPress available temporarily as fallback

Deliverable:

- new site live at `aieconomy.ai`

### Phase 6. Post-Launch Monitoring

Tasks:

- submit sitemap
- monitor 404s
- monitor indexing
- monitor performance
- monitor crawl access

Deliverable:

- stabilized production site

## Immediate Deployment Plan If You Need To Go Live Soon

This is the recommended practical path if the boss's paid account is not ready yet.

### Step 1

Deploy the site now using your own Vercel account on the `Hobby` plan.

### Step 2

Use:

- Vercel preview URLs
- the `vercel.app` domain
- optionally a temporary staging subdomain

### Step 3

Complete:

- layout QA
- content QA
- metadata QA
- schema QA
- redirect planning

### Step 4

When your boss's `Pro` team is available:

- transfer the Vercel project to that team

### Step 5

After transfer:

- reconnect any required integrations
- re-check env vars
- confirm domain settings

### Step 6

Point the production domain to the new Vercel project and go live.

## Vercel Project Transfer Plan

When moving from your account to your boss's account or team:

### Preconditions

- you are owner or have sufficient rights on the source project
- you are added to the destination Vercel team
- GitHub access is available where needed

### During Transfer

Check:

- environment variables
- domain bindings
- deployment settings
- Git connection
- branch protection expectations

### After Transfer

Validate:

- preview deploys still work
- production deploy works
- domain verification is healthy
- redirects and metadata still work

## GoDaddy Role Going Forward

### Keep GoDaddy For

- domain registration
- optional DNS management

### Stop Using GoDaddy For

- WordPress as the primary application platform
- long-term app hosting

### Clean Final Model

- `GoDaddy` manages the domain
- `Vercel` runs the application
- optionally `Cloudflare` sits in front later if needed

## Cloudflare Role Going Forward

Cloudflare is optional, not required on day one.

Useful later for:

- DNS
- WAF
- CDN
- bot management

### Warning

If Cloudflare is used, make sure it does not block:

- search engine crawlers
- AI search crawlers
- important public page access

## Production Launch Checklist

Before launch, confirm all of the following:

- all key pages exist
- all production metadata is present
- no `noindex` remains on indexable pages
- canonical tags are correct
- sitemap is valid
- robots file is valid
- JSON-LD validates
- redirects are configured
- forms work
- analytics work
- Search Console is ready
- the domain is ready to point to Vercel

## Post-Launch Checklist

Immediately after launch:

- test homepage
- test top service pages
- test case study pages
- test contact forms
- test 301 redirects
- test sitemap
- test robots
- test structured data output

Within the first week:

- submit sitemap in Search Console
- review crawl stats
- review indexing
- fix 404s
- review performance

## Content Expansion Strategy After Launch

After the site is stable, grow using a predictable publishing system.

Recommended growth areas:

- service detail pages
- industry pages
- FAQ clusters
- GEO audit content
- AI visibility explainers
- comparison pages
- glossary pages
- case studies

## Recommended Repo Structure

One practical structure:

```text
app/
components/
content/
  services/
  insights/
  case-studies/
  geo/
  glossary/
lib/
  seo/
  schema/
  content/
scripts/
public/
  robots.txt
  llms.txt
```

## Technical Build Recommendations

Recommended implementation details:

- use route-based metadata with `generateMetadata`
- centralize schema helpers in `lib/schema`
- centralize content parsing in `lib/content`
- centralize SEO utilities in `lib/seo`
- generate sitemap from content collections and static routes
- keep structured data composable and reusable

## Risk Register

### Main Risks

- losing SEO equity during migration
- launching before redirect mapping is ready
- carrying over current staging SEO weaknesses into production
- overcomplicating the stack too early with unnecessary CMS or infra choices
- blocking crawlers through Cloudflare or security rules

### Mitigation

- build in `Next.js` rather than shipping the current SPA as-is
- use Vercel for predictable deployment
- create redirect mapping before launch
- keep the first version simple
- review bot access policies carefully

## Final Decision Summary

### What To Do

- keep `GoDaddy` for domain registration
- use `Vercel` for app hosting
- rebuild the site in `Next.js`
- use `MDX` first
- add `Sanity` later only if needed
- let AI agents work through GitHub PRs

### What Not To Do

- do not keep the current Vite SPA as the long-term production architecture
- do not keep GoDaddy as the main app hosting layer
- do not launch without redirects
- do not overengineer the first version with too many systems

## The Exact Recommended Path For You

1. start rebuilding the site in `Next.js`
2. deploy immediately to your own `Vercel Hobby` account if needed
3. finish QA and SEO/GEO setup
4. transfer the Vercel project to your boss's `Pro` team later
5. bind `aieconomy.ai` to the production Vercel project
6. switch DNS from the old WordPress hosting
7. monitor and iterate using AI-agent audits

## References

- Vercel pricing: `https://vercel.com/pricing`
- Vercel account plans: `https://vercel.com/docs/accounts/plans`
- Vercel project transfer docs: `https://vercel.com/docs/projects/transferring-projects`
- Google JavaScript SEO basics: `https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics`
- Google dynamic rendering guidance: `https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering`
- Google structured data policies: `https://developers.google.com/search/docs/appearance/structured-data/sd-policies`
- Next.js rendering strategies: `https://nextjs.org/learn/seo/rendering-strategies`
- Cloudflare Pages documentation: `https://developers.cloudflare.com/pages/`
- Cloudflare Workers pricing: `https://developers.cloudflare.com/workers/platform/pricing/`
