if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let s={};const n=e=>i(e,r),f={module:{uri:r},exports:s,require:n};a[r]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(d(...e),s)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"d8677c05e4168e86fae9c165bc0feb26"},{url:"about/index.html",revision:"bc2ec1c89ad4bdadfaad60f05995d16a"},{url:"archives/2022/11/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/12/index.html",revision:"6083d1f12c99ab0d12a334b8a8333b39"},{url:"archives/2022/index.html",revision:"8b5c16f5ad09191e02d8bc0b1e177388"},{url:"archives/index.html",revision:"c319ff068392eb1a7ec92c79d6dfdd26"},{url:"bangumis/index.html",revision:"a481be2d8f4e4e51c323d3a601bb7d3a"},{url:"blogs/000/index.html",revision:"d635cfa4e74b5334dc6092becd0db6c0"},{url:"blogs/001/index.html",revision:"9a07a7ec3fc18d9adc1f420222d14a7f"},{url:"blogs/hello-world/index.html",revision:"9cf40c771ce05458539a716156a80ffe"},{url:"categories/index.html",revision:"bb2bb2696becf2ff763a9ca8403983aa"},{url:"categories/数学/index.html",revision:"c069631f6fbce87b2a1c6541f92588a6"},{url:"css/custom.css",revision:"aeab8cf842f6d3c34cf7a002c938eac1"},{url:"css/index.css",revision:"cc1a70565000baf1e4a3b092a03e83d2"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"data/avatar1024.webp",revision:"94bc2b5cdd9b2d9a834f5aba36dafb12"},{url:"data/avatar128.webp",revision:"4dd912f8baf5b0252a120ce8cf78cb05"},{url:"data/avatar512.webp",revision:"aa3ddcde65b22638d2e9c84b0e089215"},{url:"data/bg.webp",revision:"0c466c61f48794062f3d765b5ef57146"},{url:"favorites/index.html",revision:"bc887c907c69abac66fd95de76018322"},{url:"fcircle/index.html",revision:"dc77eb35c200dfd61cd9f1f0cba8053c"},{url:"images/favicon.png",revision:"19a31ad042222141a7465f8ceb9b5c61"},{url:"images/logo/64.png",revision:"9ce0a1a20695f8876fd1ccedbc8471ac"},{url:"images/pwaicons/114.png",revision:"778bb6d557f94d580c3f0b1b09f23f52"},{url:"images/pwaicons/192.png",revision:"bc67e8253a1b2ca3b47ff452f13b959a"},{url:"images/pwaicons/32.png",revision:"c8dea50e230c2a3a1aeaf7ac7256d9c7"},{url:"images/pwaicons/36.png",revision:"af1bbce71bc46a4fd2b3ccc5511cebec"},{url:"images/pwaicons/48.png",revision:"0790b3e3561496db3fe69fa0f80b30ee"},{url:"images/pwaicons/72.png",revision:"c01f785167b2a53a9a99a8a97e2bb7db"},{url:"images/pwaicons/96.png",revision:"1a7e66b654cbe3b7c5cf07df19e02b77"},{url:"images/pwaicons/apple-touch-icon.png",revision:"c8dea50e230c2a3a1aeaf7ac7256d9c7"},{url:"images/pwaicons/safari-pinned-tab.svg",revision:"e77147ef0b276a32aacd9710dd54aa3b"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f78804ef1eedf971170d9d46290ff348"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/search/algolia.js",revision:"043e77e352c9b0512400ad5cecbd257e"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"c0ad00dfc7ff3dae25b19a122a3b486c"},{url:"tags/index.html",revision:"367f76d1eff38efd14e40d8af4c292cd"},{url:"tags/圆锥曲线/index.html",revision:"5427da0fb14602819ad8ceafa599e065"},{url:"tags/序/index.html",revision:"71feca59eaadc80677dc25b17b52f4bc"},{url:"tags/数学/index.html",revision:"ecef763ec4297881aa0bdf25c636d2a0"},{url:"talks/index.html",revision:"c6d6fc6f0bec4799b4ae4495651b2c91"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));