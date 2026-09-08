---
title: 'Meta 把个人智能体装进了一台专属云电脑'
excerpt: 'Meta 发布个人智能体 Muse，用独立云端虚拟机运行浏览器与长期任务，并接入 WhatsApp、Stripe Link 和细粒度授权；它把个人智能体竞争推进到执行环境、支付与信任体系。'
date: "2026-09-09"
tags: ["Agent", "AI-Agents", "Computer-Use", "Security", "Privacy"]
category: "AI 智能体"
source: "Meta"
---

Meta 于 9 月 8 日发布个人 AI 智能体 Muse，开始在美国通过 iOS、Android 和 muse.ai 推出，也可直接在 WhatsApp 中交谈，之后还会进入 AI 眼镜。Muse 由面向智能体任务的 Muse Spark 模型驱动，能够打开浏览器、填写表单、发送邮件、预订旅行和协商价格；用户关闭应用后，较长任务仍会继续运行，遇到变化或需要发送邮件、付款等敏感操作时再回来请求批准。

Muse 试图把聊天助手变成一套持续执行系统。它会记住用户曾提及的信息，主动提出建议，并将 Instagram 中收藏的食谱转成购物清单等行动。支付环节接入 Stripe Link：智能体使用一次性卡号结账，符合条件的购买可获得丢失、损坏、降价及退货保障；Shop Pay 和 1Password 支持也在计划中。产品多数用途免费，更高用量将通过订阅提供。

更关键的部分是运行环境。每位用户的 Muse 都住在一台带浏览器的专属云端虚拟机中，数据与连接服务的凭据也保存在那里；与 Muse 在系统层隔离的 Sentinel 智能体负责审核所有出网操作，并在必要时征求用户许可。Meta 称 Muse 看不到密码和支付信息，用户可以分别授予邮件读取或发送权限，查看完整操作记录，随时断开服务、删除记忆或退出模型训练，虚拟机数据也不会进入广告系统。

这些设计说明，个人智能体的竞争已经超出模型能力：谁能提供长期运行的电脑、身份与支付接口、审批机制和广泛分发渠道，谁才可能承接真实事务。Meta 同时拥有 WhatsApp、Instagram 与大规模消费用户入口，但智能体越有用，就越需要获得更多账户和生活数据。Hacker News 的讨论因此主要集中在隐私信任与自动购买风险；这些是用户评论中的担忧，也正是 Muse 的安全架构能否被市场接受的实际考验。

阅读完整文章：[https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)

Hacker News 讨论：[https://news.ycombinator.com/item?id=49615537](https://news.ycombinator.com/item?id=49615537)
