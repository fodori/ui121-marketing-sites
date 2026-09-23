# humanlayer on PyPI

Source: https://pypi.org/project/humanlayer/
Fetched: 2026-09-23
Status: ok

License: the project description says the SDK in the repo is Apache 2.0. Body text below is paraphrased. Attribution: HumanLayer authors, repository https://github.com/humanlayer/humanlayer.

## Summary

The package description is the original category definition: an API and SDK so AI agents can contact humans for help, feedback, and approvals, across frameworks and models. Version listed on the page is 0.7.9. It requires Python 3.10 up to but not including 4. Dependencies include Pydantic, requests, python-slugify, python-dotenv, click, and aiohttp. Download counts on the page were small: 11 in the last day, 61 in the last week, 312 in the last month. The first upload in the history table is 0.3.0 on 14 August 2024. A TypeScript package `@humanlayer/sdk` is mentioned alongside pip.

Two primitives do the work. `require_approval` decorates a function so the call blocks until a person decides; a denial’s feedback is passed back to the model. `human_as_tool` is a generic tool the model can call for advice or an opinion, separate from approving a specific function. Contact channels named as shipping or beta include Slack and email; SMS, Discord, webhooks, and async support are on a roadmap table as planned or in progress. Routing can target a team or a person. Because the hook is the tool itself, any framework that can call tools can use it. Examples cited: LangChain, CrewAI, ControlFlow, and a raw OpenAI client.

The stakes model is the marketing argument. Low stakes are public reads and messages to the agent’s author. Medium stakes are private reads and templated outbound messages. High stakes are speaking for the company and writing private data. The claim is that the valuable tools are the risky ones, and “90 percent accuracy” is not good enough for them. Oversight is deterministic because it is inside the function, not a hope that the model will ask. A generation story follows: chat, then human-started assistants, then outer-loop agents that start themselves and must be able to reach humans over chat, email, and SMS, and to pause for hours or days inside an orchestrator.

## Key facts

- Version 0.7.9. Python `>=3.10,<4`. Apache-2.0 stated for the SDK.
- Author email on the page: humanlayer authors at dexter@metalytics.dev.
- PyPI downloads shown: 11 / 61 / 312 (day / week / month).
- Primitives: `@hl.require_approval()`, `hl.human_as_tool()`.
- Channels in the feature table: CLI and Slack and email approvals in beta; SMS/RCS, Discord, async/webhooks, LlamaIndex, and Haystack marked planned.
- Composite contact channels marked in progress. Custom response options and ControlFlow and GripTape marked alpha.
- “Open protocol for BYO server” marked planned.

## How it works

1. Construct `HumanLayer()` (cloud API key in the framework examples).
2. Decorate dangerous functions, and optionally expose a human-as-tool.
3. Pass those callables into whatever tool-calling loop you already use.
4. On a decorated call, a human is contacted on the configured channel.
5. Approval runs the function. Denial returns feedback to the model. A human-as-tool call returns the person’s answer as the tool result.

## Implications for askmeapi.com / ui121

This README is the pitch askmeapi.com is closest to, and the download numbers suggest the SDK did not become a default dependency. The roadmap’s unfinished items (SMS, webhooks, bring-your-own server, custom response options) are the wedge: schema-typed answers, group routing, and a form UI. ui121 implements “custom response options” as a rendered schema instead of a Slack button pair. Apache-2.0 means integrators can read the SDK; the product moat is the hosted ask plus the answer page, not a secret client library.
