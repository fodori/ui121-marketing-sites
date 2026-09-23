# JSON Forms validation

- Title: JSON Forms validation
- Source URL: https://jsonforms.io/docs/validation
- Fetched: 2026-09-23
- Status: ok
- Parent: source 20

## Summary

JSON Forms validates on every data change and shows messages for JSON Schema violations. The validator is AJV. You can pass your own AJV instance into the form component. The default is created with `allErrors`, `verbose`, and `strict: false`, then `ajv-formats` is registered. A `createAjv` helper lets you override those options. Localized or custom messages are delegated to ajv-errors.

Three modes: ValidateAndShow (default), ValidateAndHide (still emits errors, does not display them), and NoValidation. The mode is a prop on the root form, next to schema, UI schema, data, renderers, and cells. External errors, for example from a backend, arrive as `additionalErrors`, an array of AJV `ErrorObject`s. The useful fields are `instancePath` (such as `/lastname`) and `message`. The array should be memoized so it does not rerender constantly. Validation mode does not suppress additional errors; they still show when validation is off or hidden.

## Key facts

- Engine: AJV, formats via ajv-formats, custom text via ajv-errors.
- Default AJV flags stated: allErrors, verbose, strict false.
- Modes: ValidateAndShow, ValidateAndHide, NoValidation.
- Server errors: `additionalErrors` with instancePath and message, always displayed.
- Validation runs as the user edits, not only on submit.

## How it works

The form keeps data and runs AJV against the JSON Schema. Renderer cells read the error list for their path and show the message. A parent can also push errors that did not come from the schema, using the same error object shape, so a unique-email failure from an API looks like a field error. Hiding schema errors is a UI choice; it does not stop the error objects from being emitted for the host app to inspect.

## Implications for jsonapp.com / ui121

This is the validation behaviour ui121 should describe in product language: schema checks while typing, a way to show server errors on the same fields, and a mode for drafts that collects errors without painting them. Additional errors are how a webhook or API rejection becomes inline UI without a second error channel. Keep the schema as the source of client rules and the server as the source of business rules, matching the mobile SDUI guide’s warning not to trust the client alone.
