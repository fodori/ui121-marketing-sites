# Orkes — Human-in-the-loop in agentic workflows

- Source: https://orkes.io/blog/human-in-the-loop
- Fetched: 2026-09-23
- Status: ok

## Summary

Maria Shimkovska (Orkes, updated 18 August 2025) defines human-in-the-loop, for agentic workflows, as a deliberate pause where a person reviews and the system does the routine. The stakes in the intro are a model that approves a very large loan for a frivolous purchase, rejects a loyal customer over a missing middle name, or is accurate but still needs a signature for compliance. The checkpoint exists so those cases are not “fast and blind.”

The demo is a loan workflow in Orkes Conductor. Before HITL: the applicant submits in any UI; the workflow validates (their demo uses an LLM text task); a sub-workflow applies rules; a terminate task ends in auto approve or deny. Failure cases she lists: mixed freelance income that looks unstable but is consistent on tax forms, a thin file after immigration, a cultural name variant flagged as fraud, a credit dip from emergency medical spend. After HITL, high confidence still auto-decides. Low confidence or a review rule (unusual income, missing documents, borderline score) creates a human task that waits. The reviewer sees the data and approves, rejects, or asks for more information; the rest of the workflow continues. A toy split: Alex at $55k requesting $3,200 goes to an officer; Jamie at $60k requesting $2,800 is auto-approved. She labels that logic arbitrary.

Waiting is the design problem. Other branches may proceed; the human task sits. SLAs and deadlines reroute a review untouched for 24 hours, or take a default at 48 hours. Conductor’s claim is that you design the form, the assignment, the escalation, and the outcomes, then manage tasks in the UI or via API. Build steps: user form, human task with retries and timeouts, insert it in the workflow, route approve/reject/escalate, operate the queue. Other domains: content moderation where satire fails filters, a clinician checking a scan, fraud flags that are innocent, recruiting beyond keyword rank, and a human when a support chat gets emotional.

She also calls a person editing a chatbot draft “HITL” in everyday language, then narrows to production workflows. The close sells Conductor Developer Edition and an agentic template. A large workflow JSON is embedded; this note does not reproduce it.

## Key facts

- Author: Maria Shimkovska; updated 18 August 2025; about a 12-minute read.
- Pattern: confidence or policy routes either to auto decision or to a waiting human task.
- Demo numbers (illustrative): $55k / $3,200 reviewed; $60k / $2,800 auto-approved.
- Edge cases: irregular income, thin credit history, name mismatch, one-off medical credit dip.
- Operations: assignment, custom forms, SLA reroute (24h example), default action (48h example).
- Also listed: moderation, healthcare, fraud, recruiting, escalated support.

## How it works

A switch on the model’s decision or score selects a branch. The human branch is a first-class task type with a form template and an assignment policy. The workflow state stays “waiting” until someone claims and completes it. Completion carries the decision back into later tasks (notify, pay, or ask for documents). Timeouts and escalation are configuration, not an afterthought. The form is how the reviewer gets the right fields rather than a raw payload. APIs exist so the same queue can sit in a product UI.

## Implications for ui1to1.com / ui121

Orkes states the hybrid model in one line: automation speed on the straight path, a person on the ambiguous path. ui1to1.com should show that person a one-to-one interface — this application, this evidence, these actions — not a generic task row. JSONUI is the form they tell you to design, generated per reviewer and per case, and able to stay on screen while the workflow waits.

The 24-hour and 48-hour examples are the always-connected requirement: the canvas must still be there, and the process must not vanish, when the human is slow. That is durable human-in-the-loop. Do not treat the guitar-loan story or the dollar split as research. Treat them as a memorable routing demo. The serious list (income context, name variants, one-off shocks) is the reason a single live interface has to show more than a score.
