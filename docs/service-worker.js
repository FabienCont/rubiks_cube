if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let c={};const l=e=>i(e,s),t={module:{uri:s},exports:c,require:l};n[s]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"3a0ba829dc66777d35bc703c895a7705.png",revision:null},{url:"60ab8cdc80449d963b3766443697b258.png",revision:null},{url:"b039b2d83982c8256af34260e546303b.png",revision:null},{url:"bundle.js",revision:"e4d2adfb56b3eb0d9a3b9a7c5ba6f30a"},{url:"index.html",revision:"e0f336e1cffe97ffed3489baef674620"},{url:"main.css",revision:"a2b413b16383e4cc93966108483fb6eb"}],{})}));
