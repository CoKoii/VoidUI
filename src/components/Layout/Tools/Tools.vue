<script setup lang="ts">
import { Tooltip } from 'ant-design-vue'
import { GithubFilled, BulbFilled } from '@ant-design/icons-vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

defineExpose({
  name: 'Tools',
})
</script>

<template>
  <div class="Tools">
    <Tooltip placement="bottom">
      <template #title>
        <span>个人博客</span>
      </template>
      <a
        href="https://cokoii.github.io/RTB/"
        target="_blank"
        rel="noopener"
        style="margin-right: 13px"
        >博客</a
      >
    </Tooltip>
    <Tooltip placement="bottom">
      <template #title>
        <span>Github</span>
      </template>
      <a href="https://github.com/CoKoii/VoidUI" target="_blank" rel="noopener">
        <GithubFilled :style="{ fontSize: '14px', color: 'var(--text)' }" />
      </a>
    </Tooltip>
    <Tooltip placement="bottom">
      <template #title>
        <span>日/夜</span>
      </template>
      <BulbFilled
        :style="{ fontSize: '14px', color: 'var(--text)' }"
        @click="themeStore.toggleTheme"
      />
    </Tooltip>
  </div>
</template>

<style scoped lang="scss">
@use './Tools.scss';
</style>
