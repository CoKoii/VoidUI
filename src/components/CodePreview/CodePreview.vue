<script setup lang="ts">
import { CopyOutlined, CodeOutlined } from '@ant-design/icons-vue'
import { ref, onMounted } from 'vue'
import { createHighlighter } from 'shiki'
import { message } from 'ant-design-vue'

interface Props {
  code?: string
  language?: string
}

const props = withDefaults(defineProps<Props>(), {
  code: 'Hello, World!',
  language: 'vue',
})

const highlightedCode = ref('')
const isCodeVisible = ref(false)

const createShiki = async () => {
  const highlighter = await createHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['javascript', 'typescript', 'vue', 'html', 'css', 'scss', 'json', 'markdown'],
  })

  if (props.code) {
    highlightedCode.value = highlighter.codeToHtml(props.code, {
      lang: props.language,
      theme: 'github-dark',
    })
  }
}

const toggleCode = () => {
  isCodeVisible.value = !isCodeVisible.value
}

const copyCode = async () => {
  if (props.code) {
    try {
      await navigator.clipboard.writeText(props.code)
      message.success('复制成功')
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }
}

onMounted(() => {
  createShiki()
})

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
      <CopyOutlined @click="copyCode" />
      <CodeOutlined @click="toggleCode" />
    </div>
    <div v-if="isCodeVisible" class="code-container">
      <div v-if="highlightedCode" v-html="highlightedCode" class="code"></div>
      <pre v-else class="code">
        <slot name="code">{{ props.code }}</slot>
      </pre>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './CodePreview.scss';
</style>
