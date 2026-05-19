<script>
  import Card from '$lib/Card.svelte'
  import SocialLinks from '$lib/SocialLinks.svelte'

  let { data } = $props()
  const content = $derived(data.data)
  const projects = $derived(data.projects)
</script>

<main>
  <header>
    <h1 class="visually-hidden">Irfan Uraizee</h1>

    {#each content.intro as element}
      <p>{@html element.value}</p>
    {/each}

    <SocialLinks />
  </header>

  <section>
    <h2>Selected works</h2>

    <div class="card-grid">
      {#each projects as project}
        <Card url={project.url} headline={project.headline} image={project.image} blogUrl={project.blogUrl} />
      {/each}
    </div>
  </section>
</main>
