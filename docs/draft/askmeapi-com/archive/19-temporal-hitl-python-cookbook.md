# Temporal — human-in-the-loop AI agent cookbook (Python)

Source: https://docs.temporal.io/ai/cookbook/human-in-the-loop-python
Fetched: 2026-09-23
Status: ok

## Summary

Temporal’s Python cookbook builds an agent workflow that asks a model what to do, and if the action is risky, parks the workflow until a human signal arrives. Waiting is the feature: hours, days, or indefinitely, with no worker compute while suspended. A durable timer bounds the wait. The sample’s default timeout is 5 minutes; if no signal arrives, the workflow completes with a timeout result. Every decision is in workflow history, which the page calls a compliance trail.

The human path is a Signal, not a poll. Local workflow fields hold the current decision and the pending request id. The signal handler ignores decisions whose request id does not match. `wait_condition` blocks until the decision is set or the timeout fires. A small script (`send_approval.py`) approves or rejects with a comment. Activities split the side effects: one calls the LLM, one executes the approved action (the sample only logs), and one notifies that approval is needed (the sample prints; the text says a real system would email or Slack). Prerequisites are Python 3.10+, a local Temporal dev server, and an OpenAI key.

Extensions the page lists without implementing: multiple approvers and voting, escalation, risk-based conditions, Slack or email or a custom UI, and a query handler so a UI can read approval status.

## Key facts

- Wait consumes no compute. Timeout in the sample defaults to 5 minutes.
- Signal name in the narrative: `approval_decision`, carrying an `ApprovalDecision` matched on `request_id`.
- Commands: `uv run worker.py`, `uv run start_workflow.py "<request>"`, `uv run send_approval.py <workflow-id> <request-id> approve|reject "<comment>"`.
- Activities: `openai_responses.py`, `execute_action.py`, `notify_approval_needed.py`.
- Risky example prompt: “Delete all test data from the production database.”
- Listed extensions: voting, escalation, Slack/email/custom UI, status queries.

## How it works

1. Workflow starts, activity calls the LLM, action is classified.
2. If risky, a notify activity fires and the workflow waits on a condition with a timeout.
3. An external client sends a signal with approve or reject and a comment.
4. Handler stores the decision only if the request id matches.
5. Workflow executes the action or cancels on reject or timeout.

## Implications for askmeapi.com / ui121

Temporal is the durability layer, and this cookbook admits the notification and the review UI are someone else’s job (a print statement in the sample). AskMeAPI can be the notify activity plus the signal sender: deliver the question, collect a structured decision, signal the workflow. ui121 is the custom UI the extensions list. Voting and escalation are product features on top of one signal, which is a better askmeapi story than “we are Temporal.” Teams that will not adopt a workflow engine still need the same pause; the cookbook shows why the wait is hard if you do not.
