<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import Layout from '@/components/Layout/Layout.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

defineExpose({
  name: 'App',
})
</script>

<template>
  <ConfigProvider :theme="themeStore.antdTheme">
    <div>
      <Layout />
    </div>
  </ConfigProvider>
</template>

<style scoped></style>
