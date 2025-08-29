import{_ as i}from"./ArticleSide.vue_vue_type_style_index_0_lang-yd0f-4BI.js";import{d as p,a as u,c as t,w as s,o as m,b as e,u as o,E as l,e as d,t as r}from"./index-DSQUkfcZ.js";const f={class:"Install",ref:"containerRef"},y=p({__name:"Install",setup(v,{expose:a}){return a({name:"Install"}),(g,n)=>(m(),u("div",f,[t(i,null,{default:s(()=>[n[3]||(n[3]=e("h1",null,"快速上手",-1)),n[4]||(n[4]=e("p",null,"点击开始一个即时操作",-1)),n[5]||(n[5]=e("h2",{id:"安装方式"},"安装方式",-1)),t(o(l),{"line-numbers":!1,extra:{copy:!0,download:!1,showLang:!0},dots:!1,lang:"bash"},{default:s(()=>[...n[0]||(n[0]=[d(r(`# 使用 npm 安装 void-design-vue
npm install void-design-vue

# 使用 pnpm 安装 void-design-vue
pnpm add void-design-vue

# 使用 yarn 安装 void-design-vue
yarn add void-design-vue`),-1)])]),_:1}),n[6]||(n[6]=e("h2",{id:"按需引入"},"按需引入（推荐）",-1)),n[7]||(n[7]=e("p",null,"main.ts",-1)),t(o(l),{"line-numbers":!1,extra:{copy:!0,download:!0,showLang:!0},dots:!0,lang:"js"},{default:s(()=>[...n[1]||(n[1]=[d(r(`import { VButton, VThemeToggle } from 'void-design-vue'
import 'void-design-vue/style.css'

// 在组件中使用
export default {
  components: {
    VButton,
    VThemeToggle,
  },
}`),-1)])]),_:1}),n[8]||(n[8]=e("h2",{id:"完整引入"},"完整引入",-1)),n[9]||(n[9]=e("p",null,"main.ts",-1)),t(o(l),{"line-numbers":!1,extra:{copy:!0,download:!0,showLang:!0},dots:!0,lang:"js"},{default:s(()=>[...n[2]||(n[2]=[d(r(`import { createApp } from 'vue'
import { install } from 'void-design-vue'
import 'void-design-vue/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(install)
app.mount('#app')`),-1)])]),_:1})]),_:1})],512))}});export{y as default};
