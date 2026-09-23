# JSON Forms rules

- Title: JSON Forms rules
- Source URL: https://jsonforms.io/docs/uischema/rules
- Fetched: 2026-09-23
- Status: ok
- Parent: source 20

## Summary

Rules add dynamic behaviour to a UI schema element. Any element can carry a `rule` with an `effect` and a `condition`. Effects are HIDE, SHOW, ENABLE, and DISABLE. The condition has a `scope` (a JSON Pointer into the form data) and a `schema` that is a normal JSON Schema. If the data at the scope validates against that schema, the effect runs. If the scope is undefined, validation succeeds unless `failWhenUndefined` is true, in which case the condition fails. That default matters: a missing value can accidentally hide or show a field.

Examples on the page: hide when a counter is exactly 10 (`const`); hide when a name is one of an enum; show when a value is not 10 (`not`); show when a number is at least 1 and less than 10; show only when the property exists and is at least 1 (`failWhenUndefined`); and a condition over the whole form, requiring two properties and an array that contains a given string. The page’s point is that rule logic is JSON Schema, not a second expression language.

## Key facts

- Effects: HIDE, SHOW, ENABLE, DISABLE.
- Condition: scope plus a JSON Schema fragment.
- Undefined scope validates as success unless `failWhenUndefined: true`.
- Schema features used in examples: const, enum, not, minimum, exclusiveMaximum, required, contains.
- Rules attach to any UI schema element, not only controls.

## How it works

On each data change, the form evaluates every rule by running the condition schema against the scoped value. A match applies the effect to that element only. Authors do not write JavaScript in the UI schema. Anything JSON Schema can express can be a condition, including cross-field checks when the scope is the whole object.

## Implications for jsonapp.com / ui121

Visibility and enabled state should be data, using the same schema language as validation. ui121 can adopt this instead of custom expression strings. Document the undefined-scope default; it is a sharp edge for generated forms. AI-written rules stay auditable because they are schema, which fits the JSON Schema note (source 21).
