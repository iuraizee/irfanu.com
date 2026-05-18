<script>
  let { src, alt = '', caption } = $props()
  let loaded = $state(false)
</script>

<figure class="post-figure">
  <img
    {src}
    {alt}
    class:loaded
    loading="lazy"
    onload={() => (loaded = true)}
  />
  {#if caption}<figcaption>{caption}</figcaption>{/if}
</figure>
