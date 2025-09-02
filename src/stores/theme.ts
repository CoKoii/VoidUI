import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { theme } from 'ant-design-vue'

export type ThemeMode = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<ThemeMode>('light')
  const antdTheme = ref({
    algorithm: currentTheme.value === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
  })
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  }
  const setTheme = (theme: ThemeMode) => {
    currentTheme.value = theme
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
