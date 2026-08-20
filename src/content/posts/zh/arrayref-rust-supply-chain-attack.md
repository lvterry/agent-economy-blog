---
title: '热门 Rust 库 arrayref 被投毒，编译即触发恶意载荷'
excerpt: 'Rust 生态遭遇供应链攻击：热门 crate arrayref 被植入恶意版本，仅编译依赖它的项目就会在构建期下载并执行远程二进制。'
date: "2026-08-21"
tags: ["Security", "Supply-Chain"]
category: "安全与隐私"
source: "SafeDep"
---

8 月 20 日，安全团队发现 crates.io 上极受欢迎的 Rust 库 arrayref 出现被投毒的版本 0.3.10。该版本悄悄引入了一个仿冒依赖 `proc-macro1`——名字与知名作者 David Tolnay 的 `proc-macro2` 极其相似，元数据甚至伪造了 Tolnay 的身份。恶意代码藏在它的 build script 里：只要编译任何拉取了该版本的项目，构建期就会下载并在后台运行远程二进制，编译本身即是触发条件。

攻击手法相当老练。攻击者先攻陷了维护者 droundy 的账号，还 yank 掉 arrayref 旧版本，用「建议升级」的提示把开发者引向唯一剩下的恶意 0.3.10。arrayref 累计下载量约 2.45 亿次，作为传递依赖深埋在 tiny-skia、winit 等大量 GUI 项目之下，受影响面可能很大。crates.io 已移除恶意版本，RustSec 也发布了公告。

对智能体时代的开发者来说，这起事件值得警惕。AI 编码工具正越来越多地替开发者自动拉取依赖，而构建期代码执行至今仍是生态系统的结构性盲点——社区对 Cargo 构建脚本沙箱化的呼声已久，这次攻击再次证明其紧迫性。供应链信任，依然是智能体经济里最难自动化的环节。

[阅读原文](https://safedep.io/arrayref-proc-macro1-rust-build-time-malware/)
