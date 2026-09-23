# Workflow Builder — Human-in-the-loop automation

- Source: https://www.workflowbuilder.io/blog/human-in-the-loop-automation
- Fetched: 2026-09-23
- Status: ok

## Summary

Maciej Teska (Workflow Builder, 3 September 2026) draws the distinction ui121’s pitch depends on. A workflow that emails someone a notification is not human-in-the-loop. In real HITL the process stops, keeps its state — minutes or three days — and does not continue without the person’s input. Automation does what it can; a human does the part that needs judgment.

Full automation fails in two ways: a loud error, or a confident wrong answer. Classic process steps had visible boundaries. AI removes them. A misread invoice does not throw; it emits a number and the flow continues until reconciliation. The practical test is whether the decision can be undone. A misfiled document can be refiled. A wrong payment, a wrong claim denial, or a message to thousands cannot.

Mechanics: a step is marked for a human, always or when a rule, confidence score, or amount says so. The process suspends without holding a thread, which is why a three-day wait is cheap. The person is shown prior steps, the proposal, and the documents. They approve, reject, edit, or escalate through an API. The workflow resumes on that branch. The record stores who, when, and on what basis.

Four surfaces trade speed against context: an in-product review queue (slowest to build, best decisions), an email or chat link, a ticket, or an operator task queue. Full automation optimises throughput and fits cheap, reversible work. HITL optimises the cost of being wrong and still automates most of the path. He separates three oversight modes. In the loop: the flow cannot continue. On the loop: it runs, a person can intervene (fraud streams, moderation, a stop button). Out of the loop: fully automatic, maybe reviewed later. One claims process can mix all three, with in-the-loop only at payment. HITL is also not RLHF: one is a runtime pause, the other is training.

Use it when the action is irreversible, when edge cases are the minority (so review is conditional), when regulation requires it (he points at EU AI Act Article 14 and Annex III obligations he dates from December 2027), or when humans already override informally. Examples: payment thresholds, claims, drafted customer replies, low-confidence document fields, planner confirmation of budget, and HITL as a feature your customers use inside your product.

Failure modes: an approval screen with two buttons and no case becomes a rubber stamp (a 99% approval rate is not proof of quality — track overrides, time, and whether source documents were opened); no timeout or escalation means a holiday stops the business; engines such as Temporal record that a signal arrived, not which person approved, unless the application writes identity into the payload. Cloud history retention defaults he states: 30 days on Temporal Cloud (configurable 1–90), 72 hours self-hosted if unset. Exports to object storage are for reconstruction, not a Tuesday compliance query. An Inngest 2026 benchmark of 130 engineers is cited: 68% running AI or LLM workflows, 63% running data pipelines. For agents, gate the action (send, pay, delete, publish) or gate the capability (read free, write approved), and keep the expensive generation when the flow pauses.

## Key facts

- Author: Maciej Teska; 3 September 2026.
- Notification ≠ HITL. Real HITL suspends state until a human decision.
- Four entry surfaces: in-app queue, mail/chat link, ticket, operator queue.
- Modes: in the loop, on the loop, out of the loop — mixed in one process.
- Article 14 oversight, in his timeline, for Annex III high-risk systems from December 2027.
- Audit gap: worker identity on a signal is not the approver; retention defaults are short.
- Inngest 2026, as cited: 68% of 130 engineers running AI/LLM workflows.

## How it works

The engine’s gift is durable waiting. Everything else is an application layer: a decision view with the case, an idempotent API so a double-click does not approve twice, per-checkpoint timeouts and escalation, a split between who edits the definition and who approves, a queryable record beyond engine retention, and a rule for in-flight runs when the definition changes. Conditional routing spends humans on low confidence, high amount, or broken rules. Agent patterns approve side effects, not every reasoning step.

## Implications for ui1to1.com / ui121

This article is the sharpest external wording of the product. ui1to1.com can say: one interface is where the human acts inside the process, not where they are told it happened. The review queue he calls the best decision surface is a one-to-one canvas: this case, this person, the proposal, the documents, the branch. JSONUI is how that screen is generated per role and per risk, and stays live while the workflow is paused.

The Temporal warning is a marketing proof point for “the record stays with the product.” A signal log is not “approved by this person, at this time, with these documents visible.” Human-in-the-loop without that record is latency. The rubber-stamp warning belongs in the design: the canvas must make the source visible, or one-to-one UI becomes a faster yes button. The notification-versus-pause distinction is the line to keep: a message that something happened is not a step that cannot continue until a person decides.
