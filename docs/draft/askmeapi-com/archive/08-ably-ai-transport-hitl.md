# Ably AI Transport — human-in-the-loop

Source: https://ably.com/docs/ai-transport/features/human-in-the-loop
Fetched: 2026-09-23
Status: ok

## Summary

Ably’s AI Transport treats human approval as a suspended agent run whose pending tool call lives on a durable session channel. The agent defines a tool with both an execute function and a `needsApproval` gate. While the gate returns true, the AI SDK emits an approval request instead of running the tool. The agent calls `run.suspend()` rather than ending the run, so any connected client can render the pending approval. When a person answers, the client publishes a `tool-approval-response` and POSTs a continuation on the same run id. On that continuation the gate sees the prior approval and returns false, so execute runs.

Because the session is a shared channel, the request is visible on every device. The first response wins; a second device that answers an already-resolved call is ignored. If the user is offline, the pending tool call stays in channel history and reappears on reconnect, within the retention window. Ably does not impose a timeout: an unanswered approval stays pending until the application adds a timer or a push notification. The resume is a fresh invocation, so the server must reload conversation history or the model will not see the decision. Rejection must be an explicit payload; an empty rejection is ambiguous to the model. Any client that can publish, including a non-human, can submit the approval. Approver identity is available as the Ably `clientId`.

The page distinguishes this from a normal client-executed tool. A tool with no execute function sits in `input-available` and the client runs it. An approval tool sits in `approval-requested` until a person returns `tool-approval-response`, and the tool then runs on the server.

## Key facts

- Gate: `needsApproval` per call, not merely per tool name, so an already-approved call id does not ask again.
- Suspend when finish reason maps to `suspend`; otherwise end the run.
- Client message kind: `tool-approval-response`, addressed by `codecMessageId`, reusing `runId`.
- Example tool is a bank transfer with amount and recipient.
- Model named in the sample: `claude-sonnet-4-20250514`.
- No built-in timeout. First response wins. Pending state survives disconnect.
- Related docs on the same product: tool calling, multi-device sessions, reconnection, push notifications, durable execution.

## How it works

1. Model streams a tool call that requires approval and finishes with tool-calls.
2. Agent suspends; the pending call is on the session.
3. Any client renders it.
4. User approves or rejects. Client publishes the response and wakes the agent with a continuation POST.
5. Continuation re-enters the same run id, the gate opens, and execute runs on the server.

## Implications for askmeapi.com / ui121

Ably already solved multi-device delivery and durable pending state for chat-shaped agents. It still assumes a connected client UI in the same session. AskMeAPI is the version of that pattern for agents that are not on Ably: one HTTP ask, a phone or Slack or a page, a structured yes/no. ui121 can be the approval dialog they sketch (`amount`, `recipient`, approve, reject) when the user has no Ably client open. Their warning that a pending request lasts forever unless you add a timeout is a product requirement: default deny on silence.
