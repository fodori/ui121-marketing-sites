# ui121-marketing-sites

Static marketing landings for UI121-related domains. Astro + React islands + Tailwind. No site backend.

## Quick start

```bash
yarn install
yarn site:dev human-in-the-loop.uk
yarn site:build ui121.com
```

## Docs

See [`docs/`](docs/README.md) for strategy, architecture, site briefs, and hosting notes.

## Sites

| Domain               | Status           |
| -------------------- | ---------------- |
| human-in-the-loop.uk | Full (Layout A)  |
| ui121.com            | Full (Layout B)  |
| askmeapi.com         | Shell (Layout C) |
| generatedui.app      | Shell (Layout D) |
| others               | Scaffold         |

## Structure

- `sites/<domain>/` — independent Astro app + `site.config.ts`
- `packages/` — analytics, seo, a11y, content-schema, lead-form, shared-react
- `scripts/` — `site:dev` / `site:build` / `site:preview` / `site:check`
