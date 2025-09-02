import{_ as d}from"./ArticleSide.vue_vue_type_style_index_0_lang-Fvx6hK8O.js";import{d as l,a as u,c as n,w as t,o as m,b as s,u as o,D as a,e as i,t as p}from"./index-0nia00yo.js";const v={class:"Install",ref:"containerRef"},V=l({__name:"Install",setup(f,{expose:r}){return r({name:"Install"}),(g,e)=>(m(),u("div",v,[n(d,null,{default:t(()=>[e[3]||(e[3]=s("h1",null,"快速上手",-1)),e[4]||(e[4]=s("h2",{id:"安装方式"},"安装方式",-1)),n(o(a),{"line-numbers":!1,extra:{copy:!0,showLang:!0},dots:!1,lang:"bash"},{default:t(()=>[...e[0]||(e[0]=[i(p(`# 使用 npm 安装 void-design-vue
npm install void-design-vue

# 使用 pnpm 安装 void-design-vue
pnpm add void-design-vue

# 使用 yarn 安装 void-design-vue
yarn add void-design-vue`),-1)])]),_:1}),e[5]||(e[5]=s("h2",{id:"按需引入"},"按需引入（推荐）",-1)),n(o(a),{"line-numbers":!1,path:"main.ts",extra:{copy:!0,showLang:!0},dots:!0,lang:"js"},{default:t(()=>[...e[1]||(e[1]=[i(p(`import { VButton, VThemeToggle } from 'void-design-vue'
import 'void-design-vue/style.css'

// 在组件中使用
export default {
  components: {
    VButton,
    VThemeToggle,
  },
}`),-1)])]),_:1}),e[6]||(e[6]=s("h2",{id:"完整引入"},"完整引入",-1)),n(o(a),{"line-numbers":!1,path:"main.ts",extra:{copy:!0,showLang:!0},dots:!0,lang:"js"},{default:t(()=>[...e[2]||(e[2]=[i(p(`import { createApp } from 'vue'
import { install } from 'void-design-vue'
import 'void-design-vue/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(install)
app.mount('#app')`),-1)])]),_:1})]),_:1})],512))}});export{V as default};
