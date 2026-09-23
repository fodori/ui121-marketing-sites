# Hygraph AI Agents v2

- Source: https://www.hygraph.com/blog/introducing-hygraph-ai-agent-v2
- Fetched: 2026-09-23
- Status: ok

## Summary

Fabian’s 27 May 2026 update argues that AI inside a CMS fails in two directions: one entry at a time, which wastes the speed, or bulk edits with no review, which editors then undo. The release keeps bulk speed and inserts a human decision before anything is published.

Three agents already existed and are now meant to run across many entries. Translator writes other locales from project guidelines and snapshots the previous version. Summarizer maps chosen fields into another field, such as a title and body into an excerpt. SEO Expert only reads, scores, and comments. It does not change the entry.

## Key facts

- Bulk cap: 50 entries per run, framed as a way to keep token cost predictable.
- Guidelines live on the project, in up to four buckets: glossary, brand voice, audience, and legal. A run can inherit up to three.
- Agents can start from the content table or from a single form, not only from a workflow.
- Claims for large teams: hundreds of entries a day; new-market pages in minutes rather than months; SEO comments without an agency cycle.

## How it works

An editor selects entries and an agent. Work happens in the background. Finished entries sit in a pending state. Review is a field-by-field diff: accept all, reject all, or keep some fields. Nothing publishes until a person says so, and the AI version can be rolled back.

## Implications for uiaas.uk / ui121

This is the governance pattern for generated interfaces. An agent may draft a screen or a translation of a label set, but the live UI changes only after a person accepts the diff. A hard batch cap is a pricing and safety feature, not only a technical one.
