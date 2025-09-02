<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'
import { VCodePreview } from 'void-design-vue'
import { h } from 'vue'

defineExpose({
  name: 'CodePreview',
})
const columns = [
  {
    title: '参数',
    dataIndex: 'param',
    key: 'param',
    width: 80,
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    width: 300,

    customRender: ({ text }: { text: string }) =>
      h('span', { style: { color: '#c41d7f', fontWeight: '500' } }, text),
  },
  {
    title: '默认值',
    dataIndex: 'defaultValue',
    key: 'defaultValue',
    width: 100,
  },
]

const dataSource = [
  {
    key: '1',
    param: 'show',
    description: '是否默认展开',
    type: 'boolean',
    defaultValue: 'false',
  },
]
const demo1 = `
  <VCodePreview>
    <template #demo>
      <h1>标题</h1>
    </template>
    <template #code>
      \{\{ \`
        <template><h1>标题</h1></template>
      \` \}\}
    </template>
  </VCodePreview>`
</script>

<template>
  <div class="Icon" ref="containerRef">
    <ArticleSide>
      <h1>VCodePreview 代码预览</h1>
      <span>可预览代码效果，并查看代码实现</span>
      <h2 id="基本用法">基本用法</h2>
      <VCodePreview>
        <template #demo>
          <VCodePreview>
            <template #demo>
              <h1>标题</h1>
            </template>
            <template #code>
              {{ `
              <template><h1>标题</h1></template>
              ` }}
            </template>
          </VCodePreview>
        </template>
        <template #code>
          {{ demo1 }}
        </template>
      </VCodePreview>
      <p>
        对于部分代码，如果直接放入<span v-pre>{{ `` }}</span
        >会引起报错，请先将引起报错的字符转义
      </p>
      <h2 id="API">API</h2>
      <p>
        VCodePreview 组件继承了<span
          style="color: #2b5aed; font-weight: 600; padding: 0 4px; cursor: pointer"
          @click="$router.push('/components/code#API')"
          >VCode</span
        >的所有API,同时也新增了一个自己的API
      </p>
      <a-table :columns="columns" :data-source="dataSource" :pagination="false" bordered />
    </ArticleSide>
  </div>
</template>

<style scoped></style>
