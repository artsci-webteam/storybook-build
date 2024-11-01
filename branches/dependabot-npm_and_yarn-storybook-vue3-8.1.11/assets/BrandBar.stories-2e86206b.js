import{j as d,o as i,b as m,g as h,e as D,l as u,p as W,n as V,s as P}from"./vue.esm-bundler-317b944f.js";import{_ as E}from"./Logo-5ce5ec9a.js";import I from"./BrandBarDocs-17184af2.js";import"./jsx-runtime-8df53d59.js";import"./index-5209a63f.js";import"./iframe-e1f01da6.js";import"../sb-preview/runtime.js";import"./doctrine-5ef37402.js";import"./index-1b441bc2.js";import"./index-356e4a49.js";import"./package-68a66de7.js";import"./index-fb7509c9.js";const N={name:"researchbase-research-bar",components:{ResearchLogo:E},props:{narrow:{type:Boolean,default:!1}},setup(e,r){const t=d(()=>{let o=["research-bar"];return(e.narrow||r.slots.second_row_content)&&o.push("research-bar--narrow"),o}),n=d(()=>r.slots.parent_title&&r.slots.parent_title().length||r.slots.bottom_content&&r.slots.bottom_content().length);return{getClasses:t,showBottomBar:n}}},O=(e,r)=>{const t=e.__vccOpts||e;for(const[n,o]of r)t[n]=o;return t},j={class:"research-bar__container"},x={key:0,class:"research-bar__below"},z={class:"research-bar__container"};function F(e,r,t,n,o,X){const R=P("research-logo");return i(),m("header",{class:V(n.getClasses),"data-research-header":""},[h("div",j,[D(R),u(e.$slots,"default")]),e.$slots.second_row_content?(i(),m("div",x,[h("div",z,[u(e.$slots,"second_row_content")])])):W("",!0)],2)}const p=O(N,[["render",F]]);N.__docgenInfo={displayName:"researchbase-research-bar",description:`The Washu Brand Bar is the visual starting point for all
branded websites and applications.`,tags:{},exportName:"default",props:[{name:"narrow",description:"Determines whether to use the narrow version of the bar.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",description:"Default slot shows content next to the logo."},{name:"second_row_content"}],sourceFiles:["/home/runner/work/storybook-build/storybook-build/src/components/brand-bar/BrandBar.vue"]};const ae={title:"Components/Branding/Brand Bar",component:p,tags:["autodocs"],argTypes:{narrow:{control:{type:"boolean"}},default:{control:{type:"text"}},second_row_content:{control:{type:"text"}}},parameters:{docs:{source:{code:null},page:I}}},L=e=>({components:{ResearchBar:p},setup(){return{args:e}},template:`
    <researchbase-research-bar :narrow="args.narrow">
      {{ args.default }}
    </researchbase-research-bar>
  `}),a=L.bind({});a.args={narrow:!1,default:"",second_row_content:""};const $=e=>({components:{ResearchBar:p},setup(){return{args:e}},template:`
    <researchbase-research-bar :narrow="args.narrow">
      <h1 class="site-name">{{ args.default }}</h1>
    </researchbase-research-bar>
`}),s=$.bind({});s.args={...a.args,default:"Brand"};const c=$.bind({});c.args={...s.args,narrow:!0};const M=e=>({components:{ResearchBar:p},setup(){return{args:e}},template:`
    <researchbase-research-bar :narrow="args.narrow">
      <div class="parent-site-name">{{ args.default }}</div>
      <template #second_row_content>
        <h1 class="site-name">{{ args.second_row_content }}</h1>
      </template>
    </researchbase-research-bar>
`}),l=M.bind({});l.args={...a.args,default:"Brand",second_row_content:"Icon Browser"};var b,_,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    ResearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <researchbase-research-bar :narrow="args.narrow">
      {{ args.default }}
    </researchbase-research-bar>
  \`
})`,...(g=(_=a.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var w,f,B;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    ResearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <researchbase-research-bar :narrow="args.narrow">
      <h1 class="site-name">{{ args.default }}</h1>
    </researchbase-research-bar>
\`
})`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var v,y,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    ResearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <researchbase-research-bar :narrow="args.narrow">
      <h1 class="site-name">{{ args.default }}</h1>
    </researchbase-research-bar>
\`
})`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var T,k,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    ResearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <researchbase-research-bar :narrow="args.narrow">
      <div class="parent-site-name">{{ args.default }}</div>
      <template #second_row_content>
        <h1 class="site-name">{{ args.second_row_content }}</h1>
      </template>
    </researchbase-research-bar>
\`
})`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const se=["Default","WithSiteTitle","Narrow","WithParentSiteTitle"];export{a as Default,c as Narrow,l as WithParentSiteTitle,s as WithSiteTitle,se as __namedExportsOrder,ae as default};