# RentAHuman docs: webhooks

- **Source:** https://rentahuman.ai/docs/webhooks
- **Fetched:** 2026-09-23
- **Status:** ok
- **Collection:** sibling of https://rentahuman.ai/docs

## Summary

Agents register public HTTPS endpoints and receive events instead of polling. Each API key can have five endpoints; a sixth create returns 409. Non-HTTPS and private-IP URLs return 400. Each endpoint gets a signing secret once, at creation. Subscribe to named events or to all of them. Management is the same over REST and MCP. A test call sends a signed test event, returns 202 with delivery ids, and is limited to 10 tests an hour. The delivery log can be filtered by endpoint, event type, and status (pending, claimed, delivered, retry, failed), with a page size up to 200.

Events named on the page cover the hire lifecycle: application submitted, accepted, confirmed, rejected, seat expired, ghost flagged, started, start or completion deadline missed, submission submitted, approved, redo requested, rejected, redo deadline missed, message received, completion claimed in chat, proof uploaded, bounty seat filled, bounty completed, escrow funded, escrow released, payment sent, and low wallet balance. The extract cut off after the wallet event, so later events may exist. Payloads are JSON POSTs. The overview on the main docs page adds HMAC-SHA256 in a signature header and exponential backoff. This note does not reproduce their verification sample.

## Key facts

- Cap: 5 endpoints per key. HTTPS only.
- Secret shown once. Test endpoint: 10 per hour.
- Delivery states: pending, claimed, delivered, retry, failed.
- Event themes: applications, ghosts and deadlines, submissions and redos, messages, escrow, wallet.

## How it works

Register, store the secret, verify each POST, and update local state. Retry behavior is their responsibility; the log shows attempts and the last error. Polling remains possible but is what this page is trying to retire.

## Implications for helpexpert.me / newhuman.store

A real-time help product is a webhook product. The events to invent are different: question offered, expert accepted, answer posted, clarification asked, payment released. Their ghost and deadline events are the right obsession — people disappear — and a five-minute SLA needs an even sharper “no one took this” event so the agent can reroute. Cap endpoints, sign the body, and give a test ping. Do not make clients poll a chat transcript to learn that an answer arrived.
