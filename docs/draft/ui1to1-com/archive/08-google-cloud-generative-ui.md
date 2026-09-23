# Google Cloud — What is Generative UI?

- Source: https://cloud.google.com/discover/generative-ui
- Fetched: 2026-09-23
- Status: ok

## Summary

Google Cloud’s explainer defines generative UI as a front end that is constructed in real time. A large language model orchestrates layout, components, and charts from the user’s intent and the session, instead of a developer hard-coding every state. In practice the interface is an orchestration layer: it can rebuild a dashboard or spin up a small app for a request the static product never anticipated.

They motivate it with the “wall of text” failure. Models can plan and act, then collapse the result into paragraphs or markdown. A capable model’s natural output, they say, is a functional interactive experience. They cite evaluations where people strongly prefer generated interactive results over passive text, ordinary search, or markdown. Other gains they list: personalisation that fixed code cannot do from day one, faster delivery because the model creates and adjusts components, and scale to edge cases without a CSS change for every scenario.

The useful part is the spectrum of control. Static generative UI means the agent picks from a library of hand-built components: brand-safe and secure, visually limited. Declarative generative UI means the agent returns a structured schema, such as JSON, for cards, lists, and widgets: consistent, scalable, and still expressive. Open-ended generative UI means the agent emits raw HTML and CSS: maximum flexibility, with cross-site scripting and styling risk.

They name three ecosystem pieces. A2UI, an open-source Google toolkit, streams declarative JSON Lines across trust boundaries so the same agent output can render on web, Flutter, Android, and iOS without sending executable code. AG-UI, from CopilotKit, is a two-way protocol between an agentic front end and back end for state sync. MCP Apps is a Model Context Protocol extension: a tool can return UI as HTML inside a sandboxed iframe so a third party keeps its look inside an agent client.

Production advice covers least-privilege rendering of pre-approved components, testing intent and the presence of controls rather than pixel snapshots, streaming (JSONL) plus semantic caching to cut time-to-interactive, and accessibility baked into the schema so the renderer adds ARIA. Their own stack mention is the Agent Development Kit with native A2UI, Cloud Run, and Gemini Enterprise App as a governed client.

## Key facts

- Three patterns: static (component library), declarative (JSON schema), open-ended (raw HTML/CSS).
- A2UI: declarative JSONL, no executable code, multi-client (web, Flutter, Android, iOS).
- AG-UI: CopilotKit’s bidirectional agent front-end/back-end protocol.
- MCP Apps: UI as a sandboxed HTML resource returned by a tool.
- Traditional UI favoured for core workflows and settings; generative UI favoured for discovery and complex queries.
- Security, latency, non-determinism, and WCAG are called out as production gates.

## How it works

The model reads intent and context, then either selects a component, emits a schema, or emits code. The client renders. Declarative and static paths keep the renderer in charge of what can appear. Streaming lets the first part of the UI draw before the model finishes. Caching reuses a previous structure for a similar query. Tests assert that the right action exists and works, not that pixels match a screenshot. Accessibility is a property of the schema, applied automatically by component type.

## Implications for ui1to1.com / ui121

Google Cloud has published the architecture ui121 already sits in: declarative UI, a JSON description of cards and widgets, rendered by a trusted client. That is the one-to-one mechanism without the XSS risk of open-ended HTML. ui1to1.com can say “one interface per person” and point at this spectrum: the personal canvas is declarative, so it can change with the person and the moment while the component set stays the product.

MCP Apps shows the agent side rendering UI inside the chat client. ui121 is the complementary human side: the same class of structured UI, but as the person’s single always-connected surface, where approvals and work happen, not only as a widget inside someone else’s agent. A2UI’s “data, not code” line is a sentence marketers can paraphrase as JSONUI’s safety story. Streaming and schema-level accessibility are table stakes to mention, not features to invent.
