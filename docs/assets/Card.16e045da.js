import{d as ee,r as l,C as te,a as ae,D as ue,E as ne,b as s,c as n,w as t,o as a,e as u,f as b,G as S,t as V,h as e,g as T,v as G,n as d,k,x as K,y as M,H as le,l as se,A as oe}from"./index.401e27f2.js";import{U as ie,P as re}from"./UrlSelect.99668f62.js";import{c as ce,a as de,h as pe,q as _e}from"./index.d639e327.js";import{A as me}from"./Aperture.bc45313a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const ye=b("h2",null,"\u300C\u4E03\u5723\u53EC\u5524\u300D\u5361\u724C\uFF08\u5206\u7C7B\u4EC5\u4F9B\u53C2\u8003\uFF0C\u8BE6\u60C5\u94FE\u63A5\u4EC5\u4E3A\u62C6\u5305\u7F51\uFF09",-1),he=b("p",null,[b("a",{href:"https://bbs.mihoyo.com/ys/obc/channel/map/231/234"},"\u7C73\u6E38\u793E\u4E03\u5723\u53EC\u5524wiki")],-1),Ee=ee({__name:"Card",setup(ve){const h=l(ce());let B=l(100),N=l(169);h.value?(B.value=100,N.value=169):(B.value=45,N.value=76);const p=l(!1),$=te(),j=ae();let _=l(!0),E=l(""),x=l(-2),w=l({pageNum:1,pageSize:100}),F=l(0),C=l([]),y=l(`
    ${h.value?"margin: 20px;":"margin:2px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const H=o=>{x.value=o,v(1)},J=o=>{E.value=o},O=o=>{v(1)},Q=()=>{E.value="",x.value=-2,v(1)},W=o=>{w.value.pageSize=o,v(1)};l({});const P=l({}),R=async()=>{$.start(),p.value=!0;let o={name:E.value,card:x.value,page:w.value},{code:f,data:i,msg:U}=await pe(o);if(f!=200){j.error(U),setTimeout(()=>{$.finish()},500),p.value=!1;return}F.value=i.total;const{mhy_base:z,mhy_url:r,wiki_base:A,wiki_book_item:L}=await _e(),D=`${z}${r}`,q=`${A}${L}`;C.value=i==null?void 0:i.records.map(m=>(m.mhy_url=D.replace("{id}","-"),m.wiki_url=q.replace("{id}",m.url),m.imgSrc=`${A}${m.icon_url}`,m)),setTimeout(()=>{$.finish()},500),p.value=!1},v=async o=>{w.value.pageNum=o,C.value=[],F.value=0,R()};return ue(async()=>{P.value=await de()}),ne(()=>{R()}),(o,f)=>{const i=s("n-skeleton"),U=s("n-gradient-text"),z=s("n-layout-header"),r=s("n-space"),A=s("n-select"),L=s("n-input"),D=s("n-button"),q=s("n-divider"),m=s("n-icon"),X=s("n-empty"),Y=s("n-layout-content"),Z=s("n-pagination"),I=s("n-layout");return a(),n(I,null,{default:t(()=>[u(z,{class:"header-top"},{default:t(()=>[b("div",null,[ye,he,p.value?(a(),n(i,{key:0,width:150,sharp:!1,size:"medium"})):(a(),n(U,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:t(()=>[S(" \u5171"+V(e(F))+"\u4E2A\uFF0C\u5DF2\u5C55\u793A"+V(e(C).length)+"\u4E2A ",1)]),_:1},8,["gradient"]))]),p.value?(a(),n(i,{key:0,width:300,sharp:!1,size:"medium"})):(a(),n(ie,{key:1}))]),_:1}),u(I,null,{default:t(()=>[u(z,null,{default:t(()=>[p.value?T((a(),n(r,{key:0,style:d(e(y))},{default:t(()=>[(a(!0),k(M,null,K(new Array(8),(c,g)=>(a(),n(i,{key:g,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[G,e(_)]]):T((a(),n(r,{key:1,class:"space-main",style:d(e(y))},{default:t(()=>{var c;return[u(A,{value:e(x),"onUpdate:value":H,options:(c=P.value)==null?void 0:c.card,style:d(h.value?"width: 200px":"")},null,8,["value","options","style"]),u(L,{value:e(E),onKeyup:le(O,["enter"]),"onUpdate:value":J,type:"text",placeholder:"\u641C\u7D22\u5361\u724C\u7269\u54C1\u540D",style:d(h.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),u(r,{style:d(h.value?"flex:1;":"min-width: 200px;")},{default:t(()=>[u(D,{type:"success",style:{width:"84px"},onClick:f[0]||(f[0]=g=>v(1))},{default:t(()=>[S("\u641C\u7D22")]),_:1}),u(D,{type:"warning",onClick:Q},{default:t(()=>[S("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[G,e(_)]]),h.value?oe("",!0):(a(),n(q,{key:2,onClick:f[1]||(f[1]=c=>se(_)?_.value=!e(_):_=!e(_))},{default:t(()=>[S(V(e(_)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),u(Y,{"has-sider":""},{default:t(()=>[p.value?(a(),n(r,{key:0,style:d(e(y))},{default:t(()=>[(a(!0),k(M,null,K(new Array(20),(c,g)=>(a(),k("div",{key:g},[u(i,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!p.value&&e(C).length>0?(a(),n(r,{key:1,style:d(e(y))},{default:t(()=>[(a(!0),k(M,null,K(e(C),(c,g)=>(a(),k("div",{key:g},[u(re,{width:e(B),height:e(N),src:c.imgSrc,item:c,mhy_url:c.mhy_url,wiki_url:c.wiki_url},null,8,["width","height","src","item","mhy_url","wiki_url"])]))),128))]),_:1},8,["style"])):(a(),n(r,{key:2,style:d([{width:"100%"},e(y)])},{default:t(()=>[u(X,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:t(()=>[u(m,null,{default:t(()=>[u(e(me))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),u(I,{"content-style":"overflow-x: scroll;"},{default:t(()=>[p.value?(a(),n(r,{key:0,style:d(e(y))},{default:t(()=>[u(i,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(a(),n(r,{key:1,style:d(e(y))},{default:t(()=>[u(Z,{page:e(w).pageNum,"page-size":e(w).pageSize,"item-count":e(F),"on-update:page":v,"show-size-picker":"","page-sizes":[10,50,70,100],"on-update:page-size":W},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{Ee as default};
