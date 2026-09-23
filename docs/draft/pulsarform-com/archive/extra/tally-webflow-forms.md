# Tally forms on Webflow

Source: https://tally.so/webflow-forms
Fetched: 2026-09-23
Status: ok
Parent collection: https://tally.so/help/compare

## Summary

Tally’s Webflow page says native Webflow forms run out of road when a site needs multi-step flows, conditional logic, or file uploads. Logic cannot be added to Webflow’s own forms. File uploads on Webflow require a paid Business or Ecommerce plan. Tally’s answer is an embed: publish, copy a snippet, paste it into a Code Embed, inline, full page, or as a popup. Quizzes with scores are a few steps in Tally, then the same embed. Submissions can sync to Sheets, Slack, a CRM, Zapier, Notion, or Airtable, described as a thousand-plus tools. Uploads are free up to 10MB per file. Password and similar protections are mentioned without a full list in the extract. Design controls (layout, color, buttons, inputs) are part of the pitch so the embed does not look foreign.

## Key facts

- Webflow native forms: no conditional logic, per this page.
- Webflow file uploads: Business or Ecommerce plans only.
- Tally embed: 10MB uploads on the free plan, multi-step, logic.
- Distribution: Code Embed, including popup.
- Downstream: Sheets, Slack, CRM, Zapier, Notion, Airtable.

## How it works

The website stays in Webflow. The form runtime is Tally. On submit, Tally stores the entry and forwards it. Webflow never sees a live thread. The embed is a one-way island.

## Implications for pulsarform.com / ui121

Site-builder forms are shallow on purpose. Pulsarform can speak to Webflow and Framer users the same way: keep the page, replace the form with one that opens an inbox. The pain is not “Webflow looks bad.” It is that files, branches, and the follow-up all require another product.

> “It’s not possible to add logic in Webflow forms.” — Tally’s Webflow page, https://tally.so/webflow-forms
