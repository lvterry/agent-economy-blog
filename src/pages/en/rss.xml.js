import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const locale = 'en';
  const posts = await getCollection('posts');
  const localePosts = posts
    .filter(p => p.id.startsWith(`${locale}/`))
    .sort((a, b) => b.data.date.localeCompare(a.data.date));

  return rss({
    title: 'Agent Economy',
    description: 'Curated insights on AI agents and the autonomous economy',
    site: context.site,
    items: localePosts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: new Date(post.data.date),
      link: `/en/blog/${post.id.replace(`${locale}/`, '').replace('.md', '')}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
