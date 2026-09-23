# Workflow Builder: what Temporal does not give you

- **Source:** https://www.workflowbuilder.io/blog/human-approval-on-temporal
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Maciej Teska’s 3 September 2026 essay is a boundary document. Temporal gives a durable `wait_condition`, Signals for asynchronous writes, Updates for synchronous tracked calls that can be rejected, Queries for reads, durable timers, replay, and activity retries (the defaults he cites: 1 second initial interval, backoff coefficient 2, max interval 100 seconds, unlimited attempts). It does not, by itself, know who the approver is unless you put a name in the payload, what the human actually saw, or where a review queue lives. Task queues in Temporal are for workers, not for people. It does not contain the business rule for when to approve, the default behaviour on timeout, or a browsable compliance log. History retention on Temporal Cloud defaults to 30 days and can be set from 1 to 90. Self-hosted retention is 72 hours if unset. Export to S3 or GCS is hourly and can lag up to 24 hours. A workflow engine’s history is not an audit product.

He cites an Inngest 2026 survey of 130 engineers: 68% running AI or LLM workflows, 63% running data pipelines. Regulatory hooks: EU AI Act article 14 on human oversight for high-risk systems, with Annex III timing from 2 December 2027 and Annex I product timing from 2 August 2028, plus NIST AI RMF functions he names as GOVERN 2, GOVERN 3.2, and MAP 3.5. Treat the legal dates as his summary of the Act, and have counsel confirm them before they appear in a customer claim.

His six-step HITL is the checklist: reach the step, write a pending record in your database, notify, wait, let the human decide while looking at the case, signal with identity, resume and audit. The signal endpoint must be idempotent. For agents, approve the action or approve by capability (reads free, writes gated), not the model’s private reasoning. Versioning modes such as pinned versus auto-upgrade do not version a JSON or YAML diagram that is interpreted at runtime, so the diagram needs its own version. The close of the post is a pitch for Workflow Builder as the layer above the engine. That layer is the same gap ai2ui.uk is walking into, from the human-page side rather than the diagram side.

## Key facts

- Published 3 September 2026. Author Maciej Teska.
- Engine provides: durable wait, Signal, Update, Query, timers, replay, activity retry.
- Engine does not provide: approver identity, the rendered case, a human queue, the approval policy, timeout policy, a compliance browser.
- Retention: Cloud default 30 days (range 1–90 stated); self-hosted 72 hours if unset; export hourly, lag up to 24 hours.
- Survey, as cited: Inngest 2026, 130 engineers, 68% AI/LLM workflows, 63% data pipelines.
- Oversight timeline in the post: EU AI Act Art. 14; Annex III from 2 Dec 2027; Annex I from 2 Aug 2028.

## How it works

The workflow hits an approval step and inserts a row that is the case: what will happen, who may decide, what they were shown. Notification is a separate activity. The workflow then waits. A human opens that row in some UI, decides, and a signal carries their identity and the decision. The handler checks the request id and ignores duplicates. On resume, the workflow writes an audit event in the application database, not only in Temporal history. Timeout is an explicit branch the author designs. Capability gates can auto-pass reads and always wait on writes.

## Implications for ai2ui.uk / ui121

Teska’s missing list is the product spec. ai2ui.uk should own the pending record, the page the human saw, the identity of the decider, the timeout behaviour, and the exportable log. Temporal, or any other engine, owns the wait. Do not claim to be a workflow engine. Claim to be the human system of record those engines lack. The six steps are a safe docs outline if paraphrased. The vendor pitch at the end means Workflow Builder is a neighbour; differentiate on AI-originated asks (MCP, agents, gateways) versus general business diagrams. Legal dates belong in a footnote with a source, not in a hero number, until verified.
