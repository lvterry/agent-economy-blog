---
title: '给 JavaScript 框架算一笔 AI 账'
excerpt: 'Nolan Lawson 用 Opus 5.5 反复搭同一款应用，给 12 套 JavaScript 框架算了一笔可复现的 AI 构建账。'
date: "2026-11-02"
tags: ["AI-Agents", "AI-Coding", "Coding"]
entities: ["Anthropic"]
category: "AI 应用"
source: "Nolan Lawson"
---

前端圈子里，「对 agent 更友好」「改起来更快」「少犯错」这类说法很多，证据很少。有人会因为某个栈「更适合 vibe coding」整站重写，却很少拿出可复现的对比。Nolan Lawson 做了一件简单的事：用 Opus 5.5（高 effort）反复搭同一款宝可梦应用，覆盖 12 套 JavaScript 框架或元框架，每套跑 5 次取中位数，再比构建成本、token、耗时、代码行数，以及 Lighthouse 表现。应用本身偏内容站、交互不重——作者一开始就写明了这一点，也尽量给各栈挂上官方 MCP 或 skill，避免被骂「训练数据不熟所以输了」。他没有规定必须 SSR 还是 CSR，也没有逼代理做性能调优，只给规格与符合性测试，想模拟普通 vibe coding。

按 Claude Code 报出的 API 标价算中位成本，最便宜的是 Hono+htmx（约 2.67 美元），接着是 Astro、Nuxt；偏贵的是 SvelteKit、Gracile+Lit，Angular 接近 5 美元。时间和 token 大体同向：Astro、Hono+htmx 多在 9 分钟上下，Angular 中位约 17 分钟；token 从 Nuxt、Astro 约四五百万，拉到 Angular 近千万。代码行数也拉开了：Hono+htmx 约 1370 行，Angular 约 2009 行——在 agent 时代，行数不只是可维护性，还是以后每次改动要再读进上下文的体积。作者提醒，方差很大：某次 React Router 的便宜跑，仍可能比某次 Hono+htmx 的贵跑更省；SvelteKit 贵，部分是因为代理每轮都去读 v3 迁移指南，训练数据里还没有；Gracile 则常被克隆仓库或翻 node_modules。Vanilla + Vite 也没有稳赢，说明「完全不装框架」并不自动更省。

质量侧，首页 Performance / Accessibility 几乎打满，差别主要在客户端 JS 体积、TBT 和 LCP。Astro 等 MPA 路径更轻；Next.js 一类 SPA 更重。作者也承认：Lighthouse 和 Core Web Vitals 天生偏爱 MPA，这不是「谁绝对更好」，而是「在这个内容型 holotype 上谁更省」。若换成复杂仪表盘或强交互产品，排名很可能重排；MCP 用得不均，也可能让某次跑偏贵。仓库已开源，欢迎换应用形态、换模型、加轮次去打脸。

结论并不号召大家立刻扔掉 React。它只是把一个习惯翻过来：agent 时代如果已经很少手打代码，选栈就不该只靠「我对它熟」或「听说对 agent 友好」。token、耗时和日后维护时的上下文体积，都会进账单。证据可以很糙，但有证据，总好过只有 vibe。

[阅读原文](https://nolanlawson.com/2026/10/28/the-ai-cost-of-javascript-frameworks/)
