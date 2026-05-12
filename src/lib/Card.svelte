<script>
  import { Loader2 } from 'lucide-svelte'

  let { url, headline, image } = $props()
  let isLoaded = $state(false)
</script>

<div class="card">
  <a href={url} target="_blank" rel="noreferrer">
    <div class="card-container">
      <div class="card-loader" class:hidden={isLoaded}>
        <Loader2 class="spinner" />
      </div>
      <img
        src={image}
        alt={headline}
        onload={() => (isLoaded = true)}
      />
    </div>
    <div class="card-info">
      <p class="card-text">{@html headline}</p>
    </div>
  </a>
</div>
