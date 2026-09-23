# Slack — handling user interaction

Source: https://docs.slack.dev/interactivity/handling-user-interaction
Fetched: 2026-09-23
Status: ok

Parent: source 30. The interactive-message guide links here for how an app responds after a click. The listed Slack URL in SOURCES had resolved to the docs home; this page was followed from the live interactive-message article.

## Summary

Slack describes an interaction as a trigger plus a response. Entry points (buttons, shortcuts, and others) cause Slack to POST an interaction payload to a Request URL. The app turns that context into a reply. Setup is in the app dashboard under Interactivity & Shortcuts: turn Interactivity on, set a Request URL, and optionally an Options Load URL for external select menus. Distributed apps need HTTPS (no self-signed certificates). A single-workspace app may use HTTP. The same Request URL also receives modal `view_submission` events. Slash commands have their own URLs.

The POST is `application/x-www-form-urlencoded` with a JSON `payload` field. A `type` distinguishes sources: `block_actions` for Block Kit components, `shortcut` and `message_actions` for shortcuts, `view_submission` when a modal is submitted, `view_closed` when it is canceled. Payloads include the user, component state, and where the click happened.

Responses: an acknowledgment is mandatory — HTTP 200 within 3 seconds — or the user sees an error. A bare ack shows the user nothing further. `response_url`, when present, can publish up to 5 messages within 30 minutes and bypasses channel posting rules because it is a return path from the user’s action. Default is ephemeral. `response_type: in_channel` posts to the conversation. Thread replies need `thread_ts` and `replace_original` false. `replace_original` true updates the source message. `delete_original` true removes it. You cannot change ephemeral into in-channel after the fact, and you cannot use `replace_original` to edit the user’s slash-command text. If you need longer than 30 minutes, post through the normal Web API. GovSlack must use the `slack-gov.com` domain for `response_url`.

Modals use a `trigger_id` that expires in 3 seconds and works once (`trigger_expired`, `trigger_exchanged`). A modal can be designed to mint a new `response_url` on submit. Anything else — reactions, Home tab updates, calls to external systems — counts as an asynchronous response using the payload’s context.

## Key facts

- Ack: HTTP 200 within 3 seconds.
- `response_url`: up to 5 uses, 30-minute window, ephemeral by default.
- Payload types: `block_actions`, `shortcut`, `message_actions`, `view_submission`, `view_closed`.
- `trigger_id`: 3-second expiry, single use.
- Request URL: HTTPS for distributed apps.
- After 30 minutes, use the Web API instead of `response_url`.

## How it works

1. User hits an entry point.
2. Slack POSTs the payload to the Request URL.
3. App acks within 3 seconds.
4. App updates the message via `response_url`, opens a modal with `trigger_id`, or continues out of band.
5. Late work uses the Web API, not the short-lived response URL.

## Implications for askmeapi.com / ui121

Slack’s 3-second ack and 30-minute response window are why a human approval cannot live inside the interaction HTTP call. AskMeAPI should ack Slack immediately, hold the question for as long as the policy allows, and write the result back with the Web API or a stored `response_url` only if it is still valid. ui121 is the async surface when the decision will outlive 30 minutes: Slack gets a link, the page collects the structured answer, and the API updates the message when it can. The single-use `trigger_id` is a warning against opening a modal as the only review UI for slow approvers.
