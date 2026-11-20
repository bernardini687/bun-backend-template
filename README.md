# bun-backend-template

![bun](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fbernardini687%2Fbun-backend-template%2Fmain%2Fpackage.json&query=%24.packageManager&label=&logo=bun&color=black)

`> project blurb goes here <`

> 👆 Yes, it's a nod to a completely unrelated album from 2012. You can [listen to it on Spotify](https://open.spotify.com/album/5cpwmGEav9fYtQi33w0YTj) while the agent works, though!

## Commands

- `bun dev`: runs whatever you're building.
- `bun run check`: format checks, lints, type checks, scans for unused code, tests. CI does it.
- `bun run fix`: lets the agent save some tokens.

## Tooling

Agents write most of the code, so the checks are strict and fast. Cheap feedback steers them.

- **Bun**: TypeScript runtime, package manager, test runner and formatter in one binary.
- **oxlint**: lints with strict, type-aware rules and reports TypeScript errors (via
  `oxlint-tsgolint`), so no ESLint and no `tsc`.
- **knip**: catches unused files, exports and dependencies.
- **Dependabot**: one grouped PR a month for dependencies, one for GitHub Actions.

## Starting from this template

- `bun create bernardini687/bun-backend-template <dir>`

## Keep the oven warm 🍞

- `bun upgrade`, bump `packageManager`, `bun update`.
