---
name: conventional-commit-message
description: Generate or validate Conventional Commit messages for the restaurant project from the current branch and git diff. Use for commit messages, commit titles, or choosing a commit type/scope.
---

# Conventional Commit Message

## Purpose

Return the best Conventional Commit message based on the actual git changes. Use the first issue id from the branch name as the scope when present.

This repository does not enforce commitlint or husky hooks; treat these rules as the preferred format for new commits.

## Required Format

Use Conventional Commits v1.0.0:

`<type>[optional scope][optional !]: <description>`

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

Do not use legacy prefixes from older commits such as `feature:`, `enhancement:`, or `bugfix:`.

## Required Workflow

1. Inspect the current branch name and extract the first issue id: a numeric token that appears as its own branch segment, for example `68` in `feat/68-add-loader`, `62` in `integration/62/events-endpoint`, or `43` in `feature/43/complete-order`.
2. Inspect changes in this order:
   - staged diff: `git diff --cached`
   - unstaged diff: `git diff`
   - latest commit only when the user explicitly asks for it
3. Choose the type from the dominant intent:
   - feature -> `feat`
   - bug fix -> `fix`
   - behavior-preserving restructuring or js/ts migration -> `refactor`
   - docs only -> `docs`
   - tests only -> `test`
   - tooling/config/dependency/build maintenance -> `chore`, `build`, or `ci`
   - formatting-only cleanup -> `style`
4. Write one lower-case, imperative, present-tense subject that reflects the actual diff.
5. Keep the header at `<= 100` characters; prefer `<= 72` when practical.
6. Return a single-line header unless the user asks for a full message or the change is breaking.

## Worktree Safety

This skill is read-only by default. Generating or validating a commit message must not mutate the worktree.

Rules:

- Do not discard, restore, reset, clean, stash, stage, unstage, delete, or rewrite files while generating a commit message.
- Do not run destructive cleanup commands such as `git restore`, `git checkout --`, `git reset`, `git clean`, or equivalent IDE discard actions.
- Treat all existing staged, unstaged, and untracked changes as user-owned or tool-owned work that must be preserved.
- If staged changes exist, base the message on the staged diff only and mention nothing else unless the user asks about unstaged work.
- If no staged changes exist, base the message on the unstaged diff.
- If the diff contains unrelated changes from multiple tools or tasks, still do not modify files. Return either the best message for the dominant staged diff or 2-3 compliant options for the visible change groups.
- If the user wants a message for only part of a mixed worktree, ask them to stage the intended files or specify the target files; do not stage or discard anything yourself unless explicitly asked.

## Scope Rule

- If a branch issue id exists, use it as the scope, for example `feat(68): add loader` or `fix(60): prevent product page error without image`.
- If no issue id exists, put the commit's key theme in `()` — the main topic the change is about, not where files live.
- Choose the theme from the dominant intent of the diff, for example `commitlint`, `store`, `login`, `cart`, `menu`, or `reservations`.
- Do not default to a folder or layer name such as `agents` when the theme is more specific, for example use `docs(commitlint)` for a commitlint skill and config, not `docs(agents)`.
- Omit scope only when the type alone is clear enough, for example broad tooling setup with no single theme.
- Do not replace a branch issue id with a theme scope.

## Restaurant Change Patterns

- JavaScript to TypeScript migrations: `refactor(<theme>): migrate <area> to typescript`, for example `refactor(store): migrate redux slices to typescript`
- Redux store or slice work: theme `store` or the slice name
- Shared package or API contract updates: `build` or `chore`
- Commitlint, commit message skills, or commit hooks: theme `commitlint`, for example `docs(commitlint): add conventional commit message skill and commitlint config`
- Agent workflow or code-style docs: theme `agents` or the specific topic, for example `docs(workflow): add agent workflow guide`
- ESLint, TypeScript config, or Vite tooling: theme `eslint`, `typescript`, or `vite`, or omit scope for broad setup

## Output Contract

- Default: output only the final commit message candidate.
- If the diff supports multiple plausible types, return `2-3` short compliant options with a brief difference note.
- If there are no relevant changes, ask what to base the message on.

## Reference

Read `references/rules-and-examples.md` only when you need extended subject rules, breaking-change formatting, or examples.
