# Tally and Google Sheets

Source: https://tally.so/help/form-builder-for-sheets
Fetched: 2026-09-23
Status: ok
Parent collection: https://tally.so/help/compare

## Summary

Tally’s Sheets page says a form should do more than dump cells, then describes exactly a dump: each submission appends a row as soon as it arrives, in a spreadsheet tied to a free Google account. Columns can be moved or deleted and later responses follow the new layout. The sales line is that Sheets becomes the backend for forms that branch and convert, while Tally supplies the advanced front end without a high price. Use cases are analysis, automation, and sharing the sheet. There is no mention of writing a reply back into the form, of partial rows, or of conflict handling if two people edit the sheet.

## Key facts

- One new row per submission, described as instant.
- Requires a Google account to create the sheet.
- Column reorder survives later submissions.
- Positioned as a free advanced front end on a Sheets backend.

## How it works

Connect the integration, publish, and every completed response becomes cells. Humans and scripts work in the sheet. The form does not stay in the loop.

## Implications for pulsarform.com / ui121

Sheets-as-inbox is the default small-team workflow. Pulsarform can sync a row for people who want it and still keep the canonical object as a thread. If the only real-time surface is a spreadsheet cursor, the product has not left 2016.

> “A new row is automatically created in your Google Sheet every time someone submits your form.” — paraphrased from Tally, https://tally.so/help/form-builder-for-sheets
