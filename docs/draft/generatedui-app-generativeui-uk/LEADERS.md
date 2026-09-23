# LEADERS.md — Voice of the Market Leaders in Generative UI / AI-Driven UI / Server-Driven UI

Collected for ui121 (generative/data-driven UI + MCP, pre-built blocks). All quotes are verbatim excerpts from official blogs, announcements, specs, and docs. Each entry: name, website, real quotes with source URL, and a one-line note on the positioning language.

---

## 1. Google — A2UI (Agent-to-User Interface)
**Website:** https://a2ui.org · https://github.com/a2ui-project/a2ui

> "A2UI is an open-source project, complete with a format optimized for representing updatable agent-generated UIs and an initial set of renderers, that allows agents to generate or populate rich user interfaces."
— https://github.com/a2ui-project/a2ui (README)

> "A2UI enables AI agents to generate rich, interactive user interfaces that render natively across web, mobile, and desktop—without executing arbitrary code."
— https://a2ui.org/

> "A2UI solves the following problem: **how can AI agents safely send rich UIs across trust boundaries?** Instead of text-only responses or risky code execution, A2UI lets agents send **declarative component descriptions** that clients render using their own native widgets. It's like having agents speak a universal UI language."
— https://a2ui.org/

> "Declarative data format, not executable code. Agents can only use pre-approved components from your catalog—no UI injection attacks." / "Stream UI updates as they're generated. Users see the interface building in real-time instead of waiting for complete responses."
— https://a2ui.org/

**Note:** Google's framing is safety + declarative specs: agents send pre-approved component descriptions (catalogs) streamed as JSON — almost a direct statement of the ui121 "pre-built blocks + MCP" thesis ("We believe the future of UI is agentic").

---

## 2. OpenAI — Apps SDK (apps in ChatGPT)
**Website:** https://openai.com · https://developers.openai.com/apps-sdk

> "Today we're introducing a new generation of apps you can chat with, right inside ChatGPT... Apps in ChatGPT fit naturally into conversation... Apps respond to natural language and include interactive interfaces you can use right in the chat."
— https://openai.com/index/introducing-apps-in-chatgpt/

> "The magic of this new generation of apps in ChatGPT is how they blend familiar interactive elements–like maps, playlists and presentations–with new ways of interacting through conversation."
— https://openai.com/index/introducing-apps-in-chatgpt/

> "The Apps SDK builds on the Model Context Protocol (MCP)... It extends MCP so developers can design both the logic and interface of their apps. We've made the Apps SDK open source so that apps built with it can run anywhere that adopts this standard."
— https://openai.com/index/introducing-apps-in-chatgpt/

> "For ChatGPT users, apps meet you in the chat and adapt to your context to help you create, learn, and do more."
— https://openai.com/index/introducing-apps-in-chatgpt/

**Note:** OpenAI's voice is consumer-scale: "interactive interfaces right in the chat", MCP as the substrate, and UI/logic designed together by the developer, surfaced by the model "at just the right time."

---

## 3. Anthropic
**Website:** https://www.anthropic.com

> "MCP provides a universal protocol—developers implement MCP once in their agent and it unlocks an entire ecosystem of integrations."
— https://www.anthropic.com/engineering/code-execution-with-mcp

> "Code execution with MCP improves context efficiency... agents can load only the tools they need and process data in the execution environment before passing results back to the model."
— https://www.anthropic.com/engineering/code-execution-with-mcp

> "Presenting tools as code on a filesystem allows models to read tool definitions on-demand, rather than reading them all up-front." (progressive disclosure)
— https://www.anthropic.com/engineering/code-execution-with-mcp

> "One rule of thumb is to think about how much effort goes into human-computer interfaces (HCI), and plan to invest just as much effort in creating good _agent_-computer interfaces (ACI)."
— https://www.anthropic.com/engineering/building-effective-agents

**Note:** Anthropic's voice is protocol-first, not UI-first: MCP as the universal agent-to-tools layer and a coining of "ACI" — the discipline behind every UI an agent drives; relevance to ui121 is the MCP substrate and progressive disclosure.

