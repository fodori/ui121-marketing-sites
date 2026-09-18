# Architecture

## Stack

- **Astro** (`output: 'static'`) — SEO-optimized static HTML
- **React islands** — interactive bits only (lead form, light motion)
- **Tailwind CSS** — per-site theme tokens
- **TypeScript**, Node 24
- **GA4** — one measurement ID per site in `site.config.ts`
- **No site backend** — optional Firebase client write for leads

## Repo layout

```text
docs/
sites/<domain>/          # independent Astro app
  site.config.ts         # switchboard
  src/pages/
  src/components/        # site-only UI
  src/styles/
  src/content/
  src/layouts/
packages/
  analytics/
  seo/
  a11y/
  content-schema/
  lead-form/
  shared-react/
scripts/
.github/workflows/
```

## Shared vs not shared

| Shared (mechanism)                   | Not shared               |
| ------------------------------------ | ------------------------ |
| Analytics, SEO, a11y helpers         | Theme, layout, UI blocks |
| Zod content schema                   | Copy, imagery, motion    |
| Lead-form React island               | Visual design system     |
| Astro/TS/Tailwind versions, CI shape | Per-site components      |

## Commands

```bash
yarn install
yarn site:dev human-in-the-loop.uk
yarn site:build ui121.com
yarn site:check human-in-the-loop.uk
yarn lint
yarn type-check          # all packages + all sites
yarn type-check ui121.com
yarn format:check
yarn pre-push            # format:check && lint && type-check && test
```

Husky: `pre-commit` → lint-staged; `pre-push` → `yarn pre-push`.

## Independent release

- Each site has its own `package.json` and GitHub Actions workflow
- Path filters: that site + `packages/**`
- Deploy (later): `firebase deploy --only hosting:<target>` — see [04-hosting.md](04-hosting.md)
