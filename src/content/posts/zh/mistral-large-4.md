---
title: 'Mistral Large 4 开放权重，编程代理多了欧洲选项'
excerpt: 'Mistral 放出 Large 4（Le Chonk）权重：约 1T MoE、主打智能体编程与防御安全；开放可自托管，但 MaaS 需另签商业许可。'
date: "2026-10-30"
tags: ["Mistral", "AI-Models", "Open-Source", "AI-Agents"]
entities: ["Mistral"]
category: "AI 模型"
source: "Mistral"
---

本月初公开预览的 Mistral Large 4（内部绰号 Le Chonk）今天放出了权重。按公司说法，这是约 1 万亿总参数、原生多模态的 Mixture-of-Experts：每 token 约 49B 激活，算上 embedding 与输出层约 52B；128 个 routed expert 里每次开 4 个，外加 1 个 shared expert。训练在欧洲自有机房的约 3800 张 Grace Blackwell 上从零跑完。上下文窗口标到 1M。开放权重这件事本身不稀奇——稀奇的是，它把火力明确压在智能体编程和防御性网络安全上，而且血统写在欧洲。

编码相关数字都来自官方与第三方榜单，不是独立复测。Cognition 的私有榜 FrontierCode 2.0 上，Mistral 报了 19.7%，自称开源权重里领先。Artificial Analysis 的 Coding Agent Index 约 48%，与开源权重里的 GLM-5.3 基本持平，但平均每任务少用约 47% token；Terminal-Bench 4.0 从预览版再抬 13 个百分点到 41%，输出 token 少约 30%。三档推理模式 low / medium / high（默认 high）用来换成本和深度。Surge Code 的盲测偏好里，它压过 GLM-5.3、Kimi K3、DeepSeek V4.1 Flash，仍排在 Claude Opus 5.5 后面。综合「智能」指数上，官方承认西方开源权重里它最高，整体仍落后于部分中国开源模型——它强的是编程和安全，不是全能榜第一。

安全侧同样是自报。Artificial Analysis Cyber Index 约 51%，任务是发现漏洞、复现验证、打补丁且不弄坏原有功能；对恶意网络请求的平均拒答率自称约 96.6%，开源模型里最高。HN 上立刻有人提醒：拒答率 alone 可以靠「几乎什么都拒」刷高，开放权重的护栏也容易被 uncensor。Mistral 自己写得更谨慎：线上流量里见过拒绝对活目标的黑盒攻击，但仍看到真实攻击能力被抬升的可能，护栏还在改；面向 Orange Cyberdefense 等伙伴的渗透测试专用变体，要严格审查，且只能打自有或明确授权的系统。

许可是另一道边界。公司称近似 MIT 的 Mistral Ecosystem Open-Weight License：可免费使用、修改、微调、商用，但有一条硬条件——做 Model-as-a-Service（给第三方当推理或后训练入口）必须另签商业许可。内部自用、嵌进产品功能、转发别人托管的模型，不落在这条里。HN 争论的焦点正是这里：该叫 open weight，还是更诚实的 weights available。对多数想自托管编程代理的团队，差别不大；对打算卖 token 的新云，差别就是生意。API 价今天起是每百万 token 约 $0.70 输入、$0.07 缓存输入、$2.10 输出，权重可从 Hugging Face 拉，用 vLLM 或 SGLang 部署。

对 agent 经济，这篇发布的信息量不在又多一个万亿参数模型。智能体编程要跑得起、改得动、留得下证据链，权重能不能落到自己机房里，往往比榜单差两分更重要——尤其是受监管、不能碰中国开源模型、又不愿把代码库全喂给闭源 API 的组织。欧洲血统、可定制、可自托管，给的是一条主权路线；MaaS 另谈许可，则提醒开放权重并不等于开放供应链上的每一环。前沿编程模型一旦可以装进自己的 harness，稀缺的就不再是「有没有一个能写代码的模型」，而是谁敢把仓库、工具和发版权真正交给它。

[阅读原文](https://mistral.ai/news/mistral-large-4-oss/)
