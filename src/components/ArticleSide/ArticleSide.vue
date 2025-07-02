<script setup lang="ts">
import { Anchor } from 'ant-design-vue'
import { ref, onMounted } from 'vue'

interface AnchorItem {
  key: string
  href: string
  title: string
  target?: string
  children?: AnchorItem[]
}

const anchorItems = ref<AnchorItem[]>([])
const contentRef = ref<HTMLElement | null>(null)

const getContainer = (): HTMLElement | Window => {
  return document.querySelector('.main') as HTMLElement
}

onMounted(() => {
  if (!contentRef.value) return

  const headers = contentRef.value.querySelectorAll('h2[id]')
  anchorItems.value = Array.from(headers).map((el, index) => ({
    key: String(index),
    href: `#${el.id}`,
    title: el.textContent?.trim() || `标题 ${index + 1}`,
  }))
})

defineExpose({
  name: 'ArticleSide',
})
</script>

<template>
  <div class="ArticleSide">
    <div class="main" ref="contentRef">
      <slot></slot>
    </div>
    <div class="nav">
      <Anchor
        :affix="false"
        :items="anchorItems"
        :bounds="5"
        :offset-top="80"
        :get-container="getContainer"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use './ArticleSide.scss';
@use './markdown.scss';
</style>
