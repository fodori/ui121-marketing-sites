# Generative UI — CopilotKit explainer

- Source: https://www.copilotkit.ai/generative-ui
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 09 (developer guide links this ecosystem page)

## Summary

CopilotKit’s explainer defines generative UI as any interface an agent partly or fully produces, rather than one authored only by people. The agent helps decide what appears, how information is grouped, and sometimes how the layout is composed. The page organises the topic into surfaces, two attributes (freedom and control), three pillars plus a special case, and an ecosystem table.

Surfaces: chat (the app brokers each turn; UI shows up as cards — Slack, Discord, Intercom, Zendesk, GitHub Copilot Chat, Notion); chat-plus (a canvas beside the chat — Figma AI, Notion, Google Workspace side panel, Replit); chatless (no conversation chrome; the app renders agent UI as a native feature — Microsoft 365 inline edit, Linear, Superhuman, HubSpot, Datadog). Where it shows up changes who is responsible for mediation.

Freedom runs from predefined components, through a constrained declarative vocabulary, to arbitrary HTML. Control asks who chooses the representation, the model or the programmer. Even open UI might return HTML a developer pre-wrote. Even controlled UI might be hard-triggered or chosen by the model.

Pillars, in the page’s words: controlled (formerly “static”) — engineers hand-craft components, agents pick and fill them; declarative — the agent returns a schema of cards, lists, forms, or widgets, portable across React, mobile, and desktop, but custom patterns may be impossible and hosts may interpret a spec differently; open (formerly “open-ended”) — the agent returns a full surface, often HTML, in a sandbox, which can be any one-off view but is slower, costlier, less predictable, and hard to brand. MCP Apps are a special case beside the pillars: a third-party surface in an iframe, the same apps built for ChatGPT and Claude stores, brought into your agent via an AG-UI handshake. Strength: no frontend work. Weakness: an app inside your app, web-first, weak fit for mobile or Slack.

The ecosystem table maps controlled to AG-UI and CopilotKit hooks, declarative to A2UI and Open-JSON-UI, open to sandboxed agent HTML, and MCP Apps to MCP-UI and ChatGPT apps. AG-UI is the common layer: interaction, context, events, state. CopilotKit is a client that uses it. A DeepLearning.AI course by Atai Barkai is the long-form version.

> “Generative UI rests on three pillars — controlled, declarative, and open — ordered by how much of the rendered interface the agent controls, from components the developer fully pre-builds to a canvas the agent fully owns.” — copilotkit.ai/generative-ui

## Key facts

- Three pillars plus MCP Apps as a special case, not a fourth kind of generation.
- Naming shift on the page: static to controlled; open-ended to open.
- Declarative examples named: A2UI, Open-JSON-UI.
- Chatless surface is a first-class product shape, not only in-chat cards.
- MCP Apps: iframe, third-party, aimed at super-hosts, poor on non-web.

## How it works

The agent run emits intents. The client either mounts a pre-built component, validates a declarative tree and mounts catalog widgets, sandboxes HTML, or loads an MCP App iframe. Shared AG-UI state and events keep those paths in one session. The programmer chooses the pillar per surface.

## Implications for generatedui / ui121

Use this page’s pillars as the public language, and park ui121 on controlled plus declarative. Chatless is the interesting surface for a task product: the agent is not a sidebar, the blocks are the application. MCP Apps stay the integration slot. Open HTML stays experimental. generatedui.app can repeat the freedom/control axes in one diagram and point the “pre-built blocks” claim at the left-hand side.
