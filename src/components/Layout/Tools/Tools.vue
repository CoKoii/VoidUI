<script setup lang="ts">
import { Tooltip } from 'ant-design-vue'
import { GithubFilled, BulbFilled } from '@ant-design/icons-vue'
defineExpose({
  name: 'Tools',
})

const changeTheme = () => {
  const htmlElement = document.documentElement
  const currentTheme = htmlElement.getAttribute('data-theme')
  if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  } else {
    htmlElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }
}
</script>

<template>
  <div class="Tools">
    <Tooltip placement="bottom">
      <template #title>
        <span>日/夜</span>
      </template>
      <BulbFilled :style="{ fontSize: '14px', color: '#000' }" @click="changeTheme" />
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
