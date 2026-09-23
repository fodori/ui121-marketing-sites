# FlowHunt — HITL middleware in Python

Source: https://www.flowhunt.io/blog/human-in-the-loop-middleware-python-safe-ai-agents/
Fetched: 2026-09-23
Status: ok

## Summary

FlowHunt’s long tutorial explains LangChain’s human-in-the-loop middleware as a safety layer for Python agents. The agent loop is model, tools, and state, repeating until the model stops calling tools. The risk is that a tool runs before anyone sees it. Middleware inserts a decision after the model proposes a call and before execution. The human can approve (run as proposed), edit (same tool, new arguments), or reject (do not run, and pass a reason back so the model can try another approach). Configuration chooses which tools interrupt. The worked tool is `send_email(recipient, subject, body)` on GPT-4o (`gpt-4o` in the sample), with a system prompt that the agent sends mail for a user named Sydney.

Two scenarios carry the lesson. A casual coffee reply is approved as drafted. A partner email that would “approve” a $1 million Q1 engineering budget is the edit/reject case: the reviewer either rewrites the body into a request for a breakdown, or rejects with a message telling the agent to ask for allocation and deliverables instead of committing. The post stresses that rejection feedback becomes context, so the next proposal can change. Later sections (same article) point at granular `interrupt_on` configs that allow only some decision types per tool.

The piece is a safety-framed walkthrough of the official middleware, aimed at readers who want the approve/edit/reject story without starting from the API reference. It closes with a FlowHunt product plug. It does not add a new protocol, channel, or durability story beyond what LangChain’s middleware page already specifies.

## Key facts

- Stack: `create_agent`, `ChatOpenAI` model `gpt-4o`, `HumanInTheLoopMiddleware`, `interrupt_on={"send_email": True}`.
- Three responses: approve, edit (`edited_action` with name and args), reject (`message`).
- Dollar scenario used as the high-stakes example: a $1 million engineering budget email.
- Low-stakes example: a coffee meeting with Alice.
- `True` means the default decision set for that tool.

## How it works

1. User asks the agent to answer an email.
2. Model calls `send_email` with a draft.
3. Middleware interrupts before send.
4. Reviewer approves, replaces the arguments, or rejects with feedback.
5. Approved or edited calls send. Rejection returns to the model as guidance, and the loop can propose a safer draft.

## Implications for askmeapi.com / ui121

The article shows how the category is being taught: one dangerous tool, three answers, feedback that changes the next draft. AskMeAPI can offer those three answers as the HTTP result so the tutorial’s middleware resume object is filled in by a remote human. ui121 is the email preview itself — recipient, subject, body — which the post describes in prose and then leaves as a Python dict. A $1 million example is the kind of concrete stake a landing page can echo without copying FlowHunt’s walkthrough.
