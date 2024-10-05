import{d as se,r as s,k as ue,j as re,V as o,W as u,X as t,o as n,Y as l,b as j,e as b,$ as L,Q as e,z as M,v as T,G as r,c as C,O as $,F as R,a4 as ie,a0 as pe,a2 as ce,s as W}from"./@vue-79a6a370.js";import{W as me}from"./WavesCard-6c718de7.js";import{c as de,z as ve,B as _e,q as ye}from"./index-624f9afd.js";import{C as fe}from"./CommonIcon-adfe4e72.js";import{w as ge}from"./waves_select_item-6029c2e1.js";import{A as he}from"./@vicons-062edbc6.js";import{e as we,u as ke}from"./naive-ui-fa278d27.js";import"./plugin-vueexport-helper-d7c00f7c.js";import"./lodash-dfafa856.js";import"./date-fns-f8897e89.js";import"./moment-b35f754a.js";import"./mitt-dab1f1cb.js";import"./css-render-72c8a4e0.js";import"./@emotion-e1dc9e92.js";import"./@css-render-ca6fedfc.js";import"./seemly-598f553b.js";import"./lodash-es-86019d98.js";import"./vooks-ed236956.js";import"./evtd-6b3c7fca.js";import"./vueuc-0daedfc4.js";import"./vdirs-943cc171.js";import"./@juggle-28bbed7a.js";import"./treemate-97ea80b9.js";import"./date-fns-tz-38009909.js";import"./async-validator-9e2b95c0.js";const xe=j("h2",null,"\u6B66\u5668",-1),Ye=se({__name:"Weapon",setup(Ce){const y=s(de()),m=s(!1),E=we(),G=ke();let O=!0,w=s({pageNum:1,pageSize:100}),d=s(O),z=s(""),S=s(-2),D=s(-2),F=s(-2),A=s(0),k=s([]),f=s(`
    ${y.value?"margin: 20px;":"margin:2px; gap: 8px 5px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const P=a=>{S.value=a,v(1)},Q=a=>{D.value=a,v(1)},X=a=>{F.value=a,v(1)},Y=a=>{z.value=a},H=a=>{v(1)},J=()=>{z.value="",D.value=S.value=F.value=-2,v(1)},Z=a=>{w.value.pageSize=a,v(1)},ee=a=>[W("div",{style:{display:"flex",alignItems:"center"}},{default:()=>[a.value>-1?W(fe,{url:ge[a.value].icon_url,size:30},{default:()=>W("")}):void 0,W("span",{},{default:()=>a.label})]})],B=s({}),V=async()=>{E.start(),m.value=!0;let a={name:z.value,item:S.value,weapon:D.value,star:F.value,page:w.value},{code:h,data:p,msg:I}=await _e(a);if(h!=200){G.error(I),setTimeout(()=>{E.finish()},500),m.value=!1;return}A.value=p.total;const{waves_base:N,waves_url:i}=await ye(),x=`${N}${i}`;k.value=p==null?void 0:p.records.map(g=>(g.surl=x.replace("{id}",g.url),g.imgSrc=g.icon_url,g)),setTimeout(()=>{E.finish()},500),m.value=!1},v=async a=>{w.value.pageNum=a,k.value=[],A.value=0,V()};return ue(async()=>{B.value=await ve()}),re(()=>{V()}),(a,h)=>{const p=o("n-skeleton"),I=o("n-gradient-text"),N=o("n-layout-header"),i=o("n-space"),x=o("n-select"),g=o("n-input"),q=o("n-button"),te=o("n-divider"),ae=o("n-icon"),le=o("n-empty"),ne=o("n-layout-content"),oe=o("n-pagination"),U=o("n-layout");return n(),u(U,null,{default:t(()=>[l(N,{class:"header-top"},{default:t(()=>[j("div",null,[xe,m.value?(n(),u(p,{key:0,width:150,sharp:!1,size:"medium"})):(n(),u(I,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:t(()=>[b(" \u5171"+L(e(A))+"\u4F4D\uFF0C\u5DF2\u5C55\u793A"+L(e(k).length)+"\u4E2A ",1)]),_:1},8,["gradient"]))])]),_:1}),l(U,null,{default:t(()=>[l(N,null,{default:t(()=>[m.value?M((n(),u(i,{key:0,style:r(e(f))},{default:t(()=>[(n(!0),C(R,null,$(new Array(8),(c,_)=>(n(),u(p,{key:_,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[T,e(d)]]):M((n(),u(i,{key:1,class:"space-main",style:r(e(f))},{default:t(()=>{var c,_,K;return[l(x,{value:e(F),"onUpdate:value":X,options:(c=B.value)==null?void 0:c.star,style:r(y.value?"width: 200px":"")},null,8,["value","options","style"]),l(x,{value:e(D),"onUpdate:value":Q,options:(_=B.value)==null?void 0:_.weapon,style:r(y.value?"width: 200px":"")},null,8,["value","options","style"]),l(x,{"render-label":ee,value:e(S),"onUpdate:value":P,options:(K=B.value)==null?void 0:K.item,style:r(y.value?"width: 200px":"")},null,8,["value","options","style"]),l(g,{value:e(z),onKeyup:ie(H,["enter"]),"onUpdate:value":Y,type:"text",placeholder:"\u641C\u7D22\u6B66\u5668\u540D",style:r(y.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),l(i,{style:r(y.value?"flex:1;":"min-width: 200px;")},{default:t(()=>[l(q,{type:"success",style:{width:"84px"},onClick:h[0]||(h[0]=ze=>v(1))},{default:t(()=>[b("\u641C\u7D22")]),_:1}),l(q,{type:"warning",onClick:J},{default:t(()=>[b("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[T,e(d)]]),y.value?ce("",!0):(n(),u(te,{key:2,onClick:h[1]||(h[1]=c=>pe(d)?d.value=!e(d):d=!e(d))},{default:t(()=>[b(L(e(d)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),l(ne,{"has-sider":""},{default:t(()=>[m.value?(n(),u(i,{key:0,style:r(e(f))},{default:t(()=>[(n(!0),C(R,null,$(new Array(20),(c,_)=>(n(),C("div",{key:_},[l(p,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!m.value&&e(k).length>0?(n(),u(i,{key:1,style:r(e(f))},{default:t(()=>[(n(!0),C(R,null,$(e(k),(c,_)=>(n(),C("div",{key:_},[l(me,{src:c.imgSrc,item:c,url:c.surl},null,8,["src","item","url"])]))),128))]),_:1},8,["style"])):(n(),u(i,{key:2,style:r([{width:"100%"},e(f)])},{default:t(()=>[l(le,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:t(()=>[l(ae,null,{default:t(()=>[l(e(he))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),l(U,{"content-style":"overflow-x: scroll;"},{default:t(()=>[m.value?(n(),u(i,{key:0,style:r(e(f))},{default:t(()=>[l(p,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(n(),u(i,{key:1,style:r(e(f))},{default:t(()=>[l(oe,{page:e(w).pageNum,"page-size":e(w).pageSize,"item-count":e(A),"on-update:page":v,"show-size-picker":"","page-sizes":[10,50,100,150],"on-update:page-size":Z},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{Ye as default};
