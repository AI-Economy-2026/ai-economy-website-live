# AI Agent Workflow for Safe Website Updates, Audits, and PRs

## Purpose

This document defines the standard workflow for using AI agents to safely maintain the AI Economy website.

It is designed to make AI useful without letting it make uncontrolled production changes.

This workflow covers:

- how AI agents should audit the site
- how AI agents should propose changes
- how changes should be reviewed
- how pull requests should be handled
- how deployments should happen
- what AI agents are allowed to change directly
- what always needs human approval

## Core Principles

Use these rules at all times:

- AI agents do not edit production directly
- all meaningful changes go through GitHub pull requests
- every PR must have a preview deployment
- content changes and structural changes are reviewed before merge
- SEO and GEO changes must be measurable and reversible
- production is only updated through approved merges

## Operating Model

The recommended system is:

1. AI agent audits the codebase or content
2. AI agent creates a branch
3. AI agent makes scoped edits
4. AI agent opens a PR with a clear summary
5. Vercel generates a preview deployment
6. human reviews the preview and the diff
7. approved PR is merged
8. production deploy happens automatically
9. post-launch checks confirm the update behaved as expected

## Roles

### AI Agent

The AI agent is responsible for:

- codebase audits
- content audits
- metadata audits
- schema audits
- internal linking suggestions
- drafting content updates
- implementing approved scoped changes
- opening PRs with clear rationale

### Human Reviewer

The human reviewer is responsible for:

- deciding what should be published
- checking brand fit
- checking factual accuracy
- checking legal or compliance-sensitive claims
- approving structural changes
- approving redirects and major SEO changes

### Production Owner

The production owner is responsible for:

- managing Vercel production settings
- managing DNS and domain cutover
- managing environment variables
- approving access and permissions

## Environments

Use three environments.

### Local

Used for:

- development
- refactoring
- content drafting
- debugging

### Preview

Used for:

- PR review
- stakeholder approval
- QA checks
- SEO and content verification

### Production

Used only for:

- approved releases
- validated changes

## Change Categories

Every AI task should be classified into one of these buckets before work starts.

### Safe Low-Risk Changes

Usually okay for AI to implement and send for review:

- copy edits
- typo fixes
- metadata improvements
- FAQ additions
- internal link additions
- schema additions
- image alt text improvements
- sitemap updates
- llms.txt updates

### Medium-Risk Changes

Require closer review:

- homepage copy changes
- navigation changes
- CTA changes
- page layout changes
- new landing pages
- new redirects
- content consolidation

### High-Risk Changes

Must be explicitly approved before implementation:

- domain changes
- robots.txt restrictions
- canonical rewrites across many pages
- deleting pages
- redirecting existing indexed URLs
- analytics changes
- legal page edits
- pricing or offer changes

## Allowed AI Actions

AI agents may:

- read the repo
- inspect metadata
- inspect content files
- compare layouts
- update content files
- update schema helpers
- update SEO metadata
- update internal links
- propose redirects
- write PR summaries
- generate audit reports

AI agents should not:

- merge their own PRs unless explicitly authorized
- change production DNS
- change Vercel production settings without approval
- delete major content without approval
- change robots rules without approval

## Branching Strategy

Use a clean branch per task.

Recommended branch naming:

- `feat/homepage-refresh`
- `feat/new-geo-page`
- `fix/metadata-canonicals`
- `fix/schema-faq`
- `audit/internal-linking-q2`

One branch should solve one clear problem.

Avoid mixing:

- layout redesign
- content refresh
- SEO fixes
- analytics changes

in the same PR unless there is a strong reason.

## Standard AI Task Flow

### 1. Intake

Before editing anything, the AI agent should identify:

- the page or area affected
- the intent of the task
- the risk level
- whether the task is content, SEO, GEO, UX, or technical

### 2. Audit

The AI agent should inspect:

- relevant routes
- current content
- existing metadata
- canonical behavior
- structured data
- internal links
- current CTAs

### 3. Proposed Scope

Before major edits, the AI agent should define:

- what files will change
- what outcome is expected
- what should stay untouched

### 4. Implementation

The AI agent should:

- make the smallest change that solves the problem
- preserve existing links and assets unless change is intentional
- avoid unrelated edits
- keep the write set narrow

### 5. Verification

Before opening a PR, the AI agent should validate:

- app still builds
- page renders correctly
- links still work
- metadata is correct
- schema still validates if touched

### 6. PR Creation

The PR should include:

- what changed
- why it changed
- affected pages
- risk notes
- any follow-up work

### 7. Review

The human reviewer checks:

- preview deployment
- layout quality
- copy quality
- SEO correctness
- conversion impact

### 8. Merge

Only after approval.

### 9. Post-Merge Check

