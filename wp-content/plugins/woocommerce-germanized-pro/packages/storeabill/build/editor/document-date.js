this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks["document-date"]=function(e){function t(t){for(var r,i,l=t[0],a=t[1],h=t[2],v=0,s=[];v<l.length;v++)i=l[v],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);s.length;)s.shift()();return c.push.apply(c,h||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={5:0,16:0,35:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var u=a;return c.push([79,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.lodash},10:function(e,t){e.exports=window.wp.apiFetch},11:function(e,t){e.exports=window.wp.url},12:function(e,t){e.exports=window.wp.blocks},13:function(e,t,n){"use strict";var r=n(1);n(20),n(18);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<span class="placeholder-content '+(Object(r.isEmpty)(t)?"":"sab-tooltip")+'" contenteditable="false" '+(Object(r.isEmpty)(t)?"":'data-tooltip="'+t+'"')+'><span class="editor-placeholder"></span>'+e+"</span>"}function c(e,t,n,c){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return e&&Object(r.includes)(e,n)||(e=Object(r.includes)(e,"{default}")?e.replace("{default}",c||o(n,i)):c||o(n,i)),e.replace(n,t)}function i(e,t,n){return e.replace(n,t)}function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"placeholder-content",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=(new DOMParser).parseFromString(e,"text/html"),c=!1;if((c=r?o.querySelectorAll("[data-shortcode='"+n+"']"):o.getElementsByClassName(n)).length>0){var i=c[0].getElementsByClassName("editor-placeholder");if(i.length>0){for(var l=i[0].nextSibling,a=[];l;)l!==i[0]&&a.push(l),l=l.nextSibling;a.forEach((function(e){i[0].parentNode.removeChild(e)})),i[0].insertAdjacentHTML("afterEnd",t)}else c[0].innerHTML='<span class="editor-placeholder"></span>'+t;c[0].classList.remove("document-shortcode-needs-refresh"),e=o.body.innerHTML}return e}n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return l}))},15:function(e,t){e.exports=window.wp.compose},16:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),c=n(19),i=n.n(c),l=n(25);n(23);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,c=i()(e,["srcElement","size"]);return Object(l.isValidElement)(t)&&Object(l.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},c))},u=n(0),v=n(9),s=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"}),Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"})),d=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z"}),"        ",Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"})),m=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z"}),Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"})),f=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z"}),Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"})),p=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z"}),Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"})),b=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z"}),Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"})),O=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z"}),Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"})),g=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"}),Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"})),w=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z"}),Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"})),z=Object(u.createElement)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(u.createElement)(v.Path,{d:"M8.5,21.4l1.9,0.5l5.2-19.3l-1.9-0.5L8.5,21.4z M3,19h4v-2H5V7h2V5H3V19z M17,5v2h2v10h-2v2h4V5H17z"})),j=Object(u.createElement)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(u.createElement)("path",{d:"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"})),y=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(u.createElement)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),Object(u.createElement)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),E=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(u.createElement)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),V=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(u.createElement)("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"})),S=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(u.createElement)("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"})),H=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(u.createElement)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"})),x=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(u.createElement)("path",{d:"M5 4v3h5.5v12h3V7H19V4z"})),M=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("g",null,Object(u.createElement)("path",{d:"M0,0h24v24H0V0z",fill:"none"}),Object(u.createElement)("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"}))),T=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(u.createElement)("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"})),P=Object(u.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",width:"24",height:"24"},Object(u.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(u.createElement)("path",{d:"M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"}));n.d(t,"Icon",(function(){return h})),n.d(t,"euro",(function(){return s})),n.d(t,"borderTop",(function(){return d})),n.d(t,"borderBottom",(function(){return m})),n.d(t,"borderLeft",(function(){return f})),n.d(t,"borderRight",(function(){return p})),n.d(t,"borderClear",(function(){return b})),n.d(t,"borderInner",(function(){return O})),n.d(t,"borderOuter",(function(){return g})),n.d(t,"borderHorizontal",(function(){return w})),n.d(t,"shortcode",(function(){return z})),n.d(t,"fontSize",(function(){return j})),n.d(t,"date",(function(){return y})),n.d(t,"address",(function(){return E})),n.d(t,"meta",(function(){return V})),n.d(t,"discount",(function(){return S})),n.d(t,"quantity",(function(){return H})),n.d(t,"title",(function(){return x})),n.d(t,"settings",(function(){return M})),n.d(t,"arrowRight",(function(){return T})),n.d(t,"fingerprint",(function(){return P}))},18:function(e,t){e.exports=window.regeneratorRuntime},2:function(e,t){e.exports=window.wp.i18n},25:function(e,t){e.exports=window.React},4:function(e,t){e.exports=window.wp.data},5:function(e,t){e.exports=window.wp.blockEditor},7:function(e,t){e.exports=window.wp.components},79:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(12),c=n(13),i=n(8),l=n(16),a=n(27),h=n.n(a),u=n(6),v=n.n(u),s=n(0),d=n(14),m=n.n(d),f=n(5),p=n(7),b=n(15),O=n(39),g=n.n(O),w=n(32),z=n.n(w),j=n(33),y=n.n(j),E=n(22),V=n.n(E),S=n(34),H=n.n(S),x=n(35),M=n.n(x),T=n(26),P=n.n(T);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P()(e);if(t){var o=P()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return M()(this,n)}}var _=function(e){H()(n,e);var t=C(n);function n(e){var r;return z()(this,n),(r=t.call(this)).state={value:e.value},r.handleChange=r.handleChange.bind(V()(r)),r.triggerChange=r.triggerChange.bind(V()(r)),r}return y()(n,[{key:"componentDidMount",value:function(){this.timer=null}},{key:"handleChange",value:function(e){clearTimeout(this.timer),this.setState({value:e}),this.timer=setTimeout(this.triggerChange,this.props.timeout)}},{key:"triggerChange",value:function(){var e=this.state.value;this.props.onChange(e)}},{key:"render",value:function(){return Object(s.createElement)(p.TextControl,g()({},this.props,{value:this.state.value,onChange:this.handleChange}))}}]),n}(s.Component),B=n(1);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e){var t=e.value,n=e.onChange,o=e.types,c=void 0===o?{}:o,i=e.label,a=void 0===i?Object(r._x)("Change date type","storeabill-core","woocommerce-germanized-pro"):i,h=e.isCollapsed,u=void 0===h||h;return Object(s.createElement)(p.ToolbarGroup,null,Object(s.createElement)(p.DropdownMenu,{label:a,icon:l.settings,controls:Object.keys(c).map((function(e){var r=t===e,o={title:c[e],type:e,icon:"",default:""};return k(k({},o),{},{isActive:r,icon:Object(B.isEmpty)(o.icon)?l.arrowRight:o.icon,role:u?"menuitemradio":void 0,onClick:function(){return n(e)}})}))}))}var F=Object(b.compose)([Object(f.withFontSizes)("fontSize")])((function(e){var t,n=e.attributes,o=e.setAttributes,l=e.fontSize,a=e.setFontSize,u=e.className,d=n.content,b=n.align,O=n.format,g=n.dateType,w=Object(s.useState)(""),z=h()(w,2),j=z[0],y=z[1];Object(s.useEffect)((function(){Object(i.getShortcodePreview)("document?data="+g+"&format="+O).then((function(e){var t=e.content,n=e.shortcode;y(Object(B.isEmpty)(t)?n:t)}))}),[O,g]);var E=m()("document-date placeholder-wrapper",u,(t={},v()(t,"has-text-align-".concat(b),b),v()(t,l.class,l.class),t)),V=(Object(s.useRef)(),Object(i.getDateTypeTitle)(g)),S=Object(f.__experimentalUseColors)([{name:"textColor",property:"color"}],[l.size]),H=S.TextColor,x=S.InspectorControlsColorPanel;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(f.BlockControls,null,Object(s.createElement)(D,{label:Object(r._x)("Change date type","storeabill-core","woocommerce-germanized-pro"),value:g,types:Object(i.getDateTypes)(),onChange:function(e){return o({dateType:e})}}),Object(s.createElement)(f.AlignmentToolbar,{value:b,onChange:function(e){return o({align:e})}})),Object(s.createElement)(f.InspectorControls,null,Object(s.createElement)(p.PanelBody,null,Object(s.createElement)(_,{label:Object(r._x)("Date format","storeabill-core","woocommerce-germanized-pro"),value:O,onChange:function(e){o({format:e})},timeout:1500,type:"text"})),Object(s.createElement)(p.PanelBody,{title:Object(r._x)("Typography","storeabill-core","woocommerce-germanized-pro")},Object(s.createElement)(f.FontSizePicker,{value:l.size,onChange:a}))),x,Object(s.createElement)(H,null,Object(s.createElement)(f.RichText,{tagName:"p",value:Object(c.c)(d,j,"{content}","",V),placeholder:Object(c.c)(void 0,j,"{content}","",V),className:E,onChange:function(e){return o({content:Object(c.d)(e,"{content}")})},allowedFormats:i.FORMAT_TYPES,style:{fontSize:l.size?l.size+"px":void 0}})))}));var A={title:Object(r._x)("Document Date","storeabill-core","woocommerce-germanized-pro"),description:Object(r._x)("Inserts the document date.","storeabill-core","woocommerce-germanized-pro"),category:"storeabill",example:{},icon:l.date,supports:{html:!1,className:!1},attributes:{content:{type:"string",source:"html",selector:"p",default:Object(c.a)("{content}",Object(r._x)("Date","storeabill-core","woocommerce-germanized-pro"))},align:{type:"string",default:"left"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},format:{type:"string",default:Object(i.getSetting)("dateFormat")},dateType:{type:"string",default:"date"}},edit:F,save:function(e){var t,n=e.attributes,r=n.content,o=n.align,c=n.textColor,i=n.customTextColor,l=n.fontSize,a=n.customFontSize,h=Object(f.getColorClassName)("color",c),u=Object(f.getFontSizeClass)(l),d=m()((t={"has-text-color":c||i},v()(t,"has-text-align-".concat(o),o),v()(t,u,u),v()(t,h,h),t)),p={color:h?void 0:i,fontSize:u?void 0:a};return Object(s.createElement)(f.RichText.Content,{tagName:"p",className:d,value:r,style:p})}};Object(o.registerBlockType)("storeabill/document-date",A)},8:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),c=n(17);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a="object"===("undefined"==typeof sabSettings?"undefined":n.n(c)()(sabSettings))?sabSettings:{},h=l(l({},{itemTotalTypes:[],itemMetaTypes:[],itemTableBlockTypes:[],discountTotalTypes:{}}),a);function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},r=h.hasOwnProperty(e)?h[e]:t;return n(r,t)}var v=n(2),s=h.itemTotalTypes,d=h.itemMetaTypes,m=h.itemTableBlockTypes,f=h.discountTotalTypes,p=["core/bold","core/italic","core/text-color","core/underline","storeabill/document-shortcode","storeabill/font-size"],b=n(4),O=n(1),g=n(10),w=n.n(g),z=n(11);n(7);function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};h[e]=n(t)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";return d.hasOwnProperty(e)?d[e]:[]}function E(e,t){Array.isArray(t)||(t=[t]);var n=Object(b.select)("core/block-editor").getBlockParents(e);if(n.length>0){var r=Object(b.select)("core/block-editor").getBlock(n[0]);if(Object(O.includes)(t,r.name))return!0}return!1}function V(e){var t=u("supports");return Object(O.includes)(t,e)}function S(e){var t=u("defaultInnerBlocks");return t.hasOwnProperty(e)?t[e]:[]}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product",n=y(t),r=n.filter((function(t){if(e===t.type)return!0})),o=r.length>0?r[0].preview:"",c=M(t),i=c.meta_data.filter((function(t){if(e===t.key)return!0}));return i.length>0?i[0].value:o}function x(){return u("preview",{})}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product",t=x();return t[e+"_items"][0]}function T(e){var t=s.filter((function(t){if(e===t.type)return!0}));return t&&t[0]?t[0].default:""}function P(e){var t=s.filter((function(t){if(e===t.type)return!0}));return t&&t[0]?t[0].title:""}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"total",t=x(),n=t.totals,r=n.filter((function(t){return t.type===e}));return r.length>0?r[0].total_formatted:0}function _(){var e=x().tax_items;return e.length>0?e[0].rate.percent:"{rate}"}function B(){return x().discount_notice}function G(){var e=x().fee_items;return e.length>0?e[0].name:"{name}"}function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"read",r={top:e.top?e.top:t.top,left:e.left?e.left:t.left,right:e.right?e.right:t.right,bottom:e.bottom?e.bottom:t.bottom};if("edit"===n){var o=u("marginTypesSupported"),c={};return o.forEach((function(e){c[e]=r[e]})),c}return r}function D(){return"document_template"===Object(b.select)("core/editor").getCurrentPostType()}function F(){var e=void 0,t=(0,Object(b.select)("core/block-editor").getBlocks)().filter((function(e){if("storeabill/document-styles"===e.name)return e}));return t.length>0&&(e=t[0]),e}function A(){return u("fonts")}function I(e){var t=A().filter((function(t){if(t.name===e)return!0}));if(!Object(O.isEmpty)(t))return t[0]}function L(){var e=(0,Object(b.select)("core/editor").getEditedPostAttribute)("meta");return e._fonts?e._fonts:void 0}function R(e){e=e||L();var t=Object(z.addQueryArgs)("/sab/v1/preview_fonts/css",{fonts:e,display_types:u("fontDisplayTypes")});return w()({path:t})}function N(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=e;return"before_discounts"===n&&(r+="_subtotal",Object(O.includes)(e,"total")&&(r=e.replace("total","")),"total"===e&&(r="subtotal")),!1===t&&(Object(O.includes)(e,"_total")&&(r=r.replace("_total","")),r+="_net"),r+"_formatted"}function Y(e){var t="";return"document"===e?t=Object(v._x)("Document","storeabill-core","woocommerce-germanized-pro"):"document_item"===e?t=Object(v._x)("Document Item","storeabill-core","woocommerce-germanized-pro"):"document_total"===e&&(t=Object(v._x)("Document Total","storeabill-core","woocommerce-germanized-pro")),t}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=u("shortcodes"),o=Object.entries(r),c={};o.forEach((function(r,o){var i=r[0];if(!(e.length>0&&e!==i&&"blocks"!==i||"blocks"===i&&0===t.length)){var l=[],a=Y(i);if(Object(O.isArray)(r[1]))l=r[1].flat();else if(t.length>0){l=r[1].hasOwnProperty(t)?r[1][t]:[];var h=Object(b.select)("core/blocks").getBlockType(t);a=h?h.title:t}c.hasOwnProperty(i)||(c[i]={label:a,value:i,children:{}}),l.map((function(e){if(!c[i].children.hasOwnProperty(e.shortcode)){if(!n&&e.hasOwnProperty("headerFooterOnly")&&e.headerFooterOnly)return;c[i].children[e.shortcode]={value:e.shortcode,label:e.title}}}))}}));var i=[];return Object.entries(c).map((function(e){var t=Object.values(e[1].children).flat();Object(O.isEmpty)(t)||i.push({value:e[1].value,label:e[1].label,children:t})})),i}function J(e){var t=u("shortcodes"),n=Object.entries(t),r={};return n.forEach((function(e,t){(Object(O.isArray)(e[1])?e[1].flat():Object.values(e[1]).flat()).map((function(e){r.hasOwnProperty(e.shortcode)||(r[e.shortcode]=e)}))})),!!r.hasOwnProperty(e)&&r[e]}function K(e){var t=J(e);return t?t.title:""}function Q(){return u("dateTypes")}function U(e){var t=u("dateTypes"),n=Object(v._x)("Date","storeabill-core","woocommerce-germanized-pro");return Object.entries(t).map((function(t){t[0]===e&&(n=t[1])})),n}function W(e){var t=Object(z.addQueryArgs)("/sab/v1/preview_shortcodes",{query:e,document_type:u("documentType")});return w()({path:t})}n.d(t,"getItemMetaTypes",(function(){return y})),n.d(t,"blockHasParent",(function(){return E})),n.d(t,"documentTypeSupports",(function(){return V})),n.d(t,"getDefaultInnerBlocks",(function(){return S})),n.d(t,"getItemMetaTypePreview",(function(){return H})),n.d(t,"getPreview",(function(){return x})),n.d(t,"getPreviewItem",(function(){return M})),n.d(t,"getItemTotalTypeDefaultTitle",(function(){return T})),n.d(t,"getItemTotalTypeTitle",(function(){return P})),n.d(t,"getPreviewTotal",(function(){return C})),n.d(t,"getPreviewTaxRate",(function(){return _})),n.d(t,"getPreviewDiscountNotice",(function(){return B})),n.d(t,"getPreviewFeeName",(function(){return G})),n.d(t,"formatMargins",(function(){return k})),n.d(t,"isDocumentTemplate",(function(){return D})),n.d(t,"getDocumentStylesBlock",(function(){return F})),n.d(t,"getFonts",(function(){return A})),n.d(t,"getFont",(function(){return I})),n.d(t,"getCurrentFonts",(function(){return L})),n.d(t,"getFontsCSS",(function(){return R})),n.d(t,"getItemTotalKey",(function(){return N})),n.d(t,"getShortcodeCategoryTitle",(function(){return Y})),n.d(t,"getAvailableShortcodeTree",(function(){return q})),n.d(t,"getShortcodeData",(function(){return J})),n.d(t,"getShortcodeTitle",(function(){return K})),n.d(t,"getDateTypes",(function(){return Q})),n.d(t,"getDateTypeTitle",(function(){return U})),n.d(t,"getShortcodePreview",(function(){return W})),n.d(t,"ITEM_TOTAL_TYPES",(function(){return s})),n.d(t,"ITEM_META_TYPES",(function(){return d})),n.d(t,"ITEM_TABLE_BLOCK_TYPES",(function(){return m})),n.d(t,"DISCOUNT_TOTAL_TYPES",(function(){return f})),n.d(t,"FORMAT_TYPES",(function(){return p})),n.d(t,"setSetting",(function(){return j})),n.d(t,"getSetting",(function(){return u}))},9:function(e,t){e.exports=window.wp.primitives}});