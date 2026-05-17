<script>
  let { data } = $props()
</script>

<svelte:head>
  <title>Posts — Irfan Uraizee</title>
</svelte:head>

<main class="posts-index">
  <ul class="posts-list">
    {#each data.posts as post}
      <li class="posts-item">
        <a href="/posts/{post.slug}">
          <h2>{post.title}</h2>
          {#if post.deck}<p class="posts-deck">{post.deck}</p>{/if}
          <time datetime={post.date}>{post.date}</time>
        </a>
      </li>
    {/each}
  </ul>
</main>
