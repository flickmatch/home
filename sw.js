if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let d={};const o=e=>i(e,l),a={module:{uri:l},exports:d,require:o};s[l]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/App.e7168e75.js",revision:null},{url:"assets/index.043fec2a.js",revision:null},{url:"assets/index.19dfce3d.js",revision:null},{url:"assets/index.2cb7098b.js",revision:null},{url:"assets/index.35c020c8.js",revision:null},{url:"assets/index.36f15228.js",revision:null},{url:"assets/index.43e2e1bc.js",revision:null},{url:"assets/index.460f38a4.js",revision:null},{url:"assets/index.844b9c20.js",revision:null},{url:"assets/index.module.d4c3b8d8.js",revision:null},{url:"assets/Meta.c9b82b4a.js",revision:null},{url:"assets/Root.555f79bc.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"442ceb0d6db1658fda8d4a8b01854e4a"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"assets/mui.3fef0fab.svg",revision:null},{url:"assets/pwa.0d28f369.svg",revision:null},{url:"assets/react_ed.bc50972b.svg",revision:null},{url:"assets/recoil.c6c3cc8f.svg",revision:null},{url:"assets/rr.c079b359.svg",revision:null},{url:"assets/ts.849f5fbf.svg",revision:null},{url:"assets/vite.17e50649.svg",revision:null},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"0b386a8b67048c795b8fb1e0bbb47be6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));