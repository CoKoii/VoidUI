import{_ as g}from"./ArticleSide.vue_vue_type_style_index_0_lang-DHKYw3cQ.js";import{d as V,a as I,c as n,w as l,f as b,o as k,b as t,u as o,D as w,e as s,t as r,l as p,v as a,h as v}from"./index-rx187WPW.js";/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var i={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},c={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},f={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]};const M={class:"Icon",ref:"containerRef"},z={style:{display:"flex","align-items":"center",gap:"24px"}},C={style:{display:"flex","align-items":"center",gap:"24px"}},S=V({__name:"Icon",setup(D,{expose:u}){u({name:"Icon"});const m=[{title:"参数",dataIndex:"param",key:"param",width:80},{title:"描述",dataIndex:"description",key:"description"},{title:"类型",dataIndex:"type",key:"type",width:300,customRender:({text:d})=>v("span",{style:{color:"#c41d7f",fontWeight:"500"}},d)},{title:"默认值",dataIndex:"defaultValue",key:"defaultValue",width:100}],y=[{key:"1",param:"icon",description:"图标对象或名称",type:"object | string | [string, string]",defaultValue:"-"},{key:"2",param:"color",description:"图标颜色",type:"string",defaultValue:"-"},{key:"3",param:"size",description:"图标大小",type:"2xs | xs | sm | lg | xl | 2xl | 1x | 2x | 3x | 4x | 5x | 6x | 7x | 8x | 9x | 10x",defaultValue:"1x"},{key:"4",param:"rotation",description:"旋转角度",type:"90 | 180 | 270",defaultValue:"-"},{key:"5",param:"spin",description:"是否开启旋转动画",type:"boolean",defaultValue:"false"},{key:"6",param:"bounce",description:"是否开启跳动动画",type:"boolean",defaultValue:"false"},{key:"7",param:"shake",description:"是否开启抖动动画",type:"boolean",defaultValue:"false"},{key:"8",param:"beat",description:"是否开启心跳动画",type:"boolean",defaultValue:"false"},{key:"9",param:"fade",description:"是否开启淡入淡出动画",type:"boolean",defaultValue:"false"}];return(d,e)=>{const x=b("a-table");return k(),I("div",M,[n(g,null,{default:l(()=>[e[3]||(e[3]=t("h1",null,"VIcon 图标",-1)),e[4]||(e[4]=t("span",null,"本站所有图标均来自",-1)),e[5]||(e[5]=t("a",{href:"https://fontawesome.com/",style:{color:"#2b5aed","font-weight":"900","font-size":"20px"},target:"_blank"},"【FontAwesome】",-1)),e[6]||(e[6]=t("span",null,"图标库，该网站提供丰富的高质量图标资源。",-1)),e[7]||(e[7]=t("h2",{id:"依赖安装"},"依赖安装",-1)),n(o(w),{"line-numbers":!1,extra:{copy:!0,showLang:!0},dots:!1,lang:"bash"},{default:l(()=>[...e[0]||(e[0]=[s(r("npm install @fortawesome/free-solid-svg-icons"),-1)])]),_:1}),e[8]||(e[8]=t("h2",{id:"基本用法"},"基本用法",-1)),n(o(p),{lang:"vue"},{demo:l(()=>[t("div",z,[n(o(a),{icon:o(i)},null,8,["icon"]),n(o(a),{icon:o(f)},null,8,["icon"]),n(o(a),{icon:o(c)},null,8,["icon"])])]),code:l(()=>[...e[1]||(e[1]=[s(r(`
<script setup lang="ts">
import { VIcon } from 'void-design-vue'
import { faCopy, faDownload, faMoon } from '@fortawesome/free-solid-svg-icons'
<\/script>

<template>
  <VIcon :icon="faMoon" />
  <VIcon :icon="faCopy" />
  <VIcon :icon="faDownload" />
</template>
`),-1)])]),_:1}),e[9]||(e[9]=t("h2",{id:"更多用法"},"更多用法",-1)),n(o(p),{lang:"vue"},{demo:l(()=>[t("div",C,[n(o(a),{icon:o(i),color:"red"},null,8,["icon"]),n(o(a),{icon:o(f),spin:""},null,8,["icon"]),n(o(a),{icon:o(c),size:"2x",color:"green"},null,8,["icon"]),n(o(a),{icon:o(c),size:"2x",color:"green",rotation:"90"},null,8,["icon"]),n(o(a),{icon:o(i),shake:""},null,8,["icon"]),n(o(a),{icon:o(i),bounce:""},null,8,["icon"]),n(o(a),{icon:o(i),beat:""},null,8,["icon"]),n(o(a),{icon:o(i),fade:""},null,8,["icon"])])]),code:l(()=>[...e[2]||(e[2]=[s(r(`
<script setup lang="ts">
import { VIcon } from 'void-design-vue'
import { faCopy, faDownload, faMoon } from '@fortawesome/free-solid-svg-icons'
<\/script>

<template>
  <VIcon :icon="faMoon" color='red'  />
  <VIcon :icon="faCopy" spin />
  <VIcon :icon="faDownload" size='2x' color='green' />
  <VIcon :icon="faDownload" size='2x' color='green' rotation='90'/>
  <VIcon :icon="faMoon" shake />
  <VIcon :icon="faMoon" bounce />
  <VIcon :icon="faMoon" beat />
  <VIcon :icon="faMoon" fade />
</template>
`),-1)])]),_:1}),e[10]||(e[10]=t("h2",{id:"API"},"API",-1)),n(x,{columns:m,"data-source":y,pagination:!1,bordered:""})]),_:1})],512)}}});export{S as default};
