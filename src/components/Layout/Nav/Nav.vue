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
</template>

<style scoped lang="scss">
@use './Nav.scss';
</style>
