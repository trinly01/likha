import{aa as v,r as D,ao as V,az as h,V as w,b2 as s,a3 as e,cG as c,bL as p,cH as Q,b4 as B,bx as m,y as u,cy as S,cl as H,Y as P}from"./index.930c38c3.js";import{C as I}from"./ClosePopup.f9ee3419.js";import{u as f}from"./use-dialog-plugin-component.397706fc.js";const N=P("div",{class:"text-h6"},"Staging Deployment",-1),R={__name:"stagingDeploy",props:["component","codes"],emits:[...f.emits],setup(g){const l=g,{$likhaAPI:r}=v().appContext.config.globalProperties,o=D({props:[],summary:"",description:""});V(async()=>{});const{dialogRef:y,onDialogHide:C,onDialogOK:b,onDialogCancel:x}=f();async function k(){const i={},a={};for(const n of l.codes)i[n.prop+"Staging"]=n.value,a[n.prop]=n.value;await r.put("/components/"+l.component.id,{data:i});const{summary:t,description:_}=o,d={component:l.component.id,summary:t,description:_,codes:JSON.stringify(a)};await r.post("/versions",{data:d}),b(d)}return(i,a)=>(h(),w(H,{persistent:"",class:"z-top",ref_key:"dialogRef",ref:y,onHide:u(C)},{default:s(()=>[e(S,{class:"bg-dark text-white",style:{"min-width":"350px"}},{default:s(()=>[e(c,null,{default:s(()=>[N]),_:1}),e(c,{class:"q-pt-none"},{default:s(()=>[e(p,{dark:"",modelValue:o.summary,"onUpdate:modelValue":a[0]||(a[0]=t=>o.summary=t),type:"text",label:"Summary"},null,8,["modelValue"]),e(p,{dark:"",modelValue:o.description,"onUpdate:modelValue":a[1]||(a[1]=t=>o.description=t),type:"textarea",label:"Description",autogrow:"","input-style":"min-height: 64px;"},null,8,["modelValue"])]),_:1}),e(Q,{align:"right",class:"text-primary"},{default:s(()=>[B(e(m,{flat:"",label:"Cancel",onClick:u(x)},null,8,["onClick"]),[[I]]),e(m,{disabled:!o.summary,flat:"",label:"Commit",onClick:k},null,8,["disabled"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}};export{R as default};
