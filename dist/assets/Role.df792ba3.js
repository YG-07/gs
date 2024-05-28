import{d as de,r as s,z as me,a as ye,u as _e,A as ve,B as he,b as o,c as u,w as a,o as n,e as l,f as O,q as E,t as $,h as t,g as G,v as J,n as i,k as C,C as V,D as T,E as fe,l as ge,x as we}from"./index.7fd40ef4.js";import{U as ke,P as xe}from"./UrlSelect.d1cd8054.js";import{c as De,l as Ce,m as ze,q as Re}from"./index.569b1bd1.js";import{A as Se}from"./Aperture.a9bd491a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const Ue=O("h2",null,"\u5973\u6B66\u795E",-1),qe=de({__name:"Role",setup(Ne){var H;const _=s(De()),d=s(!1),L=me(),Q=ye(),K=_e();let b=new Date,M=!0,k=s({pageNum:1,pageSize:100});const X=e=>e instanceof Date&&!isNaN(e.getTime()),Y=e=>e==0?-2:e>3?e-3:e;if((H=K.query)!=null&&H.t){let e=K.query.t;/^\d+$/.test(e)?b=new Date(Number(e)):b=X(new Date(e))?new Date(e):new Date,Y(b.getDay()),M=!1,k.value.pageSize=150}let v=s(M),z=s(""),R=s(-2),S=s(-2),U=s(-2),N=s(-2),F=s(0),x=s([]),f=s(`
    ${_.value?"margin: 20px;":"margin:2px; gap: 8px 5px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const Z=e=>{R.value=e,m(1)},ee=e=>{S.value=e,m(1)},te=e=>{U.value=e,m(1)},ae=e=>{N.value=e,m(1)},le=e=>{z.value=e},ne=e=>{m(1)},ue=()=>{z.value="",R.value=S.value=U.value=N.value=-2,m(1)},se=e=>{k.value.pageSize=e,m(1)},D=s({}),P=async()=>{L.start(),d.value=!0;let e={name:z.value,element:R.value,role:S.value,star:U.value,damage:N.value,page:k.value},{code:g,data:r,msg:A}=await ze(e);if(console.log(g,r,A,"/"),g!=200){Q.error(A),setTimeout(()=>{L.finish()},500),d.value=!1;return}F.value=r.total;const{mhy_base:B,mys_bh3_url:c}=await Re(),w=`${B}${c}`;x.value=r==null?void 0:r.records.map(y=>(y.mhy_URL=w.replace("{id}",y.url),y.wiki_URL=w.replace("{id}",y.url),y.imgSrc=y.icon_url,y)),setTimeout(()=>{L.finish()},500),d.value=!1},m=async e=>{k.value.pageNum=e,x.value=[],F.value=0,P()};return ve(async()=>{D.value=await Ce()}),he(()=>{P()}),(e,g)=>{const r=o("n-skeleton"),A=o("n-gradient-text"),B=o("n-layout-header"),c=o("n-space"),w=o("n-select"),y=o("n-input"),I=o("n-button"),oe=o("n-divider"),ie=o("n-icon"),re=o("n-empty"),ce=o("n-layout-content"),pe=o("n-pagination"),q=o("n-layout");return n(),u(q,null,{default:a(()=>[l(B,{class:"header-top"},{default:a(()=>[O("div",null,[Ue,d.value?(n(),u(r,{key:0,width:150,sharp:!1,size:"medium"})):(n(),u(A,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:a(()=>[E(" \u5171"+$(t(F))+"\u4F4D\uFF0C\u5DF2\u5C55\u793A"+$(t(x).length)+"\u4F4D ",1)]),_:1},8,["gradient"]))]),d.value?(n(),u(r,{key:0,width:300,sharp:!1,size:"medium"})):(n(),u(ke,{key:1}))]),_:1}),l(q,null,{default:a(()=>[l(B,null,{default:a(()=>[d.value?G((n(),u(c,{key:0,style:i(t(f))},{default:a(()=>[(n(!0),C(T,null,V(new Array(8),(p,h)=>(n(),u(r,{key:h,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[J,t(v)]]):G((n(),u(c,{key:1,class:"space-main",style:i(t(f))},{default:a(()=>{var p,h,j,W;return[l(w,{value:t(R),"onUpdate:value":Z,options:(p=D.value)==null?void 0:p.element,style:i(_.value?"width: 200px":"")},null,8,["value","options","style"]),l(w,{value:t(S),"onUpdate:value":ee,options:(h=D.value)==null?void 0:h.role,style:i(_.value?"width: 200px":"")},null,8,["value","options","style"]),l(w,{value:t(U),"onUpdate:value":te,options:(j=D.value)==null?void 0:j.star,style:i(_.value?"width: 200px":"")},null,8,["value","options","style"]),l(w,{value:t(N),"onUpdate:value":ae,options:(W=D.value)==null?void 0:W.damage,style:i(_.value?"width: 200px":"")},null,8,["value","options","style"]),l(y,{value:t(z),onKeyup:fe(ne,["enter"]),"onUpdate:value":le,type:"text",placeholder:"\u641C\u7D22\u89D2\u8272\u540D",style:i(_.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),l(c,{style:i(_.value?"flex:1;":"min-width: 200px;")},{default:a(()=>[l(I,{type:"success",style:{width:"84px"},onClick:g[0]||(g[0]=Fe=>m(1))},{default:a(()=>[E("\u641C\u7D22")]),_:1}),l(I,{type:"warning",onClick:ue},{default:a(()=>[E("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[J,t(v)]]),_.value?we("",!0):(n(),u(oe,{key:2,onClick:g[1]||(g[1]=p=>ge(v)?v.value=!t(v):v=!t(v))},{default:a(()=>[E($(t(v)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),l(ce,{"has-sider":""},{default:a(()=>[d.value?(n(),u(c,{key:0,style:i(t(f))},{default:a(()=>[(n(!0),C(T,null,V(new Array(20),(p,h)=>(n(),C("div",{key:h},[l(r,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!d.value&&t(x).length>0?(n(),u(c,{key:1,style:i(t(f))},{default:a(()=>[(n(!0),C(T,null,V(t(x),(p,h)=>(n(),C("div",{key:h},[l(xe,{src:p.imgSrc,item:p,mhy_url:p.mhy_URL,wiki_url:p.wiki_URL},null,8,["src","item","mhy_url","wiki_url"])]))),128))]),_:1},8,["style"])):(n(),u(c,{key:2,style:i([{width:"100%"},t(f)])},{default:a(()=>[l(re,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:a(()=>[l(ie,null,{default:a(()=>[l(t(Se))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),l(q,{"content-style":"overflow-x: scroll;"},{default:a(()=>[d.value?(n(),u(c,{key:0,style:i(t(f))},{default:a(()=>[l(r,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(n(),u(c,{key:1,style:i(t(f))},{default:a(()=>[l(pe,{page:t(k).pageNum,"page-size":t(k).pageSize,"item-count":t(F),"on-update:page":m,"show-size-picker":"","page-sizes":[10,50,100,150],"on-update:page-size":se},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{qe as default};
