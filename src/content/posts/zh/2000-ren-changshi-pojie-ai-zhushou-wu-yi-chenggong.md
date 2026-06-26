---
title: '2000 人尝试破解 AI 助手，无一成功'
excerpt: '一位开发者将 AI 助手设为攻击靶标，开放给所有人尝试提示注入。2000 多人发送了 6000 多封邮件，但秘密文件始终未被泄露。'
date: "2026-06-26"
tags: ["Prompt-Injection", "AI-Safety", "Security", "AI-Agents"]
category: "安全与隐私"
source: "Fernando Irarrázaval"
---

Fernando Irarrázaval 构建了一个名为 Fiu 的 AI 助手，基于 OpenClaw 框架运行，并公开了它的邮箱地址。规则很简单：任何人只要能通过邮件诱使 Fiu 泄露 secrets.env 文件的内容，就算成功。

结果令人意外。超过 2000 名参与者发送了 6000 多封邮件，尝试了各种手段——冒充管理员、伪造紧急事件、使用多种语言、甚至发送了 Anthropic 的魔法字符串触发拒绝机制。但 Fiu 始终没有泄露机密。实验使用了 Claude Opus 4.6，Anthropic 特别针对提示注入攻击进行了防御训练。作者表示，一个极简的防御指令加上强大的模型，效果远超他的预期。

不过实验也暴露了现实问题：Google 因异常流量暂停了 Fiu 的 Gmail 账号，API 成本超过 500 美元，批量处理中的上下文污染也影响了实验设计。作者总结说，提示注入仍是真实的安全威胁，但强大模型的防御能力比他预想中要可靠得多。

[阅读原文](https://www.fernandoi.cl/posts/hackmyclaw/)
