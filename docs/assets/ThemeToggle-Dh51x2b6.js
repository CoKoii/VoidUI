import{_ as f}from"./ArticleSide.vue_vue_type_style_index_0_lang-BNJlaKAy.js";import{d as V,a as k,c as t,w as a,f as T,o as c,b as o,u as l,l as d,e as n,t as p,O as m,h}from"./index-DVn1RAMI.js";const b={class:"Icon",ref:"containerRef"},w=V({__name:"ThemeToggle",setup(x,{expose:u}){u({name:"VThemeToggle"});const s=[{title:"参数",dataIndex:"param",key:"param",width:80},{title:"描述",dataIndex:"description",key:"description"},{title:"类型",dataIndex:"type",key:"type",width:300,customRender:({text:i})=>h("span",{style:{color:"#c41d7f",fontWeight:"500"}},i)},{title:"默认值",dataIndex:"defaultValue",key:"defaultValue",width:100}],g=[{key:"1",param:"lightTheme",description:"明亮模式主题名称",type:"string",defaultValue:"-"},{key:"2",param:"darkTheme",description:"暗黑模式主题名称",type:"string",defaultValue:"-"},{key:"3",param:"themeKey",description:"当前主题 key",type:"string",defaultValue:"-"},{key:"4",param:"persistent",description:"是否持久化存储主题",type:"boolean",defaultValue:"false"},{key:"5",param:"followSystem",description:"是否跟随系统主题",type:"boolean",defaultValue:"false"},{key:"6",param:"duration",description:"动画持续时间（毫秒）",type:"number",defaultValue:"300"},{key:"7",param:"easing",description:"动画缓动函数",type:"string",defaultValue:"ease-in-out"},{key:"8",param:"maxRadius",description:"动画扩散的最大半径",type:"number",defaultValue:"-"},{key:"9",param:"storageKey",description:"本地存储 key",type:"string",defaultValue:"theme"},{key:"10",param:"emitInitial",description:"是否在初始化时触发一次 theme-change 事件",type:"boolean",defaultValue:"false"},{key:"11",param:"respectReducedMotion",description:"是否遵循系统“减少动态效果”设置",type:"boolean",defaultValue:"true"}],y=[{key:"1",event:"theme-change",description:"主题切换时触发",params:"[theme: string]"}];return(i,e)=>{const r=T("a-table");return c(),k("div",b,[t(f,null,{default:a(()=>[e[3]||(e[3]=o("h1",null,"VThemeToggle 主题切换",-1)),e[4]||(e[4]=o("span",null,"只需配置好色彩变量，剩下的一切交给组件",-1)),e[5]||(e[5]=o("h2",{id:"基本用法"},"基本用法",-1)),t(l(d),{lang:"vue"},{demo:a(()=>[t(l(m))]),code:a(()=>[...e[0]||(e[0]=[n(p(`
<script setup lang="ts">
import { VThemeToggle } from 'void-design-vue'
<\/script>

<template>
  <VThemeToggle />
</template>
`),-1)])]),_:1}),e[6]||(e[6]=o("h2",{id:"更多用法"},"自定义内容",-1)),t(l(d),{lang:"vue"},{demo:a(()=>[t(l(m),null,{default:a(()=>[...e[1]||(e[1]=[n("点我",-1)])]),_:1})]),code:a(()=>[...e[2]||(e[2]=[n(p(`
<script setup lang="ts">
import { VThemeToggle } from 'void-design-vue'
<\/script>

<template>
  <VThemeToggle>点我</VThemeToggle>
</template>
`),-1)])]),_:1}),e[7]||(e[7]=o("h2",{id:"API"},"API",-1)),t(r,{columns:s,"data-source":g,pagination:!1,bordered:""}),e[8]||(e[8]=o("h2",{id:"事件"},"事件",-1)),t(r,{columns:s,"data-source":y,pagination:!1,bordered:""})]),_:1})],512)}}});export{w as default};
