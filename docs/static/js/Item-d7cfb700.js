import{d as le,r as o,k as ne,j as ue,V as s,W as u,X as t,o as a,Y as l,b as G,e as F,$ as q,Q as e,z as T,v as j,G as i,c as C,O as K,F as M,a4 as oe,a0 as se,a2 as ie}from"./@vue-79a6a370.js";import{P as re}from"./PicCard-466f080b.js";import{c as pe,a as me,f as ce,q as de}from"./index-2b563dbb.js";import{U as _e}from"./UrlSelect-bbd750d0.js";import{A as ye}from"./@vicons-062edbc6.js";import{e as ve,u as he}from"./naive-ui-fa278d27.js";import"./plugin-vueexport-helper-d7c00f7c.js";import"./lodash-dfafa856.js";import"./date-fns-f8897e89.js";import"./moment-b35f754a.js";import"./mitt-dab1f1cb.js";import"./css-render-72c8a4e0.js";import"./@emotion-e1dc9e92.js";import"./@css-render-ca6fedfc.js";import"./seemly-598f553b.js";import"./lodash-es-86019d98.js";import"./vooks-ed236956.js";import"./evtd-6b3c7fca.js";import"./vueuc-0daedfc4.js";import"./vdirs-943cc171.js";import"./@juggle-28bbed7a.js";import"./treemate-97ea80b9.js";import"./date-fns-tz-38009909.js";import"./async-validator-9e2b95c0.js";const fe=G("h2",null,"\u6B66\u5668\u7A81\u7834\u6750\u6599",-1),Ge=le({__name:"Item",setup(ge){const h=o(pe()),c=o(!1),I=ve(),W=he();let _=o(!0),z=o(""),A=o(-2),b=o(-2),B=o(-2),k=o({pageNum:1,pageSize:100}),S=o(0),w=o([]),f=o(`
    ${h.value?"margin: 20px;":"margin:2px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const O=n=>{A.value=n,y(1)},Q=n=>{b.value=n,y(1)},X=n=>{B.value=n,y(1)},Y=n=>{z.value=n},H=n=>{y(1)},J=()=>{z.value="",A.value=-2,y(1)},Z=n=>{k.value.pageSize=n,y(1)};o({});const D=o({}),P=async()=>{I.start(),c.value=!0;let n={name:z.value,star:A.value,week:B.value,item:b.value,page:k.value},{code:g,data:r,msg:E}=await ce(n);if(g!=200){W.error(E),setTimeout(()=>{I.finish()},500),c.value=!1;return}S.value=r.total;const{mhy_base:N,mhy_url:p,wiki_base:x,wiki_book_item:$}=await de(),U=`${N}${p}`,L=`${x}${$}`;w.value=r==null?void 0:r.records.map(d=>(d.mhy_url=U.replace("{id}",d.mhy_url),d.wiki_url=L.replace("{id}",d.wiki_url),d.imgSrc=d.icon_url,d)),setTimeout(()=>{I.finish()},500),c.value=!1},y=async n=>{k.value.pageNum=n,w.value=[],S.value=0,P()};return ne(async()=>{D.value=await me()}),ue(()=>{P()}),(n,g)=>{const r=s("n-skeleton"),E=s("n-gradient-text"),N=s("n-layout-header"),p=s("n-space"),x=s("n-select"),$=s("n-input"),U=s("n-button"),L=s("n-divider"),d=s("n-icon"),ee=s("n-empty"),te=s("n-layout-content"),ae=s("n-pagination"),V=s("n-layout");return a(),u(V,null,{default:t(()=>[l(N,{class:"header-top"},{default:t(()=>[G("div",null,[fe,c.value?(a(),u(r,{key:0,width:150,sharp:!1,size:"medium"})):(a(),u(E,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:t(()=>[F(" \u5171"+q(e(S))+"\u4E2A\uFF0C\u5DF2\u5C55\u793A"+q(e(w).length)+"\u4E2A ",1)]),_:1},8,["gradient"]))]),c.value?(a(),u(r,{key:0,width:300,sharp:!1,size:"medium"})):(a(),u(_e,{key:1}))]),_:1}),l(V,null,{default:t(()=>[l(N,null,{default:t(()=>[c.value?T((a(),u(p,{key:0,style:i(e(f))},{default:t(()=>[(a(!0),C(M,null,K(new Array(8),(m,v)=>(a(),u(r,{key:v,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[j,e(_)]]):T((a(),u(p,{key:1,class:"space-main",style:i(e(f))},{default:t(()=>{var m,v,R;return[l(x,{value:e(A),"onUpdate:value":O,options:(m=D.value)==null?void 0:m.star,style:i(h.value?"width: 200px":"")},null,8,["value","options","style"]),l(x,{value:e(B),"onUpdate:value":X,options:(v=D.value)==null?void 0:v.week,style:i(h.value?"width: 200px":"")},null,8,["value","options","style"]),l(x,{value:e(b),"onUpdate:value":Q,options:(R=D.value)==null?void 0:R.item,style:i(h.value?"width: 200px":"")},null,8,["value","options","style"]),l($,{value:e(z),onKeyup:oe(H,["enter"]),"onUpdate:value":Y,type:"text",placeholder:"\u641C\u7D22\u7A81\u7834\u6750\u6599\u540D",style:i(h.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),l(p,{style:i(h.value?"flex:1;":"min-width: 200px;")},{default:t(()=>[l(U,{type:"success",style:{width:"84px"},onClick:g[0]||(g[0]=ke=>y(1))},{default:t(()=>[F("\u641C\u7D22")]),_:1}),l(U,{type:"warning",onClick:J},{default:t(()=>[F("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[j,e(_)]]),h.value?ie("",!0):(a(),u(L,{key:2,onClick:g[1]||(g[1]=m=>se(_)?_.value=!e(_):_=!e(_))},{default:t(()=>[F(q(e(_)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),l(te,{"has-sider":""},{default:t(()=>[c.value?(a(),u(p,{key:0,style:i(e(f))},{default:t(()=>[(a(!0),C(M,null,K(new Array(20),(m,v)=>(a(),C("div",{key:v},[l(r,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!c.value&&e(w).length>0?(a(),u(p,{key:1,style:i(e(f))},{default:t(()=>[(a(!0),C(M,null,K(e(w),(m,v)=>(a(),C("div",{key:v},[l(re,{round:"0.75rem",src:m.imgSrc,item:m,mhy_url:m.mhy_url,wiki_url:m.wiki_url},null,8,["src","item","mhy_url","wiki_url"])]))),128))]),_:1},8,["style"])):(a(),u(p,{key:2,style:i([{width:"100%"},e(f)])},{default:t(()=>[l(ee,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:t(()=>[l(d,null,{default:t(()=>[l(e(ye))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),l(V,{"content-style":"overflow-x: scroll;"},{default:t(()=>[c.value?(a(),u(p,{key:0,style:i(e(f))},{default:t(()=>[l(r,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(a(),u(p,{key:1,style:i(e(f))},{default:t(()=>[l(ae,{page:e(k).pageNum,"page-size":e(k).pageSize,"item-count":e(S),"on-update:page":y,"show-size-picker":"","page-sizes":[10,50,70,100],"on-update:page-size":Z},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{Ge as default};