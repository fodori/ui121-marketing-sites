# Tally webhooks

Source: https://tally.so/help/webhooks
Fetched: 2026-09-23
Status: ok

## Summary

Tally documents webhooks as the way a form talks to any HTTP endpoint the moment someone submits. They are free for every user. The only trigger described is a new submission: a JSON POST to your URL. If you do not want to run an endpoint, the same help page points at Zapier, Make, Pipedream, or Integrately, and at a Tally MCP server for people building with AI agents such as Claude, where you skip JSON entirely.

The endpoint contract is strict and useful as a commodity baseline. It must accept POST JSON and return a 2xx within 10 seconds. If work takes longer, acknowledge quickly and process elsewhere. Optional signing: a Tally-Signature header is a SHA-256 hash of the payload, base64, using a secret you set. Custom HTTP headers can be added per webhook. Retries if the first attempt misses the window: 5 minutes, 30 minutes, 1 hour, 6 hours, then 1 day. After the last failure, the form owner and creator get one email with the reason and a fix link, and they are not emailed again until the failure clears and returns. You can attach unlimited URLs, pause them, read an event log, edit, or delete. Webhooks created by another integration can only be removed where they were created.

The example event type is FORM_RESPONSE. Useful identifiers in the sample: event id, response id, submission id, respondent id, form id and name, timestamps, plus URLs for a submission PDF and a preview. The field list is a catalog of Tally’s types: hidden fields, calculated fields, text, number, email, phone, link, date, time, long text, multiple choice, checkboxes (both grouped and per-option booleans), dropdown, multi-select, file upload (id, name, url, mime, size), payment split into price, currency, name, email, and a Stripe dashboard link, rating, ranking, linear scale, signature image, and matrix with rows and columns.

The closing section says people use webhooks when native integrations are not enough: own database, custom CRM, admin panel, multi-step automation, PDF or contract generation, and real-time notifications or decision flows inside their own apps. Push beats polling and CSV export, and avoids API rate limits. Delivery logs and retries are the production story.

## Key facts

- Free. Trigger: new submission. Method: JSON POST.
- 10-second timeout; do slow work after the 2xx.
- Signature: SHA-256 over the payload, Tally-Signature header, base64.
- Retry schedule: 5 min, 30 min, 1 hour, 6 hours, 1 day, then one email.
- Unlimited endpoints, pause toggle, event log.
- Event type name: FORM_RESPONSE. Includes PDF and preview URLs.
- MCP mentioned as the no-endpoint path for AI agents.
- Non-technical alternatives: Zapier, Make, Pipedream, Integrately.

## How it works

Publish the form, open Integrations, connect Webhooks, set the URL and optional secret and headers. On submit, Tally POSTs the full field array. Your server checks the signature, stores or routes the JSON, and answers before 10 seconds. Failed deliveries retry on the schedule above. The respondent is not in this loop. The webhook is a one-way event.

## Implications for pulsarform.com / ui121

Tally’s real-time story is a well-specified push. Pulsarform can treat that contract (signed JSON, fast ack, retries, a stable submission id) as plumbing everyone already expects, and put the product value on the human and machine inbox that receives the same event. The MCP aside matters for ui121: Tally already tells AI builders to skip endpoints. A Pulsarform inbox that is also an MCP-readable thread matches that direction without being “another webhook.”

Do not reproduce their sample payload or signature snippet in marketing copy.

> “A webhook lets you send every form submission as structured JSON to any HTTP endpoint in real time.” — Tally webhooks help, https://tally.so/help/webhooks
