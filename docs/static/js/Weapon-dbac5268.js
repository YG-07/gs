import{d as _e,r as u,k as ve,j as fe,V as s,W as o,X as a,o as l,Y as n,b as Z,e as L,$ as T,Q as t,z as H,v as J,G as i,c as D,O as K,F as M,a4 as he,a0 as ge,a2 as we,s as B}from"./@vue-79a6a370.js";import{U as ke,P as xe}from"./UrlSelect-808ac170.js";import{c as Ce,a as De,b as ze,q as Se}from"./index-5cc2c51c.js";import{C as Ue}from"./CommonIcon-adfe4e72.js";import{a as Ne}from"./genshin_select-2e867e4f.js";import{u as be}from"./vue-router-4297e4b4.js";import{A as Ae}from"./@vicons-062edbc6.js";import{e as We,u as Fe}from"./naive-ui-fa278d27.js";import"./plugin-vueexport-helper-d7c00f7c.js";import"./lodash-dfafa856.js";import"./date-fns-f8897e89.js";import"./moment-b35f754a.js";import"./mitt-dab1f1cb.js";import"./css-render-72c8a4e0.js";import"./@emotion-e1dc9e92.js";import"./@css-render-ca6fedfc.js";import"./seemly-598f553b.js";import"./lodash-es-86019d98.js";import"./vooks-ed236956.js";import"./evtd-6b3c7fca.js";import"./vueuc-0daedfc4.js";import"./vdirs-943cc171.js";import"./@juggle-28bbed7a.js";import"./treemate-97ea80b9.js";import"./date-fns-tz-38009909.js";import"./async-validator-9e2b95c0.js";const Le=Z("h2",null,"\u6B66\u5668",-1),it=_e({__name:"Weapon",setup(Be){var Q;const _=u(Ce()),m=u(!1),$=We(),ee=Fe(),P=be();let q=new Date,j=-2,G=!0,g=u({pageNum:1,pageSize:100});const te=e=>e instanceof Date&&!isNaN(e.getTime()),ae=e=>(console.log(e,"/"),e==0?-2:e>3?e-3:e);if((Q=P.query)!=null&&Q.t){let e=P.query.t;/^\d+$/.test(e)?q=new Date(Number(e)):q=te(new Date(e))?new Date(e):new Date,j=ae(q.getDay()),G=!1,g.value.pageSize=300}let v=u(G),z=u(""),S=u(-2),U=u(-2),N=u(j),b=u(-2),A=u(0),x=u([]),h=u(`
    ${_.value?"margin: 20px;":"margin:2px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const ne=e=>{U.value=e,d(1)},le=e=>{S.value=e,d(1)},oe=e=>{console.log(e,"va"),N.value=e,d(1)},ue=e=>{b.value=e,d(1)},se=e=>{z.value=e},ie=e=>{d(1)},re=()=>{z.value="",S.value=U.value=N.value=b.value=-2,d(1)},pe=e=>{g.value.pageSize=e,d(1)},ce=e=>[B("div",{style:{display:"flex",alignItems:"center"}},{default:()=>[e.value>-1?B(Ue,{url:Ne[e.value].icon_url,size:30},{default:()=>B("")}):void 0,B("span",{},{default:()=>e.label})]})],C=u({}),O=async()=>{$.start(),m.value=!0;let e={name:z.value,item:U.value,weapon:S.value,week:N.value,star:b.value,page:g.value},{code:w,data:r,msg:E}=await ze(e);if(w!=200){ee.error(E),setTimeout(()=>{$.finish()},500),m.value=!1;return}A.value=r.total;const{mhy_base:W,mhy_url:p,wiki_base:k,wiki_weapon:R}=await Se(),F=`${W}${p}`,I=`${k}${R}`;x.value=r==null?void 0:r.records.map(y=>(y.mhy_URL=F.replace("{id}",y.mhy_url),y.wiki_URL=I.replace("{id}",y.wiki_url),y.imgSrc=y.icon_url,y)),setTimeout(()=>{$.finish()},500),m.value=!1},d=async e=>{g.value.pageNum=e,x.value=[],A.value=0,O()};return ve(async()=>{C.value=await De()}),fe(()=>{O()}),(e,w)=>{const r=s("n-skeleton"),E=s("n-gradient-text"),W=s("n-layout-header"),p=s("n-space"),k=s("n-select"),R=s("n-input"),F=s("n-button"),I=s("n-divider"),y=s("n-icon"),me=s("n-empty"),de=s("n-layout-content"),ye=s("n-pagination"),V=s("n-layout");return l(),o(V,null,{default:a(()=>[n(W,{class:"header-top"},{default:a(()=>[Z("div",null,[Le,m.value?(l(),o(r,{key:0,width:150,sharp:!1,size:"medium"})):(l(),o(E,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:a(()=>[L(" \u5171"+T(t(A))+"\u4E2A\uFF0C\u5DF2\u5C55\u793A"+T(t(x).length)+"\u4E2A ",1)]),_:1},8,["gradient"]))]),m.value?(l(),o(r,{key:0,width:300,sharp:!1,size:"medium"})):(l(),o(ke,{key:1}))]),_:1}),n(V,null,{default:a(()=>[n(W,null,{default:a(()=>[m.value?H((l(),o(p,{key:0,style:i(t(h))},{default:a(()=>[(l(!0),D(M,null,K(new Array(6),(c,f)=>(l(),o(r,{key:f,width:260,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[J,t(v)]]):H((l(),o(p,{key:1,class:"space-main",style:i(t(h))},{default:a(()=>{var c,f,X,Y;return[n(k,{value:t(b),"onUpdate:value":ue,options:(c=C.value)==null?void 0:c.star,style:i(_.value?"width: 200px":"")},null,8,["value","options","style"]),n(k,{value:t(N),"onUpdate:value":oe,options:(f=C.value)==null?void 0:f.week,style:i(_.value?"width: 200px":"")},null,8,["value","options","style"]),n(k,{value:t(S),"onUpdate:value":le,options:(X=C.value)==null?void 0:X.weapon,style:i(_.value?"width: 200px":"")},null,8,["value","options","style"]),n(k,{"render-label":ce,value:t(U),"onUpdate:value":ne,options:(Y=C.value)==null?void 0:Y.item,style:i(_.value?"width: 200px":"")},null,8,["value","options","style"]),n(R,{value:t(z),onKeyup:he(ie,["enter"]),"onUpdate:value":se,type:"text",placeholder:"\u641C\u7D22\u6B66\u5668\u540D",style:i(_.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),n(p,{style:i(_.value?"flex:1;":"min-width: 200px;")},{default:a(()=>[n(F,{type:"success",style:{width:"84px"},onClick:w[0]||(w[0]=$e=>d(1))},{default:a(()=>[L("\u641C\u7D22")]),_:1}),n(F,{type:"warning",onClick:re},{default:a(()=>[L("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[J,t(v)]]),_.value?we("",!0):(l(),o(I,{key:2,onClick:w[1]||(w[1]=c=>ge(v)?v.value=!t(v):v=!t(v))},{default:a(()=>[L(T(t(v)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),n(de,{"has-sider":""},{default:a(()=>[m.value?(l(),o(p,{key:0,style:i(t(h))},{default:a(()=>[(l(!0),D(M,null,K(new Array(20),(c,f)=>(l(),D("div",{key:f},[n(r,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!m.value&&t(x).length>0?(l(),o(p,{key:1,style:i(t(h))},{default:a(()=>[(l(!0),D(M,null,K(t(x),(c,f)=>(l(),D("div",{key:f},[n(xe,{src:c.imgSrc,item:c,mhy_url:c.mhy_URL,wiki_url:c.wiki_URL},null,8,["src","item","mhy_url","wiki_url"])]))),128))]),_:1},8,["style"])):(l(),o(p,{key:2,style:i([{width:"100%"},t(h)])},{default:a(()=>[n(me,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:a(()=>[n(y,null,{default:a(()=>[n(t(Ae))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),n(V,{"content-style":"overflow-x: scroll;"},{default:a(()=>[m.value?(l(),o(p,{key:0,style:i(t(h))},{default:a(()=>[n(r,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(l(),o(p,{key:1,style:i(t(h))},{default:a(()=>[n(ye,{page:t(g).pageNum,"page-size":t(g).pageSize,"item-count":t(A),"on-update:page":d,"show-size-picker":"","page-sizes":[30,50,100,150,200,300],"on-update:page-size":pe},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{it as default};
