# TrueFoundry: the agent harness, including approvals

- **Source:** https://www.truefoundry.com/blog/agent-harness-managed-ai-agents
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Boyu Wang’s 9 June 2026 TrueFoundry post defines an agent harness as the loop around the model: plan, act, observe, plus the sandbox, credentials, approvals, and traces that make the loop safe to run. The build-versus-buy decision, in this telling, is the harness, not the model. TrueFoundry’s harness sits on their AI gateway and MCP gateway.

Operational claims that matter for positioning: credentials are referenced by name and never pasted into agent configuration; sensitive tools can pause for human approval; an ask-user step can request clarification or a choice; generative UI can stream cards, tables, and charts back to a person; a sandbox contains code execution; sub-agents and a “code mode” exist; large tool results can be offloaded and context compacted; one observability view shows cost, tokens, and latency per step. Deployment options are SaaS, self-hosted, or on-premises. The concrete policy example is a refund flow that confirms refunds over $100.

This is a platform pitch. The approval and ask-user features are listed as harness capabilities beside gateways and sandboxes, which shows buyers being sold a bundle. ai2ui.uk’s narrower promise has to be clearer than “we also have HITL.”

## Key facts

- Published 9 June 2026. Author Boyu Wang.
- Harness ingredients: plan/act/observe, sandbox, named credentials, tool approvals, ask-user, generative UI, traces.
- Example threshold: confirm refunds over $100.
- Observability: cost, tokens, and latency per step in one place.
- Deploy: SaaS, self-hosted, or on-premises.
- Adjacent products: TrueFoundry AI Gateway and MCP Gateway.

## How it works

An agent definition names tools and policies. When a tool is marked sensitive, or a condition such as refund size matches, the harness pauses and shows a person the proposed action. Ask-user is a separate pause for missing information rather than for permission. Generative UI is how results are shown, not the approval itself. Credentials resolve at runtime from a store. Traces record each step so a reviewer can see why the pause happened. The model does not hold the secret or the authority to skip the pause if the harness enforces it.

## Implications for ai2ui.uk / ui121

TrueFoundry is bundling the human moment into a managed harness. Customers who already bought that bundle will not need a second approval product unless their other agents live outside it. ai2ui.uk’s market is the agents that are not on that harness: Claude Code, a custom MCP server, a script, a different gateway. Copy should describe a single integration (ask URL, structured response, durable wait) that any harness can call, including TrueFoundry’s if they expose a webhook. The $100 refund example is a good public pattern to echo with original numbers, not to copy as a case study.
