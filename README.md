# Personal Academic Profile

A fast, low-maintenance personal website for researchers, built with
[Astro](https://astro.build). It ships as **static HTML with (almost) no
JavaScript**, so it stays fast and keeps working for years without breaking.

## Quick start

```bash
npm install      # one time
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Requires Node.js 18.20+ (Node 20+ recommended).

## Make it yours — you only touch three things

1. **`src/data/`** — your content. Plain YAML files, no code:
   - `profile.yaml` — name, title, bio, education, interests, social links, nav
   - `publications.yaml` — papers (`featured: true` shows one on the homepage)
   - `news.yaml`, `talks.yaml`, `service.yaml`, `teaching.yaml`, `projects.yaml`
2. **`src/styles/_variables.scss`** — the theme. Change colors, fonts, spacing,
   and corner radius for the whole site from this one file.
3. **`public/images/`** — your photo (`profile.svg` → replace with your own
   `profile.jpg` and update the path in `profile.yaml`) and publication
   thumbnails.

You never need to edit the components, layouts, or pages to personalize the
site. That is what makes it reusable as a template.

## Project structure

```
src/
├── data/         your content (YAML) — the only files most people edit
├── styles/       _variables.scss (theme) + main.scss (base styles)
├── components/   reusable UI: Header, Footer, Bio, PublicationCard, ...
├── layouts/      the page shell (<html>, <head>, header + footer)
└── pages/        routes: index, publications, teaching, projects
public/           static assets served as-is (images, files, favicon)
```

## Adding pages or sections

- **New page** (e.g. `/awards`): add `src/pages/awards.astro`, mirror an
  existing page, and add a nav entry in `profile.yaml`.
- **New homepage section**: drop a `<Section title="...">` block into
  `src/pages/index.astro`.

## Optional: particle background

Set `hero.particles: true` in `profile.yaml` and add a `ParticlesBackground`
island component using [tsParticles](https://github.com/tsparticles/tsparticles)
(the maintained successor to the abandoned `particles.js`). Loaded lazily and
scoped to one component, so it can never block the page from loading.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys automatically on every push
to `main`/`master`. In your repo: **Settings → Pages → Build and deployment →
Source: GitHub Actions**. For a user/organization page repo
(`<username>.github.io`) no extra config is needed.
