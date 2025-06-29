<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
defineExpose({
  name: 'Menu',
})
const menuRef = ref<HTMLElement>()
const hiTextRef = ref<HTMLElement>()
onMounted(() => {
  if (!menuRef.value || !hiTextRef.value) return
  const isMobile = window.innerWidth <= 768
  gsap.set(menuRef.value, {
    y: isMobile ? 100 : -100,
    width: 48,
    height: 48,
    borderRadius: 24,
    padding: 0,
    opacity: 0,
    overflow: 'hidden',
  })
  gsap.set(menuRef.value.querySelectorAll('.nav-link'), {
    opacity: 0,
    display: 'none',
  })
  gsap.set(hiTextRef.value, {
    opacity: 1,
    display: 'flex',
  })
  const tl = gsap.timeline()

  tl.to(menuRef.value, {
    y: 0,
    opacity: 1,
    duration: 1.0,
    ease: 'power3.out',
  })
    .to({}, { duration: 0.3 })
    .set(menuRef.value.querySelectorAll('.nav-link'), { display: 'block', opacity: 0 })
    .to(
      hiTextRef.value,
      {
        opacity: 0,
        duration: 0,
        ease: 'power2.out',
      },
      'expand',
    )
    .set(hiTextRef.value, { display: 'none' }, 'expand+=0.1')
    .to(
      menuRef.value,
      {
        width: 'auto',
        padding: '0 16px',
        duration: 0.8,
        ease: 'power2.out',
      },
      'expand',
    )
    .to(menuRef.value.querySelectorAll('.nav-link'), {
      opacity: 0.8,
      duration: 0.3,
      ease: 'power2.out',
    })
})
</script>

<template>
  <div class="Menu" ref="menuRef">
    <span class="hi-text" ref="hiTextRef">Hi</span>
    <router-link to="/design" class="nav-link">设计</router-link>
    <router-link to="/research" class="nav-link">研发</router-link>
    <router-link to="/components" class="nav-link">组件</router-link>
    <router-link to="/about" class="nav-link">关于</router-link>
  </div>
</template>

<style scoped lang="scss">
@use './Menu.scss';
</style>
