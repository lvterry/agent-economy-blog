// Companies data - Bilingual (English/Chinese)
export interface Company {
  id: string;
  name: string;
  website: string;
  logo: string;
  category: string;
  categoryZh: string;
  descriptionEn: string;
  descriptionZh: string;
}

export const companies: Company[] = [
  {
    id: "nvidia",
    name: "NVIDIA",
    website: "https://www.nvidia.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/NVIDIA_logo.svg/320px-NVIDIA_logo.svg.png",
    category: "Infrastructure",
    categoryZh: "基础设施",
    descriptionEn: "World leader in AI computing and GPU technology, powering the majority of AI training and inference workloads globally.",
    descriptionZh: "全球 AI 计算和 GPU 技术的领导者，为全球大多数 AI 训练和推理工作负载提供算力支持。"
  },
  {
    id: "openai",
    name: "OpenAI",
    website: "https://openai.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/OpenAI_Logo_2025_%28wordmark%29.svg/320px-OpenAI_Logo_2025_%28wordmark%29.svg.png",
    category: "Model Provider",
    categoryZh: "模型提供商",
    descriptionEn: "Creator of ChatGPT and GPT models, leading the development of large language models and conversational AI.",
    descriptionZh: "ChatGPT 和 GPT 模型的创造者，引领大语言模型和对话式 AI 的发展。"
  },
  {
    id: "anthropic",
    name: "Anthropic",
    website: "https://www.anthropic.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Anthropic_logo.svg/320px-Anthropic_logo.svg.png",
    category: "Model Provider",
    categoryZh: "模型提供商",
    descriptionEn: "AI safety company behind Claude, focused on building reliable, interpretable, and steerable AI systems.",
    descriptionZh: "Claude 背后的 AI 安全公司，专注于构建可靠、可解释和可控的 AI 系统。"
  },
  {
    id: "google",
    name: "Google / Alphabet",
    website: "https://ai.google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png",
    category: "Model Provider",
    categoryZh: "模型提供商",
    descriptionEn: "Developer of Gemini models and pioneering AI research, with deep integration across Google products and services.",
    descriptionZh: "Gemini 模型的开发者和 AI 研究的先驱，深度整合于 Google 的产品和服务中。"
  },
  {
    id: "meta",
    name: "Meta",
    website: "https://ai.meta.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/320px-Meta-Logo.png",
    category: "Model Provider",
    categoryZh: "模型提供商",
    descriptionEn: "Creator of the Llama open-source model family and Meta AI, advancing open AI research and development.",
    descriptionZh: "Llama 开源模型系列和 Meta AI 的创造者，推进开放式 AI 研究和开发。"
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    website: "https://www.deepseek.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/320px-DeepSeek_logo.svg.png",
    category: "Model Provider",
    categoryZh: "模型提供商",
    descriptionEn: "Chinese AI company developing efficient large language models with competitive performance at lower training costs.",
    descriptionZh: "中国 AI 公司，开发高效的大语言模型，以更低的训练成本实现具有竞争力的性能。"
  },
  {
    id: "kimi",
    name: "Kimi (Moonshot AI)",
    website: "https://www.kimi.com",
    logo: "https://www.kimi.com/favicon.ico",
    category: "Model Provider",
    categoryZh: "模型提供商",
    descriptionEn: "Chinese AI company behind Kimi K2.5, offering long-context understanding and agentic capabilities.",
    descriptionZh: "Kimi K2.5 背后的中国 AI 公司，提供长上下文理解和智能体能力。"
  },
  {
    id: "minimax",
    name: "MiniMax",
    website: "https://www.minimaxi.com",
    logo: "https://www.minimaxi.com/favicon.ico",
    category: "Model Provider",
    categoryZh: "模型提供商",
    descriptionEn: "Chinese AI company building full-stack foundation models including text, voice, and video generation.",
    descriptionZh: "中国 AI 公司，构建全栈基础模型，包括文本、语音和视频生成。"
  },
  {
    id: "cursor",
    name: "Cursor",
    website: "https://cursor.com",
    logo: "https://cursor.com/favicon.ico",
    category: "Application",
    categoryZh: "应用",
    descriptionEn: "AI-powered code editor built on VS Code, offering intelligent code completion, refactoring, and natural language programming.",
    descriptionZh: "基于 VS Code 的 AI 驱动代码编辑器，提供智能代码补全、重构和自然语言编程。"
  },
  {
    id: "granola",
    name: "Granola",
    website: "https://www.granola.ai",
    logo: "https://www.granola.ai/favicon.ico",
    category: "Application",
    categoryZh: "应用",
    descriptionEn: "AI notepad that transcribes meetings and enhances your notes with automatic summaries and action items.",
    descriptionZh: "AI 笔记本应用，可转录会议内容并通过自动摘要和行动项增强你的笔记。"
  },
  {
    id: "perplexity",
    name: "Perplexity",
    website: "https://perplexity.ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Perplexity_AI_logo.svg/320px-Perplexity_AI_logo.svg.png",
    category: "Search",
    categoryZh: "搜索",
    descriptionEn: "AI-powered answer engine that provides accurate, cited responses to complex queries using real-time search.",
    descriptionZh: "AI 驱动的答案引擎，通过实时搜索为复杂查询提供准确、带引用的回答。"
  },
  {
    id: "genspark",
    name: "Genspark",
    website: "https://www.genspark.ai",
    logo: "https://www.genspark.ai/favicon.ico",
    category: "Search",
    categoryZh: "搜索",
    descriptionEn: "AI search and agent platform that autonomously completes complex tasks with multi-step reasoning.",
    descriptionZh: "AI 搜索和智能体平台，通过多步推理自主完成复杂任务。"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    website: "https://www.midjourney.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Midjourney_logo.svg/320px-Midjourney_logo.svg.png",
    category: "Creative Tool",
    categoryZh: "创意工具",
    descriptionEn: "Leading AI image generation platform that creates stunning visuals from natural language descriptions.",
    descriptionZh: "领先的 AI 图像生成平台，根据自然语言描述创造惊艳的视觉效果。"
  },
  {
    id: "manus",
    name: "Manus",
    website: "https://manus.im",
    logo: "https://manus.im/favicon.ico",
    category: "Application",
    categoryZh: "应用",
    descriptionEn: "General AI agent platform that autonomously executes complex tasks across web browsing, document creation, and data analysis.",
    descriptionZh: "通用 AI 智能体平台，可自主执行跨网页浏览、文档创建和数据分析的复杂任务。"
  }
];

export const categories = [
  { id: "all", nameEn: "All", nameZh: "全部" },
  { id: "Infrastructure", nameEn: "Infrastructure", nameZh: "基础设施" },
  { id: "Model Provider", nameEn: "Model Providers", nameZh: "模型提供商" },
  { id: "Application", nameEn: "Applications", nameZh: "应用" },
  { id: "Search", nameEn: "Search", nameZh: "搜索" },
  { id: "Creative Tool", nameEn: "Creative Tools", nameZh: "创意工具" }
];
