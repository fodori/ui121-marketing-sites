# Sebastian Maniak: kagent human-in-the-loop

- **Source:** https://maniak.io/articles/2026-03-11-human-in-the-loop-kagent/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Sebastian Maniak’s 11 March 2026 article is a practitioner walkthrough of the same kagent pattern as the Solo docs: give a Kubernetes agent real tools, and refuse to let it delete production objects without a checkpoint. The failure stories are misread cleanup that removes the wrong namespace, and “scale down the database” that sets a production Postgres StatefulSet to zero replicas. The agent is not described as unintelligent. The missing piece is a moment between the decision and the side effect.

Three mechanisms are separated. Tool approval pauses a listed call until a person approves or rejects, and the rejection reason goes back to the model. Ask-user is collaboration, not a safety gate: free text, single select, or multi-select, returned as structured data. The combination is an agent that reads freely, asks when the request is vague, shows the exact change, and adapts when told no.

Under the hood, both features share one path. The executor requests confirmation and blocks. An event reaches the UI over the Agent-to-Agent protocol. The person responds. The response comes back as an A2A message and the executor continues. Adding a gate is a YAML change, and the custom resource rejects a `requireApproval` entry that is not also in the tool list. Design principles Maniak highlights: opt-in gates (tools run free unless listed), declarative policy a security reviewer can read, contextual rejection, and ask-user available on every agent without extra config. He points at upstream “All Things” episode 03 material and the open-source kagent repository. The local install sketch uses Kind, Helm charts from GitHub Container Registry, and an OpenAI key.

## Key facts

- Published 11 March 2026.
- Same tool split as the product docs: reads run; apply, delete, and patch wait.
- `ask_user` answer shapes: free text, single-select, multi-select, as structured data rather than only a raw string.
- CRD check: every name in `requireApproval` must also appear in `toolNames`.
- Skip HITL, in his guidance, for reads, internal reasoning, and fully automated pipelines where latency matters and rollback is cheap.
- Use it for state changes, hard-to-reverse operations (deleting volumes, removing finalizers), early choices that affect later steps, and agents used by people who did not write them.

## How it works

You declare an Agent custom resource, attach the Kubernetes MCP tool server, and list destructive tool names under `requireApproval`. The system prompt tells the agent to explain the plan and to call `ask_user` when the request is ambiguous. In the UI, a write shows the tool, the arguments including the manifest, and approve or reject. A rejection is conversation context, so the model can acknowledge it instead of looping. Clarifying questions pause the same way.

## Implications for ai2ui.uk / ui121

Maniak’s line “the cost of asking is a few seconds; the cost of guessing wrong is a rollback” is the ask-human pitch, paraphrased here rather than quoted at length. ai2ui.uk should preserve his split: safety gates versus clarification, both on one confirmation channel, with structured choices not only yes/no. A security-reviewer story writes itself: the gate is a list in the agent spec, and the human UI can live outside the cluster. Do not reprint his install commands in marketing; link the idea of declarative, opt-in approval.
