# UI121 Marketing Sites — Agent Notes

## Quality gates (same idea as ui121-web)

Before commit / push:

```bash
yarn format          # Prettier write
yarn format:check
yarn lint            # ESLint (repo-wide, all sites + packages)
yarn type-check      # tsc on packages + astro check on every site
yarn test
yarn pre-push        # format:check && lint && type-check && test
```

Single site:

```bash
yarn site:check human-in-the-loop.uk   # astro check only
yarn site:build ui121.com
```

## Husky

- `pre-commit` → `lint-staged` (ESLint --fix on TS/JS + Prettier)
- `pre-push` → full `yarn pre-push`

Do not commit or push unless the user asks.
