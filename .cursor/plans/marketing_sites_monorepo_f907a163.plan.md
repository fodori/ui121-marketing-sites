---
name: Marketing sites monorepo
overview: 'Stand up a Yarn + Astro + React + Tailwind monorepo in ui121-marketing-sites: shared SEO/analytics/a11y/build machinery, independent static sites per domain, and two fully written landings (human-in-the-loop.uk and ui121.com) with distinct modern layouts. Remaining domains get config + scaffold only. Plan docs live in the project.'
todos:
  - id: write-docs
    content: Write plan + market + per-domain briefs into ui121-marketing-sites/docs
    status: completed
  - id: monorepo-scaffold
    content: Yarn workspaces, shared packages (analytics, seo, a11y, content-schema, lead-form), root scripts
    status: completed
  - id: layout-families
    content: 'Four independent layout shells: A HITL, B company, C protocol, D morph'
    status: completed
  - id: hitl-full
    content: 'Full human-in-the-loop.uk: config, rich content, 8 use cases, motion/imagery, lead form island'
    status: completed
  - id: company-full
    content: 'Full ui121.com: company/product story, 8 use cases, distinct layout B'
    status: completed
  - id: scaffold-rest
    content: Scaffold remaining domains with site.config.ts, stub page, docs brief; Layout C/D on askmeapi + generatedui.app
    status: completed
  - id: ci-workflows
    content: Path-filtered GitHub Actions per site (build only; no Firebase deploy yet)
    status: completed
isProject: false
---

# Marketing sites monorepo

