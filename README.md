# irfanu.com

This is my personal [portfolio website](https://irfanu.com). It's built using SvelteKit with content managed via Google Docs and Google Sheets. Blog posts are markdown files in `blog/`.

## Stack

- **SvelteKit**
- **Svelte 5**
- **mdsvex**
- **SCSS**
- **ArchieML**
- **Cloudflare Pages**

## Content pipeline

`utils/fetchData.mjs` pulls from Google docs sources. `npm run dev` fetches it automatically.

## Blog posts

Posts live as markdown files in `blog/`. Each file needs frontmatter:

```md
---
title: Post title
deck: A short subtitle
date: 2026-01-01
---

Post content here.
```

The filename becomes the URL slug: `blog/my-post.md` → `/blog/my-post`.

### Embedding media

To embed a video or image, import the component in a `<script>` block at the top of the file:

```md
<script>
  import Video from '$lib/Video.svelte'
  import Image from '$lib/Image.svelte'
</script>

<Video src="/blog/videos/my-clip.mp4" />

<Image src="/blog/images/my-photo.jpg" alt="Description" caption="Optional caption" />
```

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
