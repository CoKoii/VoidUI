<script setup lang="ts">
import { CopyOutlined, CodeOutlined } from '@ant-design/icons-vue'
defineExpose({
  name: 'CodePreview',
})
</script>

<template>
  <div class="CodePreview">
    <div class="preview">
      <slot name="preview"></slot>
    </div>
    <div class="tools">
      <CopyOutlined />
      <CodeOutlined />
    </div>
    <pre class="code">
      <slot name="code"></slot>
    </pre>
  </div>
</template>

<style scoped lang="scss">
@use './CodePreview.scss';
</style>
