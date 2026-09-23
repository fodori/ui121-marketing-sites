# Hygraph AI Assist generally available

- Source: https://www.hygraph.com/blog/ai-assist-is-now-generally-available
- Fetched: 2026-09-23
- Status: ok

## Summary

Fabian’s note, originally 9 February 2026 and updated 12 June 2026, marks AI Assist as available on every plan after an enterprise early access. It is an in-entry assistant, not the bulk agents. It drafts, rewrites, or translates fields and stays aware of the schema, so suggestions match field types.

Editors review before apply. Roles and permissions are unchanged. Token allowances scale with the plan.

## Key facts

- Up to five fields in one pass.
- Actions: create from a prompt, improve with an inline diff, translate into a configured locale while keeping structure and embedded content.
- Since early access, each field returns as soon as it is ready rather than waiting for the whole batch.
- Free plans get a baseline token allowance; self-serve gets more; enterprise gets the highest.

## How it works

Open an entry, invoke AI Assist, accept or revert per field. The model sees the content model, not a blank prompt. Publishing is still a separate editorial act.

## Implications for uiaas.uk / ui121

A field-level assistant is the small version of an agent that edits a UI schema. Ship the inline diff and the permission check before any “generate a screen” demo. Token tiers are a ready pricing sketch for assisted authoring.