---

## 4. Vercel — v0 + AI SDK generative UI
**Website:** https://vercel.com · https://v0.dev · https://ai-sdk.dev

> "Generative user interfaces (generative UI) is the process of allowing a large language model (LLM) to go beyond text and \"generate UI\". This creates a more engaging and AI-native experience for users."
— https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces

> "Generative UI is the process of connecting the results of a tool call to a React component."
— https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces

> "By passing the tool results to React components, you can create a generative UI experience that's more engaging and adaptive to your needs."
— https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces

**Note:** Vercel defines generative UI mechanically — the model calls tools, the developer maps tool results to pre-built React components (the "controlled" end of the spectrum).

---

## 5. Lovable
**Website:** https://www.lovable.dev

> "The rebrand from GPT Engineer to Lovable marks a new chapter, but the mission remains the same: democratizing software creation."
— https://www.lovable.dev/blog/2025-01-13-rebranding-gpt-engineer-to-lovable

> "Empowering users to build high-quality software faster without coding."
— https://www.lovable.dev/blog/2025-01-13-rebranding-gpt-engineer-to-lovable

> "Idea to app in seconds — Build apps by chatting with an AI."
— https://www.lovable.dev/ (site footer tagline)

> "Lovable has acquired Sutro... to make software easier to explain and easier to trust."
— https://www.lovable.dev/blog/lovable-acquires-sutro

**Note:** Lovable's voice is democratization through full app generation by chat ("idea to app in seconds"), not embedded generative-UI components — the consumer/app-builder end of the market.

---

## 6. CopilotKit
**Website:** https://copilotkit.ai

> "Generative UI refers to any user interface that is **partially or fully produced by an AI agent**, rather than authored exclusively by human designers and developers. Instead of the UI being hand‑crafted in advance, the agent plays a role in determining what appears on the screen, how information is structured, and in some cases even how the layout is composed."
— https://copilotkit.ai/generative-ui

> "The core idea is simple: as agents become more capable, an agentic application's UI itself becomes more of a dynamic output of the system — able to adapt, reorganize, and respond to user intent and application context."
— https://copilotkit.ai/generative-ui

> "Generative UI rests on three pillars — controlled, declarative, and open — ordered by how much of the rendered interface the agent controls, from components the developer fully pre-builds to a canvas the agent fully owns."
— https://copilotkit.ai/generative-ui

> "Declarative generative UI balances structure and flexibility by having agents return a structured specification rather than arbitrary UI code... agents emit a well-defined schema — such as a collection of cards, lists, forms, or widgets defined by a declarative standard."
— https://copilotkit.ai/generative-ui

**Note:** CopilotKit has the most explicit taxonomy: controlled (pre-built components) → declarative (structured spec from a block catalog) → open (agent HTML in sandbox) — with declarative/A2UI as their scalable middle ground.

---

## 7. LangChain
**Website:** https://www.langchain.com · https://blog.langchain.dev

> "In order for agentic systems to really reach their potential, this shift towards allowing AI to work in the background needs to happen... if agents are running ambiently in the background, there can be **many** agents handling multiple tasks simultaneously."
— https://blog.langchain.dev/ux-for-agents-part-2-ambient/

> "This approach moves the human from being \"in-the-loop\" to \"on-the-loop\". \"On-the-loop\" requires the ability to show the user all intermediate steps the agent took, allowing the user to pause a workflow halfway through, provide feedback, and then let the agent continue."
— https://blog.langchain.dev/ux-for-agents-part-2-ambient/

> "We are building with these types of UXs in mind. We checkpoint all states, easily allowing for human-on-the-loop observability, rewinding, and editing."
— https://blog.langchain.dev/ux-for-agents-part-2-ambient/

**Note:** LangChain's voice frames the UX problem from the agent's side — ambient agents, human-on-the-loop, observability and state checkpoints — and (via AG-UI) supplies the event protocol under generative UI.

---

