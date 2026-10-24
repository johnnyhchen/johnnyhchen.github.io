# Johnny Chen — personal blog

This site is built with Jekyll and GitHub Pages. The public site is [johnnyhchen.github.io](https://johnnyhchen.github.io), from the `main` branch of `johnnyhchen/johnnyhchen.github.io`.

## Publish a post

Create a Markdown file in `_posts/` named `YYYY-MM-DD-your-title.md`:

```markdown
---
layout: post
title: A clear title
date: 2026-10-24 09:00:00 -0700
description: A short summary for the home page and search previews.
tags: [notes]
---

Write the post here in Markdown.
```

Commit the file to `main`. GitHub Pages rebuilds the site after the commit. Posts appear on the home page, in the archive, and in the RSS feed automatically.

Edit `about.md` to update the About page. The site has no JavaScript or external theme dependencies; its layout and styles live in `_layouts/` and `assets/css/`.
