# Gel — Generative UI with Vercel AI SDK and EdgeDB

- Source: https://www.geldata.com/blog/generative-ui-with-vercel-ai-sdk-and-edgedb
- Fetched: 2026-09-23
- Status: ok

## Summary

Aleksandra Sikora (Gel blog, 27 March 2024) wrote an early practitioner guide to Vercel AI SDK 3’s generative UI, paired with EdgeDB (now Gel) and Next.js. The promise of that SDK release, as she states it, is that you provide functions and a language model decides which to call from the user’s words. The SDK does the awkward bridging between application code and the model. The result is a custom interactive interface, not only a chat string.

The sample product is a vacation-house rental. People browse, book, and add houses to a wishlist by asking in natural language and by using the components the model invokes. She points at a GitHub repo and a deployment on Vercel and EdgeDB Cloud. The post deliberately skips styling and focuses on the core: project setup, schema, and the generative loop.

Stack in her words: the AI SDK supplies actions, tools, and UI components so React can render what the model selected. EdgeDB is presented as a database with a modern data model and a type-safe query language, aimed at avoiding the n+1 query problem, and a good fit for TypeScript and React Server Components. Setup is a canary Next.js app, packages for `ai`, `openai`, `zod`, and EdgeDB, an API key in `.env.local`, the EdgeDB CLI, and `edgedb project init`. The schema sketch is object types for houses, reviews, and bookings — a realistic domain rather than a toy key-value store. The rest of the post is implementation walkthrough (schema, queries, and wiring tools to UI). This note does not copy that code.

## Key facts

- Author: Aleksandra Sikora; 27 March 2024; Gel (formerly EdgeDB) blog.
- SDK moment: Vercel AI SDK 3 “Generative UI.”
- Demo domain: vacation rentals — browse, book, wishlist — via natural language plus interactive UI.
- Libraries named: Next.js, `ai`, `openai`, `zod`, EdgeDB client and code generation.
- Data model: houses, reviews, bookings as typed object types.
- A public demo and repository are mentioned; this note does not depend on them being online.

## How it works

The application defines tools that read and write the rental data through typed queries. The model sees the user’s message and the tool list, picks a function, and the SDK returns a stream the React tree can render as a specific component — a listing, a booking step, a wishlist change. Zod is the boundary on tool inputs. EdgeDB is the system of record so the generated UI is not inventing inventory. Server components are the rendering path she highlights, which keeps data access next to the UI that displays it. The developer’s job is schema, tools, and components; the model’s job is which of those to use for this utterance.

## Implications for ui1to1.com / ui121

This is a 2024 existence proof that teams were already generating interactive UI from an LLM plus a real database, not a slide. ui1to1.com can place JSONUI in that line and then distinguish it. The rental demo is still a chat that occasionally becomes a widget. A one-to-one canvas is the person’s whole working surface: the houses, the booking, and the message from the host, live, for that guest or that operator, without a new app per role.

Type-safe schema plus a component the model may only select, not invent, is the same safety posture as declarative UI. Human-in-the-loop is the booking and wishlist actions: the model can propose, the person confirms on a real control, and the database changes once. That is the company story — one interface, connected to systems of record, with the human inside the action — told through a public tutorial rather than a lab claim.
