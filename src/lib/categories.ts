import type { Lang } from '../i18n/ui';

export const categoryMap: Record<string, string[]> = {
  "AI Infra": ["AI-Infrastructure", "Hardware", "Data-Center", "GPU", "TPU", "Supply-Chain", "Infrastructure", "Tinygrad", "Deep-Learning"],
  "AI 模型": ["GPT", "Multimodal", "Reasoning", "AI-Model", "Image-Generation", "Foundation Model", "Nano-Banana", "GPT-5.4", "LLM"],
  "AI 智能体": ["Agent", "Agentic AI", "A2A", "MCP", "AI-Agents", "Agent-Interoperability", "Agent-Economy", "AI-Standards"],
  "AI 应用": ["Product-Design", "AI-Design", "Embodied AI", "Robotics", "Computer-Use", "Coding"],
  "商业 & 经济": ["Market-Analysis", "Business", "Layoffs", "Tech-Industry", "Jack-Dorsey", "Block", "Rent a Human", "Economy", "Risk-Assessment", "Future-of-Work"],
  "安全 & 协议": ["AP2", "AI-Advertising", "Security", "Privacy"],
  "行业动态": ["X/Twitter", "ChatGPT", "OpenAI"]
};

export const categoryLabels: Record<string, Record<string, string>> = {
  zh: {
    "全部": "全部",
    "AI Infra": "AI Infra",
    "AI 模型": "AI 模型",
    "AI 智能体": "AI 智能体",
    "AI 应用": "AI 应用",
    "商业 & 经济": "商业 & 经济",
    "安全 & 协议": "安全 & 协议",
    "行业动态": "行业动态"
  },
  en: {
    "全部": "All",
    "AI Infra": "AI Infra",
    "AI 模型": "AI Models",
    "AI 智能体": "AI Agents",
    "AI 应用": "AI Apps",
    "商业 & 经济": "Business",
    "安全 & 协议": "Security",
    "行业动态": "Industry"
  }
};

const categoryPriority = ["AI Infra", "AI 智能体", "AI 模型", "AI 应用", "商业 & 经济", "安全 & 协议", "行业动态"];

export type TopicKey = keyof typeof categoryMap;

export interface TopicMeta {
  key: TopicKey;
  slug: string;
  labels: Record<Lang, string>;
  descriptions: Record<Lang, string>;
  tags: string[];
}

export const topics: TopicMeta[] = [
  {
    key: "AI Infra",
    slug: "ai-infra",
    labels: { zh: "AI Infra", en: "AI Infra" },
    descriptions: {
      zh: "追踪支撑智能体时代的算力、芯片、数据中心与开发基础设施。",
      en: "Compute, chips, data centers, and developer infrastructure powering the agent era.",
    },
    tags: categoryMap["AI Infra"],
  },
  {
    key: "AI 模型",
    slug: "ai-models",
    labels: { zh: "AI 模型", en: "AI Models" },
    descriptions: {
      zh: "关注基础模型、多模态、推理能力与模型发布带来的产品变化。",
      en: "Foundation models, multimodal systems, reasoning, and product shifts from new model releases.",
    },
    tags: categoryMap["AI 模型"],
  },
  {
    key: "AI 智能体",
    slug: "ai-agents",
    labels: { zh: "AI 智能体", en: "AI Agents" },
    descriptions: {
      zh: "覆盖智能体协议、工具调用、异步工作流与智能体经济的关键进展。",
      en: "Agent protocols, tool use, async workflows, and the key moves shaping the agent economy.",
    },
    tags: categoryMap["AI 智能体"],
  },
  {
    key: "AI 应用",
    slug: "ai-apps",
    labels: { zh: "AI 应用", en: "AI Apps" },
    descriptions: {
      zh: "记录 AI 在设计、编程、机器人与电脑使用等实际场景中的落地。",
      en: "Applied AI across design, coding, robotics, computer use, and practical product workflows.",
    },
    tags: categoryMap["AI 应用"],
  },
  {
    key: "商业 & 经济",
    slug: "business",
    labels: { zh: "商业 & 经济", en: "Business" },
    descriptions: {
      zh: "观察 AI 对公司战略、劳动力市场、产业政策与商业模式的影响。",
      en: "Company strategy, labor markets, industrial policy, and business models reshaped by AI.",
    },
    tags: categoryMap["商业 & 经济"],
  },
  {
    key: "安全 & 协议",
    slug: "security",
    labels: { zh: "安全 & 协议", en: "Security" },
    descriptions: {
      zh: "聚焦智能体安全、支付协议、隐私保护与可信协作标准。",
      en: "Agent security, payment protocols, privacy, and standards for trusted collaboration.",
    },
    tags: categoryMap["安全 & 协议"],
  },
  {
    key: "行业动态",
    slug: "industry",
    labels: { zh: "行业动态", en: "Industry" },
    descriptions: {
      zh: "汇总影响 AI 行业方向的产品发布、平台变化与公司动向。",
      en: "Product launches, platform changes, and company moves that shape the AI industry.",
    },
    tags: categoryMap["行业动态"],
  },
];

export function getCategories(tags: string[], explicitCategory?: string): string[] {
  const categories = new Set<string>();

  // If a manual category is set in frontmatter, use it directly
  if (explicitCategory && categoryMap[explicitCategory]) {
    return [explicitCategory];
  }

  for (const category of categoryPriority) {
    const categoryTags = categoryMap[category];
    if (categoryTags && tags.some(tag => categoryTags.includes(tag))) {
      categories.add(category);
    }
  }

  for (const tag of tags) {
    for (const [category, categoryTags] of Object.entries(categoryMap)) {
      if (categoryTags.includes(tag) && !categories.has(category)) {
        categories.add(category);
      }
    }
  }

  if (categories.size === 0) categories.add("AI 智能体");
  return Array.from(categories);
}

export function getTopicBySlug(slug: string | undefined): TopicMeta | undefined {
  return topics.find(topic => topic.slug === slug);
}

export function getTopicByKey(key: string): TopicMeta | undefined {
  return topics.find(topic => topic.key === key);
}

export function getTopicPath(topic: TopicMeta | string, lang: Lang): string {
  const slug = typeof topic === 'string' ? topic : topic.slug;
  return lang === 'en' ? `/en/topics/${slug}` : `/topics/${slug}`;
}

export function getTopicRssPath(topic: TopicMeta | string, lang: Lang): string {
  return `${getTopicPath(topic, lang)}/rss.xml`;
}

export function postMatchesTopic(tags: string[], topic: TopicMeta): boolean {
  return tags.some(tag => topic.tags.includes(tag));
}

export function getRelatedTags(posts: Array<{ data: { tags: string[] } }>, topic: TopicMeta): string[] {
  const counts = new Map<string, number>();
  posts.forEach(post => {
    post.data.tags.forEach(tag => {
      if (topic.tags.includes(tag)) {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      }
    });
  });
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]) => tag);
}

export function getTopSources(posts: Array<{ data: { source: string } }>, limit = 5): Array<{ source: string; count: number }> {
  const counts = new Map<string, number>();
  posts.forEach(post => {
    if (post.data.source) {
      counts.set(post.data.source, (counts.get(post.data.source) || 0) + 1);
    }
  });
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([source, count]) => ({ source, count }));
}
