<script setup lang="ts">
import SideMainLayout from '@/components/SideMainLayout/SideMainLayout.vue'
import { columns } from './tableData'
defineExpose({
  name: 'Components',
})
</script>

<template>
  <div class="Components">
    <SideMainLayout :columns="columns" />
  </div>
</template>

<style scoped lang="scss"></style>
