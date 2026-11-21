# React Essential

A React + Vite starter with the essentials already set up: file-based routing, server-state handling, Base UI components, validated env, tests, lint, format, CI and an agent guide.

## Stack

- React 19, Vite and TypeScript (strict), Tailwind CSS v4
- TanStack Router (file routes) and TanStack Query
- [Base UI](https://base-ui.com) primitives, shadcn-style
- zod for env and API data
- vitest and Testing Library
- oxlint (type-aware) and oxfmt
- pnpm, husky, GitHub Actions, Docker (nginx)

## Run

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Scripts

```bash
pnpm typecheck       # tsc --noEmit
pnpm lint            # oxlint, type-aware, warnings denied
pnpm format:check    # oxfmt check
pnpm test            # vitest
pnpm build           # production build into dist/
pnpm gen:feature x   # scaffold src/features/x
pnpm run ci          # the gate CI runs (non-mutating)
pnpm build:prepare   # fix lint/format, then the full gate
```

## Structure

```text
src/
  routes/       TanStack Router file routes (routeTree.gen.ts is generated)
  features/     one folder per product area (public API in index.ts)
  components/   shared UI; components/ui = Base UI primitives
  providers/    theme, query client, document head
  hooks/ lib/   shared hooks, env, typed API client, helpers
  styles/       Tailwind v4 theme tokens
tests/          vitest setup
docs/           architecture, configuration, tooling
```

## Working with AI agents

`AGENTS.md` is the guide agents follow (`CLAUDE.md` points to it). `.claude/` has permissions, a formatter hook, a reviewer agent and skills.

## License

MIT.
