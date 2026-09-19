---
title: '社区用开源模型复现了 Jev 的决策接口，还把它塞进了浏览器'
excerpt: '独立项目 SemIf（原名 OpenJev）跑一次前向传播就直接读出选项概率，不生成任何 token。浏览器 demo 显示 4B 本地模型在公开子集上达到 84.5%，接近 Jev 公布的 88.3%，而 0.6B 只有 40.7%。'
date: "2026-09-19"
tags: ["AI-Model", "Agent-Tooling", "Open-Source"]
category: "AI 模型"
source: "SemIf"
---

TypeSafe 上周开放 Jev 时给出的判断很明确：模型不必再写文字，只要在开发者预先定义好的选项上给出带概率的类型安全决策。三天后，社区给出了一个开源对照物。

独立开发者 TheoLeeCJ 的项目 SemIf（原名 OpenJev）复现的就是这个接口形态。它不做解码，而是跑一次前向传播，直接读出允许选项 token 的 logits 并归一化，整个过程不写出任何字符。仓库明确声明复现的是接口模式，不是 Jev 未公开的模型与训练，也与 TypeSafe 无关；发布三天拿到 1.7k star。

openjev.com 上的浏览器 demo 更直观：权重通过 wllama 与 WebGPU 在本地运行，Qwen3 0.6B、MiniCPM5 2B、Qwen3.5 4B 三档可选，输入不离开页面，还能同场比较“直接读 logits”与“逐 token 写出 JSON 概率”两条路径的耗时。官方给出的 TypeSafe 公开子集等例一致率分别为 40.7%、63.7% 与 84.5%，Jev 公布值为 88.3%。同一时间线上，ekzhang 的 openjev-sglang 用只做 prefill 的 Qwen3.6-35B-A3B 搭出 Jev 兼容 API，vLLM 也出现了把 DiffusionGemma 改造成 Jev 的补丁。

两点需要留意。直接读出的概率只是显示选项上的 softmax，并不等于校准置信度；0.6B 档的分差也说明，决策函数这条路并不因为模型小就自动成立。更值得记下的是 HN 上的质疑：如果本质只是约束输出格式，它和 structured outputs 的区别究竟在哪里。共识还没形成，但接口一旦被定义清楚，复现速度本身就说明了它的吸引力。

[阅读原文](https://openjev.com/)
