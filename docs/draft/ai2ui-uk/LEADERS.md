# LEADERS.md — Voice capture: AI-human-in-the-loop / agents asking humans / approval UI

Collected Sept 2026. All quotes are verbatim from the named sources. For each leader: name, website, 2–4 real quoted excerpts with source URLs, and a one-line note on how they talk about HITL / approvals / humans-in-the-loop.

---

## 1. Anthropic

**Website:** anthropic.com

> "Agents begin their work with either a command from, or interactive discussion with, the human user. Once the task is clear, agents plan and operate independently, potentially returning to the human for further information or judgement. … Agents can then pause for human feedback at checkpoints or when encountering blockers."

— [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

> "Both applications illustrate how agents add the most value for tasks that require both conversation and action, have clear success criteria, enable feedback loops, and integrate meaningful human oversight."

— [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

> "LLM responses can be demonstrably improved when a human articulates their feedback … This is analogous to the iterative writing process a human writer might go through when producing a polished document."

— [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

> "Prioritize **transparency** by explicitly showing the agent's planning steps."

— [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

_Note:_ Anthropic frames HITL as a design principle for reliability — agents "pause for human feedback at checkpoints," human oversight as a first-class pattern, not an afterthought.

---

## 2. OpenAI

**Website:** openai.com

> "Operator is trained to ensure that the person using it is always in control and asks for input at critical points."

— [Introducing Operator](https://openai.com/index/introducing-operator/)

> "**User confirmations**: Before finalizing any significant action, such as submitting an order or sending an email, Operator should ask for approval."

— [Introducing Operator](https://openai.com/index/computer-using-agent/ and https://openai.com/index/introducing-operator/)

> "**Takeover mode:** Operator asks the user to take over when inputting sensitive information into the browser, such as login credentials or payment information."

— [Introducing Operator](https://openai.com/index/introducing-operator/)

> "**Watch mode**: On particularly sensitive sites, such as email or financial services, Operator requires close supervision of its actions, allowing users to directly catch any potential mistakes."

— [Introducing Operator](https://openai.com/index/introducing-operator/)

_Note:_ OpenAI's voice is consumer-facing control UX — "takeover," "confirmations," "watch mode": a graded ladder of human supervision layered onto an autonomous agent.

---

## 3. LangChain (LangGraph)

**Website:** langchain.com

> "Interrupts allow you to pause graph execution at specific points and wait for external input before continuing. This enables human-in-the-loop patterns where you need external input to proceed."

— [LangGraph Interrupts docs](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/)

> "The key thing that interrupts unlock is the ability to pause execution and wait for external input. This is useful for a variety of use cases, including: Approval workflows: Pause before executing critical actions (API calls, database changes, financial transactions) … Review and edit: Let humans review and modify LLM outputs or tool calls before continuing."

— [LangGraph Interrupts docs](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/)

> "When you call `interrupt()` within a node, LangGraph saves the current graph state and waits for you to resume execution with input."

— [LangGraph Interrupts docs](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/)

_Note:_ LangChain's voice is developer-primitive focused — the `interrupt()` function as a first-class HITL construct ("Do you approve this action?" is literally their code sample).

---

## 4. Temporal

**Website:** temporal.io

> "It's what lets an application wait days for approval and pick right back up where it left off after an outage, without a developer rebuilding that machinery by hand every time."

— [Temporal raises $550M Series E](https://temporal.io/blog/temporal-raises-usd550m-series-e-at-usd12-55b-valuation-ai)

> "Customers are asking to run agents that work for days, weeks, or months, and this is becoming the new normal. When the scale changes this much and the work runs this long, how do you keep it reliable?"

— [Temporal raises $550M Series E](https://temporal.io/blog/temporal-raises-usd550m-series-e-at-usd12-55b-valuation-ai)

> "The competitive advantage shows up after the demo, in whether people trust that agent enough to keep using it."

— [Temporal raises $550M Series E](https://temporal.io/blog/temporal-raises-usd550m-series-e-at-usd12-55b-valuation-ai)

_Note:_ Temporal frames human waits ("wait days for approval") as an infrastructure primitive — durable execution is what makes human-in-the-loop pauses survivable across outages and time.

---

## 5. Microsoft (Semantic Kernel / Microsoft Agent Framework)

**Website:** learn.microsoft.com

> "This page provides an overview of **Human-in-the-loop (HITL)** interactions in the Microsoft Agent Framework Workflow system. HITL is achieved through the **request and response** handling mechanism in workflows, which allows executors to send requests to external systems (such as human operators) and wait for their responses before proceeding with the workflow execution."

— [Agent Framework Workflows – Human-in-the-loop (HITL)](https://learn.microsoft.com/en-us/agent-framework/workflows/human-in-the-loop?pivots=dotnet)

> "Executors in a workflow can send requests to outside of the workflow and wait for responses. This is useful for scenarios where an executor needs to interact with external systems, such as human-in-the-loop interactions, or any other asynchronous operations."

— [Agent Framework Workflows – HITL](https://learn.microsoft.com/en-us/agent-framework/workflows/human-in-the-loop?pivots=dotnet)

> "When a checkpoint is created, pending requests are also saved as part of the checkpoint state. When you restore from a checkpoint, any pending requests will be re-emitted as `RequestInfoEvent` objects."

— [Agent Framework Workflows – HITL](https://learn.microsoft.com/en-us/agent-framework/workflows/human-in-the-loop?pivots=dotnet)

_Note:_ Microsoft treats the human operator as an external system the workflow formally requests and waits on — HITL is a checkpointed message-passing pattern with full framework support.

---

## 6. Google (Agent Development Kit / ADK)

**Website:** adk.dev (google.github.io/adk-docs)

> "**Pattern Overview:** Intercept requests before they reach the LLM or tools to enforce rules. … Use `before_tool_callback` to inspect tool arguments - If a policy violation is detected … Return a predefined response to block the operation."

— [Callback patterns — Design Patterns and Best Practices for Callbacks](https://adk.dev/callbacks/design-patterns-and-best-practices/)

> "ADK also supports long-running functions, so if that calculation takes a while, the agent can continue working on other tasks."

— [Function tools](https://adk.dev/tools-custom/function-tools/)

> "…an agent framework lets you create a managed, repeatable task structure that can run _hands-off_ with minimal human input."

— [ADK FAQ](https://adk.dev/)

_Note:_ Google's ADK voice leans on callback hooks (`before_tool_callback`) as the enforcement/inspection point where gatekeeping — including human approval — gets wired in.

---

## 7. AWS (Amazon Bedrock / AgentCore / Step Functions)

**Website:** aws.amazon.com

> "With AgentCore, you can enable agents to take actions across tools and data with the right permissions and governance, run agents securely at scale, and monitor agent performance and quality in production."

— [What is Amazon Bedrock AgentCore?](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/interagents.html)

> "You can also create long-running, automated workflows for applications that require human interaction."

— [What is AWS Step Functions?](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html)

> "Call a service with a task token, and have Step Functions wait until the task token returns with a callback." ([Wait for a callback with a task token (.waitForTaskToken)] integration pattern)

— [What is AWS Step Functions?](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html)

_Note:_ AWS voices HITL as enterprise plumbing — governed agent actions plus the `.waitForTaskToken` callback pattern as the canonical "pause the machine until a human responds" mechanism.

---

## 8. IBM (watsonx)

**Website:** ibm.com

> "Human-in-the-loop (HITL) refers to a system or process in which a human actively participates in the operation, supervision or decision-making of an automated system. In the context of AI, HITL means that humans are involved at some point in the AI workflow to ensure accuracy, safety, accountability or ethical decision-making."

— [What Is Human In The Loop (HITL)? | IBM](https://www.ibm.com/think/topics/human-in-the-loop)

> "The goal of HITL is to allow AI systems to achieve the efficiency of automation without sacrificing the precision, nuance and ethical reasoning of human oversight."

— [What Is Human In The Loop (HITL)? | IBM](https://www.ibm.com/think/topics/human-in-the-loop)

> "In high-stakes applications, humans can impose alerts, human reviews and failsafes to help ensure that autonomous decisions are verified."

— [What Is Human In The Loop (HITL)? | IBM](https://www.ibm.com/think/topics/human-in-the-loop)

> "When a human is involved in approving or overriding AI outputs, responsibility doesn't rest solely on the model or its developers."

— [What Is Human In The Loop (HITL)? | IBM](https://www.ibm.com/think/topics/human-in-the-loop)

_Note:_ IBM's voice is governance-and-accountability — HITL as the mechanism that keeps autonomous decisions verified and responsibility assigned, tied to the watsonx platform.

---

## 9. Scale AI

**Website:** scale.com

> "One of the questions in building it was when to let the agent act on its own and when to put a person in the loop. That question, and how to answer it in dollars, is the subject of this article."

— [In An Agentic World Where Automation Gets Cheap, Which Work Is Worth Routing to a Human?](https://scale.com/blog/hitl-routing)

> "Maximizing the share of work that is automated is no longer the binding objective. The question is which slice of an expanded universe of work deserves human attention."

— [HITL routing](https://scale.com/blog/hitl-routing)

> "The resulting boundary is risk-adjusted rather than fixed: as the potential impact of an error increases, the confidence required for autonomous action should increase with it."

— [HITL routing](https://scale.com/blog/hitl-routing)

> "Approval routing in these systems is triggered by rule failures and spend limits, not by how likely the system is to be right."

— [HITL routing](https://scale.com/blog/hitl-routing)

_Note:_ Scale's voice is economics-of-judgment — pricing human review against expected value and treating "when to route work to a human" as a measurable, risk-adjusted decision.

---

## 10. NIST (research/policy leader)

**Website:** nist.gov

> "NIST has developed a framework to better manage risks to individuals, organizations, and society associated with artificial intelligence (AI). The NIST AI Risk Management Framework (AI RMF) is intended for voluntary use and to improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems."

— [AI Risk Management Framework | NIST](https://www.nist.gov/itl/ai-risk-management-framework)

> "New guidance seeks to cultivate trust in AI technologies and promote AI innovation while mitigating risk."

— [AI Risk Management Framework | NIST](https://www.nist.gov/itl/ai-risk-management-framework)

> "The profile will guide critical infrastructure operators towards specific risk management practices to consider when engaging AI-enabled capabilities."

— [AI Risk Management Framework | NIST](https://www.nist.gov/itl/ai-risk-management-framework)

_Note:_ NIST supplies the policy vocabulary — trustworthiness incorporated at design time, human oversight as part of risk management for AI systems (AI RMF 1.0 + GenAI profile).

---

## Voice synthesis (for ai2ui positioning)

- **Anthropic / OpenAI** (model vendors): human checkpoints as a _design principle_ and a _graded control ladder_ (takeover, confirmations, watch mode).
- **LangChain / Microsoft / Temporal / AWS** (framework & infra vendors): HITL as a _developer primitive_ — interrupts, request/response ports, durable waits, task-token callbacks. The human is a pause point the machine waits on.
- **IBM / NIST / Scale** (governance & economics): HITL as _accountability and measurement_ — who approves, what it costs, and when human review is worth it (risk-adjusted routing).
- Common thread every leader shares: the AI must **ask**, the human **approves**, and the system must **survive the wait** — exactly the gateway positioning of ai2ui.
