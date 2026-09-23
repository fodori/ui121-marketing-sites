# splitforms documentation

Source: https://splitforms.com/docs
Fetched: 2026-09-23
Status: ok

## Summary

splitforms documents itself as a hosted form backend you can ship in about a minute. One page is the whole integration reference (anchors, not a multi-page docs hub), so it was not expanded into child notes. Point any HTML form or HTTP POST at `https://splitforms.com/api/submit`. Submissions land in an inbox and a searchable dashboard. You do not run a server, a database, or SMTP. The page says the free plan includes everything on that URL.

Auth is an `access_key` hidden field, one per form. It is not a secret, because it sits in page source. Protection is honeypot, spam scoring, rate limits, quotas, and optional strict origin checks that 403 a mismatched browser origin. Rotate the key in the dashboard if it leaks. Reading submissions back uses a separate account bearer token from Dashboard → MCP, via `GET /api/submissions`. That token must not ship to the browser.

The endpoint accepts form-urlencoded, multipart, or JSON, with open CORS. JSON requests get `{ success, message }`. A normal browser post gets a 302 to a dashboard-configured redirect, or a built-in success page. A `redirect` field in the body is ignored so the endpoint cannot be an open redirect. Error codes include missing key (400), inactive form or origin block (403), unknown key (404), bad content type (415), rate limit or monthly quota (429), and 500. Spam is still answered 200 so bots do not learn. Reserved fields: subject, from_name, replyto, botcheck, form_loaded_at, and captcha tokens. Other fields are stored as sent. Caps: 100 fields, 10 KB per value, truncation rather than rejection.

The dashboard is the source of truth: the row is written before the API responds, even if email or a webhook lags. Search, CSV export, a spam queue with restore, and delete are included. Every submission gets a sequential Lead #N that appears in the inbox, the drawer, the notification, and the autoresponder, so both sides can quote `#101`. Retention: 30 days free, 365 days on Pro and Business, 1,460 days on a 3-year plan.

Email notifications are free, sent with their own SPF, DKIM, and DMARC. If the form has an email field, Reply-To is the visitor, so hitting Reply in your mail client writes back to them. Autoresponders are paid, skip spam, and can use `{{lead_number}}` and other fields. Paid plans can paste an HTML email (50 KB, inline CSS) or relay through your SMTP, with fallback to splitforms if your server fails.

Spam layers: honeypot `botcheck` (silent drop), optional time trap, content scoring into a recoverable queue, per-IP limits of 6 per minute and 20 per 15 minutes. reCAPTCHA v2 can be verified server-side. A Turnstile token is accepted and stripped but, as of this page, not verified server-side. Files: 5 per submission, 5 MB each, paid storage add-on. Without it, text still saves and the JSON says files were dropped.

Webhooks are paid. Slack, Discord, and CallMeBot URLs are auto-formatted. Everyone else gets JSON with `X-Splitforms-Event: submission.created` and an HMAC-SHA256 `X-Splitforms-Signature`. Timeout 8 seconds, one retry on network or 5xx, no retry on 4xx. Integrations on paid plans: Sheets, Notion, Airtable, Slack, Discord, Telegram, CallMeBot, Zapier. The page also points at Make and n8n guides.

Quotas: Free $0 and 500 submissions a month, Pro $5 and 5,000, 3-Year $59 and 15,000. Forms are unlimited. Over quota, new posts are 429 and not stored until the 1st. Storage is Supabase Postgres with row-level security. They say contents are not sold or used to train models. A DPA is at /dpa. EU residency is on the roadmap, not live.

MCP: an install command from Dashboard → MCP lets coding agents list forms, read submissions, generate HTML, and wire integrations. The same docs page’s FAQ repeats the endpoint, the synchronous dashboard write, and retention.

## Key facts

- Single endpoint: POST https://splitforms.com/api/submit.
- Public access_key in the form. Separate bearer token for reads and MCP.
- Lead #N shared with the submitter via email.
- Free: 500 submissions/month, 30-day retention, email notifications. Webhooks and files are paid.
- Pro $5/month, 5,000 submissions, 365-day retention.
- Per-IP: 6/minute and 20/15 minutes. Signature: HMAC-SHA256. Webhook timeout: 8 seconds, one retry.
- Turnstile not verified server-side yet, per this page.
- EU data residency: roadmap only.

## How it works

Create a form, paste the key into HTML, POST. splitforms writes the inbox row, emails you with Reply-To set to the visitor, and optionally webhooks or appends a sheet. The human conversation, if any, happens in email because Reply and the lead number line up. The product inbox is a searchable archive plus a spam queue. An AI agent can read that archive over MCP. The respondent does not get a live form thread.

## Implications for pulsarform.com / ui121

splitforms is the 2026 commodity version of “endpoint plus inbox,” including the MCP read path ui121 already speaks. Pulsarform should assume this plumbing (signed webhook, lead id, spam queue, agent-readable submissions) and sell the missing half: the lead number is a thread both sides stay in, not only a subject line. Reply-To email is their two-way hack. A machine inbox makes that reply a first-class event. Do not copy their request samples into the marketing repo.

> “Every submission gets a sequential Lead #N … so you and the submitter can quote the same ID in follow-ups.” — splitforms docs, https://splitforms.com/docs
