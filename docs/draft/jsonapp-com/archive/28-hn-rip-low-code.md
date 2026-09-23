# Hacker News — RIP Low-Code 2014–2025

- Title: RIP Low-Code 2014-2025
- Source URL: https://news.ycombinator.com/item?id=46767440
- Fetched: 2026-09-23
- Status: ok

## Summary

The thread, 287 points and 157 comments at fetch, discusses a zackliscio.com post titled "RIP Low-Code 2014-2025." The article page itself was not the assigned URL; this note is the HN discussion. The original claim, as commenters reconstruct it, is that AI coding has ended the low-code era, with at least one team dropping Retool. The comments mostly refuse a clean funeral.

David Polberger, co-founder of Calcapp (formula-driven apps), says a customer cancelled to move to an AI platform. His next bet is not an LLM inside the builder. It is exposing every function over MCP so users bring their own agents, while he also turns the formula engine into a developer library. He still wants no-code and low-code because citizen developers can see and edit what the system is doing, and because guardrails constrain a model. The OP agrees value might accrue to SaaS or to the model vendors, and that bring-your-own-agent is under-built. Other comments push GraphQL introspection or OpenAPI/Swagger as the thing models navigate well; one says dumping a full GraphQL schema into context is expensive and increases hallucinations, so narrow tools work better. `schema.json` is praised specifically as something models use to learn an API.

A strong counter-thread says low-code and agents will merge. Direct manipulation still matters so non-engineers can see what the agent built, and models now fill the gaps that used to dead-end a visual tool. Another comment says the money in low-code is enterprise glue (file share to SharePoint to ERP) under IT governance, which a departmental vibe-coded app does not pass. Historical notes stretch "low-code" back through Mendix, MS Access, PowerBuilder, and Oracle Forms; one joke is that every language above C is low-code. A critic says the article’s anti-no-code point (visual UI is a bad interface for AI) does not kill low-code, and that the post over-generalizes from a single Retool cancellation.

## Key facts

- HN item 46767440. About 287 points and 157 comments. Title date frame: low-code 2014–2025. Fetched 2026-09-23; the page says the post was about seven months old.
- Calcapp anecdote: a customer left for an AI platform. Response considered: MCP for all product functions, plus a developer-facing formula engine.
- AI-friendly artifacts named in comments: GraphQL schema.json, Swagger/OpenAPI. Full introspection called out as context-heavy.
- Consensus is not "low-code is dead." Repeated alternative: merge visual tools with agents, keep guardrails, keep IT-operated platforms for cross-system work.
- The linked essay was not fetched; claims about its body are only what commenters say.

## How it works

Not a product mechanism. The mechanism under debate is how an app gets defined when a model can write code. One camp says skip the visual builder and let the model emit a normal program. The other says keep a constrained surface (formulas, schemas, MCP tools, a canvas) so the model and the human share something they can both inspect. schema.json and OpenAPI are the concrete artifacts people trust models to read.

## Implications for jsonapp.com / ui121

This thread is the demand-side argument for JSON UI in the AI era, if you quote it accurately. Commenters did not crown JSON apps. They said models need a schema, humans need to see and edit the result, and enterprises still buy governance. A JSON UI schema is one answer to all three: the model writes it, a human diffs it, a runtime enforces it.

Do not headline "RIP low-code" as ui121’s position. The more defensible line from this page is that visual lock-in is what looks fragile, and a declarative artifact (schema, formula, JSON UI) is what both agents and operators can share. MCP-as-the-interface is adjacent: ui121 already speaks MCP; the app definition can be the resource those tools edit.

> "The graphql schema.json is very very good at helping ai's figure out how to use the service."
