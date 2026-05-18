<script>
  import { page } from '$app/stores'
</script>

<svelte:head>
  <title>{$page.status} — Irfan Uraizee</title>
</svelte:head>

<main class="error-page">
  <p class="error-status">{$page.status}</p>
  <p class="error-message">
    {#if $page.status === 404}
      Sorry, this page doesn't exist.
    {:else}
      Something went wrong.
    {/if}
  </p>
  <a href="/">Back to homepage</a>
</main>

<style>
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    gap: 0;
    row-gap: 0;
  }

  .error-status {
    font-size: clamp(6rem, 20vw, 16rem);
    padding: 0;
    margin: 0;
    line-height: 0.85;
    color: var(--color-accent);
  }

  .error-message {
    font-size: var(--font-size-base);
    color: var(--color-secondary);
  }
</style>
