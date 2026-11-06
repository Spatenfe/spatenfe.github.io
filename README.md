# Astro Portfolio (GitHub Pages Ready)

Clean, modern portfolio built with Astro + TypeScript + Tailwind CSS, configured to deploy correctly for both GitHub Pages modes:

- User site: `https://<username>.github.io/`
- Project site: `https://<username>.github.io/<repo>/`

## Tech Stack

- Astro (TypeScript)
- Tailwind CSS
- Astro Content Collections for project posts
- GitHub Actions deployment workflow

## Run Locally

```bash
npm install
npm run dev
```

Build preview:

```bash
npm run build
npm run preview
```

## GitHub Pages Setup

1. Push to your GitHub repository.
2. In GitHub: `Settings -> Pages -> Build and deployment -> Source`, choose `GitHub Actions`.
3. Ensure your default branch is `main` (or adjust workflow trigger).

The workflow in `.github/workflows/deploy.yml` sets:

- `SITE=https://<owner>.github.io`
- `BASE=/` for `<username>.github.io` repos
- `BASE=/<repo>/` for project repos

This is consumed by `astro.config.mjs`, so one codebase works for both hosting modes.

## Manual site/base overrides (optional)

You can also override locally or in CI:

```bash
SITE=https://your-username.github.io BASE=/your-repo/ npm run build
```

Examples:

- User site repo (`your-username.github.io`):
  - `SITE=https://your-username.github.io`
  - `BASE=/`
- Project repo (`portfolio`):
  - `SITE=https://your-username.github.io`
  - `BASE=/portfolio/`

## Content Model

Projects live in `src/content/projects/*.md` with frontmatter:

- `title`
- `description`
- `date`
- `featured`
- `tags`
- `image`
- `links: { github, demo, writeup }`

Experience and education data live in:

- `src/data/experience.ts`
- `src/data/education.ts`

## Key Routes

- `/` Homepage with hero, news, featured projects, experience, education
- `/projects/[slug]` Project detail page

## Base Path Safety

- Profile and thumbnails are prefixed via `import.meta.env.BASE_URL`/`withBase()`
- Internal links use `withBase()` where needed

## Customize Quickly

Edit these files first:

- `src/data/site.ts` (name, bio, links, email)
- `src/data/experience.ts`
- `src/data/education.ts`
- `src/data/news.ts`
- `src/data/profile.ts`
- `src/content/projects/*.md`
- `public/images/profile.jpg` (replace with your own photo)

## Deploy

Push to `main`:

```bash
git add .
git commit -m "Initial portfolio setup"
git push
```

GitHub Actions will build and publish to Pages automatically.

## Credits

Original site template and design by [Oscar Breiner](https://github.com/oscarbreiner).
