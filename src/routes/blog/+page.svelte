<script>
  let { data } = $props()

  function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
  }
</script>

<svelte:head>
  <title>Blog — Irfan Uraizee</title>
</svelte:head>

<main class="posts-index">
  <header class="posts-header">
    <h1>Blog</h1>
    <p>Writing a few words about my projects and whatever else I find interesting.</p>
  </header>
  <ul class="posts-list">
    {#each data.posts as post}
      <li class="posts-item">
        <a href="/blog/{post.slug}">
          <time datetime={post.date}>{formatDate(post.date)}</time>
          <h2>{post.title}</h2>
          {#if post.deck}<p class="posts-deck">{post.deck}</p>{/if}
        </a>
      </li>
    {/each}
  </ul>
</main>
