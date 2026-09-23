# Slack composition objects

- Title: Slack Block Kit composition objects
- Source URL: https://docs.slack.dev/reference/block-kit/composition-objects
- Fetched: 2026-09-23
- Status: ok
- Parent: source 19

## Summary

Composition objects are the small JSON shapes reused inside blocks and elements. The index lists a confirmation dialog (an extra confirm step on an interactive element), a conversation filter for conversation pickers, a dispatch-action config that decides when a plain-text input emits a `block_actions` payload, an option and an option group for menus, a text object used across blocks, trigger and workflow objects, a Slack file object for images, and a Slack icon object for cards. The fetched page is this catalog with one-line descriptions, not full field tables.

The design point is reuse. Text is not a raw string in every block; it is an object with a type (plain text or markdown) so the renderer knows how to parse it. Options are shared by selects, radios, and checkboxes. Confirmations wrap dangerous actions without a new block type.

## Key facts

- Shared objects: confirm, conversation filter, dispatch action, option, option group, text, trigger, workflow, Slack file, Slack icon.
- Text is structured (the blocks intro uses `mrkdwn` vs `plain_text`).
- Dispatch configuration controls when typing sends an interaction, instead of sending on every change by default.
- Confirm dialogs add a step without custom UI code.

## How it works

Blocks and elements reference these objects by nesting them. The client validates the known shape, renders text according to its type, and uses option lists to fill menus. Interactive timing (dispatch) and safety (confirm) are data on the element.

## Implications for jsonapp.com / ui121

Factor shared objects out of the component schema: text with a format, option lists, and confirm-on-submit. ui121 forms already have labels and options; making them explicit composition objects keeps the catalog smaller and gives a model fewer ways to say the same thing. Confirm-before-action is a governance feature worth showing on a jsonapp.com page when AI-generated UIs can trigger submits.
