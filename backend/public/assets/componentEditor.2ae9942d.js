var q=Object.defineProperty;var b=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var $=(e,o,n)=>o in e?q(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,w=(e,o)=>{for(var n in o||(o={}))V.call(o,n)&&$(e,n,o[n]);if(b)for(var n of b(o))C.call(o,n)&&$(e,n,o[n]);return e};import{bv as P,a5 as Q,by as I,aH as g,az as m,X as k,a3 as t,b2 as s,bx as p,bL as _,Y as u,V as v,W as c,bM as z,a2 as N}from"./index.c1160921.js";import{Q as S,a as A,b as D}from"./QSelect.fd2654eb.js";import{Q as B,a as E}from"./QToolbar.1885a6b7.js";import{Q as T,a as f}from"./QTabs.ecf22c1d.js";const O=Q({components:{},unmounted(){this.debounce.cancel()},async beforeMount(){const{name:e}=this.$route.params;await this.getComponent(e),this.getComponents()},data:()=>({loading:!0,width:"50%",component:null,componentName:"",code1:[],code2:[],code3:[],components:["asd","qwe"],code:"{}",query:"",env:"/dev-env"}),methods:{async publish(){this.env="/staging-env",this.$q.dialog({dark:!0,title:"Confirm Deployment",message:"Are you sure you want to publish "+this.component.name+" now?",cancel:!0,ok:{color:"negative",label:"Publish"},focus:"none",persistent:!0}).onOk(async()=>{const e=this.$qs.stringify({filters:{component:this.component.id},sort:["createdAt:desc"],pagination:{start:0,limit:1}}),{id:o,attributes:n}=(await this.$likhaAPI.get("/versions?"+e)).data.data[0];await this.$likhaAPI.put("/components/"+this.component.id,{data:JSON.parse(n.codes)});const r={component:this.component.id,version:o};this.env="",await this.$likhaAPI.post("/releases",{data:r}),this.$q.notify({position:"top-right",color:"positive",icon:"verified",message:"Deployed to Production!"})}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},async stage(){this.env="/dev-env",this.$q.dialog({component:(await I(()=>import("./stagingDeploy.e1008b6f.js"),["assets/stagingDeploy.e1008b6f.js","assets/index.c1160921.js","assets/index.d6902eec.css","assets/use-dialog-plugin-component.362cdb6a.js"])).default,componentProps:{component:this.component,codes:[...this.code1,...this.code2,...this.code3]}}).onOk(e=>{this.env="/staging-env",this.$q.notify({position:"top-right",color:"positive",icon:"verified",message:"Deployed to Staging"})})},async getComponents(e){this.loading=!0;const o={};e&&(o.$or=[{name:{$containsi:e}},{templateDev:{$containsi:e}},{templateStaging:{$containsi:e}},{template:{$containsi:e}}]);const n=this.$qs.stringify({filters:o,sort:["name:desc"],pagination:{start:0,limit:10}});this.debounce=this.$debounce(async()=>{this.components=(await this.$likhaAPI.get("/components?"+n)).data.data.map(r=>r.attributes.name)},1250),this.debounce(),this.loading=!1},async getComponent(e){if(this.component=null,this.code1=[],this.code2=[],this.code3=[],this.loading=!0,e){const o=this.$qs.stringify({filters:{name:{$eq:e}},populate:["components"],pagination:{start:0,limit:10}},{encodeValuesOnly:!0}),{id:n,attributes:r}=(await this.$likhaAPI.get("/components?"+o)).data.data[0],h=this.component=w({id:n},r);this.componentName=h.name;const y=l=>{switch(l){case"template":return"html";case"style":return"css";default:return"javascript"}},d="Dev",i=l=>l.map(a=>({prop:a,value:h[a+d]||"",language:y(a)}));this.code1=i(["template","data","quasarComponents"]),this.code2=i(["methods","computed","lifeCycleEvents"]),this.code3=i(["props","emits","style"])}this.loading=!1},reloadPreview(){const e=this.$refs.iframe.src;this.$refs.iframe.src="",this.$refs.iframe.src=e},filterComponents(e,o,n){o(()=>{})}}}),L={class:"col bg-grey window-height"},U=u("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),H=N(" No results "),F={class:"q-gutter-sm"},M={class:"row bg-pink",style:{height:"calc(100vh - 56px)","max-height":"calc(100vh - 56px)"}},R={class:"row"},j=["src"];function J(e,o,n,r,h,y){const d=g("likha-editor"),i=g("pane"),l=g("splitpanes");return m(),k("div",L,[t(E,{class:"bg-primary text-white"},{default:s(()=>[t(p,{flat:"",round:"",dense:"",icon:"menu",class:"q-mr-sm"}),t(_,null,{default:s(()=>[U]),_:1}),t(B,null,{default:s(()=>[t(S,{ref:"qSelect",dark:"",filled:"",modelValue:e.componentName,"onUpdate:modelValue":[o[0]||(o[0]=a=>e.componentName=a),o[1]||(o[1]=a=>{e.getComponent(a),e.$refs.qSelect.blur(),e.$updateURL("/component-editor/"+a),e.getComponents()})],options:e.components,"use-input":"","hide-selected":"","fill-input":"",loading:e.loading,onFilter:e.filterComponents,onInputValue:e.getComponents,style:{"max-width":"300px"}},{"no-option":s(()=>[t(A,null,{default:s(()=>[t(D,{class:"text-grey"},{default:s(()=>[H]),_:1})]),_:1})]),_:1},8,["modelValue","options","loading","onFilter","onInputValue"])]),_:1}),u("span",F,[t(p,{disabled:"",icon:"history",label:"History"}),t(p,{icon:"approval",label:"stage",onClick:e.stage,loading:e.loading},null,8,["onClick","loading"]),t(p,{icon:"precision_manufacturing",label:"Publish",onClick:e.publish},null,8,["onClick"])])]),_:1}),u("div",M,[t(l,{class:"default-theme"},{default:s(()=>[t(i,{"min-size":"20"},{default:s(()=>[t(l,{horizontal:""},{default:s(()=>[t(i,{"min-size":"20"},{default:s(()=>[e.code1.length?(m(),v(d,{key:0,modelValue:e.code1,height:"100%",component:e.component,onSaved:o[2]||(o[2]=a=>e.reloadPreview())},null,8,["modelValue","component"])):c("",!0)]),_:1}),t(i,{"min-size":"20"},{default:s(()=>[e.code2.length?(m(),v(d,{key:0,modelValue:e.code2,height:"100%",component:e.component,onSaved:o[3]||(o[3]=a=>e.reloadPreview())},null,8,["modelValue","component"])):c("",!0)]),_:1})]),_:1})]),_:1}),t(i,{"min-size":"20"},{default:s(()=>[t(l,{horizontal:""},{default:s(()=>[t(i,{"min-size":"20",size:"30"},{default:s(()=>[e.code3.length?(m(),v(d,{key:0,modelValue:e.code3,height:"100%",component:e.component,onSaved:o[4]||(o[4]=a=>e.reloadPreview())},null,8,["modelValue","component"])):c("",!0)]),_:1}),t(i,{"min-size":"20",class:"bg-dark col column"},{default:s(()=>[u("div",R,[t(z,{class:"col","input-class":"q-pa-md",dark:"",dense:"",modelValue:e.query,"onUpdate:modelValue":o[5]||(o[5]=a=>e.query=a),placeholder:"query params"},null,8,["modelValue"]),t(T,{class:"bg-dark text-white",align:"right",dense:"",modelValue:e.env,"onUpdate:modelValue":o[6]||(o[6]=a=>e.env=a)},{default:s(()=>[t(f,{name:"/dev-env",label:"dev"}),t(f,{name:"/staging-env",label:"staging"}),t(f,{name:"",label:"prod"})]),_:1},8,["modelValue"])]),e.component?(m(),k("iframe",{key:0,ref:"iframe",src:e.$previewHost+e.env+"/lk-preview/"+e.component.name+"?"+e.query,class:"col bg-white",frameborder:"0"},null,8,j)):c("",!0)]),_:1})]),_:1})]),_:1})]),_:1})])])}var Z=P(O,[["render",J]]);export{Z as default};
