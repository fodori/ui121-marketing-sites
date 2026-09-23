# Clerk

- Source: https://clerk.com
- Fetched: 2026-09-23
- Status: ok

## Summary

Clerk sells full-stack authentication and user management, and it leads with the interface. Drop-in components cover sign-in, user profile, organisations, and billing. The customer matches them to a CSS approach and can serve them on their own domain. The rest of the product (sessions, MFA, fraud checks, B2B roles, subscriptions) is what those components are allowed to do without the team writing the screens.

A platform tier embeds Clerk inside someone else’s product: provision apps by API, white-label sign-in and email, and managed dashboard sessions.

## Key facts

- Free tier stated on the page: first 50,000 monthly retained users and 100 monthly retained organisations, no card required.
- Components named include sign-in, sign-up, user button, and organisation and billing widgets.
- Auth features listed: MFA, fraud and abuse detection, sessions, social sign-on, bot detection, email and SMS, magic links, passwords, API keys, an MCP server.
- B2B: custom roles, auto-join, invitations, and UI for them.
- Billing: plans, unified user and subscription data, access gating, without custom payment UI.
- SDKs named: Next.js, React, Expo, React Router, TanStack React Start, Astro. Integrations include Supabase, Convex, and Vercel.
- Social proof includes Guillermo Rauch (Vercel) on built-in practices that would take months, and Patrick Collison (Stripe) as an admirer. No Series C figure appears on this homepage.

## How it works

Add the SDK, drop the components into the app, and point styling at the brand. Clerk hosts the user directory, sessions, and the hard auth flows. The components render inside the product. Organisations and billing use the same pattern: a managed backend plus a UI the team does not build. The platform API repeats that for every app a customer of the platform creates.

## Implications for uiaas.uk / ui121

Clerk is the cleanest “drop-in UI” business in this set, scoped to identity. The lesson is the bundle: the component is how the service is adopted, and the vendor keeps the behaviour current (new factors, fraud, enterprise SSO). ui121 can use the same words for tasks and forms, and should notice the custom-domain and white-label details, because embedded UI fails if it looks like a third-party island.
