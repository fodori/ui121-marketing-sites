# Slack block elements

- Title: Slack Block Kit block elements
- Source URL: https://docs.slack.dev/reference/block-kit/block-elements
- Fetched: 2026-09-23
- Status: ok
- Parent: source 19

## Summary

Block elements are the interactive and inline pieces inside Slack blocks. The reference is a catalog of JSON payloads, one element type per row. It is broader than buttons. Inputs include plain text, rich text (a WYSIWYG composer matching Slack’s own writing experience), email, number, URL, date, time, datetime, file upload, checkboxes, radio buttons, select and multi-select, and an overflow menu. Display elements include text, emoji, image, link, colour swatch, tag, and date. Mentions and unfurls cover user, usergroup, channel, team, message, canvas, file, list record, workflow, broadcast (here, channel, everyone), and AI citations. Newer product surfaces show up as Salesforce data fields, work objects, workflow buttons that run a link trigger with inputs, and feedback buttons.

The page fetched is the index of those types and one-line roles, not the field-by-field schema for each. It is enough to see that Slack’s JSON UI includes form controls, entity references, and charts’ sibling objects, all as typed elements rather than HTML.

## Key facts

- Role: JSON objects nested in blocks; many are interactive.
- Inputs: text, rich text, email, number, URL, date, time, datetime, file, checkbox, radio, select, multi-select.
- Entity chips: user, channel, canvas, file, workflow, citation, Salesforce field, work object.
- Workflow button: runs a link trigger and can carry inputs.
- This URL is an index. Per-element field lists were not each saved.

## How it works

The app places an element in a block’s accessory, fields, or element array. Slack renders the control and, for inputs and buttons, sends an interaction payload back. The element’s type string selects both the widget and the payload shape. Rich text is still a structured element, not a blob of HTML.

## Implications for jsonapp.com / ui121

A credible JSON app catalog needs inputs with formats (email, url, number, date), not only a generic string. Slack’s list is a checklist for that. Entity mentions are platform-specific; ui121’s equivalent is references to tasks, users, or projects as typed values. Keep the index public so an AI can pick a type name from a finite list.
