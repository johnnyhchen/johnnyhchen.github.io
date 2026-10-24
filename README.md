# Johnny Chen — personal blog

This site is built with Astro 7 and GitHub Pages. The public site is [johnnyhchen.github.io](https://johnnyhchen.github.io), from `johnnyhchen/johnnyhchen.github.io`.

Astro renders the site as static HTML. Posts are Markdown entries in a typed content collection; the build ships no client-side JavaScript.

## Publish a post

Create `src/content/blog/YYYY-MM-DD-your-title.md`:

```markdown
---
title: A clear title
date: "2026-10-24T09:00:00-07:00"
description: A short summary for the home page and search previews.
tags: [notes]
---

Write the post here in Markdown.
```

Commit the file to `main`. The GitHub Actions workflow builds and deploys the site. Posts appear on the home page, archive, and RSS feed automatically.

Edit `src/pages/about.astro` to update the About page. Shared layout is in `src/layouts/`; styles are in `public/assets/css/`.

## Local development

Use Node.js 22.23.4 or newer, then run:

```sh
npm install
npm run dev
```

Run `npm run build` to generate the static site in `dist/`.

## GitHub Pages setup

In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. The deployment workflow is `.github/workflows/deploy.yml`.

The former Jekyll files at the repository root are retained as an archive. Astro reads only from `src/` and `public/`, and the Pages workflow uploads only `dist/`.
