(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{SJ6J:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),c=t.n(n);t("YS+O");a.default=function(e){for(var a=Object(n.useState)(0),t=a[0],l=a[1],i=function(e){var a=t+=e;a>r.length-1&&(a=0),a<0&&(a=r.length-1),l(a)},r=e.dataArray?e.dataArray:{bathroom:[{image1:{caption:"before",url:"https://assets1.ignimgs.com/2020/08/19/racing-wheels-1597804923658.jpg?dpr=2&width=300&crop=16%3A9"},image2:{caption:"after",url:"https://www.mastercook.com/app/Image/9211810/2887073.jpg"}}]},m={width:"100%",objectFit:"cover",maxHeight:e.maxHeight,maxWidth:e.maxWidth},s=r[t].url,o=r[t].caption,d=[],u=function(e){d.push(c.a.createElement("div",null,c.a.createElement("span",{className:"dot",onClick:function(){return l(e)}})))},h=0;h<r.length;h++)u(h);return c.a.createElement("div",{id:"image-component-container"},c.a.createElement("div",{className:"slideshow-container"},c.a.createElement("div",{className:"mySlides fade"},c.a.createElement("img",{src:s,style:m}),c.a.createElement("div",{className:"text"},c.a.createElement("p",null,o))),c.a.createElement("a",{className:"prev",onClick:function(){return i(-1)}},"❮"),c.a.createElement("a",{className:"next",onClick:function(){return i(1)}},"❯")),c.a.createElement("br",null),c.a.createElement("div",{id:"dot-container"},d))}},"YS+O":function(e,a,t){},wc77:function(e,a,t){},yp8A:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),c=t.n(n),l=t("SJ6J");t("wc77");a.default=function(e){for(var a=Object(n.useState)(0),t=a[0],i=a[1],r=Object(n.useRef)(null),m=(Object(n.useRef)(null),c.a.createElement("div",{className:"modal",ref:r},c.a.createElement("div",{className:"overlay"}),c.a.createElement("span",{className:"close",onClick:function(){r.current.style.display="none",document.body.style.overflow="visible"}},"X"),c.a.createElement("div",{id:"image-holder-container",style:{width:e.maxWidth,height:e.maxHeight}},c.a.createElement(l.default,{dataArray:e.dataArray?e.dataArray[t].data:null,maxHeight:e.maxHeight,maxWidth:e.maxWidth}),t))),s=function(e){i(e),r.current.style.display="flex",document.body.style.overflow="hidden"},o=[],d=[],u=[],h=0,p=function(a){var t=e.dataArray[a];switch(h){case 0:o.push(c.a.createElement("div",{className:"thumbnail-container",onClick:function(){return s(a)}},c.a.createElement("img",{className:"thumbnail-image",src:t.thumbnail}),c.a.createElement("div",{className:"caption-overlay"},c.a.createElement("p",{className:"caption-text"},t.caption))));break;case 1:d.push(c.a.createElement("div",{className:"thumbnail-container",onClick:function(){return s(a)}},c.a.createElement("img",{className:"thumbnail-image",src:t.thumbnail}),c.a.createElement("div",{className:"caption-overlay"},c.a.createElement("p",{className:"caption-text"},t.caption))));break;case 2:u.push(c.a.createElement("div",{className:"thumbnail-container",onClick:function(){return s(a)}},c.a.createElement("img",{className:"thumbnail-image",src:t.thumbnail}),c.a.createElement("div",{className:"caption-overlay"},c.a.createElement("p",{className:"caption-text"},t.caption))))}2===h?h=0:h++},v=0;v<e.dataArray.length;v++)p(v);return console.log("Redner again"),c.a.createElement("div",{style:{paddingTop:"15vh"}},c.a.createElement("h2",{id:"gallery-title-text"},"Our Residential Work"),c.a.createElement("div",{className:"main-container",id:"gallery-container"},c.a.createElement("div",{className:"gallery-container-column"},o),c.a.createElement("div",{className:"gallery-container-column"},d),c.a.createElement("div",{className:"gallery-container-column"},u)),m)}}}]);
//# sourceMappingURL=component---src-pages-gallery-js-6411101935faeaa11116.js.map