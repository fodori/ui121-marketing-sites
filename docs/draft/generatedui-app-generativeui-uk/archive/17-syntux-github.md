# syntux source repository

- Source: https://github.com/puffinsoft/syntux
- Fetched: 2026-09-23
- Status: ok

## Summary

The repository default branch is `master`. A fetch of `main/README.md` returned 404; the project metadata and README were taken from the GitHub repository page, the npm package `getsyntux`, and the v1.0.0 release. License: MIT. Stars observed: about 484, with about 20 forks. Homepage linked from the repo: https://getsyntux.com. Author credit on npm: ColonelParrot. Package created December 2025; v1.0.0 published 16 May 2026. npm weekly downloads at the time of the registry snippet were in the single digits, so this is an early product, not a mass install base.

The README’s mechanism: syntux does not generate HTML or JSX source, and it does not hardcode the data into the layout. It generates a JSON DSL called the React Interface Schema (RIS). The schema binds to properties of the value and has built-in iterators, so a list stays a loop instead of a copy of every row. That is why a large array is claimed to cost the same generation as a small one. Before v0.2 the schema was a deep tree. From v0.2 it is a flat list of objects with `id` and `parentId`, which is what allows progressive streaming. Each object describes an element or component, props, and those ids. A `__ForEach__` type is the iterator, with a `source` prop pointing at a field such as `authors`.

API surface: one React component, aimed at Next.js, React Router / Remix, and Astro. Props discussed across the README and release: `value`, an endpoint or model, `hint`, custom `components`, `cached`, `skeletonize` for large arrays, and `onGenerate`. v1.0.0 moved CLI logic to `@getsyntux/cli` (`npx @getsyntux/cli init`), left the core package with a single dependency (`ai`), and replaced `onErrorFallback` with `onError`. The repo is a monorepo with CLI under `/cli`.

Frameworks supported, per the README: Next.js, React Router / Remix, Astro.

## Key facts

- MIT license. v1.0.0 on 16 May 2026. ~484 stars.
- Default branch: master (no README on main).
- RIS: flat JSON list, `id` / `parentId`, bindings, `__ForEach__` iterators.
- Flat list since v0.2, for streaming. Earlier schema was a nested tree.
- CLI: `npx @getsyntux/cli init`. Core dependency named: `ai`.
- Explicit non-goals: generating source code; hardcoding values into the schema.

## How it works

The model streams JSON objects. The client attaches each object to its parent as it arrives and resolves bindings against the current value. Custom React components are allowlisted by being passed in. Iterators keep repeated UI out of the token stream. Cache stores the schema. Errors surface through `onError`. Nothing in the design executes model-written JavaScript as the page.

## Implications for generatedui / ui121

The flat id/parent list is the same idea as A2UI’s adjacency list, arrived at for websites rather than agent chat. ui121 can cite that convergence without adopting syntux: models do better with flat, bindable component lists than with nested markup. The MCP gap remains. syntux has no tool protocol, no multi-agent transport, and a tiny install base. generatedui can position as that runtime: RIS-like or A2UI-like payloads, pre-built blocks, plus MCP so the data behind `value` comes from tools rather than from a prop the page already held.
