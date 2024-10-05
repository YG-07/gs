import{d as k,r as d,V as p,o as _,W as g,X as m,Y as c,b as v,z as O,v as P,Q as f,G as A,Z as U,_ as V,$ as q,a0 as x,s as w,K as G,n as M,c as I,O as L,F as S,a1 as W,a2 as B,a3 as Q}from"./@vue-79a6a370.js";import{c as F,s as N,e as j,q as X,a as Y}from"./index-624f9afd.js";import{u as K,R as Z}from"./vue-router-4297e4b4.js";import{u as J,c as T}from"./naive-ui-fa278d27.js";import{_ as D}from"./plugin-vueexport-helper-d7c00f7c.js";import{v as ee,F as R}from"./index-4ee3123c.js";import{C as ue}from"./CommonIcon-adfe4e72.js";import{H as te}from"./@vicons-062edbc6.js";import"./lodash-dfafa856.js";import"./date-fns-f8897e89.js";import"./moment-b35f754a.js";import"./mitt-dab1f1cb.js";import"./css-render-72c8a4e0.js";import"./@emotion-e1dc9e92.js";import"./@css-render-ca6fedfc.js";import"./seemly-598f553b.js";import"./lodash-es-86019d98.js";import"./vooks-ed236956.js";import"./evtd-6b3c7fca.js";import"./vueuc-0daedfc4.js";import"./vdirs-943cc171.js";import"./@juggle-28bbed7a.js";import"./treemate-97ea80b9.js";import"./date-fns-tz-38009909.js";import"./async-validator-9e2b95c0.js";import"./vuex-5ff92b45.js";const oe=h=>(U("data-v-09392e6a"),h=h(),V(),h),ae=oe(()=>v("div",{style:{width:"100%"}},"Vite App \u6E38\u620F\u56FE\u9274",-1)),le={class:"right"},ne={class:"langSelect",size:"large"},se={style:{"margin-right":"5px"}},ce=k({__name:"Header",setup(h){K();const y=J(),e=d(F()),t=d("padding: 20px;display: flex;justify-content: flex-end;align-items: center;"),u=d("padding: 10px;display: flex;justify-content: flex-end;align-items: center;"),b=()=>{window.open("https://link3.cc/uky","_blank")};let l=d(N.get("nameLanguage")||"name");const a=d([{label:"\u4E2D\u6587",value:"name",disabled:!1},{label:"\u65E5\u6587",value:"name_ja",disabled:!1},{label:"\u82F1\u6587",value:"name_en",disabled:!1}]);let n=d([]);j.on("routerChange",o=>{n.value=o.indexOf("blue_archive")>0?["name_en"]:[],r()});const s=(o,i)=>{l.value!=o&&(l.value=o,N.set("nameLanguage",o),j.emit("setNameLanguage",o),y.success(`\u6210\u529F\u5207\u6362\u8BED\u8A00\u4E3A\uFF1A${i.label}`))},r=()=>{if(n.value.length>0)for(let o=0;o<a.value.length;++o)for(let i=0;i<n.value.length;++i)if(a.value[o].value==n.value[i]){a.value[o].disabled=!0;break}else a.value[o].disabled=!1;else for(let o=0;o<a.value.length;++o)a.value[o].disabled=!1};return(o,i)=>{const E=p("n-select"),C=p("n-layout-content"),z=p("n-layout"),H=p("n-space");return _(),g(H,{class:"Header",vertical:"",size:"large"},{default:m(()=>[c(z,{"has-sider":""},{default:m(()=>[c(C,{"content-style":e.value?t.value:u.value},{default:m(()=>[ae,v("div",le,[v("div",ne,[O(v("span",se,"\u5207\u6362\u540D\u79F0\u7684\u8BED\u8A00\uFF1A",512),[[P,e.value]]),c(E,{value:f(l),"onUpdate:value":s,options:a.value,style:A(e.value?"width: 200px":"width: 100px")},null,8,["value","options","style"])]),v("div",{class:"user",onClick:b},"Ukiyo")])]),_:1},8,["content-style"])]),_:1})]),_:1})}}});const ie=D(ce,[["__scopeId","data-v-09392e6a"]]),pe=k({__name:"Footer",setup(h){const y=d(ee),e=d(F());return(t,u)=>{const b=p("n-space");return _(),g(b,{class:"Footer",vertical:"",size:"large"},{default:m(()=>[v("div",{class:"rights",style:A(e.value?"margin: 20px 0;":"margin: 8px 0;")},"\xA9Copyright 2022 Ukiyo All Rights Reserved. "+q(y.value),5)]),_:1})}}});const re=D(pe,[["__scopeId","data-v-f1fd18cf"]]),me=k({__name:"MenuBar",setup(h){const y=K(),e=n=>()=>w(T,null,{default:()=>w(n)}),t=(n,s)=>()=>w(Z,{to:{name:n}},s),u=n=>w(ue,{url:n,size:20},{default:()=>w("")});let b=d(y.name||null),l=d(!F());const a=[{label:t("home","\u9996\u9875"),key:"home",icon:e(te)},{label:"\u539F\u795E",key:"genshin",icon:e(u("https://www.miyoushe.com/_nuxt/img/game-ys.dfc535b.jpg")),children:[{label:t("role","\u89D2\u8272"),key:"role",icon:e(u("https://genshin.honeyhunterworld.com/img/icons/char_35.webp"))},{label:t("weapon","\u6B66\u5668"),key:"weapon",icon:e(u("https://genshin.honeyhunterworld.com/img/icons/weapons_35.webp"))},{label:t("book","\u5929\u8D4B\u4E66"),key:"book",icon:e(u("https://genshin.honeyhunterworld.com/img/icons/talent_35.webp"))},{label:t("item","\u6B66\u5668\u7A81\u7834\u6750\u6599"),key:"item",icon:e(u("https://genshin.honeyhunterworld.com/img/icons/bag_35.webp"))},{label:t("pool","\u89D2\u8272\u6B66\u5668\u5361\u6C60\u4FE1\u606F"),key:"pool",icon:e(u("https://genshin.honeyhunterworld.com/img/icons/wish_35.webp"))},{label:t("card","\u300C\u4E03\u5723\u53EC\u5524\u300D\u5361\u724C"),key:"card",icon:e(u("https://genshin.honeyhunterworld.com/img/i_n146_35.webp"))}]},{label:"\u5D29\u574F3",key:"honkai",icon:e(u("https://www.miyoushe.com/_nuxt/img/game-bh3.abe5ead.jpg")),children:[{label:t("honkai_role","\u5973\u6B66\u795E"),key:"honkai_role",icon:e(u("https://uploadstatic.mihoyo.com/bh3-wiki/2021/10/21/6100274/e81e5f299d84ca0e8ec6b36f85328529_7664417501365594823.png"))}]},{label:"\u661F\u7A79\u94C1\u9053",key:"starrail",icon:e(u("https://www.miyoushe.com/_nuxt/img/game-sr.4f80911.jpg")),children:[{label:t("starrail_role","\u89D2\u8272"),key:"starrail_role",icon:e(u(R+"img/role.png"))},{label:t("starrail_weapon","\u5149\u9525"),key:"starrail_weapon",icon:e(u(R+"img/weapon.png"))}]},{label:"\u7EDD\u533A\u96F6",key:"zzz",icon:e(u("https://www.miyoushe.com/_nuxt/img/game-zzz.3ca2bac.png")),children:[{label:t("zzzrole","\u4EE3\u7406\u4EBA"),key:"zzzrole",icon:e(u("https://act-upload.mihoyo.com/nap-obc-indep/2024/06/01/76099754/1e8d488828fed5c9caba7eb393d18a52_4588078170030823167.png"))},{label:t("zzzweapon","\u97F3\u64CE"),key:"zzzweapon",icon:e(u("https://act-upload.mihoyo.com/nap-obc-indep/2024/06/01/76099754/3593482e8866f0529e8a247772e02cf4_5418014644502214835.png"))},{label:t("zzzbangboo","\u90A6\u5E03"),key:"zzzbangboo",icon:e(u("https://act-upload.mihoyo.com/nap-obc-indep/2024/06/01/76099754/0ce86ee140a04fd833f948a637af2283_1513181873101011224.png"))},{label:t("zzzsuit","\u9A71\u52A8\u76D8"),key:"zzzsuit",icon:e(u("https://act-upload.mihoyo.com/nap-obc-indep/2024/06/01/76099754/222103265483a5389ab8e589a81b8f29_6239774837764585524.png"))}]},{label:"\u9E23\u6F6E",key:"waves",icon:e(u("https://prod-alicdn-community.kurobbs.com/newHead/offical/mingchao.png")),children:[{label:t("waves_role","\u5171\u9E23\u8005"),key:"waves_role",icon:e(u("https://prod-alicdn-community.kurobbs.com/forum/5e5bb6eaa1de43e6bcb66eb8d780e92c20240509.png"))},{label:t("waves_weapon","\u6B66\u5668"),key:"waves_weapon",icon:e(u("https://prod-alicdn-community.kurobbs.com/forum/f92b449640374599ae7326e2b46f40b620240509.png"))},{label:t("waves_item","\u7A81\u7834\u6750\u6599"),key:"waves_item",icon:e(u("https://prod-alicdn-community.kurobbs.com/forum/c530b90c692e491ab832ac475cd8784f20240509.png"))},{label:t("echoes","\u58F0\u9AB8"),key:"echoes",icon:e(u("https://prod-alicdn-community.kurobbs.com/forum/6bcb87fced844da1a4e90989101751ab20240509.png"))},{label:t("waves_effect","\u5171\u9E23\u6548\u679C"),key:"waves_effect",icon:e(u("https://prod-alicdn-community.kurobbs.com/forum/dce83a0c37ae42bbb7b08a599381348820240519.png"))}]},{label:"\u78A7\u84DD\u6863\u6848",key:"blue_archive",icon:e(u("https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/d2e32e44721d013f220b0a5d849ae8c2.jpeg")),children:[{label:t("student","\u5B66\u751F"),key:"student",icon:e(u("https://cdnimg.gamekee.com/wiki2.0/images/w_310/h_310/829/43637/2023/7/1/200433.png"))},{label:t("npc","NPC\u548C\u536B\u661F"),key:"npc",icon:e(u("https://cdnimg.gamekee.com/wiki2.0/images/w_310/h_310/829/43637/2023/7/21/828040.png"))},{label:t("picacg","\u6F2B\u753B"),key:"picacg",icon:e(u("https://cdnimg.gamekee.com/wiki2.0/images/w_68/h_68/829/43637/2023/6/6/186887.png"))}]}];return(n,s)=>{const r=p("n-menu"),o=p("n-layout-sider");return _(),g(o,{bordered:"","collapse-mode":"width","collapsed-width":f(l)?40:50,width:240,collapsed:f(l),"show-trigger":"",onCollapse:s[1]||(s[1]=i=>x(l)?l.value=!0:l=!0),onExpand:s[2]||(s[2]=i=>x(l)?l.value=!1:l=!1)},{default:m(()=>[c(r,{value:f(b),"onUpdate:value":s[0]||(s[0]=i=>x(b)?b.value=i:b=i),collapsed:f(l),"collapsed-width":f(l)?40:50,"collapsed-icon-size":f(l)?16:22,options:a},null,8,["value","collapsed","collapsed-width","collapsed-icon-size"])]),_:1},8,["collapsed-width","collapsed"])}}}),de=[{cate:"\u539F\u795E",list:[{label:"\u539F\u795E\u7C73\u6E38\u793E\u65E5\u5386\u6D3B\u52A8",value:"https://bbs.mihoyo.com/ys/obc/channel/map/193"},{label:"\u539F\u795E\u7C73\u6E38\u793EWiki",value:"https://bbs.mihoyo.com/ys/obc"},{label:"\u539F\u795E\u62C6\u5305\u7F51",value:"https://genshin.honeyhunterworld.com/?lang=CHS"},{label:"\u539F\u795E\u7C73\u6E38\u793E\u4E03\u5723\u53EC\u5524",value:"https://bbs.mihoyo.com/ys/obc/channel/map/231/234"},{label:"\u539F\u795E\u7C73\u6E38\u793E\u5927\u5730\u56FE\u5DE5\u5177",value:"https://webstatic.mihoyo.com/ys/app/interactive-map/index.html"}]},{cate:"\u661F\u7A79\u94C1\u9053",list:[{label:"\u661F\u7A79\u94C1\u9053\u7C73\u6E38\u793EWiki",value:"https://bbs.mihoyo.com/sr/wiki/"},{label:"\u661F\u7A79\u94C1\u9053\u62C6\u5305\u7F51",value:"https://hsr.honeyhunterworld.com/?lang=CN"},{label:"\u661F\u7A79\u94C1\u9053\u7C73\u6E38\u793E\u5927\u5730\u56FE\u5DE5\u5177",value:"https://webstatic.mihoyo.com/sr/app/interactive-map/index.html#/map/38"}]},{cate:"\u5D29\u574F\u4E09",list:[{label:"\u5D29\u574F\u4E09\u7C73\u6E38\u793EWiki",value:"https://bbs.mihoyo.com/bh3/wiki/channel/map/17/18"},{label:"\u5D29\u574F\u4E09\u5B98\u65B9\u516C\u544A",value:"https://www.miyoushe.com/bh3/home/6?type=1"}]},{cate:"\u7EDD\u533A\u96F6",list:[{label:"\u7EDD\u533A\u96F6\u7C73\u6E38\u793EWiki",value:"https://baike.mihoyo.com/zzz/wiki/channel/map/2/43"},{label:"\u7EDD\u533A\u96F6\u5B98\u65B9\u516C\u544A",value:"https://www.miyoushe.com/zzz/home/58?type=1"}]},{cate:"\u9E23\u6F6E",list:[{label:"\u9E23\u6F6E\u5E93\u8857\u533AWiki",value:"https://wiki.kurobbs.com/mc/catalogue/list"},{label:"\u9E23\u6F6E\u5B98\u65B9\u516C\u544A",value:"https://www.kurobbs.com/mc/official"},{label:"\u9E23\u6F6E\u5E93\u8857\u533A\u5927\u5730\u56FE\u5DE5\u5177",value:"https://www.kurobbs.com/mc/map/"}]},{cate:"\u78A7\u84DD\u6863\u6848",list:[{label:"\u78A7\u84DD\u6863\u6848Wiki",value:"https://ba.gamekee.com"},{label:"\u78A7\u84DD\u6863\u6848\u5361\u6C60\u5343\u91CC\u773C",value:"https://ba.gamekee.com/596691.html"}]}],$=h=>(U("data-v-4137cb74"),h=h(),V(),h),_e=$(()=>v("h2",null,"\u8BF4\u660E",-1)),he=$(()=>v("p",{class:"section"}," \u672C\u7F51\u7AD9\u662F\u901A\u8FC7Python\u722C\u866B\u83B7\u53D6\u5404\u4E2A\u6E38\u620F\u7684\u56FE\u9274\u4FE1\u606F\uFF0C\u5982\uFF1A\u56FE\u6807\u3001\u540D\u79F0\u3001\u5B98\u65B9\u94FE\u63A5\u7B49\uFF0C\u6CA1\u6709\u663E\u793A\u7684\u56FE\u7247\u53EF\u80FD\u6765\u81EA\u4E8E\u62C6\u5305\u7F51\u7684\u4E0B\u4E00\u4E2A\u6E38\u620F\u7248\u672C\u7684\u7269\u54C1\u3002\u7EAF\u524D\u7AEF\u9879\u76EE\uFF0C\u6A21\u62DF\u7684\u6570\u636E\u5E93\u67E5\u8BE2\u3002 ",-1)),be=$(()=>v("h2",null,"\u5E38\u7528\u7F51\u7AD9",-1)),ye=k({__name:"HomeIndex",setup(h){const y=d(F()),e=a=>{u.value=a},t=G(de);let u=d("");const b=M(()=>{let a=u.value,n=[],s={cate:"\u641C\u7D22",list:[]};if(a){for(let r=0;r<t.length;r++){let o=t[r];if(o.cate.includes(a))n.push(o);else{let i=o.list.filter(E=>E.label.includes(a)||E.value.includes(a));s.list.push(...i)}}return n.push(s),n}return t}),l=a=>{window.open(a.value,"_blank")};return(a,n)=>{const s=p("n-input"),r=p("n-space"),o=p("n-card");return _(),g(r,{class:"Footer",vertical:"",size:"large"},{default:m(()=>[_e,he,be,c(r,null,{default:m(()=>[c(s,{value:f(u),"onUpdate:value":e,type:"text",placeholder:"\u641C\u7D22\u7F51\u7AD9\u540D\u79F0",style:A(y.value?"width: 200px":"min-width: 200px;")},null,8,["value","style"])]),_:1}),(_(!0),I(S,null,L(f(b),(i,E)=>(_(),g(r,{key:E,vertical:""},{default:m(()=>[v("h3",null,q(i.cate),1),c(r,null,{default:m(()=>[(_(!0),I(S,null,L(i.list,(C,z)=>(_(),g(o,{class:"item-card",size:"small",onClick:H=>l(C),key:z,title:C.label,hoverable:""},null,8,["onClick","title"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})}}});const ge=D(ye,[["__scopeId","data-v-4137cb74"]]),ve={class:"Home"},fe=k({__name:"Home",setup(h){const y=d(F());return X(),Y(),(e,t)=>{const u=p("n-layout-header"),b=p("n-back-top"),l=p("router-view"),a=p("n-layout-content"),n=p("n-layout"),s=p("n-layout-footer");return _(),I("div",ve,[c(n,{class:"layout",style:A(y.value?"min-width: 800px;":""),"content-style":"display: flex;flex-direction: column;"},{default:m(()=>[c(u,{class:"layout-header",bordered:""},{default:m(()=>[c(ie)]),_:1}),c(n,{"content-style":"flex: 1;","has-sider":""},{default:m(()=>[c(me),c(a,{"content-style":y.value?"padding: 24px;":"padding: 5px;"},{default:m(()=>[c(b,{right:y.value?40:5},null,8,["right"]),c(l,null,{default:m(({Component:r})=>[(_(),g(Q,null,[e.$route.meta.keepAlive?(_(),g(W(r),{key:e.$route.name})):B("",!0)],1024)),e.$route.meta.keepAlive?B("",!0):(_(),g(W(r),{key:e.$route.name}))]),_:1}),e.$route.name=="home"?(_(),g(ge,{key:0})):B("",!0)]),_:1},8,["content-style"])]),_:1}),c(s,{class:"layout-footer",bordered:""},{default:m(()=>[c(re)]),_:1})]),_:1},8,["style"])])}}});const Me=D(fe,[["__scopeId","data-v-e42b52ee"]]);export{Me as default};