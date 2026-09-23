# Hygraph Astro content loader

- Source: https://www.hygraph.com/blog/introducing-hygraph-astro-content-loader
- Fetched: 2026-09-23
- Status: ok

## Summary

Bryan, Hygraph’s head of developer relations, announces a loader for Astro’s content layer after Astro opened that layer to custom sources (the post says Astro v15). Instead of fetching Hygraph on every page, a project defines a collection once, validates the payload, and has the data at build time.

The loader is a convenience on top of a headless API. It does not move rendering into Hygraph.

## Key facts

- One configuration per content type, shared by pages.
- Validation is described with Zod, including a minimum title length in the example.
- Default Astro path is static HTML; server rendering still exists. The post claims content-layer pages beat per-page fetches.
- Roadmap mentioned: incremental builds and better caching. Feedback is invited on GitHub.

## How it works

Install the loader, declare a collection with Astro’s content API, point it at Hygraph, and optionally schema-check the response. Pages query the collection the same way they query local files. The site still builds and deploys as an Astro site.

## Implications for uiaas.uk / ui121

Static content loaders are the opposite of a live UI service: data is frozen at build. ui121’s mobile and task clients need the request-time schema, not a build-time copy. The Zod check is still the right idea: validate the payload before the renderer trusts it.
