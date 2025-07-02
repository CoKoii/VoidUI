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
      <h2 id="按钮类型">按钮类型</h2>
      <p>
        按钮有三种类型：<code>primary</code> 、<code>secondary</code> 、<code>outline</code>
        。主按钮在同一个操作区域建议最多出现一次。
      </p>
      <CodePreview
        :code="`<template>
  <a-button type=&quot;primary&quot;>Primary</a-button>
  <a-button type=&quot;secondary&quot;>Secondary</a-button>
  <a-button type=&quot;outline&quot;>Outline</a-button>
</template>`"
        language="vue"
      >
        <template #preview>
          <a-button type="primary">Primary</a-button>
          <a-button type="secondary">Secondary</a-button>
          <a-button type="outline">Outline</a-button>
        </template>
      </CodePreview>
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
  <a-button type=&quot;outline&quot;>Outline</a-button>
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
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>描述</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>按钮的类型</td>
            <td><code>primary</code> | <code>secondary</code> | <code>outline</code></td>
            <td><code>primary</code></td>
          </tr>
          <tr>
            <td>shape</td>
            <td>按钮的形状</td>
            <td><code>round</code> | <code>circle</code> | <code>square</code></td>
            <td><code>-</code></td>
          </tr>
          <tr>
            <td>status</td>
            <td>按钮的状态</td>
            <td>
              <code>primary</code> | <code>success</code> | <code>warning</code> |
              <code>danger</code>
            </td>
            <td><code>-</code></td>
          </tr>
          <tr>
            <td>size</td>
            <td>按钮的大小</td>
            <td><code>s</code> | <code>m</code> | <code>l</code> | <code>xl</code></td>
            <td><code>l</code></td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>按钮是否被禁用</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>loading</td>
            <td>按钮是否加载中</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>long</td>
            <td>按钮是否通栏</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>
    </ArticleSide>
  </div>
</template>
