# Infosys — Why ServiceNow’s unified platform works for every department

- **Source:** https://www.infosys.com/iki/perspectives/unified-platform-works.html
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Aniesh Myneni and Priyanka Haldipur’s Infosys perspective (10 July 2026, about 10 minutes) answers what enterprises mean by a unified platform. The practical definition is four things at once: one interface with a consistent design system, one orchestration layer for cross-functional workflows, one data model with shared definitions, and central governance, analytics, and AI trained on that shared data. The problem statement is system sprawl, data silos, fragmented workflows, and disconnected customer and employee experiences — duplicate records, manual handoffs, slow decisions, and AI that cannot act because context is split.

The employee picture is blunt. People stop deciding where to go. A software license, a payslip question, a broken chair, and a security card are one request that routes itself, with visible progress. AI then takes the routine; humans keep exceptions and policy. ServiceNow is described as having grown from IT ticketing into an operating layer for HR, facilities, legal, and customer service because routing, SLAs, approvals, and knowledge were never IT-only problems. Now Assist is the cross-platform AI: the same capability that summarises an incident can draft an HR resolution or a customer reply. Virtual Agent and AI Search clear simple demand. The next step they describe is agents that triage, act inside policy, and escalate, under an orchestrator that logs decisions.

Three case sketches: an international bank’s HR portal with 85% case deflection and 90% of live chats answered in under 30 seconds; a life-sciences firm with 75% of internal HR requests self-submitted and 350+ AI case summaries a week; a CPG firm’s configuration database taken to 100% coverage of critical servers, 130,000 records fixed, and 40% of key asset relationships restored. Departments keep autonomy inside a framework: shared data models and security, local workflow configuration. Infosys’s own accelerator, ESM Café, is a pre-built ServiceNow image meant to speed that rollout.

Section outline: what “unified” means; the sprawl problem; point tools versus AI; experience benefits; ServiceNow as operating layer; cross-department workflows; shared data; federated autonomy; the integrator’s role.

## Key facts

- Unified = one UI, one workflow engine, one data model, central governance and analytics.
- Bank HR portal: 85% case deflection; 90% of live chats under 30 seconds.
- Life sciences: 75% of internal HR requests self-submitted; 350+ AI summaries per week.
- CPG CMDB: 100% coverage of critical servers; 130,000 records corrected; 40%+ of key relationships restored.
- Named ServiceNow capabilities: Now Assist, Virtual Agent, AI Search, AI agent orchestrator.
- Infosys accelerator: Enterprise Service Management Café (ESM Café).

## How it works

A joiner request becomes one workflow across HR, IT, and facilities instead of three inboxes. Each team sees its tasks; the employee sees progress. Core entities (employee, customer, asset) are mastered once and synced by API, with deduplication at creation. AI recommends access, flags delay, and later provisions the standard stack itself. The architecture stays the same across departments; configuration and language change. That is why they say bolted-on AI inside one department’s tool is weaker than AI that sits on the shared engine.

## Implications for the one-UI domains / ui121

Infosys states the category in ui121’s language: experience-layer unification, one design system, no jumping between tools. The catch is that the one UI is ServiceNow’s. 1ui.uk can agree with the outcome (one place for any request) and offer a renderer that is not tied to one workflow suite. Where a company already runs ServiceNow for some processes and other systems for the rest, a JSON canvas is the experience layer that can show a ServiceNow task and a non-ServiceNow form with the same interaction model. The case numbers (85% deflection, 75% self-serve) are the outcome language — fewer tickets because people can see and complete the task — which is the same mechanism Cognizant reported, reached by standardising on a platform rather than by agent-routing over many platforms.
