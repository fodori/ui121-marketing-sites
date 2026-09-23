# AG-UI Protocol — CopilotKit product page

- Source: https://www.copilotkit.ai/ag-ui
- Fetched: 2026-09-23
- Status: ok

## Summary

CopilotKit’s product page presents AG-UI as the open protocol for agent-to-user interaction: a general-purpose, bidirectional connection between a user-facing application and any agentic backend. The line they want remembered is that the protocol turns agents from background jobs into collaborators that stay aligned with the user.

Capabilities listed as a repeating set: shared state (read/write or read-only sync), tool-based generative UI, agentic chat, human in the loop, agentic generative UI, and predictive updates. Three audiences get a sentence each. Developers get a standard interface instead of custom wiring. Enterprises get governance and analytics at the boundary. The ecosystem gets one protocol instead of a new dialect per framework.

CopilotKit’s own layer on top of the protocol, as described here, includes first-party React and Angular clients, with community clients in Go, Rust, Java, and others. Add-on product names: Protection (guardrails against prompt injection, sensitive-data leaks, and brand or compliance breaches), Cockpit (analytics on every agent–user interaction), and Learning (marked coming soon: self-improving agents from implicit human feedback, which they abbreviate RLiHF). A DeepLearning.AI course taught by Atai Barkai is offered as the fullstack walkthrough (LangChain backend, React frontend, AG-UI runtime).

The comparison block is short and useful. MCP and A2A cover context and agent-to-agent coordination. AG-UI is the interaction layer among user, application, and agent. A2UI is Google’s generative UI specification for widgets. AG-UI is the runtime connection that can carry that specification. Enterprise importance is framed as transparency, safety, and control where the user actually meets the agent.

## Key facts

- Tagline: open protocol for agent–user interaction; bidirectional; any agentic backend.
- Named capabilities: shared state, tool-based GenUI, agentic chat, human in the loop, agentic GenUI, predictive updates.
- Clients: React and Angular first party; Go, Rust, Java community.
- Commercial extras: Protection, Cockpit; Learning marked coming soon.
- Explicit split: A2UI = widget spec; AG-UI = runtime connection.

## How it works

The page does not specify event types. It describes the outcome of the connection: application state and agent state stay in sync, tools can render UI, chat streams, and a human can interrupt. CopilotKit is the client and product suite that implements the protocol, not the protocol itself. A small React sketch on the page imports `useAGUI` and reads `agent` and `ui` from it.

## Implications for generatedui / ui121

Use CopilotKit’s own split in marketing: the pipe (AG-UI) is not the blocks (A2UI or a ui121 catalog). generatedui should claim the blocks and the brand layer — Protection-style guardrails are what a catalog already gives you if the agent cannot leave the component list. Cockpit-style analytics is a product feature ui121 could add on top of the same event stream without inventing a new protocol.
