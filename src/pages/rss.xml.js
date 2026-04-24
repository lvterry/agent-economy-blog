import rss from '@astrojs/rss';
import { posts } from '../data/posts';

export async function GET(context) {
  return rss({
    title: 'Agent Economy',
    description: 'Curated news and insights about AI agents and the autonomous economy | 关于 AI 智能体经济的精选洞察',
    site: context.site,
    items: posts.map((post) => ({
      title: `${post.titleEn} | ${post.titleZh}`,
      description: `${post.excerptEn} / ${post.excerptZh}`,
      pubDate: new Date(post.date),
      link: `${context.site}/blog/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
