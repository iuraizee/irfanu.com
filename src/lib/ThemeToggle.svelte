<script>
  import { onMount } from 'svelte'
  import { Moon, Sun } from 'lucide-svelte'

  let preference = $state('system')
  let systemIsDark = $state(false)
  let ready = $state(false)

  const isDark = $derived(
    preference === 'dark' || (preference === 'system' && systemIsDark)
  )
  const toggleLabel = $derived(
    ready ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle color theme'
  )

  function applyPreference(value) {
    preference = value === 'light' || value === 'dark' ? value : 'system'

    if (preference === 'system') {
      delete document.documentElement.dataset.theme
    } else {
      document.documentElement.dataset.theme = preference
    }
  }

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

    function updateSystemPreference(event) {
      systemIsDark = event.matches
    }

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
