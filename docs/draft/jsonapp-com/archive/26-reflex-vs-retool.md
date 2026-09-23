# Reflex vs Retool vs Superblocks

- Title: Reflex vs Retool vs Superblocks
- Source URL: https://reflex.dev/blog/reflex-vs-retool-vs-superblocks/
- Fetched: 2026-09-23
- Status: ok

## Summary

Reflex’s comparison post says the durable questions are who owns the code, how far you can customize, and where you can deploy. All three products build internal apps faster than a from-scratch codebase. The post is written by Reflex and says so.

Retool, in their telling, is the fast path to CRUD and dashboards: 100+ components and native connectors for PostgreSQL, Snowflake, REST, and Google Sheets, among others. You drag components, wire queries, and add logic visually. The cost is a closed hosted product. Application logic lives in a proprietary runtime, stored as JSON configs tied to that runtime. Self-hosting is an Enterprise plan plus Docker or Kubernetes work, and they say feature updates lag the cloud. Leaving is closer to a rebuild than a migration. Retool’s AI Assist generates pages and queries inside the visual builder, in Retool’s format.

Superblocks aims at JavaScript and TypeScript teams. Clark, their agent, generates React apps and automations from a prompt, connected to company data and design systems. The React is readable and can sync to an IDE, but it still runs in Superblocks’ runtime, so an exit is a partial rebuild. Deployment in their description is a managed builder plus on-prem agents in a VPC.

Reflex is an Apache 2.0 Python framework: frontend and backend in one Python codebase, 60+ components, an ORM, WebSocket state sync, `pip install reflex`. They cite 28,000+ GitHub stars and adoption across 40% of Fortune 500 companies. You can wrap an npm React component without writing JavaScript. Deploy to Reflex cloud, a VPC, or on-prem with Helm. Their AI builder (build.reflex.dev) uses Claude Opus 4.6, including a one-million-token context claim, and emits ordinary Reflex Python. License: Apache 2.0, stated on the page.

Their decision rule: Retool if you want the fastest standard CRUD app and accept the vendor; Superblocks if you already live in React and want AI code inside a managed platform; Reflex if the team writes Python and wants files it owns.

## Key facts

- Retool, as described here: 100+ components; JSON configs bound to a proprietary runtime; Enterprise self-host; AI output stays in the builder format.
- Superblocks: Clark generates React; runtime dependency remains; VPC agents for data.
- Reflex: Apache 2.0; 60+ components; 28,000+ stars; 40% of Fortune 500 claimed; Claude Opus 4.6 builder; Helm on-prem.
- Connectors named for Retool: PostgreSQL, MySQL, MongoDB, Snowflake, Google Sheets, REST.
- Migration: Retool described as a rebuild; Superblocks as a partial rebuild; Reflex as normal Python on any compatible host.

## How it works

Each tool turns a high-level description into an internal app. The difference the post cares about is the artifact. Retool’s artifact is JSON that only Retool runs. Superblocks’ artifact is React that still expects Superblocks. Reflex’s artifact is Python in git. AI generation follows the same split: it writes into whichever artifact the platform owns.

## Implications for jsonapp.com / ui121

This is the commercial frame for "apps from configuration." The sentence to reuse, aimed at Retool, is that the app is JSON and the JSON is not portable. ui121 can agree with the first half and reject the second: the JSON is the product, validated by a published schema, renderable by more than one host. That is the opposite of "export is a backup of a proprietary canvas."

Do not cite Reflex’s Fortune 500 or star counts as ui121 facts. Cite them only as Reflex’s own comparison. The useful market snapshot is the three artifacts: locked JSON, locked generated code, and owned source. ui121 proposes a fourth: owned JSON that is the source.

> "Application logic lives inside their proprietary runtime, and apps are stored as JSON configuration files tied to that runtime."
