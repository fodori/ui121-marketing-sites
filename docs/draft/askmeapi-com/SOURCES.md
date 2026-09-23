# askmeapi.com — Sources

*All URLs retrieved Sept 22, 2026. ✔ = page content fetched and verified directly this session; ○ = surfaced via web search (title/description confirmed, full page not opened).*

## The domain itself

1. ✔ **askmeapi.com** — https://askmeapi.com — Squarespace "Coming Soon" parking page. No product, pricing, or team live yet; positioning must be built from the ecosystem, not the site.

## Agent frameworks with human-in-the-loop / tool approval (the "ask a human" primitives)

2. ✔ **OpenAI Agents SDK (JS) — Human-in-the-loop** — https://openai.github.io/openai-agents-js/guides/human-in-the-loop/ — `needsApproval` tools pause the run and return serialized `interruptions`; approval surfaces across handoffs and nested `agent.asTool()`; resumable from stored `RunState`. Confirms approval-as-pause-resume is a first-class SDK feature.
3. ○ **LangChain/LangSmith docs — Human-in-the-loop using server API** — https://docs.langchain.com/langsmith/add-human-in-the-loop — review, edit, approve tool calls via LangGraph interrupts; dynamic interrupts.
4. ○ **LangChain docs — HITL middleware (Python)** — https://docs.langchain.com/oss/python/langchain/human-in-the-loop — middleware intercepts proposed actions for human review before execution.
5. ○ **LangChain blog — "The Art of Loop Engineering"** (June 2026) — ✔ verified — https://www.langchain.com/blog/the-art-of-loop-engineering — frames human oversight at three loop levels: human input before sensitive tool calls in the agent loop; human approval of outputs in the application loop.
6. ○ **Haystack (deepset) docs — Human in the Loop** — https://docs.haystack.deepset.ai/docs/human-in-the-loop — intercept agent tool calls before execution; human can confirm, reject, or modify parameters.
7. ○ **CrewAI docs — Human input** — ✔ verified (page structure) — https://docs.crewai.com/en/learn/human-input — CrewAI's built-in human-input mechanism for agent tasks.
8. ○ **Ably — Human-in-the-loop for AI agents** — https://ably.com/docs/ai-transport/features/human-in-the-loop — tool-calling primitives create approval gates; agent requests approval, run suspends, connected client approves. Same pattern, transport-agnostic.
9. ○ **LiveKit blog — The HITL pattern for voice agents** (Mar 2026) — https://livekit.com/blog/human-in-the-loop-voice-agents — approval gates, escalation triggers, context passing for voice agents; shows HITL spreading beyond text agents.
10. ○ **Reddit r/LangChain — "I built a human-in-the-loop API for LangChain agents"** (Apr 2026) — https://www.reddit.com/r/LangChain/comments/1s91946/i_built_a_humanintheloop_api_for_langchain_agents/ — independent builder shipping email-based Approve/Deny buttons; evidence of unmet demand for a hosted ask-a-human API.

## MCP elicitation (standards-level "server asks user for structured input")

11. ✔ **MCP Specification 2025-06-18 — Elicitation** — https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation — servers request additional info from users through the client; structured data with **JSON schemas to validate responses**; explicit trust/safety rules (no sensitive info, user approval controls). This is the strongest "structured ask via protocol" precedent.

## Dedicated ask-a-human products

12. ✔ **HumanLayer** — https://www.humanlayer.dev/ — *pivoted*: now markets itself as a "multiplayer coding agent IDE + cloud" (sessions, artifacts, plan docs, diffs). The original HITL API is still referenced in docs/SDK.
13. ○ **humanlayer on PyPI** — https://pypi.org/project/humanlayer/ — "HumanLayer is an API and SDK that enables AI Agents to contact humans for help, feedback, and approvals." Core market definition for this exact angle.
14. ○ **Y Combinator launch — HumanLayer (YC F24)** (Oct 2024) — https://www.ycombinator.com/launches/M8e-humanlayer-human-in-the-loop-for-ai-agents-and-beyond — launch page: manual approval steps, oversight of autonomous agents, human/software workflow transition.
15. ○ **HumanLayer blog — 12 Factor Agents** (Apr 2025) — https://www.humanlayer.dev/blog/12-factor-agents — influential essay; "break the loop and wait for human approval" for high-stakes tool calls (deploy_backend example). Category-defining mindshare.
16. ○ **CAMEL-AI docs — Agents with Human-in-loop and Tool Approval from HumanLayer** — https://docs.camel-ai.org/cookbooks/advanced_features/agents_with_human_in_loop_and_tool_approval — third-party framework integrating HumanLayer for agent→human approval.
17. ○ **dev.to — "Give Your AI Agents a Human Supervisor: Introducing humanlayer"** (Sep 2025) — https://dev.to/mysterious_xuanwu_5a00815/give-your-ai-agents-a-human-supervisor-introducing-humanlayer-3adi — developer-eyewitness walkthrough of the approval-workflow-as-simple-API pitch.
18. ✔ **Pushary — Human-in-the-Loop API for AI Agents** — https://pushary.com/human-in-the-loop — "A human-in-the-loop API asks that person and sends the answer back. Pushary is that API." Direct competitor concept in the same slot as the AskMeAPI angle.

