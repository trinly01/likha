import{cp as u,cC as l,cD as h,bC as f,cE as m,aa as g,l as v}from"./index.8a86961c.js";function i(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var _=u({name:"close-popup",beforeMount(e,{value:t}){const o={depth:i(t),handler(n){o.depth!==0&&setTimeout(()=>{const s=l(e);s!==void 0&&h(s,n,o.depth)})},handlerKey(n){f(n,13)===!0&&o.handler(n)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=i(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});function r(){const{emit:e,proxy:t}=g(),o=v(null);function n(){o.value.show()}function s(){o.value.hide()}function a(d){e("ok",d),s()}function p(){e("hide")}return Object.assign(t,{show:n,hide:s}),{dialogRef:o,onDialogHide:p,onDialogOK:a,onDialogCancel:s}}const c=["ok","hide"];r.emits=c;r.emitsObject=m(c);export{_ as C,r as u};
