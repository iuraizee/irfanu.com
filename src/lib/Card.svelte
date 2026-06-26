<script>
  import { Loader2, ArrowRight } from 'lucide-svelte'

  let { url, headline, image, video = null, blogUrl = null } = $props()
  let isLoaded = $state(false)
  let videoEl = $state(null)

  // Render video over poster image once its ready for playback and in view
  $effect(() => {
    if (!video || !image) return
    const poster = new Image()
    poster.onload = () => (isLoaded = true)
    poster.src = image
  })

  $effect(() => {
    if (!videoEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {})
        } else {
          videoEl.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(videoEl)
    return () => observer.disconnect()
  })
</script>

<div class="card">
  <a href={url} target="_blank" rel="noreferrer">
    <div class="card-container">
      <div class="card-loader" class:hidden={isLoaded}>
        <Loader2 class="spinner" />
      </div>
      {#if video}
        <video
          bind:this={videoEl}
          src={video}
          poster={image}
          muted
          loop
          playsinline
          preload="metadata"
        ></video>
      {:else}
        <img
          src={image}
          alt={headline}
          loading="lazy"
          onload={() => (isLoaded = true)}
        />
      {/if}
    </div>
    <div class="card-info">
      <p class="card-text">{@html headline}</p>
    </div>
  </a>
  {#if blogUrl}
    <div class="card-blog">
      <a href={blogUrl}>About this project <ArrowRight class="arrow-right" /></a>
    </div>
  {/if}
</div>
