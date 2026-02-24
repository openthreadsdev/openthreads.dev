---
title: "Why Compliance Work Fails in Spreadsheets"
description: "Spreadsheets feel like the path of least resistance—until an audit lands. Here's why they systematically break down for product compliance."
date: "2024-11-12"
tags:
  - compliance
  - operations
  - data
readingTime: 6
---

## The Default Tool Isn't the Right Tool

Every product team reaches for spreadsheets when compliance comes up. It makes sense: they're flexible, immediate, and everyone knows them. But "everyone knows them" is exactly the problem.

When compliance data lives in a shared spreadsheet, it accumulates three failure modes that compound over time: version drift, ownership blur, and format inconsistency.

## Version Drift

A product record in a spreadsheet has no immutable history. When someone changes a material composition, a safety rating, or a regulatory standard reference—last month's state is simply gone. You might have a backup. You might not. Either way, reconstructing what your record said on a specific date becomes archaeology.

For audit purposes, that's a serious problem. Regulators don't ask what you think you have—they ask what you can prove you had, and when.

## Ownership Blur

Spreadsheets don't have field-level ownership. There's no way to say "the toxicology field is owned by the lab team, not sales." In practice, whoever has edit access can change anything. This creates silent corruption: data that looks authoritative but was updated by someone who didn't know what they were changing.

When you scale past a handful of products, this stops being a process smell and becomes a real compliance risk.

## Format Inconsistency

Ask five people to enter a substance percentage. You'll get: "12%", "12", "0.12", "approx. 12", and "see attached PDF." None of these are wrong in isolation, but they're incompatible. Any downstream tool—export pipeline, certification system, supplier portal—has to make assumptions about what you meant.

Assumptions are where compliance breaks.

## What "Structured" Actually Means

Structured compliance data means: defined fields, validated inputs, typed values, change history, and clear ownership. It's not about the tool—it's about the model.

A spreadsheet can technically hold structured data, but nothing enforces it. Every form interaction, every paste from another tab, every helpful colleague who "just formatted this one column"—they all erode the structure.

## The Upgrade Path

You don't need to replace spreadsheets overnight. Most teams start by identifying the 5–10 fields that actually matter for compliance outputs, formalising those first, and building export pipelines around a consistent schema.

That's the core of what we're building at OpenThreads: tools that make structured compliance data practical for teams that aren't compliance specialists.

## Conclusion

Spreadsheets aren't evil. They're the wrong tool for an accountability problem. Compliance work is fundamentally about traceability—knowing what was true, when, and who said so. That requires structure, not just storage.
