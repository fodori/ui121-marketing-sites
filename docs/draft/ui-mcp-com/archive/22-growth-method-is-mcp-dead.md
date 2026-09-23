# Is MCP dead?

- **Source:** https://growthmethod.com/is-mcp-dead/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Stuart Brameld’s Growth Method essay, updated 7 September 2026, answers a backlash wave: developers calling MCP bloated, Eric Holmes’s “MCP is dead. Long live the CLI” hitting the top of Hacker News, Pieter Levels comparing MCP to llms.txt, and Thoughtworks putting naive API-to-MCP conversion on the Hold ring of its Technology Radar. Brameld’s answer is that MCP is not dead, but it is narrowing toward multi-user and enterprise work, while solo developers move to CLIs and agent skills.

The costs he accepts: a database server with 106 tools burned 54,600 tokens before doing useful work; MCPGauge research he cites found context retrieval inflating token budgets by up to 236× and often hurting accuracy; at ten or twenty servers, tool text can take 40% of the window. Stateful sessions made load balancing hard until the 2026-07-28 spec, which he says moved MCP to a request/response model suitable for serverless. He quotes Sean Roberts, VP of Applied AI at Netlify, via Anthropic, that the stateless core makes MCP an ordinary HTTP workload. Thin wrappers remain the uncomfortable majority. Simon Willison is cited preferring skills — a folder of markdown and optional scripts — because the simplicity is the point. FlowHunt is cited for code-first agents cutting tokens by up to 98% versus loading MCP tools. Holmes’s line, kept below, is to ship a good API and CLI and let the agent cope.

The counter-numbers: 17,000+ MCP servers and 143,000 indexed executable AI components as of Q1 2026; SDK downloads past 400 million a month by July 2026, about 4× in a year; Linux Foundation stewardship; adoption by OpenAI, Anthropic, Google, Microsoft, and AWS. Glama’s analysis, as he retells it, puts MCP past the peak of hype. By mid-2025 there were roughly 25 builders per actual user, and that oversupply is correcting. Block’s 50–75% time savings and Bloomberg cutting deployment from days to minutes are the enterprise anecdotes. Claude’s connector directory is said to list over 950 servers, with enterprise-managed auth, an observability dashboard, and MCP tunnels as a research preview for private networks. A Peter Kellner line he likes: skills teach the agent, MCP lets it act. Tobias Pfuetze is paraphrased as CLI for personal infrastructure and MCP for the organizations that should not hand an agent raw system access. Tobi Lütke’s “context engineering” remark is included as a cousin idea, not an MCP endorsement.

## Key facts

- Updated: 7 September 2026. Author: Stuart Brameld, Growth Method.
- Q1 2026 index: 17,000+ servers; 143,000 executable components.
- SDK: 400M+ monthly downloads by July 2026 (4× year over year), as stated here.
- Token examples: 54,600 to initialize 106 tools; up to 236× inflation in cited research.
- Spec answer he highlights: stateless core in 2026-07-28.
- Claude directory figure he uses: 950+ connectors.

## How it works

He splits the stack. Skills and CLIs give a technical user a cheap way to act on tools the model already understands. MCP remains the shared, permissioned, vendor-maintained connector when a team of non-engineers must all reach the same CRM or analytics product. The July 2026 spec removes the “it cannot scale because it is stateful” objection and leaves the discovery-token problem open. MCP Apps and Tasks are named as extensions that ship without changing the core.

## Implications for ui-mcp.com / ui121

Lead with the narrowing, not a victory lap. ui-mcp.com is for the enterprise and multi-host side of the split: access control, a vendor-quality interface, and one connection that works in Claude, ChatGPT, and Gemini. Do not argue a solo Claude Code user out of skills. MCP Apps, which this piece notes as part of the 2026 extension framework, is the answer to “MCP is only a token-heavy tool list”: the interface can carry the interaction so the model does not re-read every field. ui121 sells that interface to the 99% who should not get a shell.

> “Ship a good API and a good CLI. The agents will figure it out.” — Eric Holmes, quoted by Growth Method

> “The stateless core in the 2026-07-28 spec makes MCP a first-class HTTP workload with no session management to work around.” — Sean Roberts, Netlify, as quoted via Anthropic in this piece
