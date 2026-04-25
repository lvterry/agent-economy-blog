import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getTopicBySlug, postMatchesTopic, topics } from '../../../../lib/categories.ts';

export function getStaticPaths() {
  return topics.map((topic) => ({ params: { slug: topic.slug } }));
}

export async function GET(context) {
  const locale = 'en';
  const topic = getTopicBySlug(context.params.slug);

  if (!topic) {
    return new Response('Topic not found', { status: 404 });
  }

  const posts = await getCollection('posts');
  const topicPosts = posts
    .filter((post) => post.id.startsWith(`${locale}/`))
    .filter((post) => postMatchesTopic(post.data.tags || [], topic))
    .sort((a, b) => b.data.date.localeCompare(a.data.date));

  return rss({
    title: `Agent Economy - ${topic.labels.en}`,
    description: topic.descriptions.en,
    site: context.site,
    items: topicPosts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: new Date(post.data.date),
      link: `/en/blog/${post.id.replace(`${locale}/`, '').replace('.md', '')}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
