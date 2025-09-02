import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { theme } from 'ant-design-vue'

export type ThemeMode = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<ThemeMode>('light')
  const antdTheme = ref({
    algorithm: currentTheme.value === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
  })

  let observer: MutationObserver | null = null
  let isObserverInitialized = false

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  }

  const setTheme = (themeValue: ThemeMode) => {
    currentTheme.value = themeValue
  }

  const initThemeObserver = () => {
    if (isObserverInitialized || typeof window === 'undefined') return

    const checkCurrentTheme = () => {
      const htmlElement = document.documentElement
      const dataTheme = htmlElement.getAttribute('data-theme')
      const newTheme = dataTheme === 'dark' ? 'dark' : 'light'

      if (newTheme !== currentTheme.value) {
        currentTheme.value = newTheme
      }
    }

    checkCurrentTheme()

    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          checkCurrentTheme()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    isObserverInitialized = true
  }

  if (typeof window !== 'undefined') {
    setTimeout(initThemeObserver, 0)
  }

  watch(
    currentTheme,
    (newTheme) => {
      antdTheme.value = {
        algorithm: newTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }
    },
    { immediate: true },
  )

  return {
    currentTheme,
    antdTheme,
    toggleTheme,
    setTheme,
  }
})
