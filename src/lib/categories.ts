export const categoryMap: Record<string, string[]> = {
  "AI Infra": ["AI-Infrastructure", "Hardware", "Data-Center", "GPU", "TPU", "Supply-Chain", "Infrastructure", "Tinygrad", "Deep-Learning"],
  "AI 模型": ["GPT", "Multimodal", "Reasoning", "AI-Model", "Image-Generation", "Foundation Model", "Nano-Banana", "GPT-5.4", "LLM", "Gemini"],
  "AI 智能体": ["Agent", "Agentic AI", "A2A", "MCP", "AI-Agents", "Agent-Interoperability", "Agent-Economy", "AI-Standards"],
  "AI 应用": ["Product-Design", "AI-Design", "Embodied AI", "Robotics", "Computer-Use", "Coding", "Healthcare-AI"],
  "商业 & 经济": ["Market-Analysis", "Business", "Layoffs", "Tech-Industry", "Jack-Dorsey", "Block", "Rent a Human", "Economy", "Risk-Assessment", "Future-of-Work"],
  "安全与隐私": ["AP2", "AI-Advertising", "Security", "Privacy", "AI-Safety"],
  "行业动态": ["X/Twitter", "ChatGPT", "OpenAI", "Spotify", "AI-Music", "Cloudflare", "Google", "Anthropic"]
};

export const categoryLabels: Record<string, string> = {
  "全部": "全部",
  "AI Infra": "AI Infra",
  "AI 模型": "AI 模型",
  "AI 智能体": "AI 智能体",
  "AI 应用": "AI 应用",
  "商业 & 经济": "商业 & 经济",
  "安全与隐私": "安全与隐私",
  "行业动态": "行业动态"
};

const categoryPriority = ["AI Infra", "AI 智能体", "AI 模型", "AI 应用", "商业 & 经济", "安全与隐私", "行业动态"];

export type TopicKey = keyof typeof categoryMap;

export interface TopicMeta {
  key: TopicKey;
  slug: string;
  label: string;
  description: string;
  tags: string[];
  color: string;
}

export const topics: TopicMeta[] = [
  {
    key: "AI Infra",
    slug: "ai-infra",
    label: "AI Infra",
    description: "追踪支撑智能体时代的算力、芯片、数据中心与开发基础设施。",
    tags: categoryMap["AI Infra"],
    color: "#5b6dba",
  },
  {
    key: "AI 模型",
    slug: "ai-models",
    label: "AI 模型",
    description: "关注基础模型、多模态、推理能力与模型发布带来的产品变化。",
    tags: categoryMap["AI 模型"],
    color: "#1f4e3d",
  },
  {
    key: "AI 智能体",
    slug: "ai-agents",
    label: "AI 智能体",
    description: "覆盖智能体协议、工具调用、异步工作流与智能体经济的关键进展。",
    tags: categoryMap["AI 智能体"],
    color: "#d8c0e0",
  },
  {
    key: "AI 应用",
    slug: "ai-apps",
    label: "AI 应用",
    description: "记录 AI 在设计、编程、机器人与电脑使用等实际场景中的落地。",
    tags: categoryMap["AI 应用"],
    color: "#e69138",
  },
  {
    key: "商业 & 经济",
    slug: "business",
    label: "商业 & 经济",
    description: "观察 AI 对公司战略、劳动力市场、产业政策与商业模式的影响。",
    tags: categoryMap["商业 & 经济"],
    color: "#e07856",
  },
  {
    key: "安全与隐私",
    slug: "security",
    label: "安全与隐私",
    description: "聚焦智能体安全、支付协议、隐私保护与可信协作标准。",
    tags: categoryMap["安全与隐私"],
    color: "#7c5fb8",
  },
  {
    key: "行业动态",
    slug: "industry",
    label: "行业动态",
    description: "汇总影响 AI 行业方向的产品发布、平台变化与公司动向。",
    tags: categoryMap["行业动态"],
    color: "#3a8a8a",
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

export function getTopicPath(topic: TopicMeta | string): string {
  const slug = typeof topic === 'string' ? topic : topic.slug;
  return `/topics/${slug}`;
}

export function getTopicRssPath(topic: TopicMeta | string): string {
  return `${getTopicPath(topic)}/rss.xml`;
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

export interface BubbleInput {
  id: string;
  r: number;
}

export interface PackedBubble {
  id: string;
  x: number;
  y: number;
  r: number;
}

interface Point {
  x: number;
  y: number;
}

interface PlacedCircle extends Point {
  r: number;
}

function tangentPositions(c1: PlacedCircle, c2: PlacedCircle, r: number): Point[] {
  const d = Math.hypot(c2.x - c1.x, c2.y - c1.y);
  const r1 = c1.r + r;
  const r2 = c2.r + r;
  if (d === 0 || d > r1 + r2 || d < Math.abs(r1 - r2)) return [];
  const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
  const mx = c1.x + (a * (c2.x - c1.x)) / d;
  const my = c1.y + (a * (c2.y - c1.y)) / d;
  const offX = (h * (c2.y - c1.y)) / d;
  const offY = (h * (c2.x - c1.x)) / d;
  return [
    { x: mx + offX, y: my - offY },
    { x: mx - offX, y: my + offY },
  ];
}

export function packTopicBubbles(
  items: BubbleInput[],
  opts: { width: number; height: number; padding?: number }
): PackedBubble[] {
  const { width, height, padding = 6 } = opts;
  const sorted = [...items].sort((a, b) => b.r - a.r);
  const placed: Array<PlacedCircle & { id: string }> = [];
  const eps = 0.01;

  for (const item of sorted) {
    let best: Point | null = null;
    if (placed.length === 0) {
      best = { x: 0, y: 0 };
    } else if (placed.length === 1) {
      const p = placed[0];
      best = { x: p.x + p.r + item.r + padding, y: p.y };
    } else {
      const candidates: Point[] = [];
      for (let i = 0; i < placed.length; i++) {
        for (let j = i + 1; j < placed.length; j++) {
          candidates.push(...tangentPositions(placed[i], placed[j], item.r + padding));
        }
      }
      const valid = candidates.filter(c =>
        placed.every(p => Math.hypot(c.x - p.x, c.y - p.y) >= p.r + item.r + padding - eps)
      );
      if (valid.length > 0) {
        const cx = placed.reduce((s, p) => s + p.x, 0) / placed.length;
        const cy = placed.reduce((s, p) => s + p.y, 0) / placed.length;
        valid.sort(
          (a, b) =>
            (a.x - cx) ** 2 + (a.y - cy) ** 2 - ((b.x - cx) ** 2 + (b.y - cy) ** 2)
        );
        best = valid[0];
      } else {
        best = { x: 0, y: placed[placed.length - 1].y + placed[placed.length - 1].r * 4 };
      }
    }
    placed.push({ id: item.id, r: item.r, x: best.x, y: best.y });
  }

  const minX = Math.min(...placed.map(p => p.x - p.r));
  const minY = Math.min(...placed.map(p => p.y - p.r));
  const maxX = Math.max(...placed.map(p => p.x + p.r));
  const maxY = Math.max(...placed.map(p => p.y + p.r));
  const bboxW = maxX - minX;
  const bboxH = maxY - minY;
  const scale = Math.min(1, width / bboxW, height / bboxH);
  const offsetX = (width - bboxW * scale) / 2 - minX * scale;
  const offsetY = (height - bboxH * scale) / 2 - minY * scale;

  return placed.map(p => ({
    id: p.id,
    x: p.x * scale + offsetX,
    y: p.y * scale + offsetY,
    r: p.r * scale,
  }));
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
