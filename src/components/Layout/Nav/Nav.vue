<script setup lang="ts">
defineExpose({
  name: 'Nav',
})
</script>

<template>
  <div class="Nav">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Logo" />
      <span>Void UI</span>
    </div>
    <div class="tools">12233</div>
  </div>
  <div class="menus">
    <router-link to="/">设计</router-link>
    <router-link to="/about">研发</router-link>
    <router-link to="/contact">组件</router-link>
    <router-link to="/blog">关于</router-link>
  </div>
</template>

<style scoped lang="scss">
@use './Nav.scss';
</style>
