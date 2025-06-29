<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineExpose({
  name: 'Menu',
})

const menuRef = ref<HTMLElement>()
const hiTextRef = ref<HTMLElement>()

onMounted(() => {
  // 初始状态设为圆形小球 + 上方隐藏
  gsap.set(menuRef.value, {
    y: -100,
    width: 48,
    height: 48,
    borderRadius: 24,
    opacity: 0,
    overflow: 'hidden',
  })

  // 隐藏所有导航链接
  gsap.set(menuRef.value?.querySelectorAll('.nav-link'), {
    opacity: 0,
    display: 'none',
  })

  // 显示Hi文字
  gsap.set(hiTextRef.value, {
    opacity: 1,
    display: 'block',
  })

  // 动画入场：小球下落 + 展开为导航栏
  const tl = gsap.timeline()

  // 第一步：小球落下并显示
  tl.to(menuRef.value, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  })
    // 第二步：隐藏Hi文字
    .to(hiTextRef.value, {
      opacity: 0,
      duration: 0.2,
      delay: 0.3,
    })
    // 第三步：展开为完整导航栏
    .to(menuRef.value, {
      width: 'auto',
      height: 48,
      borderRadius: 24,
      padding: '0 16px',
      duration: 0.5,
      ease: 'power2.out',
    })
    // 第四步：切换显示导航链接
    .set(hiTextRef.value, { display: 'none' })
    .set(menuRef.value?.querySelectorAll('.nav-link'), { display: 'block' })
    // 第五步：显示导航文字
    .to(menuRef.value?.querySelectorAll('.nav-link'), {
      opacity: 0.8,
      duration: 0.3,
      stagger: 0.1,
      ease: 'power1.out',
    })
})
</script>

<template>
  <div class="Menu" ref="menuRef">
    <span class="hi-text" ref="hiTextRef">Hi</span>
    <router-link to="/" class="nav-link">设计</router-link>
    <router-link to="/about" class="nav-link">研发</router-link>
    <router-link to="/contact" class="nav-link">组件</router-link>
    <router-link to="/blog" class="nav-link">关于</router-link>
  </div>
</template>

<style scoped lang="scss">
@use './Menu.scss';
</style>
