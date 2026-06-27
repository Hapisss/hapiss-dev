# TECH.md

# Technical Stack

Framework

* Next.js (App Router)

Language

* TypeScript (Strict Mode)

Styling

* Tailwind CSS

---

# Engineering Principles

Prioritize:

* Simplicity
* Readability
* Maintainability
* Scalability

Avoid unnecessary abstractions.

---

# Component Philosophy

Prefer:

* Small components
* Reusable components
* Predictable APIs
* Single responsibility

Avoid giant components.

---

# Server vs Client

Prefer Server Components.

Only use Client Components when interaction requires them.

---

# Folder Organization

Organize by feature whenever practical.

Separate:

* UI
* Content
* Business Logic
* Utilities

Avoid dumping everything into one folder.

---

# Data Strategy

Version 1 may use hardcoded content.

However:

* separate content from UI
* prepare for CMS
* avoid hardcoded values inside components whenever practical

---

# Performance Goals

Target:

* Lighthouse Performance > 90
* Accessibility > 90
* Best Practices > 90
* SEO > 90

Optimize:

* Images
* Fonts
* Bundle size
* Rendering strategy

---

# Code Standards

Avoid:

* Magic numbers
* Dead code
* Duplicate logic
* Unused imports
* Inline business logic

Write self-explanatory code.

---

# Dependencies

Never install a dependency without approval.

Prefer native browser or framework capabilities before adding packages.

---

# Git

Keep commits focused.

One logical change per commit.

Avoid mixing unrelated changes.

---

# Future CMS

The project should be CMS-ready.

When building features:

* separate content
* isolate presentation
* make future API integration straightforward

Do not implement a CMS until requested.
