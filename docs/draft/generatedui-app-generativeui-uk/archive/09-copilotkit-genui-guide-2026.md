# The developer’s guide to generative UI in 2026 — CopilotKit

- Source: https://www.copilotkit.ai/blog/the-developer-s-guide-to-generative-ui-in-2026
- Fetched: 2026-09-23
- Status: ok

## Summary

Anmol Baranwal and Nathan Tarbert, 29 January 2026, argue that agents improved at planning while interfaces stayed chat-shaped. Generative UI, in their definition, means parts of the interface are generated, selected, or controlled by an agent at runtime. Specs they name as the practical route are A2UI, Open-JSON-UI, and MCP Apps. The shorthand they offer is: LLM output becomes a live, interactive UI. Examples: a travel question becomes itinerary cards plus a map; a comparison becomes a sortable table.

They sort implementations by how much freedom the agent has:

1. Static (they also say high control, low freedom), streamed via AG-UI. Developers pre-build components. The agent only chooses which one appears and which data it receives. CopilotKit’s `useFrontendTool` binds a render function to tool phases (in progress, executing, complete). A weather card is the example. The agent never invents layout.
2. Declarative (shared control), via A2UI and Open-JSON-UI. The agent returns a structured description — cards, lists, forms — and the frontend renders it inside its own constraints. A2UI is described as JSONL from Google. Open-JSON-UI is described as an open standardisation of an internal OpenAI declarative schema. The A2UI how-to on the page uses three envelopes the model is taught with an example: surfaceUpdate (components), dataModelUpdate (state), beginRendering (the signal to paint). A composer can generate the example instead of hand-writing it. The client uses `createA2UIMessageRenderer` and passes it as `renderActivityMessages`. The same pattern is said to apply to an Open-JSON-UI payload whose type is `open-json-ui` and whose spec lists components such as a card.
3. Open-ended (low control, high freedom), via MCP Apps. The agent returns a whole surface, often HTML or an iframe. The host mostly contains it. The post quotes the idea that traditional MCP tools return text, images, resources, or structured data, while MCP Apps let a tool declare an interactive UI the host renders in place. Trade-offs named: security, performance, inconsistent styling, weak portability off the web. CopilotKit wires this with `MCPAppsMiddleware` and a list of MCP server URLs, plus a stable `serverId`.

AG-UI is the layer under all three, not a fourth spec. It carries tool lifecycles, clicks and form submits, agent state, and coordination. Static mode signals lifecycle so the app renders a known component. Declarative mode carries the spec plus state. Open-ended mode coordinates a reference to external UI. Because the protocol sits underneath, one runtime can host more than one pattern.

Playground and code called out: go.copilotkit.ai/gen-ui-demo and github.com/CopilotKit/generative-ui-playground. The post also points at Google’s research blog for the free-form end of the spectrum.

Closely linked spec pages (A2UI, Open-JSON-UI, MCP Apps, and the generative-ui explainer) are saved under archive/extra/. The live Open-JSON-UI doc URLs on CopilotKit, when fetched on this date, resolved to A2UI documentation; that mismatch is recorded on the extra note.

> “Generative UI = LLM output → live, interactive UI” — Baranwal and Tarbert, CopilotKit, 29 Jan 2026

## Key facts

- Date: 29 January 2026. Authors: Anmol Baranwal, Nathan Tarbert.
- Three patterns: static via AG-UI tools; declarative via A2UI and Open-JSON-UI; open-ended via MCP Apps.
- Static API name: `useFrontendTool`, with status inProgress / executing / complete.
- Declarative A2UI envelopes in the tutorial: surfaceUpdate, dataModelUpdate, beginRendering (the v0.8-style trio).
- Open-ended API name: `MCPAppsMiddleware`, HTTP MCP server, `serverId`.
- Demo: go.copilotkit.ai/gen-ui-demo. Repo: CopilotKit/generative-ui-playground.

## How it works

The agent run is an AG-UI event stream. For static UI, a frontend tool’s render prop switches on lifecycle status and mounts a component the developer wrote. For declarative UI, the agent is prompted with a schema and an example surface, then streams JSON the renderer understands; theme stays in the client. For MCP Apps, middleware connects to a server that declares a UI resource; the chat embeds that resource. The post’s recommendation is to implement one pattern and notice which problem it actually fits, rather than treating generative UI as a single abstraction.

Section outline: definition and why chat fails; three patterns with implementation sketches; how AG-UI maps onto each pattern.

## Implications for generatedui / ui121

This is the survey to steal structure from, not sentences. ui121’s product is pattern 1 and the safe half of pattern 2: pre-built blocks, plus a declarative catalog when the long tail of layouts should not each be a bespoke component. Pattern 3 (iframe / free HTML) is the contrast case — useful for embedding someone else’s app, wrong as the core of a branded runtime. Open-JSON-UI belongs in the landscape sentence beside A2UI, with the caveat that its public spec page is unstable (see extra note). Marketing line: the agent chooses and fills blocks; it does not author the design system.
