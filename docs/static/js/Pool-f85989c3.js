import{d as Ee,r as v,n as Ae,j as ze,V as f,W as d,X as o,o as e,Y as u,b as P,e as M,$ as D,Q as l,a2 as ae,z as R,v as H,G as m,c as n,O as x,F as T,a4 as Be,a0 as Pe,s as B}from"./@vue-79a6a370.js";import{c as Le,p as ie,i as re,j as Me,t as Se,k as Ne,s as te,D as Ie}from"./index-9bc1ccfc.js";import{e as je,u as Re,f as He,g as Q}from"./naive-ui-fa278d27.js";import{A as me}from"./@vicons-062edbc6.js";import"./lodash-4ca19532.js";import"./date-fns-f8897e89.js";import"./moment-b35f754a.js";import"./mitt-dab1f1cb.js";import"./css-render-72c8a4e0.js";import"./@emotion-e1dc9e92.js";import"./@css-render-ca6fedfc.js";import"./seemly-598f553b.js";import"./lodash-es-86019d98.js";import"./vooks-ed236956.js";import"./evtd-6b3c7fca.js";import"./vueuc-0daedfc4.js";import"./vdirs-943cc171.js";import"./@juggle-28bbed7a.js";import"./treemate-97ea80b9.js";import"./date-fns-tz-38009909.js";import"./async-validator-9e2b95c0.js";const Ve=P("h2",null,"\u89D2\u8272\u6B66\u5668\u5361\u6C60\u4FE1\u606F",-1),Ke={key:0,style:{width:"4rem"}},Ue={key:1},Oe={key:0,style:{display:"flex"}},Ye={key:1},qe={key:2},Ge={key:0,style:{display:"flex"}},Qe={key:1},We=["innerHTML","onClick"],Xe=["innerHTML","onClick"],Je={key:5},Ze=["href"],et={key:1},tt={key:6},lt={key:0},nt={key:0},ot={key:1},ut=["innerHTML"],st=["innerHTML","onClick"],at={key:3},At=Ee({__name:"Pool",setup(it){const $=v(Le()),h=v(!1),le=je(),ve=Re(),pe=He(),E=v(!0);$.value?ie:ie.splice(2,1);const ce=v(ie);$.value?re:re.splice(2,1);const _e=v(re),fe=v(Me);let V=v([]),K=v("");const ge=t=>{V.value=t},he=t=>{K.value=t};let F=v(!0),W=v(""),X=v(-2),ke=v(Se);const Ce=t=>{X.value=t,N(1)},we=t=>{W.value=t},be=t=>{N(1)};let U=v({pageNum:1,pageSize:200}),J=v(0),O=v([]),S=v([]),C=v(`
    ${$.value?"margin: 20px;":"margin:2px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const xe=[t=>t.type!=2,t=>t.type!=1,t=>t.type!=2&&t.star!=4,t=>t.type!=2&&t.star!=5];let ne=Ae(()=>{if(S.value.length<1)return[];let t=[...S.value];for(let c=0;c<V.value.length;++c)t=t.filter(a=>xe[V.value[c]](a));if(K.value){let c=K.value;t=t.filter(a=>a.name.includes(c)||a.version==c||a.count==c)}return console.log(t,"tmpTable1"),t});const Te=()=>{X.value=-2,W.value="",N(1)},$e=()=>{V.value=[],K.value=""},Fe=t=>{U.value.pageSize=t,N(1)},ye=(t,c=!1)=>{let a=`${t.version}\u7248\u672C `+(c?`${t.version_name||""} ${t.name||""}`:`${t.name} ${t.up_5||""}`);pe.success({title:"\u5361\u6C60\u4FE1\u606F",content:()=>[B("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},{default:()=>[B("a",{href:t.pool_img,target:"_blank"},{default:()=>`\u5361\u6C60\u56FE\u7247: ${a}`}),B(Q,{src:t.pool_img,imgProps:{style:{width:"100%"}},style:{marginTop:"10px",width:"390px",aspectRatio:2},objectFit:"contain"},{default:()=>B("")})]})],positiveText:"\u786E\u5B9A",onPositiveClick:()=>{}})},De=t=>{pe.success({title:"\u7248\u672C\u4FE1\u606F",content:()=>[B("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},{default:()=>[B("a",{href:t.version_img,target:"_blank"},{default:()=>`\u7248\u672C\u56FE\u7247: ${t.version_name}  ${t.version_remark?`(${t.version_remark})`:""}`}),B(Q,{src:t.version_img,imgProps:{style:{width:"100%"}},style:{marginTop:"10px",width:"390px",aspectRatio:2},objectFit:"contain"},{default:()=>B("")})]})],positiveText:"\u786E\u5B9A",onPositiveClick:()=>{}})},Z=(t,c)=>{if(!t||!c)return"\u65E0";let a=new Date(c).getTime(),Y=new Date(t).getTime();return c=="now"&&(a=new Date().getTime()),Math.ceil((a-Y)/Ie)},oe=async()=>{le.start(),h.value=!0;let t={search:W.value,type:X.value,page:U.value},{code:c,data:a,msg:Y}=await Ne(t);if(c!=200){ve.error(Y),setTimeout(()=>{le.finish()},500),h.value=!1;return}if(J.value=a.total,console.log(a==null?void 0:a.records,"??"),O.value=a==null?void 0:a.records.map(i=>{i.pool_stage=`\u7B2C${i.pool_index}\u6C60${i.stage}\u671F`;let y=[],A=[],z=[],b=[];return i.up5[1].map(g=>{var w,r;y.push(g.icon_url),z.push(Z((w=g.last_up)==null?void 0:w.pool_start,(r=g.now_up)==null?void 0:r.pool_start))}),i.up5_day2last=z.join(" "),i.up5_imgs=y,i.up4_imgs=i.up4[1].map(g=>{var w,r;A.push(g.icon_url),b.push(Z((w=g.last_up)==null?void 0:w.pool_start,(r=g.now_up)==null?void 0:r.pool_start))}),i.up4_day2last=b.join(" "),i.up4_imgs=A,i.version_info=`<font color='#18a058'>${i.version_name}</font><div>(${i.version_start} ~ ${i.version_end})</div>`,i.pool_info=`<font color='#18a058'>${i.name}</font><div>(${i.pool_start} ~ ${i.pool_end})</div>`,i.up5_count=i.up5[0],i.up4_count=i.up4[0],i}),S.value.length==0){let i=te.get("genshinPoolCalcTable");if(i)S.value=i;else{let y={...a.roleCalc,...a.weaponCalc};console.log(y,"calcRecords");let A={},z=Object.keys(y),b=Object.values(y),g=[],w={};for(let r=0;r<a.records.length;++r){let _=a.records[r],L=`${_.version}_${_.stage}_${_.type}`;A[L]||(A[L]=_.pool_img)}for(let r=0;r<b.length;++r){if(w=b[r],w.count==0||!w.now_up)continue;let{now_up:_,last_up:L,icon_url:ee,star:I,type:q,count:G}=w;`${_.version}${_.stage}${q}`;let s={id:_.id,name:z[r],item_img:ee,day2last:Z(L.pool_start,_.pool_start),day2now:Z(_.pool_start,"now"),count:G,star:I,type:q,version:_.version,pool_start:_.pool_start,itemInfo:`<font color='${I>4?"#fcb040":"#8a2be2"}'>${z[r]}</font><div>${I}\u661F${q>1?"\u6B66\u5668":"\u89D2\u8272"}</div>`,pool_info:`<font color='#18a058'>${_.name}</font><div>(${_.pool_start} ~ ${_.pool_end})</div>`,pool_img:_.pool_img,version_name:_.name};g.push(s)}g.sort((r,_)=>r.day2now<=_.day2now?1:-1),S.value=[...g],te.set("genshinPoolCalcTable",S.value.map(r=>({name:r.name,star:r.star,type:r.type,version:r.version,pool_start:r.pool_start,count:r.count})))}}setTimeout(()=>{le.finish()},500),h.value=!1},de=()=>{te.remove("genshinPool"),te.remove("genshinPoolCalcTable"),oe();try{window.location.reload()}catch{}},N=async t=>{U.value.pageNum=t,O.value=[],J.value=0,oe()};return ze(async()=>{oe()}),(t,c)=>{const a=f("n-skeleton"),Y=f("n-gradient-text"),i=f("n-layout-header"),y=f("n-space"),A=f("n-select"),z=f("n-input"),b=f("n-button"),g=f("n-radio-button"),w=f("n-radio-group"),r=f("n-divider"),_=f("n-table"),L=f("n-icon"),ee=f("n-empty"),I=f("n-layout-content"),q=f("n-pagination"),G=f("n-layout");return e(),d(G,null,{default:o(()=>[u(i,{class:"header-top"},{default:o(()=>[P("div",null,[Ve,h.value?(e(),d(a,{key:0,width:150,sharp:!1,size:"medium"})):(e(),d(Y,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:o(()=>[M(" \u5171"+D(l(J))+"\u4E2A\uFF0C\u5DF2\u5C55\u793A"+D(E.value?l(O).length:l(ne).length)+"\u4E2A ",1)]),_:1},8,["gradient"]))]),h.value?(e(),d(a,{key:0,width:300,sharp:!1,size:"medium"})):ae("",!0)]),_:1}),u(G,null,{default:o(()=>[u(i,null,{default:o(()=>[h.value?R((e(),d(y,{key:0,style:m(l(C))},{default:o(()=>[(e(!0),n(T,null,x(new Array(8),(s,k)=>(e(),d(a,{key:k,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[H,l(F)]]):!h.value&&E.value?R((e(),d(y,{key:1,class:"space-main",style:m(l(C))},{default:o(()=>[u(A,{value:l(X),"onUpdate:value":Ce,options:l(ke),style:m($.value?"width: 200px":"min-width: 200px;")},null,8,["value","options","style"]),u(z,{value:l(W),onKeyup:Be(be,["enter"]),"onUpdate:value":we,type:"text",placeholder:"\u641C\u7D22\u7269\u54C1\u540D\u79F0/\u7248\u672C/\u5361\u6C60\u540D",style:m($.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),u(y,{style:m($.value?"flex:1;":"min-width: 200px;")},{default:o(()=>[u(b,{type:"success",style:{width:"84px"},onClick:c[0]||(c[0]=s=>N(1))},{default:o(()=>[M("\u641C\u7D22")]),_:1}),u(b,{type:"warning",onClick:Te},{default:o(()=>[M("\u91CD\u7F6E\u6761\u4EF6")]),_:1}),u(b,{type:"info",style:{width:"84px"},onClick:de},{default:o(()=>[M("\u5237\u65B0\u7F13\u5B58")]),_:1})]),_:1},8,["style"])]),_:1},8,["style"])),[[H,l(F)]]):!h.value&&!E.value?R((e(),d(y,{key:2,class:"space-main",style:m(l(C))},{default:o(()=>[u(A,{placeholder:"\u9009\u62E9\u8FC7\u6EE4\u7684\u7269\u54C1\u7C7B\u578B",multiple:"","max-tag-count":"responsive",value:l(V),"onUpdate:value":ge,options:fe.value,style:m($.value?"width: 200px":"min-width: 200px;")},null,8,["value","options","style"]),u(z,{value:l(K),"onUpdate:value":he,type:"text",placeholder:"\u641C\u7D22\u540D\u79F0/\u7248\u672C\u53F7/up\u6B21\u6570",style:m($.value?"width: 200px":"min-width: 200px;")},null,8,["value","style"]),u(y,{style:m($.value?"flex:1;":"min-width: 200px;")},{default:o(()=>[u(b,{type:"warning",onClick:$e},{default:o(()=>[M("\u91CD\u7F6E\u6761\u4EF6")]),_:1}),u(b,{type:"info",style:{width:"84px"},onClick:de},{default:o(()=>[M("\u5237\u65B0\u7F13\u5B58")]),_:1})]),_:1},8,["style"])]),_:1},8,["style"])),[[H,l(F)]]):ae("",!0),u(y,{style:m([l(C),{margin:"10px 2px !important"}])},{default:o(()=>[u(w,{value:E.value,"onUpdate:value":c[1]||(c[1]=s=>E.value=s),name:"radiobuttongroup1"},{default:o(()=>[u(g,{value:!0,label:"\u5361\u6C60\u6570\u636E\u8868"}),u(g,{value:!1,label:"\u7EDF\u8BA1\u6570\u636E\u8868"})]),_:1},8,["value"])]),_:1},8,["style"]),$.value?ae("",!0):(e(),d(r,{key:3,onClick:c[2]||(c[2]=s=>Pe(F)?F.value=!l(F):F=!l(F))},{default:o(()=>[M(D(l(F)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),R(u(I,{"has-sider":"","content-style":{overflow:"scroll"}},{default:o(()=>[h.value?(e(),d(y,{key:0,style:m(l(C))},{default:o(()=>[(e(!0),n(T,null,x(new Array(20),(s,k)=>(e(),n("div",{key:k},[u(a,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!h.value&&l(O).length>0?(e(),d(y,{key:1,style:m(l(C))},{default:o(()=>[u(_,{striped:""},{default:o(()=>[P("thead",null,[P("tr",null,[(e(!0),n(T,null,x(ce.value,(s,k)=>(e(),n("td",{key:k},D(s.label),1))),128))])]),P("tbody",null,[(e(!0),n(T,null,x(l(O),(s,k)=>(e(),n("tr",{key:k},[(e(!0),n(T,null,x(ce.value,(p,ue)=>(e(),n("td",{key:ue},[p.key=="pool_stage"?(e(),n("div",Ke,D(s[p.key]),1)):p.key=="up5_imgs"?(e(),n("div",Ue,[s[p.key].length>0?(e(),n("div",Oe,[(e(!0),n(T,null,x(s[p.key],(j,se)=>(e(),d(l(Q),{style:{"margin-right":"0.3rem","border-radius":"5px"},width:48,height:48,"preview-disabled":!1,lazy:"",src:j,key:se},null,8,["src"]))),128))])):(e(),n("div",Ye,"-"))])):p.key=="up4_imgs"?(e(),n("div",qe,[s[p.key].length>0?(e(),n("div",Ge,[(e(!0),n(T,null,x(s[p.key],(j,se)=>(e(),d(l(Q),{style:{"margin-right":"0.3rem","border-radius":"5px"},width:48,height:48,"preview-disabled":!1,lazy:"",src:j,key:se},null,8,["src"]))),128))])):(e(),n("div",Qe,"-"))])):p.key=="pool_info"?(e(),n("div",{key:3,innerHTML:s[p.key],style:{width:"10.5rem"},onClick:j=>ye(s)},null,8,We)):p.key=="version_info"?(e(),n("div",{key:4,innerHTML:s[p.key],style:{width:"13rem"},onClick:j=>De(s)},null,8,Xe)):["remark","link","preview"].includes(p.key)?(e(),n("div",Je,[s[p.key]?(e(),n("a",{key:0,href:s[p.key],target:"_blank"},D(p.label),9,Ze)):(e(),n("div",et,"-"))])):(e(),n("div",tt,D(s[p.key]),1))]))),128))]))),128))])]),_:1})]),_:1},8,["style"])):(e(),d(y,{key:2,style:m([{width:"100%"},l(C)])},{default:o(()=>[u(ee,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:o(()=>[u(L,null,{default:o(()=>[u(l(me))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1},512),[[H,E.value]]),R(u(G,{"content-style":"overflow-x: scroll;"},{default:o(()=>[h.value?(e(),d(y,{key:0,style:m(l(C))},{default:o(()=>[u(a,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(e(),d(y,{key:1,style:m(l(C))},{default:o(()=>[u(q,{page:l(U).pageNum,"page-size":l(U).pageSize,"item-count":l(J),"on-update:page":N,"show-size-picker":"","page-sizes":[20,50,100,150,200,300],"on-update:page-size":Fe},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1},512),[[H,E.value]]),R(u(I,{"has-sider":"","content-style":{overflow:"scroll"}},{default:o(()=>[h.value?(e(),d(y,{key:0,style:m(l(C))},{default:o(()=>[(e(!0),n(T,null,x(new Array(20),(s,k)=>(e(),n("div",{key:k},[u(a,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!h.value&&l(ne).length>0?(e(),d(y,{key:1,style:m(l(C))},{default:o(()=>[u(_,{striped:""},{default:o(()=>[P("thead",null,[P("tr",null,[(e(!0),n(T,null,x(_e.value,(s,k)=>(e(),n("td",{key:k},D(s.label),1))),128))])]),P("tbody",null,[(e(!0),n(T,null,x(l(ne),(s,k)=>(e(),n("tr",{key:k},[(e(!0),n(T,null,x(_e.value,(p,ue)=>(e(),n("td",{key:ue},[p.key=="item_img"?(e(),n("div",lt,[s[p.key]?(e(),n("div",nt,[u(l(Q),{width:48,height:48,"preview-disabled":!1,lazy:"",src:s[p.key]},null,8,["src"])])):(e(),n("div",ot,"-"))])):p.key=="itemInfo"?(e(),n("div",{key:1,innerHTML:s[p.key]},null,8,ut)):p.key=="pool_info"?(e(),n("div",{key:2,innerHTML:s[p.key],style:{width:"10.5rem"},onClick:j=>ye(s,!0)},null,8,st)):(e(),n("div",at,D(s[p.key]),1))]))),128))]))),128))])]),_:1})]),_:1},8,["style"])):(e(),d(y,{key:2,style:m([{width:"100%"},l(C)])},{default:o(()=>[u(ee,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:o(()=>[u(L,null,{default:o(()=>[u(l(me))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1},512),[[H,!E.value]])]),_:1})]),_:1})}}});export{At as default};