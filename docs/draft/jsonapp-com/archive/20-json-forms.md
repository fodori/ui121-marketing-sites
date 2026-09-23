# JSON Forms

- Title: JSON Forms
- Source URL: https://jsonforms.io/
- Also fetched: https://jsonforms.io/docs/
- Fetched: 2026-09-23
- Status: ok

## Summary

JSON Forms, from EclipseSource, is a declarative way to build form UIs from JSON. The homepage slogan is "More forms. Less code." Version noted on the fetch was v3.8.0, with a callout that the release adds Angular 22 support. You declare forms from a JSON Schema and get data binding, input validation, and rule-based visibility without writing the form by hand. Customization runs from styling to custom widgets. Off-the-shelf bindings exist for React, Angular, and Vue. The core is plain JavaScript, so it is not tied to one framework.

The docs page says these UIs are for entering, editing, and viewing data, usually embedded in a larger app. Hand-written templates and binding do not scale, and real forms need validation and conditional visibility. Two schemas define a form. The JSON Schema describes the data: objects, properties, types, required fields. The UI schema describes presentation: control order, layout, visibility. At runtime the framework maps both onto components that already bind and validate. The task example is a vertical layout of controls for name, a multiline description, rating, and a boolean done flag, each control pointing at a schema path with a JSON Pointer scope. Default renderers exist for the data types; a custom renderer can replace one control (they swap the rating widget) without abandoning the schemas.

The docs URL is a hub. Getting started, architecture, rules, and validation are saved as extras. Tutorial chapters (custom layouts, custom renderers, dynamic enums, multiple forms) were left unexpanded to stay inside the extra cap.

## Key facts

- Site version at fetch: v3.8.0. Angular 22 support called out for that release.
- Two inputs: JSON Schema (data) and UI schema (layout and rules).
- Bindings: React (Material and vanilla HTML renderers), Angular (Angular Material), Vue (vanilla and Vuetify).
- Core package is framework-agnostic JavaScript.
- UI schema building blocks named on the homepage and docs: VerticalLayout, HorizontalLayout, Control, rule effects such as ENABLE.
- Homepage demo fields include string lengths, an integer age range, gender enum, nested address, and a committer checkbox that enables the address group.
- Custom renderers can replace a single control.

## How it works

The host passes schema, UI schema, and data into a form component. Core code walks the UI schema, resolves each control’s scope against the data schema, picks a renderer for the type, and subscribes the control to the data. AJV (covered in the validation extra) checks constraints as values change. A rule on a control evaluates a JSON Schema condition against a scope and then hides, shows, enables, or disables that control. If no UI schema is the focus of a screen, the interesting claim is still the split: meaning lives in the data schema, arrangement lives in a second JSON document, and the widget library is swappable.

## Implications for jsonapp.com / ui121

This is the form-shaped version of "apps as JSON," and it is the slice ui121 already occupies. jsonapp.com should not pretend a full-app viewer replaces JSON Forms. It should say the same contract — schema for data, a second document for layout and rules, renderers per platform — extended from a form to a task UI with navigation and actions.

ui121’s differentiator versus JSON Forms is the product around the form (tasks, tenants, submit, webhooks), not a new form engine. Citing JSON Forms is how you tell a technical buyer the pattern is a maintained open-source practice, with React, Angular, and Vue, not a one-off mobile experiment.

> "Declare your forms as JSON based on a JSON Schema."
