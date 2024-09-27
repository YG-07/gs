import{d as ke,r as u,C as xe,a as De,u as Ce,D as ze,E as Ue,b as i,c as o,w as l,o as n,e as a,f as le,G as q,t as M,h as t,g as te,v as ae,n as s,k as C,x as P,y as G,H as Se,l as be,A as Re,m as E}from"./index.401e27f2.js";import{U as Ne,P as Ae}from"./UrlSelect.99668f62.js";import{c as Fe,a as Be,g as Le,q as qe}from"./index.d639e327.js";import{C as Ee}from"./CommonIcon.59c19f89.js";import{g as $e}from"./genshin_select.6ad335e3.js";import{A as Ve}from"./Aperture.bc45313a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const Ie=le("h2",null,"\u89D2\u8272",-1),Oe=ke({__name:"Role",setup(Te){var Q;const c=u(Fe()),m=u(!1),$=xe(),ne=De(),j=Ce();let V=new Date,H=-2,J=!0,k=u({pageNum:1,pageSize:100});const ue=e=>e instanceof Date&&!isNaN(e.getTime()),se=e=>e==0?-2:e>3?e-3:e;if((Q=j.query)!=null&&Q.t){let e=j.query.t;/^\d+$/.test(e)?V=new Date(Number(e)):V=ue(new Date(e))?new Date(e):new Date,H=se(V.getDay()),J=!1,k.value.pageSize=150}let _=u(J),z=u(""),U=u(-2),S=u(-2),b=u(-2),R=u(-2),N=u(H),A=u(-2),F=u(0),D=u([]),g=u(`
    ${c.value?"margin: 20px;":"margin:2px; gap: 8px 5px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const oe=e=>{S.value=e,r(1)},ie=e=>{b.value=e,r(1)},re=e=>{R.value=e,r(1)},ce=e=>{N.value=e,r(1)},pe=e=>{U.value=e,r(1)},de=e=>{A.value=e,r(1)},ve=e=>{z.value=e},me=e=>{r(1)},ye=()=>{z.value="",S.value=b.value=R.value=N.value=U.value=A.value=-2,r(1)},_e=e=>{k.value.pageSize=e,r(1)},he=e=>[E("div",{style:{display:"flex",alignItems:"center"}},{default:()=>[e.value>-1?E(Ee,{url:$e[e.value].icon_url,size:30},{default:()=>E("")}):void 0,E("span",{},{default:()=>e.label})]})],w=u({}),O=async()=>{$.start(),m.value=!0;let e={name:z.value,element:U.value,area:S.value,book:b.value,weapon:R.value,week:N.value,star:A.value,page:k.value},{code:x,data:p,msg:I}=await Le(e);if(x!=200){ne.error(I),setTimeout(()=>{$.finish()},500),m.value=!1;return}F.value=p.total;const{mhy_base:B,mhy_url:d,wiki_base:h,wiki_role:T}=await qe(),L=`${B}${d}`,W=`${h}${T}`;D.value=p==null?void 0:p.records.map(y=>(y.mhy_URL=L.replace("{id}",y.mhy_url),y.wiki_URL=W.replace("{id}",y.wiki_url),y.imgSrc=y.icon_url,y)),setTimeout(()=>{$.finish()},500),m.value=!1},r=async e=>{k.value.pageNum=e,D.value=[],F.value=0,O()};return ze(async()=>{w.value=await Be()}),Ue(()=>{O()}),(e,x)=>{const p=i("n-skeleton"),I=i("n-gradient-text"),B=i("n-layout-header"),d=i("n-space"),h=i("n-select"),T=i("n-input"),L=i("n-button"),W=i("n-divider"),y=i("n-icon"),fe=i("n-empty"),ge=i("n-layout-content"),we=i("n-pagination"),K=i("n-layout");return n(),o(K,null,{default:l(()=>[a(B,{class:"header-top"},{default:l(()=>[le("div",null,[Ie,m.value?(n(),o(p,{key:0,width:150,sharp:!1,size:"medium"})):(n(),o(I,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:l(()=>[q(" \u5171"+M(t(F))+"\u4F4D\uFF0C\u5DF2\u5C55\u793A"+M(t(D).length)+"\u4F4D ",1)]),_:1},8,["gradient"]))]),m.value?(n(),o(p,{key:0,width:300,sharp:!1,size:"medium"})):(n(),o(Ne,{key:1}))]),_:1}),a(K,null,{default:l(()=>[a(B,null,{default:l(()=>[m.value?te((n(),o(d,{key:0,style:s(t(g))},{default:l(()=>[(n(!0),C(G,null,P(new Array(8),(v,f)=>(n(),o(p,{key:f,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[ae,t(_)]]):te((n(),o(d,{key:1,class:"space-main",style:s(t(g))},{default:l(()=>{var v,f,X,Y,Z,ee;return[a(h,{value:t(S),"onUpdate:value":oe,options:(v=w.value)==null?void 0:v.area,style:s(c.value?"width: 200px":"")},null,8,["value","options","style"]),a(h,{value:t(A),"onUpdate:value":de,options:(f=w.value)==null?void 0:f.star,style:s(c.value?"width: 200px":"")},null,8,["value","options","style"]),a(h,{value:t(N),"onUpdate:value":ce,options:(X=w.value)==null?void 0:X.week,style:s(c.value?"width: 200px":"")},null,8,["value","options","style"]),a(h,{value:t(R),"onUpdate:value":re,options:(Y=w.value)==null?void 0:Y.weapon,style:s(c.value?"width: 200px":"")},null,8,["value","options","style"]),a(h,{"render-label":he,value:t(b),"onUpdate:value":ie,options:(Z=w.value)==null?void 0:Z.book,style:s(c.value?"width: 200px":"")},null,8,["value","options","style"]),a(h,{value:t(U),"onUpdate:value":pe,options:(ee=w.value)==null?void 0:ee.element,style:s(c.value?"width: 200px":"")},null,8,["value","options","style"]),a(T,{value:t(z),onKeyup:Se(me,["enter"]),"onUpdate:value":ve,type:"text",placeholder:"\u641C\u7D22\u89D2\u8272\u540D",style:s(c.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),a(d,{style:s(c.value?"flex:1;":"min-width: 200px;")},{default:l(()=>[a(L,{type:"success",style:{width:"84px"},onClick:x[0]||(x[0]=We=>r(1))},{default:l(()=>[q("\u641C\u7D22")]),_:1}),a(L,{type:"warning",onClick:ye},{default:l(()=>[q("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[ae,t(_)]]),c.value?Re("",!0):(n(),o(W,{key:2,onClick:x[1]||(x[1]=v=>be(_)?_.value=!t(_):_=!t(_))},{default:l(()=>[q(M(t(_)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),a(ge,{"has-sider":""},{default:l(()=>[m.value?(n(),o(d,{key:0,style:s(t(g))},{default:l(()=>[(n(!0),C(G,null,P(new Array(20),(v,f)=>(n(),C("div",{key:f},[a(p,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!m.value&&t(D).length>0?(n(),o(d,{key:1,style:s(t(g))},{default:l(()=>[(n(!0),C(G,null,P(t(D),(v,f)=>(n(),C("div",{key:f},[a(Ae,{src:v.imgSrc,item:v,mhy_url:v.mhy_URL,wiki_url:v.wiki_URL},null,8,["src","item","mhy_url","wiki_url"])]))),128))]),_:1},8,["style"])):(n(),o(d,{key:2,style:s([{width:"100%"},t(g)])},{default:l(()=>[a(fe,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:l(()=>[a(y,null,{default:l(()=>[a(t(Ve))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),a(K,{"content-style":"overflow-x: scroll;"},{default:l(()=>[m.value?(n(),o(d,{key:0,style:s(t(g))},{default:l(()=>[a(p,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(n(),o(d,{key:1,style:s(t(g))},{default:l(()=>[a(we,{page:t(k).pageNum,"page-size":t(k).pageSize,"item-count":t(F),"on-update:page":r,"show-size-picker":"","page-sizes":[10,50,100,150],"on-update:page-size":_e},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{Oe as default};
