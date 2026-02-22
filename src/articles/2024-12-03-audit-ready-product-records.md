---
title: "A Practical Approach to Audit-Ready Product Records"
description: "What does an audit-ready product record actually look like? Walk through the field-by-field requirements that matter."
date: "2024-12-03"
tags:
  - compliance
  - audit
  - product-records
readingTime: 8
---

## Audit-Ready Is Not a State—It's a System Property

Teams often treat "audit-ready" as something you achieve right before an audit. You scramble, gather documents, consolidate spreadsheets, and hope it holds together. This is the wrong model.

Audit-ready is a system property: either your records are continuously maintained in a form that can withstand scrutiny, or they aren't. Audits don't create compliance gaps—they reveal them.

## The Minimum Viable Audit Record

For most regulated physical products (consumer goods, textiles, food-adjacent, industrial), an audit-ready record needs:

### 1. Product Identity

- SKU / internal ID
- Product name (all commercial variants)
- Product category (ideally HS code or equivalent)
- Primary market(s) of sale

### 2. Composition Data

- Material/substance breakdown with percentages
- CAS numbers for regulated substances
- Country of origin for key components
- Supplier reference (name + ID, not just a contact email)

### 3. Test and Certification Records

- Test standard(s) applied (e.g., EN 71, ISO 9001)
- Test date and expiry
- Test body name and accreditation number
- Document reference (link or file hash)

### 4. Regulatory Status

- Applicable regulations (REACH, RoHS, GPSR, etc.)
- Compliance status per regulation
- Declaration of Conformity reference and date
- Responsible Person (EU) or importer of record (US) details

### 5. Change History

- Every field change should be logged with: who changed it, when, old value, new value
- Major revisions (new formulation, new supplier) should trigger a re-certification flag

## Why Change History Is the Hardest Part

Most teams can get identity and composition data into shape. Change history is where systems break. It requires either a database with native audit logging or an explicit workflow process—and most spreadsheet-based systems have neither.

Without change history, you cannot answer the question: "What did your product record say on March 15th?" That question comes up in audits, in disputes with suppliers, and in regulatory enforcement. If you can't answer it, you're in a weak position.

## A Practical Rollout Sequence

Don't try to implement everything at once. A reasonable sequence:

1. **Standardise product identity** (SKUs, categories, markets)
2. **Formalise composition data** (pick a schema, enforce it for all new products)
3. **Centralise test records** (even if just linked documents initially)
4. **Add regulatory status tracking** (per regulation, per product)
5. **Enable change logging** (this is where tooling really helps)

## Conclusion

Audit-ready product records aren't a documentation project—they're a data architecture decision. Get the schema right first. The documentation follows naturally from structured, versioned data.
