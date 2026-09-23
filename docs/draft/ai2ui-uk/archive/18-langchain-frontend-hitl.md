# LangChain frontend: durable human-in-the-loop UI

- **Source:** https://docs.langchain.com/oss/python/langchain/frontend/human-in-the-loop
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

This frontend guide is the UX companion to LangChain’s HITL middleware. Because pauses sit on LangGraph interrupts and checkpoints, a reviewer can refresh the page or answer from another component and the agent resumes from the stop, rather than replaying the run. The client hook (`useStream` in React, with equivalents called out for Vue, Svelte, and Angular) exposes `stream.interrupt` while a review is pending. The UI renders a card. On a decision it submits a resume command. The interrupt clears and streaming continues.

The payload is a list of action requests (name, arguments, optional description) plus review configs that say which of approve, reject, edit, and respond are allowed. Several actions can be pending together. The guide shows collecting every decision before one submit, because a partial resume is not the contract. Reject carries an optional message so the agent knows whether to abandon, ask again, or try something safer. Edit sends a new argument object and should be validated before it is sent. Respond is again reserved for placeholder tools such as ask-user.

A later section says generic buttons are not enough for booking a flight, approving a refund, or reviewing a post. A tool can interrupt with its own form spec: a form type, title, context, and fields (select, checkbox, textarea, currency). The client switches on form type. To keep the card visible after resume, the guide commits the resolved card into message state in the same step, so the decision survives refresh as part of the transcript rather than as fleeting UI.

Best practices: show what and why, make approve one click, validate edits, rely on the checkpoint so refresh does not lose the interrupt, log every decision with user and time, and do not block forever without showing how long the agent has waited.

## Key facts

- Durable across refresh and across components because of checkpoints.
- SDK examples: `@langchain/react`, Vue, Svelte, Angular stream hooks.
- Payload: `actionRequests` and `reviewConfigs.allowedDecisions`.
- Custom cards are JSON-serialisable interrupt values, typed in the examples as an interrupt card and a review decision (approved flag plus edited values).
- Example form types: flight booking, refund approval, content review.
- Chaining: one run can interrupt for a search approval and again before sending email.

## How it works

The agent hits an interrupt and yields. The hook keeps that payload next to thread state, so it can render inline, in a queue, in an admin view, or in a blocking modal. The user decides. Submit sends resume with one decision per action. The backend applies approve, reject, edit, or respond and continues. For custom forms, the tool itself calls interrupt with the form spec and branches on the returned decision before doing the slow work. A respond-with-update call paints the resolved card immediately and reconciles it when the run echoes the message.

## Implications for ai2ui.uk / ui121

This page is the product spec for the human gateway’s UI: durable cards, per-action decisions, typed forms, and an audit line in the transcript. ai2ui.uk can be the hosted renderer when the customer does not want to build React cards per tool. The form-type switch is the “structured answer, not chat” claim. Marketing should promise refresh-safe review and one-click approve, and should show waiting time so long pauses are visible. The framework still owns the graph; the gateway owns the card and the notification.
