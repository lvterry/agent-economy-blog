---
title: 'ChatGPT 和 Codex 开始共用额度'
excerpt: 'OpenAI 将从 12 月起让 Plus、Pro 与 Business 的 ChatGPT 与 Codex 共用 token 额度，订阅里的绕路用法会被一并收紧。'
date: "2026-11-02"
tags: ["OpenAI", "ChatGPT", "AI-Agents"]
entities: ["OpenAI"]
category: "行业动态"
source: "OpenAI"
---

OpenAI 在帮助中心写明：从 12 月起，Plus、Pro 与 Business 的用量额度将跨 ChatGPT 与 Codex 共用，按 token 计量；选什么模型、任务多复杂，都会直接影响消耗速度。Instant 聊天不计入。用完可等重置、升级，或买额度；进度与重置时间在 Settings → Usage。官方说「预期多数人不必比现在更常等重置」——这是预期，不是测量结果；各档到底给多少 token，也还没公布。

配套邮件把产品叙事写得更完整：Chat 与 Work 会并成同一体验，方便从想法一路做到交付；Codex 在桌面端仍单独存在。共用额度被说成「统一体验」的一部分。对许多订户，真正变的是用法，不是界面。过去 Plus / Pro 常见模式是：Codex 跑满代理写代码，聊天侧几乎另算——规划、查资料、审 diff，甚至把仓库连进普通 Chat 做审查，都不怎么碰 Codex 额度。合并之后，这条旧路径关了。有人已经在普通 Chat 里靠 GitHub 连接器改文件，就是冲着「不吃 Codex 额度」去的；这类绕路会被一并收紧。

HN 上反响很直白。有人说自己留在 ChatGPT，就是因为聊天与 Codex 解耦，Anthropic 那边一撞墙，闲聊也一起断；也有人承认自己一直在用「准无限聊天」扛编码，并把合并看成堵漏洞。还有人指出，近几周个人资料页已经开始出现聊天的 Token activity，数字还会上下改写，计量本身就不透明。两边其实说的是同一条经济逻辑：订阅卖的是一个不透明额度池，用户自然会找更便宜的入口烧 token；实验室一旦觉得补贴撑不住，就把入口并回去。和 Anthropic 收紧周限额是同一条弧线——神秘盒子越来越严。演示期结束之后，留下的是更清楚的计价摩擦。

对 agent 经济，这件事刺痛的不是「又少一点免费算力」。今天的典型工作流本来就是：聊天里规划与研究，Codex 或 Claude Code 里落地。把两者绑进同一配额，等于逼人在「烧完代理」和「还能不能问一句」之间做取舍，也逼人重新算账——第二家订阅、按量 API，或开源权重，往往比在同一家从低档直接跳到高档更划算。OpenAI 自己也给过「intelligence too cheap to meter」一类说法；现在连已经付到一百、两百美元的人，闲聊也要和代理抢额度。额度一旦合并，稀缺的就不再是有没有一个聊天窗口，而是谁还愿意把规划、编码和长任务全押在同一份账单上。

[阅读原文](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits)
