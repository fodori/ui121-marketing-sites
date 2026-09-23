# Introducing A2UI — Google Developers Blog

- Source: https://developers.googleblog.com/introducing-a2ui-an-open-project-for-agent-driven-interfaces/
- Fetched: 2026-09-23
- Status: ok

## Summary

On 15 December 2025 the Google A2UI team published the project. The post argues that generative models are already good at text, images, and code, and that the next job is a context-specific interface. A2UI is positioned as an early, open format for interoperable, cross-platform UI responses from agents — either generated on the fly or filled from a template. The same payload should render in different host apps through Lit, Angular, Flutter, and later frameworks. The client owns rendering and can fold the result into its own brand. Orchestrator agents and remote A2A sub-agents pass layouts as messages, not as executable code.

The restaurant-booking example is the concrete “why”: a text chat that asks day, then time, then lists seven slots is slower than a date picker, a time selector, and a submit button composed from a widget catalog. The landscaping example is a photo upload that becomes a bespoke form. A third example is the agent choosing a chart component and a Google Map component because the client advertised those custom widgets.

The post is explicit about the multi-agent mesh. Google, Cisco, IBM, SAP, and Salesforce agents are expected to collaborate without shared memory, which is why A2A went to the Linux Foundation. A remote agent cannot touch the host DOM. Iframes of HTML or JavaScript are described as heavy, visually foreign, and awkward to secure. The desired property is “safe like data, expressive like code.”

At publication the format was at v0.8, with working client libraries for Flutter, Web Components, and Angular. The post invites renderers, agent-library support, and samples. License stated: Apache 2.0.

Named production tracks inside Google: Opal (natural-language mini-apps, hundreds of thousands of builders; A2UI in the app-building flow), Gemini Enterprise (forms and approval dashboards for employee workflows), Flutter GenUI SDK (A2UI as the declaration format between server agents and the app’s own widget catalog), and internal “AI Powered Google” teams that want UI, not only text, between agents.

The ecosystem map in the post is the part marketers should keep:

1. Host-app UI pipes — AG-UI, Vercel AI SDK, Flutter GenUI SDK — handle state, history, and input. A2UI is the payload those pipes can carry, including from third parties. Direct A2A to a front end is supported; REST and other transports were “feasible but not yet available” at launch.
2. MCP Apps treat UI as a resource (a ui:// URI), usually pre-built HTML in a sandboxed iframe. A2UI is native-first: a blueprint of components that inherit host styling and accessibility, and that an orchestrator can read because the message is lightweight.
3. Platform kits such as OpenAI ChatKit optimise for one ecosystem. A2UI trades some agent-side styling freedom for host visual consistency across web, Flutter, and native mobile.

> “We needed a way to transmit UI that is safe like data, but expressive like code.” — Google A2UI team, Developers Blog, 15 Dec 2025

## Key facts

- Published 15 December 2025 by the Google A2UI team.
- Launch version called out: v0.8. Apache 2.0.
- Day-zero AG-UI compatibility, attributed to Atai Barkai (CopilotKit / AG-UI): AG-UI supports A2UI for declarative generative UI and handshakes with A2A.
- Quotes on the post from Dimitri Glazkov (Opal), Fred Jabbour (Gemini Enterprise), Vijay Menon (Dart/Flutter), James Wren (AI Powered Google).
- Restaurant-finder sample path in the post: A2UI repo, Gemini API key, ADK agent under samples/agent/adk/restaurant_finder, Lit shell under samples/client/lit/shell.
- GenUI SDK for Flutter documented at docs.flutter.dev/ai/genui.

## How it works

The agent emits a standard format as structured output, or hydrates a template. The JSON can travel over A2A or AG-UI. The client maps abstract components to native widgets and keeps a catalog of trusted components (Card, Button, TextField, plus advertised custom ones). Updates are a flat list of components with ID references, so the model can change part of the UI as the conversation continues instead of regenerating a whole document. Styling stays with the client.

Section outline of the post: the booking problem; trust boundaries and A2A; UI as a message sequence; three principles (security, incremental updates, portability); three-way ecosystem map (host pipes, MCP Apps, ChatKit); partner quotes; quickstart; future work.

## Implications for generatedui / ui121

Google’s own contrast — native catalog versus iframe resource versus platform-locked kit — is the positioning map for generatedui.app. ui121 sits with the native catalog: pre-built blocks, host brand, no arbitrary HTML. MCP still matters, because tools and data arrive that way; the interface contract can be A2UI-shaped JSON rather than an embedded page. The Opal and Gemini Enterprise examples are the enterprise sentence: agents that guide a workflow (data entry, approval) instead of answering in prose.
