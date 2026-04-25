# Topic Pages + Topic RSS Implementation Plan

## Summary
Build bilingual topic landing pages for Agent Economy using the existing category system as the source of truth. Use stable ASCII topic slugs across both locales, such as `/topics/ai-agents` and `/en/topics/ai-agents`. Add per-topic RSS feeds and save this plan at `docs/topic-pages-plan.md`.

## Key Changes
- Extend the category model with topic metadata: stable `slug`, localized `label`, localized `description`, and existing tag mappings.
- Add dynamic topic pages:
  - Chinese: `/topics/[slug]`
  - English: `/en/topics/[slug]`
  - Each page lists posts in reverse date order whose tags map to that topic.
  - Each page includes topic title, description, article count, related tags, top sources, latest article date, and a topic RSS link.
- Add topic index entry points:
  - Chinese: `/topics`
  - English: `/en/topics`
  - Show all topics with article counts and short descriptions.
- Add topic RSS endpoints:
  - Chinese: `/topics/[slug]/rss.xml`
  - English: `/en/topics/[slug]/rss.xml`
  - RSS items should match the topic page filtering and use localized post URLs.
- Link topic pages from existing UI:
  - Category filter pills on the home page should expose topic URLs without breaking current client-side filtering.
  - Post cards should link the category badge to the relevant topic page.
  - Header navigation should include a compact Topics link.

## Implementation Notes
- Reuse `src/lib/categories.ts` as the canonical topic registry instead of creating a separate mapping.
- Keep English slugs identical across locales.
- Add helper functions for finding topics, filtering posts, computing related tags and sources, and building localized topic/RSS paths.
- Return 404 for unknown topic slugs.
- Use the existing `Layout`, `BlogPost`, `getLocalizedPath`, and translation patterns.
- Add translation keys for topic index/page labels, RSS link text, empty states, and metadata descriptions.
- Do not introduce a backend or generated AI summary in v1; use deterministic metadata and post excerpts only.

## Test Plan
- Add Playwright coverage for:
  - `/topics` and `/en/topics` render visible topic cards.
  - `/topics/ai-agents` and `/en/topics/ai-agents` render posts and localized links.
  - category badges on post cards link to the expected topic URL.
  - unknown topic slugs return 404.
  - `/topics/ai-agents/rss.xml` and `/en/topics/ai-agents/rss.xml` return valid XML with topic-filtered items.
- Run:
  - `npm run build`
  - existing Playwright tests
  - new topic page/RSS tests

## Assumptions
- Plan file path: `docs/topic-pages-plan.md`.
- V1 includes topic pages and topic RSS, but not generated trend summaries.
- Topic slugs are stable English ASCII slugs in both locales.
- Existing category-to-tag behavior remains compatible with current home page filtering.
