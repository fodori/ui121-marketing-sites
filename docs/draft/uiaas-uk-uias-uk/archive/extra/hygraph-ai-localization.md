# AI localization in 2026

- Source: https://www.hygraph.com/blog/ai-localization
- Fetched: 2026-09-23
- Status: ok

## Summary

Jimmy Bergstedt (Etals), published 23 July 2026, defines AI localization as an LLM plus a workflow that adapts content for languages and markets, including cultural details, currency, and local SEO. Hygraph’s partnership with Etals is the commercial frame. The warning is that ungoverned agents produce volume that looks finished and then has to be repaired: drifted voice, broken structure, quiet SEO damage.

Chat windows are treated as fine for one-offs and useless for repeatable operations. The post wants agentic flows over a structured model, with humans reviewing high-impact or low-confidence output.

## Key facts

- Reach figures stated on the page: about 80% of people do not use English as a language they speak or understand; 49.7% of websites are in English; about 1.2% are in a Chinese dialect while nearly 15% of the world speaks or understands Mandarin.
- Scope of AI localization listed: text, audio and subtitles, cultural references, SEO and generative-engine optimisation, and UI layout such as right-to-left.
- Practice list: design source content for expansion, localise at field level, put glossary and style in the system, pilot one or two markets, feed corrections back.

## How it works

The CMS holds locales as fields, not as cloned sites. An agent translates a paragraph or a button without redoing the page. Brand rules and review sit in the pipeline before publish. Etals is the localisation engine; Hygraph is the structured store.

## Implications for uiaas.uk / ui121

Interfaces localise the same way content does: labels, direction, and layout cannot be hardcoded widths. A UI service should store strings and layout as fields an agent may draft and a person accepts per locale. That is a concrete `uiaas.uk` feature, not a slogan.
