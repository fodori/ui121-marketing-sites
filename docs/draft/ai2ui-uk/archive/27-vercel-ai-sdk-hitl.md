# Vercel AI SDK: human-in-the-loop in Next.js

- **Source:** https://ai-sdk.dev/cookbook/next/human-in-the-loop
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The Vercel AI SDK cookbook shows tool-execution approval inside a Next.js chat. Without a gate, `streamText` runs a tool’s execute function as soon as the model calls it. Setting `needsApproval` on the tool inserts a pause. The server still defines execute, but the SDK emits a tool part in the `approval-requested` state and does not run execute until the user responds.

On the client, `useChat` provides `addToolApprovalResponse`. The UI switches on the tool part state: approval requested shows approve and deny; output available shows the result; output denied shows that the request was refused. Passing `sendAutomaticallyWhen` with a helper that detects a complete set of approval responses sends the follow-up without a manual second submit. If nothing happens after a click, that helper or an explicit send is missing.

Approval can be dynamic. A payment tool can set `needsApproval` to an async function of the input, so only amounts over 1,000 require a person and smaller payments run immediately. The currency is the example’s dollar amounts. Denial should be paired with instructions that tell the model not to retry the same tool and to tell the user the action did not happen. The cookbook points at a `/chat/tool-approval` example in an end-to-end Next app and at the tool-approval docs.

The pattern is deliberately local to one chat session. The buttons live in the same transcript as the assistant. There is no separate reviewer, no hours-long durable wait, and no audit store in the recipe.

## Key facts

- Stack: AI SDK `streamText`, `useChat`, Next.js route handler, example model `gpt-4o`.
- Tool state names: `approval-requested`, `output-available`, `output-denied`.
- Client API: `addToolApprovalResponse` with an approval id and an approved boolean.
- Auto-continue: `lastAssistantMessageIsCompleteWithApprovalResponses`.
- Dynamic example: payments over 1000 need approval; at or below that they execute.
- Denial handling is a prompt instruction, not a framework default in the snippet.

## How it works

The browser sends messages to a route. The model calls a tool. If approval is required, the stream includes the pending tool part and stops before execute. The user clicks. The approval response is attached and the conversation is sent again. The server runs execute only if approved, and otherwise lets the model see the denial. Conditional approval inspects arguments before deciding to pause.

## Implications for ai2ui.uk / ui121

This is another bespoke HITL UI, this time as chat buttons beside the transcript. It is the right demo for a single user who is already in the chat, and a weak fit for a finance approver, a phone, or a queue. ai2ui.uk can be what you render when `approval-requested` should leave the browser: a link, a structured card, a second person. Marketing contrast: in-chat approve is a component; a human gateway is a destination any agent can open, including ones not built with this SDK. Keep the dynamic threshold idea — not every call pauses — as product copy.
