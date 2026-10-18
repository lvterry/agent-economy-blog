---
title: 'DeepSeek 用每千次 0.75 美元的搜索和抓取 API 把智能体上网的价格打了下来'
excerpt: 'DeepSeek 上线基于自研搜索引擎的 Search 和 Fetch API，每 1,000 次成功请求 0.75 美元，失败和空结果不收费，价格只有 Anthropic、OpenAI 内置联网搜索的十几分之一。'
date: "2026-10-19"
tags: ["AI-Infrastructure", "Agent-Tooling", "AI-Agents"]
category: "AI Infra"
source: "DeepSeek"
---

DeepSeek 开放了两个面向智能体和 RAG 应用的联网接口：Search API 基于 DeepSeek 自研搜索引擎，返回带摘要、相关度和权威度评分的结构化结果，支持 site:、lang:、after: 等搜索语法；Fetch API 抓取单个网页并转成 Markdown。两者沿用 DeepSeek API 的鉴权方式，和模型调用共用一个账号。

计费按成功请求算，不按 token，也不按返回条数：两个接口都是每 1,000 次成功请求 0.75 美元。只有返回 HTTP 200 且有结果才收费，失败、超时和空结果一律免费。每个账号 Search 和 Fetch 各有 5 QPS 的限额，互不占用。通过 DeepSeek Harness、Claude Code 或 Codex 使用 DeepSeek API 时，服务端工具调用本来就走这两个接口，目前免费，北京时间 2026 年 11 月 1 日零点起开始按次计费。

这个价格有多低，对比一下就清楚。Anthropic 和 OpenAI 的 API 内置联网搜索都是每 1,000 次 10 美元，另加搜索内容的 token 费用。HN 上有人列了第三方搜索 API 的价格：Brave 约 5 美元，Kagi 12 美元，Exa 4 美元，SerpApi 1.5 美元。DeepSeek 的定价比这些都低一截。

不过便宜不等于好用。HN 上有人用自己的网页抓取基准测了一下，结论是"很便宜，但搜索和抓取都不算好"；也有人指出 5 QPS 撑不起高并发应用，还有人关心数据留存和内容审查。即便如此，方向已经很明确：模型厂商正在把搜索和抓取做成模型 API 的配套，智能体上网的成本会被一路往下压，Exa、Parallel 这类独立搜索 API 公司的利润空间也会被挤压。

[阅读原文](https://api-docs.deepseek.com/guides/search/)
