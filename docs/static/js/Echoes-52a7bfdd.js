import{d as re,r as s,k as pe,j as ce,V as u,W as i,X as a,M as de,o as n,Y as l,b as O,e as U,$ as V,Q as t,z as j,v as G,G as o,c as F,O as W,F as q,a4 as me,a0 as ve,a2 as _e,s as B}from"./@vue-79a6a370.js";import{W as ye}from"./WavesCard-6fa30db6.js";import{c as fe,z as he,E as ge,q as we,F as ke}from"./index-2b563dbb.js";import{C as xe}from"./CommonIcon-adfe4e72.js";import{A as Ce}from"./@vicons-062edbc6.js";import{e as ze,u as Fe}from"./naive-ui-fa278d27.js";import"./plugin-vueexport-helper-d7c00f7c.js";import"./lodash-dfafa856.js";import"./date-fns-f8897e89.js";import"./moment-b35f754a.js";import"./mitt-dab1f1cb.js";import"./css-render-72c8a4e0.js";import"./@emotion-e1dc9e92.js";import"./@css-render-ca6fedfc.js";import"./seemly-598f553b.js";import"./lodash-es-86019d98.js";import"./vooks-ed236956.js";import"./evtd-6b3c7fca.js";import"./vueuc-0daedfc4.js";import"./vdirs-943cc171.js";import"./@juggle-28bbed7a.js";import"./treemate-97ea80b9.js";import"./date-fns-tz-38009909.js";import"./async-validator-9e2b95c0.js";const Se=O("h2",null,"\u58F0\u9AB8",-1),Ze=re({__name:"Echoes",setup(Ee){const m=s(fe()),v=s(!1),L=ze(),P=Fe();let Q=!0,k=s({pageNum:1,pageSize:100}),_=s(Q),S=s(""),E=s(-2),A=s(-2),x=s([-2]),D=s(-2),b=s(0),C=s([]),h=s(`
    ${m.value?"margin: 20px;":"margin:2px; gap: 8px 5px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const X=e=>{E.value=e,p(1)},Y=e=>{A.value=e,p(1)},H=e=>{e.includes(-2)&&e.length>1?x.value=e.filter(y=>y!=-2):x.value=e.length>0?e:[-2],p(1)},J=e=>{D.value=e,p(1)},Z=e=>{S.value=e},ee=e=>{p(1)},te=()=>{S.value="",x.value=[],A.value=D.value=E.value=-2,p(1)},ae=e=>{k.value.pageSize=e,p(1)},le=e=>[B("div",{style:{display:"flex",alignItems:"center"}},{default:()=>[e.value>-1?B(xe,{url:ke[e.value].icon_url,size:30},{default:()=>B("")}):void 0,B("span",{},{default:()=>e.label})]})],z=s({}),I=async()=>{L.start(),v.value=!0;let e={name:S.value,level:E.value,suit:de(x.value),cost:A.value,unusual:D.value,page:k.value};console.log(e,"p");let{code:y,data:c,msg:R}=await ge(e);if(y!=200){P.error(R),setTimeout(()=>{L.finish()},500),v.value=!1;return}b.value=c.total;const{waves_base:N,waves_url:r}=await we(),w=`${N}${r}`;C.value=c==null?void 0:c.records.map(g=>(g.surl=w.replace("{id}",g.url),g.imgSrc=g.icon_url,g)),setTimeout(()=>{L.finish()},500),v.value=!1},p=async e=>{k.value.pageNum=e,C.value=[],b.value=0,I()};return pe(async()=>{z.value=await he()}),ce(()=>{I()}),(e,y)=>{const c=u("n-skeleton"),R=u("n-gradient-text"),N=u("n-layout-header"),r=u("n-space"),w=u("n-select"),g=u("n-input"),M=u("n-button"),ne=u("n-divider"),se=u("n-icon"),ue=u("n-empty"),oe=u("n-layout-content"),ie=u("n-pagination"),$=u("n-layout");return n(),i($,null,{default:a(()=>[l(N,{class:"header-top"},{default:a(()=>[O("div",null,[Se,v.value?(n(),i(c,{key:0,width:150,sharp:!1,size:"medium"})):(n(),i(R,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:a(()=>[U(" \u5171"+V(t(b))+"\u4F4D\uFF0C\u5DF2\u5C55\u793A"+V(t(C).length)+"\u4E2A ",1)]),_:1},8,["gradient"]))])]),_:1}),l($,null,{default:a(()=>[l(N,null,{default:a(()=>[v.value?j((n(),i(r,{key:0,style:o(t(h))},{default:a(()=>[(n(!0),F(q,null,W(new Array(8),(d,f)=>(n(),i(c,{key:f,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[G,t(_)]]):j((n(),i(r,{key:1,class:"space-main",style:o(t(h))},{default:a(()=>{var d,f,K,T;return[l(w,{value:t(E),"onUpdate:value":X,options:(d=z.value)==null?void 0:d.level,style:o(m.value?"width: 200px":"")},null,8,["value","options","style"]),l(w,{multiple:"",clearable:"","render-label":le,value:t(x),"onUpdate:value":H,options:(f=z.value)==null?void 0:f.suit,style:o(m.value?"width: 200px":"")},null,8,["value","options","style"]),l(w,{value:t(A),"onUpdate:value":Y,options:(K=z.value)==null?void 0:K.cost,style:o(m.value?"width: 200px":"")},null,8,["value","options","style"]),l(w,{value:t(D),"onUpdate:value":J,options:(T=z.value)==null?void 0:T.unusual,style:o(m.value?"width: 200px":"")},null,8,["value","options","style"]),l(g,{value:t(S),onKeyup:me(ee,["enter"]),"onUpdate:value":Z,type:"text",placeholder:"\u641C\u7D22\u7269\u54C1\u540D",style:o(m.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),l(r,{style:o(m.value?"flex:1;":"min-width: 200px;")},{default:a(()=>[l(M,{type:"success",style:{width:"84px"},onClick:y[0]||(y[0]=Ae=>p(1))},{default:a(()=>[U("\u641C\u7D22")]),_:1}),l(M,{type:"warning",onClick:te},{default:a(()=>[U("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[G,t(_)]]),m.value?_e("",!0):(n(),i(ne,{key:2,onClick:y[1]||(y[1]=d=>ve(_)?_.value=!t(_):_=!t(_))},{default:a(()=>[U(V(t(_)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),l(oe,{"has-sider":""},{default:a(()=>[v.value?(n(),i(r,{key:0,style:o(t(h))},{default:a(()=>[(n(!0),F(q,null,W(new Array(20),(d,f)=>(n(),F("div",{key:f},[l(c,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!v.value&&t(C).length>0?(n(),i(r,{key:1,style:o(t(h))},{default:a(()=>[(n(!0),F(q,null,W(t(C),(d,f)=>(n(),F("div",{key:f},[l(ye,{src:d.imgSrc,item:d,url:d.surl},null,8,["src","item","url"])]))),128))]),_:1},8,["style"])):(n(),i(r,{key:2,style:o([{width:"100%"},t(h)])},{default:a(()=>[l(ue,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:a(()=>[l(se,null,{default:a(()=>[l(t(Ce))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),l($,{"content-style":"overflow-x: scroll;"},{default:a(()=>[v.value?(n(),i(r,{key:0,style:o(t(h))},{default:a(()=>[l(c,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(n(),i(r,{key:1,style:o(t(h))},{default:a(()=>[l(ie,{page:t(k).pageNum,"page-size":t(k).pageSize,"item-count":t(b),"on-update:page":p,"show-size-picker":"","page-sizes":[10,50,100,150],"on-update:page-size":ae},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{Ze as default};
