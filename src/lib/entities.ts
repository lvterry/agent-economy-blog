// Commercial entities (companies / brands) a post is about, shown as small
// tags on feed items and post pages. Frontmatter `entities` should already use
// canonical names; this map folds stray aliases into them so "Nvidia",
// "NVIDIA" and "英伟达" never render as three different tags.
//
// Naming convention: the Chinese common name when one is standard in Chinese
// media (英伟达, 谷歌, 微软, 苹果, 亚马逊, 华为, 阿里巴巴, 腾讯, 字节跳动, 百度,
// 小米, 英特尔, 台积电, 三星, 甲骨文), otherwise the brand's own Latin name in
// its official casing (OpenAI, Anthropic, DeepSeek, Meta, xAI).
// Products fold into their maker (ChatGPT → OpenAI, Claude → Anthropic,
// Gemini → 谷歌, Qwen → 阿里巴巴, AWS → 亚马逊).

export const entityAliases: Record<string, string[]> = {
  OpenAI: ['openai', 'chatgpt', 'codex', 'sora'],
  Anthropic: ['anthropic', 'claude'],
  DeepSeek: ['deepseek', '深度求索'],
  Meta: ['meta', 'facebook', 'llama'],
  xAI: ['xai', 'grok'],
  Mistral: ['mistral', 'mistral ai'],
  'Hugging Face': ['hugging face', 'huggingface'],
  Perplexity: ['perplexity'],
  Cursor: ['cursor', 'anysphere'],
  Cognition: ['cognition', 'devin', 'windsurf'],
  Replit: ['replit'],
  Vercel: ['vercel'],
  GitHub: ['github', 'github copilot'],
  Salesforce: ['salesforce'],
  Shopify: ['shopify'],
  Stripe: ['stripe'],
  Visa: ['visa'],
  Mastercard: ['mastercard', '万事达'],
  PayPal: ['paypal'],
  Coinbase: ['coinbase'],
  Cloudflare: ['cloudflare'],
  Databricks: ['databricks'],
  Snowflake: ['snowflake'],
  'Scale AI': ['scale ai'],
  Mercor: ['mercor'],
  Figma: ['figma'],
  Notion: ['notion'],
  Uber: ['uber'],
  Tesla: ['tesla', '特斯拉'],
  AMD: ['amd'],
  Arm: ['arm'],
  Cerebras: ['cerebras'],
  Groq: ['groq'],
  CoreWeave: ['coreweave'],
  'Moonshot AI': ['moonshot', '月之暗面', 'kimi'],
  '智谱': ['智谱', 'zhipu', 'z.ai', 'glm'],
  MiniMax: ['minimax'],
  '英伟达': ['nvidia', '英伟达'],
  '谷歌': ['google', '谷歌', 'deepmind', 'gemini', 'alphabet'],
  '微软': ['microsoft', '微软'],
  '苹果': ['apple', '苹果'],
  '亚马逊': ['amazon', '亚马逊', 'aws'],
  '华为': ['huawei', '华为', '昇腾'],
  '阿里巴巴': ['alibaba', '阿里巴巴', '阿里', '通义', 'qwen', '阿里云'],
  '腾讯': ['tencent', '腾讯'],
  '字节跳动': ['bytedance', '字节跳动', '字节', '豆包', 'tiktok'],
  '百度': ['baidu', '百度'],
  '小米': ['xiaomi', '小米'],
  '英特尔': ['intel', '英特尔'],
  '台积电': ['tsmc', '台积电'],
  '三星': ['samsung', '三星'],
  '甲骨文': ['oracle', '甲骨文'],
};

const lookup = new Map<string, string>();
for (const [canonical, aliases] of Object.entries(entityAliases)) {
  lookup.set(canonical.toLowerCase(), canonical);
  for (const alias of aliases) lookup.set(alias.toLowerCase(), canonical);
}

export function canonicalEntity(name: string): string {
  const key = name.trim();
  return lookup.get(key.toLowerCase()) ?? key;
}

/** Canonical, de-duplicated entity names, frontmatter order preserved. */
export function normalizeEntities(names: string[] = []): string[] {
  return [...new Set(names.map(canonicalEntity).filter(Boolean))];
}
