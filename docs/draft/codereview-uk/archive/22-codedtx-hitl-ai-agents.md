# CodeDTX — Human-in-the-loop AI agents for enterprise

- Source: https://codedtx.com/human-in-the-loop-ai-agents
- Fetched: 2026-09-23
- Status: ok
- Vendor pattern page. Short. No licence stated.

## Summary

CodeDTX’s pattern is propose, decide, execute. The agent may draft a change and attach the evidence it used. It holds no write tool. A named person approves, edits, or rejects with a reason. A separate executor performs the approved work and stores the artefact. Most of the time in these workflows is assembly, not judgement, so the agent is supposed to remove the slow part and leave a fast human decision. A gate on everything trains people to click through, which looks like control and is worse than none. Gate customer-visible changes, money, and anything hard to undo. Do not gate reads, internal drafts, and cheap undos. Who may approve scales with blast radius. The reviewer needs the sources on screen, not a summary they are asked to trust.

Rejections with reasons are treated as the cheapest evaluation set you will get: a domain expert already marked a real failure. Store the reason as structured data and cluster it. Rubber-stamping is fought by gating fewer actions, attaching real evidence, and fully sampling some approved items — a high approval rate with thin review looks the same on a dashboard as a healthy system. The approver should be whoever reviewed this class of work before the agent existed, so governance is not invented from scratch. Autonomy is scoped: the agent chooses how to gather evidence and what to propose; it does not unilaterally change a system of record.

They describe six layers they build against: agent (tools, memory, orchestration), integration (MCP, APIs, auth), knowledge (retrieval and access control), reliability (evals, traces, cost and latency budgets), safety (injection defence, PII boundaries, the human gate, audit), and product (the queue and the runbook people actually use).

## Key facts

- No write tool on the agent; a separate executor.
- Audit retained per run: actor, reason, evidence, artefact, tokens, cost.
- Gate by consequence, not by default.
- Structured rejection reasons become the eval set.
- Approver = the person who already owned that review.

## How it works

The agent reads live state and writes a proposal plus evidence. Risk tier picks the decider. That person approves, edits, or rejects. Only then does another component merge, publish, or call an API, and log what resulted. The product layer is an approval queue, not a chat transcript.

## Implications for codereview.uk / ui121

This maps almost one-to-one onto a review task. The ui121 screen is the product layer: proposal (the diff) and evidence (ticket, scanner hits, agent note) in an IDE-like view; the codereview.uk reviewer is the decider with no merge button of their own; the customer’s CI is the executor. Do not let the service “just push the fix.” Record structured reasons (security, architecture, spec mismatch, style) so the queue becomes an eval set you can show the buyer. The anti-rubber-stamp rule is operational: fewer tasks, each with the files that matter, plus a sample of approvals re-read by a second person on the compliance tier.
