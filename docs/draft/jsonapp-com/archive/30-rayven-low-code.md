# Rayven — what is a low-code platform?

- Title: What is a low-code platform?
- Source URL: https://www.rayven.io/blog/what-is-a-low-code-platform
- Fetched: 2026-09-23
- Status: ok

## Summary

Paul Berkovic, Rayven, published 3 July 2025 (page dates in the article metadata), writes a developer-facing guide to low-code. The page is also a pitch for Rayven’s own platform. The opening claim is that analysts expect 70% of new applications to use low-code or no-code technologies by 2025. Gartner’s definition, quoted in the article, is a platform for rapid application development with one-step deployment, execution, and management, using declarative high-level abstractions. The platform owns frameworks, servers, and databases. The author draws a line: no-code targets non-programmers and pure configuration; low-code still lets you drop in code for the cases the visual tools miss.

Building blocks he says most platforms share: a visual IDE (forms, flowcharts, rules); a UI kit (forms, tables, charts, buttons) so you do not write HTML and CSS; a data modeler that creates tables or maps an existing database, with SQL as an escape hatch; graphical workflow (events, actions, timers); connectors for systems such as Salesforce, Stripe, and SAP, plus generic REST; one-click deploy with versioning and CI hidden inside the product; and security, SSO, roles, audit, and governance so citizen-built apps are visible to IT.

Benefits, with the figures he attaches: cycle time up to about 90% faster (he attributes the estimate to Red Hat and others); Gartner’s claim that demand for enterprise apps is five times what IT can deliver on time; Gartner’s observation that half of new low-code clients will come from business buyers outside IT by 2025, which he reads as a reason for IT to offer a sanctioned platform rather than chase shadow spreadsheets; a Forrester analysis that an average company avoided two extra full-time developers and saved about $4.4 million over three years. He is clear that a new database engine or a novel algorithm is still traditional code. The fit is internal tools, dashboards, forms, workflows, and CRUD.

The vendor tour is Rayven (hybrid SQL and Cassandra, AI and LLMOps, on-prem or SaaS, HTML/JS injection and prompt-to-build), Airtable, OutSystems, Bubble (no export of underlying code; apps run on Bubble’s cloud), and Mendix (business studio plus pro studio, Siemens). He says analysts have tracked over 200 vendors. FAQ answers: low-code does not replace engineers; it is a force multiplier; enterprise platforms can be certified and used by banks and governments if configured properly.

## Key facts

- Author: Paul Berkovic. Dates on the page: published and modified 3 July 2025.
- Analyst line: 70% of new applications on low-code or no-code by 2025 (unattributed "analysts" in the lede).
- Gartner, as quoted: half of new low-code clients from business buyers outside IT by 2025; app demand 5× IT capacity.
- Forrester, as cited: avoid ~2 hires, about $4.4M over three years.
- Speed claim: up to ~90% faster cycles, attributed loosely to Red Hat and others.
- 200+ vendors, per the article.
- Bubble called out as no code export. OutSystems and Mendix as enterprise visual models with custom-code escape hatches.
- Rayven capabilities named: Cassandra plus SQL, GenAI, prompt-to-build, on-prem.

## How it works

A developer or power user draws UI and process. The platform compiles that model into a running app, hosts it, and applies identity and audit. Custom code is a plugin when the model is not enough. The definition of the app stays inside the platform’s project, except where a vendor chooses to export. The article’s own product adds AI connectors and prompt-to-build on top of the same visual stack.

## Implications for jsonapp.com / ui121

The demand evidence is the Gartner line the source list wanted: a large share of new low-code buying comes from outside IT, and IT cannot staff the app backlog (5×). Those buyers need an artifact they can change without a mobile release. Visual low-code is one answer and it locks the definition in the vendor, which this article illustrates with Bubble.

ui121’s counter is declarative in the sense Gartner’s definition already uses, but the declaration is portable JSON plus a schema, not a private canvas. Prompt-to-build, which Rayven advertises, is the AI shift: the prompt should emit the JSON app, and the runtime should enforce it. Use the 70%, 5×, "half of clients," and $4.4M figures only as this vendor’s citations of analysts, not as ui121 measurements.

> "Half of all new low-code clients will come from business buyers outside IT by 2025."
