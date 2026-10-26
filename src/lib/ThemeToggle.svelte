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
   * @returns {void}
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
   * Apply the user's selection and save it when storage is available.
   * @param {Theme} value - Explicit light or dark selection.
   * @returns {void}
   */
  function selectPreference(value) {
    applyPreference(value)

    try {
      localStorage.setItem('theme', preference)
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
     * @returns {void}
     */
    function updateSystemPreference(event) {
      systemIsDark = event.matches
    }

    /**
     * Apply theme changes from other tabs, including removed or cleared storage.
     * Ignore unrelated keys and session storage events.
     * @param {StorageEvent} event - Storage change from another document.
     * @returns {void}
     */
    function syncPreference(event) {
      if (event.key !== 'theme' && event.key !== null) return

      try {
        if (event.storageArea !== localStorage) return
      } catch {
        return
      }

      // A removed key or cleared storage restores the system preference.
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
  onclick={() => selectPreference(isDark ? 'light' : 'dark')}
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
