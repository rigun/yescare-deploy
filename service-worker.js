"use strict";var precacheConfig=[["index.html","98f7d4ba5353a291769f5dfcc96636d7"],["service-worker.js","028e59608c5922784d3aaa8c6fd2805b"],["static/css/app.8f3b27f719b6f49ea9df03bec7d58721.css","c65d34366aa6d319bbeb0aef3daf1332"],["static/js/0.b8223342c510c7175ffb.js","10fb9878c6f880db05d570c11f135bd6"],["static/js/1.9f181cbb6281aaa4becf.js","1a43b47d4020cf6cc48085537d892dc2"],["static/js/10.7b5270840703094fe245.js","b94ec718362785f45e9e53fdad74ddd3"],["static/js/11.9c1273e5a5bd97a025ec.js","a8b89c0c62d4ba02a4c347ba85f03bc1"],["static/js/12.3a8f2640c7febb7be01c.js","f384c69bb5b83a5e1ab11c4d940b98ce"],["static/js/13.3e6bca557c996897f39e.js","90f2268fe0a233d6c94d518cfb421e27"],["static/js/14.7706b221c0fdae5bbfac.js","e68e4a27139a5f346c43691a57d543ba"],["static/js/2.b1cbad7095b60bfe6e99.js","7b41919fb15f6afe6fb334cb731f6cea"],["static/js/3.4c2f8b6d2f1017f67f2b.js","4f9e49bcd4bfd65c60d8822d9b88c9e0"],["static/js/4.ff59c324d85fe8e087de.js","df6930a79069adefb9418d6dec0a4075"],["static/js/5.a67712a23bbd3269d02f.js","751c0277cf706f29c0d2140a91317d7b"],["static/js/6.b331814235ea06df15b6.js","fa4be884727c72639efda5401e6aed9f"],["static/js/7.f20dcc56298f00002ccb.js","396bad2592900d2a27f23afec665e8e5"],["static/js/8.c65ffedc429620c3c89e.js","a2ad2a7f8f55bd4bdd89f138656e88f3"],["static/js/9.8fdb79e8a95a808100e5.js","bc9112256ee198c9763e5bd20cb95d1b"],["static/js/app.e2a0c5c62dc5c0f3fee0.js","9f6172e9453af1f2f1b1df3b02ca9e5a"],["static/js/manifest.9424c62a82bce2984b4f.js","f956a62dd0abdbd0ded68bf2548f723b"],["static/js/vendor.e89def548039be0d5058.js","e9005af82703f74cc7783e7afc67bd8a"]],cacheName="sw-precache-v3-atmaauto-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,!1);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});