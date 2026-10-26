<script>
  import { onMount } from 'svelte'
  import { Moon, Sun } from 'lucide-svelte'

  /** @typedef {'light' | 'dark'} Theme */
  /** @typedef {Theme | 'system'} ThemePreference */

  /** @type {ThemePreference} */
  let preference = $state('system')
  let systemIsDark = $state(false)
  let ready = $state(false)

  const isDark = $derived(
    preference === 'dark' || (preference === 'system' && systemIsDark)
  )
  const toggleLabel = $derived(
    ready ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle color theme'
  )

  /**
   * Apply a theme to the page without changing storage.
   * Missing or invalid values restore the system preference.
   * @param {string | null | undefined} value - Theme from the page or storage.
   */
  function applyPreference(value) {
    preference = value === 'light' || value === 'dark' ? value : 'system'

    if (preference === 'system') {
      delete document.documentElement.dataset.theme
    } else {
      document.documentElement.dataset.theme = preference
    }
  }

  /**
   * Switch to the opposite theme and save it when storage is available.
   */
  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark'
    applyPreference(nextTheme)

    try {
      localStorage.setItem('theme', nextTheme)
    } catch {
      // Selected theme still applies when storage is unavailable.
    }
  }

  onMount(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    systemIsDark = media.matches
    applyPreference(document.documentElement.dataset.theme)
    ready = true

    /**
     * Update the system fallback so the toggle label reflects the current theme.
     * @param {MediaQueryListEvent} event - System color preference change.
     */
    function updateSystemPreference(event) {
      systemIsDark = event.matches
    }

    /**
     * Apply theme changes from other tabs, including removed or cleared storage.
     * Ignore unrelated keys and session storage events.
     * @param {StorageEvent} event - Storage change from another document.
     */
    function syncPreference(event) {
      if (event.key !== 'theme' && event.key !== null) return

      try {
        if (event.storageArea !== localStorage) return
      } catch {
        return
      }

      applyPreference(event.newValue)
    }

    media.addEventListener('change', updateSystemPreference)
    window.addEventListener('storage', syncPreference)

    return () => {
      media.removeEventListener('change', updateSystemPreference)
      window.removeEventListener('storage', syncPreference)
    }
  })
</script>

<button
  class="theme-toggle"
  type="button"
  aria-label={toggleLabel}
  title={toggleLabel}
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
