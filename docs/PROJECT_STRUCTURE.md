# PROJECT_STRUCTURE.md

# My Cyber Site - Project Architecture

Version: 1.0

---

# Architecture Philosophy

This project follows a scalable, modular and maintainable architecture.

The primary goals are:

- Clean folder structure
- Reusable components
- Easy maintenance
- Future scalability
- High performance
- Separation of concerns

Every file should have a clear responsibility.

Avoid duplicate code whenever possible.

---

# Root Directory

```

my-cyber-site/

├── public/
├── src/
│
├── README.md
├── PROJECT_CONTEXT.md
├── PROJECT_PROGRESS.md
├── PROJECT_STRUCTURE.md
├── PROJECT_TODO.md
├── CHANGELOG.md
├── DESIGN_SYSTEM.md
├── AI_HANDOFF.md
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── tailwind.config.ts

```

---

# Source Directory

```

src/

├── app/
├── components/
├── hooks/
├── lib/
├── services/
├── utils/
├── types/
├── constants/
├── data/
├── styles/
└── assets/

```

---

# app/

Purpose

Contains all routes using Next.js App Router.

```

app/

layout.tsx

page.tsx

loading.tsx

not-found.tsx

error.tsx

about/

projects/

blog/

contact/

skills/

labs/

writeups/

```

Rules

- One folder per route.
- Keep routing logic inside app/.
- Avoid business logic.

---

# components/

Contains reusable UI components.

```

components/

layout/

navigation/

sections/

cards/

buttons/

forms/

icons/

animations/

common/

ui/

```

Rules

Components should be:

- Reusable
- Typed
- Small
- Independent

---

# components/layout

Contains layout components.

Examples

Navbar

Footer

Sidebar

Header

Breadcrumb

Container

---

# components/sections

Contains page sections.

Examples

Hero

About

Skills

Experience

Projects

Contact

CTA

Testimonials

---

# components/ui

Contains reusable UI.

Examples

Button

Input

Card

Badge

Dialog

Tooltip

Tabs

Accordion

Spinner

Skeleton

Alert

---

# hooks/

Custom React Hooks.

Examples

useTheme()

useScroll()

useWindowSize()

useLocalStorage()

---

# lib/

Reusable libraries.

Examples

Metadata

SEO

Analytics

Markdown

Utilities

Configuration

---

# services/

External services.

Examples

GitHub API

Email Service

CMS

Search

RSS

---

# utils/

Utility functions.

Examples

formatDate()

slugify()

cn()

capitalize()

---

# constants/

Project constants.

Examples

Navigation

Routes

Social Links

Site Config

Theme Config

---

# data/

Static project data.

Examples

Projects

Skills

Experience

Timeline

Certificates

Blogs

---

# styles/

Global styles.

Examples

globals.css

animations.css

utilities.css

---

# assets/

Local assets.

Examples

Fonts

Illustrations

SVG

Logos

---

# public/

Contains static assets.

```

public/

images/

icons/

logos/

resume/

robots.txt

favicon.ico

site.webmanifest

```

---

# Naming Convention

Folders

lowercase

Examples

```

about

projects

skills

```

---

Components

PascalCase

Examples

```

Hero.tsx

Navbar.tsx

Footer.tsx

ProjectCard.tsx

```

---

Hooks

camelCase

Examples

```

useTheme.ts

useScroll.ts

```

---

Utility Files

camelCase

Examples

```

formatDate.ts

slugify.ts

```

---

Types

PascalCase

Examples

```

Project.ts

Skill.ts

```

---

CSS Files

lowercase

Examples

```

globals.css

animations.css

```

---

# Import Order

Always follow:

1.

React

2.

Next.js

3.

Third-party packages

4.

Components

5.

Hooks

6.

Utilities

7.

Types

8.

Styles

---

# Component Rules

Each component should:

Have one responsibility.

Receive typed props.

Avoid unnecessary state.

Remain reusable.

Avoid duplicated logic.

---

# File Size Guidelines

Component

Less than 250 lines when practical.

Page

Less than 300 lines when practical.

Utilities

Keep focused.

Split large files.

---

# Reusability Rules

Never duplicate UI.

Extract reusable parts.

Prefer composition over duplication.

---

# State Management

Prefer:

React State

↓

Context API

↓

External libraries only when necessary.

Avoid unnecessary global state.

---

# Styling Rules

Use Tailwind CSS.

Avoid inline styles.

Keep spacing consistent.

Reuse utility classes.

---

# Animation Rules

Animations should:

Improve UX

Be smooth

Not distract users

Remain performant

---

# Performance Rules

Lazy load heavy components.

Optimize images.

Reduce bundle size.

Avoid unnecessary rerenders.

---

# Security Rules

Never expose secrets.

Never hardcode credentials.

Validate user inputs.

Use secure defaults.

---

# Accessibility Rules

Semantic HTML.

Keyboard navigation.

Proper headings.

ARIA where necessary.

Readable contrast.

---

# Documentation Rules

Whenever architecture changes:

Update this file.

Keep folder descriptions accurate.

Document important changes.

---

# Long-Term Principle

The architecture should remain understandable even after years of development.

Every folder, file and component should have a clear purpose.

The project should scale naturally without becoming difficult to maintain.