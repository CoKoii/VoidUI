<script setup lang="ts">
import { defineExpose } from 'vue'
import Hero from './Hero/Hero.vue'
defineExpose({
  name: 'Home',
})
</script>

<template>
  <div class="Home">
    <Hero />
  </div>
</template>

<style scoped lang="scss">
@use 'Home.scss';
</style>
