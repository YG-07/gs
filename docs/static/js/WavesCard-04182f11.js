import{c as g}from"./index-9bc1ccfc.js";import{d as b,r as a,n as i,V as c,o as w,c as x,b as y,Y as d,a5 as C,Q as s,G as l,X as k,e as z,$ as N}from"./@vue-79a6a370.js";import{_ as W}from"./plugin-vueexport-helper-d7c00f7c.js";const j=b({__name:"WavesCard",props:{src:null,width:null,height:null,item:null,url:null,round:{default:"0.1rem"},objectFit:{default:"fill"},theme:{default:"dark"}},setup(t){const e=t,r=a(g());let n=a(r.value?100:45),m=a(e.width?Number(e.width):n.value),u=a(e.height?Number(e.height):n.value);const f=i(()=>e.theme=="dark"?"color: #fff;background: #333;":"color: #000;background: #fff;"),h=i(()=>e.item.star!==void 0?`img-item img-item-${e.item.star}`:""),_=()=>{let o=e.url;window.open(o,"_blank")};return(o,V)=>{const p=c("n-image"),v=c("n-ellipsis");return w(),x("div",{class:"WavesCard",onClick:_},[y("div",{class:"waves-item",style:l(s(f))},[d(p,{class:C(s(h)),style:l(`border-radius: ${t.round};`),width:s(m),height:s(u),"preview-disabled":!0,lazy:"",src:t.src,"object-fit":t.objectFit},null,8,["class","style","width","height","src","object-fit"]),d(v,{style:l(r.value?"max-width: 90px":"max-width: 40px;transform: scale(0.9);font-size: 12px;")},{default:k(()=>[z(N(t.item.name),1)]),_:1},8,["style"])],4)])}}});const $=W(j,[["__scopeId","data-v-9c9edb27"]]);export{$ as W};