## Durable execution (infrastructure that makes waiting-for-humans survivable)

19. ✔ **Temporal docs — Human-in-the-loop AI agent cookbook (Python)** — https://docs.temporal.io/ai/cookbook/human-in-the-loop-python — LLM proposes action; risky actions pause and wait for approval via Temporal Signal; hours/days/indefinite waits with zero compute; durable timers; full audit trail; extensible to multi-approver voting and Slack/email integration.
20. ○ **Temporal learn tutorial — Durable human-in-the-loop** (Nov 2025) — https://learn.temporal.io/tutorials/ai/building-durable-ai-applications/human-in-the-loop/ — workflow pauses at `wait_condition()` for a Signal while a human is prompted.
21. ○ **Workflow Builder blog — Human approval on Temporal** (Sep 2026) — https://www.workflowbuilder.io/blog/human-approval-on-temporal — explains signal = async write; standard HITL integration pattern.
22. ○ **Daniel Fridljand — Temporal for HITL** (Feb 2026) — https://danielfridljand.de/post/temporal-human-in-the-loop — "human input gives a workflow an unpredictable pause: minutes or days, process may restart in between" — the core engineering pain AskMeAPI abstracts.
23. ✔ **AWS Step Functions — Service integration patterns (waitForTaskToken)** — https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html — callback pattern: task pauses and waits for a task token to be returned (SQS example shown); AWS-native precedent for "pause server until external human/system answers."
24. ○ **Airtable — AI Agent Platforms With Human-in-the-Loop Controls** (Sep 2026) — https://www.airtable.com/articles/human-in-the-loop-ai-agents — platform survey; every workflow needs pause-for-human-judgment points.
25. ○ **Workflows.guru — Human-on-the-Loop Workflows** — https://www.workflows.guru/workflow-types/human-on-the-loop-workflows — HOTL vs HITL distinction; humans signal running workflows without pausing them.
26. ○ **Guild.ai glossary — Human in the Loop** — https://www.guild.ai/glossary/human-in-the-loop — canonical statement of the mechanism: "pause execution, present context, wait for a human decision, then resume."

## Structured feedback / form APIs (the "human answers as data" half)

27. ✔ **Formbricks docs** — https://formbricks.com/docs/api-documentation — open-source experience-management suite: "Ask" with surveys, "Analyze," "Act" with workflows; full REST API for programmatic survey/feedback CRUD. Survey-grade structured human feedback, but marketing-oriented, not agent-oriented.
28. ✔ **Typeform Developer Platform** — https://developer.typeform.com/ — Create API, Responses API, Webhooks API, Embed SDK, and notably an **MCP server** for LLM clients. Conversational data collection as a service — adjacent precedent that "humans answering structured things" can be an API business.
29. ○ **Formbricks — Product Feedback Loop** (May 2026) — https://formbricks.com/blog/product-feedback-loop — "most teams collect feedback; almost none close the loop" — supports the structured/acted-upon-answer gap.

## Delivery channels humans actually answer in

30. ✔ **Slack developer docs — Interactive messages** — https://docs.slack.dev/messaging/interactive-messages — buttons/menus in Slack messages are today's de-facto approval UI that every team hand-wires; the channel AskMeAPI would abstract away.
31. ○ **Microsoft — Human-in-the-Loop Tool Calling with LangGraph** (Medium, Jul 2025) — https://sangeethasaravanan.medium.com/human-in-the-loop-tool-calling-with-langgraph-building-interruptible-ai-agents-fd0275ce4523 — interruptible agent builds; human review/edit/reject of tool calls.
32. ○ **FlowHunt — HITL Middleware in Python: Building Safe AI Agents** — https://www.flowhunt.io/blog/human-in-the-loop-middleware-python-safe-ai-agents/ — practical safety framing for approval middleware.
33. ○ **Reddit r/LangChain — Tool-calling agents: human approval before tool invocation?** (May 2024) — https://www.reddit.com/r/LangChain/comments/1ci3m0k/toolcalling_agents_human_approval_before_tool/ — early developer pain point: people were wrapping tools with homemade `add_human_approval()` helpers.
34. ○ **Sangeetha/Medium LangGraph Part 4** (May 2025) — https://medium.com/@sitabjapal03/langgraph-part-4-human-in-the-loop-for-reliable-ai-workflows-aa4cc175bce4 — review tool calls, validate outputs, approve/correct before proceeding.
