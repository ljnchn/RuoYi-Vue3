import{l as E,c as I,a as T,b as q,d as G,e as J}from"./cache.4ab7a738.js";import{z as M,r as d,d as c,K as P,o as v,c as Q,e,w as a,C as R,j as S,f as n,m as W,k as w,s as X}from"./index.a64bb98d.js";const Y={class:"app-container"},Z=w("span",null,"\u7F13\u5B58\u5217\u8868",-1),ee=w("span",null,"\u952E\u540D\u5217\u8868",-1),ae=w("span",null,"\u7F13\u5B58\u5185\u5BB9",-1),te=M({name:"CacheList"}),ce=Object.assign(te,{setup(le){const{proxy:h}=X(),b=d([]),k=d([]),s=d({}),f=d(!0),_=d(!1),m=d(""),N=d(window.innerHeight-200);function V(){f.value=!0,E().then(l=>{b.value=l.data,f.value=!1})}function B(){V(),h.$modal.msgSuccess("\u5237\u65B0\u7F13\u5B58\u5217\u8868\u6210\u529F")}function D(l){I(l.cacheName).then(t=>{h.$modal.msgSuccess("\u6E05\u7406\u7F13\u5B58\u540D\u79F0["+m.value+"]\u6210\u529F"),p()})}function p(l){const t=l!==void 0?l.cacheName:m.value;t!==""&&(_.value=!0,T(t).then(r=>{k.value=r.data,_.value=!1,m.value=t}))}function O(){p(),h.$modal.msgSuccess("\u5237\u65B0\u952E\u540D\u5217\u8868\u6210\u529F")}function F(l){q(l).then(t=>{h.$modal.msgSuccess("\u6E05\u7406\u7F13\u5B58\u952E\u540D["+l+"]\u6210\u529F"),p()})}function U(l){return l.cacheName.replace(":","")}function j(l){return l.replace(m.value,"")}function A(l){G(m.value,l).then(t=>{s.value=t.data})}function H(){J().then(l=>{h.$modal.msgSuccess("\u6E05\u7406\u5168\u90E8\u7F13\u5B58\u6210\u529F")})}return V(),(l,t)=>{const r=c("el-button"),i=c("el-table-column"),x=c("el-table"),g=c("el-card"),u=c("el-col"),y=c("el-input"),C=c("el-form-item"),$=c("el-row"),L=c("el-form"),K=P("loading");return v(),Q("div",Y,[e($,{gutter:10},{default:a(()=>[e(u,{span:8},{default:a(()=>[e(g,{style:{height:"calc(100vh - 125px)"}},{header:a(()=>[Z,e(r,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:t[0]||(t[0]=o=>B())})]),default:a(()=>[R((v(),S(x,{data:n(b),height:n(N),"highlight-current-row":"",onRowClick:p,style:{width:"100%"}},{default:a(()=>[e(i,{label:"\u5E8F\u53F7",width:"60",type:"index"}),e(i,{label:"\u7F13\u5B58\u540D\u79F0",align:"center",prop:"cacheName","show-overflow-tooltip":!0,formatter:U}),e(i,{label:"\u5907\u6CE8",align:"center",prop:"remark","show-overflow-tooltip":!0}),e(i,{label:"\u64CD\u4F5C",width:"60",align:"center","class-name":"small-padding fixed-width"},{default:a(o=>[e(r,{link:"",type:"primary",icon:"Delete",onClick:z=>D(o.row)},null,8,["onClick"])]),_:1})]),_:1},8,["data","height"])),[[K,n(f)]])]),_:1})]),_:1}),e(u,{span:8},{default:a(()=>[e(g,{style:{height:"calc(100vh - 125px)"}},{header:a(()=>[ee,e(r,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:t[1]||(t[1]=o=>O())})]),default:a(()=>[R((v(),S(x,{data:n(k),height:n(N),"highlight-current-row":"",onRowClick:A,style:{width:"100%"}},{default:a(()=>[e(i,{label:"\u5E8F\u53F7",width:"60",type:"index"}),e(i,{label:"\u7F13\u5B58\u952E\u540D",align:"center","show-overflow-tooltip":!0,formatter:j}),e(i,{label:"\u64CD\u4F5C",width:"60",align:"center","class-name":"small-padding fixed-width"},{default:a(o=>[e(r,{link:"",type:"primary",icon:"Delete",onClick:z=>F(o.row)},null,8,["onClick"])]),_:1})]),_:1},8,["data","height"])),[[K,n(_)]])]),_:1})]),_:1}),e(u,{span:8},{default:a(()=>[e(g,{bordered:!1,style:{height:"calc(100vh - 125px)"}},{header:a(()=>[ae,e(r,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:t[2]||(t[2]=o=>H())},{default:a(()=>[W("\u6E05\u7406\u5168\u90E8")]),_:1})]),default:a(()=>[e(L,{model:n(s)},{default:a(()=>[e($,{gutter:32},{default:a(()=>[e(u,{offset:1,span:22},{default:a(()=>[e(C,{label:"\u7F13\u5B58\u540D\u79F0:",prop:"cacheName"},{default:a(()=>[e(y,{modelValue:n(s).cacheName,"onUpdate:modelValue":t[3]||(t[3]=o=>n(s).cacheName=o),readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{offset:1,span:22},{default:a(()=>[e(C,{label:"\u7F13\u5B58\u952E\u540D:",prop:"cacheKey"},{default:a(()=>[e(y,{modelValue:n(s).cacheKey,"onUpdate:modelValue":t[4]||(t[4]=o=>n(s).cacheKey=o),readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{offset:1,span:22},{default:a(()=>[e(C,{label:"\u7F13\u5B58\u5185\u5BB9:",prop:"cacheValue"},{default:a(()=>[e(y,{modelValue:n(s).cacheValue,"onUpdate:modelValue":t[5]||(t[5]=o=>n(s).cacheValue=o),type:"textarea",rows:8,readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{ce as default};
