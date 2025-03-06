const SocialLinks = () => {
  const links = [
    {
      href: 'mailto:iuraizee@gmail.com?subject=Hi Irfan! Here for The Bear S1E7 spoiler chat',
      title: 'Email',
    },
    { href: 'https://github.com/iuraizee', title: 'Github' },
    { href: 'https://www.linkedin.com/in/irfanuraizee/', title: 'LinkedIn' },
  ]

  return (
    <div className="links">
      {links.map(link => {
        return (
          <a
            key={link.title}
            className="link-item"
            href={link.href}
            target="_blank"
            rel="noopener"
          >
            {link.title}
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
