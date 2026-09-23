# CAMEL-AI — HumanLayer approval and human toolkit

Source: https://docs.camel-ai.org/cookbooks/advanced_features/agents_with_human_in_loop_and_tool_approval
Fetched: 2026-09-23
Status: ok

## Summary

This CAMEL cookbook shows two different ways to put a person in an agent run, both as Colab-style walkthroughs. The first uses HumanLayer’s `require_approval` decorator on a tool. `add` runs freely; `multiply` is decorated, so the agent cannot multiply until someone approves in the HumanLayer cloud UI. Tools are wrapped as CAMEL `FunctionTool`s on a `ChatAgent`. The sample model is Qwen (`QWEN_QWQ_32B`) via CAMEL’s model factory, with `camel-ai[all]==0.2.16` and the `humanlayer` package. Keys are `QWEN_API_KEY` and `HUMANLAYER_API_KEY`.

The second path does not use HumanLayer. CAMEL’s own `HumanToolkit` is passed as tools, and the agent is told to quiz the user on country capitals and comment on the answer. The model in that sample is `QWEN_MAX`. The human interaction is a console toolkit inside the CAMEL process, not an email or Slack approval.

The page is a third-party integration tutorial, not a product. It repeats HumanLayer’s one-line definition (an API and SDK so agents can contact humans for feedback, input, and approvals) and points at a Colab, Discord, and other cookbooks. It does not describe routing, schemas, timeouts, or audit.

## Key facts

- CAMEL version pinned in the notebook: `camel-ai[all]==0.2.16`.
- Approval example: undecorated `add`, decorated `multiply`, prompt “multiply 2 and 5, then add 32.”
- HumanLayer client: `HumanLayer(api_key=..., verbose=True)`.
- Separate CAMEL feature: `HumanToolkit().get_tools()` for console questions.
- Models: Qwen QWQ 32B for the approval demo, Qwen Max for the toolkit demo.

## How it works

Approval path: decorate the risky function, wrap both functions as CAMEL tools, call `agent.step`. When the model selects multiply, HumanLayer blocks for a cloud approval, then the function returns and the agent finishes the arithmetic.

Console path: give the agent the human toolkit and a system message. The model calls the human tool mid-task, the local user types an answer, and the agent comments.

## Implications for askmeapi.com / ui121

Framework cookbooks spread the HumanLayer API by copying the decorator pattern, which trains developers to expect a hosted approve step. AskMeAPI can publish the same kind of cookbook against CAMEL, LangChain, and others, with a schema instead of a boolean gate. ui121 matters more for the second pattern than the first: a capital-city quiz or any “ask the user” tool needs a real input surface, and a console toolkit does not survive once the agent is a server. A generated page that posts the answer back is the hosted version of `HumanToolkit`.
