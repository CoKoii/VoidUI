<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'
import { VCodePreview, VThemeToggle } from 'void-design-vue'
import { h } from 'vue'

defineExpose({
  name: 'VThemeToggle',
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

const themeToggleDataSource = [
  {
    key: '1',
    param: 'lightTheme',
    description: '明亮模式主题名称',
    type: 'string',
    defaultValue: '-',
  },
  {
    key: '2',
    param: 'darkTheme',
    description: '暗黑模式主题名称',
    type: 'string',
    defaultValue: '-',
  },
  {
    key: '3',
    param: 'themeKey',
    description: '当前主题 key',
    type: 'string',
    defaultValue: '-',
  },
  {
    key: '4',
    param: 'persistent',
    description: '是否持久化存储主题',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: '5',
    param: 'followSystem',
    description: '是否跟随系统主题',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: '6',
    param: 'duration',
    description: '动画持续时间（毫秒）',
    type: 'number',
    defaultValue: '300',
  },
  {
    key: '7',
    param: 'easing',
    description: '动画缓动函数',
    type: 'string',
    defaultValue: 'ease-in-out',
  },
  {
    key: '8',
    param: 'maxRadius',
    description: '动画扩散的最大半径',
    type: 'number',
    defaultValue: '-',
  },
  {
    key: '9',
    param: 'storageKey',
    description: '本地存储 key',
    type: 'string',
    defaultValue: 'theme',
  },
  {
    key: '10',
    param: 'emitInitial',
    description: '是否在初始化时触发一次 theme-change 事件',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: '11',
    param: 'respectReducedMotion',
    description: '是否遵循系统“减少动态效果”设置',
    type: 'boolean',
    defaultValue: 'true',
  },
]

const themeToggleEmitsDataSource = [
  {
    key: '1',
    event: 'theme-change',
    description: '主题切换时触发',
    params: '[theme: string]',
  },
]
</script>

<template>
  <div class="Icon" ref="containerRef">
    <ArticleSide>
      <h1>VThemeToggle 主题切换</h1>
      <span>只需配置好色彩变量，剩下的一切交给组件</span>
      <h2 id="基本用法">基本用法</h2>
      <VCodePreview lang="vue">
        <template #demo>
          <VThemeToggle />
        </template>
        <template #code>
          {{ `
<script setup lang="ts">
import { VThemeToggle } from 'void-design-vue'
<\/script>

<template>
  <VThemeToggle />
</template>
` }}
        </template>
      </VCodePreview>
      <h2 id="更多用法">自定义内容</h2>
      <VCodePreview lang="vue">
        <template #demo>
          <VThemeToggle>点我</VThemeToggle>
        </template>
        <template #code>
          {{ `
<script setup lang="ts">
import { VThemeToggle } from 'void-design-vue'
<\/script>

<template>
  <VThemeToggle>点我</VThemeToggle>
</template>
` }}
        </template>
      </VCodePreview>
      <h2 id="API">API</h2>
      <a-table :columns="columns" :data-source="themeToggleDataSource" :pagination="false" bordered />
      <h2 id="事件">事件</h2>
      <a-table :columns="columns" :data-source="themeToggleEmitsDataSource" :pagination="false" bordered />
    </ArticleSide>
  </div>
</template>

<style scoped></style>
