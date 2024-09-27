import{d as A,V as c,W as f,X as p,o as k,Y as _,Q as l,P as L}from"./@vue-79a6a370.js";import{N as P,a as D,z as R,d as g,b as O,n as I}from"./naive-ui-fa278d27.js";import{c as V}from"./vuex-5ff92b45.js";import{c as T,a as C}from"./vue-router-4297e4b4.js";import"./date-fns-f8897e89.js";import"./css-render-72c8a4e0.js";import"./@emotion-e1dc9e92.js";import"./@css-render-ca6fedfc.js";import"./seemly-598f553b.js";import"./lodash-es-86019d98.js";import"./vooks-ed236956.js";import"./evtd-6b3c7fca.js";import"./vueuc-0daedfc4.js";import"./vdirs-943cc171.js";import"./@juggle-28bbed7a.js";import"./treemate-97ea80b9.js";import"./date-fns-tz-38009909.js";import"./async-validator-9e2b95c0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const w="production",oe="/gs/",re="V1.2.240715",y=A({__name:"App",setup(i){return console.log(w,"env"),(o,n)=>{const a=c("router-view"),e=c("n-loading-bar-provider");return k(),f(e,null,{default:p(()=>[_(l(O),{locale:l(R),"date-locale":l(g)},{default:p(()=>[_(l(P),null,{default:p(()=>[_(l(D),null,{default:p(()=>[_(a)]),_:1})]),_:1})]),_:1},8,["locale","date-locale"])]),_:1})}}});const B=V({state:{genshinCommonUrl:null,genshinRelation:null,genshinUrlSelect:null},getters:{},mutations:{setGenshinCommonUrl(i,o){i.genshinCommonUrl=o},setGenshinRelation(i,o){i.genshinRelation=o},setGenshinUrlSelect(i,o){i.genshinUrlSelect=o}},actions:{},modules:{}}),b="modulepreload",F=function(i,o){return new URL(i,o).href},d={},t=function(o,n,a){return!n||n.length===0?o():Promise.all(n.map(e=>{if(e=F(e,a),e in d)return;d[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${m}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":b,r||(u.as="script",u.crossOrigin=""),u.href=e,document.head.appendChild(u),r)return new Promise((v,E)=>{u.addEventListener("load",v),u.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},N=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>t(()=>import("./Home-8b4104bb.js"),["Home-8b4104bb.js","..\\css\\Home-87da74b3.css","@vue-79a6a370.js","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","vue-router-4297e4b4.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","@vicons-062edbc6.js","vuex-5ff92b45.js"],import.meta.url),meta:{title:"\u9996\u9875",keepAlive:!0}},{path:"/genshin",name:"genshin",component:()=>t(()=>import("./Home-8b4104bb.js"),["Home-8b4104bb.js","..\\css\\Home-87da74b3.css","@vue-79a6a370.js","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","vue-router-4297e4b4.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","@vicons-062edbc6.js","vuex-5ff92b45.js"],import.meta.url),meta:{title:"\u539F\u795E",keepAlive:!0},children:[{path:"role",name:"role",component:()=>t(()=>import("./Role-3145760b.js"),["Role-3145760b.js","@vue-79a6a370.js","UrlSelect-8d4a69a5.js","..\\css\\UrlSelect-6d4c34c1.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","genshin_select-2e867e4f.js","vue-router-4297e4b4.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u89D2\u8272",keepAlive:!0}},{path:"weapon",name:"weapon",component:()=>t(()=>import("./Weapon-68ad9c09.js"),["Weapon-68ad9c09.js","@vue-79a6a370.js","UrlSelect-8d4a69a5.js","..\\css\\UrlSelect-6d4c34c1.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","genshin_select-2e867e4f.js","vue-router-4297e4b4.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u6B66\u5668",keepAlive:!0}},{path:"book",name:"book",component:()=>t(()=>import("./Book-5ba8ab12.js"),["Book-5ba8ab12.js","@vue-79a6a370.js","UrlSelect-8d4a69a5.js","..\\css\\UrlSelect-6d4c34c1.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u5929\u8D4B\u4E66",keepAlive:!0}},{path:"item",name:"item",component:()=>t(()=>import("./Item-d7cba18f.js"),["Item-d7cba18f.js","@vue-79a6a370.js","UrlSelect-8d4a69a5.js","..\\css\\UrlSelect-6d4c34c1.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u6B66\u5668\u7A81\u7834\u6750\u6599",keepAlive:!0}},{path:"card",name:"card",component:()=>t(()=>import("./Card-031a286b.js"),["Card-031a286b.js","@vue-79a6a370.js","UrlSelect-8d4a69a5.js","..\\css\\UrlSelect-6d4c34c1.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u300C\u4E03\u5723\u53EC\u5524\u300D\u5361\u724C",keepAlive:!0}},{path:"pool",name:"pool",component:()=>t(()=>import("./Pool-f85989c3.js"),["Pool-f85989c3.js","@vue-79a6a370.js","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u89D2\u8272\u6B66\u5668\u5361\u6C60\u4FE1\u606F",keepAlive:!0}}]},{path:"/honkai",name:"honkai",component:()=>t(()=>import("./Home-8b4104bb.js"),["Home-8b4104bb.js","..\\css\\Home-87da74b3.css","@vue-79a6a370.js","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","vue-router-4297e4b4.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","@vicons-062edbc6.js","vuex-5ff92b45.js"],import.meta.url),meta:{title:"\u5D29\u4E09",keepAlive:!0},children:[{path:"role",name:"honkai_role",component:()=>t(()=>import("./Role-2325a4a7.js"),["Role-2325a4a7.js","@vue-79a6a370.js","UrlSelect-8d4a69a5.js","..\\css\\UrlSelect-6d4c34c1.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","vue-router-4297e4b4.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u5973\u6B66\u795E",keepAlive:!0}}]},{path:"/starrail",name:"starrail",component:()=>t(()=>import("./Home-8b4104bb.js"),["Home-8b4104bb.js","..\\css\\Home-87da74b3.css","@vue-79a6a370.js","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","vue-router-4297e4b4.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","@vicons-062edbc6.js","vuex-5ff92b45.js"],import.meta.url),meta:{title:"\u661F\u7A79\u94C1\u9053",keepAlive:!0},children:[{path:"role",name:"starrail_role",component:()=>t(()=>import("./Role-0f831493.js"),["Role-0f831493.js","@vue-79a6a370.js","UrlSelect-8d4a69a5.js","..\\css\\UrlSelect-6d4c34c1.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","vue-router-4297e4b4.js","star_rail_select-72af43a0.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u89D2\u8272",keepAlive:!0}},{path:"weapon",name:"starrail_weapon",component:()=>t(()=>import("./Weapon-c4564646.js"),["Weapon-c4564646.js","@vue-79a6a370.js","UrlSelect-8d4a69a5.js","..\\css\\UrlSelect-6d4c34c1.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","vue-router-4297e4b4.js","star_rail_select-72af43a0.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u6B66\u5668",keepAlive:!0}}]},{path:"/blue_archive",name:"blue_archive",component:()=>t(()=>import("./Home-8b4104bb.js"),["Home-8b4104bb.js","..\\css\\Home-87da74b3.css","@vue-79a6a370.js","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","vue-router-4297e4b4.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","@vicons-062edbc6.js","vuex-5ff92b45.js"],import.meta.url),meta:{title:"\u78A7\u84DD\u6863\u6848",keepAlive:!0},children:[{path:"student",name:"student",component:()=>t(()=>import("./student-5ac2c096.js"),["student-5ac2c096.js","@vue-79a6a370.js","BlueUrlSelect-f4d53390.js","..\\css\\BlueUrlSelect-0fb2baa9.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u5B66\u751F",keepAlive:!0}},{path:"npc",name:"npc",component:()=>t(()=>import("./npc-6af65a81.js"),["npc-6af65a81.js","@vue-79a6a370.js","BlueUrlSelect-f4d53390.js","..\\css\\BlueUrlSelect-0fb2baa9.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"NPC\u548C\u536B\u661F",keepAlive:!0}},{path:"picacg",name:"picacg",component:()=>t(()=>import("./picacg-696a729c.js"),["picacg-696a729c.js","..\\css\\picacg-44805da0.css","@vue-79a6a370.js","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","vue-router-4297e4b4.js","@vicons-062edbc6.js","plugin-vueexport-helper-d7c00f7c.js"],import.meta.url),meta:{title:"\u6F2B\u753B",keepAlive:!0}}]},{path:"/waves",name:"waves",component:()=>t(()=>import("./Home-8b4104bb.js"),["Home-8b4104bb.js","..\\css\\Home-87da74b3.css","@vue-79a6a370.js","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","vue-router-4297e4b4.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","@vicons-062edbc6.js","vuex-5ff92b45.js"],import.meta.url),meta:{title:"\u9E23\u6F6E",keepAlive:!0},children:[{path:"role",name:"waves_role",component:()=>t(()=>import("./Role-94522ae2.js"),["Role-94522ae2.js","@vue-79a6a370.js","WavesCard-04182f11.js","..\\css\\WavesCard-5e763cd7.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","waves_select_item-6029c2e1.js","@vicons-062edbc6.js","vuex-5ff92b45.js","vue-router-4297e4b4.js"],import.meta.url),meta:{title:"\u5171\u9E23\u8005",keepAlive:!0}},{path:"weapon",name:"waves_weapon",component:()=>t(()=>import("./Weapon-71d7ffbc.js"),["Weapon-71d7ffbc.js","@vue-79a6a370.js","WavesCard-04182f11.js","..\\css\\WavesCard-5e763cd7.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","waves_select_item-6029c2e1.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u6B66\u5668",keepAlive:!0}},{path:"item",name:"waves_item",component:()=>t(()=>import("./Item-f174b1b8.js"),["Item-f174b1b8.js","@vue-79a6a370.js","WavesCard-04182f11.js","..\\css\\WavesCard-5e763cd7.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","waves_select_item-6029c2e1.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u7A81\u7834\u6750\u6599",keepAlive:!0}},{path:"echoes",name:"echoes",component:()=>t(()=>import("./Echoes-f5ae90ce.js"),["Echoes-f5ae90ce.js","@vue-79a6a370.js","WavesCard-04182f11.js","..\\css\\WavesCard-5e763cd7.css","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u58F0\u9AB8",keepAlive:!0}},{path:"effect",name:"waves_effect",component:()=>t(()=>import("./Effect-e31f4e52.js"),["Effect-e31f4e52.js","..\\css\\Effect-e93901fa.css","@vue-79a6a370.js","index-9bc1ccfc.js","lodash-4ca19532.js","date-fns-f8897e89.js","moment-b35f754a.js","naive-ui-fa278d27.js","css-render-72c8a4e0.js","@emotion-e1dc9e92.js","@css-render-ca6fedfc.js","seemly-598f553b.js","lodash-es-86019d98.js","vooks-ed236956.js","evtd-6b3c7fca.js","vueuc-0daedfc4.js","vdirs-943cc171.js","@juggle-28bbed7a.js","treemate-97ea80b9.js","date-fns-tz-38009909.js","async-validator-9e2b95c0.js","mitt-dab1f1cb.js","plugin-vueexport-helper-d7c00f7c.js","CommonIcon-adfe4e72.js","@vicons-062edbc6.js"],import.meta.url),meta:{title:"\u5171\u9E23\u6548\u679C",keepAlive:!0}}]}],S=T(),h=C({history:S,routes:N});h.beforeEach((i,o,n)=>{i.meta.title&&(document.title=i.meta.title),n()});const s=L(y);s.use(I);s.use(h);s.use(B);s.mount("#app");export{oe as F,re as v};