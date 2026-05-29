# AGENTS.md

Guidance for AI coding agents working in this repo. Keep this file in sync with reality — if you change a convention below, update this file in the same commit.

## What this is

A Chinese-language ([zh-CN](src/layouts/Layout.astro)) static blog about AI agents and the agent economy, built with **Astro 4** + MDX, deployed to Vercel. Content is authored as Markdown in [src/content/posts/zh/](src/content/posts/zh/) and rendered through Astro Content Collections.

The site was previously bilingual (zh/en). The English locale was removed; do not reintroduce `/en/` routes, `en/` content folders, or per-locale label maps unless the user explicitly asks. Existing `locale` props that are always `"zh"` are legacy seams left for incremental cleanup — don't add new ones.

## Commands

```bash
npm install          # install
npm run dev          # astro dev server (localhost:4321)
npm run build        # astro build + pagefind index (postbuild)
npm run preview      # serve ./dist
npx playwright test  # e2e tests in tests/
```

`npm run build` is the canonical correctness check — it runs Zod schema validation on all content frontmatter and fails on broken references. Run it before committing changes to content schemas, routing, or i18n.

There is no separate typecheck script; `astro build` is sufficient. `@astrojs/check` is not installed — don't add it without asking.

## Layout

```
src/
  content/
    config.ts              # Zod schemas for posts / about / observations
    posts/zh/*.md          # blog posts (slug = filename)
    observations/zh/*.md   # short-form notes (filename = YYYY-MM-DD-slug.md)
    about/zh.md            # single about page
  pages/                   # Astro routes — all zh, no locale prefix
    index.astro            # → HomePage component
    blog/[slug].astro      # → PostPage component
    blog/index.astro       # archive listing
    topics/[slug].astro    # → TopicPage component
    topics/[slug]/rss.xml.js
    topics/index.astro     # → TopicIndexPage (bubble chart)
    archive.astro, about.astro, observations.astro, companies.astro
    rss.xml.js, 404.astro
  components/
    pages/*.astro          # page-level components (one per route family)
    BlogPost.astro         # post card
    Observation.astro      # observation card
    SearchPopup.astro      # pagefind-backed search
  layouts/Layout.astro     # site shell — header, nav, footer, SEO meta, theme
  lib/categories.ts        # topic taxonomy: tag → category mapping, bubble layout
  data/companies.ts        # static data for /companies
  i18n/
    ui.ts                  # translation strings (zh only)
    utils.ts               # useTranslations(lang)
  utils/postCommitDates.js # git-log lookup for "first committed" dates
public/                    # static assets, llms.txt, content-api.md
```

## Content authoring

### Post frontmatter ([src/content/config.ts](src/content/config.ts))

```yaml
---
title: "..."           # required
excerpt: "..."         # required — shown on cards + meta description
date: "YYYY-MM-DD"     # required, string (not Date)
tags: ["..."]          # required, drives topic mapping
category: "..."        # optional, takes priority over tag-derived category
source: "..."          # required — original publication name
---
```

Zod strips unknown frontmatter keys silently, so a typo or stale field won't fail the build. Verify schema changes by running `npm run build` and checking that the field actually appears where you expect.

### Topics

Topics are derived from `tags` via [src/lib/categories.ts](src/lib/categories.ts):

- `categoryMap` maps each topic key (e.g. `"AI 智能体"`) to the tag strings that belong to it.
- `getCategories(tags, category)` returns the post's topics; `category` frontmatter overrides tag inference.
- `topics[]` defines slug, label, description, color for `/topics/*` routes.

When adding a post with a new tag, decide whether the tag belongs to an existing topic in `categoryMap`. If it does, add it there. Don't create a new top-level topic without asking — it ripples through the bubble chart, RSS, and filter pills.

### Observations

Short-form notes in [src/content/observations/zh/](src/content/observations/zh/). Filename **must** start with the date: `YYYY-MM-DD-slug.md`. Frontmatter is `title`, `date`, optional `tags` — no excerpt, no source.

## Conventions

- **Language:** all user-facing strings are zh-CN. Don't add English copy to components — even as a fallback. Translation strings live in [src/i18n/ui.ts](src/i18n/ui.ts).
- **Paths:** site is single-locale, so use plain paths (`/blog/${slug}`, `/topics`). Don't reintroduce a `getLocalizedPath` helper.
- **Styling:** vanilla CSS in `<style>` blocks inside each `.astro` file. No CSS framework, no preprocessor. Theme variables (`--color-*`, `--font-*`) are defined in [src/layouts/Layout.astro](src/layouts/Layout.astro); reuse them rather than hardcoding colors.
- **Dark mode:** toggled via `data-theme` attribute on `<html>`, persisted to `localStorage`. Variables are redefined under `[data-theme="dark"]` in Layout.
- **Client JS:** plain `<script>` tags in Astro files. No bundler-level client framework. Keep it minimal and inline.
- **Search:** Pagefind indexes `dist/` post-build. The search UI ([SearchPopup.astro](src/components/SearchPopup.astro)) builds its own in-memory index from `getCollection('posts')` — it does not currently use pagefind's runtime. Don't conflate the two without checking.
- **Dates:** `data.date` is a string and is sorted lexically — keep the `YYYY-MM-DD` format strict. `postCommitDates.js` derives a separate "first published" date from `git log` for posts.

## When making changes

- **Schema changes** ([src/content/config.ts](src/content/config.ts)): run `npm run build` to catch frontmatter that doesn't match. Don't add a schema field unless a template actually reads it — orphaned fields rot.
- **Adding routes:** put the page component in `src/components/pages/` and the route wrapper in `src/pages/`. The wrappers stay thin (just `<Layout><FooPage /></Layout>`).
- **Topic taxonomy changes:** update `categoryMap` AND the `topics[]` array in [src/lib/categories.ts](src/lib/categories.ts). Both feed different parts of the UI.
- **SEO / meta:** centralized in [src/layouts/Layout.astro](src/layouts/Layout.astro). Per-page `<title>`, `<description>`, OG image come through `Layout` props.
- **Don't commit:** `.DS_Store`, `dist/`, `node_modules/`, `tmp/`, anything under `.astro/`. The `.gitignore` is authoritative; if you see one of these in `git status`, fix the ignore rather than committing.

## Out of scope / do not touch unprompted

- Re-adding the English locale.
- Switching CSS to Tailwind / a framework.
- Adding analytics SDKs beyond `@vercel/analytics` already in `package.json`.
- Editing `public/llms.txt` and `public/content-api.md` without the user asking — they're hand-curated indexes, not auto-generated.
- Restructuring `src/content/` directory layout — Astro Content Collections key off these paths.

## Deployment

Vercel auto-deploys `main` via the config in [vercel.json](vercel.json). Build command is `npm ci && npm run build`, output is `dist/`. No environment variables required.
