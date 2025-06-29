<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { SendOutlined } from '@ant-design/icons-vue'
import { defineExpose, h } from 'vue'
defineExpose({
  name: 'Home',
})
</script>

<template>
  <div class="Home">
    <h1 class="title">Void Design</h1>
    <p class="description">一切从简，安然如山水。</p>
    <div class="buttons">
      <Button type="primary" @click="$router.push('/components')" :icon="h(SendOutlined)"
        >开始使用</Button
      >
      <Button @click="$router.push('/about')">了解更多</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'Home.scss';
</style>
