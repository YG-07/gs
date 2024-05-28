import{d as le,r as u,z as se,a as ue,u as oe,A as re,B as ie,b as o,c as s,w as t,o as a,e as n,f as H,q as N,t as I,h as e,g as T,v as j,n as r,k as C,C as K,D as M,E as ce,l as pe,x as de,m as L}from"./index.7fd40ef4.js";import{U as _e,P as me}from"./UrlSelect.d1cd8054.js";import{c as ye,n as ve,r as he,q as fe}from"./index.569b1bd1.js";import{C as ge}from"./CommonIcon.6a78dab8.js";import{s as we}from"./star_rail_select.09ae8527.js";import{A as ke}from"./Aperture.a9bd491a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const Ce=H("h2",null,"\u5149\u9525",-1),Re=le({__name:"Weapon",setup(xe){const v=u(ye());let R=u(100),B=u(169);v.value?(R.value=100,B.value=169):(R.value=45,B.value=76);const d=u(!1),E=se(),G=ue();oe();let w=u({pageNum:1,pageSize:100}),m=u(!0),x=u(""),z=u(-2),S=u(-2),U=u(0),k=u([]),h=u(`
    ${v.value?"margin: 20px;":"margin:2px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const J=l=>{z.value=l,f(1)},O=l=>{S.value=l,f(1)},Q=l=>{x.value=l},X=l=>{f(1)},Y=()=>{x.value="",z.value=S.value=-2,f(1)},Z=l=>{w.value.pageSize=l,f(1)},ee=l=>[L("div",{className:"render-star-rail-weapon-label"},{default:()=>[l.value>-1?L(ge,{url:we[l.value].icon_url,size:30},{default:()=>L("")}):void 0,L("span",{},{default:()=>l.label})]})],F=u({}),P=async()=>{E.start(),d.value=!0;let l={name:x.value,weapon:z.value,star:S.value,page:w.value},{code:g,data:i,msg:W}=await he(l);if(g!=200){G.error(W),setTimeout(()=>{E.finish()},500),d.value=!1;return}U.value=i.total;const{star_rail_base:b,star_rail_wiki_base:c,star_rail_mhy_url:A,star_rail_weapon:$}=await fe(),D=`${b}${A}`,q=`${c}${$}`;k.value=i==null?void 0:i.records.map(_=>(_.mhy_URL=D.replace("{id}",_.mhy_url),_.wiki_URL=q.replace("{id}",_.wiki_url),_.imgSrc=_.icon_url,_)),setTimeout(()=>{E.finish()},500),d.value=!1},f=async l=>{w.value.pageNum=l,k.value=[],U.value=0,P()};return re(async()=>{F.value=await ve()}),ie(()=>{P()}),(l,g)=>{const i=o("n-skeleton"),W=o("n-gradient-text"),b=o("n-layout-header"),c=o("n-space"),A=o("n-select"),$=o("n-input"),D=o("n-button"),q=o("n-divider"),_=o("n-icon"),te=o("n-empty"),ae=o("n-layout-content"),ne=o("n-pagination"),V=o("n-layout");return a(),s(V,null,{default:t(()=>[n(b,{class:"header-top"},{default:t(()=>[H("div",null,[Ce,d.value?(a(),s(i,{key:0,width:150,sharp:!1,size:"medium"})):(a(),s(W,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:t(()=>[N(" \u5171"+I(e(U))+"\u4E2A\uFF0C\u5DF2\u5C55\u793A"+I(e(k).length)+"\u4E2A ",1)]),_:1},8,["gradient"]))]),d.value?(a(),s(i,{key:0,width:300,sharp:!1,size:"medium"})):(a(),s(_e,{key:1}))]),_:1}),n(V,null,{default:t(()=>[n(b,null,{default:t(()=>[d.value?T((a(),s(c,{key:0,style:r(e(h))},{default:t(()=>[(a(!0),C(M,null,K(new Array(6),(p,y)=>(a(),s(i,{key:y,width:260,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[j,e(m)]]):T((a(),s(c,{key:1,class:"space-main",style:r(e(h))},{default:t(()=>{var p,y;return[n(A,{value:e(S),"onUpdate:value":O,options:(p=F.value)==null?void 0:p.star,style:r(v.value?"width: 200px":"")},null,8,["value","options","style"]),n(A,{"render-label":ee,value:e(z),"onUpdate:value":J,options:(y=F.value)==null?void 0:y.weapon,style:r(v.value?"width: 200px":"")},null,8,["value","options","style"]),n($,{value:e(x),onKeyup:ce(X,["enter"]),"onUpdate:value":Q,type:"text",placeholder:"\u641C\u7D22\u6B66\u5668\u540D",style:r(v.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),n(c,{style:r(v.value?"flex:1;":"min-width: 200px;")},{default:t(()=>[n(D,{type:"success",style:{width:"84px"},onClick:g[0]||(g[0]=ze=>f(1))},{default:t(()=>[N("\u641C\u7D22")]),_:1}),n(D,{type:"warning",onClick:Y},{default:t(()=>[N("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[j,e(m)]]),v.value?de("",!0):(a(),s(q,{key:2,onClick:g[1]||(g[1]=p=>pe(m)?m.value=!e(m):m=!e(m))},{default:t(()=>[N(I(e(m)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),n(ae,{"has-sider":""},{default:t(()=>[d.value?(a(),s(c,{key:0,style:r(e(h))},{default:t(()=>[(a(!0),C(M,null,K(new Array(20),(p,y)=>(a(),C("div",{key:y},[n(i,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!d.value&&e(k).length>0?(a(),s(c,{key:1,style:r(e(h))},{default:t(()=>[(a(!0),C(M,null,K(e(k),(p,y)=>(a(),C("div",{key:y},[n(me,{width:e(R),height:e(B),src:p.imgSrc,item:p,mhy_url:p.mhy_URL,wiki_url:p.wiki_URL,objectFit:"contain"},null,8,["width","height","src","item","mhy_url","wiki_url"])]))),128))]),_:1},8,["style"])):(a(),s(c,{key:2,style:r([{width:"100%"},e(h)])},{default:t(()=>[n(te,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:t(()=>[n(_,null,{default:t(()=>[n(e(ke))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),n(V,{"content-style":"overflow-x: scroll;"},{default:t(()=>[d.value?(a(),s(c,{key:0,style:r(e(h))},{default:t(()=>[n(i,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(a(),s(c,{key:1,style:r(e(h))},{default:t(()=>[n(ne,{page:e(w).pageNum,"page-size":e(w).pageSize,"item-count":e(U),"on-update:page":f,"show-size-picker":"","page-sizes":[30,50,100,150,200,300],"on-update:page-size":Z},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{Re as default};
