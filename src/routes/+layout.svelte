<script>
  import 'modern-normalize/modern-normalize.css'
  import '../../styles/base.scss'

  let { children } = $props()
</script>

<svelte:head>
  <title>Irfan Uraizee: Designer and developer</title>
  <meta
    name="description"
    content="Combining design and programming to build interactive experiences"
  />
  <link rel="canonical" href="https://irfanu.com" />
</svelte:head>

{@render children()}
