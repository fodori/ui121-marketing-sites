# Hygraph and Lokalise for multilingual products

- Source: https://www.hygraph.com/blog/manage-multilingual-products-with-hygraph-and-lokalise
- Fetched: 2026-09-23
- Status: ok

## Summary

A practical guide to localisation beyond translation. The post says cloned sites per language work for a handful of locales and collapse at dozens of markets. Hygraph holds the structured source; Lokalise runs translation, automation, and checks. Together they are meant to be one place for strings instead of spreadsheets.

Cultural fit is part of the job: right-to-left layout, density preferences, navigation, and payments that differ by country. France and Belgium can share a language and still need different copy.

## Key facts

- Scale example used on the page: 35 languages and 60 markets, where manual sheets fail.
- Benefits claimed: one source of truth, simpler versions, automated updates, consistent terminology.
- Lokalise is described as AI-assisted translation plus quality checks, integrated with Hygraph.
- The article includes a setup tutorial for the integration (not reproduced here).

## How it works

Content is authored once in the CMS. Strings go to Lokalise, come back as locale fields, and the API serves the right locale. Teams stop emailing JSON. Updates propagate because both tools share the same entries.

## Implications for uiaas.uk / ui121

Task copy will be localised by the same pair of systems customers already buy. A UI service should store labels as locale fields and accept translations from a tool like Lokalise, rather than inventing a second translation product. Layout flexibility (RTL, density) belongs in the renderer.
