# BDUI Go — server-driven UI runner on Google Play

- Title: BDUI Go: Server-Driven UI
- Source URL: https://play.google.com/store/apps/details?id=io.bdui.go&hl=en_GB
- Fetched: 2026-09-23
- Status: ok

## Summary

BDUI Go, by Filimonz (developer Yuriy Zhelannov, contact@bdui.io, site bdui.io), is a 2026 Android runner for apps described by JSON schemas. The store text says it renders them natively, "like a browser, but for mobile screens." You scan a QR code or open a link and the app loads. When the author publishes, screens update in seconds, without a reinstall or a store release. No account is required to try it.

Demos shipped inside the runner: a component showcase rendered live from JSON, a currency converter using the Frankfurter API with pull-to-refresh, a weather demo using Open-Meteo, and an auth demo that injects tokens and retries on refresh. The authoring loop is: describe screens in a JSON schema, publish, share a link or QR, the runner renders with Compose Multiplatform (explicitly not a web view). Authors can switch dev, staging, and production channels and roll back a version in one click. Features listed: offline cache of previously opened apps, recents and favorites, an optional default app on launch, a host allow-list so a schema can only call hosts it names, declarative token auth, and Android App Links of the form https://bdui.io/a/…. Privacy claims on the listing: no accounts, no ads, no analytics, no tracking; camera is on-device for QR only; no data collected and none shared with third parties, as declared by the developer. Updated on 22 September 2026. Recent changes: startup mode and clear-data settings, a guaranteed back control, link actions (call, email, SMS, maps), row/column child weights, and lists or grids that render empty when items fail to parse instead of vanishing.

## Key facts

- Package: io.bdui.go. Updated: 22 September 2026. Developer: Yuriy Zhelannov. Support: contact@bdui.io. Docs: https://bdui.io.
- Renderer: Compose Multiplatform, not a web view.
- Distribution: QR or link, including https://bdui.io/a/… App Links. No account for the try-it demos.
- Channels: dev, staging, production, plus one-click rollback.
- Sandbox: schema may call only allow-listed hosts. Token auth is declarative.
- Offline: previously opened apps launch from cache.
- Data safety declaration: no data collected, no data shared.
- Parse failure policy called out in "what's new": unparsed list items render empty rather than dropping the list.

## How it works

The phone installs one runner. Each "app" is a published JSON schema at a URL. Opening the URL fetches the schema and maps it to native Compose components. Publishing a new schema is the release. The runner keeps a cache so a known app still opens offline. Network calls from the schema are constrained by an allow-list, which is the security model: the document is untrusted, the host is not. Auth is described in the schema (where to put the token, how to refresh) rather than hard-coded per app.

## Implications for jsonapp.com / ui121

This is the live 2026 analogue of jsonapp.com's missing Play listing. Same sentence: a browser for mobile screens, one binary, many JSON apps, QR distribution, instant publish. ui121 can cite the category as active without citing a dead package id.

Differences worth stating: BDUI Go is a consumer runner for schema-described screens (weather, FX, auth demos). ui121 is a product runtime for task UIs with tenancy, validation, and webhooks. The ideas to borrow in public language are allow-listed hosts, channel plus rollback, offline cache of the last good document, and "unknown children render empty, they do not crash." Those are trust features a marketer can promise because they are concrete.

> "Opens apps described by JSON schemas and renders them natively — like a browser, but for mobile."
