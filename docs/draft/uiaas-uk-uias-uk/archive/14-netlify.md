# Netlify

- Source: https://www.netlify.com
- Fetched: 2026-09-23
- Status: ok

## Summary

Netlify’s homepage promise is one production platform for ideas that start as a prompt, a Git push, a CLI deploy, or a drag-and-drop folder. Every path is said to land on the same workflow: build, preview, then publish to a global CDN. The page stresses that AI agents and human commits share that pipeline.

The delivery model is managed web hosting plus app primitives (functions, data, files, identity, an AI gateway), not a hosted component library. The customer’s site is built and served; the interface source still belongs to the project.

## Key facts

- Scale claims: millions of sites and apps; 10 million-plus developers; 60 million-plus apps deployed; 99.99% uptime.
- Entry paths: AI agent, Git (preview URL per pull request), CLI (the page shows an anonymous deploy), drag-and-drop via Netlify Drop.
- Primitives named: serverless functions, database and file storage, identity, AI gateway, image CDN, edge network, automatic HTTPS and DDoS protection, team access and secrets.
- A quoted engineer (Jeffrey Sica) says a push can rebuild the site in about 30 seconds.
- Use cases on the page: AI features, marketing sites, fullstack apps, storefronts, internal tools.

## How it works

Code or an agent produces a project. Netlify builds it, issues a private preview, and publishes to the edge when the team says so. Rollbacks are one step. Backend bits (functions, blobs, a managed database) run on the same account so a marketing site can grow into an app without a second host. Agents are described as runners that draft pages or features inside that same loop.

## Implications for uiaas.uk / ui121

Netlify is evidence that “deploy the frontend for me” is a settled purchase. It does not sell the interface. A change to a screen is still a rebuild. ui121’s distinction is a change that is a content or schema publish, not a site rebuild, which matters for mobile clients that cannot redeploy with a Git push.
