# MCP, A2A, and AG-UI

- Source: https://docs.ag-ui.com/agentic-protocols
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 06 (AG-UI docs)

## Summary

This page places AG-UI as the third leg of the open agent protocol set. MCP connects agents to tools and context, and the page notes those tools are themselves becoming agentic. A2A connects agents to other agents. AG-UI connects agents to users through applications. The authors call AG-UI the “kitchen sink” protocol because it grew from what production agent UIs actually needed, not from a top-down platform diagram. One agent often uses all three at once.

Handshakes let an AG-UI client front for agents that speak MCP or A2A, so application code can stay on AG-UI while the backend uses the other protocols. The mandate stated is to cover the full set of building blocks modern agent apps need, not a minimal chat stream. Generative UI specs — MCP-UI, Open-JSON-UI, and A2UI — are mentioned as payloads those interaction protocols can carry. The page points back at the generative UI specs concept for the table.

## Key facts

- Three legs: MCP (tools), A2A (agents), AG-UI (users).
- Designed to be used together, not as alternatives.
- AG-UI can front MCP and A2A agents via handshakes.
- UI specs named again: MCP-UI, Open-JSON-UI, A2UI.

## How it works

The user-facing session is AG-UI. Inside the run, the agent may call MCP tools or delegate through A2A. UI widgets travel back on the AG-UI stream in whichever spec the client renders. The application does not need a separate socket per protocol if the handshakes are in place.

## Implications for generatedui / ui121

This is the architecture slide. generatedui.app talks to people (AG-UI or an equivalent session). MCP is how blocks get data and how actions commit. A2A is how a remote specialist agent contributes a surface. ui121 should not market itself as a replacement for any of the three. It is the block runtime that sits where the user looks, and it should accept A2UI-shaped payloads arriving on that session.
