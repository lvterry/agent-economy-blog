import { getCollection } from 'astro:content';
import { getPrimaryTopicSlug } from '../lib/categories.js';

// Backing data for the homepage feed. The first page is rendered into the HTML
// for crawlers and no-JS readers; the client fetches this once and appends the
// remaining posts in batches, or filters them by category. Ordered newest
// first, matching the homepage.
export async function GET() {
  const posts = await getCollection('posts');
  const sorted = posts.sort((a, b) => b.data.date.localeCompare(a.data.date));

  const items = sorted.map((post) => ({
    id: post.id,
    title: post.data.title,
    date: post.data.date,
    excerpt: post.data.excerpt,
    // Topic slug rather than the Chinese label, so the sidebar's data-category
    // and the ?category= param stay readable. Same helper the sidebar counts
    // with, so the numbers always match what filtering actually yields.
    category: getPrimaryTopicSlug(post.data.tags || [], post.data.category),
  }));

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
