# MCP — Build with agent skills

- Source: https://modelcontextprotocol.io/docs/2026-07-28/develop/build-with-agent-skills
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

Agent skills, as this page uses the term, are portable instruction sets that give a coding assistant domain knowledge for a task. For MCP, the skills encode design choices — how the server will be deployed, how tools should be shaped, how auth should work — so the assistant can question the use case and scaffold a server that fits. The page points at the Agent Skills home for the general idea, then lists the MCP skills available, how to start a build, and deployment paths.

The shift is from a blank tutorial to a guided generation of the server itself. The human still answers questions about the product. The assistant applies MCP-specific constraints instead of inventing a protocol. This note does not copy skill identifiers or command lines from the short page.

## Key facts

- Skills are portable instructions for AI coding assistants, not end-user chat personas.
- MCP skills are said to encode deployment model, tool patterns, and auth.
- The assistant is expected to interrogate the use case, then scaffold.
- The page includes deployment paths after the scaffold.
- Related general spec: agentskills.io, as linked.

## How it works

A developer starts a build with the skill loaded in their coding agent. The skill’s instructions force a sequence: clarify who the server is for, which tools exist, where it runs, and how it authenticates. The agent then generates a project that matches those answers. Deployment paths on the page are the handoff from scaffold to a running local or remote server. The skill does not replace review; it reduces protocol mistakes in the first draft.

## Implications for ui1to1.com / ui121

This is generative setup for the agent side, parallel to generative UI on the human side. ui1to1.com can note that even MCP’s own docs now assume an assistant will build the integration — and still needs a person to decide the use case. That person should end on one interface: the canvas where the new server’s human tasks appear, not a pile of generated repos. JSONUI is the counterpart skill for the UI: constraints and blocks, then a one-to-one surface, with the human in the loop on anything the scaffolded agent is allowed to change.
