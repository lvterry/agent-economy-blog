import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = [
    {
      title: 'OpenAI Codex: The Rise of AI Software Agents',
      titleZh: 'OpenAI Codex：AI 软件智能体的崛起',
      pubDate: new Date('2026-02-08'),
      description: 'OpenAI introduces Codex, an AI agent that can write, debug, and deploy code autonomously...',
      descriptionZh: 'OpenAI 推出 Codex，一款能够自主编写、调试和部署代码的 AI 智能体...',
      link: '/blog/openai-codex-agent',
    },
    {
      title: 'The AI Agent Market: $216 Billion by 2030',
      titleZh: 'AI 智能体市场：2030 年将达到 2160 亿美元',
      pubDate: new Date('2026-02-07'),
      description: 'New research predicts the autonomous AI agent market will reach $216 billion by 2030...',
      descriptionZh: '新研究预测，自主 AI 智能体市场到 2030 年将达到 2160 亿美元...',
      link: '/blog/ai-agent-market-size',
    },
    {
      title: 'Devin: The First Fully Autonomous AI Software Engineer',
      titleZh: 'Devin：首个完全自主的 AI 软件工程师',
      pubDate: new Date('2026-02-06'),
      description: 'Cognition Labs introduces Devin, an AI that can plan, code, debug, and deploy...',
      descriptionZh: 'Cognition Labs 推出 Devin，一款能够独立规划、编码、调试和部署的 AI...',
      link: '/blog/devin-first-ai-engineer',
    },
    {
      title: 'Multi-Agent Systems: The Next Frontier',
      titleZh: '多智能体系统：下一个前沿',
      pubDate: new Date('2026-02-05'),
      description: 'How multiple AI agents working together can solve complex problems...',
      descriptionZh: '多个 AI 智能体如何协作解决复杂问题...',
      link: '/blog/multi-agent-systems',
    },
    {
      title: 'Can AI Agents Generate Real Income?',
      titleZh: 'AI 智能体能产生真实收入吗？',
      pubDate: new Date('2026-02-04'),
      description: 'Exploring the emerging models where AI agents provide services and generate revenue...',
      descriptionZh: '探索新兴模式：AI 智能体提供服务并创造收入...',
      link: '/blog/agent-income-generation',
    },
  ];

  return rss({
    title: 'Agent Economy',
    description: 'Curated news and insights about AI agents and the autonomous economy | 关于 AI 智能体和自主经济的精选洞察',
    site: context.site,
    items: posts.map((post) => ({
      title: `${post.title} | ${post.titleZh}`,
      description: `${post.description} / ${post.descriptionZh}`,
      pubDate: post.pubDate,
      link: `${context.site}${post.link}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
