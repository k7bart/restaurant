## Code Style And Structure

Use this file for `src/*` TypeScript, React, helper, style, and structure changes.

## Code Style

- Prefer readable code over short code.
- Do not add any comments in the code.
- Use guard clauses instead of if statements.
- Remove return statements and make functions one-line where possible.

## TypeScript Contracts

- Use `type` for component props, `&` combinations, unions, utility-type aliases, and primitive aliases.
- Name component props `Props` and define them in the same component file without export.
- Do not prefix type aliases with `T`.
- Use `interface` only for data models and API contracts such as requests, responses, DTOs, and domain entities.
- Do not prefix interfaces with `I`.
- Don't: define model/API interfaces inside component files.
- Don't: add a new interface before checking for an existing reusable contract.
- Do: check `src/types` first, then reuse existing contracts with `extends`, `Pick`, `Omit`, indexed access types, shared sub-types, or utility types before adding new fields.
- Keep raw API contracts separate from normalized UI/form contracts when needed, while reusing shared field groups.
- Avoid type assertions like `something as unknown as Type`.
- Do not add redundant return type annotations when TypeScript can infer the type.
- Use types from "@k7bart/restaurant-shared-types" instead of defining local types if they can be reused in also in BE app.
- If there is only one prop in props, do not declare type or interface, make it inline.

## File And Folder Structure

- Folder names use `kebab-case`.
- React components use `PascalCase.tsx`.
- Pages are `PascalCase` and usually end with `Page`.
- Hooks use `useX` in `camelCase` and live under `src/hooks`.
- Helpers are `PascalCase` files under `src/helpers`.
- Component-scoped styles use co-located `ComponentName.module.scss` files imported directly in the component (`import styles from "./ComponentName.module.scss"`).
- Put static layout and visual styles in module files with camelCase class names; import `src/styles/variables.scss` for shared tokens; use `classnames` for conditional or combined classes. Keep global resets, typography, third-party overrides, and cross-page layout classes in `src/styles/index.scss`.

## Helper Placement

- Keep component and hook files focused on wiring, rendering, and feature flow.
- Don't: leave reusable constants, normalization, data shaping, or pure helper logic inline in component/hook files.
- Do: move reusable pure logic into `src/helpers/*`.
- Don't: put pure helper logic in `src/hooks/*`.
- Do: use `src/hooks/*` only when shared behavior is stateful or effect-driven.
- Don't: create a new helper file before checking existing helper ownership.
- Do: extend an appropriate existing helper file when one can reasonably own the logic.
- Don't: define reusable helper methods above component or hook declarations.
- Do: keep component and hook files focused on wiring, rendering, and feature flow.
- Don't: spread closely related helper logic across multiple tiny files.
- Do: keep related helper logic together when one helper file can reasonably own it.

## Readability And Control Flow

- Use clear names for variables, functions, classes, and extracted constants. Avoid ambiguous names like `data`, `item`, `value`, `temp`, or `handle` unless the scope is trivially obvious.
- Don't: add, change, extend, or replace source comments in AI-assisted edits—including `//`, `/* */`, `/** */`/JSDoc, explanatory file or section headers, trailing inline comments, or `TODO`/`FIXME`/`NOTE` (or similar) introduced or rewritten by the agent.
- Don't: put workaround, API constraint, or business-rule explanations into code comments from an agent; use the PR description or chat instead.
- Don't: restate the code in comments or add redundant JSDoc when editing without an agent.
- Don't: extract trivial one-line helpers for direct null checks, string coercion, optional chaining, property access, or single-expression aliases when inline code is clearer.
- Don't: extract single-use boolean predicate functions for plain conditions, for example `const isX = (value) => flag && value > currentValue;`. Put the condition directly in the `if` instead.
- Do: extract a helper only when it is reused, names a real domain operation, hides meaningful branching/transformation, or is needed for a stable reference in React.
- Do: use a local boolean variable for a complex condition only when it improves readability in the same scope; don't turn simple condition aliases into functions.
- Don't: add new `switch/case` or long `if/else` chains for simple static dispatch maps.
- Do: use object literal lookup tables for key-to-handler and key-to-value mappings.
- Don't: use ternary operators in new or touched project code.
- Do: use explicit `if`/`return`, named variables, or extracted helpers.
- Don't: embed branching, async work, multiple transformations, or multiple state updates directly in JSX callbacks or expressions.
- Do: keep JSX declarative by extracting that logic into named handlers or helpers.

## React

- Don't: add `useMemo` or `useCallback` by default.
- Do: use `useMemo` only for genuinely expensive computations and `useCallback` only when passing a function through props to a memoized child component or in a dependency array.
- Prefer removing unnecessary `useMemo`/`useCallback`; they only help between re-renders and slow initial render.
- If preventing re-renders, use `React.memo` and ensure all props passed to the memoized child are stable/memoized; otherwise callbacks/values memoization is pointless.
- Use `useMemo` to memoize heavy render subtrees, not trivial JS operations (e.g., small sorts/maps/object creation).
- Do not memoize values or callbacks that end up as DOM props or props to non-memoized components.
- Add memoization only for proven bottlenecks.
- Do: use useEffect when a out-of-React action is needed, keep `useEffect` dependency arrays minimal, list only state values, props, and computed values that should trigger the effect.

## Async

- Don't: use `.then()` / `.catch()` chains in app code.
- Do: use `async/await` consistently for async flows, handlers, and callbacks.
- Use `try/catch` around awaited calls when local error handling is required.
- Don't: suppress promise rejections with trailing no-op `.catch()` handlers or the `void` operator.
- Do: await promises and handle errors where local error handling is required.

## Src Folder Map
