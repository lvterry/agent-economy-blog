---
title: 'Cloudflare 推出 AI 流量三级分类：Search、Agent、Training 独立管控'
excerpt: 'Cloudflare 发布新版 AI 流量管理系统，将自动化流量按用途分为搜索、代理和训练三类，允许所有客户独立管控。新系统还引入「传递信任」机制和 BotBase 机器人目录，重新定义网站所有者对 AI 爬虫的控制权。'
date: "2026-07-26"
tags: ["Cloudflare", "AI-Agents", "Security", "AI-Infrastructure"]
category: "AI Infra"
source: "Cloudflare"
---

Cloudflare 今日发布了一年来最重要的 AI 流量管理更新。在去年推出「一键屏蔽 AI 爬虫」功能后，网站所有者面临的问题已经不再是简单的「屏蔽与否」——搜索、代理、训练三种 AI 爬虫有着截然不同的用途和商业逻辑。

新系统将 AI 流量分为三类：**Search**（搜索索引，应获得回流流量）、**Agent**（代表用户实时操作的代理，如 ChatGPT-User 或 Claude 驱动的浏览器代理）和 **Training**（训练模型的数据采集）。从 2026 年 9 月 15 日起，Cloudflare 将对所有新域名默认屏蔽 Training 和 Agent 流量在广告页面上的访问，而 Search 流量保持允许——因为搜索会为网站带来访客，而训练和代理则不会。

Cloudflare 还提出了一个更前沿的概念——**传递信任**（transitive trust）。当某个代理不是你直接信任的公司运行的（比如一个开发者用 Stripe 的工具搭建了一个周末项目），网站所有者需要知道背后的真实操作者。Cloudflare 利用 RFC 7239 的 Forwarded 头在请求中传递操作者身份，例如 `Forwarded: for="openai";use="reference"`。失去 Cloudflare 的 Verified 状态——意味着被 20% 以上网站域名屏蔽——将成为一种有震慑力的惩罚机制。

这套更新对 AI 代理生态系统有直接影响：任何需要访问互联网的 AI 代理都需要考虑自己的流量分类和身份标识。Cloudflare 正在推动一种「诚实获得更多权限」的网络信任模型，这对 agent-to-web 的交互方式将产生深远影响。

[阅读原文](https://blog.cloudflare.com/content-independence-day-ai-options/)
