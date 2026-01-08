# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the Next.js App Router routes and layouts (e.g., `app/page.tsx`, `app/about/`, `app/read/`, `app/submit/`).
- `app/api/` contains API route handlers.
- `app/globals.css` contains global styles.
- `public/` stores static assets.
- Root config files include `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev`: starts the local dev server at `http://localhost:3000`.
- `npm run build`: creates a production build.
- `npm run start`: runs the production build locally.
- `npm run lint`: runs ESLint with the Next.js config.

## Coding Style & Naming Conventions
- Use TypeScript/TSX for app code; keep to 2-space indentation and double quotes as in existing files (see `app/page.tsx`).
- Route folders are lowercase and map to URLs (e.g., `app/read` -> `/read`).
- React components use PascalCase (e.g., `HomePage`).
- Prefer module-local styling via class names defined in `app/globals.css` unless a new file is warranted.

## Testing Guidelines
- No test runner is configured yet. If you add tests, update `package.json` with scripts and document the framework here.
- Keep test file names explicit (e.g., `*.test.tsx`) and colocate near the feature when feasible.

## Commit & Pull Request Guidelines
- Git history only includes the initial scaffold commit, so no formal commit convention is established.
- Use short, imperative commit summaries and include context in the body when changes are non-trivial.
- PRs should include a clear description, linked issues if applicable, and screenshots for UI changes.

## Configuration & Security Notes
- Use `.env.local` for secrets or environment-specific values; do not commit it.
- Document any new required environment variables in this file.
