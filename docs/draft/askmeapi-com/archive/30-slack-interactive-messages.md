# Slack — interactive messages

Source: https://docs.slack.dev/messaging/interactive-messages
Fetched: 2026-09-23
Status: partial

The listed URL returned the Slack developer docs home (CLI install, `slack create`, sample apps), not the interactive-message guide. The mechanism below is from the current guide that home no longer serves at that path: https://docs.slack.dev/messaging/creating-interactive-messages. A linked follow-on, handling user interaction, is an archive extra.

## Summary

Slack’s guide turns a message into a workflow step by adding Block Kit interactive components. The worked example is a paid-time-off request: header, fields for type, requester, and dates, then an actions block with Approve (primary style) and Reject (danger style) buttons. Buttons can also hang off a section as an accessory. Work Objects are mentioned as a newer surface (flexpane, unfurls) that can carry the same kind of actions. Publishing is ordinary message sending; interactivity is in the payload, not in a special post API.

When someone clicks, Slack POSTs an interaction payload to the app’s Request URL. The body is form-encoded with a `payload` parameter that parses as JSON. The app is told to keep the channel id and the `response_url`. It must acknowledge the HTTP call, and it may then post a message, open a modal, or do other async work. The guide defers the menu of response types to the handling-user-interaction article.

This is the de facto approval UI teams hand-wire: two buttons in the channel where the reviewer already works, and a webhook back to the bot.

## Key facts

- Listed URL did not serve this guide on 2026-09-23; content is from `creating-interactive-messages`.
- Example: PTO request with Approve and Reject buttons in an `actions` block.
- Interaction arrives as an HTTP POST; JSON is inside a form field named `payload`.
- Useful fields called out: channel id, `response_url`.
- Block Kit Builder is the prototyping tool named on the page.
- Next step in Slack’s own outline: respond to the interaction (acknowledgment plus optional message or modal).

## How it works

1. App posts a message whose blocks include buttons or other interactive elements.
2. User clicks in Slack.
3. Slack POSTs the payload to the Request URL configured under Interactivity.
4. App acknowledges and uses `response_url` or Web API methods to update the message or continue a workflow.

## Implications for askmeapi.com / ui121

Every ask-a-human product ends up reimplementing this PTO card. AskMeAPI should offer Slack as a channel and also a link-out when the decision does not fit two buttons. ui121 is that link-out: the same approve/reject choice, plus fields Slack buttons cannot collect cleanly, rendered as a page the button can open. The payload’s `response_url` pattern (a capability URL that resumes the interaction) is the same shape as a one-time answer link.
