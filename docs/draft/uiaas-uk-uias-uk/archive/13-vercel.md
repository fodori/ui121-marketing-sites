# Vercel

- Source: https://vercel.com/home
- Fetched: 2026-09-23
- Status: ok

## Summary

The homepage leads with “Agentic Infrastructure.” The offer is a place where coding agents deploy apps and other agents, using Vercel’s API, CLI, MCP, and skills, on sandboxed machines with durable backends and many models. A second layer of agents is described as investigating errors, planning fixes, and opening pull requests.

Under that, the page still sells the managed frontend cloud: global delivery, environments, serverless functions, and a web application firewall, with scale “from zero to millions.” A third block is multi-tenant hosting: isolation, domains, certificates, and preview URLs.

## Key facts

- Named proof points: Notion running millions of agent conversations a day on Vercel; Zapier serving over 100 million monthly site visits; Mintlify powering docs for over 20,000 companies.
- Feature names: durable orchestration, sandboxed environments, AI model gateway, fluid compute; global delivery, deployment environments, serverless functions, WAF; tenant isolation, domain management, custom SSL, preview URLs.
- Recently shipped labels on the page: eve (a framework for durable agents), Passport (identity for internal agents and deploys), Containers.

## How it works

A developer, or an agent following a setup guide, deploys onto Vercel. The platform builds, serves at the edge, and isolates customers on a hosted platform product. Agents are a new control surface on the same infrastructure, not a replacement for the deploy pipeline. The customer still owns the UI code. Vercel owns the runtime underneath it.

## Implications for uiaas.uk / ui121

Vercel is the managed layer under the frontend, not the interface itself. Teams still design and ship screens. ui121 sits one level higher: the screen is the service. Vercel’s agent story matters because generated UI needs somewhere to run and something to update; a hosted schema-plus-renderer is a cleaner target for an agent than a fresh React repo on every change.
