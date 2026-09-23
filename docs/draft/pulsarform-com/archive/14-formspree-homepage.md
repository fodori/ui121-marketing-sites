# Formspree homepage

Source: https://formspree.io/
Fetched: 2026-09-23
Status: ok

## Summary

Formspree is a production form backend for people who already own the front end. You build any HTML or JavaScript form, point it at a Formspree endpoint, and they store the submission, send email, filter spam, validate, and fan out integrations. The page says they processed 5 million submissions in the last month and are trusted by 1 million-plus freelancers, agencies, and large companies, with a name-drop list that includes PGA, OpenAI, Amazon, the CDC, UPS, Walmart, Teladoc, T-Mobile, Adobe, IBM, and ReadMe. Compliance named on the page: SOC 2 Type II, GDPR, and CCPA, with detail deferred to a security URL.

The four-step machine is explicit. The server validates and spam-filters. The submission is saved to a Formspree inbox with daily analytics and CSV or JSON export. Notification and autoresponse emails go out from your templates. Then integrations fire: CRM, spreadsheet, helpdesk, newsletter, or webhook. The inbox is passive storage plus mail, not a two-way thread.

Three ways to create a form: a claim URL that encodes fields and actions as query parameters so an agent can hand a user a link, a CLI (`@formspree/cli`) for CI, or a manual dashboard. The claim URL is unusually relevant to AI builders. A prompt can mint `https://formspree.io/claim` with a name, field types (email, text, numeric, url, datetime-local, file) and rules (required, min, max, length), an email action, and bare integration flags such as Slack or Google Sheets that the user finishes with OAuth. The page tells agents not to mark fields required unless the submission truly cannot be processed without them.

HTML posts to `https://formspree.io/f/YOUR_FORM_ID`. AJAX uses `@formspree/ajax`. React uses `@formspree/react` and a `useForm` hook. Feature list: file uploads, autoresponders, custom email templates, server-side validation, email routing, API, Formshield machine-learning spam filtering plus reCAPTCHA and custom rules, a form library, and the CLI.

Integrations split by plan. Notifications (email, Discord, Slack, Telegram) are on all plans. Productivity (Airtable, Asana, GitHub, Sheets, Notion, Trello), CRM (HubSpot, Pipedrive, Salesforce), newsletters, support desks (Freshdesk, Gladly, Gorgias, Zendesk), Stripe, Zapier, autoresponse, and webhooks need a paid plan. The page says direct connections are maintained by Formspree, with retries and error logs, so Zapier is optional. Platform guides exist for Framer, Squarespace, WordPress, Webflow, Shopify, Angular, and Next.js. A documentation index is linked from the homepage (thank-you redirect, JavaScript, HTML, uploads, workflows, plugins, reCAPTCHA, confirmation email, templates, teams, special fields, React). That index is a footer list on a product homepage, not a separate docs hub URL in SOURCES, so those guides were not expanded as extras.

Spam answer: Formshield runs on every submission and is tunable. Submissions always land in the inbox first, then email and integrations. A free plan exists; limits are on the plans page, not quoted here.

## Key facts

- 5 million submissions in the prior month. 1 million-plus customers.
- SOC 2 Type II, GDPR, CCPA.
- Inbox with daily analytics and CSV/JSON export.
- Claim URL for agent-built forms. CLI package `@formspree/cli`.
- Endpoint shape: `https://formspree.io/f/{id}`.
- Formshield ML spam filter plus reCAPTCHA.
- Notifications free; most integrations and webhooks on paid plans.
- Libraries: `@formspree/ajax`, `@formspree/react`.

## How it works

The browser or app POSTs to the endpoint. Formspree validates, scores spam, writes the inbox row, emails the team and optionally the submitter, and calls each connected action. The claim flow lets an AI assemble the form contract before a human confirms the account. There is no described path for the submitter to continue a conversation inside Formspree after the autoresponse.

## Implications for pulsarform.com / ui121

Formspree is the closest “submissions are an inbox” sentence in the developer category, and it stops at storage plus outbound mail. Pulsarform’s line can be: you keep your front end or you use a builder, but the inbox is live and two-way, including an agent that can read the thread the way Formspree’s claim URL already assumes an agent can create the form.

ui121’s MCP and task model fits the claim-URL pattern: an agent should be able to open a form that is already a queue, not only an endpoint.

> “Submissions are saved to the Formspree inbox.” — Formspree homepage, how-it-works section, https://formspree.io/