Confirm:

- production deployed successfully
- the page loads
- metadata is correct in page source
- no obvious regression occurred

## Standard Audit Types

### Content Audit

Used to identify:

- outdated copy
- weak headings
- poor structure
- missing FAQs
- missing proof points

Output should include:

- findings
- recommended edits
- suggested priority

### Technical SEO Audit

Used to identify:

- missing titles
- duplicate descriptions
- missing canonicals
- missing schema
- broken internal links
- orphan pages
- redirect issues

### GEO Audit

Used to identify:

- pages with weak answer structure
- missing entity clarity
- weak citation readiness
- missing FAQ markup
- missing author or organization trust signals
- pages that should be split into clearer topics

### UX and Conversion Audit

Used to identify:

- weak CTA placement
- content overload
- poor section order
- unclear user path

## PR Template for AI Agents

Use this structure:

```md
## Summary
- Updated the homepage hero and GEO section copy
- Added FAQ schema to the GEO audit page

## Why
- Improve clarity for both users and AI crawlers
- Make the page more citation-ready

## Files Changed
- `src/pages/HomePage.tsx`
- `src/lib/schema.ts`

## Risk
- Low

## Checks
- Build passed
- Preview reviewed
- Internal links checked
```

## Review Checklist

Before merging, the reviewer should check:

- does the page look correct on desktop
- does the page look correct on mobile
- are all links valid
- are CTAs still correct
- is the copy on-brand
- is the metadata sensible
- is the change scoped correctly
- were unrelated files changed

## SEO/GEO Change Rules

### Metadata Changes

AI agents can propose:

- title changes
- meta description changes
- OG changes
- canonical fixes

But should avoid bulk changes across many pages without approval.

### Schema Changes

AI agents can:

- add missing schema
- improve existing schema
- add FAQ schema where content supports it

They should not:

- add misleading schema
- mark content as FAQ if it is not actually present on the page

### Internal Linking

AI agents can:

- add contextual internal links
- strengthen linking to important service pages
- improve linking between insight pages and money pages

They should avoid:

- spammy link stuffing
- repetitive anchor text abuse

## Homepage Change Rules

Because the homepage affects brand, SEO, and conversion at once:

- all homepage layout changes require preview review
- all homepage headline changes require human approval
- all homepage CTA changes require human approval
- homepage changes should be isolated in their own PR

## Redirect Rules

Redirects are sensitive.

AI agents may:

- propose redirect maps
- implement approved redirect files

AI agents should not:

- delete routes and add redirects without approval
- change existing production redirects without review

## Content Creation Workflow

For new SEO or GEO pages:

1. AI agent identifies opportunity
2. AI agent proposes page topic and URL
3. human approves topic and angle
4. AI agent drafts content in MDX
5. AI agent adds metadata and schema
6. AI agent links the page internally
7. PR is reviewed
8. page is merged and deployed

## Weekly Workflow

Recommended weekly cadence:

### Monday

- check Search Console issues
- review 404s
- review broken links

### Tuesday

- AI agent runs content freshness audit
- AI agent proposes metadata and FAQ improvements

### Wednesday

- implement 1 to 3 approved low-risk improvements

### Thursday

- review preview deployments
- merge approved PRs

### Friday

- record what changed
- monitor performance and indexing

## Monthly Workflow

Recommended monthly cadence:

- run GEO audit
- identify missing comparison pages
- identify missing glossary pages
- refresh weak service pages
- review schema coverage
- review internal linking opportunities

## Quarterly Workflow

Recommended quarterly cadence:

- audit site architecture
- review redirect rules
- review which pages deserve consolidation
- review top landing pages for conversion improvement
- review authority and trust pages

## Security and Safety Rules

Use these controls:

- least-privilege access
- separate preview and production roles
- no direct production edits by default
- no secret values committed to Git
- env vars stored in Vercel, not in the repo

## Definition of Done

A task is only complete when:

- the intended change is implemented
- the app still builds
- the preview works
- the reviewer understands the purpose of the change
- the PR is approved
- the production deployment is healthy

## Recommended Tooling Stack

Recommended supporting tools:

- `GitHub` for source control and PR review
- `Vercel` for preview and production deploys
- `Google Search Console` for indexing and crawl visibility
- `GA4` for traffic and conversion checks
- `Python` or `n8n` for recurring audits and content workflows

## Suggested AI Task Types

Good recurring AI jobs:

- `metadata-audit`
- `schema-audit`
- `internal-link-audit`
- `faq-expansion`
- `content-refresh`
- `geo-opportunity-scan`
- `homepage-copy-review`
- `redirect-check`

## Final Rule

The website should operate on this principle:

AI can prepare, audit, draft, and implement scoped changes.

Humans approve what goes live.
