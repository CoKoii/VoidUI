import{_ as f}from"./ArticleSide.vue_vue_type_style_index_0_lang-Bi9L_xOX.js";import{d as w,a as y,c as a,w as n,f as C,o as P,b as t,u as d,l as s,e as o,t as r,h as V}from"./index-CJw2YHZJ.js";const I={class:"Icon",ref:"containerRef"},v=`
  <VCodePreview>
    <template #demo>
      <h1>标题</h1>
    </template>
    <template #code>
      {{ \`
        <template><h1>标题</h1></template>
      \` }}
    </template>
  </VCodePreview>`,A=w({__name:"CodePreview",setup(x,{expose:p}){p({name:"CodePreview"});const i=[{title:"参数",dataIndex:"param",key:"param",width:80},{title:"描述",dataIndex:"description",key:"description"},{title:"类型",dataIndex:"type",key:"type",width:300,customRender:({text:l})=>V("span",{style:{color:"#c41d7f",fontWeight:"500"}},l)},{title:"默认值",dataIndex:"defaultValue",key:"defaultValue",width:100}],m=[{key:"1",param:"show",description:"是否默认展开",type:"boolean",defaultValue:"false"}];return(l,e)=>{const u=C("a-table");return P(),y("div",I,[a(f,null,{default:n(()=>[e[5]||(e[5]=t("h1",null,"VCodePreview 代码预览",-1)),e[6]||(e[6]=t("span",null,"可预览代码效果，并查看代码实现",-1)),e[7]||(e[7]=t("h2",{id:"基本用法"},"基本用法",-1)),a(d(s),null,{demo:n(()=>[a(d(s),null,{demo:n(()=>[...e[1]||(e[1]=[t("h1",null,"标题",-1)])]),code:n(()=>[...e[2]||(e[2]=[o(r(`
              <template><h1>标题</h1></template>
              `),-1)])]),_:1})]),code:n(()=>[o(r(v))]),_:1}),e[8]||(e[8]=t("p",null,[o(" 对于部分代码，如果直接放入"),t("span",null,"{{ `` }}"),o("会引起报错，请先将引起报错的字符转义 ")],-1)),e[9]||(e[9]=t("h2",{id:"API"},"API",-1)),t("p",null,[e[3]||(e[3]=o(" VCodePreview 组件继承了",-1)),t("span",{style:{color:"#2b5aed","font-weight":"600",padding:"0 4px",cursor:"pointer"},onClick:e[0]||(e[0]=b=>l.$router.push("/components/code#API"))},"VCode"),e[4]||(e[4]=o("的所有API,同时也新增了一个自己的API ",-1))]),a(u,{columns:i,"data-source":m,pagination:!1,bordered:""})]),_:1})],512)}}});export{A as default};
