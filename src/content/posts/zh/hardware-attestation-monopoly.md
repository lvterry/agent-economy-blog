---
title: "硬件认证正在成为垄断工具"
excerpt: "Apple 和 Google 以安全为名推广硬件认证，实际上正在锁死操作系统竞争。GrapheneOS 的安全团队揭示了 Play Integrity 与 App Attest 背后的反竞争本质。"
date: "2026-05-11"
tags: ["Security", "Privacy", "Tech-Industry"]
category: "安全与隐私"
source: "GrapheneOS"
---

Apple 和 Google 正在逐步扩大硬件认证（hardware attestation）的使用范围，说服越来越多的服务采用它。Google 的 Play Integrity API 和 Apple 的 App Attest API 极为相似。Apple 已通过 Privacy Pass 将硬件认证带到网页端，Google 也在 follow 同样的路线。

GrapheneOS 团队在一篇广为传播的分析中指出，这套机制的真实目的并非安全，而是锁死硬件与操作系统层面的竞争。Play Integrity API 要求硬件认证才能获得"强完整性"级别，并逐步将其扩展到更常用的"设备完整性"级别。长期来看，这将越来越有效地将非 Apple 或非 Google 认证的硬件和操作系统排除在外。

银行和政府服务是当前主要的采用者，但 Apple 和 Google 正在鼓励所有服务都使用这套系统。更值得关注的是，Google 的 reCAPTCHA Mobile Verification 正在将硬件认证要求扩展到桌面端——用户需要通过经过认证的智能手机扫码才能通过某些 reCAPTCHA 验证。这实质上意味着，如果 Google 决定扩大范围，使用 Windows、Linux 或 FreeBSD 的用户可能被大量网站拒之门外。

GrapheneOS 本身就是一个有力的反例：它是一个比任何 Google 认证的 Android 版本都安全得多的操作系统，却被 Play Integrity API 禁止使用。而 Google 认证的 Android 设备即使十年没有安全补丁也被允许通过。这表明 Play Integrity 不是安全机制，而是 Google 通过 GMS 授权条款执行垄断的工具。

这不是一个操作系统特有的问题。即使你使用基于 FreeBSD 的移动操作系统，同样会被锁在外面。在政府层面，欧盟正在带头将 Apple App Attest 和 Google Play Integrity 纳入数字支付、身份认证和年龄验证的强制要求，这直接参与了锁定竞争，而不是保护用户安全。

[阅读原文](https://grapheneos.social/@GrapheneOS/116550899908879585)
