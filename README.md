# irfanu.com

This is my personal [portfolio website](https://irfanu.com). It's built using SvelteKit with content managed via Google Docs and Google Sheets.

## Stack

- **SvelteKit**
- **Svelte 5**
- **SCSS**
- **ArchieML**
- **Cloudflare Pages**

## Content pipeline

`utils/fetchData.mjs` pulls from Google docs sources. `npm run dev` fetches it automatically.

## Local development

```bash
npm install
npm run dev     # fetches content, then starts dev server at localhost:5173
```

Other commands:

```bash
npm run download   # fetch content from docs
npm run build      # build
npm run preview    # serve the build directory locally
```

## Deployment

Pushing to `main` triggers a Cloudflare Pages build:

```
npm run download && npm run build
```

## Prerequisites

Node.js ≥ 18
