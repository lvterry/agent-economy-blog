---
title: "Gemini 3.8 Live 能在对话继续时后台调用工具"
excerpt: "Google 的新语音模型把实时对话、视觉理解、并行推理和异步工具调用放进同一条会话，让语音智能体不必等任务结束后才继续交流。"
date: "2026-09-16"
tags: ["Gemini", "Multimodal", "Agent", "Agent-Tooling"]
category: "AI 智能体"
source: "Google"
---

Google 发布了 Gemini 3.8 Live 和面向复杂任务的 Gemini 3.8 Live Extended Thinking。两者都服务于实时语音智能体：普通版强调规模和成本，Extended Thinking 则增加多步推理能力。它们已经开始通过 Gemini API 和 Google AI Studio 提供，企业版本处于私有预览，并陆续进入 Search Live、Gemini Live 与部分 Workspace 产品。

关键变化不是语音听写质量，而是对话与执行可以并行。Gemini 3.8 Live 能在接收近实时视觉信息的同时自动切换 97 种语言，并在后台调用工具和 API；用户继续说话时，任务不必暂停。Extended Thinking 还会在推理和执行多步骤任务时先用简短语句确认请求，再持续报告进度，而不是让用户面对一段没有反馈的等待时间。

Google 公布的结果显示，Extended Thinking 在 τ-Voice 智能体任务上的完成率为 68.6%，在 Sierra 的银行场景版本上为 35.1%，并以 82.6 分位居 Artificial Analysis 语音质量指数首位。EVA-Bench 测试通过 Gemini Enterprise Agent Platform 的 Live API 完成。这些数字来自不同评测体系，能说明语音质量与任务完成正在被同时衡量，但不宜把它们直接理解为所有业务场景中的成功率。

这类模型让语音智能体从轮流问答转向持续协作：它可以一边听取补充信息，一边查询系统、修改预订或生成文件。产品难点也随之改变。后台任务可能与用户的新指令冲突，工具调用涉及的授权、取消、状态同步和错误回滚必须在对话中清楚呈现。Google 为生成音频加入了 SynthID 水印，但真正决定企业能否采用的，仍是异步执行过程是否可观察、可中断并能追责。

阅读完整文章：[https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/)
