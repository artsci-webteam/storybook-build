import{d as ve,l as p,o as r,b as i,n as m,s as u,p as _,v as ye,y as ke,g as V,e as we,w as N,m as W,f as g,t as D}from"./vue.esm-bundler-2dba5e38.js";import{c as j}from"./utlity-04b79d70.js";import{_ as Ce}from"./Headline-caa11694.js";import{B as R,_ as xe}from"./Button-2aaf010c.js";import{B as $}from"./_background-049b637c.js";import{M as G}from"./media-1d760b2d.js";import{_ as Te,a as Be}from"./GridItem-eadcf046.js";import ze from"./preview-a092e464.js";import"./DocumentationTemplate-d9771edd.js";import"./jsx-runtime-7f2a22bd.js";import"./index-f478ac44.js";import"./iframe-fed2b359.js";import"../sb-preview/runtime.js";import"./index-f4dda215.js";import"./index-1b441bc2.js";import"./index-356e4a49.js";import"./index-aae253a8.js";const Se="/branches/dependabot-npm_and_yarn-types-node-22.7.4/assets/122-6f029ca9.jpg",Ae={key:0,class:"fas fa-arrow-right"},_e=ve({__name:"PseudoButton",props:{color:{type:String,default:"primary",validator:function(a){return["primary","secondary","tertiary","link"].indexOf(a)!==-1}},size:{type:String,default:"medium",validator:function(a){return["small","medium","large"].indexOf(a)!==-1}},arrow:{type:Boolean,default:!0},outline:{type:Boolean,default:!1},font:{type:String,default:""}},setup(a){const e=a,s=p(()=>({bttn:!0,"bttn--primary":e.color==="primary","bttn--secondary":e.color==="secondary","bttn--tertiary":e.color==="tertiary","bttn--link":e.color==="link","bttn--outline":e.outline,"bttn--font-serif":e.font==="serif","bttn--font-sans-serif":e.font==="sans-serif","bttn--small":e.size==="small","bttn--medium":e.size==="medium","bttn--large":e.size==="large"}));return(l,v)=>(r(),i("div",{class:_(s.value)},[m(l.$slots,"default"),a.arrow?(r(),i("i",Ae)):u("",!0)],2))}});_e.__docgenInfo={exportName:"default",displayName:"PseudoButton",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","link"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"arrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"font",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/storybook-build/storybook-build/src/components/button/PseudoButton.vue"]};const Ne=2;class Re{constructor(e,s){let l,v,c,d;for(d=0;d<s.length&&(c=e.querySelector(s[d]),!c);d++);c&&(e.style.cursor="pointer",e.onmousedown=b=>{this.ignoreClick(b)||(v=+new Date)},e.onmouseup=b=>{this.ignoreClick(b)||(l=+new Date,l-v<200&&c.click())})}ignoreClick(e){return e.button===Ne||["A","BUTTON"].indexOf(e.target.nodeName)!==-1}}function $e(a,e=[".click-target"]){const s=document.querySelectorAll(a);Array.prototype.forEach.call(s,l=>{new Re(l,e)})}const Ge={class:"media__inner"},Ve=["href"],We={class:"card__body"},De={key:0},je=["href"],Ie={key:1,class:"card__details"},Le={key:0,class:"card__subtitle"},Me={key:1,class:"card__meta"},Pe={key:2},S=ve({__name:"Card",props:{headline_style:{type:String,default:""},url:{type:String},link_text:{type:String},link_indicator:{type:Boolean,default:!0},button_align_bottom:{type:Boolean,default:!1},centered:{type:Boolean},...R.props,...$.props,orientation:{type:String,default:"",validator:a=>["","left","right"].indexOf(a)!==-1},...G.props,media_padded:{type:Boolean,default:!1}},setup(a){const e=a,s=ye(),l=p(()=>{let t=["card"];return["centered","media_padded","button_align_bottom"].forEach(A=>{e[A]===!0&&t.push(`card--${j(A)}`)}),e.orientation&&t.push(`card--layout-${j(e.orientation)}`),$.addBackgroundClass(t,e),R.addBorderlessClass(t,e),e.url&&t.push("click-container"),t}),v=p(()=>{let t=["media"];return G.addMediaClasses(t,e),t}),c=p(()=>{let t=["bttn--transparent","bttn--light-font"];return e.link_indicator&&e.url&&!e.link_text&&(t.push("bttn--circle"),t.push("bttn--no-text")),d.value==="button"&&t.push("click-target"),t}),d=p(()=>e.url?s.title?"title":!e.link_text&&s.media?"image":"button":null),b=p(()=>d.value==="title"?e.url:!1),fe=p(()=>!!(s.subtitle||s.meta));return ke(()=>{e.url&&$e(".click-container:not([data-research-no-link])")}),(t,A)=>(r(),i("div",{class:_(l.value)},[t.$slots.media?(r(),i("div",{key:0,class:_(v.value)},[V("div",Ge,[d.value==="image"?(r(),i("a",{key:0,href:a.url,class:"click-target"},[m(t.$slots,"media")],8,Ve)):m(t.$slots,"media",{key:1})])],2)):u("",!0),V("div",We,[t.$slots.title?(r(),i("header",De,[we(Ce,{text_style:a.headline_style},{default:N(()=>[b.value?(r(),i("a",{key:0,href:b.value,class:"click-target"},[m(t.$slots,"title",{},()=>[g("Title")])],8,je)):m(t.$slots,"title",{key:1},()=>[g("Title")])]),_:3},8,["text_style"])])):u("",!0),fe.value===!0?(r(),i("div",Ie,[t.$slots.subtitle?(r(),i("div",Le,[m(t.$slots,"subtitle",{},()=>[g("Subtitle")])])):u("",!0),t.$slots.meta?(r(),i("div",Me,[m(t.$slots,"meta",{},()=>[g("Meta")])])):u("",!0)])):u("",!0),m(t.$slots,"default",{},()=>[g("Body")]),a.url&&(a.link_indicator||a.link_text)?(r(),i("footer",Pe,[d.value==="button"?(r(),W(xe,{key:0,class:_(c.value),url:a.url,size:"medium"},{default:N(()=>[g(D(a.link_text),1)]),_:1},8,["class","url"])):(r(),W(_e,{key:1,class:_(c.value)},{default:N(()=>[g(D(a.link_text),1)]),_:1},8,["class"]))])):u("",!0)])],2))}});S.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"headline_style",description:"Title style for the headline.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"url",description:"A URL to the resource that the card represents.",type:{name:"string"}},{name:"link_text",description:"Text to display in a button.",type:{name:"string"}},{name:"link_indicator",description:"Display a circle button when there is no button text.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"button_align_bottom",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"centered",description:"Alignment of text content.",type:{name:"boolean"}},{name:"orientation",description:"How to lay out the content of the card. Default is stacked.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"media_padded",description:`Add padding around the entirety of the contents of the card.
**Note** this has no effect when paired with the borderless option.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"media",description:"Media displayed at the top of the card."},{name:"title"},{name:"subtitle",description:"The subtitle of the card.."},{name:"meta",description:"The meta of the card.."},{name:"default",description:"The body content of the card."}],sourceFiles:["/home/runner/work/storybook-build/storybook-build/src/components/card/Card.vue"]};const qe="/branches/dependabot-npm_and_yarn-types-node-22.7.4/assets/person-one-e1749cef.svg",ot={parameters:{docs:{source:{code:null}}},title:"Components/Card",component:S,tags:["autodocs"],argTypes:{headline_style:{name:"Title style",options:["serif",""],control:{type:"select",labels:{serif:"Zilla Slab (default)","":"Roboto"}},table:{category:"Display options"}},url:{name:"URL",table:{category:"Content"}},link_text:{name:"Link text",table:{category:"Content"}},link_indicator:{name:"Display button when there is no link text",if:{arg:"link_text",truthy:!1},table:{category:"Display options"}},button_align_bottom:{name:"Align button to bottom",table:{category:"Display options"}},...$.argTypes,...R.argTypes,centered:{name:"Centered",table:{category:"Display options"}},...G.argTypes,orientation:{name:"Orientation",options:["","left","right"],control:{type:"select",labels:{"":"stacked"}},table:{category:"Display options"}},media_padded:{name:"Padded",table:{category:"Media"}},media:{name:"Media",control:"text",table:{category:"Media"}},title:{name:"Title",control:"text",table:{category:"Content"}},subtitle:{name:"Subtitle",control:{type:"text"},table:{category:"Content"}},meta:{name:"Meta",control:{type:"text"},table:{category:"Content"}},default:{name:"Content",control:{type:"text"},table:{category:"Content"}},section_background:{name:"Section background",options:["","bg--black","bg--black--pattern--brain","bg--black--pattern--community","bg--black--pattern--particle","bg--gold","bg--gold--pattern--brain","bg--gold--pattern--community","bg--gold--pattern--particle","bg--gray","bg--gray--pattern--brain","bg--gray--pattern--community","bg--gray--pattern--particle","bg--white","bg--white--pattern--brain","bg--white--pattern--community","bg--white--pattern--particle"],control:{type:"select",labels:{"":"- None -","bg--black":"Black","bg--black--pattern--brain":"Black - Brain pattern","bg--black--pattern--community":"Black - Community pattern","bg--black--pattern--particle":"Black - Particle pattern","bg--gold":"Gold","bg--gold--pattern--brain":"Gold - Brain pattern","bg--gold--pattern--community":"Gold - Community pattern","bg--gold--pattern--particle":"Gold - Particle pattern","bg--gray":"Gray","bg--gray--pattern--brain":"Gray - Brain pattern","bg--gray--pattern--community":"Gray - Community pattern","bg--gray--pattern--particle":"Gray - Particle pattern","bg--white":"White","bg--white--pattern--brain":"White - Brain pattern","bg--white--pattern--community":"White - Community pattern","bg--white--pattern--particle":"White - Particle pattern"}},table:{category:"Container"}},grid_type:{name:"Grid",options:["onecol","onecol__narrow","twocol--50-50","threecol--33-34-33","fourcol--25"],control:{type:"select",labels:{onecol:"One column",onecol__narrow:"One column (narrow)","twocol--50-50":"Two columns","threecol--33-34-33":"Three columns","fourcol--25":"Four columns"}},table:{category:"Container"}},record_count:{name:"# of records",table:{category:"Container"}}}},o=a=>({components:{ResearchCard:S},setup(){return{args:a}},template:`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  `}),n=o.bind({});n.args={media:'<img src="'+Se+'" alt="Alt">',title:"Arts and Culture",subtitle:"",meta:"",default:"For decades, Washu has been a gathering place for artists, creating a cultural hub that’s more accessible than any major city. ",url:"https://artsci.wustl.edu",link_text:"Explore the arts",link_indicator:!0,button_align_bottom:!1,headline_style:"serif",borderless:!1,background:"",centered:!1,orientation:"",media_border:!1,media_size:"large",media_shape:"widescreen",media_padded:!1,section_background:""};const f=o.bind({});f.args={...n.args,link_text:""};const y=o.bind({});y.args={...n.args,title:""};const k=o.bind({});k.args={...n.args,title:"",link_text:""};const z=o.bind({});ImageUsingIcon.args={...n.args,centered:!0,media_padded:!0,media_size:"small",media_shape:"circle",media_border:!0,title:"24hour-phone",media:'<img icon="24hour-phone" variant="two-color" src="https://icons.brand.wustl.edu/brand-icons/megaphone-bullhorn-two-color.png" alt="24hour-phone" loading="lazy" class="two-color">',url:"https://wustl.edu",default:""};const w=o.bind({});w.args={...n.args,borderless:!0};const h=o.bind({});h.args={...n.args,media:'<img src="'+qe+'" alt="not-found">',orientation:"right",media_size:"small",media_shape:"circle",media_border:!0,title:"User not found",subtitle:"Washington University in St Louis",default:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",borderless:!0};h.parameters={viewport:{viewports:ze.parameters.viewport.viewports,defaultViewport:"tablet"}};const C=o.bind({});C.args={...n.args,media:'<iframe src="https://www.youtube.com/embed/iYv2KBtE7e4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};const x=o.bind({});x.args={...n.args,url:""};const T=o.bind({});T.args={...n.args,button_align_bottom:!0};const Oe=a=>({components:{ResearchGrid:Te,ResearchGridItem:Be,ResearchCard:S},setup(){return{args:a}},template:`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <research-grid :type="args.grid_type">
        <research-grid-item v-for="item in args.record_count" :key="item">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </research-grid-item>
      </research-grid>
    </div>
  `}),B=Oe.bind({});B.args={...n.args,grid_type:"threecol--33-34-33",record_count:3};var I,L,M;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,q,O;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(O=(q=f.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var E,U,F;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(F=(U=y.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var H,Y,K;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(K=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Z,J,Q;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(Q=(J=z.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,ee,te;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,re;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(re=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ie,oe;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(oe=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var de,le,me;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(me=(le=x.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ce,ge,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid--threecol--33-34-33">
        <div class="list-container">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </div>
      </div>
    </div>
  \`
})`,...(pe=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var ue,be,he;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchGrid,
    ResearchGridItem,
    ResearchCard
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div :class="args.section_background" style="padding-top: 2rem; padding-bottom: 2rem;">
      <research-grid :type="args.grid_type">
        <research-grid-item v-for="item in args.record_count" :key="item">
          <research-card
            :url="args.url"
            :link_text="args.link_text"
            :link_indicator="args.link_indicator"
            :button_align_bottom="args.button_align_bottom"
            :headline_style="args.headline_style"
            :borderless="args.borderless"
            :background="args.background"
            :orientation="args.orientation"
            :media_size="args.media_size"
            :media_shape="args.media_shape"
            :media_border="args.media_border"
            :media_padded="args.media_padded"
            :centered="args.centered"
          >
            <template #media v-if="args.media"><span v-html="args.media" ></span></template>
            <template #title v-if="args.title"><div v-html="args.title" ></div></template>
            <template #subtitle v-if="args.subtitle"><div v-html="args.subtitle" ></div></template>
            <template #meta v-if="args.meta"><div v-html="args.meta" ></div></template>
            <template #default><div v-html="args.default"></div></template>
          </research-card>
        </research-grid-item>
      </research-grid>
    </div>
  \`
})`,...(he=(be=B.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const dt=["Default","LinkedWithNoButtonText","LinkedWithNoTitle","LinkedImage","ImageUsingResearchIcon","WithNoBorder","PersonProfile","WithVideoMedia","WithNoLink","ButtonAlignedToBottom","Grid"];export{T as ButtonAlignedToBottom,n as Default,B as Grid,z as ImageUsingResearchIcon,k as LinkedImage,f as LinkedWithNoButtonText,y as LinkedWithNoTitle,h as PersonProfile,w as WithNoBorder,x as WithNoLink,C as WithVideoMedia,dt as __namedExportsOrder,ot as default};
