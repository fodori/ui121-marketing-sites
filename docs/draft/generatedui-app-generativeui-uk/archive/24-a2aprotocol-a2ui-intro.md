# A2UI introduction — a2aprotocol.ai

- Source: https://a2aprotocol.ai/blog/a2ui-introduction
- Fetched: 2026-09-23
- Status: ok

## Summary

Milo’s introduction, 16 December 2025, restates A2UI for people already thinking about the Agent-to-Agent protocol. Agents generate interactive UI that renders natively on web, mobile, and desktop without running arbitrary code. The booking dialogue is the same inefficiency example as Google’s launch post: a string of clarifying questions versus a form with a date, a time, and submit. Remote agents in a multi-organisation mesh cannot touch the host UI, so they must send messages. HTML or JavaScript in iframes is described as heavy, off-brand, and awkward to secure. The alternative is a payload that is safe like data and expressive like code.

Messages travel over A2A, AG-UI, SSE, or WebSockets. The client renders with its own components. Three values: security via a trusted catalog; native feel without iframes, including styling, accessibility, and performance; portability of one JSON payload across Lit, Angular, React, Flutter, SwiftUI, and Jetpack Compose. Design principles: a flat ID list that models can stream and correct; framework-agnostic mapping; separation of structure, application state, and client rendering. The post is also clear about non-goals: A2UI is not a UI framework, not a replacement for HTML on ordinary websites, not a full styling system, and not web-only.

Concepts defined: a surface (dialog, sidebar, main view), a component, a data model components bind to, a catalog, and messages. The v0.8-style names in the example are surfaceUpdate, dataModelUpdate, and beginRendering.

Audiences: host-app developers who want brand control and third-party agents; agent developers who want forms and dashboards as generated output rather than as hand-built tools; platform builders who want an Apache 2.0 protocol that extends catalogs. When not to use it, according to the post: static sites (use HTML), text-only chat (use Markdown), remote widgets that should stay isolated (iframes, “like MCP Apps”), and a UI plus agent built together as one app (AG-UI / CopilotKit). React renderer was listed as “coming Q1 2026,” which later sources show has since shipped as `@a2ui/react` — treat the Q1 line as the state of this article, not the state of the ecosystem in September 2026.

Adoption stories repeat the Google launch quotes: Opal (hundreds of thousands of mini-app builders), Gemini Enterprise (forms, approval dashboards), Flutter GenUI SDK, AG-UI day-zero support, and internal Google agents. Community samples named: restaurant finder, contact lookup, component gallery.

The page ends with links to further A2A-site guides (a full A2UI tutorial, an RizzCharts dashboard guide, an Agent Gateway Protocol tutorial). Those are promotions on an article page, not a docs hub, so they were not expanded as a collection.

## Key facts

- Published 16 December 2025. Author credited as Milo.
- License reminder: Apache 2.0.
- Explicit “use MCP Apps / iframes” case: remote widgets that should not integrate with the client design system.
- Explicit “use AG-UI / CopilotKit” case: agent and UI built as one product.
- React renderer, in this Dec 2025 article: listed as coming Q1 2026.
- Real-world names: Opal, Gemini Enterprise, Flutter GenUI, CopilotKit.

## How it works

The agent emits JSON messages. The client has already registered a catalog and a renderer. Structure updates and data updates are separate, so the screen can fill in progressively. Actions go back to the agent on whatever return channel the transport provides. Styling is mostly the client’s job; the server does not own the design system.

Section outline: problem; trust challenge; message solution; worked booking JSON; three values and three principles; what it is not; glossary; three audiences; when to use and avoid; three integration paths; where it is used; ecosystem map versus host frameworks, MCP Apps, and ChatKit.

## Implications for generatedui / ui121

The “when not to use A2UI” box is a positioning gift. ui121 is not a static marketing site and not a text chat. It is the host that integrates agent UI into a brand system — the case this article says A2UI is for — while MCP remains the tool and data pipe, and iframes remain the escape hatch for a foreign widget. The Q1 2026 React note is stale relative to current packages; marketing should say React, Lit, Angular, and Flutter renderers exist, and cite a2ui.org for the version, not this blog’s calendar.
