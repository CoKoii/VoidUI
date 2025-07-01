<script setup lang="ts">
import { ref } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
const isNavOpen = ref(false)
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}
defineExpose({
  name: 'Components',
})
</script>

<template>
  <div class="Components">
    <div class="nav" :class="{ open: isNavOpen }">导航栏</div>
    <div class="main">主体区域</div>
    <div class="nav-toggle" @click="toggleNav">
      <MenuUnfoldOutlined v-if="!isNavOpen" />
      <MenuFoldOutlined v-if="isNavOpen" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './Components.scss';
</style>
