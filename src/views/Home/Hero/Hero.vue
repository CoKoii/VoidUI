<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { SendOutlined } from '@ant-design/icons-vue'
import { defineExpose, h } from 'vue'
defineExpose({
  name: 'Hero',
})
</script>

<template>
  <div class="Hero">
    <h1 class="title">VOID DESIGN</h1>
    <p class="description">基于Vue3 + TS + Vite 打造的的前端UI组件库</p>
    <div class="buttons">
      <Button type="primary" @click="$router.push('/components')" :icon="h(SendOutlined)"
        >开始使用</Button
      >
      <Button @click="$router.push('/about')">了解更多</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'Hero.scss';
</style>
