# A2UI and MCP Apps with Oracle AI Database — Oracle Developers Blog

- Source: https://blogs.oracle.com/developers/develop-a2ui-and-mcp-apps-with-oracle-ai-database-and-the-java-mcp-toolkit-running-in-google-gemini-enterprise-app-chatgpt-and-claude
- Fetched: 2026-09-23
- Status: ok

## Summary

Paul Parkinson, 2 September 2026, uses a supply-chain reference to show two UI paths over one governed database. A planner reviews a transfer recommendation in a task-specific interface. Oracle AI Database keeps validation, locking, the transaction, and the audit record. The Java MCP toolkit exposes a fixed allowlist of operations so agents cannot run arbitrary SQL. A2UI is described as a runtime protocol, not a code generator: validated JSON, host-rendered native components. MCP Apps are the other path: a developer-built HTML and JavaScript view packaged as a sandboxed `ui://` resource. Both can collect an explicit human approval while the application and database still execute.

The post is explicit that AG-UI is optional. It is the event transport when a custom browser needs streamed tokens, tool lifecycles, state, and errors. A2A is how a host such as Gemini Enterprise reaches the agent. The same service then has three adapters: a standalone browser that consumes A2UI v0.9.1 inside AG-UI CUSTOM events; a Gemini Enterprise adapter that emits A2UI v0.8 DataParts over A2A; and an MCP App (TypeScript) used by ChatGPT, Claude, and Gemini Enterprise. The post says those are separate host adapters, not mixed versions on one surface, and that Gemini Enterprise documents both v0.8 and v0.9. The same recommendation payload is translated per host. The database query and approval policy are not duplicated.

Five toolkit tools define the boundary: find stockout-transfer recommendations (risk threshold and row cap), get one recommendation, reserve an audit id, approve a transfer through a locked procedure, and count transfers to verify the audit row. Built-in free-form read, write, and admin tools stay off. The agent may explain and request; it may not pick an arbitrary quantity, emit SQL, invent a UI capability, or change source and target after approval.

The post notes that MCP Apps do not automatically use A2UI. Optional composition patterns exist (an MCP App as a custom A2UI component, or an A2UI renderer inside an MCP App) but need an explicit renderer, catalog, bridge, and sandbox. Using one protocol does not turn on the other.

Repo layout named: agent-service (Java orchestration, AG-UI, A2UI), oracle-db-mcp-toolkit, database schema, web-client, gemini-enterprise-a2a, mcp-app, and GCP deploy scripts.

> “A2UI is a runtime protocol, not a code generator: an agent describes intent as validated JSON and the host renders approved native components from its own design system.” — Paul Parkinson, Oracle Developers Blog, 2 Sep 2026

## Key facts

- Published 2 September 2026. Author: Paul Parkinson, Oracle.
- Hosts in one reference: standalone browser, Gemini Enterprise, ChatGPT, Claude.
- Version split: A2UI v0.9.1 over AG-UI CUSTOM events in the browser; A2UI v0.8 DataParts over A2A for the checked-in Gemini Enterprise adapter.
- MCP toolkit allowlist: five named supply-chain operations. Arbitrary SQL disabled.
- AG-UI called optional; A2A used for the enterprise host; MCP Apps are a separate UI path.
- Interop claim: one domain result, multiple host contracts.

## How it works

The database computes a feasible transfer. The toolkit returns typed rows through Streamable HTTP MCP. The agent service decides when to ask for a recommendation and how to explain it, and it builds either an A2UI surface (inventory cards, notes, approve, cancel) or points at the MCP App dashboard. The host renders. Approval returns through the toolkit into a procedure that locks and audits. The UI cannot commit the transfer by itself.

Section outline: key takeaways; why a runtime contract beats generated frontend code; protocol responsibility table; architecture and adapters; five bounded tools; the stockout story and what the agent is forbidden to do.

## Implications for generatedui / ui121

This is the enterprise sentence generatedui needs: the interface is swappable (native blocks or a sandboxed app) and the system of record stays in charge. ui121 maps to the A2UI/native side — pre-built blocks, human approval, no model-written UI code — with MCP as the tool boundary, matching the toolkit’s allowlist. The version caveat is a marketing caution: say “catalog-rendered JSON,” not “one payload byte-for-byte on every host,” because even this reference pins different A2UI versions per adapter. The Lovable/v0 aside in the post (arbitrary generated UI needs the same kind of boundary as arbitrary SQL) is the contrast line, paraphrased, not quoted at length.
