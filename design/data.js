// Shared article data for editorial homepage design mockups.
// Real content pulled from the Agent Economy blog (zh).
window.AE_OBSERVATION = {
  title: "Agent Runtime 之争",
  date: "2026-04-30",
  eyebrow: "本周观察",
  body:
    "短短三周内，Anthropic、OpenAI（经由 AWS）、微软、Google 几乎同时推出了各自的托管 agent runtime。这种集中并非巧合。过去一年里，企业 agent 落地普遍卡在同样三件事上——长任务的状态管理、沙箱隔离、可观测性。行业最终给出了同一个答案：不再卖 token，改卖 agent-小时。",
  tail:
    "到 2027 年，运行一个 agent 或许会像运行一个容器一样被彻底商品化——届时企业要回答的问题，将不再是用哪个模型，而是把 agent 跑在哪个 runtime 上。",
};

window.AE_POSTS = [
  {
    title: "48,000 美元的 GPU 服务器到底值不值——一份真实成本分析",
    excerpt:
      "一位独立 AI 研究员详细拆解了自建 6×RTX 6000 Ada GPU 服务器与租用云 GPU 的真实经济账，数据跨度 18 个月。",
    date: "2026-05-22",
    cat: "AI Infra",
    source: "Rosmine AI",
    tags: ["GPU", "AI 基础设施", "云计算"],
  },
  {
    title: "Qwen3.7-Max：专为智能体时代打造的前沿模型",
    excerpt:
      "阿里的 Qwen3.7-Max 在代码智能体、MCP 集成和超长自主执行上实现突破，并在 35 小时连续运行中独立完成 GPU 内核优化，达到 10 倍加速。",
    date: "2026-05-21",
    cat: "AI 智能体",
    source: "Qwen",
    tags: ["Agent", "MCP", "Coding"],
  },
  {
    title: "Scott Alexander 论 AI 发展曲线为何不会轻易触顶",
    excerpt:
      "Astral Codex Ten 反驳「所有指数增长终将变成 S 曲线」的 AI 怀疑论，指出历史上一再出现过早宣告增长见顶的错误预测。",
    date: "2026-05-16",
    cat: "AI 模型",
    source: "Astral Codex Ten",
    tags: ["AI-Model", "LLM"],
  },
  {
    title: "Google Project Zero 在 Pixel 10 上实现零点击远程 Root 攻击",
    excerpt:
      "团队复现了零点击远程利用链，发现 Tensor G5 芯片 VPU 驱动的严重内核漏洞，仅需 5 行代码即可实现任意内核读写。",
    date: "2026-05-16",
    cat: "安全与隐私",
    source: "Google Project Zero",
    tags: ["Security", "Google", "Android"],
  },
  {
    title: "美国在 AI 商业化竞赛中领先，关键在于基础设施与平台生态",
    excerpt:
      "深度分析指出，美国的领先不在论文数量或工程师规模，而是从芯片、数据中心到云平台和开发者生态的全栈整合能力。",
    date: "2026-05-14",
    cat: "商业 & 经济",
    source: "avkcode",
    tags: ["Market-Analysis", "Economy"],
  },
  {
    title: "Theo 发现 Claude Code 会扫描 Git 历史中的 OpenClaw 并据此拒绝执行",
    excerpt:
      "Claude Code 会在 Git 提交历史中检测 OpenClaw 关键词，一旦发现就拒绝执行请求或额外收费，引发关于编码 Agent 竞争行为的讨论。",
    date: "2026-04-30",
    cat: "AI 智能体",
    source: "X (Theo)",
    tags: ["AI-Agents", "Agent-Economy"],
  },
  {
    title: "zindex 为 AI 智能体打造图表基础设施协议",
    excerpt:
      "Diagram Scene Protocol 让智能体以结构化、可版本化的方式创建和编辑图表，标志 AI 生成内容从一次性输出向持久化状态的转变。",
    date: "2026-04-22",
    cat: "AI 智能体",
    source: "zindex.ai",
    tags: ["Agent-Infrastructure", "Developer-Tools"],
  },
  {
    title: "AI 需求推动 RAM 短缺或持续数年",
    excerpt:
      "即使供应商增加 DRAM 生产，到 2027 年底制造商预计只能满足 60% 的需求。SK 集团主席甚至表示短缺可能持续到 2030 年。",
    date: "2026-04-18",
    cat: "AI Infra",
    source: "The Verge",
    tags: ["Hardware", "Supply-Chain"],
  },
  {
    title: "Gemini 应用现已登陆 macOS",
    excerpt: "Google 将 Gemini 应用带到 macOS，提供原生桌面体验。",
    date: "2026-04-16",
    cat: "AI 模型",
    source: "Google",
    tags: ["Gemini", "Productivity"],
  },
  {
    title: "VS Code 默认启用 AI 共同作者提交标注",
    excerpt:
      "微软在一项仅改动两行的合并请求中，将 git 提交自动添加 AI 共同作者的功能默认开启，引发大规模社区不满。",
    date: "2026-04-16",
    cat: "行业动态",
    source: "GitHub",
    tags: ["VSCode", "Microsoft"],
  },
  {
    title: "Qwen3.6-Plus：面向真实世界场景的 AI Agent",
    excerpt:
      "阿里通义千问发布面向真实世界 Agent 场景的模型，支持复杂任务规划、代码生成、多模态理解和工具调用。",
    date: "2026-04-03",
    cat: "AI 模型",
    source: "Alibaba",
    tags: ["Qwen", "Multimodal"],
  },
  {
    title: "Variant：用 AI 无限滚动探索设计灵感",
    excerpt:
      "输入一个应用或网站的想法，通过滚动即可浏览 AI 生成的无限设计选项。像刷短视频一样探索设计灵感。",
    date: "2026-03-30",
    cat: "AI 应用",
    source: "Variant",
    tags: ["AI-Design", "Product-Design"],
  },
  {
    title: "Project NOMAD：免费开源的离线 AI 服务器",
    excerpt:
      "免费开源的离线服务器，让任何人在自己电脑上运行完整 AI 系统。适合应急准备、离网生活或技术爱好者自托管。",
    date: "2026-03-23",
    cat: "AI Infra",
    source: "Project NOMAD",
    tags: ["Open Source", "Local AI"],
  },
  {
    title: "TinyBox：深度学习超级计算机现已开售",
    excerpt:
      "tinygrad 背后的 Tiny Corp 推出 TinyBox 深度学习超级计算机，4×9070 XT 版本售价 $12,000，现已发货。",
    date: "2026-03-22",
    cat: "AI Infra",
    source: "TinyCorp",
    tags: ["Tinygrad", "Hardware"],
  },
];

window.AE_CATEGORIES = [
  "全部",
  "AI Infra",
  "AI 智能体",
  "AI 模型",
  "AI 应用",
  "商业 & 经济",
  "安全与隐私",
  "行业动态",
];
