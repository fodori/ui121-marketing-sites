# Windows widgets via Adaptive Cards

- Title: Create a widget template with the Adaptive Cards Designer
- Source URL: https://learn.microsoft.com/en-us/windows/apps/develop/widgets/widgets-create-a-template
- Fetched: 2026-09-23
- Status: ok

## Summary

Windows Widgets implement their UI as Adaptive Cards. Each widget has a visual template and an optional data template, both JSON that follows the Adaptive Cards schema. This Learn article walks through a counting widget: a number on screen and a button that increments it, using data binding so the label updates from a data context. The widget provider (implemented in the app, with a companion article for Win32) generates or updates the template and the data and hands them to the widget host.

The design tool is the Adaptive Cards Designer. Choosing the Widgets Board host sets a legal widget size (small, medium, or large). Three editors matter: the card payload (the UI JSON), sample data (the data context), and sample host data. Host properties the Widgets Board exposes include widget size, light or dark theme, whether the user opened customization, whether a header is supported or requested, whether web content is supported (if not, web widgets fall back to the JSON payload), and whether the user is authenticated. If the user is not authenticated, the only supported action is open-url. Container size and theme dropdowns in the designer set those properties without hand-editing host JSON.

The counting widget is four text blocks plus one `Action.Execute`. Conditional layout uses `$when` against `$host.widgetSize`, so only the line for the current size is shown. Binding uses `${count}` in the text; sample data `{"count": "2"}` fills the preview. Widgets only support `Action.Execute` (not the wider Adaptive Card action set). The button title is the label; `verb` is an app-defined string (`inc`) that the host sends back so the provider knows what to do. A second sample uses `$host.isSettingsPayload` to swap the body and the button between content and a customize mode. Schema version in the sample is 1.6.

## Key facts

- Windows widget UI is Adaptive Cards JSON, plus optional data JSON.
- Designer host: Widgets Board. Sizes: small, medium, large.
- Binding syntax in the article: `${count}`. Conditionals: `$when`.
- Host context includes size, theme, settings mode, header flags, web support, and auth.
- Unauthenticated widgets: only open-url actions.
- Widget actions: `Action.Execute` only. `verb` is the intent string (`inc` in the sample).
- Card schema URL in the sample: adaptivecards.io adaptive-card schema, version 1.6.

## How it works

The provider owns state (the count). The host owns presentation: it receives a card template and a data payload, binds data into `${...}` slots, evaluates `$when`, and on a button press calls the provider with the verb. The provider returns a new data payload. The designer previews this with sample data, but the increment itself cannot be simulated there because it needs the provider. Web widgets can fall back to the JSON card when the host cannot load web content.

## Implications for jsonapp.com / ui121

JSON-defined UI is not only chat cards. It is how Windows paints widgets on the desktop, including size variants and a settings mode, without a second layout language. For jsonapp.com, the pattern to describe is template plus data plus a small verb vocabulary: the document says "increment," the runtime performs it. That is the same split ui121 uses when a JSON model declares a submit and the server executes it.

Host properties are a product idea: the document can branch on viewport, theme, and auth without forking the file. ui121’s renderer can do the same with a small `$host`-style context (locale, role, theme) instead of baking those branches into code.

> "The Card Payload Editor contains the JSON definition of your widget's UI."
