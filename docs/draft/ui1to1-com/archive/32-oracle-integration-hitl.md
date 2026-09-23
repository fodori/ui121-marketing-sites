# Oracle — Human in the loop for agentic AI in Integration

- Source: https://docs.oracle.com/en/cloud/paas/application-integration/human-loop/human-loop-agentic-ai-oracle-integration.html
- Fetched: 2026-09-23
- Status: ok

## Summary

Oracle Integration’s documentation frames human-in-the-loop as approval orchestration for agentic automation: people supply approval, feedback, and oversight at critical points so an AI agent is not left alone with an important action. Three situations are spelled out. Before a high-stakes step, such as creating a large purchase order, a person reviews and approves. If the agent is unsure of the next step, it asks a person instead of stopping dead. If a tool the agent depends on fails, a person can give feedback and the process continues.

What the feature lets you build: workflows that assign review or approval tasks to named users, and forms those users open to perform the task. Forms are called the interface of the human interaction. A faster path is a recipe — a prebuilt bundle of workflow, form, integration, and connections — selected as an agentic tool so approval does not have to be modelled from nothing.

The documented sequence is a project (required container), a form, a workflow that holds user tasks and events, a configured task including who it is assigned to, data associations that move values through the flow, activation of both workflow and form, an integration that calls the workflow, an agentic AI tool created from that integration, an agent that uses the tool, a test run in which tasks are assigned, and completion by the assignee in the Process Automation Workspace. Each step points at a deeper page. This source is one guide with outbound links, not a blog index; those child pages were not saved as extras.

## Key facts

- Product: Oracle Integration, human-in-the-loop for agentic AI.
- Triggers for a person: high-stakes action, agent uncertainty, tool failure.
- Building blocks: project, form, workflow, user task, data association, integration, agentic tool, agent, workspace task.
- Recipes package workflow, form, integration, and connections.
- The human completes work in Process Automation Workspace, not inside the model.
- Forms are explicitly the human interface for the task.

## How it works

An agent does not embed a free-form chat approval. It calls a tool. The tool is an integration that starts a workflow. The workflow creates a task for a user and presents a form. Data associations map agent context onto form fields and map the person’s answer back. Until the workflow is activated, the agent cannot use it. When the person submits, the integration result returns to the agent and automation continues. Recipes collapse the first several modelling steps for a known approval pattern.

## Implications for ui1to1.com / ui121

Oracle’s own docs say the form is the human interface in an agentic flow. That is the ui1to1 claim in enterprise language: one person gets a task surface, the agent waits, the decision re-enters the process. ui121’s difference is that the surface is not only an Oracle workspace form. JSONUI can describe that approval — or a richer canvas with the purchase order, the exception, and the conversation — per assignee, live, and always connected.

The three triggers (high stakes, uncertainty, tool failure) are a clean content outline for when the single interface must appear. Recipes are a reminder that buyers expect human approval to be a feature, not a custom project every time. Marketing can say the industry now ships HITL as forms inside automation, and ui121 is the universal, one-to-one version of that form: the same human loop, generated for the individual, not bolted to one integration suite.
