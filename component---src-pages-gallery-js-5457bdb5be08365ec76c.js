(window.webpackJsonp=window.webpackJsonp||[]).push([[7,9],{SJ6J:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a);n("YS+O");t.default=function(e){var t=Object(a.useState)(0),n=t[0],o=t[1],c=Object(a.useState)(!1),l=c[0],i=c[1],u=l&&e.dataArray?e.dataArray[n].url:"",s=l&&e.dataArray?e.dataArray[n].caption:"";Object(a.useEffect)((function(){i(!0)}),[]);var d=function(t){var a=n;(a+=t)>e.dataArray.length-1&&(a=0),a<0&&(a=e.dataArray.length-1),o(a)};return r.a.createElement("div",{id:"image-main-container",key:l},l&&e.dataArray?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"slideshow-container"},r.a.createElement("div",{className:"mySlides fade"},r.a.createElement("img",{id:"image",src:u}),r.a.createElement("div",{className:"text",style:0!==s.length?{backgroundColor:"rgba(44, 44, 44, 0.5)"}:{backgroundColor:"transparent"}},r.a.createElement("p",null,s))),r.a.createElement("a",{className:"prev",onClick:function(){return d(-1)}},"❮"),r.a.createElement("a",{className:"next",onClick:function(){return d(1)}},"❯")),r.a.createElement("div",{id:"dot-container"},function(){for(var t=[],a=function(e){t.push(r.a.createElement("div",{key:e},r.a.createElement("span",{className:"dot",style:e===n?{backgroundColor:"#4a4949"}:{backgroundColor:"#bbb"},onClick:function(){return o(e)}})))},c=0;c<e.dataArray.length;c++)a(c);return t}())):r.a.createElement("p",null))}},"YS+O":function(e,t,n){},"dZ+Y":function(e,t,n){"use strict";var a=n("XKFU"),r=n("CkkT")(3);a(a.P+a.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return r(this,e,arguments[1])}})},wc77:function(e,t,n){},yp8A:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a);n("0l/t"),n("8+KV"),n("dZ+Y"),n("XfO3"),n("HEwt"),n("LK8F");function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c=!1;if("undefined"!=typeof window){var l={get passive(){c=!0}};window.addEventListener("testPassive",null,l),window.removeEventListener("testPassive",null,l)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),u=[],s=!1,d=-1,m=void 0,v=void 0,f=function(e){return u.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},g=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},y=function(){setTimeout((function(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==m&&(document.body.style.overflow=m,m=void 0)}))},h=function(e,t){if(i){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!u.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};u=[].concat(o(u),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-d;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?g(e):e.stopPropagation())}(t,e)},s||(document.addEventListener("touchmove",g,c?{passive:!1}:void 0),s=!0)}}else{!function(e){setTimeout((function(){if(void 0===v){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(v=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===m&&(m=document.body.style.overflow,document.body.style.overflow="hidden")}))}(t);var a={targetElement:e,options:t||{}};u=[].concat(o(u),[a])}},p=n("SJ6J");n("wc77"),t.default=function(e){var t=Object(a.useState)(0),n=(t[0],t[1],Object(a.useState)(!1)),o=n[0],l=n[1],d=Object(a.useState)([]),m=d[0],v=d[1],f=Object(a.useState)([]),E=f[0],b=f[1],w=Object(a.useState)([]),k=w[0],S=w[1],N=Object(a.useState)(null),A=N[0],O=N[1],T=Object(a.useRef)(null);Object(a.useEffect)((function(){l(!0),J()}),[]);var j=function(){T.current.style.display="none",function(e){if(i){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,u=u.filter((function(t){return t.targetElement!==e})),s&&0===u.length&&(document.removeEventListener("touchmove",g,c?{passive:!1}:void 0),s=!1)}else(u=u.filter((function(t){return t.targetElement!==e}))).length||y()}(document.body)},C=function(t){O(r.a.createElement(p.default,{dataArray:e.dataArray[t].data})),T.current.style.display="flex",h(document.body)},x=function(e,t,n){return r.a.createElement("div",{key:e,className:"thumbnail-container",onClick:function(){C(e)}},r.a.createElement("img",{className:"thumbnail-image",src:t}),r.a.createElement("div",{className:"caption-overlay"},r.a.createElement("div",{className:"caption-text-container"},r.a.createElement("p",{className:"caption-text"},n))))},J=function(){for(var t=0,n=[],a=[],r=[],o=0;o<e.dataArray.length;o++){var c=e.dataArray[o];switch(t){case 0:n.push(x(o,c.thumbnail,c.caption));break;case 1:a.push(x(o,c.thumbnail,c.caption));break;case 2:r.push(x(o,c.thumbnail,c.caption))}2===t?t=0:t++}v(n),b(a),S(r)};return r.a.createElement("div",{key:o},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-container",id:"gallery-container"},r.a.createElement("h2",{id:"gallery-title-text"},"Our Residential Work"),r.a.createElement("div",{id:"gallery-column-container"},r.a.createElement("div",{className:"gallery-column"},m),r.a.createElement("div",{className:"gallery-column"},E),r.a.createElement("div",{className:"gallery-column"},k))),r.a.createElement("div",{className:"modal",ref:T},r.a.createElement("div",{className:"overlay"}),r.a.createElement("span",{className:"close",onClick:function(){j(),O(null)}},r.a.createElement("h3",null,"X")),r.a.createElement("div",{id:"image-holder-container"},A))):r.a.createElement("div",{className:"main-container"}))}}}]);
//# sourceMappingURL=component---src-pages-gallery-js-5457bdb5be08365ec76c.js.map