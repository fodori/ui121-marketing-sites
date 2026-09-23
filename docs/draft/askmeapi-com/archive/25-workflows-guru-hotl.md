# Workflows.guru — human-on-the-loop workflows

Source: https://www.workflows.guru/workflow-types/human-on-the-loop-workflows
Fetched: 2026-09-23
Status: ok

## Summary

The page defines human-on-the-loop as a fully automated process that people supervise and touch only when something looks wrong. It names fraud detection, model monitoring, and DevOps as typical homes. Three traits: the system does not wait for a person, intervention is only on anomalies, and there is no required manual step. Human-in-the-loop, by contrast, pauses until a person acts, such as approving a loan before it is processed.

Implementation notes are engine-specific and brief. Celery is a poor fit because interrupting a running workflow is hard. Airflow can approximate HOTL with sensors, external triggers, and manual reruns in the UI, but it is described as batch-oriented. Temporal fits because code workflows accept signals that override or block a transaction without the happy path waiting. Prefect is called naturally friendly via automations, notifications, and UI controls for retry, pause, and resume.

The worked example is a Prefect fraud flow. A task scores a transaction with a random probability. Under 0.3 it auto-approves. Otherwise it still processes and also posts a Slack webhook if `SLACK_WEBHOOK_URL` is set, returning a status string `awaiting-human-review`. A save task records the transaction. The comment says analysts review alerts asynchronously while other transactions continue. The sample as written calls process even on the high-risk branch before notify, so the “rollback if needed” sentence in the overview is not what the code does. Treat the snippet as a sketch of non-blocking alert, not as a production fraud design.

## Key facts

- HOTL: humans are not required for the workflow to continue. HITL: the workflow waits.
- Engines discussed: Celery (weak), Airflow, Temporal (signal without pausing the happy path), Prefect.
- Demo threshold: fraud score under 0.3 auto-approves. Alert channel: Slack incoming webhook.
- Example input: transaction id 123, amount 350.

## How it works

Score, branch, auto-approve the low scores, notify a person on the rest without blocking the flow, persist the record. The person may later compensate (the prose says rollback) outside the waiting workflow.

## Implications for askmeapi.com / ui121

AskMeAPI’s main promise is HITL: the caller waits for a structured answer. This page is the adjacent product line, human-on-the-loop, where the caller does not wait and a person gets an alert with a kill switch. A marketer should not blur them. ui121 still fits the alert: a review card for the suspicious transaction that can post an override signal, while the original request already returned. Offering both modes — blocking ask and non-blocking notify-with-override — matches how these glossaries split the market.
