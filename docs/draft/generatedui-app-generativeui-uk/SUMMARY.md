# generatedui.app + generativeui.uk — Data-Driven UI + MCP / Generative UI (Runtime UI as Data)

*Marketing research brief for ui121. Researched 22 Sep 2026.*

## Domains at a glance

Both **generatedui.app** and **generativeui.uk** are currently **Squarespace "Coming Soon" parking pages** — no live product, no claims to analyse. They are domain plays on the generative-UI wave. The research value is therefore in the *category* they point at: the shift from free-form AI-generated HTML to **data-driven, pre-built-block generative UI** — where AI/agents emit a declarative JSON description of a UI (components + data bindings), and a trusted client-side runtime renders it with approved native widgets.

## Main goal of the space

Make the AI agent — not a designer — responsible for choosing and parameterising UI at runtime, while keeping rendering safe, fast, and brand-consistent. Instead of the model writing HTML/CSS/JS (fragile, insecure, slow), the model emits **structured data describing a UI tree** ("Card > Text > Button"), and the client renders it with pre-built components. UI becomes a wire format, not code.

## Problem today

- **Chat is a terrible surface for data.** Agents return text where a table, chart, map, or form is the right answer. Users paste tool output into spreadsheets. Generative UI fixes this by letting tools return rich interactive components (Vercel AI SDK, CopilotKit, AG-UI).
- **Free-form generated UI (v0/Lovable-style) doesn't solve the runtime problem.** v0 and Lovable generate *code artifacts* — great for building apps, wrong for *live agent interfaces*: unreviewable code, injection/security risk, no brand consistency, no guarantee the model produces valid markup. Google's own research line (GenUI in Gemini/Search) generates HTML/JS on the fly but explicitly treats this as frontier research.
- **Trust boundaries.** MCP servers can't safely ship arbitrary code into ChatGPT/Claude/host UIs. This is the exact problem A2UI ("how can AI agents safely send rich UIs across trust boundaries?") and MCP Apps / MCP-UI exist to solve: declarative data only, pre-approved component catalogs, sandboxed iframes.
- **Fragmentation.** Multiple competing specs (A2UI, MCP Apps/ext-apps, MCP-UI, Open-JSON-UI, AG-UI tools, AI SDK tool→component mapping, A2A transports). Hosts and tool builders must pick a rendering contract.

## How the approach helps

- **Pre-built blocks, not free-form HTML**: the agent can only use components from a client-approved catalog → no UI injection attacks, native look and feel, accessibility and theming for free (A2UI's "secure by design" + "framework-agnostic" pillars).
- **LLM-friendly**: flat, streaming JSON (A2UI's adjacency-list model) means models can build UI incrementally without perfect one-shot output; users see UI assemble in real time.
- **Bidirectional**: actions from rendered UI (buttons, forms, ChoicePicker) flow back to the agent as tool calls / A2UI `actionResponse` / AG-UI events — a true interaction loop, not a static snapshot.
- **Portable**: one agent response renders on React, Angular, Flutter, Lit, native mobile (A2UI renderers; AG-UI client integrations incl. Slack/Teams/React Native).
- **MCP-native**: MCP Apps lets a tool server ship UI with the tool; MCP-UI SDKs standardise resource→iframe/block rendering; A2UI rides on AG-UI CUSTOM events or A2A as transport.

## Cutting edge (Sept 2026)

- **A2UI v1.0 release candidate** (Google + CopilotKit, Apache 2.0): client→server RPC, action IDs, `application/a2ui+json` MIME type; shipping in Gemini Enterprise, Oracle AI Database MCP toolkit, Google ADK codelabs.
- **MCP Apps (modelcontextprotocol/ext-apps)**: official spec/SDK for UIs embedded in AI chatbots, served by MCP servers (~2.9k stars); supported in Vercel AI SDK ("MCP Apps" section) and OpenAI/Anthropic hosts.
- **AG-UI protocol** (~16k GitHub stars): event-based standard agent↔frontend bus, now with native A2UI support; biweekly working group; Slack/Teams channels SDK.
- **Google Research GenUI**: fully generated interactive HTML/CSS/JS experiences in Gemini app and Search AI Mode — the free-form pole of the "generative UI spectrum."
- **v0 & Lovable** at the "generate an entire app as code" pole: v0 = full-stack web app generation with templates; Lovable = 60M projects built, 1.2M new projects/week, enterprise infrastructure — proof that "describe it, get software" has mass-market pull.
- **Niche tooling**: syntux (`<GeneratedUI value hint>` — LLM picks from your React components via JSON-DSL, built for websites not chatbots); MCP-UI (5.2k stars); A2UI Composer/Theater visual playgrounds.

## ui121 fit

- ui121's premise — UI as **pre-built, data-driven blocks assembled at runtime** rather than hand-coded or free-form-generated HTML — is precisely the direction the majors have converged on (A2UI, MCP Apps, AG-UI, Open-JSON-UI). The domain names would ride a proven, fast-moving narrative.
- Positioning space: A2UI/MCP Apps are developer *specs*; hosts (Gemini Enterprise, ChatGPT, Claude) are closed; ui121 can be the **product/agency layer** — a branded block catalog + composer that makes agent-generated interfaces real for businesses (the "missing front end" for MCP servers and agents), across web/mobile via declarative JSON.
- Tension to manage: "generatedui" name invites confusion with v0/Lovable code generation; the differentiator is **runtime UI-as-data with pre-approved blocks** — safer, native, instant. Marketing must lead with that.
- Caveat: both domains are **empty parking pages** today — value is prospective/narrative only, and the spaces are moving quickly (A2UI hit v1.0 candidate while this research was written).

## Why brilliant

1. **It's the inevitable collapse of UI into data.** When any agent can describe a Card/Table/Chart tree, the marginal cost of a bespoke, correct interface per request goes to ~zero. Hand-crafted screens stop being the default; *composed data* does.
2. **Solves the actual blocker to AI-native software**: not capability, but *trust* — declarative catalogs turn "AI might inject code into your app" into "AI fills in your widgets." That's what makes enterprise adoption possible.
3. **Network-effect timing**: A2UI (Google), MCP Apps (Anthropic/OpenAI ecosystem), AG-UI (CopilotKit) all standardising within 12 months means the block-catalog layer is about to be a commodity dependency — whoever owns the composer/branding/catalog UX owns the developer relationship.
4. **It makes chat the wrong question.** The endpoint isn't a chatbot that sometimes shows a chart; it's applications whose entire surface is negotiated per-user, per-context at runtime — accessibility, localisation, and personalisation fall out for free.
5. **For ui121 specifically**: pre-built blocks are also a *design-system moat* — the same declarative payload renders on brand everywhere, so "generative" and "on-brand" stop being trade-offs.
