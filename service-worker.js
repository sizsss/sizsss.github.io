if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const n=e=>a(e,s),b={module:{uri:s},exports:d,require:n};i[s]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(r(...e),d)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"af26e491ee8c74c6062a1011aa673683"},{url:"about/index.html",revision:"9162994fd74c41a6484c98d239c3474d"},{url:"archives/2022/11/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/12/index.html",revision:"bb6557293a32bdbd86d7e9b490979bc7"},{url:"archives/2022/index.html",revision:"7f7d5be49f82003a49dab3314ba25fd6"},{url:"archives/index.html",revision:"346460893acfe7b3bc19fdd113340dda"},{url:"bangumis/index.html",revision:"68838a49beac5f3956617362cd552245"},{url:"blogs/000/index.html",revision:"d7e4ac2981fb714567a743e67e01c845"},{url:"blogs/001/index.html",revision:"5fc3552785651bf29b40d713874fae66"},{url:"blogs/hello-world/index.html",revision:"83d237213ace9626b1ec1af87a1a2647"},{url:"categories/index.html",revision:"07be2e40813a545f2442ca1c08d068b9"},{url:"categories/数学/index.html",revision:"6311d02e4fb949d837bff4a4f519aaa8"},{url:"css/custom.css",revision:"aeab8cf842f6d3c34cf7a002c938eac1"},{url:"css/index.css",revision:"cc1a70565000baf1e4a3b092a03e83d2"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"data/avatar1024.webp",revision:"94bc2b5cdd9b2d9a834f5aba36dafb12"},{url:"data/avatar128.webp",revision:"4dd912f8baf5b0252a120ce8cf78cb05"},{url:"data/avatar512.webp",revision:"aa3ddcde65b22638d2e9c84b0e089215"},{url:"data/bg.webp",revision:"0c466c61f48794062f3d765b5ef57146"},{url:"favorites/index.html",revision:"759f512decb5b4e831ace772689d8a9a"},{url:"fcircle/index.html",revision:"cf9d5305fcb874be050d07791f079029"},{url:"images/pwaicons/114.png",revision:"778bb6d557f94d580c3f0b1b09f23f52"},{url:"images/pwaicons/192.png",revision:"bc67e8253a1b2ca3b47ff452f13b959a"},{url:"images/pwaicons/32.png",revision:"c8dea50e230c2a3a1aeaf7ac7256d9c7"},{url:"images/pwaicons/36.png",revision:"af1bbce71bc46a4fd2b3ccc5511cebec"},{url:"images/pwaicons/48.png",revision:"0790b3e3561496db3fe69fa0f80b30ee"},{url:"images/pwaicons/72.png",revision:"c01f785167b2a53a9a99a8a97e2bb7db"},{url:"images/pwaicons/96.png",revision:"1a7e66b654cbe3b7c5cf07df19e02b77"},{url:"images/pwaicons/apple-touch-icon.png",revision:"c8dea50e230c2a3a1aeaf7ac7256d9c7"},{url:"images/pwaicons/safari-pinned-tab.svg",revision:"e77147ef0b276a32aacd9710dd54aa3b"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"c6c742d58ebb99ad98451b4524250a7c"},{url:"js/custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/search/algolia.js",revision:"043e77e352c9b0512400ad5cecbd257e"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"9fc50c1e105fd3324cbb2fc41e5fc768"},{url:"tags/index.html",revision:"d197f24e235eca6e8a1ff9533330f2ab"},{url:"tags/圆锥曲线/index.html",revision:"107153c39c838f2296b41788cc602312"},{url:"tags/序/index.html",revision:"2567de9c71feec483d34166f31753d50"},{url:"tags/数学/index.html",revision:"00e65f2fb1c129132d10c4947165d4e8"},{url:"talks/index.html",revision:"5a3a3da81219bcda726aa33407b5e946"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));