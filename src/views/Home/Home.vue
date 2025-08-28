<script setup lang="ts">
import Hero from './Hero/Hero.vue'
import Name from './Name/Name.vue'
defineExpose({
  name: 'Home',
})
</script>

<template>
  <div class="Home">
    <Hero />
    <Name />
  </div>
</template>

<style scoped lang="scss">
@use 'Home.scss';
</style>
