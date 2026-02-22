---
title: "How We Think About Building Threadmark: MVP Scope and Boundaries"
description: "What's in, what's out, and why. A transparent look at how we're scoping Threadmark's first version."
date: "2025-01-22"
tags:
  - threadmark
  - product
  - mvp
readingTime: 7
---

## Why Scope Decisions Matter More Than Feature Lists

Every product team has a feature list. The hard work is deciding what stays off it—and being honest about why.

Threadmark is a compliance data management tool for product-based businesses. The problem space is genuinely large: it touches data modelling, document management, supplier communication, regulatory frameworks across jurisdictions, and integration with ecommerce and ERP systems.

We can't build all of that in version one. Here's how we think about what we're doing first.

## The Core Hypothesis

The fundamental problem we're solving: small and mid-market product businesses can't produce structured, auditable compliance records when asked.

Not because the data doesn't exist—usually it does, scattered across emails, supplier PDFs, and spreadsheets. But it's not in a queryable, exportable, versioned form. When an audit comes, or a large retail partner requests documentation, or a regulatory deadline approaches, the manual work is enormous.

Threadmark's MVP tests one hypothesis: if you give teams a simple, structured way to maintain product compliance records, they'll use it and it'll be worth paying for.

## What's In (v1)

The v1 scope is deliberately narrow:

**Product records**: A structured data model for product compliance information—identity, composition, certifications, regulatory status. Fields are typed and validated. Not a freeform document editor.

**Change history**: Every field change is logged. You can see what the record looked like at any point in time. This is non-negotiable.

**Export**: Generate a clean, structured PDF or JSON export of any record. This is the "moment of truth" for compliance data—it has to be useful to an auditor or partner who doesn't use Threadmark.

**Basic collaboration**: Multiple team members can view and edit records with role-based access. One owner per record, others as editors.

## What's Out (v1)

Explicitly not in v1:

**Supplier portal**: We want suppliers to be able to submit data directly. Not yet—the overhead of building a good supplier UX is high, and we'd rather validate the core data model first.

**Regulation-specific validation**: We don't build "is this product REACH compliant?" checking. We provide the data structure; your team (or your legal advisor) makes the compliance determination.

**ERP/ecommerce integrations**: These come after we know what data model is stable. Integrating too early locks in decisions you haven't validated.

**DPP generation**: We'll add structured export formats aligned to emerging DPP standards once they're sufficiently final to build to.

## The Boundaries We Hold Hard

Two things we won't compromise on:

**We are not a legal service.** Threadmark doesn't tell you whether you're compliant. It helps you maintain the records that let you (and your advisors) make that determination. This isn't a cop-out—it's an honest assessment of what software can and can't do in a regulated domain.

**We don't try to automate compliance decisions.** Regulation is ambiguous, jurisdiction-specific, and changing. Systems that claim to automate compliance decisions are selling certainty they can't deliver. We sell good data infrastructure.

## How We'll Know v1 Works

Success in v1 looks like: teams using Threadmark as their primary place for compliance record management, and successfully producing documentation when audits or partner requests arrive—without a multi-day manual scramble.

If that's true, we'll have validated the hypothesis and can expand scope sensibly.

## Conclusion

Building a focused v1 is harder than it looks. The temptation to add features is constant. We're holding the line by staying close to the core problem: structured, auditable product compliance records. Everything else is later.
