# Productionizing MCP servers

- **Source:** https://lenses.io/blog/mcp-server-production-security-challenges
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Tun Shwe’s Lenses.io essay, 11 March 2026, says 2025 was when MCP caught engineers’ imagination and 2026 is when prototypes have to run in production. Scale markers match other roundups: 16,000+ indexed servers, 97 million monthly Python and TypeScript SDK downloads, the December 2025 AAIF donation, and clients from ChatGPT to VS Code. The question he keeps hearing from MCP Dev Summit Europe is how to deploy servers securely.

Clutch Security, as he cites it: 86% of servers run on developer laptops; 5% run in CI, cloud, or Kubernetes. In a 10,000-person company their model is about 1,500 employees running two servers each — over 3,000 deployments into 115 services — almost all local. Ecosystem growth of 2,200% in 13 months (three implementations in October 2024 to nearly 7,000 by November 2025) did not mean production-grade growth. Zuplo’s State of MCP report, via this piece: 58% of servers wrap an existing API, a quarter have no authentication, and 38% of builders say security is blocking further adoption. The Docker-in-2014 analogy is his: building a container was easy; running them safely took an ecosystem.

The “security cliff” is the jump from stdio (no network, one user, no auth) to Streamable HTTP (many clients, and suddenly OAuth, CORS, TLS, redirects, SSRF protection, rate limits, and audit). Stacklok load tests he cites: stdio failed 20 of 22 requests at only 20 concurrent connections, so staying local is not a scale plan. Astrix on 5,200+ servers: 88% need credentials, 53% use long-lived API keys or PATs, 8.5% use OAuth, 79% pass keys in environment variables. Early Anthropic samples used PATs and the pattern spread.

He uses Simon Willison’s lethal trifecta — private data, untrusted content, and an outbound channel — and notes that a useful MCP server is designed to have all three. A Kafka example makes it concrete without being a recipe: topics are private, message contents may be untrusted, and the agent can act. OWASP’s MCP Top 10 is the checklist he points at: tool poisoning, scope creep, supply chain, command injection (43% in tested implementations), weak auth, and missing audit. 492 servers were found on the open internet with no authentication.

OAuth is specified (2.1, protected resource metadata, and Client ID Metadata Documents instead of a giant dynamic-registration database) and still hard. He quotes the gap as AuthZed’s point: the spec handles authentication; authorization is left to implementers. Cato Networks found permissive CORS and unvalidated redirects in Anthropic’s SDK defaults that could steal OAuth tokens. Enterprise-grade, in his list, means tool-level RBAC, data masking, audit logs fit for the EU AI Act, deterministic allow/deny rather than another model judging the first, and OpenTelemetry. The protocol is fine; the ecosystem is late.

## Key facts

- Date: 11 March 2026. Author: Tun Shwe, Lenses.io.
- Clutch: 86% local, 5% in production-like environments.
- Concurrency anecdote: stdio, 20 of 22 failures at 20 parallel connections (Stacklok).
- OAuth share: 8.5% in the Astrix sample of 5,200+.
- Unauthenticated internet-exposed servers cited: 492.
- Growth color: about 2,200% more implementations in 13 months, mostly not production.

## How it works

A local server is a subprocess of the chat app. A production server is an HTTP service many employees share. That change adds an authorization server, scoped tokens, and logs of every tool call. UI extensions do not remove the cliff; a sandboxed iframe still calls tools on a server that must know who the user is. Sampling and “ask another model if this is allowed” are rejected in favor of yes/no policy.

## Implications for ui-mcp.com / ui121

Position ui121 interfaces as something you run like a service, not a laptop demo. The buyer fear is the cliff: OAuth, audit, masking. A ui-mcp.com offer that stops at “drop in an iframe” will sound like the 86% local tier. Talk about tool-level permission, a text fallback that does not widen data access, and traces of what the widget did. The lethal trifecta is a plain-language reason a form inside chat still needs a human confirm on write actions.
