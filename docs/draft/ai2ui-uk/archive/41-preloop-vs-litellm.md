# Preloop versus LiteLLM

- **Source:** https://preloop.ai/vs/litellm
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Preloop’s comparison page draws a line ai2ui.uk can reuse. LiteLLM is an open-source AI gateway: one proxy for a very large set of model providers, with keys, budgets, rate limits, guardrails, and log export. Preloop calls itself an agent control plane. Its gateway embeds the LiteLLM library for provider translation, so the argument is not “we route models better.” The argument is everything an agent does that never hits a chat-completions endpoint: the shell command, the file write, the tool call, and who may approve it.

Licenses stated on the page: Preloop core is Apache 2.0; LiteLLM core is MIT, with enterprise features separately licensed. Both can be self-hosted. LiteLLM’s scale claims on the page include more than a billion requests served, more than 240 million Docker pulls, Fortune 500 and federal use, and a SOC2 or FedRAMP-ready posture. Preloop’s differentiators are an MCP firewall with ordered allow, deny, require-approval, and require-justification rules, including CEL conditions; adapters that pull native tools such as Claude Code bash and edit, or Codex shell, through the same pipeline; one-tap approve or deny on phone, watch, Slack, Mattermost, email, or webhook, described as async-safe, with quorum and escalation on the enterprise tier; a one-command rewrite of local agent configs for several coding agents; a per-session timeline of model calls, tool calls, policy, approvals, and spend; cost reconciliation against provider bills; and a live operator channel into a running agent. LiteLLM, in this telling, has automated guardrails and no person in the loop, and its MCP gateway routes tools without a per-call approval policy.

The page suggests they stack: LiteLLM upstream for provider breadth, Preloop in front for tool policy and approvals. Budgets exist on both, with Preloop adding per-agent and per-session attribution and subscription-aware pricing that treats some OAuth-covered traffic as zero marginal cost while still tracking API-equivalent value.

## Key facts

- Preloop core license stated as Apache 2.0. LiteLLM core license stated as MIT.
- LiteLLM scale figures on the page: 1B+ requests, 240M+ Docker pulls.
- Human approvals: Preloop yes (multi-channel, async); LiteLLM no, safety is automated guardrails.
- MCP: Preloop per-call allow/deny/approval; LiteLLM tool routing and key-scoped access without per-call approval policy, as described here.
- Onboarding command named: `preloop agents discover`, for Claude Code, Codex CLI, Cursor, Gemini CLI, OpenClaw, OpenCode.
- Enterprise-only extras called out: RBAC and SSO, quorum approvals, invoice reconciliation.

## How it works

Agent configs are rewritten to send model and MCP traffic through Preloop. Each tool call is evaluated against ordered policy. Allow and deny are automatic. Require-approval pauses the action and notifies a reviewer with context. The agent is not held open on a network hook while the person decides. The decision, the matched policy, the justification, and the time are stored on a session timeline. Model calls can still be handed to LiteLLM for routing. Spend is counted per session and, on higher tiers, checked against the provider’s own billing API.

## Implications for ai2ui.uk / ui121

Preloop is a direct neighbour: control plane, human approvals, MCP policy, self-hosted. ai2ui.uk should not pretend that lane is empty. Differentiate as the human endpoint any agent can call — a URL and a structured answer — rather than as a full proxy plus firewall plus FinOps suite. The useful borrowed line is theirs: the dangerous act usually is not the chat completion, it is the command the completion suggested. If ui121 wants a shorter product, say “the approval and ask surface,” and let customers keep LiteLLM or Preloop for routing. Apache-2.0 and MIT notes belong to those products’ code, not to this marketing page’s prose; the page text here is paraphrased.
