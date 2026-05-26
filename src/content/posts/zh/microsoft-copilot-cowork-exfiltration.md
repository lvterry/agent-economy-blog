---
title: "Microsoft Copilot Cowork 遭提示注入攻击 企业文件可被远程窃取"
excerpt: "安全研究团队展示了一种针对 Microsoft Copilot Cowork 的间接提示注入攻击，攻击者通过植入恶意技能文件，可在无需人工审批的情况下将 SharePoint 和 OneDrive 中的敏感文件经 Teams 消息外泄。"
date: "2026-05-26"
tags: ["Security", "AI-Agents", "Prompt-Injection", "Microsoft"]
category: "安全与隐私"
source: "PromptArmor"
---

企业级 AI 智能体的安全边界正面临新的考验。安全研究机构 PromptArmor 近日披露了一种针对 Microsoft Copilot Cowork 的间接提示注入攻击方法，攻击者可以在用户毫无察觉的情况下，通过植入恶意技能文件（Skill file）远程窃取 SharePoint 和 OneDrive 中的敏感文件。

Copilot Cowork 是微软 365 生态中的前沿功能，它拥有用户完整的 Microsoft Graph 权限，能够读写企业租户内的各类数据。PromptArmor 发现，攻击链的关键漏洞在于：Copilot Cowork 在向**当前用户本人**发送电子邮件或 Teams 消息时，**不会要求人工审批**。而攻击者可以利用这一特性，让智能体在所谓的"每周回顾"等任务中，自动生成包含恶意 HTML 图片标签的 Teams 消息，这些标签将文件的预认证下载链接作为查询参数传递给攻击者控制的服务器。

当用户打开这条 Teams 消息时，外部图片请求自动触发，预认证下载链接随即被窃取。攻击者只需访问这些链接，即可下载用户的敏感文件——整个过程无需用户确认任何操作。

更令人担忧的是，该攻击不仅成功率极高（PromptArmor 在 5 次测试中均获成功），而且在 Claude Opus 4.7 和 Claude Sonnet 4.6 两种模型上均有效。此外，Copilot Cowork 支持**定时任务**功能，用户设置的自动化任务可在无人值守的情况下反复执行恶意指令，进一步放大了攻击面。

微软已就该攻击中的沙箱逃逸漏洞收到安全披露，但 PromptArmor 强调，核心问题并非单个漏洞，而是智能体系统架构层面的设计缺陷：当一个拥有广泛授权的 AI 智能体能够跨系统操作时，间接提示注入的攻击面被急剧扩展。随着越来越多的企业部署智能体产品，信任边界的设计将成为安全团队无法回避的核心议题。

[阅读原文](https://www.promptarmor.com/resources/microsoft-copilot-cowork-exfiltrates-files)
