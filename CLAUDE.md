# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm run dev` - Start the development server at localhost:4321
- `npm run dev:network` - Start dev server accessible on local network
- `npm run build` - Type check and build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run preview:network` - Preview production build on network

### Code Quality
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run astro check` - Type check Astro files
- `npm run sync` - Generate TypeScript types for Astro modules

## Architecture Overview

This is an Astro Nano portfolio and blog site built with:
- **Astro** - Static site generator framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety throughout
- **MDX** - Markdown with component support

### Key Directories

- `src/content/` - Content collections for blog posts
  - Each collection has its own schema defined in `src/content/config.ts`
  - Blog posts support drafts and MDX components
  
- `src/pages/` - File-based routing
  - Dynamic routes use [...slug].astro pattern
  - RSS feed and sitemap generated automatically

- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layout templates
- `src/consts.ts` - Site configuration and metadata

### Content Collections

Three main collections defined with Zod schemas:
1. **blog** - Articles with title, description, date, and optional draft status

### Styling Conventions
- Uses Tailwind CSS with typography plugin
- Dark/light theme support via CSS classes
- Custom fonts loaded from public/fonts/
- ESLint enforces double quotes and semicolons

### Path Aliases
- `@*` maps to `./src/*` for clean imports (e.g., `@components/Header.astro`)

### Site Configuration
Main configuration in `src/consts.ts`:
- SITE object controls homepage content limits
- Metadata for each page section
- Social links configuration