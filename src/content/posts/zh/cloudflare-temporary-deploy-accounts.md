---
title: 'Cloudflare 推出临时部署账号 让 AI Agent 无需注册即刻上线'
excerpt: 'Cloudflare 发布临时账号功能，AI Agent 可通过 wrangler deploy --temporary 在无需注册的情况下直接部署 Worker，60 分钟内可迭代更新并最终转为永久账号，彻底打通 Agent 自主上线的最后障碍。'
date: "2026-06-20"
tags: ["Cloudflare", "AI-Agents", "Agent-Economy", "Infrastructure"]
category: "AI 智能体"
source: "Cloudflare"
---

6 月 19 日，Cloudflare 发布了针对 AI Agent 的临时账号功能。Agent 现在可以在没有任何人类注册流程的情况下，直接在 Cloudflare 上部署代码——只需要一条命令：`wrangler deploy --temporary`。

这条命令的背后，是 Cloudflare 对 Agent 工作流的重新思考。此前 Agent 能写代码、能调试，但一旦涉及部署就需要面对 OAuth 认证、仪表盘点击、API Token 复制、多因素认证等流程——这些都是为人类设计的，对 Agent 来说却是硬阻断。

临时账号的有效期为 60 分钟，Agent 在此期间可以反复迭代和重新部署。开发者可以随时通过 Cloudflare 提供的 claim 链接将该账号转为自己的永久账号；如果不操作，账号会自动过期释放。

更值得注意的设计细节是 Wrangler 的「Agent 发现」机制。当 Agent 首次尝试部署但未认证时，Wrangler 会输出一条提示信息，主动告知 `--temporary` 参数的存在。这意味着 Agent 不需要人类事先告知这个新功能——它会在运行时自行发现并使用它。

这延续了我们 4 月底报道过的 Cloudflare × Stripe Projects 协议的方向。当时 Cloudflare 和 Stripe 解决了 Agent 的「身份与支付」问题，让 Agent 能完成账号注册、域名购买和部署。今天的临时账号则是更进一步——连注册都不需要了。从「需要 Stripe 做身份层」到「零摩擦临时上线」，Agent 参与生产部署的门槛正在系统性降低。

如果说 Projects 协议是为 Agent 建立了经济人格，那么临时账号就是为 Agent 发放了一张临时身份证——无需审核、即时生效、用完即走。

[阅读原文](https://blog.cloudflare.com/temporary-accounts/)
