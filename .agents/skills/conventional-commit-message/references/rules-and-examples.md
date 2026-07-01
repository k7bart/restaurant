# Conventional Commit Rules And Examples

## Contents

- Repository Rules
- Subject Writing Rules
- Multi-line Commit Rules
- Examples

## Repository Rules

- Subject must not be `upper-case`, `pascal-case`, or `start-case`.
- Prefer lower-case, imperative, present-tense subjects.
- Do not end the subject with a period.
- The message must reflect the actual diff, not guessed intent.
- This repository has no commitlint hook; older commits may use non-standard prefixes or title case. New messages should follow the rules below.

## Subject Writing Rules

- Start with a verb such as `add`, `fix`, `update`, `refactor`, `remove`, `rename`, `prevent`, `align`, `simplify`, `migrate`, or `correct`.
- Focus on the primary change, not every touched file.
- Avoid vague subjects such as `update code`, `fix issue`, `wip`, `changes`, `refactor`, or `misc updates`.
- Avoid file lists in the header.
- Avoid issue prefixes in the subject when the issue id is already used as the scope.

Good:

- `feat(68): add loader`
- `fix(60): prevent product page error without image`
- `refactor(store): migrate redux slices to typescript`
- `refactor(cart): migrate cart page to typescript`
- `docs(commitlint): add conventional commit message skill and commitlint config`
- `docs(agents): add agent workflow and code style guides`
- `chore: add typescript and eslint tooling`

Bad:

- `feat: 68 Add Loader`
- `Cart Page to ts`
- `bugfix #60: error in product page when there is no product image`
- `feature: call me popup (#73)`
- `chore(68): Updated Some Files.`

## Multi-line Commit Rules

Add a body only when:

- the user explicitly asks for a full commit message;
- extra context is needed to explain why;
- the change is breaking.

If the change is breaking:

1. Add `!` before the colon.
2. Add a `BREAKING CHANGE:` footer when returning a full multi-line commit message.

Body rules:

- leave one blank line after the header;
- explain why or important context, not a file-by-file diff dump.

Footer rules:

- leave one blank line between body and footer block;
- use `BREAKING CHANGE:` in uppercase for breaking changes;
- other footers may use standard trailer format such as `Refs: #60`.

## Examples

Input conditions:

- branch: `feat/68-add-loader`
- diff: adds a loading indicator to async page content

Output:

- `feat(68): add loader`

Input conditions:

- branch: `integration/62/events-endpoint`
- diff: wires the events API endpoint into the frontend

Output:

- `feat(62): integrate events endpoint`

Input conditions:

- branch: `typescript`
- diff: converts `src/store/slices/userSlice.js` and related store files to TypeScript

Output:

- `refactor(store): migrate redux slices to typescript`

Input conditions:

- branch: `bugfix/profile/personal-data`
- diff: fixes validation on the profile personal data form

Output:

- `fix(profile): correct personal data form validation`

Input conditions:

- branch: `typescript`
- diff: adds a conventional commit message skill and `commitlint.config.js`

Output:

- `docs(commitlint): add conventional commit message skill and commitlint config`

Input conditions:

- branch: `typescript`
- diff: adds `.agents/` docs, `AGENTS.md`, or `CLAUDE.md` for agent workflow and code style

Output:

- `docs(agents): add agent workflow and code style guides`

Input conditions:

- branch: `typescript`
- diff: only updates ESLint and TypeScript config files

Output:

- `chore(eslint): add typescript lint configuration`
