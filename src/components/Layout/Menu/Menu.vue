<script setup lang="ts">
defineExpose({
  name: 'Menu',
})
</script>

<template>
  <div class="Menu">
    <router-link to="/">设计</router-link>
    <router-link to="/about">研发</router-link>
    <router-link to="/contact">组件</router-link>
    <router-link to="/blog">关于</router-link>
  </div>
</template>

<style scoped lang="scss">
@use './Menu.scss';
</style>
