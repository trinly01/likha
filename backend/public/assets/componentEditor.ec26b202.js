var V=Object.defineProperty;var b=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var $=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&$(e,n,t[n]);if(b)for(var n of b(t))C.call(t,n)&&$(e,n,t[n]);return e};import{bv as P,a5 as I,by as Q,aH as h,az as m,X as w,a3 as o,b2 as a,bx as p,Y as g,V as f,W as c,bL as z,a2 as N}from"./index.9dab1885.js";import{Q as S,a as _,b as A}from"./QSelect.4ed4d4a2.js";import{Q as D,a as B}from"./QToolbar.b2cedf34.js";import{Q as E,a as v}from"./QTabs.2ef87a0c.js";const T=I({components:{},unmounted(){this.debounce.cancel()},async beforeMount(){const{name:e}=this.$route.params;await this.getComponent(e),this.getComponents()},data:()=>({loading:!0,width:"50%",component:null,componentName:"",code1:[],code2:[],code3:[],components:["asd","qwe"],code:"{}",query:"",env:"/dev-env"}),methods:{async publish(){this.env="/staging-env",this.$q.dialog({dark:!0,title:"Confirm Deployment",message:"Are you sure you want to publish "+this.component.name+" now?",cancel:!0,ok:{color:"negative",label:"Publish"},focus:"none",persistent:!0}).onOk(async()=>{const e=this.$qs.stringify({filters:{component:this.component.id},sort:["createdAt:desc"],pagination:{start:0,limit:1}}),{id:t,attributes:n}=(await this.$likhaAPI.get("/versions?"+e)).data.data[0];await this.$likhaAPI.put("/components/"+this.component.id,{data:JSON.parse(n.codes)});const r={component:this.component.id,version:t};this.env="",await this.$likhaAPI.post("/releases",{data:r}),this.$q.notify({position:"top-right",color:"positive",icon:"verified",message:"Deployed to Production!"})}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},async stage(){this.env="/dev-env",this.$q.dialog({component:(await Q(()=>import("./stagingDeploy.dedbf28c.js"),["assets/stagingDeploy.dedbf28c.js","assets/index.9dab1885.js","assets/index.d6902eec.css","assets/ClosePopup.ad3af8cf.js","assets/use-dialog-plugin-component.1da393f1.js"])).default,componentProps:{component:this.component,codes:[...this.code1,...this.code2,...this.code3]}}).onOk(e=>{this.env="/staging-env",this.$q.notify({position:"top-right",color:"positive",icon:"verified",message:"Deployed to Staging"})})},async getComponents(e){this.loading=!0;const t={};e&&(t.$or=[{name:{$containsi:e}},{templateDev:{$containsi:e}},{templateStaging:{$containsi:e}},{template:{$containsi:e}}]);const n=this.$qs.stringify({filters:t,sort:["name:desc"],pagination:{start:0,limit:10}});this.debounce=this.$debounce(async()=>{this.components=(await this.$likhaAPI.get("/components?"+n)).data.data.map(r=>r.attributes.name)},1250),this.debounce(),this.loading=!1},async getComponent(e){if(this.component=null,this.code1=[],this.code2=[],this.code3=[],this.loading=!0,e){const t=this.$qs.stringify({filters:{name:{$eq:e}},populate:["components"],pagination:{start:0,limit:10}},{encodeValuesOnly:!0}),{id:n,attributes:r}=(await this.$likhaAPI.get("/components?"+t)).data.data[0],u=this.component=k({id:n},r);this.componentName=u.name;const y=l=>{switch(l){case"template":return"html";case"style":return"css";default:return"javascript"}},d="Dev",i=l=>l.map(s=>({prop:s,value:u[s+d]||"",language:y(s)}));this.code1=i(["template","data"]),this.code2=i(["methods","computed","lifeCycleEvents"]),this.code3=i(["props","emits","style"])}this.loading=!1},reloadPreview(){const e=this.$refs.iframe.src;this.$refs.iframe.src="",this.$refs.iframe.src=e},filterComponents(e,t,n){t(()=>{})}}}),O={class:"col bg-grey window-height"},L=N(" No results "),U={class:"q-gutter-sm"},H={class:"row bg-pink",style:{height:"calc(100vh - 56px)","max-height":"calc(100vh - 56px)"}},F={class:"row"},R=["src"];function j(e,t,n,r,u,y){const d=h("likha-editor"),i=h("pane"),l=h("splitpanes");return m(),w("div",O,[o(B,{class:"bg-primary text-white"},{default:a(()=>[o(p,{flat:"",round:"",dense:"",icon:"menu",class:"q-mr-sm"}),o(D,null,{default:a(()=>[o(S,{ref:"qSelect",dark:"",filled:"",modelValue:e.componentName,"onUpdate:modelValue":[t[0]||(t[0]=s=>e.componentName=s),t[1]||(t[1]=s=>{e.getComponent(s),e.$refs.qSelect.blur(),e.$updateURL("/component-editor/"+s),e.getComponents()})],options:e.components,"use-input":"","hide-selected":"","fill-input":"",loading:e.loading,onFilter:e.filterComponents,onInputValue:e.getComponents,style:{"max-width":"300px"}},{"no-option":a(()=>[o(_,null,{default:a(()=>[o(A,{class:"text-grey"},{default:a(()=>[L]),_:1})]),_:1})]),_:1},8,["modelValue","options","loading","onFilter","onInputValue"])]),_:1}),g("span",U,[o(p,{disabled:"",icon:"history",label:"History"}),o(p,{icon:"approval",label:"stage",onClick:e.stage,loading:e.loading},null,8,["onClick","loading"]),o(p,{icon:"precision_manufacturing",label:"Publish",onClick:e.publish},null,8,["onClick"])])]),_:1}),g("div",H,[o(l,{class:"default-theme bg-dark"},{default:a(()=>[o(i,{"min-size":"20"},{default:a(()=>[o(l,{horizontal:""},{default:a(()=>[o(i,{"min-size":"20"},{default:a(()=>[e.code1.length?(m(),f(d,{key:0,modelValue:e.code1,height:"100%",component:e.component,onSaved:t[2]||(t[2]=s=>e.reloadPreview())},null,8,["modelValue","component"])):c("",!0)]),_:1}),o(i,{"min-size":"20"},{default:a(()=>[e.code2.length?(m(),f(d,{key:0,modelValue:e.code2,height:"100%",component:e.component,onSaved:t[3]||(t[3]=s=>e.reloadPreview())},null,8,["modelValue","component"])):c("",!0)]),_:1})]),_:1})]),_:1}),o(i,{"min-size":"20"},{default:a(()=>[o(l,{horizontal:""},{default:a(()=>[o(i,{"min-size":"20",size:"30"},{default:a(()=>[e.code3.length?(m(),f(d,{key:0,modelValue:e.code3,height:"100%",component:e.component,onSaved:t[4]||(t[4]=s=>e.reloadPreview())},null,8,["modelValue","component"])):c("",!0)]),_:1}),o(i,{"min-size":"20",class:"bg-dark col column"},{default:a(()=>[g("div",F,[o(z,{class:"col","input-class":"q-pa-md",dark:"",dense:"",modelValue:e.query,"onUpdate:modelValue":t[5]||(t[5]=s=>e.query=s),placeholder:"query params"},null,8,["modelValue"]),o(E,{class:"bg-dark text-white",align:"right",dense:"",modelValue:e.env,"onUpdate:modelValue":t[6]||(t[6]=s=>e.env=s)},{default:a(()=>[o(v,{name:"/dev-env",label:"dev"}),o(v,{name:"/staging-env",label:"staging"}),o(v,{name:"",label:"prod"})]),_:1},8,["modelValue"])]),e.component?(m(),w("iframe",{key:0,ref:"iframe",src:e.$previewHost+e.env+"/lk-preview/"+e.component.name+"?"+e.query,class:"col bg-white",frameborder:"0"},null,8,R)):c("",!0)]),_:1})]),_:1})]),_:1})]),_:1})])])}var G=P(T,[["render",j]]);export{G as default};
