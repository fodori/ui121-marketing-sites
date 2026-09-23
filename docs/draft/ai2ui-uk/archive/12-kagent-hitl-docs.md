# Solo Enterprise for kagent: human in the loop

- **Source:** https://docs.solo.io/kagent/0.5.x/agents/human-in-the-loop/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Solo’s kagent 0.5.x docs show a Kubernetes-native agent that reads the cluster freely and pauses before it creates, changes, or deletes resources. Approval is not a prompt buried in the model. It is a `requireApproval` list on the tool server reference in the agent spec. Any listed tool waits until a person approves or rejects. A built-in `ask_user` tool uses the same confirmation path when the request is ambiguous, for example “set up a namespace” without a name.

The docs assume Solo Enterprise for kagent, an OIDC login (tested with Keycloak, Microsoft Entra, and Okta), and at least a Writer role in the UI. The UI can be reached by a custom domain, a load balancer, or a local port forward, including a warning about self-signed demo certificates. That is a reminder that the human surface is an authenticated app, not an anonymous webhook.

Read tools in the sample (list, describe, logs, events, export YAML) run immediately. Apply, delete, and patch pause. The approval UI shows the YAML the agent wants to apply. A rejection reason is returned to the model so it can change plan instead of retrying the same delete. From the CLI, a paused task comes back as A2A JSON in an `input_required` state. The operator resumes the same session with keywords such as approve, yes, proceed, or continue, or deny, reject, no, cancel, or stop, optionally with a reason after deny.

## Key facts

- Docs version path: kagent 0.5.x. API version in the sample: `kagent.dev/v1alpha2` Agent.
- Gated tools in the example: `k8s_apply_manifest`, `k8s_delete_resource`, `k8s_patch_resource`.
- `ask_user` is built in on every agent and does not need to be listed.
- CLI resume is a follow-up message on the same `contextId`, not a new conversation.
- Approve keywords include approve, yes, proceed, continue. Reject keywords include deny, reject, no, cancel, stop.
- Identity: OIDC, Writer role minimum.

## How it works

The user sends a task. The agent picks a tool. If the tool is not in `requireApproval`, it runs. If it is, execution pauses and the UI or A2A client shows the call. Approve runs the tool. Reject sends the reason back and the agent adapts. `ask_user` pauses the same way, the person answers in text (“call it my-app”), and the agent continues. Cleanup in the guide is deleting the agent and any ConfigMap created during the test.

## Implications for ai2ui.uk / ui121

kagent already has a cluster UI and a terse CLI resume. The gap for ai2ui.uk is everyone who is not logged into that UI: an on-call engineer on a phone, a second approver, a ticket. A hosted question can render the manifest, collect approve or reject with a reason, and post the A2A follow-up. Marketing angle: Kubernetes agents are growing their own approval buttons; a neutral gateway is what you use when the approver is outside the cluster console. Section outline for a docs page: what pauses, what runs free, what the reviewer sees, how rejection changes the plan.
