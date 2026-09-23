# Tally conditional logic

Source: https://tally.so/help/conditional-form-logic
Fetched: 2026-09-23
Status: ok
Parent collection: https://tally.so/help/compare

## Summary

Tally’s logic help says a form should change while someone answers: show or hide questions, skip pages, jump to a custom thank-you, or send people down another path. Logic is free, with no cap on the number of conditions. Examples include follow-ups that depend on an earlier answer, ending early when someone does not qualify, live quotes from a calculator, and quiz results that show the highest-scoring category.

A logic block sits under an input. Multiple conditions combine as “all” (AND) or “any” (OR), and groups can nest, so an age rule can wrap a country rule. Six actions are named: jump to a page, calculate a value, make a field required, show or hide blocks, hide the next or submit button so the person cannot finish, and redirect to another URL or Tally form. Jumps fire on Next or Submit, so the block must sit on the page where the decision happens. Pages can be renamed. A contents rail appears once a form has 12 or more fields. Hidden blocks can collect extra lead data before a redirect, which they compare to an interactive landing page.

Troubleshooting: the block is on the wrong page, the condition points at the wrong field, or not every answer path was tested. Their AI can be asked to inspect a broken rule. Calculated fields can be printed before and after a block to see values. Required toggles also have a keyboard shortcut.

## Key facts

- Free, unlimited conditions.
- Combinators: all, any, and nested groups.
- Six actions: jump, calculate, require, show/hide, disable progress, redirect.
- Jumps run on Next or Submit, not mid-keystroke.
- Contents rail from 12 fields.
- AI assist offered for debugging rules.

## How it works

The author writes IF/THEN rules in the document. At runtime the respondent only sees the branch that matches. Calculations update prices or scores on the page. Redirects leave Tally for another URL. Qualification can end the form early. Nothing here continues the dialogue after the thank-you.

## Implications for pulsarform.com / ui121

Logic is table stakes and should stay free in the story, because Tally already gave it away. The interesting action is “hide the submit button,” which is a hard stop, and “end early if unqualified,” which is a silent no. A live inbox can turn that no into a visible decline, and can ask a follow-up the author did not pre-build. Do not document Tally’s keyboard shortcuts in Pulsarform marketing.

> “Conditional logic lets your form adapt in real time based on how someone answers.” — Tally help, https://tally.so/help/conditional-form-logic
