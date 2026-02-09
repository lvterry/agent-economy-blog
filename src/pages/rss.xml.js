import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = [
    {
      title: 'AI Hires Humans: A New Paradigm in the Agent Economy',
      titleZh: 'AI 雇佣人类：智能体经济的新范式',
      pubDate: new Date('2026-02-09'),
      description: 'Rent a Human introduces a disruptive concept where AI agents hire humans for physical tasks...',
      descriptionZh: 'Rent a Human 提出颠覆性概念：AI 智能体雇佣人类完成物理任务...',
      link: '/blog/ai-hires-humans',
    },
    {
      title: 'Google Announced Agent Payments Protocol (AP2)',
      titleZh: 'Google 发布 Agent Payments Protocol (AP2)',
      pubDate: new Date('2026-02-09'),
      description: 'Google announced AP2, an open protocol built on A2A that enables secure payment transactions between AI agents...',
      descriptionZh: 'Google 发布 AP2 协议，一个建立在 A2A 之上的开放标准，支持 AI 智能体之间的安全支付交易...',
      link: '/blog/google-announced-agent-payments-protocol-ap2',
    },
    {
      title: 'Anthropic Introduces Model Context Protocol (MCP)',
      titleZh: 'Anthropic 发布 Model Context Protocol (MCP)',
      pubDate: new Date('2024-11-25'),
      description: 'Anthropic open-sources MCP, an open standard connecting AI assistants to data systems...',
      descriptionZh: 'Anthropic 开源 MCP，一个连接 AI 助手与数据系统的开放标准...',
      link: '/blog/anthropic-model-context-protocol',
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
