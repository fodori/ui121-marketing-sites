# Typeform Responses API

Source: https://www.typeform.com/developers/responses/
Fetched: 2026-09-23
Status: ok

Parent: source 28, https://developer.typeform.com/

## Summary

The Responses API is a pull interface. You GET the submissions a form has already collected, as JSON, without configuring webhooks or a third-party connector. It is explicitly different from webhooks, which push each new submission to your URL. Query parameters can limit results to submissions after a time or inside a range. The page warns that very recent submissions — it says within about the last 30 minutes — may be missing from a pull. The reference lists the query parameters. An example application is mentioned so you can retrieve responses programmatically and reuse the same app for any form by changing `form_id`.

For an agent that must not continue until one human answers, polling this API is a poor fit: delay up to half an hour, no single-response wake-up, and no tie to a caller’s request id unless you encode one in hidden fields yourself.

## Key facts

- Pull model: GET historical submissions as JSON.
- Contrast on the page: webhooks and integrations push; this API does not.
- Freshness caveat: submissions from roughly the last 30 minutes may be absent.
- Filters: after a timestamp, or a date range. Full list is in the reference.
- Reuse pattern: same client code, swap `form_id`.

## How it works

1. Hold a Typeform access token and a form id.
2. GET responses, optionally bounded by time.
3. Parse the JSON answers in your own app.
4. Repeat. Recent answers can lag.

## Implications for askmeapi.com / ui121

This is the anti-pattern AskMeAPI should name: a human’s answer sitting in a survey database until something polls. The product returns one correlated response when it is submitted, or times out. ui121 posts that response to the waiting API immediately, which is closer to a webhook than to this pull API. Hidden fields could still carry an AskMeAPI request id if Typeform is the renderer.
