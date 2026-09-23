# Temporal cookbook: human approval in Python

- **Source:** https://docs.temporal.io/ai/cookbook/human-in-the-loop-python
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Temporal’s Python cookbook for human-in-the-loop AI is a short workflow: an LLM proposes an action; if the action is risky, the workflow waits for a Signal; otherwise it auto-approves. Waiting does not consume worker compute for the hours or days a person might take. The sample’s default timeout is five minutes, after which the workflow records a timeout result rather than hanging forever.

The scripts are a worker, a starter, and a sender. The sender takes a workflow id, a request id, and a decision of approve or reject. Activities call OpenAI, execute the action (the sample only logs), and notify a person (the sample prints; the text says email or Slack in a real system). The signal handler matches the request id so a late or duplicate signal for a different request does not apply. The wait is a condition with a timeout. The cookbook lists extensions: more than one approver, escalation, risk-based conditions, Slack or email or a custom UI, and queries so a client can read status. Requirements named: Python 3.10 or newer, a local Temporal server, and an OpenAI key.

The pattern is the durable wait, not a user interface. Temporal supplies the pause and the signal. The human still needs somewhere to look and a process that is allowed to send the signal.

## Key facts

- Cookbook: LLM proposal, conditional wait for a Signal, else auto-approve.
- Sample timeout: 5 minutes, then a timeout result.
- CLI shape: worker, start workflow, send approval with workflow id, request id, and approve or reject.
- Activities: model call, execute (sample logs only), notify (sample prints).
- Signal is matched on request id. Wait uses a timeout condition.
- Runtime: Python 3.10+, local Temporal, OpenAI API key.

## How it works

The workflow asks the model for a proposed action and classifies the risk. Low risk proceeds. High risk records a request id, notifies, and blocks on a signal that carries the same id and a boolean decision. A matching approve runs the execute activity. A reject or a timeout records the outcome and skips the side effect. Because the wait is durable, a worker restart does not lose the pending approval. The sender can be a script today and a web form tomorrow; the workflow does not care which process emitted the signal.

## Implications for ai2ui.uk / ui121

Temporal is the engine ai2ui.uk should sit on top of, not compete with. The cookbook’s notify step is a print statement. The product is the page that replaces that print: show the proposed action, bind the approve button to the workflow id and request id, and send the signal. Marketing line: the workflow can wait for days; someone still has to render the question. Docs outline: request id correlation, timeout policy, who is allowed to signal, and why the execute activity must be idempotent if a signal is retried. Do not present the five-minute sample timeout as a recommended production SLA.
