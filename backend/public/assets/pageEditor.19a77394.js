var ot=Object.defineProperty,nt=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var rt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var Ce=(e,a,i)=>a in e?ot(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,C=(e,a)=>{for(var i in a||(a={}))rt.call(a,i)&&Ce(e,i,a[i]);if(ze)for(var i of ze(a))it.call(a,i)&&Ce(e,i,a[i]);return e},A=(e,a)=>nt(e,lt(a));import{cp as st,c0 as K,bH as ut,cq as ct,bZ as ae,cr as ce,bY as ke,cn as de,cb as be,b_ as ve,bE as dt,br as Fe,c2 as vt,bs as Ue,c4 as ft,bt as Ne,bK as mt,ag as ht,cs as gt,l as y,U as v,c6 as pt,ct as bt,aZ as k,am as qe,cu as I,at as yt,ap as je,b4 as ye,ad as O,bV as _e,bu as wt,aa as We,cv as St,bz as zt,ar as Ct,an as kt,cw as xe,cx as Oe,bF as qt,bv as _t,aH as Pe,az as fe,V as me,b2 as z,a3 as p,bx as Te,Y as L,bL as Ve,bw as De,cy as xt,F as Ot,B as Me,a2 as Pt}from"./index.738cef68.js";import{c as Tt,Q as Vt,a as Dt,b as Mt}from"./QSelect.5e11f302.js";import{a as Be,Q as Bt}from"./QToolbar.b1659509.js";import{Q as At}from"./QSpace.fd2040c0.js";import{b as Ae,Q as Et,a as he}from"./QTabs.008340f3.js";import{Q as Qt,a as Ht,b as Lt,c as It}from"./QLayout.dedc9b6f.js";const we={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},$t=Object.keys(we);we.all=!0;function Ee(e){const a={};for(const i of $t)e[i]===!0&&(a[i]=!0);return Object.keys(a).length===0?we:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}function Qe(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function ge(e,a,i){const f=be(e);let t,o=f.left-a.event.x,u=f.top-a.event.y,n=Math.abs(o),c=Math.abs(u);const l=a.direction;l.horizontal===!0&&l.vertical!==!0?t=o<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?t=u<0?"up":"down":l.up===!0&&u<0?(t="up",n>c&&(l.left===!0&&o<0?t="left":l.right===!0&&o>0&&(t="right"))):l.down===!0&&u>0?(t="down",n>c&&(l.left===!0&&o<0?t="left":l.right===!0&&o>0&&(t="right"))):l.left===!0&&o<0?(t="left",n<c&&(l.up===!0&&u<0?t="up":l.down===!0&&u>0&&(t="down"))):l.right===!0&&o>0&&(t="right",n<c&&(l.up===!0&&u<0?t="up":l.down===!0&&u>0&&(t="down")));let S=!1;if(t===void 0&&i===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,S=!0,t==="left"||t==="right"?(f.left-=o,n=0,o=0):(f.top-=u,c=0,u=0)}return{synthetic:S,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:f,direction:t,isFirst:a.event.isFirst,isFinal:i===!0,duration:Date.now()-a.event.time,distance:{x:n,y:c},offset:{x:o,y:u},delta:{x:f.left-a.event.lastX,y:f.top-a.event.lastY}}}}let Ft=0;var J=st({name:"touch-pan",beforeMount(e,{value:a,modifiers:i}){if(i.mouse!==!0&&K.has.touch!==!0)return;function f(o,u){i.mouse===!0&&u===!0?dt(o):(i.stop===!0&&de(o),i.prevent===!0&&ke(o))}const t={uid:"qvtp_"+Ft++,handler:a,modifiers:i,direction:Ee(i),noop:ut,mouseStart(o){Qe(o,t)&&ct(o)&&(ae(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Qe(o,t)){const u=o.target;ae(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,u){if(K.is.firefox===!0&&ce(e,!0),t.lastEvt=o,u===!0||i.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const l=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&ke(l),o.cancelBubble===!0&&de(l),Object.assign(l,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:l}}de(o)}const{left:n,top:c}=be(o);t.event={x:n,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:n,lastY:c}},move(o){if(t.event===void 0)return;const u=be(o),n=u.left-t.event.x,c=u.top-t.event.y;if(n===0&&c===0)return;t.lastEvt=o;const l=t.event.mouse===!0,S=()=>{f(o,l),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Tt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),l===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{P(),g()},50):P()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&f(o,t.event.mouse);const{payload:g,synthetic:P}=ge(o,t,!1);g!==void 0&&(t.handler(g)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&S(),t.event.lastX=g.position.left,t.event.lastY=g.position.top,t.event.lastDir=P===!0?void 0:g.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||l===!0&&t.modifiers.mouseAllDir===!0){S(),t.event.detected=!0,t.move(o);return}const q=Math.abs(n),w=Math.abs(c);q!==w&&(t.direction.horizontal===!0&&q>w||t.direction.vertical===!0&&q<w||t.direction.up===!0&&q<w&&c<0||t.direction.down===!0&&q<w&&c>0||t.direction.left===!0&&q>w&&n<0||t.direction.right===!0&&q>w&&n>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,u){if(t.event!==void 0){if(ve(t,"temp"),K.is.firefox===!0&&ce(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ge(o===void 0?t.lastEvt:o,t).payload);const{payload:n}=ge(o===void 0?t.lastEvt:o,t,!0),c=()=>{t.handler(n)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,i.mouse===!0&&ae(t,"main",[[e,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),K.has.touch===!0&&ae(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const i=e.__qtouchpan;i!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&i.end(),i.handler=a.value),i.direction=Ee(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),ve(a,"main"),ve(a,"temp"),K.is.firefox===!0&&ce(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});const He=150;var Le=Fe({name:"QDrawer",inheritAttrs:!1,props:A(C(C({},vt),Ue),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...ft,"on-layout","mini-state"],setup(e,{slots:a,emit:i,attrs:f}){const t=We(),{proxy:{$q:o}}=t,u=Ne(e,o),{preventBodyScroll:n}=St(),{registerTimeout:c}=mt(),l=ht(gt,()=>{console.error("QDrawer needs to be child of QLayout")});let S,q,w;const g=y(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),P=v(()=>e.mini===!0&&g.value!==!0),_=v(()=>P.value===!0?e.miniWidth:e.width),b=y(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),j=v(()=>e.persistent!==!0&&(g.value===!0||B.value===!0));function W(r,m){if(oe(),r!==!1&&l.animate(),T(0),g.value===!0){const x=l.instances[M.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),Q(1),l.isContainer.value!==!0&&n(!0)}else Q(0),r!==!1&&ie(!1);c(()=>{r!==!1&&ie(!0),m!==!0&&i("show",r)},He)}function R(r,m){Z(),r!==!1&&l.animate(),Q(0),T(E.value*_.value),se(),m!==!0&&c(()=>{i("hide",r)},He)}const{show:Y,hide:$}=pt({showing:b,hideOnRouteChange:j,handleShow:W,handleHide:R}),{addToHistory:oe,removeFromHistory:Z}=bt(b,$,j),F={belowBreakpoint:g,hide:$},V=v(()=>e.side==="right"),E=v(()=>(o.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),U=y(0),D=y(!1),X=y(!1),G=y(_.value*E.value),M=v(()=>V.value===!0?"left":"right"),s=v(()=>b.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),d=v(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(V.value?"R":"L")>-1||o.platform.is.ios===!0&&l.isContainer.value===!0),h=v(()=>e.overlay===!1&&b.value===!0&&g.value===!1),B=v(()=>e.overlay===!0&&b.value===!0&&g.value===!1),N=v(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&D.value===!1?" hidden":"")),ne=v(()=>({backgroundColor:`rgba(0,0,0,${U.value*.4})`})),ee=v(()=>V.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),le=v(()=>V.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Re=v(()=>{const r={};return l.header.space===!0&&ee.value===!1&&(d.value===!0?r.top=`${l.header.offset}px`:l.header.space===!0&&(r.top=`${l.header.size}px`)),l.footer.space===!0&&le.value===!1&&(d.value===!0?r.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(r.bottom=`${l.footer.size}px`)),r}),Ye=v(()=>{const r={width:`${_.value}px`,transform:`translateX(${G.value}px)`};return g.value===!0?r:Object.assign(r,Re.value)}),Xe=v(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),Ke=v(()=>`q-drawer q-drawer--${e.side}`+(X.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(d.value===!0||h.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ee.value===!0?" q-drawer--top-padding":""))),Je=v(()=>{const r=o.lang.rtl===!0?e.side:M.value;return[[J,tt,void 0,{[r]:!0,mouse:!0}]]}),Ze=v(()=>{const r=o.lang.rtl===!0?M.value:e.side;return[[J,Se,void 0,{[r]:!0,mouse:!0}]]}),Ge=v(()=>{const r=o.lang.rtl===!0?M.value:e.side;return[[J,Se,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function re(){at(g,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}k(g,r=>{r===!0?(S=b.value,b.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&S!==!1&&(b.value===!0?(T(0),Q(0),se()):Y(!1))}),k(()=>e.side,(r,m)=>{l.instances[m]===F&&(l.instances[m]=void 0,l[m].space=!1,l[m].offset=0),l.instances[r]=F,l[r].size=_.value,l[r].space=h.value,l[r].offset=s.value}),k(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&re()}),k(()=>e.behavior+e.breakpoint,re),k(l.isContainer,r=>{b.value===!0&&n(r!==!0),r===!0&&re()}),k(l.scrollbarWidth,()=>{T(b.value===!0?0:void 0)}),k(s,r=>{H("offset",r)}),k(h,r=>{i("on-layout",r),H("space",r)}),k(V,()=>{T()}),k(_,r=>{T(),ue(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{ue(r,_.value)}),k(()=>o.lang.rtl,()=>{T()}),k(()=>e.mini,()=>{e.modelValue===!0&&(et(),l.animate())}),k(P,r=>{i("mini-state",r)});function T(r){r===void 0?qe(()=>{r=b.value===!0?0:_.value,T(E.value*r)}):(l.isContainer.value===!0&&V.value===!0&&(g.value===!0||Math.abs(r)===_.value)&&(r+=E.value*l.scrollbarWidth.value),G.value=r)}function Q(r){U.value=r}function ie(r){const m=r===!0?"remove":l.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function et(){clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),X.value=!0,q=setTimeout(()=>{X.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function tt(r){if(b.value!==!1)return;const m=_.value,x=I(r.distance.x,0,m);if(r.isFinal===!0){x>=Math.min(75,m)===!0?Y():(l.animate(),Q(0),T(E.value*m)),D.value=!1;return}T((o.lang.rtl===!0?V.value!==!0:V.value)?Math.max(m-x,0):Math.min(0,x-m)),Q(I(x/m,0,1)),r.isFirst===!0&&(D.value=!0)}function Se(r){if(b.value!==!0)return;const m=_.value,x=r.direction===e.side,te=(o.lang.rtl===!0?x!==!0:x)?I(r.distance.x,0,m):0;if(r.isFinal===!0){Math.abs(te)<Math.min(75,m)===!0?(l.animate(),Q(1),T(0)):$(),D.value=!1;return}T(E.value*te),Q(I(1-te/m,0,1)),r.isFirst===!0&&(D.value=!0)}function se(){n(!1),ie(!0)}function H(r,m){l.update(e.side,r,m)}function at(r,m){r.value!==m&&(r.value=m)}function ue(r,m){H("size",r===!0?e.miniWidth:m)}return l.instances[e.side]=F,ue(e.miniToOverlay,_.value),H("space",h.value),H("offset",s.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),yt(()=>{i("on-layout",h.value),i("mini-state",P.value),S=e.showIfAbove===!0;const r=()=>{(b.value===!0?W:R)(!1,!0)};if(l.totalWidth.value!==0){qe(r);return}w=k(l.totalWidth,()=>{w(),w=void 0,b.value===!1&&e.showIfAbove===!0&&g.value===!1?Y(!1):r()})}),je(()=>{w!==void 0&&w(),clearTimeout(q),b.value===!0&&se(),l.instances[e.side]===F&&(l.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const r=[];g.value===!0&&(e.noSwipeOpen===!1&&r.push(ye(O("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Je.value)),r.push(_e("div",{ref:"backdrop",class:N.value,style:ne.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>Ge.value)));const m=P.value===!0&&a.mini!==void 0,x=[O("div",A(C({},f),{key:""+m,class:[Xe.value,f.class]}),m===!0?a.mini():wt(a.default))];return e.elevated===!0&&b.value===!0&&x.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(_e("aside",{ref:"content",class:Ke.value,style:Ye.value},x,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Ze.value)),O("div",{class:"q-drawer-container"},r)}}});const Ie=["vertical","horizontal"],pe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},$e={prevent:!0,mouse:!0,mouseAllDir:!0};var Ut=Fe({name:"QScrollArea",props:A(C({},Ue),{thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function}),setup(e,{slots:a,emit:i}){const f=y(!1),t=y(!1),o=y(!1),u={vertical:y(0),horizontal:y(0)},n={vertical:{ref:y(null),position:y(0),size:y(0)},horizontal:{ref:y(null),position:y(0),size:y(0)}},c=We(),l=Ne(e,c.proxy.$q);let S,q;const w=y(null),g=v(()=>"q-scrollarea"+(l.value===!0?" q-scrollarea--dark":""));n.vertical.percentage=v(()=>{const s=n.vertical.size.value-u.vertical.value;if(s<=0)return 0;const d=I(n.vertical.position.value/s,0,1);return Math.round(d*1e4)/1e4}),n.vertical.thumbHidden=v(()=>(e.visible===null?o.value:e.visible)!==!0&&f.value===!1&&t.value===!1||n.vertical.size.value<=u.vertical.value+1),n.vertical.thumbStart=v(()=>n.vertical.percentage.value*(u.vertical.value-n.vertical.thumbSize.value)),n.vertical.thumbSize=v(()=>Math.round(I(u.vertical.value*u.vertical.value/n.vertical.size.value,50,u.vertical.value))),n.vertical.style=v(()=>A(C(C({},e.thumbStyle),e.verticalThumbStyle),{top:`${n.vertical.thumbStart.value}px`,height:`${n.vertical.thumbSize.value}px`})),n.vertical.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(n.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),n.vertical.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(n.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),n.horizontal.percentage=v(()=>{const s=n.horizontal.size.value-u.horizontal.value;if(s<=0)return 0;const d=I(n.horizontal.position.value/s,0,1);return Math.round(d*1e4)/1e4}),n.horizontal.thumbHidden=v(()=>(e.visible===null?o.value:e.visible)!==!0&&f.value===!1&&t.value===!1||n.horizontal.size.value<=u.horizontal.value+1),n.horizontal.thumbStart=v(()=>n.horizontal.percentage.value*(u.horizontal.value-n.horizontal.thumbSize.value)),n.horizontal.thumbSize=v(()=>Math.round(I(u.horizontal.value*u.horizontal.value/n.horizontal.size.value,50,u.horizontal.value))),n.horizontal.style=v(()=>A(C(C({},e.thumbStyle),e.horizontalThumbStyle),{left:`${n.horizontal.thumbStart.value}px`,width:`${n.horizontal.thumbSize.value}px`})),n.horizontal.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(n.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),n.horizontal.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(n.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const P=v(()=>n.vertical.thumbHidden.value===!0&&n.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),_=[[J,s=>{Z(s,"vertical")},void 0,C({vertical:!0},$e)]],b=[[J,s=>{Z(s,"horizontal")},void 0,C({horizontal:!0},$e)]];function j(){const s={};return Ie.forEach(d=>{const h=n[d];s[d+"Position"]=h.position.value,s[d+"Percentage"]=h.percentage.value,s[d+"Size"]=h.size.value,s[d+"ContainerSize"]=u[d].value}),s}const W=zt(()=>{const s=j();s.ref=c.proxy,i("scroll",s)},0);function R(s,d,h){if(Ie.includes(s)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(s==="vertical"?Oe:xe)(w.value,d,h)}function Y({height:s,width:d}){let h=!1;u.vertical.value!==s&&(u.vertical.value=s,h=!0),u.horizontal.value!==d&&(u.horizontal.value=d,h=!0),h===!0&&U()}function $({position:s}){let d=!1;n.vertical.position.value!==s.top&&(n.vertical.position.value=s.top,d=!0),n.horizontal.position.value!==s.left&&(n.horizontal.position.value=s.left,d=!0),d===!0&&U()}function oe({height:s,width:d}){n.horizontal.size.value!==d&&(n.horizontal.size.value=d,U()),n.vertical.size.value!==s&&(n.vertical.size.value=s,U())}function Z(s,d){const h=n[d];if(s.isFirst===!0){if(h.thumbHidden.value===!0)return;q=h.position.value,t.value=!0}else if(t.value!==!0)return;s.isFinal===!0&&(t.value=!1);const B=pe[d],N=u[d].value,ne=(h.size.value-N)/(N-h.thumbSize.value),ee=s.distance[B.dist],le=q+(s.direction===B.dir?1:-1)*ee*ne;D(le,d)}function F(s,d){const h=n[d];if(h.thumbHidden.value!==!0){const B=s[pe[d].offset];if(B<h.thumbStart.value||B>h.thumbStart.value+h.thumbSize.value){const N=B-h.thumbSize.value/2;D(N/u[d].value*h.size.value,d)}h.ref.value!==null&&h.ref.value.dispatchEvent(new MouseEvent(s.type,s))}}function V(s){F(s,"vertical")}function E(s){F(s,"horizontal")}function U(){f.value===!0?clearTimeout(S):f.value=!0,S=setTimeout(()=>{f.value=!1},e.delay),e.onScroll!==void 0&&W()}function D(s,d){w.value[pe[d].scroll]=s}function X(){o.value=!0}function G(){o.value=!1}Object.assign(c.proxy,{getScrollTarget:()=>w.value,getScroll:j,getScrollPosition:()=>({top:n.vertical.position.value,left:n.horizontal.position.value}),getScrollPercentage:()=>({top:n.vertical.percentage.value,left:n.horizontal.percentage.value}),setScrollPosition:R,setScrollPercentage(s,d,h){R(s,d*(n[s].size.value-u[s].value),h)}});let M=null;return Ct(()=>{M={top:n.vertical.position.value,left:n.horizontal.position.value}}),kt(()=>{if(M===null)return;const s=w.value;s!==null&&(xe(s,M.left),Oe(s,M.top))}),je(W.cancel),()=>O("div",{class:g.value,onMouseenter:X,onMouseleave:G},[O("div",{ref:w,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[O("div",{class:"q-scrollarea__content absolute",style:P.value},qt(a.default,[O(Ae,{debounce:0,onResize:oe})])),O(Qt,{axis:"both",onScroll:$})]),O(Ae,{debounce:0,onResize:Y}),O("div",{class:n.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:V}),O("div",{class:n.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:E}),ye(O("div",{ref:n.vertical.ref,class:n.vertical.thumbClass.value,style:n.vertical.style.value,"aria-hidden":"true"}),_),ye(O("div",{ref:n.horizontal.ref,class:n.horizontal.thumbClass.value,style:n.horizontal.style.value,"aria-hidden":"true"}),b)])}});const Nt={beforeUnmount(){document.removeEventListener("keydown",this.ctrlSave)},mounted(){document.addEventListener("keydown",this.ctrlSave)},async beforeMount(){const{name:e}=this.$route.params;this.getComponents(),this.getPages(),await this.getPage(e)},computed:{hasChanges(){const e=JSON.stringify(this.page.components);return this.page.origComponents!==e}},methods:{removeComponent(e,a){this.$q.dialog({title:"Remove Component",message:`Would you like remove <${e} /> ?`,focus:"none",cancel:!0,persistent:!0}).onOk(()=>{this.page.components.splice(a,1),this.page.components=this.page.components.map((i,f)=>A(C({},i),{order:f}))}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},async clone(e){this.clonedComponent={name:e.name,props:{}}},async getPages(e){this.loading=!0;const a={};e&&(a.$or=[{name:{$containsi:e}},{path:{$containsi:e}},{components:{$containsi:e}}]);const i=this.$qs.stringify({filters:a,sort:["name:desc"],pagination:{start:0,limit:10}});this.debounce=this.$debounce(async()=>{this.pages=(await this.$likhaAPI.get("/pages?"+i)).data.data.map(f=>f.attributes.name),console.trace()},1250),this.debounce(),this.loading=!1},async changedComponents(e){if(e.moved){const a=this.page.components.findIndex(i=>i.name!==e.moved.element.name&&i.order===e.moved.newIndex);this.page.components[a].order=a}if(e.added){const{name:a,props:i}=this.clonedComponent,f=[{name:a,props:i,order:e.added.newIndex},...this.page.components].filter(t=>t.name).sort((t,o)=>t.order-o.order).map((t,o)=>A(C({},t),{order:o}));this.page.components=f}},checkMove(e){e.draggedContext.element.order=e.draggedContext.futureIndex},async getPage(e){this.page={name:"",id:-1,path:"",components:[],origComponents:""},this.loading=!0;const a={};e&&(a.$or=[{name:{$containsi:e}},{path:{$containsi:e}},{components:{$containsi:e}}]);const i=this.$qs.stringify({filters:a,sort:["name:desc"],pagination:{start:0,limit:10}}),f=(await this.$likhaAPI.get("/pages?"+i)).data.data[0],t=C({id:f.id},f.attributes);this.page=t,this.page.components=new Function("return "+t.components)().sort((o,u)=>o.order-u.order),this.page.origComponents=JSON.stringify(this.page.components),this.debounce(),this.loading=!1},async getComponents(e){this.loading=!0;const a={};e&&(a.$or=[{name:{$containsi:e}},{templateDev:{$containsi:e}},{templateStaging:{$containsi:e}},{template:{$containsi:e}}]);const i=this.$qs.stringify({filters:a,sort:["name:desc"],pagination:{start:0,limit:10}});this.debounce=this.$debounce(async()=>{this.components=(await this.$likhaAPI.get("/components?"+i)).data.data.map(f=>A(C({},f.attributes),{props:{}}))},1250),this.debounce(),this.loading=!1},async ctrlSave(e){if(!(e.keyCode===83&&e.ctrlKey))return!1;e.preventDefault(),this.save()},async save(){const e=this.$JSON5.stringify(this.page.components,{space:2});await this.$likhaAPI.put("/pages/"+this.page.id,{data:{components:e}}),this.page.components=new Function("return "+e)().sort((a,i)=>a.order-i.order),this.page.origComponents=JSON.stringify(this.page.components)}},data(){return{code:`
        // console.log('html', this);
        const html = this.document.querySelector('html');
        // console.log('html', this);
        html.style.overflow = 'hidden';
      `,loading:!0,page:{name:"",id:-1,path:"",components:[],origComponents:""},pageComponents:[],pages:[],dragging:!1,searchText:"",env:"",components:[]}},setup(){const e=y(!1),a=y(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},rightDrawerOpen:a,toggleRightDrawer(){}}}},jt=Pt(" No results "),Wt={class:"row"},Rt={class:"absolute-top",style:{height:"50px"}},Yt={class:"q-pa-md"},Xt={class:"list-group-item"},Kt={style:{height:"150px"}},Jt=["srcdoc"],Zt={style:{"background-color":"rgba(0, 0, 0, 0.6)","backdrop-filter":"blur(4px)","-webkit-backdrop-filter":"blur(4px)"},class:"text-white handle absolute-bottom text-subtitle2 text-center q-pa-md"},Gt={class:"column"};function ea(e,a,i,f,t,o){const u=Pe("draggable"),n=Pe("likha-iframe");return fe(),me(It,{view:"hHr LpR lfr"},{default:z(()=>[p(Ht,{elevated:"",class:"bg-dark text-white","height-hint":"98"},{default:z(()=>[p(Be,{class:"shadow-6"},{default:z(()=>[p(Te,{dense:"",flat:"",round:"",icon:"menu",onClick:f.toggleLeftDrawer},null,8,["onClick"]),p(Bt,null,{default:z(()=>[p(Vt,{ref:"qSelect",dark:"",filled:"",standout:"",style:{"max-width":"300px",height:"50px"},modelValue:t.page.name,"onUpdate:modelValue":[a[0]||(a[0]=c=>t.page.name=c),a[2]||(a[2]=async c=>{await o.getPage(c),e.$refs.qSelect.blur(),e.$updateURL("/page-editor/"+c),o.getPages()})],options:t.pages,"use-input":"","hide-selected":"","fill-input":"",loading:t.loading,onFilter:a[1]||(a[1]=(c,l,S)=>l(()=>{})),onInputValue:o.getPages,onPopupShow:o.getPages},{"no-option":z(()=>[p(Dt,null,{default:z(()=>[p(Mt,{class:"text-grey"},{default:z(()=>[jt]),_:1})]),_:1})]),_:1},8,["modelValue","options","loading","onInputValue","onPopupShow"])]),_:1}),p(Te,{disabled:!o.hasChanges,dense:"",icon:"save",label:"save",onClick:o.save},null,8,["disabled","onClick"])]),_:1}),L("div",Wt,[p(Ve,{modelValue:t.page.path,"onUpdate:modelValue":a[3]||(a[3]=c=>t.page.path=c),readonly:"",dense:"",dark:"",label:"path",class:"q-ma-sm"},null,8,["modelValue"]),p(At),p(Et,{align:"right",dense:"",modelValue:t.env,"onUpdate:modelValue":a[4]||(a[4]=c=>t.env=c)},{default:z(()=>[p(he,{name:"",label:"prod"}),p(he,{name:"/staging-env",label:"staging"}),p(he,{name:"/dev-env",label:"dev"})]),_:1},8,["modelValue"])])]),_:1}),p(Le,{modelValue:f.leftDrawerOpen,"onUpdate:modelValue":a[5]||(a[5]=c=>f.leftDrawerOpen=c),side:"left",bordered:""},null,8,["modelValue"]),p(Le,{"show-if-above":"",modelValue:f.rightDrawerOpen,"onUpdate:modelValue":a[10]||(a[10]=c=>f.rightDrawerOpen=c),side:"right",class:"column col"},{default:z(()=>[L("div",Rt,[p(Be,{class:"bg-dark text-white col"},{default:z(()=>[p(Ve,{dark:"",dense:"",standout:"",modelValue:t.searchText,"onUpdate:modelValue":[a[7]||(a[7]=c=>t.searchText=c),o.getComponents],class:"col","input-class":"text-right"},{append:z(()=>[t.searchText===""?(fe(),me(De,{key:0,name:"search"})):(fe(),me(De,{key:1,name:"clear",class:"cursor-pointer",onClick:a[6]||(a[6]=c=>t.searchText="")}))]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1})]),p(Ut,{class:"inset-shadow",style:{height:"calc(100% - 50px)","margin-top":"50px"}},{default:z(()=>[L("div",Yt,[p(u,{class:"dragArea list-group q-gutter-md","ghost-class":"ghost",clone:o.clone,list:this.components,group:{name:"pageComponents",pull:"clone",put:!1},"item-key":"name",onStart:a[8]||(a[8]=c=>t.dragging=!0),onEnd:a[9]||(a[9]=c=>t.dragging=!1)},{item:z(({element:c})=>[L("div",Xt,[p(xt,null,{default:z(()=>[L("div",Kt,[L("iframe",{class:"shadow-transition fit",srcdoc:`
                        <iframe src="${e.$previewHost+t.env+"/lk-preview/"+c.name}" frameborder="0"
                          style="
                            -ms-transform: scale(0.80);
                            -moz-transform: scale(0.80);
                            -o-transform: scale(0.80);
                            -webkit-transform: scale(0.80);
                            transform: scale(0.80);

                            -ms-transform-origin: 0 0;
                            -moz-transform-origin: 0 0;
                            -o-transform-origin: 0 0;
                            -webkit-transform-origin: 0 0;
                            transform-origin: 0 0;
                          "
                          onload="function fnName () { ${t.code} }; fnName()"
                        ></iframe>
                      `},`\r
                    `,8,Jt),L("div",Zt,Ot(c.name),1)])]),_:2},1024)])]),_:1},8,["clone","list"])])]),_:1})]),_:1},8,["modelValue"]),p(Lt,null,{default:z(()=>[L("div",Gt,[p(u,{class:Me(["dragArea list-group column items-center",{"q-gutter-md q-ma-sm bg-green-2 q-pa-sm min-height":t.dragging}]),"ghost-class":"ghost",handle:".handle",modelValue:t.page.components,"onUpdate:modelValue":a[11]||(a[11]=c=>t.page.components=c),"item-key":"name",group:{name:"pageComponents",pull:!0,put:!0},onStart:a[12]||(a[12]=c=>t.dragging=!0),onEnd:a[13]||(a[13]=c=>t.dragging=!1),move:o.checkMove,onChange:o.changedComponents},{item:z(({element:c,index:l})=>[p(n,{modelValue:t.page.components[l],"onUpdate:modelValue":S=>t.page.components[l]=S,class:Me(["list-group-item col",{"max-height-100":t.dragging}]),env:t.env,component:c,dragging:t.dragging,onRemove:S=>o.removeComponent(c.name,l)},null,8,["modelValue","onUpdate:modelValue","class","env","component","dragging","onRemove"])]),_:1},8,["class","modelValue","move","onChange"])])]),_:1})]),_:1})}var ua=_t(Nt,[["render",ea]]);export{ua as default};
