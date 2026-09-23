# Camunda — What is human-in-the-loop automation?

- Source: https://camunda.com/blog/2024/06/what-is-human-in-the-loop-automation/
- Fetched: 2026-09-23
- Status: ok

## Summary

Fernando Doglio (Camunda, 4 June 2024) defines human-in-the-loop automation as one workflow that contains both automated systems and human judgment. Full automation runs with no person. HITL lets people step in at chosen stages to oversee, decide, and steer, using machine speed and human judgment together.

Applied sketches: a chatbot handles routine questions and escalates sensitive ones; manufacturing vision flags possible defects and a person makes the final call; loan systems clear straightforward applications and send exceptions to underwriters; compliance tools flag possible breaches and officers interpret them in context. Machines take repetitive, data-heavy work. People take nuance.

He argues human judgment is required for unpredictability, complex decisions, risk in finance, health, and manufacturing, subjective calls (merit, satisfaction, emotion), decision quality, regulation, emotional intelligence in service and care, and for teaching the automation. The system gets faster and more consistent; the person supplies context, ethics, and the exception path. Feedback lets the automation improve.

Components split in two. Technology: BPMN diagrams to show which tasks are automatic and where a person is required; decision engines that execute rules until complexity forces an escalation; process platforms that orchestrate automated and human tasks and monitor both; analytics that find bottlenecks and compliance gaps. People: decision-makers for ethical and strategic calls, reviewers who check machine output, and operators who run the system and handle exceptions. Tasks are human-only (a diagnosis, a legal document), collaborative (a model predicts a maintenance issue, a technician does the work), or escalated critical decisions.

Integration advice is a designed handoff, escalation thresholds, a feedback loop into retraining, real-time oversight, metrics on both human and machine steps, audit logs, and policy enforcement. Best practices: clear and adjustable escalation rules, tools that assist the human rather than replace the judgment, automate low-value repetition, train operators, and govern for fairness, transparency, and accountability.

Use cases continue past fraud review and diagnostic support into marketing personalisation and similar industry patterns; the fetched portion centres fraud (fewer false positives, more trust) and imaging (a clinician plus history and symptoms, not the model alone).

## Key facts

- Author: Fernando Doglio; 4 June 2024; Camunda blog.
- Definition: hybrid workflow, human intervention at specific stages, not full autonomy.
- Four opening domains: customer-service chat, manufacturing quality, lending, compliance.
- Tech stack he names: BPMN, decision engines, process automation platforms, monitoring and analytics.
- Human roles: decision-maker, reviewer, operator.
- Design requirements: escalation criteria, feedback into the model, audit trails, governance.

## How it works

A process model marks automatic tasks and human tasks. A rules engine clears what it is allowed to clear. When a threshold or an exception hits, the platform assigns a human task with the context needed to decide. The person’s outcome is written back, the process continues, and logs support audit. Monitoring shows whether humans are late or automations are escalating too often, and thresholds move. Over time, human corrections can retrain the model. The platform is the coordinator; it does not replace the interface the person uses to do the task, but it assumes that task exists inside the process rather than beside it.

## Implications for ui1to1.com / ui121

Camunda is the process-platform version of the company story: orchestration between automated and human tasks. ui1to1.com can accept the orchestration and insist on the surface. A BPMN human task still needs somewhere to appear. A one-to-one canvas is that somewhere — different for the underwriter, the inspector, and the support agent — real-time, and connected to the process so the decision is not retyped into email.

JSONUI matches “the task is data”: the process asks for a human step, the server describes the UI for that step and that person, the client renders it. Roles he lists (decide, review, operate) are three interfaces on one system, which is the alias of the ui121 story. Use the June 2024 definition as category language. The product difference is that the human task is a live interface, not a queue item that opens yet another tool.
