<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'
import { faCopy, faDownload, faMoon } from '@fortawesome/free-solid-svg-icons'
import { VCode, VCodePreview, VIcon } from 'void-design-vue'
import { h } from 'vue'

defineExpose({
  name: 'Icon',
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
    param: 'icon',
    description: '图标对象或名称',
    type: 'object | string | [string, string]',
    defaultValue: '-',
  },
  {
    key: '2',
    param: 'color',
    description: '图标颜色',
    type: 'string',
    defaultValue: '-',
  },
  {
    key: '3',
    param: 'size',
    description: '图标大小',
    type: '2xs | xs | sm | lg | xl | 2xl | 1x | 2x | 3x | 4x | 5x | 6x | 7x | 8x | 9x | 10x',
    defaultValue: '1x',
  },
  {
    key: '4',
    param: 'rotation',
    description: '旋转角度',
    type: '90 | 180 | 270',
    defaultValue: '-',
  },
  {
    key: '5',
    param: 'spin',
    description: '是否开启旋转动画',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: '6',
    param: 'bounce',
    description: '是否开启跳动动画',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: '7',
    param: 'shake',
    description: '是否开启抖动动画',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: '8',
    param: 'beat',
    description: '是否开启心跳动画',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: '9',
    param: 'fade',
    description: '是否开启淡入淡出动画',
    type: 'boolean',
    defaultValue: 'false',
  },
]
</script>

<template>
  <div class="Icon" ref="containerRef">
    <ArticleSide>
      <h1>VIcon 图标</h1>
      <span>本站所有图标均来自</span>
      <a
        href="https://fontawesome.com/"
        style="color: #2b5aed; font-weight: 900; font-size: 20px"
        target="_blank"
        >【FontAwesome】</a
      >
      <span>图标库，该网站提供丰富的高质量图标资源。</span>
      <h2 id="依赖安装">依赖安装</h2>
      <VCode
        :line-numbers="false"
        :extra="{ copy: true, showLang: true }"
        :dots="false"
        lang="bash"
      >
        {{ 'npm install @fortawesome/free-solid-svg-icons' }}
      </VCode>
      <h2 id="基本用法">基本用法</h2>
      <VCodePreview lang="vue">
        <template #demo>
          <div style="display: flex; align-items: center; gap: 24px;">
            <VIcon :icon="faMoon" />
            <VIcon :icon="faCopy" />
            <VIcon :icon="faDownload" />
          </div>
        </template>
        <template #code>
          {{ `
<script setup lang="ts">
import { VIcon } from 'void-design-vue'
import { faCopy, faDownload, faMoon } from '@fortawesome/free-solid-svg-icons'
<\/script>

<template>
  <VIcon :icon="faMoon" />
  <VIcon :icon="faCopy" />
  <VIcon :icon="faDownload" />
</template>
` }}
        </template>
      </VCodePreview>
      <h2 id="更多用法">更多用法</h2>
      <VCodePreview lang="vue">
        <template #demo>
          <div style="display: flex; align-items: center; gap: 24px;">
          <VIcon :icon="faMoon" color='red'  />
          <VIcon :icon="faCopy" spin />
          <VIcon :icon="faDownload" size='2x' color='green' />
          <VIcon :icon="faDownload" size='2x' color='green' rotation='90'/>
          <VIcon :icon="faMoon" shake />
          <VIcon :icon="faMoon" bounce />
          <VIcon :icon="faMoon" beat />
          <VIcon :icon="faMoon" fade />
          </div>
        </template>
        <template #code>
          {{ `
<script setup lang="ts">
import { VIcon } from 'void-design-vue'
import { faCopy, faDownload, faMoon } from '@fortawesome/free-solid-svg-icons'
<\/script>

<template>
  <VIcon :icon="faMoon" color='red'  />
  <VIcon :icon="faCopy" spin />
  <VIcon :icon="faDownload" size='2x' color='green' />
  <VIcon :icon="faDownload" size='2x' color='green' rotation='90'/>
  <VIcon :icon="faMoon" shake />
  <VIcon :icon="faMoon" bounce />
  <VIcon :icon="faMoon" beat />
  <VIcon :icon="faMoon" fade />
</template>
` }}
        </template>
      </VCodePreview>
      <h2 id="API">API</h2>
      <a-table :columns="columns" :data-source="dataSource" :pagination="false" bordered />
    </ArticleSide>
  </div>
</template>

<style scoped></style>
