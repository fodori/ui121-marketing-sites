# What is a composable CMS

- Source: https://www.hygraph.com/blog/composable-cms
- Fetched: 2026-09-23
- Status: ok

## Summary

Katie’s March 2025 piece, updated 12 June 2026, stacks three generations. A monolith ships templates and one application. Headless splits the frontend off and serves structured content by API. A composable CMS splits the backend too, so assets, search, or workflow can be swapped without a rewrite. Hygraph claims that shape, GraphQL-native and MACH-certified, and names Samsung, Telenor, and 2U as users of that approach.

Composable, in the post, means best-of-breed tools that are API-first, not a bigger suite.

## Key facts

- MACH Alliance is cited as a certification of microservices, API-first, cloud-native, and headless. The post notes that composable marketing claims are wider than that certification.
- Example swap: start on the built-in media library, later point video at a specialist DAM via APIs.
- Monoliths are defended for simple sites and criticised for cascade failures when one feature changes.

## How it works

Content is modular components. Each backend capability is a service with its own API. The frontend composes content, commerce, and personalisation. Replacing one service is an integration change, not a migration of the whole CMS.

## Implications for uiaas.uk / ui121

Buyers already hear “composable” as the right to swap the UI layer. A UI service has to be that swappable piece: a clear API, no requirement that the rest of the stack be ui121, and a story for leaving. MACH language is familiar to this audience; use it only if the product actually meets it.
