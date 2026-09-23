# LEADERS.md — Voice of Market Leaders: "Agent/Server Asks a Human, Gets a Structured Reply"

Competitive voice capture for askmeapi.com (API-first ask-a-human, structured reply via API).
All quotes are verbatim from public docs, blogs, or product pages (fetched live, Sept 2026).

---

## 1. OpenAI — Agents SDK (`needs_approval`)
**Website:** https://openai.com (SDK: https://openai.github.io/openai-agents-python/)

> "Use the human-in-the-loop (HITL) flow to pause agent execution until a person approves or rejects sensitive tool calls. Tools declare when they need approval, run results surface pending approvals as interruptions, and `RunState` lets you serialize paused runs and resume them after decisions are made."
> — https://openai.github.io/openai-agents-python/human_in_the_loop/

> "If the approval rule requires approval and no decision for that tool call is stored, execution pauses, and `RunResult.interruptions` … contains `ToolApprovalItem` entries with details such as `agent.name`, `tool_name`, and `arguments`."

> "Convert the result to a `RunState` with `result.to_state()`, call `state.approve(...)` or `state.reject(...)`, and then resume with `Runner.run(agent, state)` … The resumed run continues where it left off and will re-enter this flow if new approvals are needed."

> "Callable approval rules fail closed when the SDK cannot safely inspect the arguments."

**Note:** Frames HITL as interrupt → serialized run state → approve/reject API → resume; the "fail closed" default is the trust story.

---

## 2. Anthropic — Claude Agent SDK (`canUseTool` / permission flow)
**Website:** https://www.anthropic.com (SDK docs: https://docs.anthropic.com)

> "The Claude Agent SDK provides permission controls to manage how Claude uses tools. Use permission modes and rules to define what's allowed automatically, and the `canUseTool` callback to handle everything else at runtime."
> — https://docs.anthropic.com/en/docs/agent-sdk/permissions

> "Check `ask` rules … If an ask rule matches, the call falls through to your `canUseTool` callback for confirmation, even in `bypassPermissions` mode."

> "**canUseTool callback:** If not resolved by any of the above, call your `canUseTool` callback for a decision. In `dontAsk` mode, this step is skipped and the tool is denied."

> "Permissions — Control which tools run automatically, which need approval."
> — https://docs.anthropic.com/en/api/agent-sdk/human-in-the-loop

**Note:** Voice is deterministic-evaluation ("falls through to your callback"); the human decision is a code-level control point, not a chat prompt.

---

## 3. Temporal — Durable Execution + Signals/Updates
**Website:** https://temporal.io

> "Temporal Workflows are resilient. They can run—and keep running—for years, even if the underlying infrastructure fails. If the application itself crashes, Temporal will automatically recreate its pre-failure state so it can continue right where it left off."
> — https://docs.temporal.io/workflows

> "A Workflow can act like a stateful web service that receives messages: Queries, Signals, and Updates. The Workflow implementation defines these endpoints via handler methods that can react to incoming messages and return values."
> — https://docs.temporal.io/develop/python/message-passing

> "An Update is a trackable synchronous request sent to a running Workflow Execution. It can change the Workflow state, control its flow, and return a result. The sender must wait until the Worker accepts or rejects the Update."

> "A Signal … is an asynchronous message sent to a running Workflow Execution to change its state and control its flow." (with `approve` handler example mutating `approved_for_release`)

**Note:** Human approval = a durable, replay-safe signal/update to a workflow that waits indefinitely — "ask a human" as a first-class durable API primitive.

---

## 4. AWS Step Functions — Wait for Callback with Task Token
**Website:** https://aws.amazon.com/step-functions/

> "Wait for a Callback with Task Token — Call a service with a task token and have Step Functions wait until that token is returned with a payload."
> — https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html

> "Request Response — Call a service and Step Functions will progress to the next state immediately after it receives an HTTP response. / Run a Job (.sync) — Call a service and have Step Functions wait for a job to complete."

> "Standard Workflows support _Request Response_ integrations. Certain services support _Run a Job (.sync)_, or _Wait for Callback (.waitForTaskToken)_, and both in some cases."

**Note:** The .waitForTaskToken pattern is the canonical AWS-native "pause and wait for a structured human/external reply" mechanism (used for approval steps via SNS/SQS/Lambda).

---

## 5. HumanLayer — Human-in-the-loop agent workspace
**Website:** https://humanlayer.dev

> "**Do not outsource the thinking.** Every phase is a place to push back."
> — https://humanlayer.dev/docs

> "Structured workflows give the agent every opportunity to show you what it's wrong about before moving to implementation."

> "Comment-Driven Design Reviews — Inline comments on design documents. Your whole team — humans and Agents — collaborating in real-time. Catch mistakes before they become 2,000 lines of code."

> "In HumanLayer, comments and decisions feed straight back to the agents — the doc _is_ the interface to the code, not a separate artifact you hope someone reads before shipping."

**Note:** (Has pivoted from its original "human as a tool" HITL API to a multiplayer coding-agent IDE.) Voice is emphatic checkpointing: structured phases where humans must sign off before agents proceed.

---

## 6. Pushary — Approve Your AI Agents From Your Phone
**Website:** https://www.pushary.com

> "Your agent froze, waiting for your yes. Pushary sends that one decision to your phone. Tap yes and it finishes the job while you are away, across every agent you run."
> — https://www.pushary.com/

