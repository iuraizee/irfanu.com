<script>
  import { Moon, Sun } from 'lucide-svelte'

  function toggleTheme() {
    const root = document.documentElement
    const currentTheme =
      root.dataset.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

    root.dataset.theme = nextTheme

    try {
      localStorage.setItem('theme', nextTheme)
    } catch {
      // Selected theme still applies when storage is unavailable.
    }
  }
</script>

<button
  class="theme-toggle"
  type="button"
  aria-label="Toggle color theme"
  title="Toggle color theme"
  onclick={toggleTheme}
>
  <Moon
    size={20}
    strokeWidth={2}
    class="theme-toggle__dark"
    aria-hidden="true"
  />
  <Sun
    size={20}
    strokeWidth={2}
    class="theme-toggle__light"
    aria-hidden="true"
  />
</button>
