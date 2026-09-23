# Jotform support: show responses live on a site

Source: https://www.jotform.com/answers/36377881-displaying-form-responses-in-real-time-on-website
Fetched: 2026-09-23
Status: ok

## Summary

A public support thread from 9 March 2026 shows a user, servilab (Richard), asking how to display new answers on the same website page in near real time, like a guestbook. An AI support reply says Jotform has no built-in live board that updates a page as submissions arrive. The suggested path is the API or webhooks, then custom code on the site. A thank-you page can echo one person’s own answers, but that does not update for other visitors.

A human agent, Iggy, then gives the webhook setup: Form Builder, Settings, Integrations, search Webhooks, paste a URL, complete the integration. Richard gets that working and asks for a widget or for “the webhook link containing the answers.” Jomel explains there is no embeddable webhook widget. The customer supplies the endpoint. Jotform POSTs submission JSON to it. Delivery has no user interface and does not draw a table.

The practical substitutes offered are not live threads. Make a submissions table public, copy an embed snippet, and drop it on the page. Or build an HTML Table report and iframe it. Richard’s last note is that he wanted a guestbook or a forum: name, date, and topic under each other. He thanks support and implies he may look elsewhere.

The thread is direct evidence of unmet demand at the edge of a major form builder: people want the form to be a public, updating surface, and the vendor’s answer is push JSON somewhere and build the UI yourself, or embed a table that is not a conversation.

## Key facts

- Asked 9 March 2026. No native live guestbook.
- Official path: webhooks or API, customer-built UI.
- Webhook is a JSON POST to a URL the customer owns. Jotform does not host that URL.
- Workaround: public Jotform Tables embed, or an HTML Table report iframe.
- Thank-you pages show one submitter’s answers only.
- User’s desired shape: name, date, and topic stacked like a forum.

## How it works

On each submit, if a webhook is configured, Jotform sends the payload to the customer’s server. That server must store and render it. Alternatively, a public table or report iframe shows stored rows, which is a snapshot surface rather than a push channel. Nothing in the thread subscribes the page to a stream or lets a visitor reply under a previous entry.

## Implications for pulsarform.com / ui121

This is grassroots proof for the landing page. A Jotform customer in 2026 described Pulsarform’s public half in plain language (a guestbook that updates) and was told to assemble webhooks plus a custom front end. Pulsarform can sell that surface as the default: the submission is already a live entry others, or a machine, can see and answer, without a side project.

Do not publish the support steps as a how-to. The marketing point is the gap, not the webhook click-path.

> “Jotform does not have a built-in feature to automatically update and display form submissions live on your website page as they come in.” — Jotform AI support, thread 36377881, 9 March 2026
