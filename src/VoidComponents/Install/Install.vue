<script setup lang="ts">
import ArticleSide from '@/components/ArticleSide/ArticleSide.vue'
import { VCode } from 'void-design-vue'
defineExpose({
  name: 'Install',
})
</script>

<template>
  <div class="Install" ref="containerRef">
    <ArticleSide>
      <h1>快速上手</h1>
      <h2 id="安装方式">安装方式</h2>

      <VCode
        :line-numbers="false"
        :extra="{ copy: true, showLang: true }"
        :dots="false"
        lang="bash"
      >
        {{
          '# 使用 npm 安装 void-design-vue\nnpm install void-design-vue\n\n# 使用 pnpm 安装 void-design-vue\npnpm add void-design-vue\n\n# 使用 yarn 安装 void-design-vue\nyarn add void-design-vue'
        }}
      </VCode>
      <h2 id="按需引入">按需引入（推荐）</h2>
      <VCode
        :line-numbers="false"
        path="main.ts"
        :extra="{ copy: true, showLang: true }"
        :dots="true"
        lang="js"
      >
        {{
          "import { VButton, VThemeToggle } from 'void-design-vue'\nimport 'void-design-vue/style.css'\n\n// 在组件中使用\nexport default {\n  components: {\n    VButton,\n    VThemeToggle,\n  },\n}"
        }}
      </VCode>
      <h2 id="完整引入">完整引入</h2>
      <VCode
        :line-numbers="false"
        path="main.ts"
        :extra="{ copy: true, showLang: true }"
        :dots="true"
        lang="js"
      >
        {{
          "import { createApp } from \'vue\'\nimport { install } from \'void-design-vue\'\nimport \'void-design-vue/style.css\'\nimport App from \'./App.vue\'\n\nconst app = createApp(App)\napp.use(install)\napp.mount(\'#app\')"
        }}
      </VCode>
    </ArticleSide>
  </div>
</template>

<style scoped></style>
