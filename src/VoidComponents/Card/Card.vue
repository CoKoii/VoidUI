<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'
import { VCard,  VCodePreview, VThemeToggle } from 'void-design-vue'
import { h } from 'vue'

defineExpose({
  name: 'ICard',
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
    param: 'bordered',
    description: '是否显示边框',
    type: 'boolean',
    defaultValue: 'true',
  },
  {
    key: '2',
    param: 'title',
    description: '卡片标题',
    type: 'string | slot',
    defaultValue: '-',
  },
  {
    key: '3',
    param: 'extra',
    description: '卡片右上角的操作区域',
    type: 'slot',
    defaultValue: '-',
  },
]
</script>

<template>
  <div class="ICard" ref="containerRef">
    <ArticleSide>
      <h1>VCard 卡片</h1>
      <h2 id="基本用法">基本用法</h2>
      <VCodePreview lang="vue">
        <template #demo>
          <div style="display: flex; align-items: center; gap: 24px;">
            <VCard title="标题">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error illum ratione iste incidunt, officia velit explicabo, eveniet nobis odio doloribus dolorem reprehenderit doloremque? Quibusdam, autem esse? Deserunt, quasi commodi!
            </VCard>
          </div>
        </template>
        <template #code>
          {{ `
<script setup lang="ts">
import { VCard } from 'void-design-vue'
<\/script>

<template>
  <VCard title="标题">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error illum ratione iste incidunt, offvelit explicabo, eveniet nobis odio doloribus dolorem reprehenderit doloremque? Quibusdam, autem eDeserunt, quasi commodi!
  </VCard>
</template>
` }}
        </template>
      </VCodePreview>
      <h2 id="更多用法">更多用法</h2>
      <VCodePreview lang="vue">
        <template #demo>
          <div style="display: flex; align-items: center; gap: 24px; flex-direction: column;">
            <VCard title="无边框卡片" :bordered="false">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error illum ratione iste incidunt, officia velit explicabo, eveniet nobis odio doloribus dolorem reprehenderit doloremque? Quibusdam, autem esse? Deserunt, quasi commodi!
            </VCard>
            <VCard  :bordered="true">
              <template #title>自定义插槽</template>
              <template #extra>
                <VThemeToggle />
              </template>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam explicabo quisquam quidem tempora optio perspiciatis vitae ab molestiae recusandae omnis aliquid expedita iste ipsum hic iure deserunt nostrum, tempore sit.
            </VCard>
            <VCard>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quas consectetur sit, enim at id ipsa ipsum in, assumenda mollitia. Animi nam quas quo mollitia odit nostrum ipsa corrupti.
            </VCard>
          </div>
        </template>
        <template #code>
          {{ `
<script setup lang="ts">
import { VCard } from 'void-design-vue'
<\/script>

<template>

  <VCard title="无边框卡片" :bordered="false">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error illum ratione iste incidunt, officia
    velit explicabo, eveniet nobis odio doloribus dolorem reprehenderit doloremque? Quibusdam, autem esse?
    Deserunt, quasi commodi!
  </VCard>

  <VCard :bordered="true">
    <template #title>自定义插槽</template>
    <template #extra>
      <VThemeToggle />
    </template>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam explicabo quisquam quidem tempora optio
      perspiciatis vitae ab molestiae recusandae omnis aliquid expedita iste ipsum hic iure deserunt nostrum,
      tempore sit.
  </VCard>

  <VCard>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quas consectetur sit, enim at id ipsa
    ipsum in, assumenda mollitia. Animi nam quas quo mollitia odit nostrum ipsa corrupti.
  </VCard>

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
