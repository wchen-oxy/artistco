(window.webpackJsonp=window.webpackJsonp||[]).push([[7,9],{SJ6J:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a);n("YS+O");t.default=function(e){var t=Object(a.useState)(0),n=t[0],o=t[1],l=Object(a.useState)(!1),c=l[0],i=l[1],u=c?e.dataArray[n].url:"",s=c?e.dataArray[n].caption:"";Object(a.useEffect)((function(){return i(!0)}),[]);var d=function(t){var a=n;(a+=t)>e.dataArray.length-1&&(a=0),a<0&&(a=e.dataArray.length-1),o(a)},m=[];return c&&function(t){for(var a=function(e){t.push(r.a.createElement("div",{key:e},r.a.createElement("span",{className:"dot",style:e===n?{backgroundColor:"#4a4949"}:{backgroundColor:"#bbb"},onClick:function(){return o(e)}})))},l=0;l<e.dataArray.length;l++)a(l)}(m),r.a.createElement("div",{id:"image-main-container",key:c},c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"slideshow-container"},r.a.createElement("div",{className:"mySlides fade"},r.a.createElement("img",{id:"image",src:u}),r.a.createElement("div",{className:"text",style:0!==s.length?{backgroundColor:"rgba(44, 44, 44, 0.5)"}:{backgroundColor:"transparent"}},r.a.createElement("p",null,s))),r.a.createElement("a",{className:"prev",onClick:function(){return d(-1)}},"❮"),r.a.createElement("a",{className:"next",onClick:function(){return d(1)}},"❯")),r.a.createElement("br",null),r.a.createElement("div",{id:"dot-container"},m)):r.a.createElement("p",null,"The images need to be rendered again. Please refresh your page."))}},"YS+O":function(e,t,n){},"dZ+Y":function(e,t,n){"use strict";var a=n("XKFU"),r=n("CkkT")(3);a(a.P+a.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return r(this,e,arguments[1])}})},wc77:function(e,t,n){},yp8A:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a);n("0l/t"),n("8+KV"),n("dZ+Y"),n("XfO3"),n("HEwt"),n("LK8F");function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var l=!1;if("undefined"!=typeof window){var c={get passive(){l=!0}};window.addEventListener("testPassive",null,c),window.removeEventListener("testPassive",null,c)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),u=[],s=!1,d=-1,m=void 0,v=void 0,f=function(e){return u.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},g=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},h=function(){setTimeout((function(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==m&&(document.body.style.overflow=m,m=void 0)}))},y=function(e,t){if(i){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!u.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};u=[].concat(o(u),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-d;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?g(e):e.stopPropagation())}(t,e)},s||(document.addEventListener("touchmove",g,l?{passive:!1}:void 0),s=!0)}}else{!function(e){setTimeout((function(){if(void 0===v){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(v=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===m&&(m=document.body.style.overflow,document.body.style.overflow="hidden")}))}(t);var a={targetElement:e,options:t||{}};u=[].concat(o(u),[a])}},p=n("SJ6J");n("wc77"),t.default=function(e){var t=Object(a.useState)(0),n=t[0],o=t[1],c=Object(a.useState)(!1),d=c[0],m=c[1],v=Object(a.useRef)(null),f=[],E=[],b=[],w=r.a.createElement(r.a.Fragment,null);Object(a.useEffect)((function(){return m(!0)}),[]);var k=function(e){o(e),v.current.style.display="flex",y(document.body)},N=function(e,t,n){return r.a.createElement("div",{key:e,className:"thumbnail-container",onClick:function(){return k(e)}},r.a.createElement("img",{className:"thumbnail-image",src:t}),r.a.createElement("div",{className:"caption-overlay"},r.a.createElement("div",{className:"caption-text-container"},r.a.createElement("p",{className:"caption-text"},n))))};return d&&(!function(t,n,a){for(var r=0,o=0;o<e.dataArray.length;o++){var l=e.dataArray[o];switch(r){case 0:t.push(N(o,l.thumbnail,l.caption));break;case 1:n.push(N(o,l.thumbnail,l.caption));break;case 2:a.push(N(o,l.thumbnail,l.caption))}2===r?r=0:r++}}(f,E,b),w=r.a.createElement("div",{className:"modal",ref:v},r.a.createElement("div",{className:"overlay"}),r.a.createElement("span",{className:"close",onClick:function(){v.current.style.display="none",function(e){if(i){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,u=u.filter((function(t){return t.targetElement!==e})),s&&0===u.length&&(document.removeEventListener("touchmove",g,l?{passive:!1}:void 0),s=!1)}else(u=u.filter((function(t){return t.targetElement!==e}))).length||h()}(document.body)}},r.a.createElement("h3",null,"X")),r.a.createElement("div",{id:"image-holder-container"},r.a.createElement(p.default,{dataArray:e.dataArray[n].data}),n))),r.a.createElement("div",{key:d},d?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-container",id:"gallery-container"},r.a.createElement("h2",{id:"gallery-title-text"},"Our Residential Work"),r.a.createElement("div",{id:"gallery-column-container"},r.a.createElement("div",{className:"gallery-column"},f),r.a.createElement("div",{className:"gallery-column"},E),r.a.createElement("div",{className:"gallery-column"},b))),d?w:r.a.createElement(r.a.Fragment,null)):r.a.createElement("div",{className:"main-container"},r.a.createElement("p",null,"The images need to be rendered again. Please refresh your page.")))}}}]);
//# sourceMappingURL=component---src-pages-gallery-js-214f3753cb6f1a801c1b.js.map