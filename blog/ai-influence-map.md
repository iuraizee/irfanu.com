---
title: Building the AI Influence Map
deck: The workflow and tech behind my data visualization project for Bloomberg Government.
date: 2026-05-08
---

<script>
  import Video from '$lib/Video.svelte'
</script>

<Video src="/posts/videos/aiim-topper.mp4" />

This project began with an ambitious goal: to build a comprehensive database of the people, organizations, financial flows, and influence networks shaping AI policy, and to visualize the connections between them.

Months of research, analysis, and data collection from a mix of public and proprietary data sources culminated in our relational database. From there, I started designing the network visualization, building high-fidelity mockups and prototypes in Figma. I explored JS libraries built specifically for network visualizations like Cytoscape.js, but settled on D3.js for the control it gives you at a low level.

### Tech stack

- Vue & Vite: frontend
- D3: force-directed graph
- Postgres: database
- Node.js: backend

<Video src="/posts/videos/aiim-walkthrough.mp4" />

## The challenge

The project needed to plot a complex web of connections between hundreds of people and organizations without feeling visually overwhelming. I focused on:
- Visual clarity: Highlighting the most connected nodes to guide users and make interactive elements immediately obvious 
- Ease of use: Implementing a Voronoi overlay around each node to create a larger hoverable and clickable target area 
- Responsive design: Building an experience that feels robust and intuitive across devices and screen sizes 
- Performance: Rendering the graph on Canvas rather than SVG to handle hundreds of nodes efficiently and ensuring D3 only emits tick events that are absolutely necessary

## What's next?

The [AI Influence Map](https://news.bgov.com/bloomberg-government-news/the-web-of-tech-power-fighting-to-shape-the-future-of-ai-policy) is an ongoing project. Version 1.0 focuses on 25 of the largest companies spanning the full AI ecosystem, but the next goal is to expand the visualization and its universe of connections.

<Video src="/posts/videos/aiim-interaction.mp4" />