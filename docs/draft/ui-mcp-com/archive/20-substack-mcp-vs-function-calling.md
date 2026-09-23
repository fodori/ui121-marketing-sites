# MCP vs API vs function calling

- **Source:** https://jamwithai.substack.com/p/when-to-use-mcp-vs-api-vs-functiontool
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Shirin Khosravi Jam and Shantanu Ladhwe’s 23 April 2026 Substack post is a decision framework, not a protocol explainer. They stack four patterns. Direct API calls are code with no model in the loop. Function calling wraps an API in a JSON schema so the model picks a name and arguments, while application code still executes the call. MCP standardizes that schema so any host can discover the same tools at runtime. CLIs are the 2026 contrarian option for tools the model already knows from training.

What MCP adds, in their account: dynamic discovery (new tools appear without a client release), one server for Claude, GPT, Gemini, and others instead of a schema per provider, and credentials that stay on the server so the agent never sees the API key. An MCP server can also be the service itself, with no REST layer underneath.

Their token warning is sharp. GitHub’s MCP server alone can cost 40,000–55,000 tokens of definitions. A stack of GitHub, a database, filesystem, and Slack can pass 75,000 tokens, more than a third of a 200k window. Cursor’s hard cap of 40 tools is cited because quality drops past it. They point at Peter Steinberger’s OpenClaw (250k+ GitHub stars in their telling) as a skills-and-CLI agent that does not put MCP in the core. Andrej Karpathy is credited, in a February 2026 post, with the idea that CLIs are useful to agents because they are old and therefore well represented in training data.

Stages: function calling for a 2–5 tool prototype; function calling plus direct APIs for a single product with 5–10 stable tools; MCP plus function calling when many agents or providers share integrations; an MCP gateway when hundreds of customers bring their own SaaS credentials and compliance is in play. The decision tree ends at: no reasoning, use an API; 1–5 tools, function calling; shared integrations, MCP; a CLI that already exists, try that first; sub-10ms work, never put a model in the path.

## Key facts

- Date: 23 April 2026. Authors: Shirin Khosravi Jam and Shantanu Ladhwe.
- GitHub MCP definition cost they cite: 40,000–55,000 tokens.
- Multi-server overhead they cite: 75,000+ tokens.
- Cursor limit they cite: 40 tools.
- Gateway recommendation: enterprise, per-customer credentials, SOC 2 / GDPR / HIPAA.
- CLI examples: git, docker, kubectl, cloud CLIs.

## How it works

The patterns layer. An API does the work. Function calling lets one model choose. MCP lets many models discover the same choice without each team rewriting schemas. A gateway in front of servers centralizes auth, audit, and traffic when the same tool is used by many tenants. The model still does not hold the upstream API key if the server does.

## Implications for ui-mcp.com / ui121

Do not claim MCP replaces APIs or function calling. Claim the stage where it wins: several agents, several hosts, one interface. ui121 tools should be few and intent-shaped, because this piece says a 93-tool server overwhelms models. A ui121 screen can also cut the token tax by showing the long result visually and returning a short structured choice to the model. For solo coding agents, acknowledge CLI and skills so the brand does not sound like it denies the backlash.

> “The gap between ‘technically works’ and ‘works reliably in production’ is almost entirely tool design.” — Jam and Ladhwe, 23 April 2026
