# Website Engineering Standards

> **Version:** 1.0  
> **Scope:** All websites built in this repository and future projects  
> **Audience:** Developers, reviewers, and maintainers  
> **Last Updated:** March 2026

---

## Table of Contents

1. [Purpose of the Engineering Standard](#1-purpose-of-the-engineering-standard)
2. [Core Development Principles](#2-core-development-principles)
3. [Standard Project Structure](#3-standard-project-structure)
4. [Page Architecture](#4-page-architecture)
5. [Routing Guidelines](#5-routing-guidelines)
6. [Design System Rules](#6-design-system-rules)
7. [Theme System](#7-theme-system)
8. [SEO Architecture](#8-seo-architecture)
9. [Performance Engineering](#9-performance-engineering)
10. [Component Engineering Standards](#10-component-engineering-standards)
11. [Content Management](#11-content-management)
12. [Accessibility Standards](#12-accessibility-standards)
13. [Deployment Standards](#13-deployment-standards)
14. [Version Control Workflow](#14-version-control-workflow)
15. [Engineering Rules (Project Law)](#15-engineering-rules-project-law)
16. [Project Initialization Template](#16-project-initialization-template)

---

## 1. Purpose of the Engineering Standard

This document is the **authoritative reference** for building websites within this organization. Every project—whether a portfolio site, a SaaS product, or an internal tool—must follow these standards.

### What This Document Ensures

- **Consistent architecture.** Every project shares the same directory layout, naming conventions, and code organization so that any developer can onboard quickly.
- **Maintainable codebases.** Code is written for the next reader. Patterns are predictable, logic is separated from presentation, and duplication is eliminated.
- **Scalable websites.** The architecture supports growth—from a five-page portfolio to a content-heavy platform—without requiring rewrites.
- **Predictable project structure.** Every repository follows the same skeleton. A developer who opens any project immediately knows where to find pages, components, styles, and data.
- **High performance.** Pages load fast. Bundles are small. Images are optimized. Performance budgets are enforced.
- **Strong SEO foundations.** Every page is crawlable, has correct metadata, and follows structured data best practices from day one.

### The Goal

Make every project follow the same engineering principles regardless of framework, team size, or deployment target. This document is the single source of truth.

---

## 2. Core Development Principles

Every technical decision must be evaluated against these principles, listed in order of priority.

### 2.1 Simplicity

Write the simplest code that solves the problem. Avoid premature abstraction. If a utility function is used once, inline it. If a component has one consumer, co-locate it.

### 2.2 Maintainability

Code is read far more often than it is written. Use clear names. Keep functions short. Favor explicit over implicit. Leave the codebase better than you found it.

### 2.3 Performance-First Design

Performance is not an afterthought—it is a design constraint. Lazy-load routes, optimize images at build time, defer non-critical scripts, and monitor bundle size on every pull request.

### 2.4 SEO-First Development

Every page must be crawlable with correct metadata before it ships. SEO is not a polish step; it is a requirement in the definition of done.

### 2.5 Accessibility Compliance

Websites must be usable by everyone. Semantic HTML is the default. Interactive elements must be keyboard-navigable. Color contrast must meet WCAG 2.1 AA standards.

### 2.6 Reusable Components

Build components that can be composed, configured, and reused. A component should do one thing and do it well. Shared behavior belongs in composables or hooks, not copy-pasted across files.

### 2.7 Separation of Concerns

Presentation, logic, and data each have a designated place. Pages compose components. Components render UI. Composables and services manage state and side effects. Data files export static content.

---

## 3. Standard Project Structure

Every project must follow this directory layout. Framework-specific naming may vary (e.g., `composables/` in Vue, `hooks/` in React), but the responsibilities remain the same.

```
src/
  assets/          # Static assets: images, icons, fonts
  components/      # Reusable UI components
  layouts/         # Page layout shells (header, footer, sidebar)
  pages/           # Route-level view components
  router/          # Route definitions and navigation guards
  composables/     # Shared reactive logic (Vue) or hooks (React)
  services/        # API clients, external service integrations
  utils/           # Pure utility functions (formatting, validation)
  styles/          # Global styles, theme variables, TailwindCSS config
  data/            # Static data files (projects, blog posts, metadata)

docs/              # Documentation, case studies, engineering standards

public/            # Files served as-is: favicon, robots.txt, OG images
  image/
  resume/

scripts/           # Build scripts, generators (sitemap, RSS, etc.)
```

### Directory Responsibilities

| Directory      | Purpose                                       | Rules                                                               |
| -------------- | --------------------------------------------- | ------------------------------------------------------------------- |
| `assets/`      | Images, SVGs, fonts bundled by the build tool | Use descriptive filenames. Organize into subdirectories by feature. |
| `components/`  | Reusable UI elements                          | One component per file. No route-specific logic.                    |
| `layouts/`     | Page wrappers that provide shared chrome      | Must accept a content slot or children. No business logic.          |
| `pages/`       | Route-level components                        | One per route. Compose components—do not contain complex logic.     |
| `router/`      | Route configuration                           | Centralized. Lazy-load heavy routes. Include route metadata.        |
| `composables/` | Shared stateful logic                         | Must be framework-idiomatic (Vue composables, React hooks).         |
| `services/`    | External integrations                         | API calls, authentication, analytics. No UI code.                   |
| `utils/`       | Pure functions                                | No side effects. Fully testable without mocks.                      |
| `styles/`      | Global CSS, theme tokens                      | No component-scoped styles here—those live with the component.      |
| `data/`        | Content and configuration data                | TypeScript or JSON files exporting typed collections.               |
| `docs/`        | Human-readable documentation                  | Markdown only. Versioned alongside code.                            |
| `public/`      | Static files served at root                   | robots.txt, favicons, OG images, downloadable assets.               |
| `scripts/`     | Build-time tooling                            | Node scripts. Must work with `node scripts/<name>.mjs`.             |

---

## 4. Page Architecture

### 4.1 Pages

Pages are **route-level components**. They correspond 1:1 with a route in the router configuration.

**Rules:**

- A page must not contain heavy business logic. It should compose components and invoke composables.
- A page is responsible for calling the SEO composable (`useSeo` or equivalent) with the correct metadata for that route.
- A page may fetch data on mount, but the fetch logic should live in a composable or service.

```
pages/
  Home.vue
  Projects.vue
  Contact.vue
  blog/
    BlogPost.vue
  case-studies/
    GISPropertyDigitizationPlatform.vue
```

### 4.2 Components

Components are **reusable UI building blocks**. They receive data through props and emit events—they do not own state beyond local UI state (e.g., a dropdown's open/closed status).

**Rules:**

- Components must not call APIs directly.
- Components must not access the router or route params directly; pass those values via props.
- Components must not define their own SEO metadata.

### 4.3 Layouts

Layouts are **page wrappers** that manage global UI: headers, footers, navigation, sidebars, and theme providers.

**Rules:**

- Layouts must render a slot or children for page content.
- A project has one primary layout. Additional layouts (e.g., `AuthLayout`, `DashboardLayout`) are used for distinct sections.
- Layouts must not contain page-specific logic.

### 4.4 Hierarchy

```
Layout
  └── Page
        ├── Component A
        ├── Component B
        │     └── Component C (nested)
        └── Component D
```

---

## 5. Routing Guidelines

### 5.1 Lazy Loading

All routes except the landing page should be lazy-loaded to reduce the initial bundle.

```ts
// Eager — landing page
{ path: "/", name: "home", component: Home }

// Lazy — everything else
{
  path: "/case-studies/gis-property-digitization-platform",
  name: "GISPropertyDigitizationPlatform",
  component: () => import("@/pages/case-studies/GISPropertyDigitizationPlatform.vue"),
}
```

### 5.2 Route Metadata

Every route should include a `meta` object for SEO, access control, or layout configuration.

```ts
{
  path: "/projects",
  name: "projects",
  component: () => import("@/pages/Projects.vue"),
  meta: {
    title: "Projects",
    description: "A portfolio of engineering projects.",
    requiresAuth: false,
  },
}
```

### 5.3 Naming Conventions

| Convention         | Example                                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| Route paths        | lowercase, hyphen-separated: `/case-studies/erp-business-management-system`                         |
| Route names        | camelCase or PascalCase matching the page component: `"blog-post"`, `"ERPBusinessManagementSystem"` |
| Param-based routes | Use descriptive param names: `/blog/:slug`, `/projects/:id`                                         |

### 5.4 Nested Routing

Use nested routes for sections that share a layout or parent context.

```ts
{
  path: "/blog",
  children: [
    { path: "", name: "blog", component: BlogList },
    { path: ":slug", name: "blog-post", component: BlogPost },
  ],
}
```

### 5.5 Scroll Behavior

Always restore scroll position on back/forward navigation. Reset to top on new navigations.

```ts
scrollBehavior(_to, _from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }
  return { top: 0 };
}
```

### 5.6 Route Transitions

Use CSS transitions between route changes for perceived performance. Keep transitions fast (150–250ms). Never block navigation waiting for a transition to complete.

---

## 6. Design System Rules

### 6.1 Typography

- Use a maximum of **two typefaces**: one for headings, one for body text. A single typeface with weight variation is preferred.
- Define a **type scale** and stick to it. Do not create arbitrary font sizes.
- Minimum body font size: **16px** (`1rem`).
- Use relative units (`rem`, `em`) for font sizes to respect user preferences.

### 6.2 Spacing

- Use a **consistent spacing scale** based on a 4px baseline grid: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`.
- TailwindCSS utilities (`p-4`, `mt-8`, `gap-6`) map to this grid by default. Use them.
- Never use magic numbers for margins or padding.

### 6.3 Grid Systems

- Use CSS Grid for page-level layouts.
- Use Flexbox for component-level alignment.
- Standard page grid: **12 columns** with responsive breakpoints.
- Content grids for cards and listings: use `auto-fill` / `auto-fit` with `minmax` for fluid behavior.

### 6.4 Containers

- All page content must be wrapped in a **max-width container** (e.g., `max-w-7xl mx-auto px-4`).
- Full-bleed sections break out of the container explicitly.

### 6.5 Cards

- Cards are self-contained content blocks with a consistent structure: image (optional), title, description, actions.
- Cards must have consistent border-radius, padding, and shadow across the project.
- Cards must be responsive—stacking vertically on small screens.

### 6.6 Buttons

- Define button variants: **primary**, **secondary**, **outline**, **ghost**, **destructive**.
- All buttons must have visible focus states.
- Minimum tap target: **44×44px** on touch devices.
- Button text must be descriptive—avoid "Click here."

### 6.7 Navigation

- Primary navigation must be accessible via keyboard.
- Mobile navigation must use a hamburger or drawer pattern with clear open/close affordances.
- The current page must be visually indicated in the navigation.

### 6.8 Forms

- Every input must have an associated `<label>`.
- Error messages must appear inline, adjacent to the field.
- Forms must be keyboard-navigable in logical tab order.
- Disable submit buttons while a request is in flight to prevent double submission.

### 6.9 Mobile-First Responsive Design

Design for the **smallest screen first**, then progressively enhance.

```css
/* Mobile-first with TailwindCSS */
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**Breakpoints (TailwindCSS defaults):**

| Prefix | Min Width | Typical Target |
| ------ | --------- | -------------- |
| `sm`   | 640px     | Large phones   |
| `md`   | 768px     | Tablets        |
| `lg`   | 1024px    | Laptops        |
| `xl`   | 1280px    | Desktops       |
| `2xl`  | 1536px    | Large screens  |

### 6.10 TailwindCSS Best Practices

- Use utility classes directly in templates. Avoid `@apply` except in base layer resets or components rendered from markdown.
- Extract component classes into components, not into CSS files.
- Use TailwindCSS theme configuration for project-wide tokens (colors, fonts, spacing extensions).
- Purge unused styles automatically via the build pipeline (Tailwind v3+ and v4 handle this by default).

---

## 7. Theme System

### 7.1 Light and Dark Mode

Every project must support **light and dark themes**. Dark mode is the default unless the project specifies otherwise.

### 7.2 Implementation Pattern

Use a composable (or hook) to manage theme state:

```ts
// composables/useTheme.ts
import { ref, onMounted } from "vue";

const theme = ref("dark");

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", theme.value === "dark");
    localStorage.setItem("theme", theme.value);
  };

  onMounted(() => {
    const saved = localStorage.getItem("theme") || "dark";
    theme.value = saved;
    document.documentElement.classList.toggle("dark", saved === "dark");
  });

  return { theme, toggleTheme };
}
```

### 7.3 Theme Persistence

- Store the user's theme preference in `localStorage` under a consistent key (e.g., `"theme"`).
- On initial load, read the stored preference. If none exists, respect the system preference via `prefers-color-scheme` or fall back to the project default.
- Apply the theme class to `<html>` **before first paint** to prevent flash of unstyled content (FOUC). For SSR or static builds, inject a blocking `<script>` in the `<head>`:

```html
<script>
  (function () {
    var t = localStorage.getItem("theme");
    if (
      t === "dark" ||
      (!t && matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  })();
</script>
```

### 7.4 Color Tokens

- Never hardcode color values in components. Use TailwindCSS theme colors or CSS custom properties.
- Define semantic color tokens: `--color-bg-primary`, `--color-text-primary`, `--color-accent`.
- Map tokens to light and dark values via TailwindCSS `dark:` variant or CSS custom properties scoped to `.dark`.

---

## 8. SEO Architecture

### 8.1 Metadata Requirements

Every page must set the following metadata before it renders:

| Tag                                 | Purpose                                           | Required |
| ----------------------------------- | ------------------------------------------------- | -------- |
| `<title>`                           | Browser tab and search result title               | Yes      |
| `<meta name="description">`         | Search result snippet                             | Yes      |
| `<meta name="keywords">`            | Keyword hints (low SEO weight, but good practice) | Optional |
| `<link rel="canonical">`            | Canonical URL to prevent duplicate content        | Yes      |
| `<meta property="og:title">`        | OpenGraph title for social sharing                | Yes      |
| `<meta property="og:description">`  | OpenGraph description                             | Yes      |
| `<meta property="og:image">`        | OpenGraph image (min 1200×630px)                  | Yes      |
| `<meta property="og:url">`          | OpenGraph canonical URL                           | Yes      |
| `<meta property="og:type">`         | Content type (`website`, `article`)               | Yes      |
| `<meta name="twitter:card">`        | Twitter card type (`summary_large_image`)         | Yes      |
| `<meta name="twitter:title">`       | Twitter card title                                | Yes      |
| `<meta name="twitter:description">` | Twitter card description                          | Yes      |
| `<meta name="twitter:image">`       | Twitter card image                                | Yes      |

### 8.2 SEO Composable

Use a centralized composable like `useSeo` to set all metadata consistently:

```ts
useSeo({
  title: "GIS Property Digitization Platform — Case Study",
  description: "How we modernized land records using GIS technology.",
  keywords: ["GIS", "property digitization", "case study"],
  image: "/image/case-studies/gis-og.png",
  canonicalPath: "/case-studies/gis-property-digitization-platform",
  structuredData: {
    /* JSON-LD */
  },
});
```

### 8.3 Structured Data

Use **JSON-LD** for structured data. Common schemas:

- `WebSite` — on the homepage
- `Person` or `Organization` — on about pages
- `Article` or `BlogPosting` — on blog posts
- `BreadcrumbList` — on pages with hierarchical navigation
- `Project` or `SoftwareApplication` — on project pages

Inject structured data via the SEO composable, which outputs `<script type="application/ld+json">` tags in the `<head>`.

### 8.4 Sitemap

- Generate a sitemap automatically at build time using a plugin (e.g., `vite-plugin-sitemap`) or a custom script.
- Include all public, indexable routes.
- Exclude authentication pages, admin pages, and redirects.

### 8.5 robots.txt

- Place `robots.txt` in the `public/` directory.
- Allow indexing of all public content.
- Reference the sitemap URL.

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 9. Performance Engineering

### 9.1 Image Optimization

- Use modern formats: **WebP** or **AVIF** with fallbacks.
- Specify `width` and `height` attributes on all `<img>` tags to prevent layout shift.
- Use responsive images with `srcset` and `sizes` for resolution switching.
- Compress images at build time. Target quality: 75–85% for photographs, lossless for icons/SVGs.
- Serve SVGs for icons and illustrations. Do not use icon fonts.

### 9.2 Lazy Loading

- Apply `loading="lazy"` to all images below the fold.
- Lazy-load route components (see [Section 5.1](#51-lazy-loading)).
- Defer third-party scripts (analytics, chat widgets) until after initial render.

### 9.3 Code Splitting

- Split code at **route boundaries**. Each route should produce its own chunk.
- Large libraries used in a single route must remain in that route's chunk, not the shared bundle.
- Monitor chunk sizes. No single JavaScript chunk should exceed **250 KB** (uncompressed).

### 9.4 Route-Based Bundles

The build tool (Vite) automatically creates route-based bundles when dynamic imports are used:

```ts
component: () => import("@/pages/case-studies/MATALAS.vue");
```

Verify bundle composition using `npx vite-bundle-visualizer` or equivalent.

### 9.5 Font Optimization

- Self-host fonts. Do not rely on external CDNs for critical fonts.
- Use `font-display: swap` to prevent invisible text during font load.
- Subset fonts to include only used character ranges.
- Preload critical fonts:

```html
<link
  rel="preload"
  href="/fonts/inter-var.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

### 9.6 Performance Targets

| Metric                             | Target        |
| ---------------------------------- | ------------- |
| Largest Contentful Paint (LCP)     | ≤ 2.5 seconds |
| First Input Delay (FID)            | ≤ 100 ms      |
| Cumulative Layout Shift (CLS)      | ≤ 0.1         |
| Time to Interactive (TTI)          | ≤ 3.5 seconds |
| Total Bundle Size (JS, compressed) | ≤ 200 KB      |
| Lighthouse Performance Score       | ≥ 90          |

---

## 10. Component Engineering Standards

### 10.1 Single Responsibility

Each component does **one thing**. A `ProjectCard` renders a project card. It does not fetch projects, manage routing, or handle form submissions.

### 10.2 Reusability

Components must be designed for reuse. Accept configuration through props. Emit events for parent communication. Avoid tight coupling to a specific page or data shape.

### 10.3 No Business Logic in UI Components

Business logic—data fetching, state management, complex transformations—belongs in **composables** (Vue), **hooks** (React), or **services**. UI components receive processed data and render it.

```
❌ Component fetches data from an API
✅ Page calls composable → passes data to component via props
```

### 10.4 Composables and Hooks

Shared logic must be extracted into composables or hooks:

- `useSeo()` — SEO metadata management
- `useTheme()` — theme toggling and persistence
- `useBreakpoint()` — responsive behavior in script logic
- `usePagination()` — pagination state

### 10.5 Naming Conventions

| Element           | Convention                             | Example                            |
| ----------------- | -------------------------------------- | ---------------------------------- |
| Components        | PascalCase, descriptive nouns          | `ProjectCard.vue`, `BlogCard.vue`  |
| Composables       | camelCase, prefixed with `use`         | `useSeo.ts`, `useTheme.ts`         |
| Pages             | PascalCase, matching the route concept | `Home.vue`, `BlogPost.vue`         |
| Layouts           | PascalCase, suffixed with `Layout`     | `MainLayout.vue`, `AuthLayout.vue` |
| Utility functions | camelCase, verb-first                  | `formatDate()`, `slugify()`        |
| Data files        | camelCase or kebab-case                | `projects.ts`, `blog-posts.ts`     |
| CSS classes       | kebab-case (TailwindCSS utilities)     | `text-lg`, `mt-4`                  |

### 10.6 File Organization

- One component per file.
- Co-locate related files: `BlogCard.vue` lives in `components/blog/`.
- Group components by feature or domain, not by type.

---

## 11. Content Management

### 11.1 Content Structure

Content is stored as **typed data objects** in the `data/` or `blog/` directories. Each content type has its own file or directory.

```
src/
  data/
    projects.ts       # Array of project objects
  blog/
    index.ts          # Blog post registry
    posts/
      my-first-post.ts
```

### 11.2 Content Types

| Type             | Location                                    | Format                                    |
| ---------------- | ------------------------------------------- | ----------------------------------------- |
| Blog posts       | `src/blog/posts/`                           | TypeScript objects with structured fields |
| Project listings | `src/data/projects.ts`                      | TypeScript array of typed objects         |
| Case studies     | `docs/case-studies/` and/or dedicated pages | Markdown or Vue components                |
| Documentation    | `docs/`                                     | Markdown                                  |

### 11.3 Blog Content Schema

Every blog post must include:

```ts
{
  slug: string;            // URL-safe identifier
  title: string;           // Display title
  description: string;     // Short summary (used in meta and cards)
  date: string;            // ISO 8601 date
  author: string;
  tags: string[];
  content: string;         // Full post body (HTML or Markdown)
  image?: string;          // Cover image path
}
```

### 11.4 Markdown-Driven Content

For documentation and case studies, use Markdown rendered at build time or runtime:

- Store `.md` files in `docs/` or `src/content/`.
- Use a Markdown plugin (e.g., `vite-plugin-md`, `@nuxt/content`, or a custom remark/rehype pipeline) to render Markdown as components.
- Support frontmatter for metadata:

```markdown
---
title: GIS Property Digitization Platform
description: A case study on modernizing land records.
date: 2025-10-15
---
```

### 11.5 Content Guidelines

- Use clear, scannable headings (H2, H3 hierarchy).
- Keep paragraphs short (3–5 sentences).
- Use bullet lists for scannable information.
- Include alt text for all images.
- Use code blocks with language identifiers for syntax highlighting.

---

## 12. Accessibility Standards

### 12.1 Semantic HTML

Use the correct HTML element for every piece of content. Semantic elements convey meaning to assistive technologies.

| Content       | Element                                                             |
| ------------- | ------------------------------------------------------------------- |
| Page sections | `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>` |
| Headings      | `<h1>` through `<h6>` in order (no skipping levels)                 |
| Lists         | `<ul>`, `<ol>`, `<li>`                                              |
| Actions       | `<button>` for actions, `<a>` for navigation                        |
| Forms         | `<form>`, `<label>`, `<input>`, `<fieldset>`, `<legend>`            |
| Images        | `<img>` with `alt` attribute                                        |

### 12.2 ARIA Labels

- Use `aria-label` or `aria-labelledby` on elements that lack visible text (e.g., icon buttons).
- Use `aria-expanded` on toggles (mobile nav, accordions).
- Use `aria-live` for dynamic content updates (toasts, error messages).
- Do **not** use ARIA to replicate what semantic HTML already provides.

### 12.3 Keyboard Navigation

- All interactive elements must be focusable and operable with a keyboard.
- Focus order must follow the logical reading order.
- Provide visible focus indicators (`outline`, `ring`) on all interactive elements. Never apply `outline: none` without an alternative.
- Trap focus inside modals and drawers when open.

### 12.4 Color Contrast

- Text and interactive elements must meet **WCAG 2.1 AA** contrast ratios:
  - Normal text: **4.5:1** minimum
  - Large text (18px+ or 14px+ bold): **3:1** minimum
- Do not use color alone to convey information. Provide text labels or icons alongside.

### 12.5 Screen Reader Compatibility

- Test with at least one screen reader (NVDA, VoiceOver, or JAWS).
- Hide decorative images from assistive technologies with `alt=""` and `aria-hidden="true"`.
- Ensure single-page application route changes announce the new page title to screen readers.

---

## 13. Deployment Standards

### 13.1 Build Process

Every project must have a reproducible build:

```bash
npm run build
```

The build command must:

1. Run type checking (e.g., `vue-tsc`, `tsc`).
2. Bundle the application (e.g., `vite build`).
3. Generate static assets (sitemap, service worker, etc.).

Example from this repository:

```json
"build": "vue-tsc -b && vite build && node scripts/generate-sitemap.mjs"
```

### 13.2 Environment Variables

- Store environment-specific values in `.env` files (`.env`, `.env.production`, `.env.local`).
- **Never commit secrets** to version control. Add `.env.local` to `.gitignore`.
- Prefix client-side variables with the framework's required prefix (e.g., `VITE_` for Vite).
- Document all required environment variables in a `.env.example` file.

### 13.3 Preview Environments

- Every pull request should generate a **preview deployment** (Vercel preview URLs, Netlify deploy previews, or equivalent).
- Preview deployments must use production-like settings (minification, optimized images) to catch build issues early.

### 13.4 Production Builds

Production deployment checklist:

- [ ] All type checks pass.
- [ ] Build completes without warnings.
- [ ] Sitemap is generated and lists all public routes.
- [ ] robots.txt is present and correct.
- [ ] Environment variables are set in the hosting platform.
- [ ] SPA fallback is configured (e.g., Vercel `rewrites` for client-side routing):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

- [ ] HTTPS is enforced.
- [ ] Cache headers are configured for static assets.

### 13.5 Hosting Platforms

The following platforms are supported and recommended:

| Platform             | Use Case                                                   |
| -------------------- | ---------------------------------------------------------- |
| **Vercel**           | SPAs, SSR, hybrid sites. Preferred for Vue/React projects. |
| **Netlify**          | Static sites, JAMstack applications.                       |
| **Cloudflare Pages** | Edge-deployed static and SSR sites.                        |

---

## 14. Version Control Workflow

### 14.1 Branch Strategy

```
main       → Production. Always deployable.
develop    → Staging / integration. Receives feature merges.
feature/*  → Individual features or tasks.
fix/*      → Bug fixes.
hotfix/*   → Critical production fixes (branch from main).
```

### 14.2 Branch Rules

- `main` is protected. No direct pushes.
- All changes enter `main` via pull request from `develop` or `hotfix/*`.
- Feature branches are short-lived—merge within days, not weeks.
- Delete branches after merging.

### 14.3 Commit Message Standards

Follow the **Conventional Commits** specification:

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

**Types:**

| Type       | Purpose                                  |
| ---------- | ---------------------------------------- |
| `feat`     | New feature                              |
| `fix`      | Bug fix                                  |
| `docs`     | Documentation only                       |
| `style`    | Code style (formatting, no logic change) |
| `refactor` | Code restructuring (no feature or fix)   |
| `perf`     | Performance improvement                  |
| `test`     | Adding or updating tests                 |
| `chore`    | Tooling, dependencies, CI configuration  |

**Examples:**

```
feat(blog): add blog post card component
fix(seo): correct canonical URL for case study pages
docs: update engineering standards with theme guidelines
chore(deps): upgrade vite to v7.3
```

### 14.4 Pull Request Standards

- PRs must have a **descriptive title** following commit conventions.
- PRs must include a **summary** of what changed and why.
- PRs must pass all CI checks (type check, lint, build) before merging.
- Use squash merges to keep `main` history clean.

---

## 15. Engineering Rules (Project Law)

These rules are non-negotiable. Every developer, every commit, every review must enforce them.

### Layout and Styling

1. **No inline CSS.** All styling must use TailwindCSS utility classes or scoped component styles.
2. **All pages must be responsive.** Every page must render correctly from 320px to 2560px screen width.
3. **No hardcoded colors.** Use design tokens, TailwindCSS theme colors, or CSS custom properties.
4. **No magic numbers for spacing.** Use the spacing scale.

### SEO and Metadata

5. **All pages must include SEO metadata.** Title, description, OpenGraph, Twitter card, and canonical URL are required on every route.
6. **All images must have alt text.** No exceptions.
7. **Structured data must be included** where applicable (homepage, blog posts, about page).

### Architecture

8. **Components must be reusable.** If a component is used in only one place and cannot be reused, it should be inlined in the page or justified in a code review.
9. **Avoid duplication of logic.** If the same logic appears in two or more places, extract it into a composable, hook, or utility function.
10. **Pages must not contain business logic.** Delegate to composables and services.
11. **One component per file.** No multi-component files.

### Performance

12. **Lazy-load all non-critical routes.** Only the landing page route may be eagerly loaded.
13. **Images must be optimized.** Use WebP/AVIF, specify dimensions, and lazy-load below-the-fold images.
14. **Monitor bundle size.** No single JS chunk may exceed 250 KB uncompressed.

### Accessibility

15. **Use semantic HTML.** No `<div>` soup. Use `<nav>`, `<main>`, `<section>`, `<article>`, `<button>`, and `<a>` correctly.
16. **All interactive elements must be keyboard-accessible.** Test tab order and focus states.
17. **Color contrast must meet WCAG AA.** Verify with a contrast checker tool.

### Code Quality

18. **No `any` types in TypeScript.** Use proper types or `unknown` with type guards.
19. **No console.log in production code.** Use a logging utility or remove debug statements before merging.
20. **All code must pass type checking and linting** before merge.

### Version Control

21. **No direct pushes to `main`.** All changes go through pull requests.
22. **Commit messages must follow Conventional Commits.**
23. **Delete merged branches.** Keep the repository clean.

---

## 16. Project Initialization Template

When creating a new project, the following steps must be followed.

### Step 1 — Initialize Project

Choose stack:

- Vue + Vite
- React + Vite
- Next.js
- Static site generator

### Step 2 — Setup Base Structure

Create directories:

src/
components/
pages/
layouts/
composables/
services/
utils/
styles/
data/
router/

docs/
public/
scripts/

### Step 3 — Install Core Dependencies

Example (Vue):

npm install vue-router
npm install tailwindcss
npm install @vueuse/core
npm install @unhead/vue

### Step 4 — Configure

• TailwindCSS  
• Router  
• SEO composable  
• Theme system

### Step 5 — Setup Tooling

Install:

- ESLint
- Prettier
- TypeScript
- Husky (optional)

---

## Appendix: Quick Reference Checklist

Use this checklist when starting a new project or auditing an existing one.

- [ ] Project structure follows Section 3.
- [ ] All pages have SEO metadata (Section 8).
- [ ] Light/dark theme is implemented and persisted (Section 7).
- [ ] All routes except the landing page are lazy-loaded (Section 5).
- [ ] Images are optimized and have alt text (Sections 9, 12).
- [ ] Semantic HTML is used throughout (Section 12).
- [ ] Keyboard navigation works on all interactive elements (Section 12).
- [ ] robots.txt and sitemap are present and correct (Section 8).
- [ ] Build command runs cleanly with no errors (Section 13).
- [ ] Environment variables are documented in `.env.example` (Section 13).
- [ ] Commit messages follow Conventional Commits (Section 14).
- [ ] Lighthouse performance score ≥ 90 (Section 9).

---

_This is a living document. Update it as standards evolve. All changes must be reviewed and approved via pull request._
