---
title: "OpenAI Details Low Latency Voice AI Architecture at Scale"
excerpt: "OpenAI's engineering team published a deep technical deep-dive on rearchitecting their WebRTC stack with a Relay + Transceiver split architecture to serve real-time voice AI to over 900 million weekly active users."
date: "2026-05-05"
tags: ["OpenAI", "AI-Infrastructure", "WebRTC", "Voice-AI"]
category: "AI Infra"
source: "OpenAI"
---

OpenAI's engineering team published a deep technical post detailing how they rebuilt their real-time voice AI infrastructure to support low-latency voice interactions for over 900 million weekly active users.

The core challenge: the conventional WebRTC model assigns one UDP port per session, which scales poorly in Kubernetes environments. Large port ranges are difficult to secure, load balance, and maintain as pods are added and rescheduled. OpenAI also needed stable session ownership for stateful ICE and DTLS handshakes, plus global routing that keeps first-hop latency low.

The solution is a **Relay + Transceiver** split architecture. The Relay is a lightweight UDP forwarding layer written in Go that parses only the STUN header's ICE ufrag field for routing hints, then forwards packets to the owning Transceiver. The Transceiver is the actual WebRTC endpoint: it owns ICE connectivity checks, DTLS handshakes, SRTP encryption keys, and the full session lifecycle.

The elegance of this design is that the Relay does exactly one thing — route the first packet using a protocol-native routing hook. Subsequent DTLS, RTP, and RTCP packets flow within the established session without further parsing. Relay state is ephemeral and disposable; if a Relay restarts, the next STUN packet rebuilds the session. This makes the Relay horizontally scalable with minimal operational overhead.

OpenAI also deployed **Global Relay**, a fleet of geographically distributed relay ingress points served through Cloudflare's geo and proximity steering. Clients connect to a single stable virtual IP and port, while Global Relay routes media to the nearest transceiver cluster. This dramatically reduces first-hop latency for users worldwide.

On the implementation side, the Relay uses `SO_REUSEPORT` to share a single UDP port across multiple workers on the same machine, pins goroutines to OS threads with `runtime.LockOSThread` for better cache locality, and pre-allocates buffers to minimize garbage collection pressure. These optimizations let the Relay handle global real-time media traffic with a relatively small footprint, without requiring kernel-bypass frameworks.

The post is co-authored by Justin Uberti (original WebRTC architect) and Sean DuBois (creator of the Pion WebRTC library), both now at OpenAI, giving it unique depth in both protocol design and production engineering. For any team building real-time AI voice products, this is essential reading on how to scale voice infrastructure.

[Read the full article](https://openai.com/index/delivering-low-latency-voice-ai-at-scale/)
