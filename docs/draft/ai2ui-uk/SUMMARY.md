# ai2ui.uk — Research Summary (Gateway Between AI and Humans)

## Status of the site itself

ai2ui.uk is currently a **Squarespace "Coming Soon" parking page** (verified 2026-09-22). There is no product copy, no positioning, and no public roadmap. Everything below is therefore research on the _space_ the name implies — a gateway/UI layer that lets an AI ask a human questions, request approvals, and receive structured answers — which is exactly the angle requested.

## Main goal (inferred positioning)

A universal, lightweight **gateway between AI and humans**: whenever an agent needs a decision, a clarification, a credential-level approval, or a structured answer, it can render a question/UI to a human and get a clean, typed response back. The agent keeps running; the human stays in the loop without becoming the bottleneck.

## Problem today

- Agents are increasingly autonomous (tool calls, long-running workflows, multi-system actions), but the human interface layer is ad hoc: terminal permission prompts, Slack DMs, dashboard tickets, email threads.
- The big frameworks each reinvent the wheel: LangGraph `interrupt()`, OpenAI Agents SDK `needs_approval`, Temporal Signals, MCP elicitation — all solve "pause and wait for a human," but every product builds its own UI, notification path, and resume plumbing.
- Failure modes are real and documented: prompt fatigue (Claude Code users reportedly approve ~93% of permission prompts), agents guessing when they should have asked (HiL-Bench shows agents often fail to call `ask_human()` when needed), and hallucinated actions on irreversible operations.
- There is no neutral, drop-in **"AI asks a human" endpoint** — a URL/SDK an agent can call from anywhere (CI, background job, MCP server, phone) that renders a question, collects a structured answer or approval, and returns it.

## How ai2ui.uk would help (the gateway thesis)

- **One endpoint, any agent**: an `ask_human(question, schema)` call that works regardless of framework — the AI side is trivial; the human side is a polished, hosted UI.
- **Approvals with context**: show the diff, the API call, the spend, the risk — not a bare "Allow?" — so humans make fast, correct decisions (anti prompt-fatigue design).
- **Structured answers, not chat**: form-like, JSON-schema-backed responses so the agent gets machine-usable data, not prose to parse.
- **Durable waiting**: long-running agents pause for hours/days; the human can answer from any device and the agent resumes.
- **Audit trail by default**: every question, answer, and approval logged — the compliance story enterprises already demand.

## Cutting-edge context (2026)

- HITL has become a first-class primitive: LangChain/LangGraph interrupts, OpenAI Agents SDK approvals, Microsoft Agent Framework tool-approval, Temporal durable signals, MCP elicitation (server→user input requests standardized in the spec), Agent Client Protocol elicitation RFD.
- "AI gateway" is a crowded category for _model_ traffic (LiteLLM, Kong, Portkey, TrueFoundry) — but none of them own the **human-decision gateway**; that lane is open.
- Benchmarks (HiL-Bench, Scale) now measure whether agents know _when_ to ask humans — evidence the industry sees "asking well" as a core capability, not an afterthought.
- Enterprise guides (DZone, AWS healthcare HITL, strata.io, airtable comparison) all converge on: risk-based approval gates, RBAC, audit logs, reversible actions.

## ui121 fit

ui121 builds marketing/GTM for developer-facing AI products. ai2ui.uk is a textbook fit for ui121's playbook:

- **Category creation**: name the category ("the human gateway for AI agents") rather than compete in the crowded LLM-gateway space. Category-of-one positioning.
- **Developer-first motion**: docs, quickstart (`curl` an approval), SDK one-pagers, comparison pages vs. DIY LangGraph interrupts.
- **Trust narrative**: "every AI decision a human touches, with an audit trail" — resonates with the 2026 governance/enterprise-buyer wave (DZone, AWS, strata.io all writing about it).
- **Land-and-expand**: free hosted ask-page → team approvals → enterprise RBAC/SSO/audit.

## Why brilliant (if executed on this angle)

1. **Rides the strongest current**: every agent framework added HITL primitives in 2025–26; the missing piece they all share is a good _human-facing UI + notification + resume_ layer — exactly the gap.
2. **Sits at a choke point**: the ask/approve moment is where trust, compliance, and UX all intersect — high willingness to pay, natural upsell to enterprise governance.
3. **Network simplicity**: one URL per question makes integration trivial (Slack, email, QR, CI logs); "the agent's doorbell for humans" is instantly understandable.
4. **Defensible data**: accumulated approval/answer patterns enable risk-scoring (auto-approve low-risk, escalate high-risk) — solving the 93%-prompt-fatigue problem no one has cracked.
5. **Neutral ground**: like Stripe for payments or Auth0 for identity — a small, universal capability everyone needs and no platform wants to build well for _other_ platforms' agents.

## Key risks

- Framework vendors (OpenAI, LangChain, Anthropic) could ship polished first-party approval UIs.
- Distribution: needs to be where agents run (CI, IDEs, MCP registries), not just a standalone site.
- Parking-page status means zero SEO/domain authority today — full GTM build required.
