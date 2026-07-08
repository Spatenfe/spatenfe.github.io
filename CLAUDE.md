# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (astro dev)
npm run build     # production build to dist/
npm run preview   # serve the built dist/ output locally
```

There is no test suite and no lint script configured. Verify changes by running `npm run build` (Astro's type-checked build will fail on content-schema or TS errors) and by checking the page in `npm run dev`/`npm run preview`.

To build with a specific GitHub Pages base path locally:

```bash
SITE=https://your-username.github.io BASE=/your-repo/ npm run build
```

## Architecture

Astro + TypeScript + Tailwind portfolio site, statically generated and deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

### Dual-mode GitHub Pages base path

The site must work both as a user site (`<user>.github.io`, base `/`) and a project site (`<user>.github.io/<repo>/`, base `/<repo>/`). `astro.config.mjs` derives `base`/`site` from `GITHUB_REPOSITORY`/`GITHUB_REPOSITORY_OWNER` env vars (or `BASE`/`SITE` overrides), and:

- All internal links/asset paths in `.astro` files must go through `withBase()` (`src/utils/withBase.ts`) or `import.meta.env.BASE_URL` — never hardcode a root-relative path in a component.
- Markdown project write-ups reference images with plain root-relative paths (e.g. `/images/foo.png`) since markdown content can't call `withBase()`. A custom remark plugin (`remarkBaseUrls` in `astro.config.mjs`) rewrites these at build time to the configured base.

### Content model

Projects are an Astro content collection (`src/content/projects/*.md`), schema defined in `src/content/config.ts`. Key fields: `featured`, `category` (`research` | `project`) drive which homepage grid a project appears in; `image`/`bannerImage`/`imageFit` control card vs. detail-page rendering. `src/pages/projects/[slug].astro` renders each entry; `src/pages/projects/index.astro` lists all with a client-side tag filter (`TagFilter.astro`).

Non-project content (bio, experience, education, tech stack, news) lives as plain TS data modules in `src/data/*.ts` (`site.ts`, `experience.ts`, `education.ts`, `tech.ts`, `profile.ts`, `news.ts`), not content collections — edit these directly rather than adding schemas.

### Homepage structure (`src/pages/index.astro`)

Single long scrolling page assembled from sections with stable `id`s (`news`, `research`, `projects`, `experience`, `education`, `personal`, `stack`) used both for `Navbar` anchor links and for `ScrollSpySidebar`. Experience/Education and Personal/Tech Stack are laid out as side-by-side column pairs within one section each (not separate sections), so the scroll-spy sidebar groups each pair into a single nav entry (`ScrollSpySidebar` items take an `ids: string[]`, not a single `id`, so one entry can track multiple section elements at once and highlight when any of them is in view).

`ScrollSpySidebar.astro` is fixed-position and only shown at the `xl` (1280px) breakpoint. It reserves real layout space via the `.content-with-toc` class (defined in `src/styles/global.css`, applied to `<main>`) rather than floating in the container's centering margin — this class is deliberately declared *after* `.container-page` in `global.css` so its `padding-left` wins the cascade at the same breakpoint; keep that ordering if editing either class.

### Styling

Tailwind config (`tailwind.config.cjs`) defines the color palette (`bg`, `surface`, `border`, `ink`, `muted`, `accent`) and fonts (Plus Jakarta Sans / IBM Plex Mono) — use these tokens instead of raw Tailwind colors. Shared layout primitives (`.container-page`, `.section-spacing`, `.surface-card`, `.reveal` fade-in animation) live in `src/styles/global.css`, imported once via `BaseLayout.astro`.
