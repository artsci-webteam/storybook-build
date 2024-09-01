import{l as i,o as d,b as m,g as h,e as D,n as u,s as W,p as V,x as P}from"./vue.esm-bundler-DMt0-Ms5.js";import{_ as x}from"./Logo-BNSxOCBF.js";import E from"./BrandBarDocs-DLi6XKvY.js";import"./jsx-runtime-DUGI9qWA.js";import"./index-DXBuBsY6.js";import"./iframe-BhBlXoXB.js";import"../sb-preview/runtime.js";import"./index-B4WLXFGE.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./package-Cz5TQ7X5.js";import"./index-D6zPPb0O.js";const N={name:"researchbase-research-bar",components:{ResearchLogo:x},props:{narrow:{type:Boolean,default:!1}},setup(e,r){const t=i(()=>{let o=["research-bar"];return(e.narrow||r.slots.second_row_content)&&o.push("research-bar--narrow"),o}),n=i(()=>r.slots.parent_title&&r.slots.parent_title().length||r.slots.bottom_content&&r.slots.bottom_content().length);return{getClasses:t,showBottomBar:n}}},I=(e,r)=>{const t=e.__vccOpts||e;for(const[n,o]of r)t[n]=o;return t},O={class:"research-bar__container"},z={key:0,class:"research-bar__below"},F={class:"research-bar__container"};function L(e,r,t,n,o,j){const R=P("research-logo");return d(),m("header",{class:V(n.getClasses),"data-research-header":""},[h("div",O,[D(R),u(e.$slots,"default")]),e.$slots.second_row_content?(d(),m("div",z,[h("div",F,[u(e.$slots,"second_row_content")])])):W("",!0)],2)}const p=I(N,[["render",L]]);N.__docgenInfo={displayName:"researchbase-research-bar",description:`The Washu Brand Bar is the visual starting point for all
branded websites and applications.`,tags:{},exportName:"default",props:[{name:"narrow",description:"Determines whether to use the narrow version of the bar.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",description:"Default slot shows content next to the logo."},{name:"second_row_content"}],sourceFiles:["/home/runner/work/storybook-build/storybook-build/src/components/brand-bar/BrandBar.vue"]};const ae={title:"Components/Branding/Brand Bar",component:p,tags:["autodocs"],argTypes:{narrow:{control:{type:"boolean"}},default:{control:{type:"text"}},second_row_content:{control:{type:"text"}}},parameters:{docs:{source:{code:null},page:E}}},M=e=>({components:{ResearchBar:p},setup(){return{args:e}},template:`
    <researchbase-research-bar :narrow="args.narrow">
      {{ args.default }}
    </researchbase-research-bar>
  `}),a=M.bind({});a.args={narrow:!1,default:"",second_row_content:""};const $=e=>({components:{ResearchBar:p},setup(){return{args:e}},template:`
    <researchbase-research-bar :narrow="args.narrow">
      <h1 class="site-name">{{ args.default }}</h1>
    </researchbase-research-bar>
`}),s=$.bind({});s.args={...a.args,default:"Brand"};const c=$.bind({});c.args={...s.args,narrow:!0};const X=e=>({components:{ResearchBar:p},setup(){return{args:e}},template:`
    <researchbase-research-bar :narrow="args.narrow">
      <div class="parent-site-name">{{ args.default }}</div>
      <template #second_row_content>
        <h1 class="site-name">{{ args.second_row_content }}</h1>
      </template>
    </researchbase-research-bar>
`}),l=X.bind({});l.args={...a.args,default:"Brand",second_row_content:"Icon Browser"};var b,_,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
