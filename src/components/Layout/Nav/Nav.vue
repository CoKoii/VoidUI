<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import Tools from '../Tools/Tools.vue'

const logoRef = ref<HTMLElement>()
const logoImgRef = ref<HTMLElement>()
const logoTextRef = ref<HTMLElement>()

defineExpose({
  name: 'Nav',
})

onMounted(() => {
  if (logoRef.value && logoImgRef.value && logoTextRef.value) {
    const tl = gsap.timeline()
    gsap.set([logoImgRef.value, logoTextRef.value], {
      opacity: 0,
      y: -20,
    })
    tl.to(logoImgRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
    }).to(
      logoTextRef.value,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
      '-=0.3',
    )
  }
})

const handleLogoHover = () => {
  if (logoImgRef.value && logoTextRef.value) {
    gsap.to(logoImgRef.value, {
      rotation: 360,
      duration: 0.6,
      ease: 'power2.out',
    })
    gsap.to(logoTextRef.value, {
      x: 5,
      duration: 0.3,
      ease: 'power2.out',
    })
  }
}

const handleLogoLeave = () => {
  if (logoImgRef.value && logoTextRef.value) {
    gsap.to([logoImgRef.value, logoTextRef.value], {
      rotation: 0,
      x: 0,
      duration: 0.4,
      ease: 'power2.out',
    })
  }
}
</script>

<template>
  <div class="Nav">
    <div
      ref="logoRef"
      class="logo"
      @click="$router.push('/')"
      @mouseenter="handleLogoHover"
      @mouseleave="handleLogoLeave"
    >
      <img ref="logoImgRef" src="/favicon.svg" alt="Logo" />
      <span ref="logoTextRef">Void UI 组件库</span>
    </div>
    <Tools />
  </div>
</template>

<style scoped lang="scss">
@use './Nav.scss';
</style>