## 8. AG-UI (Agent–User Interaction Protocol)
**Website:** https://ag-ui.com

> "AG-UI is an **open**, **lightweight**, **event-based** protocol that standardizes how AI agents connect to user-facing applications... it standardizes how agent state, UI intents, and user interactions flow between your model/agent runtime and user-facing frontend applications."
— https://ag-ui.com/

> "Agentic applications break the simple request/response model that dominated frontend-backend development in the pre-agentic era... Agents are **nondeterministic** and can **control application UI nondeterministically**."
— https://ag-ui.com/

> "Generative UI, static: Render model output as stable, typed components under app control." / "Generative UI, declarative: Small declarative language for constrained yet open-ended agent UIs; agents propose trees and constraints, the app validates and mounts."
— https://ag-ui.com/ (building blocks list)

> "A2UI is a generative UI specification - allowing agents to deliver UI widgets, where AG-UI is the Agent↔User Interaction protocol - which connects an agentic frontend to any agentic backend."
— https://ag-ui.com/

**Note:** AG-UI speaks in event-stream protocol language — agents as nondeterministic clients that send "UI intents" over a typed event stream; the app-side runtime validates and mounts what agents propose.

---

## 9. MCP-UI (→ MCP Apps)
**Website:** https://mcpui.dev · https://github.com/idosal/mcp-ui

> "MCP-UI is now standardized into MCP Apps! ... MCP Apps is the official standard for interactive UI in MCP. The MCP-UI packages implement the spec, and serve as a community playground for future enhancements."
— https://mcpui.dev/

> "Build rich, dynamic interfaces for AI tools using the MCP Apps standard."
— https://mcpui.dev/

> "All remote code executes in sandboxed iframes, ensuring host and user security while maintaining rich interactivity."
— https://mcpui.dev/

**Note:** MCP-UI's voice is "UI as a resource over MCP": interactive UI components shipped as MCP resources and rendered in sandboxed iframes — the origin of the MCP Apps standard OpenAI's Apps SDK builds on.

---

## 10. Airbnb — Server-Driven UI (Ghost Platform)
**Website:** https://medium.com/airbnb-engineering

> "That's essentially what SDUI does — we pass both the UI and the data together, and the client displays it agnostic of the data it contains."
— https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5

> "Airbnb's specific SDUI implementation enables our backend to control the data and how that data is displayed across all clients at the same time. Everything from the screen's layout, how sections are arranged in that layout, the data displayed in each section, and even the actions taken when users interact with sections is controlled by a single backend response across our web, iOS, and Android apps."
— https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5

> "The Ghost Platform (GP) is a unified, opinionated, server-driven UI system that enables us to iterate rapidly and launch features safely across web, iOS, and Android."
— https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5

> "Sections are the most primitive building block of GP. A section describes the data of a cohesive group of UI components, containing the exact data to be displayed — already translated, localized, and formatted."
— https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5

**Note:** Airbnb's voice is production-scale SDUI: UI + data delivered together as server-authored "sections" from a shared block catalog, rendered natively on every platform — the pre-LLM blueprint for generative UI.

---

### Common threads (for ui121 messaging)
- Everyone converges on **UI as data**: declarative component descriptions / specs streamed from an agent or server (A2UI, MCP-UI, Airbnb sections, CopilotKit declarative pillar, AG-UI "UI intents").
- **Safety via pre-built blocks** is the dominant framing: pre-approved component catalogs, sandboxed iframes, "no UI injection attacks" — exactly the ui121 pre-built-blocks + MCP angle.
- **Streaming progressive rendering** is described as a core UX promise ("users see the interface building in real-time").
- The market self-organizes into: protocol layer (AG-UI, MCP), spec layer (A2UI, MCP Apps, Open JSON UI), and application layer (OpenAI Apps, CopilotKit, Vercel AI SDK).

*Compiled 2026-09-22. Netflix TechBlog SDUI post was Cloudflare-blocked and not archived under its exact URL; Airbnb covers the SDUI practitioner voice.*
