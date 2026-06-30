# DEVELOPMENT_RULES.md

# My Cyber Site - Development Rules

Version: 1.0

Status: Active

---

# Purpose

This document defines the engineering standards, coding conventions, and development workflow for the project.

Every new feature should follow these rules.

These rules exist to maintain consistency, readability, scalability and long-term maintainability.

---

# General Principles

Always prefer:

- Clean Code
- Simple Solutions
- Readability
- Reusability
- Scalability
- Security
- Performance
- Accessibility

Never sacrifice long-term quality for short-term convenience.

---

# Development Philosophy

Before writing code always ask:

Can this be reused?

Can this be simplified?

Will this still make sense in two years?

Would another developer immediately understand it?

If the answer is "No", redesign the solution.

---

# Code Quality Rules

Always write:

- Production Ready Code
- Typed Code
- Modular Code
- Self-explanatory Code

Avoid:

- Duplicate Logic
- Hardcoded Values
- Large Components
- Deep Nesting
- Unused Variables
- Console Logs in Production

---

# File Naming

Folders

lowercase

Examples

components

projects

skills

---

React Components

PascalCase

Examples

Navbar.tsx

Hero.tsx

ProjectCard.tsx

---

Hooks

camelCase

Examples

useTheme.ts

useScroll.ts

---

Utilities

camelCase

Examples

formatDate.ts

slugify.ts

---

Types

PascalCase

Examples

Project.ts

Blog.ts

---

Constants

UPPER_SNAKE_CASE

Examples

SITE_CONFIG.ts

NAV_LINKS.ts

---

# Folder Rules

Each folder should have a single responsibility.

Never mix unrelated code.

Keep architecture modular.

Avoid unnecessary nesting.

---

# React Rules

Prefer:

Functional Components

React Hooks

Composition

Avoid:

Class Components

Prop Drilling when unnecessary

Overusing useEffect

---

# TypeScript Rules

Never use:

any

Prefer:

interface

Readonly types

Proper typing

Typed props

Strict mode compatibility

---

# Tailwind Rules

Prefer utility classes.

Avoid inline styles.

Maintain spacing consistency.

Group related classes.

Use reusable utilities.

---

# Component Rules

Each component should:

Have one responsibility.

Remain reusable.

Be easy to test.

Have typed props.

Avoid unnecessary state.

---

# State Management

Priority

Local State

↓

Context API

↓

External Library (only if necessary)

Avoid global state unless required.

---

# Import Order

1 React

2 Next.js

3 Third-party Packages

4 Components

5 Hooks

6 Utilities

7 Constants

8 Types

9 Styles

---

# Error Handling

Always:

Handle loading state.

Handle error state.

Handle empty state.

Provide helpful messages.

Never fail silently.

---

# Forms

Every form should include:

Validation

Clear Labels

Error Messages

Keyboard Accessibility

Loading State

Success State

---

# API Rules

Validate responses.

Handle errors.

Avoid duplicate requests.

Never expose secrets.

Keep requests typed.

---

# Security Rules

Never hardcode:

Passwords

API Keys

Secrets

Tokens

Private URLs

Always validate user input.

Sanitize data.

Escape output where necessary.

Follow least privilege principles.

---

# Accessibility Rules

Use semantic HTML.

Maintain keyboard support.

Use visible focus states.

Add meaningful labels.

Ensure readable contrast.

---

# SEO Rules

Every page must include:

Title

Description

Canonical URL

Open Graph

Twitter Card

Structured Data (when appropriate)

---

# Performance Rules

Prefer Server Components.

Use Client Components only when necessary.

Optimize images.

Lazy load heavy components.

Avoid unnecessary rerenders.

Reduce bundle size.

---

# Responsive Rules

Mobile First.

Desktop Friendly.

Tablet Optimized.

No horizontal scrolling.

Flexible layouts.

---

# Animation Rules

Animations should:

Feel natural.

Improve UX.

Remain smooth.

Never block interaction.

Avoid excessive effects.

---

# Git Rules

Commit often.

Keep commits small.

Use meaningful messages.

Push stable code.

Never commit secrets.

---

# Commit Message Style

Examples

feat: add hero section

fix: resolve mobile navbar issue

refactor: simplify project card

docs: update project documentation

style: improve button spacing

perf: optimize image loading

---

# Documentation Rules

Whenever something changes:

Update documentation.

Update changelog.

Update progress tracker.

Keep all documentation synchronized.

---

# Testing Checklist

Before marking a task complete:

Works on Desktop

Works on Mobile

Responsive

No TypeScript Errors

No ESLint Errors

No Console Errors

Good Performance

Accessible

SEO Friendly

---

# Pull Request Checklist

Even for personal development:

Review code.

Remove unused imports.

Format code.

Check responsiveness.

Update documentation.

Verify Git status.

---

# AI Development Rules

Whenever AI generates code:

Provide complete implementation.

Mention file path.

Mention create or replace.

Include dependencies.

Include commands when required.

Explain important decisions briefly.

Avoid incomplete snippets unless specifically requested.

---

# Long-Term Principle

Write code for the future.

The goal is not only to make the project work today.

The goal is to ensure the project remains understandable, maintainable and scalable for years.