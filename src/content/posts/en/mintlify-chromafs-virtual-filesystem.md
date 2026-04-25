---
title: 'Mintlify ChromaFs: Virtual Filesystem for AI Assistants'
excerpt: 'Reduced doc assistant boot time from 46s to 100ms, marginal cost from $0.0137 to $0. Virtual filesystem built on just-bash and Chroma DB.'
date: "2026-04-04"
tags: ["AI-Agents", "Developer-Tools", "AI-Infrastructure", "RAG", "Performance"]
source: "Mintlify"
---

Mintlify shares how they built ChromaFs, a virtual filesystem for their documentation assistant, solving the slow startup and high costs of traditional sandbox approaches.

## Problem Background

Traditional document RAG can only retrieve matching text chunks, failing when answers span multiple pages or require exact syntax. Agents need to explore documentation like exploring a codebase.

But using real filesystem sandboxes has serious issues:

- P90 session creation time: ~46 seconds
- Infrastructure cost for 850K conversations/month: over $70,000/year
- Requires maintaining separate micro-VMs per user

## ChromaFs Solution

Built on Vercel Labs' just-bash, ChromaFs intercepts UNIX commands (grep, cat, ls, find, cd) and translates them into Chroma database queries:

### Performance Comparison

Metric | Sandbox | ChromaFs

P90 Boot Time | ~46 seconds | ~100 milliseconds

Marginal Compute Cost | ~$0.0137/conversation | $0 (reuses existing DB)

Search Mechanism | Linear disk scan | DB Metadata Query

### Key Features

- **Access Control** — Path pruning based on user session tokens before building file tree
- **Chunk Reassembly** — Reconstructs full pages from Chroma chunks sorted by chunk_index
- **Lazy Loading** — Large files (e.g., OpenAPI specs) only fetch from S3 on access
- **Read-Only Protection** — All write operations return EROFS errors, ensuring stateless, no cleanup risk
- **Smart grep** — Chroma coarse filter + Redis cache + in-memory fine filter, completes in milliseconds

ChromaFs now supports 30,000+ conversations daily, providing instant documentation assistant experiences for hundreds of thousands of users.

Read more: [https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant](https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant)
