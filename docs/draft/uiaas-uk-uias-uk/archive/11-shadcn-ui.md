# shadcn/ui

- Source: https://ui.shadcn.com
- Fetched: 2026-09-23
- Status: ok

## Summary

The homepage calls the project the foundation for a design system: composable, accessible components with defaults a team can change. The delivery model is copy and own. The code lands in the customer’s repository, and the customer is expected to customise it. The page says the project is built by shadcn at Vercel and that the source is on GitHub.

The rest of the fetched page is a dense product demo (analytics, payouts, notifications). There is no hosted runtime and no claim that shadcn updates a live app for the customer.

## Key facts

- Tagline: the foundation for your design system.
- Model: components you copy, extend, and keep.
- Attribution on the page: built at Vercel; source on GitHub.
- No license text, price, or embed API on the homepage itself.

## How it works

A developer adds the components into the app, wires them to product data, and ships them in the normal release. Updates to the upstream kit are a dependency decision, not a push from a vendor. The visual system becomes the team’s own code.

## Implications for uiaas.uk / ui121

shadcn is the strongest “not a service” pattern in this set. Teams like it because they are not locked to a vendor’s release train. ui121 should not pretend to be a copy-paste kit. The pitch is the opposite trade: less code in the repo, more of the interface operated as a service, with a clear exit (schema and data the customer can take with them).
