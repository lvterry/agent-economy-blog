---
title: 'Cactus 把语音识别塞进 16.9 MB，一个二进制从录音直达工具调用'
excerpt: 'Cactus 发布 16.9 MB 的端侧语音模型 Whistle，纯 CPU 运行、首 token 11 毫秒、覆盖七种语言，还能输出语音嵌入。它和 Needle 共用一套 C++ 引擎，两者叠加后一段录音可以直接变成工具调用。'
date: "2026-10-09"
tags: ["Cactus", "Edge-Computing", "AI-Infrastructure", "Multimodal"]
category: "AI Infra"
source: "Cactus"
---

Cactus 又往端侧压了一个模型。Whistle 是一个 16.9 MB 的语音识别模型，单文件、纯 CPU、零依赖，跑在手机、可穿戴设备、机器人、智能家居、车机和微控制器上，和 9 月发布的 Needle 共用同一套 C++ 引擎与量化方案。

它干三件事：转录、词级时间戳、语音嵌入。16 kHz 单声道音频一次最多处理 30 秒，自动识别英语、德语、法语、西班牙语、意大利语、荷兰语和波兰语，首 token 只要 11 毫秒。除文本之外，它还能给出每个词的起止时间与概率，以及不经过解码的编码器输出——每 80 毫秒一行的语音嵌入。

架构上有两处值得看。编码器是 8 层 Simple Attention，注意力非因果，第 3 秒的帧要参考第 12 秒的帧；解码器是 8 层 Laddered Simple Attention，宽度 512，8 个查询头对 2 个 KV 头，配五路束搜索。官方特别说明：标为 shared 的模块直接跑 Needle 的代码，不是复制一份。两个模型共用一个引擎，Cactus 想证明端侧模型能像插件一样往上叠。

真正有意义的是这种组合。Whistle 和 Needle 装在一起，一个二进制就能把一段录音直接变成工具调用，音频全程不出设备。语音是 agent 最自然的输入口，把它放到端侧，绕开的不只是云成本，还有把用户声音送上服务器的隐私问题。

[阅读原文](https://cactuscompute.com/blog/whistle)