Write this plan into the repo as [`docs/`](file:///Users/istvanfodor/Documents/gitHub/ui121-marketing-sites/docs) (strategy, market, architecture, site briefs, build/release). Then scaffold the monorepo and ship two full landings.

**This phase:** all domains scaffolded; **fully write** [`human-in-the-loop.uk`](file:///Users/istvanfodor/Documents/gitHub/ui121-marketing-sites/sites/human-in-the-loop.uk) and [`ui121.com`](file:///Users/istvanfodor/Documents/gitHub/ui121-marketing-sites/sites/ui121.com). Two extra layout shells so we can compare four visual approaches. Hosting wiring is documented, not implemented.

## Positioning (keep generic)

**Problem:** Automation and AI hit a wall when they need judgment, approval, or missing data. Chatbots and static forms are too rigid. Custom UIs per workflow are slow and expensive.

**Solution (public language):** A real-time, API-first, AI-native human–machine interface. Machines send a bounded UI to a person (or group), get structured answers back, and continue. Safer than “let the model invent an app”: the channel is controlled; humans only see approved surfaces.

**Do not say on satellite sites:** UI121, task API shape, MQTT, JSONUI internals, tenant/project model. **Do say:** AI-native, real-time, API-first, programmable, safer than blind generated UI.

**Company exception:** [`ui121.com`](file:///Users/istvanfodor/Documents/gitHub/ui121-marketing-sites/sites/ui121.com) is the company/product site (UI121 Ltd; app at `app.ui121.com`).

**Marketplace exception:** [`helpexpert.me`](file:///Users/istvanfodor/Documents/gitHub/ui121-marketing-sites/sites/helpexpert.me) / [`newhuman.store`](file:///Users/istvanfodor/Documents/gitHub/ui121-marketing-sites/sites/newhuman.store) — scaffold + brief only (RentAHuman-like, more real-time/automated; not this build).

## Market snapshot (why each cluster exists)

Typical alternatives today:

| Need                        | Typical tools                                     | Gap                                                              |
| --------------------------- | ------------------------------------------------- | ---------------------------------------------------------------- |
| Human approval in workflows | Temporal signals, Camunda user tasks, Slack/email | Orchestrators pause; **you still build the human UI**            |
| Agent handoff               | Chat, HumanRail, HITL.store, Sanctify             | Marketplace/chat; weak **controlled, reusable UI channel**       |
| Forms                       | Typeform, Tally, Fillout, Retool JSON Schema Form | Hosted forms or internal apps; not a **live inbox for machines** |
| Generated UI                | v0, CopilotKit, MCP Apps generative UI            | Free-form React/HTML; **unsafe for production humans**           |
| MCP                         | Typeform MCP, custom servers                      | Form CRUD or tools; not **send UI → human → structured result**  |

**Our wedge vs chatbots:** structured UI, not a conversation dump. **Vs BPM:** the missing human surface, not another orchestrator. **Vs generated UI:** catalog + validation, not unbounded HTML. **Vs RentAHuman:** we are the interface layer (and later a real-time marketplace), not a gig board.

Full per-domain problem/use-case briefs go in `docs/03-site-briefs/`.

## Repo shape

Yarn workspaces (same family as ui121-web/server). Each site is its own Astro app (`output: 'static'`), own `package.json`, own Tailwind theme, own components.

```text
docs/                          # this plan + briefs (source of truth)
sites/<domain>/
  src/pages/                   # Astro routes; assemble sections from config
  src/components/              # site-only UI (not shared)
  src/styles/                  # site theme (tokens, motion)
  src/content/                 # copy, use cases, media refs
  src/layouts/
  public/
  site.config.ts               # identity, SEO, analytics, nav, CTAs, section order
  astro.config.ts
  package.json
packages/
  analytics/                   # GA4 snippet, consent, pageview
  seo/                         # meta, OG, JSON-LD, sitemap helpers
  a11y/                        # skip link, focus, reduced-motion
  content-schema/              # Zod: SiteConfig + UseCase + Page
  lead-form/                   # React island → Firebase client write (no site backend)
  shared-react/                # tiny primitives only (not visual design)
scripts/dev.mjs                # yarn site:dev <domain>
.github/workflows/site-*.yml   # path-filtered build per domain
```

**Shared (mechanism):** analytics, SEO, a11y, Zod content schema, lead-form helper, Astro/TS/Tailwind versions, CI shape, GA4 id per site.

**Not shared:** theme, layout, UI blocks, copy, imagery, motion language.

**One-file rule:** `site.config.ts` is the only switchboard (domain, theme tokens, GA, SEO, nav, CTAs, `sections[]`, paths into `src/content`). Long copy lives in typed content modules so pages stay dumb and copy can be rewritten without touching layout.

## Four layout families (independent, modern)

Each family is a **different visual system**, not a skin. Compare in the browser.

| ID          | Used on                         | Feel (2026, not generic SaaS)                                                |
| ----------- | ------------------------------- | ---------------------------------------------------------------------------- |
| A Editorial | **human-in-the-loop.uk** (full) | Dark, oversized type, full-bleed scenes, scroll theatre of a live handoff    |
| B Flagship  | **ui121.com** (full)            | Light/precision, product frames, company + product, still cinematic          |
| C Protocol  | shell on **askmeapi.com**       | Request/response stage, monospace accents, API-as-theatre (placeholder copy) |
| D Morph     | shell on **generatedui.app**    | UI that reassembles; JSON-to-surface motion (placeholder copy)               |

Remaining domains clone the nearest family folder as a starting point, then diverge. No shared “Header.tsx”.

## Content system

Zod in `packages/content-schema`:

- `SiteConfig`: domain, name, locale, `gaMeasurementId`, canonical, nav, footer, `theme`, `sections`, CTA
- `Story`: problem, solution, proof points (no product internals)
- `UseCase[]` (5–10): title, audience, problem, how we solve it, why better, media
- `Seo`: title, description, OG, JSON-LD

HITL and ui121.com: **8 use cases each**, image- or animation-backed, same palette as that site. Scaffolded sites: 1 stub use case + brief in docs so later fill-in is mechanical.

Lead capture: React island using Firebase JS SDK (Firestore or Hosting + Extension later). Config-only: `leadForm.enabled`, collection/site id. No custom backend in this repo.

## Independent build and release

- `yarn site:dev human-in-the-loop.uk` / `yarn site:build <domain>`
- GitHub Actions: one workflow per site, `paths` = that site + `packages/**`
- Preview: Firebase Hosting channels **later**; for now `astro preview`
- Analytics independence: **GA4 property (or stream) per domain** in `site.config.ts` — enough to measure separately even if one Firebase project hosts many sites later

Do **not** implement Firebase Hosting / `.firebaserc` in this phase. Document the intended map: one Firebase project, multiple Hosting sites, `firebase deploy --only hosting:<target>`.

## Two full sites (this build)

### 1. human-in-the-loop.uk — click collector (Layout A)

Hero: machines stall; humans finish the step. Straight to the point.

Problem → solution → 8 use cases (detailed, not feature lists), e.g.:

- Agent missing a field from someone in the field (offline-safe)
- Irreversible action needs a human gate
- Automation exception / fallback
- First-to-answer group claim
- Inspection with photo/signature evidence
- Structured KYC / onboarding (not a chat dump)
- Incident confirmation under time pressure
- Expert review of AI output in a bounded UI

Language: AI-native HITL layer; faster/cheaper/safer than custom apps or unbounded generated UI. CTA: waitlist / talk to us. No UI121 name.

### 2. ui121.com — company (Layout B)

Company: **UI121 Ltd**. Product name allowed. App: `app.ui121.com`. Same problem/solution, more “what we ship” without API diagrams. 8 use cases overlapping HITL but framed as product. Footer: legal entity, other properties as quiet links optional.

## Remaining domains (scaffold + brief only)

| Domain                             | Angle                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------- |
| 1ui.uk, only1ui.com, onlyoneui.com | One surface: pages/forms/charts as tasks; apps collapse toward one UI           |
| ai2ui.uk                           | Gateway between AI and humans                                                   |
| askmeapi.com                       | API-first: a server/agent asks a human or group (**Layout C shell**)            |
| generatedui.app, generativeui.uk   | Data-driven UI + MCP; pre-built blocks, not free-form HTML (**Layout D shell**) |
| jsonapp.com                        | Build apps as JSON UI                                                           |
| pulsarform.com                     | Form builder that is also a live machine inbox                                  |
| ui-mcp.com                         | Connect any AI via MCP                                                          |
| ui1to1.com                         | Alias of company story (redirect or twin later; scaffold)                       |
| uiaas.uk, uias.uk                  | UI as a service                                                                 |
| codereview.uk                      | Task = review code in an IDE-like surface                                       |
| helpexpert.me, newhuman.store      | Real-time “rent a human”; later; not this build                                 |

## Stack

- Astro (static), React islands, Tailwind, TypeScript
- Google Analytics 4 via shared package
- Images: per-site `src/assets` + Astro `<Image>`; CSS/SVG/canvas motion; `prefers-reduced-motion`
- Node 24 to match sibling repos

## Quality

Per site: Prettier, ESLint, `astro check` / tsc. Schema unit tests. Optional later: axe + Lighthouse in CI.

## Out of scope now

Firebase Hosting targets, custom domains, marketplace sites’ full copy, copying ui121-web DLS/MUI, any Express/API in this repo.
