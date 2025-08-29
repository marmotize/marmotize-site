# AGENTS.md

This is a blog built using ASTRO, using the theme: https://github.com/markhorn-dev/astro-nano and deployed using github actions to github pages with a custom domain.

To try out the changes, launch the app using npm run dev and take screenshots using playwright of localhost:4321 after you navigate to the page you are testing.

**Commands:**
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Type check and build (required before deploy)
- `npm run lint` - Run ESLint (must pass before commits)
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run astro check` - Type check Astro files

**Architecture:**
- Astro static site with TypeScript, Tailwind CSS, MDX
- File-based routing in `src/pages/`
- Content collections in `src/content/` with Zod schemas
- Path alias: `@*` maps to `./src/*`

**Code Style:**
- ESLint enforces double quotes and semicolons
- Use TypeScript strict mode with nullChecks
- Import components with `@components/` alias
- Content collections require schema validation
- Use clsx/tailwind-merge for conditional classes
- Blog posts support `draft: true` to hide from production

**Key Files:**
- `src/consts.ts` - Site configuration
- `src/content/config.ts` - Content collection schemas
- Blog posts in `src/content/blog/*/index.md`
