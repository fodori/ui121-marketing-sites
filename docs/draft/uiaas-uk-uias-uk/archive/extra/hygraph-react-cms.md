# Choosing a React CMS

- Source: https://www.hygraph.com/blog/react-cms
- Fetched: 2026-09-23
- Status: ok

## Summary

A companion to the Nuxt guide, aimed at React teams. Traditional CMSs couple editing to a theme and struggle to feed a React web app plus iOS and Android from one store. A headless CMS exposes an API, leaves rendering to React, and lets content and engineering work apart.

The same buying criteria appear: latency and CDN, editor experience, REST versus GraphQL and SDKs, schema flexibility, price, hosting, integrations, security (GDPR, HIPAA, SOC 2), and support. Hygraph is the hosted GraphQL recommendation. The post also notes React’s own UI ecosystem (Material UI and others) as the presentation layer the CMS does not replace.

## Key facts

- React is framed as components plus optional Next.js, with Redux, routing, Vite, and Testing Library as the surrounding tooling.
- Headless benefit stated in the post: one content API for web, mobile, and even a voice client, without duplicate authoring.
- Performance claim is qualitative: the client can avoid extra renders because it fetches only the fields it needs.

## How it works

Authors publish structured entries. A React app queries the API and maps fields onto components the team built or imported. Preview and workflow stay in the CMS. The component library stays in the frontend repo.

## Implications for uiaas.uk / ui121

This split (CMS for data, React kit for UI) is exactly the gap. ui121 collapses the second half for task screens: the API returns the interface, not only the fields the interface must be handwritten around. Material UI remains what teams use when they insist on owning that second half.
