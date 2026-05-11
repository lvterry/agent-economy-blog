---
title: "Hardware Attestation as Monopoly Enabler"
excerpt: "Apple and Google are pushing hardware attestation in the name of security, but GrapheneOS's analysis reveals Play Integrity and App Attest are fundamentally anti-competitive tools that lock out OS competition."
date: "2026-05-11"
tags: ["Security", "Privacy", "Tech-Industry"]
category: "安全与隐私"
source: "GrapheneOS"
---

Apple and Google are steadily expanding their use of hardware-based attestation, convincing a growing number of services to adopt it. Google's Play Integrity API and Apple's App Attest API are strikingly similar. Apple has already brought hardware attestation to the web via Privacy Pass, and Google is following the same trajectory.

In a widely circulated analysis, the GrapheneOS team argues that the real purpose of these systems isn't security — it's locking out hardware and OS competition. Google's Play Integrity API requires hardware attestation for the "strong integrity" level and is phasing it in for the more commonly used "device integrity" level as well. Over the long term, this will increasingly deny access to devices and operating systems not approved by Apple or Google.

Banking and government services are the primary adopters today, but Apple and Google are encouraging every service to use it. More concerningly, Google's reCAPTCHA Mobile Verification is extending hardware attestation requirements to the desktop — users need to scan a QR code with a certified smartphone to pass certain reCAPTCHA checks. If expanded further, this means Windows, Linux, and FreeBSD users could be locked out of vast portions of the web.

GrapheneOS itself is the sharpest contradiction: it's far more secure than any Google-certified Android build, yet Play Integrity bans it outright. Meanwhile, Android devices with no security patches for ten years are permitted. This isn't about security — it's about enforcing monopolies through GMS licensing terms.

This isn't specific to any one OS. Even a FreeBSD-based mobile OS would face the same lockout. At the government level, the EU is leading the charge in mandating Apple App Attest and Google Play Integrity for digital payments, identity verification, and age verification — directly participating in locking out competition rather than protecting users.

[Read the full article](https://grapheneos.social/@GrapheneOS/116550899908879585)
