# JSON Forms getting started

- Title: JSON Forms getting started
- Source URL: https://jsonforms.io/docs/getting-started
- Fetched: 2026-09-23
- Status: ok
- Parent: source 20

## Summary

The getting-started page is a seed-app pointer, not a conceptual guide. The recommended path is the React and Material UI seed: clone it, install with `npm ci`, run `npm run dev`. A README in that seed has the detail. Angular and Vue seeds exist as well. For a longer explanation the page sends you to the tutorial. The concepts (two schemas, renderers) live on the docs home and the architecture page, which are noted separately.

## Key facts

- Primary seed: React + Material UI.
- Install command shown: `npm ci`. Dev command: `npm run dev`.
- Other seeds: Angular, Vue.
- This URL does not include a schema example.

## How it works

You start from a working app that already wires schema, UI schema, and renderers, then replace the sample schemas. The framework is consumed as libraries inside that app, not as a hosted form builder.

## Implications for jsonapp.com / ui121

JSON Forms is a library you embed. ui121 is a product that already hosts the renderer. The comparison for a technical reader is: they clone a seed to see a form; a jsonapp.com user should open a viewer and paste a document. Offer a seed or a playground if you want the same time-to-first-form.
