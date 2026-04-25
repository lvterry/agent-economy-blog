---
title: 'Linux 内核发布 AI 编码助手官方指南'
excerpt: 'Linux 内核首次针对 AI 辅助编程制定正式政策：AI 禁止添加 Signed-off-by，人类需承担全部责任。'
date: "2026-04-11"
tags: ["Open-Source", "Linux", "AI-Agents", "Developer-Tools", "Policy"]
source: "Linux Kernel"
---

Linux 内核官方文档新增《Coding Assistants》指南，为使用 AI 工具参与内核开发的开发者提供规范。这是主流开源项目首次针对 AI 辅助编程制定正式政策。

### 核心要求

AI 工具参与 Linux 内核开发必须遵循标准流程：

- 遵循内核开发流程文档 (development-process.rst)
- 遵循编码风格指南 (coding-style.rst)
- 遵循补丁提交规范 (submitting-patches.rst)

### 许可证合规

所有贡献必须符合内核许可证要求：

- 所有代码必须与 GPL-2.0-only 兼容
- 使用适当的 SPDX 许可证标识符

### 关键限制

**AI 智能体禁止添加 Signed-off-by 标签**——只有人类才能合法认证开发者原创声明 (DCO)。人类提交者负责：

- 审查所有 AI 生成的代码
- 确保符合许可证要求
- 添加自己的 Signed-off-by 标签
- 对贡献承担全部责任

### AI 贡献标注

为追踪 AI 在开发过程中的作用，贡献应包含 Assisted-by 标签：

Assisted-by: AGENT_NAME:MODEL_VERSION [TOOL1] [TOOL2]
示例：`Assisted-by: Claude:claude-3-opus coccinelle sparse`

阅读完整文档：[https://github.com/torvalds/linux/blob/master/Documentation/process/coding-assistants.rst](https://github.com/torvalds/linux/blob/master/Documentation/process/coding-assistants.rst)
