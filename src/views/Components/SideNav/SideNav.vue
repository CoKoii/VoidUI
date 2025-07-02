<script setup lang="ts">
defineExpose({
  name: 'SideNav',
})
</script>

<template>
  <div class="SideNav">
    <div class="item">
      <div class="title">安装</div>
      <div class="components">
        <router-link to="/components/button" active-class="active">快速上手</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './SideNav.scss';
</style>
