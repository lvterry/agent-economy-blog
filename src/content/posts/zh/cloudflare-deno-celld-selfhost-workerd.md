---
title: 'Cloudflare 收下 Deno 团队，让 Workers 编程模型可以自托管'
excerpt: 'Deno runtime 一年后停止开发、Deno Deploy 半年后关停，Ryan Dahl 和 Bert Belder 转去做一件事，把 celld 并回 workerd，让分布式 Durable Objects 能在自己的机房里跑起来。'
date: "2026-10-10"
tags: ["AI-Infrastructure", "Durable-Execution", "Edge-Computing", "Cloudflare"]
category: "AI Infra"
source: "Cloudflare"
---

Deno 团队整体加入 Cloudflare。Ryan Dahl 把安排写得很直白：Deno runtime 再维护一年，只发缺陷和安全补丁，一年后停止开发；Deno Deploy 运营六个月后关停；JSR 迁到 Cloudflare 的基建设施上继续跑。

真正被收走的是 celld。这个 8 月上线的 Rust 项目，把 Cloudflare 的 Workers 加 Durable Objects 这套模型重做了一遍，整个二进制只依赖对象存储一个外部服务。Cloudflare 的 Kenton Varda 承认，workerd 开源了好几年，Durable Objects 却只能在单实例下运行，自己去年试着重写过一次，没做成。celld 补上了这块空白：Durable Objects 是可寻址的分布式单例，自带 SQLite，处理 WebSocket，单线程执行，扩容写在编程模型里，而不是让每个应用自己拼基础设施。

Dahl 和 Bert Belder 接下来的任务只有一个，把 celld 并回 workerd，让自托管变成一等公民。Varda 对开源的解释值得记下来。当初 Shopify 这类客户说得很清楚，workerd 不开源就不敢押注；也确实有客户用 workerd 把自己迁走，但留下来的人更多。开源不是让步，是生意。

对写智能体的人，Durable Objects 正好是 agent harness 需要的形状：便宜的无服务器执行、持久状态、长连接、一层 JavaScript 接口。Dahl 在公告里直接留了邮箱，说想在自己的基建上大规模跑智能体的，现在就可以找他。

HN 上那条被顶得最高的评论把今年数了一遍：Bun 归了 Anthropic，Astro.js 和 VoidZero 归了 Cloudflare，Stainless 归了 Anthropic。运行时和构建工具正在被少数几家公司收走。

[阅读原文](https://deno.com/blog/cloudflare)
