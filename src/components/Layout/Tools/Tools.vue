<script setup lang="ts">
import { Tooltip } from 'ant-design-vue'
import { GithubFilled } from '@ant-design/icons-vue'
defineExpose({
  name: 'Tools',
})
</script>

<template>
  <div class="Tools">
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
