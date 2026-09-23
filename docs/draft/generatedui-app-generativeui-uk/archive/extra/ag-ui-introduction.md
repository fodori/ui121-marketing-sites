# AG-UI introduction

- Source: https://docs.ag-ui.com/introduction
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 06 (AG-UI docs)

## Summary

The introduction defines AG-UI as an open, lightweight, event-based protocol: the bidirectional connection between a user-facing application and any agent backend. It standardises how state, UI intent, and user interaction move, so teams stop inventing one-off wiring. It is careful about the name clash. A2UI delivers widgets. AG-UI connects the frontend to the backend. They are meant to be used together.

The three-protocol table: AG-UI is agent to user, MCP is agent to tools and data (originated by Anthropic), A2A is agent to agent (originated by Google). Building blocks listed include streaming chat with cancel and resume, multimodal attachments, static generative UI (typed components under app control), declarative generative UI (a small language the app validates and mounts), shared state with streamed diffs, thinking steps that are not raw chain-of-thought, frontend tool calls, backend tool rendering, interrupts, sub-agents, steering, tool-output streaming, and custom events.

Why a new protocol: agents are long-running, nondeterministic, able to drive UI nondeterministically, mixing structured and unstructured IO, and often calling sub-agents. REST assumed the interaction ended when the response arrived. AG-UI sits on HTTP and WebSockets as an event layer instead.

The integration tables match the GitHub README (source 05): LangGraph, CrewAI, Microsoft Agent Framework, Google ADK, Strands, Mastra, Pydantic AI, Agno, LlamaIndex, AG2, Bedrock AgentCore, Oracle Agent Spec, A2UI, MCP Apps, and many language SDKs. Clients include CopilotKit, a terminal, Slack and Teams via the Channels SDK and OpenTag, and React Native. The page notes that a chat-platform client is something anyone can build; CopilotKit Intelligence, used by OpenTag for credentials and delivery, is a hosted service and not part of the protocol. The Dojo is the demo gallery.

## Key facts

- AG-UI is the interaction protocol; A2UI is a widget spec.
- Sibling protocols: MCP (tools), A2A (agents).
- Two generative UI building blocks named: static (typed components) and declarative (validated trees).
- Clients are not only browsers: terminal, mobile, Slack, Teams.
- OpenTag’s hosted credential layer is explicitly not the protocol.

## How it works

The application runs an agent and consumes an event stream. Events cover lifecycle, text, tools, state, and custom payloads. The app decides what to mount. Declarative UI is described as the agent proposing a tree and constraints, and the app validating before mount — the same allowlist idea as A2UI, stated as a protocol feature rather than a JSON schema.

## Implications for generatedui / ui121

Put ui121 on the client side of this introduction: it is an AG-UI client whose declarative mount step is a branded block catalog. Do not describe ui121 as a rival to AG-UI or MCP. The static-versus-declarative pair on this page is the product range. Slack and Teams support is the “not only a website” proof for generativeui.uk.
