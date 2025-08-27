<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'
import { h } from 'vue'
defineExpose({
  name: 'Install',
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
    param: 'type',
    description: '按钮的类型',
    type: 'primary | secondary | outline',
    defaultValue: 'primary',
  },
  {
    key: '2',
    param: 'shape',
    description: '按钮的形状',
    type: 'round | circle | square',
    defaultValue: '-',
  },
  {
    key: '3',
    param: 'status',
    description: '按钮的状态',
    type: 'primary | success | warning | danger',
    defaultValue: '-',
  },
  {
    key: '4',
    param: 'size',
    description: '按钮的大小',
    type: 's | m | l | xl',
    defaultValue: 'l',
  },
  {
    key: '5',
    param: 'disabled',
    description: '按钮是否被禁用',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: '6',
    param: 'loading',
    description: '按钮是否加载中',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: '7',
    param: 'long',
    description: '按钮是否通栏',
    type: 'boolean',
    defaultValue: 'false',
  },
]
</script>

<template>
  <div class="Install" ref="containerRef">
    <ArticleSide>
      <h1>快速上手</h1>
      <p>点击开始一个即时操作</p>
      <h2 id="安装方式">安装方式</h2>
      <a-alert message="npm install void-design-vue" type="success" />
      <br />
      <a-alert message="pnpm add void-design-vue" type="info" />
      <br />
      <a-alert message="yarn add void-design-vue" type="success" />
      <h2 id="按钮尺寸">按钮尺寸</h2>
      <p>
        按钮分为：<code>s</code> 、<code>m</code> 、<code>l</code> 、<code>xl</code>
        四种尺寸。高度分别为：<code>24px</code>、<code>32px</code>、<code>36px</code>、<code
          >48px</code
        >
        。默认尺寸为<code>l</code>。
      </p>
      <CodePreview
        :code="`<template>
  <a-button type=&quot;primary&quot;>Primary</a-button>
  <a-button type=&quot;secondary&quot;>Secondary</a-button>
  <a-button type=&quot;outline&quot;>Outline</a-button><a-button type=&quot;outline&quot;>Outline</a-button>
</template>`"
        language="vue"
      >
        <template #preview>
          <a-button type="primary">Primary</a-button>
          <a-button type="secondary">Secondary</a-button>
          <a-button type="outline">Outline</a-button>
        </template>
      </CodePreview>
      <h2 id="API">API</h2>
      通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：<code>type</code> ->
      <code>size</code> -> <code>shape</code> -> <code>status</code> -> <code>disabled</code>。
      <a-table :columns="columns" :data-source="dataSource" :pagination="false" bordered />
    </ArticleSide>
  </div>
</template>

<style scoped></style>
