<script setup lang="ts">
import Nav from '@/components/Layout/Nav/Nav.vue'
defineExpose({
  name: 'Layout',
})
</script>

<template>
  <div class="Layout">
    <Nav />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './Layout.scss';
</style>
