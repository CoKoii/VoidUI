<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'
defineExpose({
  name: 'Button',
})
</script>

<template>
  <div class="Button">
    <ArticleSide>
      <h1>Button 组件</h1>
      <p>点击开始一个即时操作</p>
      <h2 id="button-types">按钮类型</h2>
    </ArticleSide>
  </div>
</template>

<style scoped></style>
