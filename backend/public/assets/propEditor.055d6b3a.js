var H=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var b=(o,e,t)=>e in o?H(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,y=(o,e)=>{for(var t in e||(e={}))I.call(e,t)&&b(o,t,e[t]);if(v)for(var t of v(e))L.call(e,t)&&b(o,t,e[t]);return o};import{a as k,Q as h}from"./QToolbar.b2cedf34.js";import{aa as O,r as R,ao as S,az as d,V as _,b2 as l,y as w,cl as q,a3 as s,a2 as N,F as C,b4 as $,bx as Q,X as j,aF as z,bL as A,J as E}from"./index.9dab1885.js";import{d as U,b as J,c as K,e as M,a as X}from"./QLayout.241faaec.js";import{C as G}from"./ClosePopup.ad3af8cf.js";import{u as x}from"./use-dialog-plugin-component.1da393f1.js";import"./QTabs.2ef87a0c.js";const oe={__name:"propEditor",props:["component","env"],emits:[...x.emits],setup(o){const e=o,{$likhaAPI:t,$qs:D}=O().appContext.config.globalProperties,p=R({props:[]});S(async()=>{let n="";e.env==="/dev-env"&&(n="Dev"),e.env==="/staging-env"&&(n="Staging");const i=D.stringify({filters:{name:{$eq:e.component.name}},fields:["props"+n]},{encodeValuesOnly:!0}),{attributes:r}=(await t.get("/components?"+i)).data.data[0],c=a=>typeof a!="string"?"return "+a:a.split(/\b\s+/)[0].includes("return")?a:"return "+a,u=new Function(c(r["props"+n]))()||{},f=e.component["props"+n]||{},m=u.constructor.name;m==="Object"?p.props=Object.entries(u).map(a=>[a[0],y({value:f[a[0]]||a[1].default},a[1])]):m==="Array"&&(p.props=u.map(a=>{const g=f[a]||"";return[a,{value:g,type:String}]}))});const{dialogRef:V,onDialogHide:P,onDialogOK:T,onDialogCancel:F}=x();function B(){let n="";e.env==="/dev-env"&&(n="Dev"),e.env==="/staging-env"&&(n="Staging");const i={};for(const r of p.props)i["props"+n]||(i["props"+n]={}),i["props"+n][r[0]]=r[1].value;T(i)}return(n,i)=>(d(),_(q,{persistent:"",class:"z-top",ref_key:"dialogRef",ref:V,onHide:w(P)},{default:l(()=>[s(X,{style:{"max-height":"500px !important"},view:"hHh LpR fFf",container:"",class:"bg-white"},{default:l(()=>[s(U,{class:"bg-dark"},{default:l(()=>[s(k,null,{default:l(()=>[s(h,null,{default:l(()=>[N(C(o.component.name)+" - "+C(o.component.order),1)]),_:1}),$(s(Q,{flat:"",onClick:w(F),round:"",dense:"",icon:"close"},null,8,["onClick"]),[[G]])]),_:1})]),_:1}),s(J,null,{default:l(()=>[s(K,{padding:"",class:"column bg-dark inset-shadow"},{default:l(()=>[(d(!0),j(E,null,z(p.props,r=>(d(),_(A,{dark:"",key:"prop"+r[0],label:r[0],modelValue:r[1].value,"onUpdate:modelValue":c=>r[1].value=c,type:new r[1].type().constructor.name},null,8,["label","modelValue","onUpdate:modelValue","type"]))),128))]),_:1})]),_:1}),s(M,{class:"bg-dark text-white shadow-up-24"},{default:l(()=>[s(k,null,{default:l(()=>[s(h),s(Q,{color:"primary",onClick:B,icon:"save",label:"save"})]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}};export{oe as default};