# Open Self Service — Composable frontends with Strapi and Next.js

- **Source:** https://www.openselfservice.com/blog/building-composable-frontends-with-strapi-and-nextjs
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Marcin Krasowski (Chief Architect, O2S), writing on 28 March 2025, explains how Open Self Service uses Strapi and Next.js so editors can compose customer-portal pages without breaking the design system. The problem is the usual CMS tension: editors want freedom, the product needs brand, accessibility, and UX rules. Their compromise is reusable blocks and templates, not a blank visual editor.

Content is three types. A Page is a route with a localised slug and a chosen template. A Template is a set of slots (top, left, right, bottom, or richer layouts). A Block is a reusable instance — a named FAQ or an invoice list — dropped into a slot so the same block is not copied per page. The invoice-list example shows the important split: some blocks are static copy, and some carry presentation config (column labels, which fields appear) while the rows come from a business API. Field keys are aligned with the TypeScript model so the CMS is mapping labels, not reimplementing billing.

Architecture is two deployable parts. The Next.js frontend renders. An API-harmonisation service (Nest.js) is the backend-for-frontend: it calls CMS and domain APIs, normalises them, and returns one payload. The frontend does not decide which backend to call. Krasowski states the principle directly: keep orchestration off the frontend so it mostly renders and handles interaction. On a page load the shell (nav, footer) renders from the first response, which also names the template and the block ids. Each block then fetches its own data through server components, with request memoisation so the same call is not repeated, and a client component owns local interaction.

Integrations are npm packages, so Strapi could be swapped for Contentful or Storyblok without rewriting the renderer. The article is a build log, not a market study. No end-user metric is given.

Section outline: why constrain editors; pages, templates, blocks; frontend versus API harmonisation; data flow; Strapi implementation; rendering with server components.

## Key facts

- Date and author: 28 March 2025, Marcin Krasowski, Open Self Service / O2S.
- CMS model: Page (slug + template), Template (slots), Block (reusable component instance).
- Example page: invoice list with balance summary; columns and labels configured in the CMS, values from an API.
- Two apps: Next.js frontend and Nest.js API-harmonisation server, deployed separately.
- Stated principle: the frontend should focus on rendering and interaction, not on choosing and orchestrating backend APIs.
- Swap path: CMS integrations as replaceable packages (Strapi, Contentful, Storyblok named).

## How it works

Editors assemble a page from an allowed template and allowed blocks. At runtime the BFF merges CMS structure with live data into a shape the renderer already understands. Server components stream each block. The client layer is thin: draw the JSX, hold component state, react to input. Orchestration, fan-out, and normalisation stay on the server. That is a content-driven UI with a fixed catalogue, which is server-driven UI in portal form.

> “One of our core principles is to minimize the amount of data logic (like orchestration) on the frontend.” — Marcin Krasowski, Open Self Service, 28 March 2025

## Implications for the one-UI domains / ui121

This is the “frontend as renderer” sentence behind a JSON canvas, written for customer portals. ui121 is the same split for employee work: a universal renderer, a payload that already knows which block to draw (page, form, chart), and backends that stay behind a harmonised contract. 1ui.uk can use the invoice list as a plain example — a table is not an app, it is a block with a schema — and then say every department’s task can be a block on one surface. The constraint Krasowski accepts (no total design freedom) is the governance story: one catalogue keeps the one UI coherent. Open Self Service still ships a portal framework. The domain claim is that the catalogue and the canvas are the product, not a CMS-specific Next.js app.
