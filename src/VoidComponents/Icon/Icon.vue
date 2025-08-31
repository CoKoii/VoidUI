<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'
import { VCode } from 'void-design-vue'
defineExpose({
  name: 'Icon',
})
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
      <VCode :line-numbers="true" :extra="{ copy: true, showLang: true }" :dots="true" lang="js">
        {{
          "import { VButton, VThemeToggle } from 'void-design-vue'\nimport 'void-design-vue/style.css'\n\n// 在组件中使用\nexport default {\n  components: {\n    VButton,\n    VThemeToggle,\n  },\n}"
        }}
      </VCode>
      <h2 id="完整引入">完整引入</h2>
      <p>main.ts</p>
      <VCode :line-numbers="false" :extra="{ copy: true, showLang: true }" :dots="true" lang="js">
        {{
          "import { createApp } from \'vue\'\nimport { install } from \'void-design-vue\'\nimport \'void-design-vue/style.css\'\nimport App from \'./App.vue\'\n\nconst app = createApp(App)\napp.use(install)\napp.mount(\'#app\')"
        }}
      </VCode>
    </ArticleSide>
  </div>
</template>

<style scoped></style>
