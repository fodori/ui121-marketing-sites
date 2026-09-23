# Typeform Webhooks API

Source: https://www.typeform.com/developers/webhooks/
Fetched: 2026-09-23
Status: ok

Parent: source 28, https://developer.typeform.com/

## Summary

Typeform webhooks fire when a form receives a submission and POST the response data to a URL you choose. Your endpoint must answer with a 2xx or Typeform treats the delivery as failed. Copies remain in Typeform’s database, so the Responses API and the product UI still work; the webhook can arrive a few seconds before the submission shows up in that database.

New webhook URLs must be HTTPS. Existing HTTP webhooks keep working but can only be changed to HTTPS, not to another HTTP URL. Payloads can be signed. If the endpoint does not respond within 30 seconds, delivery fails and retries start. A 410 or 404 disables the webhook immediately with no retry. 429, 408, 503, or 423 retry every 2–3 minutes for 10 hours. Other error codes retry five times on a backoff the page lists as 5 minutes, 10 minutes, 20 minutes, 1 hour, 2 hours, 3 hours, and 4 hours (that is more than five steps; the page states both “five times” and that schedule). A webhook that fails every attempt is disabled after more than 300 attempts in 24 hours, or after 100 attempts in 5 minutes, and you are notified. Ports in the URL are allowed. The page points at reference docs and a sample payload.

## Key facts

- Trigger: new response submission. Ack: HTTP 2xx.
- Timeout: 30 seconds before a delivery is failed.
- HTTPS required for new URLs. Signing available.
- Hard disable: 404 and 410, no retry.
- Slow retry: 429, 408, 503, 423 every 2–3 minutes for 10 hours.
- Auto-disable: 100 percent failure and either >300 attempts in 24 hours or 100 attempts in 5 minutes.
- Data still stored at Typeform. Webhook can lead the database by a few seconds.

## How it works

Register a URL for a form. On submit, Typeform POSTs the payload. You ack quickly, then process. Failures follow the retry and disable rules above. You can still read the same submission later via the Responses API.

## Implications for askmeapi.com / ui121

A webhook-on-submit is the right resume signal for a waiting agent, and Typeform’s retry rules are a checklist for AskMeAPI’s own callbacks: fast ack, signed body, HTTPS, give up on 404, do not retry forever. ui121 should POST the validated answer to the caller’s webhook and return 2xx only after the payload is durable, so a 30-second handler does not drop the human’s work. The “still stored at the vendor” point is the audit copy AskMeAPI should keep even when the customer’s endpoint is down.
