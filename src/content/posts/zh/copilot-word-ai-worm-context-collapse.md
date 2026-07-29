---
title: 'Copilot for Word 文档蠕虫：AI 助手无法区分指令与数据的架构缺陷'
excerpt: '安全研究员披露文档承载的 AI 蠕虫可在 Microsoft Copilot for Word 中自我传播，即使经历两次修复尝试（含升级至 GPT-5.5）仍未解决——根源在于 LLM 架构无法可靠分离指令与数据。'
date: "2026-07-29"
tags: ["Security", "AI-Safety", "Prompt-Injection", "Microsoft"]
category: "安全与隐私"
source: "En Klype Salt"
---

一名安全研究员披露了 Microsoft Copilot for Word 中的"文档蠕虫"攻击。攻击者将恶意指令以白色文字隐藏于文档中，当用户在 Copilot 中引用该文档时，Copilot 会读取隐藏指令并执行——例如篡改财务报告中的数字——同时将攻击载荷复制到新文档中。这些新文档成为新的传播载体，使攻击可在组织内部持续扩散。

该漏洞于 2026 年 3 月提交给 Microsoft 安全响应中心（MSRC），先后经历两次修复尝试——包括 7 月将底层模型升级至 GPT-5.5——但截至公开披露日，攻击在 GPT-5.6 上仍可复现。研究者在总结中指出，这是一个架构层面的根本问题：LLM 必须处理外部内容才能判断其是否恶意，但当它做出判断时，攻击者的 token 已经参与了产生该判断的计算过程。这"类似于让解释器执行一个不可信程序来判断该程序是否安全执行"。

对智能体经济而言，这意味着任何将 LLM 集成到可信工作流中的系统，都必须假设不可控内容进入模型上下文就会以一定概率导致泄露。当前架构下，指令与数据的分离是一个尚未解决的根本性挑战。

[阅读原文](https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/)
