# JSON Forms architecture

- Title: JSON Forms architecture
- Source URL: https://jsonforms.io/docs/architecture
- Fetched: 2026-09-23
- Status: ok
- Parent: source 20

## Summary

JSON Forms splits a framework-neutral core from UI bindings. `@jsonforms/core` manages schema-based forms and does not depend on a UI toolkit. `@jsonforms/react`, `@jsonforms/angular`, and `@jsonforms/vue` adapt that core. Renderer sets sit on top: Material and vanilla HTML for React, Angular Material for Angular, vanilla and Vuetify for Vue. The page stresses that you can configure renderers, replace them, or add your own, including for a toolkit they do not ship (Bootstrap is the example), and still keep the core. If you are not on React, Angular, or Vue, you can write bindings and still use the core.

## Key facts

- Core: `@jsonforms/core`, no UI framework.
- Bindings: React, Angular, Vue.
- Renderer packages named: material-renderers, vanilla-renderers, angular-material, vue-vanilla, vue-vuetify.
- Extension path: custom renderers, or new bindings against the core.
- Same core is reused when a team ships more than one renderer set for one framework.

## How it works

Core code interprets schema and UI schema and decides which renderer rank matches a control. The binding connects that decision to the framework’s component model. A custom renderer registers for a tester (schema plus UI schema conditions) and paints one control. Swapping Material for vanilla does not change the JSON the author wrote.

## Implications for jsonapp.com / ui121

This is the portable-runtime argument in library form: one JSON definition, several renderers, core rules unchanged. ui121’s web renderer is one binding. A second client (mobile shell, email, embedded card) should consume the same document and a subset of components, the way vanilla and Material both consume the same schemas. Keep validation and rule evaluation in the core, not in the widgets.
