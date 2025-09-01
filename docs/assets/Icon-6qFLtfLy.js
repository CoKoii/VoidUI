import{_ as f}from"./ArticleSide.vue_vue_type_style_index_0_lang-B574LQkx.js";import{d as m,a as u,c as s,w as t,o as c,b as e,u as n,M as r,e as a,t as l,C as d,v as i}from"./index-jb4QsIrt.js";/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var v={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},g={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},w={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]};const x={class:"Icon",ref:"containerRef"},C=`<script setup lang="ts">
import { VIcon } from 'void-design-vue'
import { faCopy, faDownload, faMoon } from '@fortawesome/free-solid-svg-icons'
<\/script>

<template>
  <VIcon :icon="faMoon" />
  <VIcon :icon="faCopy" />
  <VIcon :icon="faDownload" />
</template>
`,b=m({__name:"Icon",setup(M,{expose:p}){return p({name:"Icon"}),(y,o)=>(c(),u("div",x,[s(f,null,{default:t(()=>[o[2]||(o[2]=e("h1",null,"VIcon 图标",-1)),o[3]||(o[3]=e("span",null,"本站所有图标均来自",-1)),o[4]||(o[4]=e("a",{href:"https://fontawesome.com/",style:{color:"#2b5aed","font-weight":"900","font-size":"20px"},target:"_blank"},"【FontAwesome】",-1)),o[5]||(o[5]=e("span",null,"图标库，该网站提供丰富的高质量图标资源。",-1)),o[6]||(o[6]=e("h2",{id:"依赖安装"},"依赖安装",-1)),s(n(r),{"line-numbers":!1,extra:{copy:!0,showLang:!0},dots:!1,lang:"bash"},{default:t(()=>[...o[0]||(o[0]=[a(l("npm install @fortawesome/free-solid-svg-icons"),-1)])]),_:1}),o[7]||(o[7]=e("h2",{id:"基本用法"},"基本用法",-1)),s(n(d),{lang:"vue"},{demo:t(()=>[s(n(i),{icon:n(v)},null,8,["icon"]),s(n(i),{icon:n(w)},null,8,["icon"]),s(n(i),{icon:n(g)},null,8,["icon"])]),code:t(()=>[a(l(C))]),_:1}),o[8]||(o[8]=e("h2",{id:"完整引入"},"完整引入",-1)),o[9]||(o[9]=e("p",null,"main.ts",-1)),s(n(r),{"line-numbers":!1,extra:{copy:!0,showLang:!0},dots:!0,lang:"js"},{default:t(()=>[...o[1]||(o[1]=[a(l(`import { createApp } from 'vue'
import { install } from 'void-design-vue'
import 'void-design-vue/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(install)
app.mount('#app')`),-1)])]),_:1})]),_:1})],512))}});export{b as default};
