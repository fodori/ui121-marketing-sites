# AWS — Human-in-the-loop confirmation with Bedrock Agents

- Source: https://aws.amazon.com/blogs/machine-learning/implement-human-in-the-loop-confirmation-with-amazon-bedrock-agents/
- Fetched: 2026-09-23
- Status: ok

## Summary

Clément Perrot, Maira Ladeira Tanke, Mark Roy, and Ryan Sachs (AWS Machine Learning Blog, 9 April 2025) explain why Amazon Bedrock Agents need a person in the loop for anything that changes state. Agents use a foundation model to split a request into steps, follow developer instructions, call company APIs, and use knowledge bases. They can self-correct with a reason-and-act loop, but repeating a tool is acceptable for harmless lookups and dangerous for a database write. Errors include the wrong tool or the right tool with wrong parameters.

HITL, in their framing, is any critical touch between people and the agent: an end user approving an action, an expert reviewing offline, or an agent beside a service representative. The shared idea is oversight plus feedback that becomes ground truth. This post focuses on two built-in mechanisms, demonstrated with an HR agent that books paid time off. A sample UI and a GitHub CDK path are mentioned; this note does not copy them.

User confirmation is a yes/no pause. The developer learns which function and parameters the agent wants to run, shows that to the user, and only then lets orchestration continue. In the example, reading PTO balance and history can run automatically. Creating, updating, or cancelling a request must be confirmed, because a user might have been checking feasibility or might have typed a bad date. Confirmation is configured per function in the console, an SDK, or CloudFormation. The client UI collects the boolean; the agent checks it before the call.

Return of control is stricter and sits at the action-group level. The agent does not execute. It hands the task to the application, which can validate, change parameters, and add context, then perform the call itself. The HR example becomes an editable form: the employee sees the dates, notices a Sunday start, fixes it, and approves. Validation happens twice in spirit: the agent may check balance before returning control, but if the user changes three days to a hundred, the API — not the agent — enforces the rule. Benefits they list are accuracy, last-minute edits, user trust, and regulatory oversight. The cost is more UI work than a confirm button.

They treat both as slices of a larger HITL picture and point to later posts for other patterns.

## Key facts

- Date: 9 April 2025. Authors: Perrot, Ladeira Tanke, Roy, Sachs. Service: Amazon Bedrock Agents.
- Two mechanisms: user confirmation (boolean, per function) and return of control (application executes, can edit parameters, per action group).
- Example: HR PTO agent. Reads can be automatic; create/update/cancel need a person.
- ROC validation of the final payload belongs to the application API, not the agent’s earlier check.
- Failure modes without HITL: accidental submit, wrong date, wrong tool, wrong parameters.
- Implementation paths named: console, Boto3, CloudFormation, CDK sample on GitHub.

## How it works

The user talks to the agent. The model plans tool calls. For a confirmation-enabled function, orchestration stops and the application shows the intended call. Confirm resumes execution inside the agent. Deny stops that action. For return of control, orchestration stops and the application owns the side effect. The UI is a form bound to the proposed parameters. After the user edits and accepts, application code calls the backend and feeds the result back so the agent can continue the conversation. The split is who is allowed to touch the system of record.

## Implications for ui1to1.com / ui121

AWS has productised the moment ui121 is built around: the agent must not change state until a person has seen the action. ui1to1.com can describe that moment as one interface, not a chat transcript with a confirm chip. Return of control is especially close to JSONUI. The agent proposes a structured payload; the server renders an editable canvas for this employee; the human corrects it; the system of record updates. That is one-to-one (this person’s PTO, these dates) and human-in-the-loop (the process waits).

The double-validation warning is worth keeping in product copy: the canvas can show a friendly edit, and the API still has to enforce policy. A one-to-one UI that only trusts the model’s first check will book the hundred-day leave. Marketing should cite the two pattern names and the HR example, and position the universal canvas as the interface those patterns still leave to the developer.
