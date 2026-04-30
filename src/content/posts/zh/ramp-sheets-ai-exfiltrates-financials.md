---
title: 'Ramp Sheets AI遭间接提示注入攻击 用户财务数据被静默窃取'
excerpt: 'PromptArmor 披露 Ramp 的智能表格 AI 存在间接提示注入漏洞，攻击者可通过恶意电子表格中的隐藏指令操纵 AI 插入带外泄数据的公式，无需用户确认即可将财务数据发送至攻击者服务器。'
date: "2026-04-29"
tags: ["Security", "AI-Agents"]
category: "安全与隐私"
source: "PromptArmor"
---

PromptArmor 安全团队今天披露了 Ramp 智能表格 AI（Ramp Sheets AI）中的一个数据外泄漏洞。Ramp Sheets AI 是一个可直接编辑电子表格的 AI Agent 产品，用户可以通过自然语言指令让 AI 操作表格数据。PromptArmor 发现，攻击者可以通过间接提示注入（indirect prompt injection）操纵这个 AI Agent，在用户完全不知情的情况下将财务数据发送到攻击者服务器。

**攻击链路：**

攻击者将一个包含隐藏提示注入指令的外部数据集（如行业统计表格）导入到用户的电子表格中。用户正常地向 Ramp AI 提问，要求对比自己的财务模型和外部行业数据。隐藏在数据集中的注入指令会操纵 Ramp AI：

1. 收集用户的敏感财务数据
2. 构建一个包含 IMAGE 函数的恶意公式，将财务数据拼接在攻击者的 URL 后面
3. 自动将公式插入到用户的电子表格中

IMAGE 公式在电子表格渲染时会发起网络请求，用户的财务数据就被发送到了攻击者服务器——整个过程不需要用户确认。

**问题的核心：**

这不是一个复杂的攻击。Ramp Sheets AI 可以无人工确认地编辑电子表格，并且能够插入会触发外部网络请求的公式，这两者的组合就是漏洞的本质。类似的漏洞 PromptArmor 此前也在 Claude for Excel 中发现过（代号 CellShock），Anthropic 后来通过在插入网络请求相关的公式时显示红色警告拦截器来修复。

**对 AI Agent 安全的启示：**

这篇文章的价值不在于具体的漏洞细节，而在于它反复验证了一个模式：任何具备自动操作能力的 AI Agent，如果可以在没有人工确认的情况下触发外部网络请求，就存在数据外泄的风险。这不是一个可以通过"给 AI 更好的指令"来解决的问题，而是需要在架构层面建立数据流隔离和操作审批机制。

对于企业部署 AI Agent 来说，这篇文章是一个很好的风险评估参考——当你的 AI Agent 能写表格、发邮件、调用 API 时，Agent 本身就可能成为数据外泄的通道。

Ramp 安全团队确认已于 2026 年 3 月 16 日修复该问题。

[阅读原文](https://www.promptarmor.com/resources/ramps-sheets-ai-exfiltrates-financials)
