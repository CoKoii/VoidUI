<script setup lang="ts">
defineExpose({
  name: 'Components',
})
</script>

<template>
  <div class="Components">
    <div class="nav">导航栏</div>
    <div class="main">主体区域</div>
  </div>
</template>

<style scoped lang="scss">
@use './Components.scss';
</style>
