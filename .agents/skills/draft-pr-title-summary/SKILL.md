---
name: draft-pr-title-summary
description: Generate restaurant PR titles and Summary-only PR descriptions from branch name, commit history, thread context, and diff. Use for PR metadata or `gh pr create` wording.
---

# Draft PR Title Summary

## Purpose

Use this skill to produce a PR-ready title and a Summary-only PR description for the restaurant project.

PR titles use the same Conventional Commits header style as commits in this repo. Reuse type, scope, and subject rules from `.agents/skills/conventional-commit-message/SKILL.md`. This skill adds branch-level aggregation and the Summary body format.

Default sources of truth:

- branch name for `type`, issue id, and theme scope
- commits on the branch versus `main` for change coverage
- current thread context for user intent and implementation decisions
- branch diff versus `main` for validation and gap-filling when commit subjects are too vague

If the same branch name was used for an earlier merged PR, do not summarize already-merged work. See `references/branch-pr-scope.md`.

## Output

Return:

1. one PR title
2. one PR body that follows the Summary-only contract below

Unless the user asks otherwise, do not return long analysis.

## PR Body Contract

The PR body must always contain exactly one section:

```md
## Summary

- <human-readable change summary grounded in context>
- <human-readable change summary grounded in context>
```

Rules:

- Use `## Summary` as the only heading.
- Use `2-4` unordered list bullets under the heading. Do not use paragraphs for the final PR body.
- Base the bullets on available context: branch name, branch commit messages, current thread context, and diff validation when available.
- Write for another engineer reviewing the PR. The summary should explain what changed and why it matters for review, not mirror raw commit text.
- Do not add any other section or heading. In particular, never add `Test Plan`, `Tests`, `Validation`, `Notes`, `Checklist`, command output, or `npm test`/lint/build instructions unless the user explicitly asks to replace the body format.
- If prior context, a template, or the model drafts extra sections, rewrite the body into this required Summary-only format before returning it.

## Required Workflow

1. Detect the current branch name.
2. Collect branch context with read-only git commands against base branch `main`:

```sh
git branch --show-current
git log main..HEAD --oneline
git diff main...HEAD --stat
git diff main...HEAD
```

3. If `git log main..HEAD` is empty and `git diff main...HEAD` shows no changes, stop and report that the branch has no new work versus `main`.
4. Infer the PR `type` from branch tokens first, then fall back to commit prefixes, then diff intent.
5. Extract the first issue id from the branch name when present; otherwise choose a theme scope from branch intent or the dominant diff.
6. Build one branch-level title that summarizes the whole branch, not a single commit.
7. Use commit subjects and the diff to validate coverage and fill gaps when subjects are vague.
8. Build the PR body from commits, matching thread context, and diff validation using the PR Body Contract.
9. Keep the final title at or below `256` characters; prefer `<= 100`. Shorten the description first; preserve `type` and scope.

## Required Title Format

Use Conventional Commits v1.0.0:

`<type>[(<scope>)]: <branch-level change summary>`

Examples:

- `feat(68): add loader`
- `feat(62): integrate events endpoint`
- `feat(auth): wire login, registration, profile, and session bootstrap`
- `refactor(store): migrate redux slices to typescript`
- `fix(profile): correct personal data form validation`

Rules:

- Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Scope priority:
  1. first numeric issue id from its own branch segment, for example `68` in `feat/68-add-loader`
  2. otherwise a theme scope such as `auth`, `store`, `menu`, `cart`, or `events`
  3. omit scope only when the type alone is clear enough
- Description: lowercase, imperative, present tense
- Do not use legacy prefixes such as `feature:`, `enhancement:`, or `bugfix:`
- Do not use title-case, ticket prefixes, or multi-segment scope chains

## Type Inference Rules

Infer `type` from the first matching branch token when possible:

- `fix`, `bugfix`, `hotfix`, `bug` -> `fix`
- `feat`, `feature`, `enhancement`, `integration` -> `feat`
- `refactor` -> `refactor`
- `style` -> `style`
- `chore`, `build`, `ci`, `release` -> `chore`
- `perf`, `performance` -> `perf`
- `docs`, `doc` -> `docs`
- `test`, `tests` -> `test`

If the branch name does not clearly identify a type, fall back to the dominant commit prefix or the dominant branch intent from the diff.

## Scope Rules

Reuse the scope rules from `.agents/skills/conventional-commit-message/SKILL.md`.

- If a branch issue id exists, use it as the scope.
- If no issue id exists, use the branch's key theme, not a folder path by default.
- Do not replace a branch issue id with a theme scope.
- Choose the theme from branch intent or the dominant diff, for example `auth`, `store`, `login`, `cart`, `menu`, or `reservations`.

## Restaurant Change Patterns

- Auth wiring across login, registration, profile, and session bootstrap: theme `auth`
- JavaScript to TypeScript migrations: `refactor(<theme>): migrate <area> to typescript`
- Redux store or slice work: theme `store` or the slice name
- Shared package or API contract updates: `build` or `chore`
- Commitlint, commit message skills, or commit hooks: theme `commitlint`
- Agent workflow or code-style docs: theme `agents` or the specific topic
- ESLint, TypeScript config, or Vite tooling: theme `eslint`, `typescript`, or `vite`, or omit scope for broad setup

## Worktree Safety

This skill is read-only by default. Drafting a PR title or body must not mutate the worktree.

Rules:

- Do not discard, restore, reset, clean, stash, stage, unstage, delete, or rewrite files while drafting.
- Do not run destructive cleanup commands such as `git restore`, `git reset`, or `git clean`.
- Treat all existing staged, unstaged, and untracked changes as user-owned work that must be preserved.

## Quality Rules

- Summarize the whole branch, not one commit or the branch slug alone.
- Use commit subjects as the primary source for title and Summary wording.
- Use the diff to validate wording and cover major change areas that commit subjects miss.
- Use thread context to capture implementation intent or review-relevant decisions that commit subjects do not explain.
- Do not invent issue ids, scopes, or change areas.
- Keep wording specific, readable, and suitable for GitHub PR titles.
- Keep the PR body human-readable and review-oriented.
- Never include test plans, validation commands, checklists, or extra Markdown sections in the PR body unless the user explicitly requests a different body format.

## Ambiguity Handling

If the title could reasonably go in more than one direction:

- provide `2-3` compliant options
- keep all options grounded in the branch name, commit history, and diff
- briefly note what differs between the options

If the branch has no usable commits yet, say so and ask whether to draft from the diff only.

## Reference

Use `references/title-conventions.md` for format rules, scope details, and additional examples.
Use `references/branch-pr-scope.md` for reused-branch / post-merge scoping rules.
