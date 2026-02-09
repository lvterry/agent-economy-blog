import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = [
    {
      title: 'Google Announced Agent Payments Protocol (AP2)',
      titleZh: 'Google 发布 Agent Payments Protocol (AP2)',
      pubDate: new Date('2026-02-09'),
      description: 'Google announced AP2, an open protocol built on A2A that enables secure payment transactions between AI agents...',
      descriptionZh: 'Google 发布 AP2 协议，一个建立在 A2A 之上的开放标准，支持 AI 智能体之间的安全支付交易...',
      link: '/blog/google-announced-agent-payments-protocol-ap2',
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
