# Typeform Create API

Source: https://www.typeform.com/developers/create/
Fetched: 2026-09-23
Status: ok

Parent: source 28, https://developer.typeform.com/

## Summary

Create is Typeform’s REST API for forms, images, and themes, so a program can build a typeform without the visual builder. The page’s promises are on-the-fly forms, personalized greetings and thank-you screens, custom images and themes, Logic Jumps so respondents skip irrelevant questions, and hidden fields that record where traffic came from. It points to a troubleshooting section for errors, and to walkthroughs and reference docs once you have a personal access token.

Three objects organize the API. Forms are the conversational questionnaires, including hidden fields and logic. Images (and videos) are account assets attached to forms, and can vary by respondent. Themes are the visual system: colors for questions, buttons, answers, and background; font; optional background image with brightness and scaling. Custom themes can be created and assigned per form or per audience. Default themes remain available.

This is the “define the question” half of a form API, not the “wait for this person” half.

## Key facts

- Resources: forms, images, themes.
- Advanced features named: Logic Jumps, Hidden Fields, per-respondent images and themes.
- Auth path mentioned: personal access token, then walkthroughs or the reference.
- No wait/callback semantics for a single respondent on this page.

## How it works

A client with a personal access token creates or updates a form definition, uploads images, and attaches a theme. Respondents later open that form. Logic and hidden fields are part of the definition, not of the submission transport.

## Implications for askmeapi.com / ui121

AskMeAPI’s question schema is the analogue of a one-off Create call: define fields for this decision only, do not leave a permanent survey behind. ui121 can generate that throwaway form from the schema without a theme API. If a design partner already lives in Typeform, Create is the integration to mint the form, and AskMeAPI still owns the correlation id and the resume.
