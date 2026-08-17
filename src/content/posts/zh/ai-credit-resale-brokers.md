---
title: 'AI 信用转售经纪兴起 token 折扣最高打到 80%'
excerpt: '大量初创公司开始收到折扣收购 API 信用额度的邀约，AI Credits、CheapCredits 等平台公开转售 OpenAI、Anthropic 等额度，折扣 30% 到 80% 不等，token 正在变成可套现的伪货币。'
date: "2026-08-17"
tags: ["Market-Analysis", "Business", "Economy", "LLM"]
category: "商业 & 经济"
source: "Vectoral"
---

如果你是一家 AI 初创公司的创始人，最近可能收到过这样的邮件：有人想以 40% 到 50% 的折扣买走你账户里用不完的 API 信用额度。安全公司 Vectoral 的作者走访了这批「token 经纪」，发现这个地下市场已经相当成规模。

供给来自几条渠道：AI Credits、AICreditMart 这类信用交易平台公开挂售 OpenAI、Anthropic、Azure 等额度，折扣 30% 到 80%；CheapCredits、Tokvana 则自称靠「批量采购」做到统一 40% 的降价；Telegram 频道和 Reddit 上，连 YC Startup School 送的 2500 美元额度都有人转卖。有经纪人声称日处理能力达 10 万美元，且不交出 API key，而是提供代理端点从密钥池转发请求。

作者怀疑 40% 的折扣根本不可能来自合规渠道——除非你是供应商的头部客户。更可能的情况是盗号、信用卡欺诈与批量注册的机器人环。HN 评论补充了更深的风险：代理位于你与模型之间，TLS 在代理处终止，流量里的工具调用（比如 bash 命令）可以被改写，秘密可能被外泄，而客户端无从验证收到的到底是不是那个模型。

token 正在变成一种可套现的伪货币，而每一个灰色市场都会迎来平台的反制。当 OpenAI、Anthropic 开始清理滥用账户、收紧结算时，风险会从买家扩散到所有还在用折扣额度的开发者身上。用便宜 token 之前，值得想清楚你买到的究竟是什么。

[阅读原文](https://vectoral.com/blog/who-are-the-token-brokers)
