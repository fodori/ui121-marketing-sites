# LEADERS.md — Voices of UI-as-a-Service / Headless / Managed Frontend / SDUI Leaders

*Real quoted excerpts captured from live sites (Sept 2026). All quotes verbatim from linked sources.*

---

## Vercel — vercel.com
> "Agentic infrastructure for every app and agent. Every new generation of software demands a new generation of infrastructure."

> "Most teams stitch together five vendors to ship one product. On Vercel, the framework, deployment, runtime, security, and operations are designed as one system."

> "Ship apps that scale from zero to millions instantly"

> "Together with Vercel's global CDN and rendering infrastructure, it's the most battle-tested frontend stack available."
- Source: https://vercel.com/platform ; https://vercel.com/home
- Note: Formerly the "Frontend Cloud" — now frames managed delivery of the whole frontend stack (deploy → runtime → security) as one system, extending to agent-run infrastructure.

## Netlify — netlify.com
> "Push your ideas to the web. Create with AI or code, deploy instantly on production infrastructure. One platform to build and ship."

> "Every path runs on the same workflow and production infrastructure, powering millions of sites and apps."

> "Deploy to a global CDN in seconds, then choose when to make your project public."

> "Grow on the same infrastructure. From your first deploy to global traffic, the same infrastructure supports your growth as you scale."
- Source: https://www.netlify.com/
- Note: Sells the "deploy instantly on production infrastructure" promise — managed web delivery without the user touching ops.

## Plasmic — plasmic.app
> "The visual builder for your tech stack. Plasmic is an open-source visual editing and content platform for building websites and apps. Integrate with existing codebases. Ship incredibly fast."

> "Tap into popular data sources like Supabase, Contentful, and Shopify with built-in connectors, or connect to any HTTP or GraphQL API endpoint."

> "Create unique, custom UIs with arbitrary layouts and styling that can be tailored to your specific needs and requirements."
- Source: https://www.plasmic.app/ ; https://www.plasmic.app/learn/
- Note: The closest pure-play to "UI as a service" — visual UI built centrally, delivered headlessly into existing codebases (React etc.).

## Builder.io — builder.io
> "Create real product experiences that stay on brand, in code, and ready to ship."

> "Build software with your team and agents" (collaborative platform tagline)

> "Most of your team is waiting to contribute. Let them."

> "SOC 2 Type II compliant and designed with enterprise-grade security standards."
- Source: https://www.builder.io/
- Note: Pioneered "Visual Development Platform" — non-engineers compose UI, delivered as code into the app (headless drag-and-drop/SDUI); messaging has pivoted to AI-agent collaboration.

## Storyblok — storyblok.com
> "The System of Record for your Content. Content structured for the AI era. The CMS for Confidence."

> "#1 Headless CMS"

> "AI is only as good as the content it runs on. Storyblok gives your organization one trusted foundation for your content."

> "At Storyblok, every piece of content lives in one place, follows a defined model, and has a clear owner."
- Source: https://www.storyblok.com/
- Note: Headless CMS with visual editor — structured content served via API to any frontend; now repositioning content delivery as the foundation for AI-era interfaces.

## Contentful — contentful.com
> "A headless CMS is a content management system that separates the presentation layer (where content is presented) from the backend (where content is managed). A headless CMS allows you to manage content in one place and be able to deploy that content on any digital channel you choose."

> "Separating the frontend from the backend unlocks your content, making it easier for marketers to manage content independently, and for developers to build faster, automate changes, and manage digital at scale."

> "Content housed in a headless CMS is delivered via APIs for seamless display across any site, device, or other digital touchpoint."
- Source: https://www.contentful.com/r/knowledgebase/what-is-headless-cms/
- Note: The canonical definition of the headless pattern — manage centrally, deliver presentation-free via API. The clearest articulation of "content/UI as a service" in the CMS space.

## Stripe (Elements / Payment Element) — stripe.com
> "Use Stripe's suite of rich UI building blocks to design a secure payments experience that perfectly matches your site and helps drive conversion."

> "Save development time and eliminate user confusion with built-in accessibility, error messages, input masking, autofill, and more."

> "Reach more users with 40+ payment methods through a single integration."

> "Businesses using Stripe's Payment Element saw 11.9% more revenue on average."
- Source: https://stripe.com/payments/elements ; https://stripe.com/docs/payments/elements
- Note: The gold standard for embedding a managed, vendor-hosted UI ("prebuilt UI components") inside someone else's product — proof that companies trust third-party rendered UI at checkout.

## Clerk — clerk.com
> "More than authentication, Complete User Management. Clerk gives you full stack auth and user management — so you can launch faster, scale easier, and stay focused on building your business."

> "Pixel-perfect UIs, embedded in minutes. Drop-in UI components for authentication, profile management, organization management, and billing."

> "Match to your brand with any CSS library, then deploy to your own domain."
- Source: https://clerk.com/ ; https://clerk.com/components
- Note: Openly sells managed UI — the vendor owns and renders the auth/billing interface, you embed it. "Drop-in UI components" is literal UI-as-a-service.

## Auth0 — auth0.com
> "Convert, protect, & personalize every journey. Auth0 makes every login effortless, so fewer customers walk away."

> "Auth0 is an identity platform to manage access to your applications."

> "This whitepaper outlines practical identity patterns for building production-ready apps and AI agents, with authentication and authorization kept reusable, auditable, and out of app code."
- Source: https://auth0.com/ ; https://auth0.com/docs/get-started
- Note: Auth UI delivered as a managed service (Universal Login + Lock embeds); "out of app code" framing shows the managed-interface value prop: identity UI handled by the vendor.

## MobileNativeFoundation — github.com/MobileNativeFoundation (mnf.st)
> "Discussions about projects, technologies, and processes around building large-scale mobile apps"

> "Store — A library for reading and writing data that lives in network, disk, and memory."

> "Bluepill is a reliable iOS testing tool that runs UI tests using multiple simulators on a single machine"
- Source: https://github.com/MobileNativeFoundation
- Note: Community of Airbnb/Square/LinkedIn-scale mobile teams; the group where SDUI (server-driven UI) practices for native apps have been openly discussed (e.g., SDUI threads in its discussions). NOTE: mnf.st (website) was unreachable at capture time — quotes are from the GitHub org, not SDUI essays; verify their SDUI write-ups separately.

---

## Pattern summary (for ui121 positioning)
- **Headless CMS players** (Contentful, Storyblok) say: manage centrally, deliver via API to any channel — separation of presentation from management.
- **Embedded component vendors** (Stripe, Clerk, Auth0) say: drop-in/prebuilt UI, vendor-hosted, brand-styled in place — the first "UI as a service" in production at scale.
- **Visual/platform builders** (Plasmic, Builder.io) say: build UI visually in one place, deliver it into your codebase as code/SDK.
- **Platform players** (Vercel, Netlify) say: managed infrastructure under the whole frontend — deploy instantly to production infrastructure.
- **SDUI (mobile)**: the MobileNativeFoundation community documents native teams shipping server-controlled UI; no single vendor owns the framing.
