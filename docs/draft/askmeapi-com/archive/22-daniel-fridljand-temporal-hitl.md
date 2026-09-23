# Daniel Fridljand — Temporal for human-in-the-loop

Source: https://danielfridljand.de/post/temporal-human-in-the-loop
Fetched: 2026-09-23
Status: ok

## Summary

A short 25 February 2026 note (about three minutes) explains why a human wait breaks ordinary job runners. The person might answer in minutes or days, and the process may restart in between. Polling holds resources. A fire-and-forget callback does not survive the restart. The author used Temporal so the workflow can await a condition for hours or days without a thread or a database connection, then resume when a signal arrives.

Four ideas are spelled out. First, a signal handler sets the decision only while status is awaiting approval and no decision exists yet, so retries are idempotent, and `wait_condition` uses a timeout in days. On timeout the sample marks the workflow rejected. Second, an explicit timeout is what keeps a forgotten approval operable. Third, the same unknown-duration problem appears when polling an external job: check status in an activity, and if it is still running, `workflow.sleep` inside an overall budget so replay stays deterministic. Fourth, workflow code only orchestrates; side effects stay in activities. Status values such as `AWAITING_APPROVAL` make stuck runs visible. The author prefers this to ad-hoc queues and callbacks. Queries are mentioned so a UI can show “waiting” or “approved by X” without changing the run.

## Key facts

- Published 25 February 2026. Reading time stated as 3 minutes.
- Core pain: unpredictable pause, possible process restart, no busy-wait.
- Sample statuses: awaiting approval, then approved with reviewer id, or rejected on timeout.
- Idempotent signal: ignore if a decision is already stored.
- External jobs use activity polls plus `workflow.sleep`, not a thread sleep.

> “Human input gives a workflow an unpredictable pause: someone might respond in minutes or days, and the process may restart in between.”

## How it works

Set status to awaiting, wait on a condition with a day-scale timeout, let the approval UI query state and send approve or reject with a reviewer id. Timeout becomes an explicit rejected outcome. Replay rebuilds state from history so the signal is not applied twice.

## Implications for askmeapi.com / ui121

The post is the engineering pain in one sentence, which is the reason a hosted ask exists. AskMeAPI hides the signal, the timeout, and the idempotent handler behind one request. ui121 is the UI that queries “waiting for approval” and sends the reviewer id back. Marketing can use the minutes-or-days line without claiming to be a workflow engine: the caller should not have to run Temporal to survive a human.
