---
title: 'Cloudflare 上线 Web Search API 让智能体用实时搜索替代猜测'
excerpt: 'Cloudflare 在 AI Gateway 中上线 Web Search API 测试版，首批接入 Ceramic.ai、Exa、Linkup 三家搜索服务商，承诺零数据留存、不加价转发，试图成为智能体访问实时网络的统一入口。'
date: "2026-10-06"
tags: ["Cloudflare", "AI-Infrastructure", "Agent-Tooling", "RAG"]
category: "AI Infra"
source: "Cloudflare"
---

Cloudflare 为 AI Gateway 上线了 Web Search API 测试版，让智能体和应用可以联网检索、用实时信息校准回答，而不是靠猜测 URL 或依赖模型的训练截止时间。

首批提供三家搜索服务商 Ceramic.ai、Exa 与 Linkup，调用方可以在它们之间自由切换。所有请求都经过 Cloudflare，三家均支持零数据留存，并承诺遵守 Cloudflare 的已验证爬虫标准；检索会出现在 AI Gateway 的日志中，按各服务商标价计费，Cloudflare 不加价，也允许调用方自带密钥。

看点不在搜索本身，而在位置。搜索正在从产品功能变成智能体的基础耗材，谁掌握调用入口，谁就同时握着计费、日志、审计与爬虫合规这几层。Cloudflare 一边用 verified bot 标准向内容方示好，一边把自己摆在模型厂商与搜索服务商之间；对于不希望把每一次检索都直连外部 API 的企业来说，多一层网关反而是可以接受的代价。

真正的变量是议价权。三家搜索商此刻愿意接受零加价，是因为流量比单价更重要；一旦智能体检索成为主流负载，谁在这条链路上定义价格与留存规则，谁就决定了智能体经济里一块基础设施蛋糕的归属。

[阅读原文](https://developers.cloudflare.com/changelog/post/2026-10-02-introducing-web-search-api/)
