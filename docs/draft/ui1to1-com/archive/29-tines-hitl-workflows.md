# Tines — Human-in-the-loop workflows

- Source: https://www.tines.com/blog/human-in-the-loop-workflows-where-intelligent-automation-meets-judgment/
- Fetched: 2026-09-23
- Status: ok

## Summary

Tines (18 June 2026) frames security and IT leaders as stuck between speed and governance. Fully autonomous workflows hope nothing breaks. Approval on every step trains analysts to rubber-stamp until the audit trail is only green checks. The failure example is an agent that wants to isolate a production database from a misclassified alert. A human-in-the-loop workflow pauses at a defined checkpoint and will not pass it without a person. Enrichment, lookups, and tickets can run; isolating an endpoint, granting access, or escalating an incident stays human. An alert that says “we blocked this IP” is not the same as a pause that offers approve, deny, and escalate and then branches.

Five axes decide the gate: reversibility (quarantine a high-confidence phish versus disable an executive account); asset importance (the same login anomaly can reset MFA for a normal user and open a review for an admin); confidence and corroboration; novelty (unknown alert types should not be acted on by an automation that has never seen them); and compliance. They cite a NIST IR 8596 draft that human oversight is required for regulatory and legal compliance in AI-assisted operations. Their adoption pattern is to start with more checkpoints than feel necessary, then remove them from outcome data.

A good checkpoint assembles context first — for phishing, the URL, a VirusTotal score, affected mailboxes, and a recommended level — on one screen, with explicit options, routed to Slack or Teams if that is where the person already works. It needs an SLA and a timeout path: escalate, halt and alert, or proceed with loud logging if the risk is low. The assignee must have authority. The audit trail must store what they saw at decision time, the decision, the time, and the individual identity, plus whether they agreed, overrode, or escalated.

Five production patterns: approval-gated endpoint containment (they mention Mars moving fully off Splunk Phantom onto Tines and onboarding five teams in six months); phishing triage after automated lookups; AI scoring that auto-closes benign alerts and auto-acts on high-confidence true positives, with ambiguous cases sent to a human who does not re-investigate; access requests that auto-provision low risk and chat-approve the rest (Intercom’s IT team, they say, replaced a Slackbot and folded 15 workflows into one story); change management where AI scores risk and only higher-risk changes wait for a human who sees dependencies and a rollback plan.

Mistakes, with their Voice of Security 2026 figures (81% say workloads increased, 44% still do repetitive manual work, 76% report burnout): gating trivial steps, sending an alert id without enrichment, no timeout (dwell time grows while containment waits), and never graduating stable checkpoints to automation. CISA, in their reading, has no blanket statute, but joint guidance with NSA and international partners tells organisations to keep human checkpoints for high-impact or irreversible actions, decided by designers not agents; OT guidance goes further and says AI must not make safety decisions alone.

## Key facts

- Published 18 June 2026 by Tines.
- Checkpoint anatomy: full context, explicit options, SLA and escalation, authorised assignee, immutable identity-level audit, feedback on agreement versus override.
- Five axes: reversibility, asset importance, confidence, novelty, compliance mandate.
- Voice of Security 2026, as cited: 81% heavier workload, 44% still on repetitive work, 76% burnout.
- Named consolidations: Mars (five teams, six months, off Phantom); Intercom IT (15 workflows into one story).
- CISA/NSA-style guidance, as they summarise it: human checkpoints for high-impact or irreversible actions; no autonomous AI safety decisions in OT.

## How it works

Deterministic triggers (a SIEM alert, a form, a change ticket) start the story. An AI step enriches and scores inside guardrails. A page or chat prompt pauses the story. The answer selects the next branch, which may execute containment, provisioning, or closure. Cases store the decision for later review. Low-risk paths never enter the pause. Timeouts stop a pending approval from becoming a silent stall. Feedback on overrides is what justifies deleting a checkpoint later.

## Implications for ui1to1.com / ui121

Tines describes the checkpoint ui121 should render: one screen, the evidence, the choices, the identity of the decider. That is one-to-one UI for operations. The same alert should not look like a raw id for every analyst; the canvas can be the enriched case for this responder. JSONUI is how that page is generated per severity and role without a new product per workflow.

The rubber-stamp and burnout numbers are the argument against “human in the loop” as a checkbox on every step. Selective pauses, with the work already done before the human sees it, are the design. Unified comms appears as the delivery channel (Slack, Teams); the interface that holds the judgment can still be the canvas, so the person is not reconstructing context in three tools. Use Mars and Intercom as Tines’ customer stories, not ui121’s.
