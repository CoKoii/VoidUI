<script setup lang="ts">
import { Tooltip } from 'ant-design-vue'
import { GithubFilled, SettingFilled } from '@ant-design/icons-vue'
defineExpose({
  name: 'Tools',
})
const changeTheme = () => {
  const htmlElement = document.documentElement
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    htmlElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}
</script>

<template>
  <div class="Tools">
    <Tooltip placement="bottom">
      <template #title>
        <span>Github</span>
      </template>
      <SettingFilled :style="{ fontSize: '14px', color: '#000' }" @click="changeTheme" />
    </Tooltip>
    <Tooltip placement="bottom">
      <template #title>
        <span>Github</span>
      </template>
      <GithubFilled :style="{ fontSize: '14px', color: '#000' }" />
    </Tooltip>
    <Tooltip placement="bottom">
      <template #title>
        <span>Github</span>
      </template>
      <GithubFilled :style="{ fontSize: '14px', color: '#000' }" />
    </Tooltip>
  </div>
</template>

<style scoped lang="scss">
@use './Tools.scss';
</style>
