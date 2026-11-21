# Configuration

Environment variables are read in `src/lib/env.ts` and validated with zod. Vite only exposes variables prefixed with `VITE_` to the browser, and everything exposed is public: never put secrets in them.

Add a variable in three places: the zod schema, `src/vite-env.d.ts`, and `.env.example`. Copy `.env.example` to `.env.local` for local work.
