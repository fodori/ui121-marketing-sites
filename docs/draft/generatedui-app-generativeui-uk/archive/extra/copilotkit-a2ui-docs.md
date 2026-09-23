# CopilotKit docs — A2UI setup

- Source: https://docs.copilotkit.ai/learn/generative-ui/specs/a2ui
- Fetched: 2026-09-23
- Status: partial
- Expanded from: source 09 (developer guide links CopilotKit’s A2UI spec pages)

## Summary

The URL the generative-ui guide and the examples repo cite for A2UI specs on CopilotKit was fetched on 23 September 2026. The page that returned is a CopilotKit product doc titled A2UI, not a copy of Google’s protocol. A second URL that the repo labels as Open-JSON-UI (`/learn/generative-ui/specs/open-json-ui` and a pydantic-ai variant) returned the same kind of A2UI setup page. So this note records the live CopilotKit A2UI integration doc. It does not record a distinct Open-JSON-UI specification; that gap is in extra/open-json-ui.md.

The live page describes A2UI as Google’s declarative, streaming, JSONL, platform-agnostic spec, and then shows how CopilotKit turns it on. Backend: pass `a2ui: {}` on CopilotRuntime (v2 handler). That applies A2UIMiddleware to registered agents, or to a named subset. Any A2UI output from the agent is rendered in chat without extra frontend code. Frontend: the renderer is on by default; an optional `a2ui` prop on `CopilotKit` overrides theme (`A2UITheme`). The docs say both halves are v2 entry points. The legacy runtime still forwards the `a2ui` option, but v2 is current. A Composer is linked for designing widgets. A related agent-spec page (fetched the same day from the Open-JSON-UI path, which served A2UI content) adds the three operations: createSurface first (catalog), updateComponents (the tree), updateDataModel (JSON Pointer paths). It also distinguishes dynamic schema (a secondary model generates layout and data via an injected `generate_a2ui` tool) from fixed schema (the tree is pre-authored JSON; the agent only streams data). Python helpers named: create_surface, update_components, update_data_model, render.

## Key facts

- Live page is integration docs, not the A2UI language spec (that remains a2ui.org).
- Runtime flag: `a2ui` on CopilotRuntime. Theme override on the React provider.
- Operations documented on the sibling page: createSurface, updateComponents, updateDataModel.
- Two modes: dynamic schema (injected generate_a2ui, secondary LLM) and fixed schema (data only).
- Docs generation: `@copilotkit/runtime/v2` and `@copilotkit/react-core/v2`.
- Cited Open-JSON-UI URLs currently serve this A2UI material. Status partial for “spec” completeness.

## How it works

The developer enables the middleware and optionally supplies a catalog. The agent emits A2UI operations, either because a side model designed a surface or because the application shipped a fixed tree and the agent fills the data model. The chat renderer paints the surface with the app theme. Without the flag or the catalog, operations fall through as ordinary tool results and do not become UI.

## Implications for generatedui / ui121

CopilotKit has productised the catalog-on-the-provider pattern: the host declares what may be drawn, and the runtime injects the tool. ui121 can do the same with its own blocks and still accept A2UI operations. Fixed schema is the enterprise mode (pixel-stable layouts, live data). Dynamic schema is the long tail. The broken Open-JSON-UI URLs are a warning not to send customers to those links as if a stable OpenAI spec lived there.
