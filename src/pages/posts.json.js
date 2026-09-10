import { getCollection } from 'astro:content';

// Backing data for the homepage feed. The first page is rendered into the HTML
// for crawlers and no-JS readers; the client fetches this once and appends the
// remaining posts in batches. Ordered newest first, matching the homepage.
export async function GET() {
  const posts = await getCollection('posts');
  const sorted = posts.sort((a, b) => b.data.date.localeCompare(a.data.date));

  const items = sorted.map((post) => ({
    id: post.id,
    title: post.data.title,
    date: post.data.date,
    excerpt: post.data.excerpt,
  }));

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
