<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'

defineExpose({
  name: 'Button',
})
</script>

<template>
  <div class="Button" ref="containerRef">
    <ArticleSide>
      <h1>Button 组件</h1>
      <p>点击开始一个即时操作</p>
      <h2 id="#按钮类型">按钮类型</h2>
      <p>
        按钮有三种类型：<code>primary</code> 、<code>secondary</code> 、<code>outline</code>
        。主按钮在同一个操作区域建议最多出现一次。
      </p>
      <CodePreview
        :code="`<script setup lang=&quot;ts&quot;>
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'

defineExpose({
  name: 'Button',
})
</script>`"
        language="javascript"
      >
        <template #preview>
          <a-button type="primary">Primary</a-button>
          <a-button type="secondary">Secondary</a-button>
          <a-button type="outline">Outline</a-button>
        </template>
      </CodePreview>
    </ArticleSide>
  </div>
</template>
