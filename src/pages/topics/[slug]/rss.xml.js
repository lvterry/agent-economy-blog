import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getTopicBySlug, postMatchesTopic, topics } from '../../../lib/categories.ts';
import { getPubDate } from '../../../utils/postCommitDates.js';

export function getStaticPaths() {
  return topics.map((topic) => ({ params: { slug: topic.slug } }));
}

export async function GET(context) {
  const locale = 'zh';
  const topic = getTopicBySlug(context.params.slug);

  if (!topic) {
    return new Response('Topic not found', { status: 404 });
  }

  const posts = await getCollection('posts');
  const topicPosts = posts
    .filter((post) => post.id.startsWith(`${locale}/`))
    .filter((post) => postMatchesTopic(post.data.tags || [], topic))
    .sort((a, b) => b.data.date.localeCompare(a.data.date));

  const items = topicPosts.map((post) => ({
    title: post.data.title,
    description: post.data.excerpt,
    pubDate: getPubDate(post),
    link: `/blog/${post.id.replace(`${locale}/`, '').replace('.md', '')}`,
  }));

  const lastBuild = items.reduce(
    (max, item) => (item.pubDate > max ? item.pubDate : max),
    new Date(0)
  );

  return rss({
    title: `Agent Economy - ${topic.label}`,
    description: topic.description,
    site: context.site,
    items,
    customData: `<language>zh-cn</language><lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>`,
  });
}
