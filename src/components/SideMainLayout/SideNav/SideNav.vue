<script setup lang="ts">
import type { columnsType } from './tabledataType'
const props = defineProps<{
  columns: columnsType
}>()
defineExpose({
  name: 'SideNav',
})
</script>

<template>
  <div class="SideNav">
    <div class="item" v-for="item in props.columns" :key="item.title">
      <div class="title">{{ item.title }}</div>
      <div class="components">
        <router-link
          v-for="child in item.children"
          :key="child.path"
          :to="`/components/${child.path}`"
          active-class="active"
        >
          {{ child.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './SideNav.scss';
</style>
