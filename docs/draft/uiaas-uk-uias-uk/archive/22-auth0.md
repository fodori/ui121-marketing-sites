# Auth0

- Source: https://auth0.com
- Fetched: 2026-09-23
- Status: ok

## Summary

Auth0’s homepage is an identity platform pitched across the whole customer lifecycle: sign-up, onboarding, checkout, expansion, and now AI agents. The promise is fewer abandoned logins, fraud stopped without extra friction, and a user who stays recognised across sites, apps, and agent touchpoints. Universal Login and embedded login are the UI: the customer does not build the sign-in screen, the identity vendor does.

The 2026 emphasis is agents. Auth0 wants agents to have verifiable identities, controlled access to retrieval data and MCP tools, and a human in the loop for sensitive actions.

## Key facts

- Security claim: 3 billion+ attacks blocked each month. Availability: 99.99% over 12 months, as indicated at trust.okta.com.
- A second large figure, “23 billion+,” is printed beside a list of surfaces (AI agents, B2C apps, B2B SaaS, machine identities) without a clear unit in the fetched text.
- Features named: embedded login, progressive profiling, bot detection, enterprise SSO and SCIM, fine-grained authorisation, token vault, client-credentials tokens, JWKS rotation, mTLS.
- McLaren: 100% growth of partner users, attributed to Auth0’s scale.
- A whitepaper blurb says authentication and authorisation should stay reusable, auditable, and out of app code.
- SDKs: 30+ quickstarts. An agent-install example claims an “Agent Experience Score” of 98% measured by Auth0’s own evals.
- Industries called out: retail, financial services, healthcare, media and telecom, manufacturing.

## How it works

The app integrates an SDK or redirects to a hosted login. Auth0 issues tokens, runs bot and fraud checks, and can step up authentication. For B2B, customers connect their own identity provider and manage orgs and roles. For agents, the same platform issues identity and authorises tool and data access, with async approval when a human must confirm. The login UI is part of the service, styled and hosted so each app does not reinvent it.

## Implications for uiaas.uk / ui121

Auth0 is the original “this screen is not your code” product. The homepage has moved the same idea onto agents: identity UI and policy stay outside the app. ui121’s parallel is task UI and validation staying outside the app. The phrase “out of app code” is the positioning line to echo, without copying Auth0’s security claims.
