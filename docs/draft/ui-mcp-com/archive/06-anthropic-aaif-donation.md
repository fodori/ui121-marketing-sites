# Donating MCP and the Agentic AI Foundation

- **Source:** https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

On 9 December 2025 Anthropic donated MCP to the Agentic AI Foundation, a directed fund under the Linux Foundation. Co-founders are Anthropic, Block, and OpenAI. Supporters named in the post are Google, Microsoft, AWS, Cloudflare, and Bloomberg. MCP joins goose (Block) and AGENTS.md (OpenAI) as founding projects. Governance of MCP itself stays with the existing maintainers; the point of the move is neutral stewardship, not a new owner rewriting the spec.

Adoption claims in the post: more than 10,000 active public MCP servers, from developer tools through Fortune 500 deployments; client support in ChatGPT, Cursor, Gemini, Microsoft Copilot, Visual Studio Code, and other products; deployment help from AWS, Cloudflare, Google Cloud, and Microsoft Azure. Claude’s connector directory had passed 75 MCP-powered connectors. The API had gained Tool Search and programmatic tool calling so production agents can handle thousands of tools with less latency. An official community registry exists for discovery. The 25 November spec release (one year after launch) added asynchronous operations, statelessness, server identity, and official extensions. Official SDKs cover major languages, with 97 million-plus monthly downloads across Python and TypeScript.

The Linux Foundation is positioned through its history with the kernel, Kubernetes, Node.js, and PyTorch. The AAIF’s stated aim is that agentic AI stays transparent, collaborative, and in the public interest.

## Key facts

- Date: 9 December 2025.
- Home: Agentic AI Foundation, directed fund of the Linux Foundation.
- Co-founders: Anthropic, Block, OpenAI. Supporters: Google, Microsoft, AWS, Cloudflare, Bloomberg.
- Founding projects: MCP, goose, AGENTS.md.
- Scale cited: 10,000+ public servers; 75+ Claude connectors; 97M+ monthly Python and TypeScript SDK downloads.
- Clients named: ChatGPT, Cursor, Gemini, Microsoft Copilot, Visual Studio Code.

## How it works

Nothing in the protocol’s wire format changes because of the donation. What changes is who is expected to trust it. A vendor-neutral foundation, with the three companies that already ship the biggest hosts as co-founders, is the argument that MCP will not collapse into one lab’s plugin format. Extensions (including the UI extension that shipped weeks later) can grow without a fork per vendor.

## Implications for ui-mcp.com / ui121

ui-mcp.com can say the connective standard is no longer an Anthropic project. Building interfaces against MCP Apps is building against a Linux Foundation standard that ChatGPT, Claude, Gemini, Copilot, Cursor, and VS Code already adopted. That is the “any AI” claim in institutional form. ui121 should talk about one interface server that those hosts can render, and about governance (registry, identity, extensions) as the reason enterprises will allow it.
