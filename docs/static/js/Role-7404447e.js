import{d as ke,r as o,k as xe,j as De,V as i,W as s,X as l,o as n,Y as a,b as le,e as $,$ as M,Q as t,z as te,v as ae,G as u,c as C,O as P,F as j,a4 as Ce,a0 as ze,a2 as Ue,s as q}from"./@vue-79a6a370.js";import{P as Se}from"./PicCard-80c37839.js";import{c as be,a as Re,g as Ne,q as Fe}from"./index-624f9afd.js";import{U as Ae}from"./UrlSelect-ed6cfb99.js";import{C as Be}from"./CommonIcon-adfe4e72.js";import{g as Le}from"./genshin_select-b4b4235a.js";import{u as $e}from"./vue-router-4297e4b4.js";import{e as qe,u as Ee}from"./naive-ui-fa278d27.js";import{A as Ve}from"./@vicons-062edbc6.js";import"./plugin-vueexport-helper-d7c00f7c.js";import"./lodash-dfafa856.js";import"./date-fns-f8897e89.js";import"./moment-b35f754a.js";import"./mitt-dab1f1cb.js";import"./css-render-72c8a4e0.js";import"./@emotion-e1dc9e92.js";import"./@css-render-ca6fedfc.js";import"./seemly-598f553b.js";import"./lodash-es-86019d98.js";import"./vooks-ed236956.js";import"./evtd-6b3c7fca.js";import"./vueuc-0daedfc4.js";import"./vdirs-943cc171.js";import"./@juggle-28bbed7a.js";import"./treemate-97ea80b9.js";import"./date-fns-tz-38009909.js";import"./async-validator-9e2b95c0.js";const We=le("h2",null,"\u89D2\u8272",-1),yt=ke({__name:"Role",setup(Ie){var Y;const p=o(be()),v=o(!1),E=qe(),ne=Ee(),G=$e();let V=new Date,O=-2,Q=!0,k=o({pageNum:1,pageSize:100});const oe=e=>e instanceof Date&&!isNaN(e.getTime()),ue=e=>e==0?-2:e>3?e-3:e;if((Y=G.query)!=null&&Y.t){let e=G.query.t;/^\d+$/.test(e)?V=new Date(Number(e)):V=oe(new Date(e))?new Date(e):new Date,O=ue(V.getDay()),Q=!1,k.value.pageSize=150}let _=o(Q),z=o(""),U=o(-2),S=o(-2),b=o(-2),R=o(-2),N=o(O),F=o(-2),A=o(0),D=o([]),g=o(`
    ${p.value?"margin: 20px;":"margin:2px; gap: 8px 5px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const se=e=>{S.value=e,r(1)},ie=e=>{b.value=e,r(1)},re=e=>{R.value=e,r(1)},pe=e=>{N.value=e,r(1)},ce=e=>{U.value=e,r(1)},me=e=>{F.value=e,r(1)},de=e=>{z.value=e},ve=e=>{r(1)},ye=()=>{z.value="",S.value=b.value=R.value=N.value=U.value=F.value=-2,r(1)},_e=e=>{k.value.pageSize=e,r(1)},fe=e=>[q("div",{style:{display:"flex",alignItems:"center"}},{default:()=>[e.value>-1?q(Be,{url:Le[e.value].icon_url,size:30},{default:()=>q("")}):void 0,q("span",{},{default:()=>e.label})]})],w=o({}),X=async()=>{E.start(),v.value=!0;let e={name:z.value,element:U.value,area:S.value,book:b.value,weapon:R.value,week:N.value,star:F.value,page:k.value},{code:x,data:c,msg:W}=await Ne(e);if(x!=200){ne.error(W),setTimeout(()=>{E.finish()},500),v.value=!1;return}A.value=c.total;const{mhy_base:B,mhy_url:m,wiki_base:f,wiki_role:I}=await Fe(),L=`${B}${m}`,T=`${f}${I}`;D.value=c==null?void 0:c.records.map(y=>(y.mhy_URL=L.replace("{id}",y.mhy_url),y.wiki_URL=T.replace("{id}",y.wiki_url),y.imgSrc=y.icon_url,y)),setTimeout(()=>{E.finish()},500),v.value=!1},r=async e=>{k.value.pageNum=e,D.value=[],A.value=0,X()};return xe(async()=>{w.value=await Re()}),De(()=>{X()}),(e,x)=>{const c=i("n-skeleton"),W=i("n-gradient-text"),B=i("n-layout-header"),m=i("n-space"),f=i("n-select"),I=i("n-input"),L=i("n-button"),T=i("n-divider"),y=i("n-icon"),he=i("n-empty"),ge=i("n-layout-content"),we=i("n-pagination"),K=i("n-layout");return n(),s(K,null,{default:l(()=>[a(B,{class:"header-top"},{default:l(()=>[le("div",null,[We,v.value?(n(),s(c,{key:0,width:150,sharp:!1,size:"medium"})):(n(),s(W,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:l(()=>[$(" \u5171"+M(t(A))+"\u4F4D\uFF0C\u5DF2\u5C55\u793A"+M(t(D).length)+"\u4F4D ",1)]),_:1},8,["gradient"]))]),v.value?(n(),s(c,{key:0,width:300,sharp:!1,size:"medium"})):(n(),s(Ae,{key:1}))]),_:1}),a(K,null,{default:l(()=>[a(B,null,{default:l(()=>[v.value?te((n(),s(m,{key:0,style:u(t(g))},{default:l(()=>[(n(!0),C(j,null,P(new Array(8),(d,h)=>(n(),s(c,{key:h,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[ae,t(_)]]):te((n(),s(m,{key:1,class:"space-main",style:u(t(g))},{default:l(()=>{var d,h,H,J,Z,ee;return[a(f,{value:t(S),"onUpdate:value":se,options:(d=w.value)==null?void 0:d.area,style:u(p.value?"width: 200px":"")},null,8,["value","options","style"]),a(f,{value:t(F),"onUpdate:value":me,options:(h=w.value)==null?void 0:h.star,style:u(p.value?"width: 200px":"")},null,8,["value","options","style"]),a(f,{value:t(N),"onUpdate:value":pe,options:(H=w.value)==null?void 0:H.week,style:u(p.value?"width: 200px":"")},null,8,["value","options","style"]),a(f,{value:t(R),"onUpdate:value":re,options:(J=w.value)==null?void 0:J.weapon,style:u(p.value?"width: 200px":"")},null,8,["value","options","style"]),a(f,{"render-label":fe,value:t(b),"onUpdate:value":ie,options:(Z=w.value)==null?void 0:Z.book,style:u(p.value?"width: 200px":"")},null,8,["value","options","style"]),a(f,{value:t(U),"onUpdate:value":ce,options:(ee=w.value)==null?void 0:ee.element,style:u(p.value?"width: 200px":"")},null,8,["value","options","style"]),a(I,{value:t(z),onKeyup:Ce(ve,["enter"]),"onUpdate:value":de,type:"text",placeholder:"\u641C\u7D22\u89D2\u8272\u540D",style:u(p.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),a(m,{style:u(p.value?"flex:1;":"min-width: 200px;")},{default:l(()=>[a(L,{type:"success",style:{width:"84px"},onClick:x[0]||(x[0]=Te=>r(1))},{default:l(()=>[$("\u641C\u7D22")]),_:1}),a(L,{type:"warning",onClick:ye},{default:l(()=>[$("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[ae,t(_)]]),p.value?Ue("",!0):(n(),s(T,{key:2,onClick:x[1]||(x[1]=d=>ze(_)?_.value=!t(_):_=!t(_))},{default:l(()=>[$(M(t(_)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),a(ge,{"has-sider":""},{default:l(()=>[v.value?(n(),s(m,{key:0,style:u(t(g))},{default:l(()=>[(n(!0),C(j,null,P(new Array(20),(d,h)=>(n(),C("div",{key:h},[a(c,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!v.value&&t(D).length>0?(n(),s(m,{key:1,style:u(t(g))},{default:l(()=>[(n(!0),C(j,null,P(t(D),(d,h)=>(n(),C("div",{key:h},[a(Se,{src:d.imgSrc,item:d,mhy_url:d.mhy_URL,wiki_url:d.wiki_URL},null,8,["src","item","mhy_url","wiki_url"])]))),128))]),_:1},8,["style"])):(n(),s(m,{key:2,style:u([{width:"100%"},t(g)])},{default:l(()=>[a(he,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:l(()=>[a(y,null,{default:l(()=>[a(t(Ve))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),a(K,{"content-style":"overflow-x: scroll;"},{default:l(()=>[v.value?(n(),s(m,{key:0,style:u(t(g))},{default:l(()=>[a(c,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(n(),s(m,{key:1,style:u(t(g))},{default:l(()=>[a(we,{page:t(k).pageNum,"page-size":t(k).pageSize,"item-count":t(A),"on-update:page":r,"show-size-picker":"","page-sizes":[10,50,100,150],"on-update:page-size":_e},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{yt as default};
