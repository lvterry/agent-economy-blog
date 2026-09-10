import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPubDate } from '../utils/postCommitDates.js';

export async function GET(context) {
  const posts = await getCollection('posts');
  const sorted = posts.sort((a, b) => b.data.date.localeCompare(a.data.date));

  const items = sorted.map((post) => ({
    title: post.data.title,
    description: post.data.excerpt,
    pubDate: getPubDate(post),
    link: `/blog/${post.id}`,
  }));

  const lastBuild = items.reduce(
    (max, item) => (item.pubDate > max ? item.pubDate : max),
    new Date(0)
  );

  return rss({
    title: 'Agent Economy',
    description: '关于 AI 智能体经济的精选洞察',
    site: context.site,
    items,
    customData: `<language>zh-cn</language><lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>`,
  });
}
