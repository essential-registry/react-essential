---
name: new-feature
description: Scaffold and wire a new feature folder in src/features.
---

Run `pnpm gen:feature <name>`. Then: define zod schemas in `schemas.ts`, export the public API from `index.ts`, add the route in `src/app`, add tests next to the code, run `pnpm run build:prepare`.
