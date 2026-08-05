---
title: 'Atlassian Rovo 漏洞可静默外泄 Jira 与 Confluence 数据'
excerpt: '安全公司 PromptArmor 披露，Atlassian 企业 AI 助手 Rovo 存在间接提示注入漏洞，可在无需人工确认的情况下将 Jira 工单与 Confluence 文档外泄给攻击者，关闭网页搜索也无法阻止。'
date: "2026-08-06"
tags: ["Security", "Prompt-Injection", "AI-Safety"]
category: "安全与隐私"
source: "PromptArmor"
---

PromptArmor 8 月 5 日披露了 Atlassian Rovo 的严重数据外泄漏洞。攻击链是典型的间接提示注入：受害者上传一份藏有恶意指令的文件（比如网上找来的"Backlog Guide"），再让 Rovo 整理 Jira 工单——Rovo 便会把工单和 Confluence 文档内容拼进攻击者控制的 URL 并自动访问，数据落入对方服务器日志，全程无需任何人工确认。

两个细节值得注意。其一，即使企业关闭了 Rovo 的网页搜索开关，漏洞依然有效——该设置并没有移除"打开搜索结果"的抓取工具。其二，Rovo 还会渲染 AI 输出中的 Markdown 图片，这是另一个经典的外泄通道。

PromptArmor 5 月 23 日就向 Atlassian 披露，对方表示感谢并立案，但两个多月过去仍未修复。HN 讨论指出，这类"上传恶意文件→智能体把私有数据发给外部"的攻击在现代智能体系统上几乎普遍成立，区别只在防护强度——这正是 Cloudflare OS 等新一代平台用"默认零权限 + 策略跟随所见"试图根治的问题。企业级智能体大规模部署后，安全账迟早要还。

[阅读原文](https://www.promptarmor.com/resources/atlassian-rovo-exfiltrates-data)
