(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{"/hJO":function(e,a,t){},SJ6J:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n);t("YS+O");a.default=function(e){var a=Object(n.useState)(0),t=a[0],c=a[1],i=Object(n.useState)(!1),l=i[0],o=i[1],s=l?e.dataArray[t].url:"",u=l?e.dataArray[t].caption:"";Object(n.useEffect)((function(){return o(!0)}),[]);var m=function(a){var n=t;(n+=a)>e.dataArray.length-1&&(n=0),n<0&&(n=e.dataArray.length-1),c(n)},d=[];return l&&function(a){for(var n=function(e){a.push(r.a.createElement("div",{key:e},r.a.createElement("span",{className:"dot",style:e===t?{backgroundColor:"#4a4949"}:{backgroundColor:"#bbb"},onClick:function(){return c(e)}})))},i=0;i<e.dataArray.length;i++)n(i)}(d),r.a.createElement("div",{id:"image-main-container",key:l},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"slideshow-container"},r.a.createElement("div",{className:"mySlides fade"},r.a.createElement("img",{id:"image",src:s}),r.a.createElement("div",{className:"text",style:0!==u.length?{backgroundColor:"rgba(44, 44, 44, 0.5)"}:{backgroundColor:"transparent"}},r.a.createElement("p",null,u))),r.a.createElement("a",{className:"prev",onClick:function(){return m(-1)}},"❮"),r.a.createElement("a",{className:"next",onClick:function(){return m(1)}},"❯")),r.a.createElement("br",null),r.a.createElement("div",{id:"dot-container"},d)):r.a.createElement("p",null,"The images need to be rendered again. Please refresh your page."))}},"YS+O":function(e,a,t){},abFe:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("SJ6J");t("/hJO");a.default=function(e){var a=Object(n.useState)(!1),t=a[0],i=a[1];Object(n.useEffect)((function(){return i(!0)}),[]);var l=t?r.a.createElement("div",{id:"service-image-container"},"Residential"===e.client?r.a.createElement(c.default,{dataArray:e.dataArray}):r.a.createElement("img",{alt:"client image",className:"fit-image-to-container",src:"https://galio.lt/wp-content/uploads/2020/05/homepage-verslui.jpg"})):r.a.createElement("div",{id:"service-image-container"},r.a.createElement("p",null," Something went wrong.")),o=r.a.createElement("div",{id:"service-text-container"},r.a.createElement("div",{id:"service-title-container"},r.a.createElement("h2",null,e.client)),r.a.createElement("p",null,"Choose a space as uplifting as your new life chapter. A place to clear your mind, to connect, to engage. A place not just to live, but to live well."));return r.a.createElement("div",{id:"services-main-container",className:"main-container",ref:e.reference},"image-left"===e.orientation?l:o,"image-left"===e.orientation?o:l)}}}]);
//# sourceMappingURL=component---src-pages-service-js-73426493d75618869b84.js.map