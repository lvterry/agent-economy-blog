import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = [
    {
      title: 'Figma: The Future of Design is Code and Canvas',
      titleZh: 'Figma：设计的未来是代码与画布',
      pubDate: new Date('2026-02-18'),
      description: 'Figma introduces Claude Code to Figma, allowing developers to convert code directly into editable designs...',
      descriptionZh: 'Figma 推出 Claude Code to Figma 功能，让开发者可以直接将代码转换为可编辑的设计稿...',
      link: '/blog/figma-future-of-design-code-canvas',
    },
    {
      title: 'RynnBrain: Alibaba\'s Open Embodied Foundation Model',
      titleZh: 'RynnBrain：阿里巴巴开源具身智能基础模型',
      pubDate: new Date('2026-02-15'),
      description: 'Alibaba DAMO Academy releases RynnBrain, an embodied foundation model grounded in physical reality...',
      descriptionZh: '阿里巴巴达摩院发布 RynnBrain，一个基于物理现实的具身基础模型...',
      link: '/blog/rynnbrain-alibaba-embodied-model',
    },
    {
      title: 'Entire: A Collaboration Platform for Agents and Humans',
      titleZh: 'Entire：智能体与人类的协作平台',
      pubDate: new Date('2026-02-11'),
      description: 'Entire is going beyond repositories, building a developer platform where agents and humans can collaborate, interact, and grow.',
      descriptionZh: 'Entire 正在超越代码仓库，构建一个开发者平台，让智能体和人类能够协作、互动和成长。',
      link: '/blog/entire',
    },
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
      pubDate: new Date('2025-09-16'),
      description: 'Google announced AP2, an open protocol built on A2A that enables secure payment transactions between AI agents...',
      descriptionZh: 'Google 发布 AP2 协议，一个建立在 A2A 之上的开放标准，支持 AI 智能体之间的安全支付交易...',
      link: '/blog/google-announced-agent-payments-protocol-ap2',
    },
    {
      title: 'Google Introduces A2A Protocol: A New Era of Agent Interoperability',
      titleZh: 'Google 推出 A2A 协议：智能体互操作的新时代',
      pubDate: new Date('2025-04-09'),
      description: 'Google announces A2A open protocol enabling agents from different frameworks and vendors to collaborate...',
      descriptionZh: 'Google 宣布 A2A 开放协议，让不同框架和供应商的智能体能够协作...',
      link: '/blog/google-a2a-protocol',
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
