# Workflow Builder — human approval on Temporal

Source: https://www.workflowbuilder.io/blog/human-approval-on-temporal
Fetched: 2026-09-23
Status: ok

## Summary

Maciej Teska’s 3 September 2026 article splits “what Temporal gives you” from “what you still have to build” for a human checkpoint. HITL means the workflow actually waits, not a notification and not a dashboard. Temporal provides durable `wait_condition` (indefinite if you omit the timeout), three message types, timers that survive restarts, replay after a worker dies, and a documented invoice-approval pattern. A signal is an async write and is the usual approve button. An update is a tracked synchronous request when the reviewer must learn immediately that business rules rejected the click. A query is a read-only view of state before they decide. The article quotes default activity retry behavior as a one-second initial interval, backoff two, max interval 100 seconds, and no default attempt cap, so a notification blip does not drop the ask.

What Temporal does not store, unless you put it in the payload, is the human’s identity. The event’s identity is the worker or client that delivered the signal. It does not store what the reviewer saw. It has a worker task queue, not a human review queue with filtering and reassignment. It does not decide which steps need approval, and it does not define timeout policy (auto-reject is your code). History retention cited: 30 days default on Temporal Cloud, configurable 1 to 90; 72 hours default self-hosted if unset. Export to S3 or GCS is hourly, and the article says Temporal suggests up to 24 hours before a closed workflow shows up there. Self-hosted archival is described as experimental and off by default. That history is for replay, not a compliance browse UI.

A six-step application design follows: hit a business rule, write a pending row in your database, notify, `wait_condition` with a timeout, human decides on a screen that shows the case, your API signals with the decision and the person’s id, workflow records an audit row and branches. The signal endpoint must be idempotent. Do not build the queue by querying every open workflow.

The article cites an Inngest 2026 survey of 130 engineers: 68 percent running AI or LLM workflows, 63 percent running data pipelines. For agents, it prefers approving the action (send, pay, delete) or the capability (read free, write gated), not the reasoning. It also flags a versioning hole: worker versioning (`PINNED` vs `AUTO_UPGRADE`) versions code, not a JSON/YAML diagram interpreted at runtime. EU AI Act Article 14 is summarized as effective human oversight for high-risk systems, with dates 2 December 2027 (Annex III) and 2 August 2028 (Annex I products). NIST AI RMF sections named: GOVERN 2, GOVERN 3.2, MAP 3.5. The vendor pitch is Workflow Builder as the editor and audit layer above Temporal, Inngest, Restate, or Camunda.

## Key facts

- Author Maciej Teska, CEO at Synergy Codes, 3 September 2026.
- Signal = async approve. Update = synchronous accept/reject. Query = read state.
- Retention: Cloud 30 days default (1–90). Self-hosted 72 hours if unset.
- Inngest benchmark as cited: 130 engineers, 68 percent AI/LLM workflows, 63 percent data pipelines.
- EU AI Act Article 14 dates as stated: 2 Dec 2027 and 2 Aug 2028.
- Idempotent signal endpoint. Pending approvals live in your database.

## How it works

The engine suspends and replays. The product layer writes the case, routes it to a person, shows context, and sends a signal carrying who decided. Escalation is a durable timer plus your own policy. Audit fields an examiner wants — who, when, what they were shown, what they decided — are application data.

## Implications for askmeapi.com / ui121

This is a build-versus-buy argument aimed at teams already on Temporal. AskMeAPI can be “the layer above” without a diagram editor: the pending row, the notification, the identity, and the structured decision, posting back into whatever engine they use. ui121 is the screen the article says the engine does not have: the case, the model’s proposal, and an override a reviewer can actually understand. Article 14’s “what they were shown” requirement is a reason to snapshot the rendered form with the decision, not only the signal payload.
