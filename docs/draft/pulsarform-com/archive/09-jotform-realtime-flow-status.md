# Jotform real-time flow status

Source: https://www.jotform.com/enterprise/features/workflows/real-time-flow-status/
Fetched: 2026-09-23
Status: ok

## Summary

This enterprise workflow card is short and still useful. “Real Time Flow Status” is described as Jotform Inbox giving visibility into every stage from the initial submission through each follow-up. Two companion cards sit on the same URL. Admin and participant views split the same run by role: admins see and manage every step, participants only see their tasks and the overall status. Admins can restart or cancel a workflow from Inbox when something went wrong or a process should stop.

So enterprise “liveness” is stage tracking plus control actions (restart, cancel), still inside workflow Inbox, still not a conversation with the person who submitted. The page does not define stages, SLAs, or what the respondent sees.

## Key facts

- Visibility from first submission through later actions, inside Jotform Inbox.
- Role split: admin sees every step; participant sees own tasks and overall status.
- Admin actions: restart or cancel a workflow from Inbox.
- Sold as an enterprise workflow feature, not a standalone inbox product.
- Page is a feature trio, not a guide.

## How it works

A submission enters a multi-step workflow. Inbox renders the current stage for the right role. If a step fails or is obsolete, an admin restarts or cancels rather than leaving a stuck run. Participants are not shown the whole internal history.

## Implications for pulsarform.com / ui121

Stage visibility and role-based queues are enterprise expectations Pulsarform should assume, not discover later. The marketing distinction is who the thread includes. Jotform’s real-time status is an internal control panel. A live machine inbox includes the outside person and any agent acting on the same object, with cancel and restart as actions on that thread.

> “Jotform Inbox gives you visibility into every stage of your workflow from the initial submission to each follow-up action.” — Jotform enterprise workflows, https://www.jotform.com/enterprise/features/workflows/real-time-flow-status/
