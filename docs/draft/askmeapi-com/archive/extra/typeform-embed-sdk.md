# Typeform Embed SDK

Source: https://www.typeform.com/developers/embed/
Fetched: 2026-09-23
Status: ok

Parent: source 28, https://developer.typeform.com/

## Summary

Every typeform has a shareable URL. The Embed SDK exists for audiences who should never leave the host site. It is a client-side script and a CommonJS module. The page says the library is open source and accepts contributions; it does not name the license on this page. Placements: inline or full-page in the document, popup or slider, and a smaller popover or side tab. The SDK call chooses the form and the behavior. You need a Typeform account; forms can be made in the admin UI or via the Create API.

Limits: CSP blocks embeds on insecure pages. HTTPS or HTTP on localhost is allowed, including wrapped progressive web apps. Modern browsers on major platforms are supported, with a separate browser list. People who do not want to write front-end code are pointed at a Help Center snippet instead.

The human still completes a Typeform. Embed only changes where the iframe or widget sits. It does not describe passing a JSON schema from an agent or returning the answer to that agent except through Typeform’s normal response pipeline.

## Key facts

- Library: client-side script and CommonJS. Stated as open source; license not named on the page.
- Modes: inline, full page, popup, slider, popover, side tab.
- Embeds require HTTPS, or HTTP on localhost. CSP blocks unsecure parent pages.
- Forms come from the builder or the Create API.
- Non-developers are offered a copy-paste snippet in the Help Center.

## How it works

Load the embed library, call it with a form id and options (the hub example uses `createWidget` and hidden fields). The widget collects the response inside the host page. Submissions flow through Typeform as usual.

## Implications for askmeapi.com / ui121

Embed is the UX bar for “the question appears where the human already is.” ui121 should feel inline the same way: a small panel, not a new product the approver must learn. AskMeAPI’s difference is that the form is generated for one request and the submit resumes a server, which an embed of a standing Typeform does not do. Open-source embed is a reminder that the widget is not the moat; the wait-and-resume contract is.
