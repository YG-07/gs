import{d as i,r as l,V as c,o as m,W as v,X as d,z as f,v as h,b as U,Y as S,Q as g,G as y}from"./@vue-79a6a370.js";import{c as x,s as o}from"./index-2b563dbb.js";import{u as B}from"./naive-ui-fa278d27.js";import{_ as F}from"./plugin-vueexport-helper-d7c00f7c.js";const w=i({__name:"UrlSelect",setup(C){const n=B(),t=l(x());let s=l(o.get("genshinUrlSelect")||"mhy");const u=[{label:"\u7C73\u6E38\u793E",value:"mhy"},{label:"\u62C6\u5305\u7F51",value:"wiki"}],r=(e,a)=>{s.value!=e&&(s.value=e,o.set("genshinUrlSelect",e),n.success(`\u6210\u529F\u5207\u6362\u70B9\u51FB\u4E8B\u4EF6\u4E3A\uFF1A${a.label}`))};return(e,a)=>{const _=c("n-select"),p=c("n-space");return m(),v(p,{class:"UrlSelect",size:"large"},{default:d(()=>[f(U("span",null,"\u5207\u6362URL",512),[[h,t.value]]),S(_,{value:g(s),"onUpdate:value":r,options:u,style:y(t.value?"width: 200px":"")},null,8,["value","style"])]),_:1})}}});const A=F(w,[["__scopeId","data-v-e76586ce"]]);export{A as U};