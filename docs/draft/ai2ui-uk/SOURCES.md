# ai2ui.uk — Sources

Researched 2026-09-22. Note: ai2ui.uk itself is a Squarespace "Coming Soon" parking page (see #1); all other sources cover the human-in-the-loop / AI-asks-human / approvals / AI-gateway space.

1. **https://ai2ui.uk** — Verified directly via web_extract: Squarespace parking page, "Coming Soon", no product content. Domain registered but unlaunched.
2. **https://learn.microsoft.com/en-us/agent-framework/agents/tools/tool-approval** — Microsoft Agent Framework official tutorial on function tools requiring human approval; shows HITL is now a standard SDK feature at major vendors.
3. **https://agentic-patterns.com/patterns/human-in-loop-approval-framework/** — Catalogued agentic pattern: autonomous agents executing high-risk/irreversible operations (DB writes, deployments) need approval gates. Names the exact problem a gateway solves.
4. **https://www.airtable.com/articles/human-in-the-loop-ai-agents** — Comparison of AI agent platforms with HITL controls; four oversight patterns incl. "approval before execution." Useful for competitive-landscape copy.
5. **https://www.strata.io/blog/agentic-identity/practicing-the-human-in-the-loop/** — 2026 guide: HITL as AI governance where trained humans retain decision authority over high-risk agent actions. Enterprise governance framing.
6. **https://dzone.com/articles/human-in-the-loop-approval-enterprise-ai-agents** — Design of enterprise HITL approval gates: risk-based policies, audit logs, RBAC, reversible actions. Blueprint for the enterprise feature set.
7. **https://aws.amazon.com/blogs/machine-learning/human-in-the-loop-constructs-for-agentic-workflows-in-healthcare-and-life-sciences/** — AWS on HITL constructs for compliant agent deployments in healthcare; validates regulated-industry demand.
8. **https://nhimg.org/glossary/human-in-the-loop-approval/** — Definition of HITL approval as a control gate for non-human identities/agents seeking elevated access; ties HITL to NHI security.
9. **https://redis.io/blog/ai-human-in-the-loop/** — Production oversight patterns: agents chain tools and can "hallucinate a policy that doesn't exist"; argues for human checkpoints in production.
10. **https://medium.com/@arpantomar2018/human-in-the-loop-teaching-ai-agents-to-ask-for-permission-7bc9e1c25ac9** — Developer explainer on long-running function tools that pause agents for permission; shows the pause/resume mechanics builders struggle with.
11. **https://www.thoughtspot.com/data-trends/artificial-intelligence/human-in-the-loop** — HITL examples and use cases; the "black box AI" trust argument for human oversight.
12. **https://docs.solo.io/kagent/0.5.x/agents/human-in-the-loop/** — kagent docs: configure agents to pause and ask approval before destructive tools; another framework rolling its own HITL.
13. **https://www.elastic.co/search-labs/blog/human-in-the-loop-hitllanggraph-elasticsearch** — Elastic's implementation of LangGraph HITL; evidence teams hand-build this repeatedly.
14. **https://www.youtube.com/watch?v=QS2NjzAQGUY** — LangGraph Advanced tutorial: implementing an "Ask Question" tool for dynamic HITL; the DIY ask-human tool pattern.
15. **https://maniak.io/articles/2026-03-11-human-in-the-loop-kagent/** — Practitioner write-up of kagent requireApproval CRD validation; Kubernetes-native approvals.
16. **https://dev.to/anilmurty/what-is-human-in-the-loop-hitl-13ed** — Permit.io angle: agent tools pass a policy engine, policies can require human approval via dashboard UI.
17. **https://docs.langchain.com/oss/python/langchain/human-in-the-loop** — LangChain HITL middleware docs; includes "'ask user' style tools where the tool's real implementation is the human." Directly the ai2ui thesis.
18. **https://docs.langchain.com/oss/python/langchain/frontend/human-in-the-loop** — Durable HITL built on LangGraph interrupts/checkpoints: reviewer can answer from a different device/page refresh. The durable-wait UX requirement.
19. **https://www.langchain.com/blog/making-it-easier-to-build-human-in-the-loop-agents-with-interrupt** — LangChain blog on the `interrupt()` primitive: pause execution, review actions, resume. Canonical framework-side solution.
20. **https://docs.langchain.com/oss/python/langgraph/interrupts** — LangGraph interrupts reference: pause graph execution and wait for external input; the plumbing every product rebuilds.
21. **https://www.reddit.com/r/LangChain/comments/1s6qidj/how_i_implemented_humanintheloop_with_langgraphs/** — Practitioner thread on interrupt_before gating real-world actions; grassroots demand signal.
22. **https://medium.com/data-science-collective/architecting-human-in-the-loop-agents-interrupts-persistence-and-state-management-in-langgraph-fa36c9663d6f** — Architecture deep-dive: interrupts, persistence, state management for HITL agents; shows how much engineering the DIY path costs.
23. **https://docs.langchain.com/oss/python/deepagents/human-in-the-loop** — Deep Agents HITL via interrupt-capable tool configuration; framework proliferation continues.
24. **https://openai.github.io/openai-agents-python/human_in_the_loop/** — OpenAI Agents SDK: `needs_approval=True` or per-call async approval function. First-party vendor solution to watch.
25. **https://openai.github.io/openai-agents-js/guides/human-in-the-loop/** — JS SDK approval flow: run pauses, returns interruptions for the client to resolve.
26. **https://developers.openai.com/api/docs/guides/agents/guardrails-approvals** — OpenAI's guardrails + human review guide; enterprise-safety framing from the market leader.
27. **https://ai-sdk.dev/cookbook/next/human-in-the-loop** — Vercel AI SDK cookbook: approval-requested tool state sent to client UI. Yet another bespoke HITL UI pattern.
28. **https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/** — OpenAI's agent-building guide (handoffs, oversight); mainstream validation of agent autonomy + oversight need.
29. **https://www.zenml.io/blog/openai-agents-sdk-durable-runtime** — Production runtime needs: which tools exist, when a tool needs approval, durable orchestration around SDKs.
30. **https://getclaw.sh/blog/human-in-the-loop-ai-agents-approvals-2026** — 2026 overview: approval patterns now built directly into agent platforms; competitive-timing context.
31. **https://www.reddit.com/r/ClaudeCode/comments/1t5fe77/claude_code_users_approve_93_of_permission/** — Reported stat: Claude Code users approve ~93% of permission prompts — the prompt-fatigue problem a smarter approval UI/gateway attacks.
32. **https://blog.stackademic.com/stop-fighting-claude-codes-permission-prompts-here-s-how-the-system-actually-works-ae594e59fb13** — How Claude Code's permission modes work; today's terminal-bound approval UX.
33. **https://www.mindstudio.ai/blog/claude-code-fewer-permission-prompt-allow-list** — Allowlisting/`/fewer` approaches to reducing prompts; complementary prior art for risk-based auto-approval.
34. **https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/** — Armin Ronacher on Claude Code plan mode: approval-before-action as UX pattern; thoughtful design commentary.
35. **https://www.buildthisnow.com/blog/guide/mechanics/planning-modes** — Plan-mode guide: inspect, challenge approach, approve a plan before execution.
36. **https://aiskill.market/blog/claude-code-permission-security-model-skill-safety** — Claude Code 3-layer permission model ending in the approval dialog; anatomy of a permission prompt.
37. **https://claudefa.st/blog/guide/development/permission-management** — Safe vs fast permission modes; the friction/trust tradeoff users feel today.
38. **https://atlan.com/know/what-is-ai-gateway-llm-gateway/** — AI/LLM gateway explainer and what existing gateways miss; supports the "model gateway ≠ human gateway" positioning.
39. **https://medium.com/@mpandey95/building-an-lagateway-with-langchain-v1-a-practical-hands-on-guide-b5ed432144d9** — LLM gateway build guide listing "human approval systems" as an advanced gateway concern.
40. **https://www.truefoundry.com/blog/a-definitive-guide-to-ai-gateways-in-2026-competitive-landscape-comparison** — 2026 AI gateway competitive landscape; crowded model-traffic layer, no human-decision layer.
41. **https://preloop.ai/vs/litellm** — Agent control plane vs AI gateway comparison; adjacent category players.
42. **https://konghq.com/blog/enterprise/kong-ai-gateway-vs-litellm** — Kong vs LiteLLM; incumbent gateway vendors and their scope.
43. **https://www.symmetry-systems.com/blog/lessons-from-litellm/** — LiteLLM supply-chain attack lessons; security urgency at the gateway layer.
44. **https://zuplo.com/learning-center/best-api-gateways-ai-llm-workloads-2026** — Multi-provider gateway round-up; the category ai2ui must differentiate from.
45. **https://tygress.com/enterprise-ai-gateway** — Enterprise AI gateway for security/cost, on-prem deployment expectations.
46. **https://docs.camunda.io/docs/components/agentic-orchestration/model-recommendations-agentic/** — Camunda agent orchestration explicitly instructs models to "escalate with `ask_human`" when parsing fails — ask-human as a first-class workflow verb.
47. **https://www.truefoundry.com/blog/agent-harness-managed-ai-agents** — Agent harness design with `ask_human(event)` pausing for explicit approval; harness-level HITL.
48. **https://docs.smooth.sh/methods/custom-tools** — Real product docs defining an `ask_human` custom tool ("asks a human operator for input when you need clarification"); live example of the pattern in production.
49. **https://labs.scale.com/leaderboard/hil** — Scale's HiL-Bench leaderboard: agents get `ask_human()` and must decide when to use it. Benchmarks the "knowing when to ask" capability.
50. **https://arxiv.org/html/2604.09408v4** — HiL-Bench paper: agents ask via `ask_human(question) -> str`; academic formalization of AI-asks-human.
51. **https://www.reddit.com/r/crewai/comments/1rmry9w/built_an_ai_dev_pipeline_crewai_that_turns_issue/** — CrewAI dev pipeline using `@ask_human` for clarifications; practitioner adoption of ask-human decorators.
52. **https://docs.videosdk.live/ai_agents/core-components/agent** — Discord MCP server providing `ask_human` that creates threads for operator responses; notification-path example.
53. **https://agentd.dev/docs/agent-loop/** — Agent loop docs with `ask_human` parking requests pending supervisor/human input.
54. **https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation** — MCP elicitation spec: servers request user input nested inside tool execution. The standards-level version of AI-asks-human.
55. **https://gofastmcp.com/servers/elicitation** — FastMCP user elicitation: request input during tool execution; notes spec's limited JSON Schema subset (a gap a richer gateway could fill).
56. **https://workos.com/blog/mcp-elicitation** — WorkOS explainer: MCP elicitation removes brittle workarounds for runtime user input.
57. **https://medium.com/@alessandro.a.pagliaro/hello-mcp-elicitation-request-additiona-info-to-the-user-e9ad55a5fc57** — Tutorial: standardized server→user information requests via MCP clients.
58. **https://agentclientprotocol.com/rfds/elicitation** — Agent Client Protocol RFD: "Elicitation: Structured User Input" — structured answers as an emerging protocol concern.
59. **https://github.com/mcp-use/mcp-elicitation-demo** — Open-source demo of MCP elicitation (form & URL mode); URL-mode questions = hosted ask-pages, ai2ui's natural shape.
60. **https://docs.temporal.io/ai/cookbook/human-in-the-loop-python** — Temporal AI cookbook: agent pauses risky actions and waits for human approval via Signal; durable-engine approach.
61. **https://www.workflowbuilder.io/blog/human-approval-on-temporal** — What Temporal's engine gives you for human approval (signals as async writes) and what it doesn't (the human UI).
62. **https://learn.temporal.io/tutorials/ai/building-durable-ai-applications/human-in-the-loop/** — Temporal tutorial: durably recorded wait-for-human state; long-running agent pauses for hours/days.
63. **https://truto.one/blog/implementing-human-in-the-loop-approval-workflows-for-consequential-saas-api-actions/** — "HITL approval is the difference between a demo and a production deployment" for consequential SaaS API actions.
64. **https://www.guild.ai/glossary/human-in-the-loop** — HITL beyond approve/reject: reviewers evaluate and coach agents, enabling continuous improvement.
