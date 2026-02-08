import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = [
    {
      title: 'OpenAI Codex: The Rise of AI Software Agents',
      pubDate: new Date('2026-02-08'),
      description: 'OpenAI introduces Codex, an AI agent that can write, debug, and deploy code autonomously...',
      link: '/blog/openai-codex-agent',
    },
    {
      title: 'The AI Agent Market: $216 Billion by 2030',
      pubDate: new Date('2026-02-07'),
      description: 'New research predicts the autonomous AI agent market will reach $216 billion by 2030...',
      link: '/blog/ai-agent-market-size',
    },
    {
      title: 'Devin: The First Fully Autonomous AI Software Engineer',
      pubDate: new Date('2026-02-06'),
      description: 'Cognition Labs introduces Devin, an AI that can plan, code, debug, and deploy...',
      link: '/blog/devin-first-ai-engineer',
    },
    {
      title: 'Multi-Agent Systems: The Next Frontier',
      pubDate: new Date('2026-02-05'),
      description: 'How multiple AI agents working together can solve complex problems...',
      link: '/blog/multi-agent-systems',
    },
    {
      title: 'Can AI Agents Generate Real Income?',
      pubDate: new Date('2026-02-04'),
      description: 'Exploring the emerging models where AI agents provide services and generate revenue...',
      link: '/blog/agent-income-generation',
    },
  ];

  return rss({
    title: 'Agent Economy',
    description: 'Curated news and insights about AI agents and the autonomous economy',
    site: context.site,
    items: posts.map((post) => ({
      ...post,
      link: `${context.site}${post.link}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
