import{_ as f}from"./ArticleSide.vue_vue_type_style_index_0_lang-BjxnQi9V.js";import{d as b,a as V,c as t,w as i,f as x,o as g,b as s,u as o,l,e as a,t as u,z as r,O as q,h as v}from"./index-bweijiTY.js";const C={class:"ICard",ref:"containerRef"},y={style:{display:"flex","align-items":"center",gap:"24px"}},k={style:{display:"flex","align-items":"center",gap:"24px","flex-direction":"column"}},D=b({__name:"Card",setup(I,{expose:n}){n({name:"ICard"});const m=[{title:"参数",dataIndex:"param",key:"param",width:80},{title:"描述",dataIndex:"description",key:"description"},{title:"类型",dataIndex:"type",key:"type",width:300,customRender:({text:d})=>v("span",{style:{color:"#c41d7f",fontWeight:"500"}},d)},{title:"默认值",dataIndex:"defaultValue",key:"defaultValue",width:100}],p=[{key:"1",param:"bordered",description:"是否显示边框",type:"boolean",defaultValue:"true"},{key:"2",param:"title",description:"卡片标题",type:"string | slot",defaultValue:"-"},{key:"3",param:"extra",description:"卡片右上角的操作区域",type:"slot",defaultValue:"-"}];return(d,e)=>{const c=x("a-table");return g(),V("div",C,[t(f,null,{default:i(()=>[e[7]||(e[7]=s("h1",null,"VCard 卡片",-1)),e[8]||(e[8]=s("h2",{id:"基本用法"},"基本用法",-1)),t(o(l),{lang:"vue"},{demo:i(()=>[s("div",y,[t(o(r),{title:"标题"},{default:i(()=>[...e[0]||(e[0]=[a(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error illum ratione iste incidunt, officia velit explicabo, eveniet nobis odio doloribus dolorem reprehenderit doloremque? Quibusdam, autem esse? Deserunt, quasi commodi! ",-1)])]),_:1})])]),code:i(()=>[...e[1]||(e[1]=[a(u(`
<script setup lang="ts">
import { VCard } from 'void-design-vue'
<\/script>

<template>
  <VCard title="标题">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error illum ratione iste incidunt, offvelit explicabo, eveniet nobis odio doloribus dolorem reprehenderit doloremque? Quibusdam, autem eDeserunt, quasi commodi!
  </VCard>
</template>
`),-1)])]),_:1}),e[9]||(e[9]=s("h2",{id:"更多用法"},"更多用法",-1)),t(o(l),{lang:"vue"},{demo:i(()=>[s("div",k,[t(o(r),{title:"无边框卡片",bordered:!1},{default:i(()=>[...e[2]||(e[2]=[a(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error illum ratione iste incidunt, officia velit explicabo, eveniet nobis odio doloribus dolorem reprehenderit doloremque? Quibusdam, autem esse? Deserunt, quasi commodi! ",-1)])]),_:1}),t(o(r),{bordered:!0},{title:i(()=>[...e[3]||(e[3]=[a("自定义插槽",-1)])]),extra:i(()=>[t(o(q))]),default:i(()=>[e[4]||(e[4]=a(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam explicabo quisquam quidem tempora optio perspiciatis vitae ab molestiae recusandae omnis aliquid expedita iste ipsum hic iure deserunt nostrum, tempore sit. ",-1))]),_:1}),t(o(r),null,{default:i(()=>[...e[5]||(e[5]=[a(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quas consectetur sit, enim at id ipsa ipsum in, assumenda mollitia. Animi nam quas quo mollitia odit nostrum ipsa corrupti. ",-1)])]),_:1})])]),code:i(()=>[...e[6]||(e[6]=[a(u(`
<script setup lang="ts">
import { VCard } from 'void-design-vue'
<\/script>

<template>

  <VCard title="无边框卡片" :bordered="false">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error illum ratione iste incidunt, officia
    velit explicabo, eveniet nobis odio doloribus dolorem reprehenderit doloremque? Quibusdam, autem esse?
    Deserunt, quasi commodi!
  </VCard>

  <VCard :bordered="true">
    <template #title>自定义插槽</template>
    <template #extra>
      <VThemeToggle />
    </template>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam explicabo quisquam quidem tempora optio
      perspiciatis vitae ab molestiae recusandae omnis aliquid expedita iste ipsum hic iure deserunt nostrum,
      tempore sit.
  </VCard>

  <VCard>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum est quas consectetur sit, enim at id ipsa
    ipsum in, assumenda mollitia. Animi nam quas quo mollitia odit nostrum ipsa corrupti.
  </VCard>

</template>
`),-1)])]),_:1}),e[10]||(e[10]=s("h2",{id:"API"},"API",-1)),t(c,{columns:m,"data-source":p,pagination:!1,bordered:""})]),_:1})],512)}}});export{D as default};
