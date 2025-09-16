<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'
import { VCode, VCodePreview } from 'void-design-vue'
import { h } from 'vue'

defineExpose({
  name: 'Code',
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
    width: 200,
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
    param: 'lang',
    description: '代码语言（必填）',
    type: 'string',
    defaultValue: '-',
  },
  {
    key: '2',
    param: 'lineNumbers',
    description: '是否显示行号',
    type: 'boolean',
    defaultValue: 'true',
  },
  {
    key: '3',
    param: 'extra',
    description:
      '额外功能配置：传入 boolean 时整体开关；传入对象时可单独控制复制按钮与语言标签显示',
    type: '{ copy?: boolean; showLang?: boolean } | boolean',
    defaultValue: 'true',
  },
  {
    key: '4',
    param: 'dots',
    description: '是否显示代码块头部的装饰圆点',
    type: 'boolean',
    defaultValue: 'true',
  },
  {
    key: '5',
    param: 'path',
    description: '展示在代码块头部的文件路径/文件名，仅用于展示',
    type: 'string',
    defaultValue: '-',
  },
]
</script>

<template>
  <div class="Icon" ref="containerRef">
    <ArticleSide>
      <h1>VCode 代码高亮</h1>
      <span>可用于常用代码的高亮展示</span>
      <h2 id="基本用法">基本用法</h2>
      <VCodePreview lang="vue">
        <template #demo>
          <VCode lang="js" path="src/main.js">
            {{ `
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
` }}
          </VCode>
        </template>
        <template #code>
          {{ `
<script setup lang="ts">
import { VCode } from 'void-design-vue'
<\/script>

<template>
  <VCode lang="vue">
    \{\{ \` 放入想展示的代码 \` \}\}
  </VCode>
</template>
` }}
        </template>
      </VCodePreview>
      <p>对于部分代码，如果直接放入<span v-pre>{{ `` }}</span>会引起报错，请先将引起报错的字符转义</p>
      <h2 id="更多用法">更多用法</h2>
      <VCodePreview lang="vue">
        <template #demo>
          <div style="display: flex; flex-direction: column; gap: 16px">

            <VCode lang="scss">
              {{ `.Home {
  position: relative;
  height: calc(100vh - 80px);
  overflow: hidden;
}
@media (max-width: 768px) {
  .Home {
    height: calc(100vh - 60px);
  }
}
` }}
            </VCode>
            <!-- 代码路径 -->
            <VCode lang="vue" path="src/views/About/About.vue">
              {{ `放入想展示的代码` }}
            </VCode>
            <!-- 不显示行号 -->
            <VCode lang="java" :lineNumbers="false">
              {{ `int a = 9;` }}
            </VCode>
              <!-- 不显示圆点 -->
            <VCode lang="bash" :dots="false" :lineNumbers="false">
              {{ `pnpm create vue` }}
            </VCode>
          </div>
        </template>
        <template #code>
          {{ `
<script setup lang="ts">
import { VCode } from 'void-design-vue'
<\/script>

<template>
  <!-- 代码语言 -->
  <VCode lang="csss">
    \{\{ \` .Home {
  position: relative;
  height: calc(100vh - 80px);
  overflow: hidden;
}
@media (max-width: 768px) {
  .Home {
    height: calc(100vh - 60px);
  }
} \` \}\}
  </VCode>
  <!-- 代码路径 -->
  <VCode lang="vue" path="src/views/About/About.vue">
    \{\{ \` 放入想展示的代码 \` \}\}
  </VCode>
  <!-- 不显示行号 -->
  <VCode lang="java" :lineNumbers="false">
    \{\{ \` int a = 9; \` \}\}
  </VCode>
  <!-- 不显示圆点 -->
  <VCode lang="vue" :dots="false" :lineNumbers="false">
    \{\{ \` pnpm create vue \` \}\}
  </VCode>
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
