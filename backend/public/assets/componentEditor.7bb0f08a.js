var q=Object.defineProperty;var b=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var $=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&$(e,n,t[n]);if(b)for(var n of b(t))P.call(t,n)&&$(e,n,t[n]);return e};import{bv as I,a5 as _,by as k,aH as h,az as c,X as V,a3 as o,b2 as a,bx as g,Y as v,b4 as Q,bo as S,V as f,W as u,bL as N,a2 as z}from"./index.67061d6e.js";import{Q as D,a as E,b as A}from"./QSelect.6261bd72.js";import{Q as B,a as O}from"./QToolbar.f2070134.js";import{Q as T,a as y}from"./QTabs.e41fbc7c.js";const L=_({components:{},unmounted(){this.debounce.cancel()},async beforeMount(){const{name:e}=this.$route.params;await this.getComponent(e),this.getComponents()},data:()=>({loading:!0,width:"50%",component:null,componentName:"",code1:[],code2:[],code3:[],components:["asd","qwe"],code:"{}",query:"",env:"/dev-env"}),methods:{async showHistory(){this.$q.dialog({component:(await k(()=>import("./lkHistory.04c128e6.js"),["assets/lkHistory.04c128e6.js","assets/lkHistory.345810ff.css","assets/index.67061d6e.js","assets/index.d6902eec.css","assets/QSelect.6261bd72.js","assets/QTabs.e41fbc7c.js","assets/QSpace.5c69ff38.js","assets/QPage.32aafb30.js","assets/QToolbar.f2070134.js","assets/ClosePopup.3807b11d.js","assets/use-dialog-plugin-component.f63b0d49.js"])).default,componentProps:{component:this.component,codes:[...this.code1,...this.code2,...this.code3]}}).onOk(e=>{this.env="/dev-env",this.$q.notify({position:"top-right",color:"positive",icon:"verified",message:`Checked out: ${e.summary}`}),setTimeout(()=>{this.code1=[],this.code2=[],this.code3=[];const t=r=>{switch(r){case"template":return"html";case"style":return"css";default:return"javascript"}},n=JSON.parse(e.codes),i=r=>r.map(p=>({prop:p,value:n[p]||"",language:t(p)}));this.code1=i(["template","data"]),this.code2=i(["methods","computed","lifeCycleEvents"]),this.code3=i(["props","emits","style"])},500)})},async publish(){this.env="/staging-env",this.$q.dialog({dark:!0,title:"Confirm Deployment",message:"Are you sure you want to publish "+this.component.name+" now?",cancel:!0,ok:{color:"negative",label:"Publish"},focus:"none",persistent:!0}).onOk(async()=>{const e=this.$qs.stringify({filters:{component:this.component.id},sort:["createdAt:desc"],pagination:{start:0,limit:1}}),{id:t,attributes:n}=(await this.$likhaAPI.get("/versions?"+e)).data.data[0];await this.$likhaAPI.put("/components/"+this.component.id,{data:JSON.parse(n.codes)});const i={component:this.component.id,version:t};this.env="",await this.$likhaAPI.post("/releases",{data:i}),this.$q.notify({position:"top-right",color:"positive",icon:"verified",message:"Deployed to Production!"})}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},async stage(){this.env="/dev-env",this.$q.dialog({component:(await k(()=>import("./stagingDeploy.5c391612.js"),["assets/stagingDeploy.5c391612.js","assets/index.67061d6e.js","assets/index.d6902eec.css","assets/ClosePopup.3807b11d.js","assets/use-dialog-plugin-component.f63b0d49.js"])).default,componentProps:{component:this.component,codes:[...this.code1,...this.code2,...this.code3]}}).onOk(e=>{this.env="/staging-env",this.$q.notify({position:"top-right",color:"positive",icon:"verified",message:"Deployed to Staging"})})},async getComponents(e){this.loading=!0;const t={};e&&(t.$or=[{name:{$containsi:e}},{templateDev:{$containsi:e}},{templateStaging:{$containsi:e}},{template:{$containsi:e}}]);const n=this.$qs.stringify({filters:t,sort:["name:desc"],pagination:{start:0,limit:10}});this.debounce=this.$debounce(async()=>{this.components=(await this.$likhaAPI.get("/components?"+n)).data.data.map(i=>i.attributes.name)},1250),this.debounce(),this.loading=!1},async getComponent(e){if(this.component=null,this.code1=[],this.code2=[],this.code3=[],this.loading=!0,e){const t=this.$qs.stringify({filters:{name:{$eq:e}},populate:["components"],pagination:{start:0,limit:10}},{encodeValuesOnly:!0}),{id:n,attributes:i}=(await this.$likhaAPI.get("/components?"+t)).data.data[0],r=this.component=w({id:n},i);this.componentName=r.name;const p=d=>{switch(d){case"template":return"html";case"style":return"css";default:return"javascript"}},m="Dev",l=d=>d.map(s=>({prop:s,value:r[s+m]||"",language:p(s)}));this.code1=l(["template","data"]),this.code2=l(["methods","computed","lifeCycleEvents"]),this.code3=l(["props","emits","style"])}this.loading=!1},reloadPreview(){const e=this.$refs.iframe.src;this.$refs.iframe.src="",this.$refs.iframe.src=e},filterComponents(e,t,n){t(()=>{})}}}),H={class:"col bg-grey window-height"},U=z(" No results "),R={class:"q-gutter-sm"},j={class:"row bg-pink",style:{height:"calc(100vh - 56px)","max-height":"calc(100vh - 56px)"}},F={class:"row"},J=["src"];function M(e,t,n,i,r,p){const m=h("likha-editor"),l=h("pane"),d=h("splitpanes");return c(),V("div",H,[o(O,{class:"bg-primary text-white"},{default:a(()=>[o(g,{flat:"",round:"",dense:"",icon:"menu",class:"q-mr-sm"}),o(B,null,{default:a(()=>[o(D,{ref:"qSelect",dark:"",filled:"",modelValue:e.componentName,"onUpdate:modelValue":[t[0]||(t[0]=s=>e.componentName=s),t[1]||(t[1]=s=>{e.getComponent(s),e.$refs.qSelect.blur(),e.$updateURL("/component-editor/"+s),e.getComponents()})],options:e.components,"use-input":"","hide-selected":"","fill-input":"",loading:e.loading,onFilter:e.filterComponents,onInputValue:e.getComponents,style:{"max-width":"300px"}},{"no-option":a(()=>[o(E,null,{default:a(()=>[o(A,{class:"text-grey"},{default:a(()=>[U]),_:1})]),_:1})]),_:1},8,["modelValue","options","loading","onFilter","onInputValue"])]),_:1}),v("span",R,[o(g,{icon:"approval",label:"stage",onClick:e.showHistory,loading:e.loading},null,8,["onClick","loading"]),Q(o(g,{icon:"precision_manufacturing",label:"Publish",onClick:e.publish},null,8,["onClick"]),[[S,e.env==="/staging-env"]])])]),_:1}),v("div",j,[o(d,{class:"default-theme bg-dark"},{default:a(()=>[o(l,{"min-size":"20"},{default:a(()=>[o(d,{horizontal:""},{default:a(()=>[o(l,{"min-size":"20"},{default:a(()=>[e.code1.length?(c(),f(m,{key:0,modelValue:e.code1,height:"100%",component:e.component,onSaved:t[2]||(t[2]=s=>e.reloadPreview())},null,8,["modelValue","component"])):u("",!0)]),_:1}),o(l,{"min-size":"20"},{default:a(()=>[e.code2.length?(c(),f(m,{key:0,modelValue:e.code2,height:"100%",component:e.component,onSaved:t[3]||(t[3]=s=>e.reloadPreview())},null,8,["modelValue","component"])):u("",!0)]),_:1})]),_:1})]),_:1}),o(l,{"min-size":"20"},{default:a(()=>[o(d,{horizontal:""},{default:a(()=>[o(l,{"min-size":"20",size:"30"},{default:a(()=>[e.code3.length?(c(),f(m,{key:0,modelValue:e.code3,height:"100%",component:e.component,onSaved:t[4]||(t[4]=s=>e.reloadPreview())},null,8,["modelValue","component"])):u("",!0)]),_:1}),o(l,{"min-size":"20",class:"bg-dark col column"},{default:a(()=>[v("div",F,[o(N,{class:"col","input-class":"q-pa-md",dark:"",dense:"",modelValue:e.query,"onUpdate:modelValue":t[5]||(t[5]=s=>e.query=s),placeholder:"query params"},null,8,["modelValue"]),o(T,{class:"bg-dark text-white",align:"right",dense:"",modelValue:e.env,"onUpdate:modelValue":t[6]||(t[6]=s=>e.env=s)},{default:a(()=>[o(y,{name:"/dev-env",label:"dev"}),o(y,{name:"/staging-env",label:"staging"}),o(y,{name:"",label:"prod"})]),_:1},8,["modelValue"])]),e.component?(c(),V("iframe",{key:0,ref:"iframe",src:e.$previewHost+e.env+"/lk-preview/"+e.component.name+"?"+e.query,class:"col bg-white",frameborder:"0"},null,8,J)):u("",!0)]),_:1})]),_:1})]),_:1})]),_:1})])])}var Z=I(L,[["render",M]]);export{Z as default};
