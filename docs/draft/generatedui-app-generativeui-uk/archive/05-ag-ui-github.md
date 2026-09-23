# AG-UI GitHub repository

- Source: https://github.com/ag-ui-protocol/ag-ui
- Fetched: 2026-09-23
- Status: ok

## Summary

The repository is the home of the Agent–User Interaction Protocol: an open, lightweight, event-based standard for connecting agent backends to user-facing applications. The README describes a small contract. During a run, the backend emits events compatible with a set of standard types (the README says about sixteen). The backend also accepts a small set of AG-UI-shaped inputs. A middleware layer loosens exact event matching and does not lock the transport: SSE, WebSockets, webhooks, and others are all in scope. A reference HTTP implementation and a default connector ship with the project.

License on the README: MIT. Stars observed on the GitHub page at fetch time: about 16,004. Scaffold command: npx create-ag-ui-app. Companion sites named in the README: docs.ag-ui.com, the AG-UI Dojo (dojo.ag-ui.com), and a Discord. A biweekly working group is listed via the CopilotKit Luma calendar.

The protocol stack sentence is the one to reuse. MCP gives agents tools. A2A lets agents talk to agents. AG-UI brings agents into the application the user is looking at. Feature list: streaming agentic chat, bidirectional state sync, generative UI and structured messages, live context, frontend tools, human-in-the-loop.

Integrations called supported include LangChain/LangGraph, CrewAI, Microsoft Agent Framework, Google ADK, AWS Strands, Mastra, Pydantic AI, Agno, LlamaIndex, AG2, Claude Agent SDK, A2A, Amazon Bedrock AgentCore, Oracle Agent Spec, and MCP Apps. AWS Bedrock Agents, OpenAI Agent SDK, and Cloudflare Agents were marked in progress. Clients: CopilotKit (first party), a terminal client, Slack and Microsoft Teams via a Channels SDK and an OpenTag example, and React Native. Community SDKs listed include Kotlin, Go, Dart, Java, Rust, Ruby, C++, and .NET.

The README is a project front door, not a spec. Concept and spec pages from docs.ag-ui.com are archived separately because the tools concept (source 06) sits inside that docs set.

## Key facts

- MIT license. ~16,004 GitHub stars at fetch (23 Sep 2026).
- Event-based; transport-agnostic; ~16 standard event types claimed in the README.
- Stack: MCP (tools), A2A (agent to agent), AG-UI (agent to user).
- First-party clients: CopilotKit, Slack/Teams Channels SDK, React Native.
- Working group: biweekly, via CopilotKit’s events calendar.
- Dojo: short examples (described as roughly 50–200 lines) of the building blocks.

## How it works

The client sends one run input. The agent streams typed events as work happens: text deltas, tool-call start/args/end, state snapshots or patches, lifecycle signals. The UI updates from those events instead of waiting for a single JSON response. Loose matching means an existing framework can adapt its native events without a perfect schema match on day one. Generative UI is listed as a feature the stream can carry, not as a UI grammar defined in this repository.

## Implications for generatedui / ui121

AG-UI is the pipe; A2UI and block catalogs are what flows through it. ui121 should not invent a private event bus if the market is standardising on this one. The product angle is the catalog and the branded renderer on the client side of the stream: when an AG-UI tool result or custom event says “show this surface,” ui121 mounts pre-built blocks. Slack, Teams, and React Native clients in the README are evidence that the same event stream is not web-only — useful if generatedui is pitched beyond a browser chat panel.
