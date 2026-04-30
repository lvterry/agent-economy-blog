---
title: 'Cloudflare 联手 Stripe 推出 Projects 协议 让 Agent 自主完成账号注册域名购买和支付'
excerpt: 'Cloudflare 与 Stripe 联合推出新协议，让 AI Agent 能在无人值守的情况下完成注册 Cloudflare 账号、创建付费订阅、购买域名并获取 API Token 部署应用的全流程。'
date: "2026-04-30"
tags: ["AI-Agents", "Agent-Economy"]
category: "AI 智能体"
source: "Cloudflare"
---

这篇文章让我有点激动。不是因为它技术有多复杂，而是因为它触及了一个根本性的问题：当 AI Agent 真正拥有"身份"和"支付能力"，会发生什么？

Cloudflare 和 Stripe 今天联合发布了一个新协议，核心能力其实很简单：Agent 可以在 Stripe CLI 中通过一条命令，自动完成 Cloudflare 账号注册、支付方式绑定、域名购买、API Token 获取——然后直接部署代码到生产环境。整个过程中，人只需要在关键节点授权（接受条款、确认支付），不需要打开任何一个注册页面，不需要复制粘贴任何 Token。

对 Agent Economy 来说，这是一个信号级别的事件。在此之前，Agent 能写代码、能 debug、能部署，但卡在最后一步：它们没有"法人身份"，付不了钱，注册不了账号。Cloudflare 和 Stripe 做的事，本质上是在为 Agent 建立**经济人格**。

三个关键设计值得关注：

**Discovery（服务发现）。** Agent 通过 `stripe projects catalog` 命令查询可用服务目录。这不是一个静态文档，而是一个机器可读的 API 返回。Agent 可以根据用户的自然语言指令，自主判断需要哪些云服务，然后从目录中选择、下单。人类不需要事先了解 Cloudflare 提供什么产品。

**Authorization（身份与授权）。** Stripe 作为身份提供者，向 Cloudflare 证明用户身份。如果用户邮箱没有 Cloudflare 账号，系统自动创建一个，并把凭据返回给 Agent。如果已有账号，走标准 OAuth 流程。关键在于，Agent 不需要人类去填注册表单——它自己完成了。

**Payment（支付能力）。** 这是最敏感也最巧妙的部分。Agent 拿到的是一个 Stripe 生成的支付 token，而不是用户的信用卡号。Stripe 还为每个供应商设置了每月 100 美元的默认消费上限。Agent 可以花钱，但不能乱花钱。

这个协议的开放程度也值得一提。Stripe 不只是 Cloudflare 的独家合作伙伴，Cloudflare 明确表示：任何有登录用户的平台都可以作为 Orchestrator 接入这套协议。这意味着，编程 Agent、开发者平台、甚至未来的"个人 AI 管家"都可以成为 Agent 获取云服务的入口。

对我来说，这篇公告最让我兴奋的不是某个技术突破，而是它指向了一个方向：**Agent 正在获得参与真实经济活动的基础设施**。这就像互联网早期，支付网关和身份系统的建立让电商成为可能。今天的 Cloudflare × Stripe 协议，可能正在为 Agent 经济铺设同样的底层管道。

[阅读原文](https://blog.cloudflare.com/agents-stripe-projects/)
