# syntux product site

- Source: https://getsyntux.com/
- Fetched: 2026-09-23
- Status: ok

## Summary

syntux presents itself as a way to build generative interfaces for the web with a single React component, `GeneratedUI`. The props highlighted on the homepage are a `value` (the data), a `hint` (how the UI should look), a `components` list, and an optional `cached` flag. The promise line is that the LLM describes the UI with JSON and syntux does the rest, summarised as robust, flexible, and secure.

The format is named React Interface Schema, a JSON DSL. The site is explicit that the library is optimised for websites, not chatbots. A dashboard mock on the page shows a generated analytics view: revenue copy, a churn figure of 2.1% as sample content, a user table, and a monthly revenue figure of $48,291. Those numbers are illustrative UI, not company metrics.

Feature tabs: streamable (components appear as they generate), cacheable (reuse a generated interface), consistent, and reactive. The call to action is to read the docs and start from one command. Framework logos imply Next.js, React Router, and Astro support, which the GitHub release notes confirm. Docs live at docs.getsyntux.com. The docs introduction, fetched alongside the homepage, says syntux generates UI to display data, and that an array of 10,000 items costs the same generation as an array of 10 because the schema binds and iterates instead of unrolling every row. It also frames three layers of website personalisation — function, content, and interface — and claims the interface layer is the unsolved one.

License and version are not on the marketing homepage; the repository note (source 17) records MIT and v1.0.0.

## Key facts

- Component: `GeneratedUI` from `getsyntux/client` (homepage import path).
- Inputs: value, hint, components, cached.
- Format: React Interface Schema (JSON DSL).
- Positioning: websites, not chatbots; streamable; cacheable; reactive.
- Docs: https://docs.getsyntux.com/
- Sample figures on the marketing mock ($48,291, 2.1% churn, 18% revenue growth) are demo copy.

## How it works

The application passes data in. A model writes a JSON description of elements, props, and parent links, bound to fields of `value` rather than with the data pasted into the tree. The client walks that description and renders React, including components the developer supplied. Streaming displays the tree as objects arrive. Caching stores the description so a later value can reuse the layout. The site does not claim the model emits HTML.

## Implications for generatedui / ui121

syntux is the closest packaged product to ui121’s thesis: JSON in, your components out, built for pages rather than a chat transcript. The differentiator to stress is MCP and multi-host agents. syntux is a React website library. ui121 can be the runtime for agent-driven tasks across a block catalog, including the same “bind the layout, don’t unroll the rows” efficiency. generatedui.app should not pretend syntux does not exist; it should say the website case is one surface, and MCP-connected workflows are the rest.
