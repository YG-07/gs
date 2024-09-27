import{d as me,r as u,C as ve,a as _e,D as ye,E as ge,b as s,c as i,w as a,o as n,e as l,f as O,G as I,t as q,h as e,g as G,v as P,n as o,k as E,x as V,y as K,H as fe,l as he,A as we,m as g,F as Ce}from"./index.401e27f2.js";import{W as xe}from"./WavesCard.6799ca8a.js";import{c as ke,z as De,A as Ee,q as ze}from"./index.d639e327.js";import{C as J}from"./CommonIcon.59c19f89.js";import{w as Fe}from"./waves_select_item.d00489ae.js";import{A as Se}from"./Aperture.bc45313a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const Ae=[{id:0,name:"\u6C14\u52A8",icon_url:"img/\u6C14\u52A8.png"},{id:1,name:"\u5BFC\u7535",icon_url:"img/\u5BFC\u7535.png"},{id:2,name:"\u51B7\u51DD",icon_url:"img/\u51B7\u51DD.png"},{id:3,name:"\u70ED\u7194",icon_url:"img/\u70ED\u7194.png"},{id:4,name:"\u884D\u5C04",icon_url:"img/\u884D\u5C04.png"},{id:5,name:"\u6E6E\u706D",icon_url:"img/\u6E6E\u706D.png"}],be=O("h2",null,"\u89D2\u8272",-1),Ve=me({__name:"Role",setup(Be){const c=u(ke());let L=u(0),U=u(0);c.value?(L.value=117,U.value=156):(L.value=45,U.value=76);const v=u(!1),R=ve(),Q=_e();let X=!0,x=u({pageNum:1,pageSize:100}),_=u(X),z=u(""),F=u(-2),S=u(-2),A=u(-2),b=u(-2),B=u(0),k=u([]),f=u(`
    ${c.value?"margin: 20px;":"margin:2px; gap: 8px 5px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const Y=t=>{S.value=t,p(1)},Z=t=>{A.value=t,p(1)},ee=t=>{F.value=t,p(1)},te=t=>{b.value=t,p(1)},ae=t=>{z.value=t},le=t=>{p(1)},ne=()=>{z.value="",A.value=S.value=F.value=b.value=-2,p(1)},ue=t=>{x.value.pageSize=t,p(1)},se=t=>[g("div",{style:{display:"flex",alignItems:"center"}},{default:()=>[t.value>-1?g(J,{url:Fe[t.value].icon_url,size:30},{default:()=>g("")}):void 0,g("span",{},{default:()=>t.label})]})],oe=t=>[g("div",{style:{display:"flex",alignItems:"center"}},{default:()=>[t.value>-1?g(J,{url:Ce+Ae[t.value].icon_url,size:30},{default:()=>g("")}):void 0,g("span",{},{default:()=>t.label})]})],D=u({}),M=async()=>{R.start(),v.value=!0;let t={name:z.value,element:F.value,item:S.value,weapon:A.value,star:b.value,page:x.value},{code:w,data:d,msg:W}=await Ee(t);if(w!=200){Q.error(W),setTimeout(()=>{R.finish()},500),v.value=!1;return}B.value=d.total;const{waves_base:N,waves_url:r}=await ze(),C=`${N}${r}`;k.value=d==null?void 0:d.records.map(h=>(h.surl=C.replace("{id}",h.url),h.imgSrc=h.icon_url,h)),setTimeout(()=>{R.finish()},500),v.value=!1},p=async t=>{x.value.pageNum=t,k.value=[],B.value=0,M()};return ye(async()=>{D.value=await De()}),ge(()=>{M()}),(t,w)=>{const d=s("n-skeleton"),W=s("n-gradient-text"),N=s("n-layout-header"),r=s("n-space"),C=s("n-select"),h=s("n-input"),T=s("n-button"),ie=s("n-divider"),re=s("n-icon"),ce=s("n-empty"),pe=s("n-layout-content"),de=s("n-pagination"),$=s("n-layout");return n(),i($,null,{default:a(()=>[l(N,{class:"header-top"},{default:a(()=>[O("div",null,[be,v.value?(n(),i(d,{key:0,width:150,sharp:!1,size:"medium"})):(n(),i(W,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:a(()=>[I(" \u5171"+q(e(B))+"\u4F4D\uFF0C\u5DF2\u5C55\u793A"+q(e(k).length)+"\u4F4D ",1)]),_:1},8,["gradient"]))])]),_:1}),l($,null,{default:a(()=>[l(N,null,{default:a(()=>[v.value?G((n(),i(r,{key:0,style:o(e(f))},{default:a(()=>[(n(!0),E(K,null,V(new Array(8),(m,y)=>(n(),i(d,{key:y,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[P,e(_)]]):G((n(),i(r,{key:1,class:"space-main",style:o(e(f))},{default:a(()=>{var m,y,j,H;return[l(C,{value:e(b),"onUpdate:value":te,options:(m=D.value)==null?void 0:m.star,style:o(c.value?"width: 200px":"")},null,8,["value","options","style"]),l(C,{"render-label":oe,value:e(F),"onUpdate:value":ee,options:(y=D.value)==null?void 0:y.element,style:o(c.value?"width: 200px":"")},null,8,["value","options","style"]),l(C,{value:e(A),"onUpdate:value":Z,options:(j=D.value)==null?void 0:j.weapon,style:o(c.value?"width: 200px":"")},null,8,["value","options","style"]),l(C,{"render-label":se,value:e(S),"onUpdate:value":Y,options:(H=D.value)==null?void 0:H.item,style:o(c.value?"width: 200px":"")},null,8,["value","options","style"]),l(h,{value:e(z),onKeyup:fe(le,["enter"]),"onUpdate:value":ae,type:"text",placeholder:"\u641C\u7D22\u89D2\u8272\u540D",style:o(c.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),l(r,{style:o(c.value?"flex:1;":"min-width: 200px;")},{default:a(()=>[l(T,{type:"success",style:{width:"84px"},onClick:w[0]||(w[0]=Ne=>p(1))},{default:a(()=>[I("\u641C\u7D22")]),_:1}),l(T,{type:"warning",onClick:ne},{default:a(()=>[I("\u91CD\u7F6E\u6761\u4EF6")]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[P,e(_)]]),c.value?we("",!0):(n(),i(ie,{key:2,onClick:w[1]||(w[1]=m=>he(_)?_.value=!e(_):_=!e(_))},{default:a(()=>[I(q(e(_)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),l(pe,{"has-sider":""},{default:a(()=>[v.value?(n(),i(r,{key:0,style:o(e(f))},{default:a(()=>[(n(!0),E(K,null,V(new Array(20),(m,y)=>(n(),E("div",{key:y},[l(d,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!v.value&&e(k).length>0?(n(),i(r,{key:1,style:o(e(f))},{default:a(()=>[(n(!0),E(K,null,V(e(k),(m,y)=>(n(),E("div",{key:y},[l(xe,{width:e(L),height:e(U),src:m.imgSrc,item:m,url:m.surl,objectFit:"contain"},null,8,["width","height","src","item","url"])]))),128))]),_:1},8,["style"])):(n(),i(r,{key:2,style:o([{width:"100%"},e(f)])},{default:a(()=>[l(ce,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:a(()=>[l(re,null,{default:a(()=>[l(e(Se))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),l($,{"content-style":"overflow-x: scroll;"},{default:a(()=>[v.value?(n(),i(r,{key:0,style:o(e(f))},{default:a(()=>[l(d,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(n(),i(r,{key:1,style:o(e(f))},{default:a(()=>[l(de,{page:e(x).pageNum,"page-size":e(x).pageSize,"item-count":e(B),"on-update:page":p,"show-size-picker":"","page-sizes":[10,50,100,150],"on-update:page-size":ue},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{Ve as default};
