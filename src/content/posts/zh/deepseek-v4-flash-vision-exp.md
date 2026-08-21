---
title: 'DeepSeek V4 Flash 视觉实验模型上线 多模态补齐'
excerpt: 'DeepSeek 上线 deepseek-v4-flash-vision-exp 视觉实验模型，支持图片描述、截图文字识别与图表分析，图像按尺寸折算 token 计费。低价主力的 Flash 系列补齐多模态，视觉正在成为 API 默认能力。'
date: "2026-08-22"
tags: ["DeepSeek", "Multimodal", "AI-Model"]
category: "AI 模型"
source: "DeepSeek"
---

DeepSeek 上线视觉实验模型 deepseek-v4-flash-vision-exp，API 现在可以同时接收文本与图片：描述图片内容、读取截图里的文字、分析图表都在官方文档的示例之列。支持 JPEG、PNG、GIF、WebP 四种格式，格式按文件内容而非后缀识别。

传图有三种方式：Base64 内联、外链图片 URL、Files API 上传，同时兼容 Responses API 的 input_image 接口，可调 low、high、original 三档细节级别。图片按尺寸折算成 token 与文本一起计费，请求体上限 48 MiB。换句话说，视觉能力被纳入了 DeepSeek 一贯的 token 计价体系，而不是另开高价。

值得注意的不是能力本身，而是它出现在 Flash 这条产品线上。此前 V4 Flash 已凭借低价在 Agent 任务里成为默认选择，如今同一条线补齐多模态，意味着视觉理解也正变成 API 的默认配置而非溢价功能。对做截图解析、文档理解类应用的开发者来说，成本门槛又被压低了一截。

[阅读原文](https://api-docs.deepseek.com/guides/vision/)