> "Pushary is the control panel for AI agents. When your agent needs a yes, Pushary sends the question to your phone, your Mac, Slack or the web app. You approve or deny, and every answer is saved."

> "Human-in-the-loop means an AI agent pauses at important or risky steps and waits for a person to decide before it continues. Pushary delivers that decision to your phone as a push notification…"

> "Three types: confirm (yes/no), select (multiple choice with 2 to 6 options), and input (free text). Your agent picks the right type for the situation."

**Note:** Closest consumer-flavored analog to ask-a-human-as-API: structured question types (confirm/select/input), answers routed back so "your answer flows straight back to the agent."

---

## 7. n8n — Wait node (webhook/form resume)
**Website:** https://n8n.io

> "Use the Wait node pause your workflow's execution. When the workflow pauses it offloads the execution data to the database. When the resume condition is met, the workflow reloads the data and the execution continues."
> — https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/

> "**On Webhook Call**: The node waits until it receives an HTTP call. / **On Form Submitted**: The node waits until it receives a form submission."

> "The webhook URL that resumes the execution when called is generated at runtime. The Wait node provides the `$execution.resumeUrl` variable so that you can reference and send the yet-to-be-generated URL wherever needed, for example to a third-party service or in an email."

**Note:** HITL = pause + resume via webhook URL or generated form; structured replies come back as form fields or HTTP payloads.

---

## 8. Zapier — HITL approval steps & agents
**Website:** https://zapier.com

> "Human-in-the-loop refers to the intentional integration of human oversight into autonomous AI workflows at critical decision points. Instead of letting an agent execute tasks end-to-end and hoping it makes the right call, HITL adds user approval, rejection, or feedback checkpoints before the workflow continues."
> — https://zapier.com/blog/human-in-the-loop/

> "…you can use the _Request approval_ step to add the checkpoint right into your workflow. You can choose to notify the reviewer by email, Slack, or even set up a second Zap to send a custom request through any other integrated app."

> "Importantly, you can also allow reviewers to edit the Zap's output (for example, refining an AI-generated email draft) before submitting their approval. You also have control over the workflow outcome, deciding whether a rejection stops the Zap entirely or allows it to continue down a defined path."

> "If the agent can't confidently classify the message, the workflow should pause and escalate to a human instead of guessing."

**Note:** Plain-language, safety-net framing: approval/rejection/feedback as structured workflow steps, with edit-before-approve as a differentiator.

---

## 9. LangGraph (LangChain) — `interrupt()` / HITL
**Website:** https://www.langchain.com (LangGraph: https://langchain-ai.github.io/langgraph/)

> "Interrupts allow you to pause graph execution at specific points and wait for external input before continuing. This enables human-in-the-loop patterns where you need external input to proceed. When an interrupt is triggered, LangGraph saves the graph state using its persistence layer and waits indefinitely until you resume execution."
> — https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/

> "The `interrupt` function pauses graph execution and returns a value to the caller… the payload must be JSON-serializable" — `interrupt("Do you approve this action?")`

> "**Graph waits indefinitely** until you resume execution with a response / **Response is passed back** into the node when you resume, becoming the return value of the `interrupt()` call"

> "The key thing that interrupts unlock is the ability to pause execution and wait for external input… useful for: Approval workflows: Pause before executing critical actions (API calls, database changes, financial transactions)."

**Note:** Interrupt payload is any JSON-serializable value, resume value becomes the function's return value — ask-a-human as a typed call-and-response inside the graph.

---

## 10. Inngest — Durable functions + `step.waitForEvent()`
**Website:** https://www.inngest.com

> "Use `step.waitForEvent()` to pause your function's execution until a matching event is received or a timeout is reached. This is useful for building human-in-the-loop workflows, waiting for approvals, or coordinating between separate functions."
> — https://www.inngest.com/docs/reference/functions/step-wait-for-event

> "Wait 7 days for an approval and match invoice IDs: `const approval = await step.waitForEvent(\"wait-for-approval\", { event: \"app/invoice.approved\", timeout: \"7d\", match: \"data.invoiceId\" });`"

> "Use `eventType()` for typed return values … `const approvalType = eventType(\"app/approval.received\", { schema: z.object({ approved: z.boolean() }) }); … // approval?.data is typed as { approved: boolean }`"

**Note:** Human reply = a matched, schema-validated event with typed payloads and long timeouts — the "structured reply via API" pattern expressed as durable waiting.

---

## Cross-cutting voice patterns (for askmeapi positioning)
- **Pause → wait (durable) → structured reply → resume** is the universal grammar: OpenAI (RunState/interruptions), LangGraph (interrupt/Command(resume=...)), Temporal (Signal/Update), Step Functions (task token), Inngest (waitForEvent), n8n (resumeUrl).
- **Structured question types** appear everywhere humans answer: Pushary (confirm/select/input), Zapier (approve/decline/edit), Inngest (schema-typed events), OpenAI (approve/reject per ToolApprovalItem).
- **Safety/risk vocabulary**: "sensitive tool calls," "fail closed" (OpenAI), "critical decision points" (Zapier), "risky steps you cannot undo" (Pushary), "critical actions" (LangGraph).
- **Whitespace askmeapi can own**: none of the ten leads the conversation with "ask a human as an HTTP API endpoint with a guaranteed structured JSON reply" — human answers are embedded in each vendor's own runtime (SDK callback, graph interrupt, workflow signal) rather than exposed as a standalone API.
