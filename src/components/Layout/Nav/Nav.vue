<script setup lang="ts">
import Tools from '../Tools/Tools.vue'
defineExpose({
  name: 'Nav',
})
</script>

<template>
  <div class="Nav">
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/logo.svg" alt="Logo" />
      <span>Void UI 组件库</span>
    </div>
    <Tools />
  </div>
</template>

<style scoped lang="scss">
@use './Nav.scss';
</style>
