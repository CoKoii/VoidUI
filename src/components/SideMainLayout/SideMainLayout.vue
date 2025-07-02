<script setup lang="ts">
import { ref } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import SideNav from './SideNav/SideNav.vue'
import type { columnsType } from './SideNav/tabledataType'
const isNavOpen = ref(false)
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}
const props = defineProps<{
  columns: columnsType
}>()
defineExpose({
  name: 'SideMainLayout',
})
</script>

<template>
  <div class="SideMainLayout">
    <div class="nav" :class="{ open: isNavOpen }">
      <SideNav :columns="props.columns" />
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="nav-toggle" @click="toggleNav">
      <MenuUnfoldOutlined v-if="!isNavOpen" />
      <MenuFoldOutlined v-if="isNavOpen" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './SideMainLayout.scss';
</style>
