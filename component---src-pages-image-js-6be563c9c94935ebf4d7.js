(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{SJ6J:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n);t("YS+O");a.default=function(e){var a=Object(n.useState)(0),t=a[0],c=a[1],l=Object(n.useState)(!1),o=l[0],i=l[1],d=o&&e.dataArray?e.dataArray[t].url:"",s=o&&e.dataArray?e.dataArray[t].caption:"";Object(n.useEffect)((function(){i(!0)}),[]);var u=function(a){var n=t;(n+=a)>e.dataArray.length-1&&(n=0),n<0&&(n=e.dataArray.length-1),c(n)};return r.a.createElement("div",{id:"image-main-container",key:o},o&&e.dataArray?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.isModal?"modal-slideshow-container":"regular-slideshow-container"},r.a.createElement("div",{className:"mySlides fade"},r.a.createElement("img",{id:"image",src:d}),r.a.createElement("div",{className:"text",style:0!==s.length?{backgroundColor:"rgba(44, 44, 44, 0.5)"}:{backgroundColor:"transparent"}},r.a.createElement("p",null,s))),r.a.createElement("a",{className:"prev",onClick:function(){return u(-1)}},"❮"),r.a.createElement("a",{className:"next",onClick:function(){return u(1)}},"❯")),r.a.createElement("div",{id:"dot-container"},function(){for(var a=[],n=function(e){a.push(r.a.createElement("div",{key:e},r.a.createElement("span",{className:"dot",style:e===t?{backgroundColor:"#4a4949"}:{backgroundColor:"#bbb"},onClick:function(){return c(e)}})))},l=0;l<e.dataArray.length;l++)n(l);return a}())):r.a.createElement("p",null))}},"YS+O":function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-image-js-6be563c9c94935ebf4d7.js.map