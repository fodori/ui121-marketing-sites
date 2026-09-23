# Localization versus internationalization

- Source: https://www.hygraph.com/blog/localization-vs-internationalization
- Fetched: 2026-09-23
- Status: ok

## Summary

Emily’s explainer, updated by Jing on 23 June 2026, separates two jobs. Internationalization is the engineering decision to make a product localisable later: strings out of code, layouts that can grow, a stack that understands locales. Localization is the later adaptation to a place: language, currency, units, reading direction, and legal notices such as privacy.

The post’s CMS point is to put locale support in the schema at the start, then switch locales on when a market appears, and pay for the ones in use.

## Key facts

- Abbreviations used: i18n and L10n.
- Examples of granularity: Canada and Belgium; US versus UK measurement; DACH paths such as separate German, Austrian, and Swiss locale codes, including French and Italian for Switzerland.
- Hygraph claim: GraphQL schema can include localisation from day one; extra locales are added on the plan rather than via a migration.

## How it works

Developers design components and data so text, direction, and format are data. Editors later fill a locale. A headless API returns the locale the client asks for. Retrofitting a CMS that cannot do this is treated as a migration, not a setting.

## Implications for uiaas.uk / ui121

A UI service that hardcodes English layout will fail the same test. `uiaas.uk` should describe internationalised components (expansion, RTL, locale-specific fields) as part of the renderer, with localisation as content on the schema. That is a UK/EU selling point, not a plugin.
