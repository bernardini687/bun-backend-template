# bun-backend-template

One line on what this project does.

## Commands

- `bun dev`: run `src/index.ts`.
- `bun run check`: format check, lint, type check, unused-code scan and tests. CI runs the same.

## Tooling

Agents write most of the code, so the checks are strict and fast: cheap feedback steers them.

- **Bun**: runtime, package manager, test runner and formatter in one binary. Runs TypeScript
  directly, so there is no build step, and formats with Prettier-compatible defaults, so there is
  no Prettier.
- **oxlint**: lints with strict, type-aware rules and reports TypeScript errors (via
  `oxlint-tsgolint`), so there is no ESLint and no `tsc`.
- **knip**: catches unused files, exports and dependencies, which refactors leave behind.
- **Dependabot**: one grouped PR a month for dependencies, one for GitHub Actions.

## Starting from this template

`bun create bernardini687/bun-backend-template <dir>` names the package after `<dir>`, installs,
commits and runs `bun update`. Then replace `src/` and `test/` and rewrite this README. To upgrade
Bun: `bun upgrade`, bump `packageManager`, `bun update`.
