# Generative UI: a first look at v0 — Griffiths Waite

- Source: https://www.griffiths-waite.co.uk/insights/article/generative-ui-a-first-look-at-v0
- Fetched: 2026-09-23
- Status: ok

## Summary

Mo Sayed, principal UI developer at UK consultancy Griffiths Waite, 27 November 2023. This is an early, hands-on look at Vercel’s v0 while it was in beta, written because enterprise teams wanted to know if prompt-to-UI could survive forms, tables, and dashboards. Evaluation criteria: ease of generation, code quality, errors, accessibility, brand customisation, whether you can extend the result, and how hard it is to drop into an existing codebase. Appearance was secondary to function. The v0 UI at the time offered a prompt, three variants, then iterative refinement, plus a gallery of other people’s components.

Form: a working date picker, dropdowns, and a file input appeared in a few prompts, each refinement on the order of tens of seconds, most of the time spent writing the prompt. Validation was the miss. Asked for a minimum of three characters on a name, v0 emitted a `minLength` prop with the wrong casing and a wrong value type, even though shadcn’s form stack is built on React Hook Form. Sayed fixed it by hand and calls it the only code error in the study. He treats the lack of a wired validation library as acceptable: React is unopinionated, and the skeleton can be connected to Formik, Hook Form, Yup, or Zod later. He was unsure whether validation was even on the roadmap then.

Table: an invoices grid got the requested columns, an amount input, a status filter popup, and an actions menu. The kebab icon rendered as an asterisk, but the menu (view, edit, delete, mark paid) appeared on hover. Sorting and filtering behaviour were not actually generated; shadcn docs would be used to finish them. Pagination controls were basic. Same conclusion as the form: structure yes, behaviour partly left to the developer.

Dashboard: KPIs, a projects table, and a budget progress bar with a hover spend figure worked. Line and bar charts were placeholders. Sayed guesses a chart library could be taught the way shadcn was, if demand exists.

Overall: under 15 prompts and under 10 minutes per component, streaming into view, mostly JSX composed with shadcn/ui and Tailwind. Accessibility is argued from Radix underneath shadcn. Brand tweaks were possible in the tool. The output is source you can edit. Integration still means choosing state management and fetching data; the FAQ at the time suggested data fetching might come later, and v0 could not yet generate a whole application. Sayed’s forward-looking worry, from earlier model-driven code generation, is regeneration overwriting hand edits. His mitigation: generate sections, not entire screens. Enterprise barriers: companies already own a design system and Figma-to-code tools (he names Anima and Locofy), and they will resist a new component library unless v0 can target theirs. A “Vision” feature announcement is mentioned as a possible way to ingest design. Benefits he is willing to claim: faster shipping, better cross-role iteration, and seeing requirements become UI immediately.

## Key facts

- Published 27 November 2023. Author: Mo Sayed, Griffiths Waite. About 10 minutes.
- v0 was in beta. Study scope: one form, one table, one dashboard.
- Effort reported: under 15 prompts and under 10 minutes per component.
- One functional bug found: minLength prop casing and type on the form.
- Stack observed in output: JSX, shadcn/ui, Tailwind, Radix for accessibility.
- Charts not generated. Sorting and filtering not fully generated. Data fetching not available.
- Enterprise caveats: existing design systems; regeneration versus hand edits.

## How it works

The model emits React source using a known component library. A person iterates with further prompts, then copies the code into an application and wires behaviour the model skipped. That is design-time generation of an artifact. It is not a runtime protocol. The article’s title says “generative UI” because in late 2023 that phrase still mostly meant this.

Section outline: why the study; criteria; form; table; dashboard; seven answers; enterprise barriers; conclusion.

## Implications for generatedui / ui121

Use this piece as history. “Generative UI” in UK consultancy writing began as v0-style code generation. Anyone landing on generatedui.app with that memory will expect a prompt box that emits React. The product page has to break that association in the first screen: runtime blocks and MCP, not a beta that scaffolds shadcn. Sayed’s real findings still help the data-driven argument: generated source was a skeleton, charts and validation fell out, and enterprises will not throw away their component library. A catalog that renders their blocks at runtime answers the objection his FAQ only hoped v0 might address later. The regenerate-and-clobber problem does not apply to a JSON payload that never becomes the source of truth for the design system.
