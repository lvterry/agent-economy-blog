---
title: 'C2PA 相机防伪体系被攻破，Android 最强实现也可伪造'
excerpt: '安全研究员演示了如何绕过 C2PA 相机签名机制，让 AI 生成图片被验证为真实拍摄，且这一漏洞在 Android 上无法通过补丁修复。'
date: "2026-08-26"
tags: ["C2PA", "Security", "Privacy"]
category: "安全与隐私"
source: "David Buchanan"
---

内容凭证（C2PA）一直被当作对抗 AI 伪造的关键基础设施：相机对照片做密码学签名，证明它「真的来自镜头」。安全研究员 David Buchanan 却用一次完整攻击演示证明，这套体系在 Android 上从根上就是坏的，而且无法修复。

C2PA 相机应用依赖 Google 的 Key Attestation 与 Play Integrity 防止篡改，但两者都会被 root 权限提升漏洞击穿。作者刻意攻击最强实现——Pixel 相机应用拿到了 C2PA 符合性最高等级（Assurance Level 2）。借助已在野外流传的一键 root 漏洞（CVE-2026-43499，连完全打补丁的 Pixel 也中招），任何人都能给任意图片生成「真实拍摄」签名，甚至伪造 YouTube 的「相机拍摄」标记。作者指出，LLM 正加速 root 漏洞的发现速度，Google 的补丁节奏已跟不上；旧设备上的硬件故障注入攻击更是无解。

对智能体经济而言，这是一个值得警惕的信号：当 AI 生成的图片与视频即将大规模进入内容与交易流程，把信任押在任何单一签名体系上都可能落空。可被伪造的凭证比没有凭证更危险——它会让下游系统基于假证据做出错误信任决策。

[阅读原文](https://www.da.vidbuchanan.co.uk/blog/android-c2pa.html)
