import{d as n,l as s,o,m as u,w as i,n as r,p as d,q as h}from"./vue.esm-bundler-2dba5e38.js";const f=n({__name:"Headline",props:{level:{type:String,default:"h2",validator:function(e){return["h1","h2","h3","h4","h5","h6"].indexOf(e)!==-1}},highlight:{type:Boolean,default:!1},text_style:{type:String,default:""},underline:{type:Boolean,default:!1}},setup(e){const a=e,l=s(()=>({headline:!0,"headline--uppercase":a.text_style==="uppercase","headline--serif":a.text_style==="serif","headline--underline":a.underline,"headline--highlight":a.highlight}));return(t,p)=>(o(),u(h(e.level),{class:d(l.value)},{default:i(()=>[r(t.$slots,"default")]),_:3},8,["class"]))}});f.__docgenInfo={exportName:"default",displayName:"Headline",description:"",tags:{},props:[{name:"level",type:{name:"string"},defaultValue:{func:!1,value:"'h2'"},values:["h1","h2","h3","h4","h5","h6"]},{name:"highlight",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"text_style",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"underline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/storybook-build/storybook-build/src/components/headline/Headline.vue"]};export{f as _};
