this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks.logo=function(e){function t(t){for(var r,i,s=t[0],a=t[1],c=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);f.length;)f.shift()();return l.push.apply(l,c||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],r=!0,s=1;s<o.length;s++){var a=o[s];0!==n[a]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={32:0},l=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=a;return l.push([72,1]),o()}({1:function(e,t){e.exports=window.lodash},12:function(e,t){e.exports=window.wp.blocks},2:function(e,t){e.exports=window.wp.i18n},38:function(e,t){e.exports=window.wp.hooks},72:function(e,t,o){"use strict";o.r(t);var r=o(12),n=o(2),l=o(1),i=o(38),s=(o(73),!1);Object(i.addFilter)("blocks.registerBlockType","storeabill/logo",(function(e,t){if("core/image"!==t||s)return e;s=!0;var o=Object(l.cloneDeep)(e);return o.category="storeabill",o.name="storeabill/logo",o.title=Object(n._x)("Logo","storeabill-core","woocommerce-germanized-pro"),o.styles=[],o.example={},Object(r.registerBlockType)("storeabill/logo",o),e}))},73:function(e,t,o){}});
