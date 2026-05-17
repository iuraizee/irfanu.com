<script>
  let { title, deck, date, children } = $props()

  const formatted = $derived(
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
  )
</script>

<svelte:head>
  <title>{title} — Irfan Uraizee</title>
  <meta name="description" content={deck ?? title} />
</svelte:head>

<article class="post">
  <header class="post-header">
    <h1>{title}</h1>
    {#if deck}<p class="post-deck">{deck}</p>{/if}
    <time datetime={date}>{formatted}</time>
  </header>
  <div class="post-body">
    {@render children()}
  </div>
</article>
