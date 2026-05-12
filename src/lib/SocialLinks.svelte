<script>
  const links = [
    { href: 'mailto:iuraizee@gmail.com?subject=Hi Irfan!', title: 'Email' },
    { href: 'https://github.com/iuraizee', title: 'Github' },
    { href: 'https://www.linkedin.com/in/irfanuraizee/', title: 'LinkedIn' },
  ]
</script>

<div class="links">
  {#each links as link}
    <a class="link-item" href={link.href} target="_blank" rel="noopener noreferrer">
      {link.title}
    </a>
  {/each}
</div>
