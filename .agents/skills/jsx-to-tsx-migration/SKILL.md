---
name: jsx-to-tsx-migration
description: Guide a repository-specific migration from React JSX components to TypeScript TSX components, with folder rename, typed props, and import updates.
---

# JSX-to-TSX Migration

## Purpose

Help the agent migrate a single React component from `.jsx` to `.tsx` while preserving repository conventions and avoiding unrelated edits.

This skill is intended for workspace-scoped migration work in the restaurant app, based on the Text component example.

## Required Workflow

1. Identify the target component folder and file.
   - Confirm the component currently lives in a `.jsx` file, often with `prop-types` and `defaultProps`.
   - Confirm the target folder may require normalization, for example `Text` → `text`.

2. Rename the component folder and source file.
   - Rename `src/components/Text` to `src/components/text` when appropriate.
   - For repositories using lowercase component directories, normalize folder names from PascalCase to lowercase, for example `Popup` → `popup`.
   - Rename `Text.jsx` to `Text.tsx`.

3. Convert the component source.
   - Replace `import classNames from "classnames";` with `import cn from "classnames";` if the repo prefers the `cn` alias.
   - Remove `Component.defaultProps = { ... }`.
   - Add explicit React type imports such as `ReactNode` and declare a props type alias named `Props` when the component actually receives props.
   - If the component has no props, do not add an empty `Props` alias; keep the signature simple.
   - Correct props names and any typos in the component and call sites during migration.
   - Use typed unions for props that map to CSS module class keys, for example `align`, `color`, `fontWeight`, `size`.
   - Provide default values in the function signature.
   - Preserve the CSS module import and apply classes with `cn(...)`.

4. Update all imports of the migrated component.
   - Search the repo for the old import path, such as `Text/Text`.
   - Replace it with the new lowercase path, such as `text/Text`.
   - Keep the original relative path depth.

5. Validate the migration.
   - Run a production build: `npm run build` or `vite build`.
   - Confirm the migrated component file compiles and the new imports resolve.
   - If the build fails for unrelated existing code, isolate the component change and verify the file itself.

## Quality Criteria

- The migrated component file is `.tsx`.
- The file uses `cn` for class composition and no longer imports `PropTypes`.
- The component uses a typed props alias named `Props` and defaults via destructuring when props exist.
- If the component has no props, do not declare an empty `Props` alias.
- No old import paths remain pointing at `Text/Text` or other renamed folders.
- The build passes for the affected component and related imports.
- If a failing build reveals unrelated repository issues, fix only the exact incorrect path or import causing the failure.

## Output Contract

- For a single migration task, return the changed file path(s) and the exact edits made.
- If the user asks for implementation, make the migration directly and then report the build result.
- If there are multiple likely component targets, ask the user to confirm the specific component path.

## Notes

- This skill is not a generic JSX-to-TSX converter for all JS in the repo; it is tuned to React component migration workflows.
- Prefer minimal, targeted edits and avoid broad refactors outside the component and its direct import sites.
