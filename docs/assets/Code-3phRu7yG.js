import{_ as v}from"./ArticleSide.vue_vue_type_style_index_0_lang-DHKYw3cQ.js";import{d as g,a as V,c as a,w as t,f as b,o as x,b as l,u as n,l as p,e as o,t as s,D as d,h as y}from"./index-rx187WPW.js";const C={class:"Icon",ref:"containerRef"},w={style:{display:"flex","flex-direction":"column",gap:"16px"}},A=g({__name:"Code",setup(k,{expose:r}){r({name:"Code"});const u=[{title:"参数",dataIndex:"param",key:"param",width:80},{title:"描述",dataIndex:"description",key:"description"},{title:"类型",dataIndex:"type",key:"type",width:300,customRender:({text:i})=>y("span",{style:{color:"#c41d7f",fontWeight:"500"}},i)},{title:"默认值",dataIndex:"defaultValue",key:"defaultValue",width:100}],m=[{key:"1",param:"lang",description:"代码语言（必填）",type:"string",defaultValue:"-"},{key:"2",param:"lineNumbers",description:"是否显示行号",type:"boolean",defaultValue:"true"},{key:"3",param:"extra",description:"额外功能配置：传入 boolean 时整体开关；传入对象时可单独控制复制按钮与语言标签显示",type:"{ copy?: boolean; showLang?: boolean } | boolean",defaultValue:"true"},{key:"4",param:"dots",description:"是否显示代码块头部的装饰圆点",type:"boolean",defaultValue:"true"},{key:"5",param:"path",description:"展示在代码块头部的文件路径/文件名，仅用于展示",type:"string",defaultValue:"-"}];return(i,e)=>{const f=b("a-table");return x(),V("div",C,[a(v,null,{default:t(()=>[e[7]||(e[7]=l("h1",null,"VCode 代码高亮",-1)),e[8]||(e[8]=l("span",null,"可用于常用代码的高亮展示",-1)),e[9]||(e[9]=l("h2",{id:"基本用法"},"基本用法",-1)),a(n(p),{lang:"vue"},{demo:t(()=>[a(n(d),{lang:"js",path:"src/main.js"},{default:t(()=>[...e[0]||(e[0]=[o(s(`
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
`),-1)])]),_:1})]),code:t(()=>[...e[1]||(e[1]=[o(s(`
<script setup lang="ts">
import { VCode } from 'void-design-vue'
<\/script>

<template>
  <VCode lang="vue">
    {{ \` 放入想展示的代码 \` }}
  </VCode>
</template>
`),-1)])]),_:1}),e[10]||(e[10]=l("p",null,[o("对于部分代码，如果直接放入"),l("span",null,"{{ `` }}"),o("会引起报错，请先将引起报错的字符转义")],-1)),e[11]||(e[11]=l("h2",{id:"更多用法"},"更多用法",-1)),a(n(p),{lang:"vue"},{demo:t(()=>[l("div",w,[a(n(d),{lang:"scss"},{default:t(()=>[...e[2]||(e[2]=[o(s(`.Home {
  position: relative;
  height: calc(100vh - 80px);
  overflow: hidden;
}
@media (max-width: 768px) {
  .Home {
    height: calc(100vh - 60px);
  }
}
`),-1)])]),_:1}),a(n(d),{lang:"vue",path:"src/views/About/About.vue"},{default:t(()=>[...e[3]||(e[3]=[o(s("放入想展示的代码"),-1)])]),_:1}),a(n(d),{lang:"java",lineNumbers:!1},{default:t(()=>[...e[4]||(e[4]=[o(s("int a = 9;"),-1)])]),_:1}),a(n(d),{lang:"bash",dots:!1,lineNumbers:!1},{default:t(()=>[...e[5]||(e[5]=[o(s("pnpm create vue"),-1)])]),_:1})])]),code:t(()=>[...e[6]||(e[6]=[o(s(`
<script setup lang="ts">
import { VCode } from 'void-design-vue'
<\/script>

<template>
  <!-- 代码语言 -->
  <VCode lang="csss">
    {{ \` .Home {
  position: relative;
  height: calc(100vh - 80px);
  overflow: hidden;
}
@media (max-width: 768px) {
  .Home {
    height: calc(100vh - 60px);
  }
} \` }}
  </VCode>
  <!-- 代码路径 -->
  <VCode lang="vue" path="src/views/About/About.vue">
    {{ \` 放入想展示的代码 \` }}
  </VCode>
  <!-- 不显示行号 -->
  <VCode lang="java" :lineNumbers="false">
    {{ \` int a = 9; \` }}
  </VCode>
  <!-- 不显示圆点 -->
  <VCode lang="vue" :dots="false" :lineNumbers="false">
    {{ \` pnpm create vue \` }}
  </VCode>
</template>
`),-1)])]),_:1}),e[12]||(e[12]=l("h2",{id:"API"},"API",-1)),a(f,{columns:u,"data-source":m,pagination:!1,bordered:""})]),_:1})],512)}}});export{A as default};
