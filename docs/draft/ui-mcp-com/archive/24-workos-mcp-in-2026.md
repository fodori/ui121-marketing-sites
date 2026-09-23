# Everything your team needs to know about MCP in 2026

- **Source:** https://workos.com/blog/everything-your-team-needs-to-know-about-mcp-in-2026
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Maria Paktiti’s WorkOS briefing, 26 March 2026, is an architecture-and-auth tour aimed at teams deciding whether to adopt MCP. It restates the N×M problem, the host/client/server split, tools versus resources versus prompts, stdio versus Streamable HTTP, and JSON-RPC. It then spends most of its length on how authorization matured and what the March 2026 roadmap still lacked.

Timeline she uses: November 2024 launch as a developer tool; March 2025 spec with Streamable HTTP and OAuth 2.1 on the same day OpenAI announced MCP across the Agents SDK, Responses API, and ChatGPT desktop; April 2025 Gemini; June 2025 servers as OAuth resource servers with RFC 8707 resource indicators; September 2025 registry, growing toward 2,000 entries; November 2025 spec with async tasks, richer sampling, elicitation, server-side agent loops, Client ID Metadata Documents, and the extensions system; December 2025 AAIF donation; January 2026 MCP Apps; March 2026 roadmap aimed at enterprise readiness.

MCP Apps paragraph: tools return HTML in sandboxed iframes; co-developed with OpenAI; works in Claude, ChatGPT, Goose, and VS Code. Launch partners she names: Amplitude, Asana, Box, Canva, Clay, Figma, Hex, monday.com, Slack, and Salesforce. Security: sandbox, pre-declared templates, auditable JSON-RPC, consent for UI-started tool calls.

Auth path: local stdio trusts the host process; remote uses OAuth 2.1 with PKCE. Dynamic client registration gave way, in November 2025, to Client ID Metadata Documents so a client’s identity is a URL, which matters when one assistant connects to servers it has never registered with. She also describes session-scoped authorization: access ends when the task ends and the agent cannot renew it alone. Enterprise SSO from an admin’s existing identity provider was still pre-RFC on the roadmap.

Gaps she lists: no standard audit trail, no multi-tenant model, no protocol-level rate limit or cost attribution, no portable client config, and unclear behavior behind gateways. Comparisons: MCP versus APIs (protocol on top), versus function calling (how to reach the tool, not whether to call one), versus Google A2A (tools versus agent-to-agent), versus IBM ACP, versus LangChain (connection versus orchestration). SDK note: official TypeScript and Python; community Java, Kotlin, C#, Go, Rust, and Swift. The close is WorkOS AuthKit as an OAuth 2.1 authorization server for MCP.

## Key facts

- Date: 26 March 2026. Author: Maria Paktiti, WorkOS.
- SDK downloads she cites: about 97 million monthly for Python and TypeScript.
- MCP Apps launch partners named: Amplitude, Asana, Box, Canva, Clay, Figma, Hex, monday.com, Slack, Salesforce.
- Registry scale in her September 2025 beat: nearly 2,000 entries.
- Roadmap buckets: transport, agent communication, enterprise readiness, governance.
- Clients listed: Claude, ChatGPT, Gemini, Copilot, GitHub Copilot, Cursor, Windsurf, VS Code, Zed.

## How it works

The host runs a client per server. The model chooses tools; the server calls the underlying API. Long jobs can return a task handle. Sampling (as described in March 2026, before the July deprecation) lets a server ask the host’s model for a completion; elicitation asks the user, including a URL mode for payments and OAuth that should not pass secrets through the chat. MCP Apps add an HTML resource the host sandboxes. Auth for remote servers is OAuth, with the authorization server separate from the MCP resource server.

## Implications for ui-mcp.com / ui121

This is the enterprise briefing ui-mcp.com can mirror in shorter form: timeline, three primitives, then UI as the January 2026 extension, then the gaps (audit, tenancy, cost) that a serious interface product must answer. The Apps partner list is a competitive set of in-chat experiences (Figma, Canva, Slack, Salesforce). ui121 can claim the missing design layer those partners each built alone. Session-scoped consent maps cleanly onto “the widget may act only for this task.”

> “MCP Apps was co-developed with OpenAI and works in Claude, ChatGPT, Goose, and VS Code.” — WorkOS, 26 March 2026 (paraphrase of the post’s claim)
