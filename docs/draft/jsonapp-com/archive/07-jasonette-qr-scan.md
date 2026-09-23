# Medium — QR and barcode scanning in 26 lines of JSON

- Title: Build a QRCode/Barcode scanning app with 26 lines of JSON
- Source URL: https://medium.com/@gliechtenstein/build-a-qrcode-barcode-scanning-app-with-26-lines-of-json-b83453d39197
- Fetched: 2026-09-23
- Status: ok

## Summary

Ethan, 8 March 2018, shows that a device camera and a barcode scan are not a native side project. In Jasonette they are a JSON action named `$vision`. The article's hook is that web.jasonette.com and jasonbase.com already show a QR code so a JASON app can scan it and open the linked JSON app. He then generalizes: a QR payload can be any data, not only a URL, and the same API reads ordinary one-dimensional barcodes.

The implementation is three events. Put a back camera on the body background. When `$vision.ready` fires, run `$vision.scan`. When `$vision.onscan` fires, the payload is in `$jason` (he displays `$jason.content` in an alert). He says that is the whole `$vision` API, already inside Jasonette-iOS and Jasonette-Android, with no extra native code and no plugin install. Scanned data can be chained like any other action: open a URL, or `$render` a template with the scan as input. A realtime on-screen example is linked from Jasonpedia.

## Key facts

- Date: 8 March 2018. Author: Ethan (gliechtenstein).
- API: `$vision`. Background `type: camera`, option `device: back`.
- Events: `$vision.ready` then action `$vision.scan`; `$vision.onscan` carries `$jason.content`.
- Works for QR and 1D barcodes, on iOS and Android, from the same JSON.
- Distribution trick: the JSON app host itself prints a QR code that loads the app.
- Claim in the title: a scanning app in 26 lines.

## How it works

The document declares hardware as a background type, then binds lifecycle events in `head.actions`. The scan result is just the next action's input variable, so UI, navigation, and network calls compose with it. There is no separate scanner module to ship. The viewer already contains the camera pipeline; JSON only turns it on and names what to do with the string.

## Implications for jsonapp.com / ui121

This is the proof that "JSON UI" can reach hardware, not only labels and lists. A jsonapp.com page should show one device capability (camera, share sheet, or location) as a declared action, because that is what separates a form renderer from an app runtime. ui121's task model is closer to forms than to a camera browser; the marketing point is still valid: if the catalog includes actions with typed results, new device features are viewer releases, and new uses of those features are JSON.

The QR-as-app-loader pattern matches BDUI Go's 2026 Play listing (link or QR, no account). It is a distribution story: the app definition is a URL, and the URL can be a code.

> "You just need to load a JSON markup that instructs Jasonette to scan QR code."
