# Branch PR Scope (reused branches)

When the same branch name was used for an earlier PR that is already merged, do not draft from the full `git log main..HEAD` range. Older commits and merged work can pollute the title and Summary.

## Required commands

Before drafting, run:

```sh
git branch --show-current
git log main..HEAD --oneline
git diff main...HEAD --stat
git diff main...HEAD
```

Use these outputs as the primary sources for commit subjects and diff validation.

## Rules

- Default scope is all commits on `main..HEAD` plus the `main...HEAD` diff.
- If you know the branch already had a merged PR, draft only from commits and diff after that merge.
- If reused-branch boundaries are unclear, ask the user which commits or changes belong in this PR instead of guessing.
- Never summarize already-merged work in the new PR title or Summary.
- Branch name still supplies `type`, issue id, and theme scope; title and Summary bullets come from the scoped commits and diff only.
- Thread context applies only to work that matches the scoped diff and commits.

## Reused-branch heuristics

Check whether the branch may have prior merged work:

```sh
gh pr list --head "$(git branch --show-current)" --state merged --json number,mergedAt
```

If a merged PR exists and the full ahead log looks too broad:

1. identify the merge commit on `main` for that PR
2. use commits after that point, for example `git log <merge-commit>..HEAD --oneline`
3. use the matching diff, for example `git diff <merge-commit>...HEAD`

If `gh` is unavailable or the boundary is still unclear, ask the user.

## Examples

- Branch has 5 ahead commits, 4 already on `main` after squash merge, 1 new commit -> title and Summary describe only the new commit and scoped diff.
- Branch has merged PR #120 and only file changes with no new commits -> Summary from scoped diff only.
- Fresh branch with no prior merged PR -> use the full `main..HEAD` log and `main...HEAD` diff.
