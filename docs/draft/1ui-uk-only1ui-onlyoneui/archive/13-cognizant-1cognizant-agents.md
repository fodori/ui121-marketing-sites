# Cognizant AI Lab — Multi-agent system for 350,000 employees

- **Source:** https://www.cognizant.com/us/en/ai-lab/blog/how-cognizant-agentified-its-enterprise-intranet
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Cognizant’s 25 June 2026 Q&A describes rebuilding its intranet, 1Cognizant, as one interface over a multi-agent system for about 350,000 employees. The diagnosis matches the one-UI pitch almost sentence for sentence: the intranet had become a patchwork of departmental portals on different stacks. Booking leave was one system; checking an IT request was another. AI tools then landed in the same silos. The tools got smarter and the experience stayed fragmented.

The rebuild, led in the conversation by Venkatesh Balaji (enterprise architecture) and Dan Fink (platform engineering), puts a single conversational interface on web and mobile in front of more than 200 agent capabilities. Integrations named include Salesforce Agentforce, ServiceNow, PeopleSoft, Palo Alto Networks, and Cisco. The orchestration layer is neuro-san, Cognizant AI Lab’s open-source framework. It routes each query, keeps session history, and uses a hierarchy so an HR agent delegates to HR sub-agents instead of one flat router knowing all 200. Sensitive fields move on a side channel called sly-data that is kept out of logs and the chat transcript. The service runs stateless per query on Azure, scaling to about 60 pods. Latency is seconds, which they compare with the time a human would spend opening a dozen applications.

Results claimed within five months: 50% better operational efficiency, 50% fewer support tickets, intranet engagement up 35%, about 10,000 average daily users, more than 10 million agent interactions, 92% positive feedback, and responses twice as fast as the previous experience. The surprise they report is that many tickets were people who could not find the right system. Remove the navigation and the ticket is never opened. Next steps named: Genesys voice with the same context, more than 200 capabilities, and a responsible-AI framework. neuro-san is described as LLM-agnostic and cloud-agnostic, with a designer for prototyping networks.

Section outline: the fragmentation problem; what 1Cognizant is; agentification; neuro-san routing; sly-data; scale and latency; third-party agents; results; lessons; cost; what is next.

## Key facts

- About 350,000 employees; one interface on web, intranet, and mobile.
- Grew from 3 agents at launch to 200+ capabilities.
- Five-month results: 50% support-ticket reduction, 50% operational-efficiency improvement, +35% engagement, ~10,000 daily users, 10 million+ interactions, 92% positive feedback, 2× response speed.
- Integrations: Salesforce, ServiceNow, PeopleSoft, Palo Alto Networks, Cisco; voice via Genesys planned.
- Architecture: hierarchical orchestration, stateless queries, private data channel, horizontal scale to ~60 pods.
- Open source: github.com/cognizant-ai-lab/neuro-san (as linked from the article).

## How it works

Agentification here means a natural-language layer on existing agents and APIs so one query can touch many systems. The employee does not choose the system of record. neuro-san picks the agent, that agent checks role-based access (the Salesforce pipeline example), and the answer returns in the same thread. Security boundaries and integration planning are called prerequisites, not afterthoughts, because a multi-agent build exposes inconsistent enterprise APIs. Cost is described as incremental containers plus tokens, more than offset by the ticket drop.

## Implications for the one-UI domains / ui121

This is the strongest proof point in the set that one surface changes outcomes, and it is a bespoke programme most buyers cannot copy. 1ui.uk can tell the story and then separate two layers. Cognizant unified navigation with a conversational shell over 200 agents. ui121 is the rendering contract underneath a shell like that: when the agent must collect a leave date, show a ticket status, or draw a chart, it emits a task on a universal canvas instead of a paragraph. The ticket lesson is the marketing line — a large share of “support” is people lost between apps. A JSON UI canvas is how a smaller organisation gets that removal of navigation without standing up a 200-agent platform first.

> “Booking leave meant one system, checking IT request status meant another.” — Cognizant AI Lab, describing the old 1Cognizant intranet
