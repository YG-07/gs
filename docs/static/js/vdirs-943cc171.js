import{o as c,a as u}from"./evtd-6b3c7fca.js";const i="@@mmoContext",x={mounted(n,{value:e}){n[i]={handler:void 0},typeof e=="function"&&(n[i].handler=e,c("mousemoveoutside",n,e))},updated(n,{value:e}){const t=n[i];typeof e=="function"?t.handler?t.handler!==e&&(u("mousemoveoutside",n,t.handler),t.handler=e,c("mousemoveoutside",n,e)):(n[i].handler=e,c("mousemoveoutside",n,e)):t.handler&&(u("mousemoveoutside",n,t.handler),t.handler=void 0)},unmounted(n){const{handler:e}=n[i];e&&u("mousemoveoutside",n,e),n[i].handler=void 0}},Z=x,o="@@coContext",f={mounted(n,{value:e,modifiers:t}){n[o]={handler:void 0},typeof e=="function"&&(n[o].handler=e,c("clickoutside",n,e,{capture:t.capture}))},updated(n,{value:e,modifiers:t}){const d=n[o];typeof e=="function"?d.handler?d.handler!==e&&(u("clickoutside",n,d.handler,{capture:t.capture}),d.handler=e,c("clickoutside",n,e,{capture:t.capture})):(n[o].handler=e,c("clickoutside",n,e,{capture:t.capture})):d.handler&&(u("clickoutside",n,d.handler,{capture:t.capture}),d.handler=void 0)},unmounted(n,{modifiers:e}){const{handler:t}=n[o];t&&u("clickoutside",n,t,{capture:e.capture}),n[o].handler=void 0}},z=f;function m(n,e){console.error(`[vdirs/${n}]: ${e}`)}class l{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,t){const{elementZIndex:d}=this;if(t!==void 0){e.style.zIndex=`${t}`,d.delete(e);return}const{nextZIndex:s}=this;d.has(e)&&d.get(e)+1===this.nextZIndex||(e.style.zIndex=`${s}`,d.set(e,s),this.nextZIndex=s+1,this.squashState())}unregister(e,t){const{elementZIndex:d}=this;d.has(e)?d.delete(e):t===void 0&&m("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){const e=Array.from(this.elementZIndex.entries());e.sort((t,d)=>t[1]-d[1]),this.nextZIndex=2e3,e.forEach(t=>{const d=t[0],s=this.nextZIndex++;`${s}`!==d.style.zIndex&&(d.style.zIndex=`${s}`)})}}const a=new l,r="@@ziContext",I={mounted(n,e){const{value:t={}}=e,{zIndex:d,enabled:s}=t;n[r]={enabled:!!s,initialized:!1},s&&(a.ensureZIndex(n,d),n[r].initialized=!0)},updated(n,e){const{value:t={}}=e,{zIndex:d,enabled:s}=t,h=n[r].enabled;s&&!h&&(a.ensureZIndex(n,d),n[r].initialized=!0),n[r].enabled=!!s},unmounted(n,e){if(!n[r].initialized)return;const{value:t={}}=e,{zIndex:d}=t;a.unregister(n,d)}},g=I;export{z as c,Z as m,g as z};