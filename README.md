# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## SEO Environment Setup (Vercel)

This project uses `VITE_SITE_URL` to generate:

- canonical URLs
- OpenGraph/Twitter absolute image URLs
- `sitemap.xml` host links

### 1) Set Vercel Environment Variable

In Vercel project settings, add:

- **Name:** `VITE_SITE_URL`
- **Value:** your production origin (for example, `https://yourdomain.com`)
- **Environments:** `Production` (and optionally `Preview` with preview domain)

### 2) Local Development

Create a local env file (not committed):

```bash
# .env.local
VITE_SITE_URL=http://localhost:5173
```

### 3) Build Output Check

Run:

```bash
npm run build
```

Then confirm generated files in `dist/`:

- `sitemap.xml`
- `robots.txt`
