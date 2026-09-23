# ServiceNow web embeddables — LinkedIn post

- Source: https://www.linkedin.com/posts/ujjwalsagarmahajan_web-embeddables-administration-using-modules-activity-7440780670966063104-LCwp
- Fetched: 2026-09-23
- Status: ok

## Summary

Ujjwal Mahajan’s post treats ServiceNow’s Australia release (May 2026) as a shift from “send people to our portal” to “put ServiceNow on your site.” He calls the matured web embeddables UI-as-a-Service. The claim is that a team can surface cases, knowledge, catalogue items, or analytics on an intranet or a retail site without building a custom frontend or a bespoke API.

The mechanism he describes is a native web component, not an iframe: it inherits the host CSS, handles events, and is presented as safer than the old embed. Auth is OIDC or JWT so the user is not asked to sign in twice. Deployment is low-code: configure in UI Builder, copy a snippet, paste it into HTML, React, or Angular.

## Key facts

- Author: Ujjwal Mahajan. The post is a practitioner write-up, not a ServiceNow doc page.
- Release named: ServiceNow Australia, May 2026.
- Embeds listed: case create, knowledge articles, service catalogue, real-time analytics.
- Contrast he draws: native components versus iframes; shared CSS; event handling; no second login.
- He uses the phrase UI-as-a-Service for the elimination of custom frontends.

> “This is true UI-as-a-Service. It eliminates the need to build custom frontends or complex APIs just to surface ServiceNow data.”

## How it works

An admin assembles the embed in ServiceNow’s UI Builder. The platform emits a snippet. The host page mounts it as a web component. Styling comes from the host. Identity is passed through standard tokens. ServiceNow remains the system of record; the foreign site only hosts the surface.

## Implications for uiaas.uk / ui121

The term is already in use for embeddable enterprise UI, not only for design systems. ui121 can point at this pattern (snippet, host CSS, no second login, server-owned workflow) and generalise it beyond one ITSM suite. The post is a single practitioner’s reading of a release; it is a signal, not a spec.
