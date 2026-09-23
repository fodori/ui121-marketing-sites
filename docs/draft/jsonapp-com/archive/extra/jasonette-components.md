# Jasonette components

- Title: Jasonette components
- Source URL: https://jasonelle-archive.github.io/docs/legacy/components/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 05

## Summary

Components are the atoms Jasonette places inside items and layers. The catalog on this page is label, image, button, textfield, textarea, slider, switch, html, space, and map, plus a note that you can add more. Each is a `type` plus style and, for inputs, a `name` that writes a local variable.

Labels are static text with font, size, colour, padding, background, and corner radius. Images load from a URL and can send auth headers; they are not tappable. A tap target must be an image button. Buttons are text or image, not both, with a fixed hit region, border, radius, and an action trigger. Text fields and text areas bind `name` to a variable, support placeholders, keyboard types (text, number, phone, decimal, url, email), autofocus, and secure entry on the single-line field. A textarea example posts the named value through a network action. Sliders run from 0 to 1 and fire an action when the gesture ends. Switches are booleans with separate on and off colours. HTML is a web container, documented with agents. Space is a flex gap: with no size it absorbs leftover room so siblings can pin to opposite ends; with a height it is a fixed spacer. Maps take a region (latitude and longitude plus width and height in meters), pins with title and description, and a map style including satellite and flyover. iOS maps work without extra setup. Android needs a Google Maps key in the manifest.

## Key facts

- Types: label, image, button, textfield, textarea, slider, switch, html, space, map.
- Inputs write local variables by `name`. Keyboard is an enum.
- Images do not take actions; buttons do.
- Slider range documented as 0–1. Switch values are booleans.
- Map: Apple maps on iOS with no key; Google maps key required on Android.
- Space is the flexible-gap primitive.

## How it works

The renderer switches on `type` and applies `style`. Inputs connect to templates and actions through named variables. Actions attach to buttons, sliders, and switches, not to plain labels or images. Device features such as map and html are components, so they sit in the same layout tree as a label.

## Implications for jsonapp.com / ui121

Publish a closed catalog that says which types accept actions, how inputs are named, and which types need platform keys. ui121’s fields already cover text, boolean, and number. A full app runtime adds non-form atoms (spacer, map, HTML slot) and an explicit rule that decoration is not a control.
