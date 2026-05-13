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
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://irfanu.com" />
  <meta property="og:title" content="Irfan Uraizee: Designer and developer" />
  <meta
    property="og:description"
    content="Combining design and programming to build interactive experiences"
  />
  <meta property="og:image" content="https://irfanu.com/og.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Irfan Uraizee: Designer and developer" />
  <meta
    name="twitter:description"
    content="Combining design and programming to build interactive experiences"
  />
  <meta name="twitter:image" content="https://irfanu.com/og.jpg" />
</svelte:head>

{@render children()}
