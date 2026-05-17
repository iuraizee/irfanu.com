export const prerender = true

export async function load() {
  // build and bundle md files
  const modules = import.meta.glob('/posts/*.md', { eager: true })

  // build slug from filename and merge frontmatter fields
  const posts = Object.entries(modules).map(([path, mod]) => ({
    slug: path.split('/').pop().replace('.md', ''),
    ...mod.metadata,
  }))

  return {
    posts: posts.sort((a, b) => new Date(b.date) - new Date(a.date)),
  }
}
