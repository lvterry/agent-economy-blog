export const categoryMap: Record<string, string[]> = {
  "AI Infra": ["AI-Infrastructure", "Hardware", "Data-Center", "GPU", "TPU", "Supply-Chain", "Infrastructure", "Tinygrad", "Deep-Learning"],
  "AI 模型": ["GPT", "Multimodal", "Reasoning", "AI-Model", "Image-Generation", "Foundation Model", "Nano-Banana", "GPT-5.4", "LLM"],
  "AI 智能体": ["Agent", "Agentic AI", "A2A", "MCP", "AI-Agents", "Agent-Interoperability", "Agent-Economy", "AI-Standards"],
  "AI 应用": ["Product-Design", "AI-Design", "Embodied AI", "Robotics", "Computer-Use", "Coding"],
  "商业 & 经济": ["Market-Analysis", "Business", "Layoffs", "Tech-Industry", "Jack-Dorsey", "Block", "Rent a Human", "Economy", "Risk-Assessment", "Future-of-Work"],
  "安全 & 协议": ["AP2", "AI-Advertising", "Security"],
  "行业动态": ["X/Twitter", "ChatGPT"]
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

export function getCategories(tags: string[]): string[] {
  const categories = new Set<string>();

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
