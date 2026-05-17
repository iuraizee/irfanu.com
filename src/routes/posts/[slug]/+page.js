export const prerender = true

const posts = import.meta.glob('/posts/*.md')

// declare slugs to prerender at build time
export async function entries() {
  const all = import.meta.glob('/posts/*.md', { eager: true })
  return Object.keys(all).map(path => ({
    slug: path.split('/').pop().replace('.md', ''),
  }))
}

export async function load({ params }) {
  // dynamically import the matching md file, return it as a svelte component
  const post = await posts[`/posts/${params.slug}.md`]()
  return { content: post.default }
}
