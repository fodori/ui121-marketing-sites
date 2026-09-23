# Choosing a CMS for Nuxt

- Source: https://www.hygraph.com/blog/nuxt-cms
- Fetched: 2026-09-23
- Status: ok

## Summary

A buyer’s guide for teams whose frontend is Nuxt. The thesis is that a CMS replaces a custom backend for sites, catalogues, and ordinary create-read-update-delete work, and that only a headless CMS with an API fits Nuxt. A classic coupled CMS does not.

The selection criteria are performance and CDN, an editor UI, documented REST or GraphQL plus an SDK, flexible models, predictable pricing, SaaS versus self-host, integrations and locales, compliance, and support. Hygraph, Strapi, and Sanity are the worked examples.

## Key facts

- Nuxt is described as the Vue counterpart to Next.js: file routing, SSR, static generation, and client rendering.
- Strapi is cited with over 65,000 GitHub stars and a dedicated Nuxt module. Sanity is described via Studio, a content lake, GROQ, and its own Nuxt module.
- Hygraph’s pitch in the post is a hosted GraphQL API and dashboard, queried with Apollo from Nuxt.
- Cloud examples named: Hygraph and Contentful. Self-host example: Strapi.

## How it works

Model content in the CMS, then call it from Vue with the vendor’s module or a GraphQL client. Composables such as a query hook load data into components. The page render stays in Nuxt. The CMS never ships the UI.

## Implications for uiaas.uk / ui121

Framework-specific modules are how headless content reaches an app. A UI service needs an equivalent thin client, not a Nuxt module that still leaves layout in the repo. The checklist (SLA, locales, roles, exit from self-host) is the enterprise appendix for a `uiaas.uk` page.
