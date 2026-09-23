# Jasonette — designing a functional programming language in JSON

- Title: Designing a Functional Programming Language in JSON
- Source URL: http://blog.jasonette.com/2017/02/15/functional-programming-in-json/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 05 (in-depth tutorials list)
- Note: the live blog redirects to a lander. This paraphrase is from the 2018 Wayback capture of the same URL.

## Summary

Ethan (Jasonette), 15 February 2017, argues that a JSON app needs functions, not only views. He had already written the view side. This post is the controller. A function, in the JavaScript sense he uses, has a name, arguments, and callbacks so asynchronous work (network, taps) can resume later. Jasonette encodes that as an action with four fields: `type` (which native function), `options` (arguments), `success`, and `error`. An alert is just a type plus a title and description. A fetch is a network request whose success action renders a template. Template expressions (`{{ }}`) run in a built-in JavaScript engine before the request goes out, so a field can be computed on device (he shows hashing a cached id) and then sent.

The second half is a change he calls new in that release. Older actions did not wait. Each one fired the next and died, passing a variable named `$jason` down the chain. That is message dispatch, not a call stack. You could not write a subroutine that returns to its caller, so long JSON apps could not be modular or recursive. `$lambda` is an action whose only job is to invoke a named action, wait, and then run success or error with the return value. `$return.success` and `$return.error` send control back. Returned fields show up on the caller as `$jason`. A shorter `trigger` form names the action without spelling out `$lambda`. He says two more posts will place this in a larger modularity story.

## Key facts

- Date on the capture: 15 February 2017. Author voice is the Jasonette founder.
- Action shape: `type`, `options`, `success`, `error`.
- Evaluation: `{{ }}` JavaScript before the native call.
- New primitives in that release: `$lambda`, `$return.success`, `$return.error`, and `trigger` as shorthand.
- Return channel: the caller reads `$jason`.
- Problem named: thousands of lines of JSON with no subroutines.

## How it works

Register named actions. Call one with `$lambda` or `trigger`, passing an options object. The callee finishes with `$return.success` and an options payload, or `$return.error`. The caller’s success action then runs and may use `$jason` from that payload. Network and render stay ordinary actions. The stack is what lets one JSON function call another and continue, instead of only chaining fire-and-forget steps.

## Implications for jsonapp.com / ui121

This is the hard part of “an app is a JSON document”: not the screen, the control flow. A viewer that only lays out components cannot express “ask the network, then branch.” Jasonette’s answer was a tiny functional core inside the markup. ui121’s JSON UI can stay simpler if the task, not the document, owns the wait for a human or an API. Where the document itself must sequence steps, the lesson is named actions with a return value, not an ever-longer callback chain.
