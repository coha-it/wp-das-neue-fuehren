this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks["item-tax-rate"]=function(t){function e(e){for(var r,c,l=e[0],a=e[1],u=e[2],f=0,d=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={31:0,37:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var l=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=a;return i.push([88,0]),n()}({0:function(t,e){t.exports=window.wp.element},1:function(t,e){t.exports=window.lodash},10:function(t,e){t.exports=window.wp.url},11:function(t,e){t.exports=window.wp.primitives},12:function(t,e){t.exports=window.wp.blocks},13:function(t,e,n){"use strict";var r=n(1);n(20),n(18);function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<span class="placeholder-content '+(Object(r.isEmpty)(e)?"":"sab-tooltip")+'" contenteditable="false" '+(Object(r.isEmpty)(e)?"":'data-tooltip="'+e+'"')+'><span class="editor-placeholder"></span>'+t+"</span>"}function i(t,e,n,i){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return t&&Object(r.includes)(t,n)||(t=Object(r.includes)(t,"{default}")?t.replace("{default}",i||o(n,c)):i||o(n,c)),t.replace(n,e)}function c(t,e,n){return t.replace(n,e)}function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"placeholder-content",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=(new DOMParser).parseFromString(t,"text/html"),i=!1;if((i=r?o.querySelectorAll("[data-shortcode='"+n+"']"):o.getElementsByClassName(n)).length>0){var c=i[0].getElementsByClassName("editor-placeholder");if(c.length>0){for(var l=c[0].nextSibling,a=[];l;)l!==c[0]&&a.push(l),l=l.nextSibling;a.forEach((function(t){c[0].parentNode.removeChild(t)})),c[0].insertAdjacentHTML("afterEnd",e)}else i[0].innerHTML='<span class="editor-placeholder"></span>'+e;i[0].classList.remove("document-shortcode-needs-refresh"),t=o.body.innerHTML}return t}n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return l}))},16:function(t,e){t.exports=window.wp.compose},18:function(t,e){t.exports=window.regeneratorRuntime},2:function(t,e){t.exports=window.wp.i18n},4:function(t,e){t.exports=window.wp.data},5:function(t,e){t.exports=window.wp.blockEditor},7:function(t,e){t.exports=window.wp.components},8:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n.n(r),i=n(17);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a="object"===("undefined"==typeof sabSettings?"undefined":n.n(i)()(sabSettings))?sabSettings:{},u=l(l({},{itemTotalTypes:[],itemMetaTypes:[],itemTableBlockTypes:[],discountTotalTypes:{}}),a);function s(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},r=u.hasOwnProperty(t)?u[t]:e;return n(r,e)}var f=n(2),d=u.itemTotalTypes,p=u.itemMetaTypes,b=u.itemTableBlockTypes,h=u.discountTotalTypes,m=["core/bold","core/italic","core/text-color","core/underline","storeabill/document-shortcode","storeabill/font-size"],v=n(4),g=n(1),y=n(9),O=n.n(y),T=n(10);n(7);function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};u[t]=n(e)}function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";return p.hasOwnProperty(t)?p[t]:[]}function _(t,e){Array.isArray(e)||(e=[e]);var n=Object(v.select)("core/block-editor").getBlockParents(t);if(n.length>0){var r=Object(v.select)("core/block-editor").getBlock(n[0]);if(Object(g.includes)(e,r.name))return!0}return!1}function x(t){var e=s("supports");return Object(g.includes)(e,t)}function P(t){var e=s("defaultInnerBlocks");return e.hasOwnProperty(t)?e[t]:[]}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product",n=j(e),r=n.filter((function(e){if(t===e.type)return!0})),o=r.length>0?r[0].preview:"",i=k(e),c=i.meta_data.filter((function(e){if(t===e.key)return!0}));return c.length>0?c[0].value:o}function E(){return s("preview",{})}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product",e=E();return e[t+"_items"][0]}function C(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].default:""}function B(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].title:""}function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"total",e=E(),n=e.totals,r=n.filter((function(e){return e.type===t}));return r.length>0?r[0].total_formatted:0}function F(){var t=E().tax_items;return t.length>0?t[0].rate.percent:"{rate}"}function M(){return E().discount_notice}function A(){var t=E().fee_items;return t.length>0?t[0].name:"{name}"}function I(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"read",r={top:t.top?t.top:e.top,left:t.left?t.left:e.left,right:t.right?t.right:e.right,bottom:t.bottom?t.bottom:e.bottom};if("edit"===n){var o=s("marginTypesSupported"),i={};return o.forEach((function(t){i[t]=r[t]})),i}return r}function z(){return"document_template"===Object(v.select)("core/editor").getCurrentPostType()}function N(){return s("allowedBlockTypes")}function R(){var t=void 0,e=(0,Object(v.select)("core/block-editor").getBlocks)().filter((function(t){if("storeabill/document-styles"===t.name)return t}));return e.length>0&&(t=e[0]),t}function L(){return s("fonts")}function Y(t){var e=L().filter((function(e){if(e.name===t)return!0}));if(!Object(g.isEmpty)(e))return e[0]}function H(){var t=(0,Object(v.select)("core/editor").getEditedPostAttribute)("meta");return t._fonts?t._fonts:void 0}function q(t){t=t||H();var e=Object(T.addQueryArgs)("/sab/v1/preview_fonts/css",{fonts:t,display_types:s("fontDisplayTypes")});return O()({path:e})}function J(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=t;return"before_discounts"===n&&(r+="_subtotal",Object(g.includes)(t,"total")&&(r=t.replace("total","")),"total"===t&&(r="subtotal")),!1===e&&(Object(g.includes)(t,"_total")&&(r=r.replace("_total","")),r+="_net"),r+"_formatted"}function K(t){var e="";return"document"===t?e=Object(f._x)("Document","storeabill-core","woocommerce-germanized-pro"):"document_item"===t?e=Object(f._x)("Document Item","storeabill-core","woocommerce-germanized-pro"):"document_total"===t&&(e=Object(f._x)("Document Total","storeabill-core","woocommerce-germanized-pro")),e}function Q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=s("shortcodes"),o=Object.entries(r),i={};o.forEach((function(r,o){var c=r[0];if(!(t.length>0&&t!==c&&"blocks"!==c||"blocks"===c&&0===e.length)){var l=[],a=K(c);if(Object(g.isArray)(r[1]))l=r[1].flat();else if(e.length>0){l=r[1].hasOwnProperty(e)?r[1][e]:[];var u=Object(v.select)("core/blocks").getBlockType(e);a=u?u.title:e}i.hasOwnProperty(c)||(i[c]={label:a,value:c,children:{}}),l.map((function(t){if(!i[c].children.hasOwnProperty(t.shortcode)){if(!n&&t.hasOwnProperty("headerFooterOnly")&&t.headerFooterOnly)return;i[c].children[t.shortcode]={value:t.shortcode,label:t.title}}}))}}));var c=[];return Object.entries(i).map((function(t){var e=Object.values(t[1].children).flat();Object(g.isEmpty)(e)||c.push({value:t[1].value,label:t[1].label,children:e})})),c}function U(t){var e=s("shortcodes"),n=Object.entries(e),r={};return n.forEach((function(t,e){(Object(g.isArray)(t[1])?t[1].flat():Object.values(t[1]).flat()).map((function(t){r.hasOwnProperty(t.shortcode)||(r[t.shortcode]=t)}))})),!!r.hasOwnProperty(t)&&r[t]}function G(t){var e=U(t);return e?e.title:""}function V(){return s("dateTypes")}function W(){return s("barcodeTypes")}function X(){return s("barcodeCodeTypes")}function Z(t){var e=s("dateTypes"),n=Object(f._x)("Date","storeabill-core","woocommerce-germanized-pro");return Object.entries(e).map((function(e){e[0]===t&&(n=e[1])})),n}function $(t){var e=Object(T.addQueryArgs)("/sab/v1/preview_shortcodes",{query:t,document_type:s("documentType")});return O()({path:e})}n.d(e,"getItemMetaTypes",(function(){return j})),n.d(e,"blockHasParent",(function(){return _})),n.d(e,"documentTypeSupports",(function(){return x})),n.d(e,"getDefaultInnerBlocks",(function(){return P})),n.d(e,"getItemMetaTypePreview",(function(){return S})),n.d(e,"getPreview",(function(){return E})),n.d(e,"getPreviewItem",(function(){return k})),n.d(e,"getItemTotalTypeDefaultTitle",(function(){return C})),n.d(e,"getItemTotalTypeTitle",(function(){return B})),n.d(e,"getPreviewTotal",(function(){return D})),n.d(e,"getPreviewTaxRate",(function(){return F})),n.d(e,"getPreviewDiscountNotice",(function(){return M})),n.d(e,"getPreviewFeeName",(function(){return A})),n.d(e,"formatMargins",(function(){return I})),n.d(e,"isDocumentTemplate",(function(){return z})),n.d(e,"getAllowedBlockTypes",(function(){return N})),n.d(e,"getDocumentStylesBlock",(function(){return R})),n.d(e,"getFonts",(function(){return L})),n.d(e,"getFont",(function(){return Y})),n.d(e,"getCurrentFonts",(function(){return H})),n.d(e,"getFontsCSS",(function(){return q})),n.d(e,"getItemTotalKey",(function(){return J})),n.d(e,"getShortcodeCategoryTitle",(function(){return K})),n.d(e,"getAvailableShortcodeTree",(function(){return Q})),n.d(e,"getShortcodeData",(function(){return U})),n.d(e,"getShortcodeTitle",(function(){return G})),n.d(e,"getDateTypes",(function(){return V})),n.d(e,"getBarcodeTypes",(function(){return W})),n.d(e,"getBarcodeCodeTypes",(function(){return X})),n.d(e,"getDateTypeTitle",(function(){return Z})),n.d(e,"getShortcodePreview",(function(){return $})),n.d(e,"ITEM_TOTAL_TYPES",(function(){return d})),n.d(e,"ITEM_META_TYPES",(function(){return p})),n.d(e,"ITEM_TABLE_BLOCK_TYPES",(function(){return b})),n.d(e,"DISCOUNT_TOTAL_TYPES",(function(){return h})),n.d(e,"FORMAT_TYPES",(function(){return m})),n.d(e,"setSetting",(function(){return w})),n.d(e,"getSetting",(function(){return s}))},88:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(12),i=n(13),c=n(112),l=n(0),a=n(5),u=n(8),s=n(7),f=n(16),d=Object(f.compose)([Object(a.withFontSizes)("fontSize")])((function(t){var e=t.attributes,n=t.setAttributes,o=t.fontSize,c=t.setFontSize,f=(t.className,e.content),d=Object(u.getPreviewItem)().tax_rates[0].formatted_percentage_html,p=Object(a.__experimentalUseColors)([{name:"textColor",property:"color"}],[o.size]),b=p.TextColor,h=p.InspectorControlsColorPanel;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(a.InspectorControls,null,Object(l.createElement)(s.PanelBody,{title:Object(r._x)("Typography","storeabill-core","woocommerce-germanized-pro")},Object(l.createElement)(a.FontSizePicker,{value:o.size,onChange:c}))),h,Object(l.createElement)("div",null,Object(l.createElement)(b,null,Object(l.createElement)(a.RichText,{tagName:"p",value:Object(i.c)(f,d,"{content}",!1,Object(r._x)("Tax Rate","storeabill-core","woocommerce-germanized-pro")),placeholder:Object(i.c)(void 0,d,"{content}",!1,Object(r._x)("Tax Rate","storeabill-core","woocommerce-germanized-pro")),className:"sab-block-item-content placeholder-wrapper",onChange:function(t){return n({content:Object(i.d)(t,"{content}")})},allowedFormats:u.FORMAT_TYPES,style:{fontSize:o.size?o.size+"px":void 0}}))))})),p=n(6),b=n.n(p),h=n(15),m=n.n(h);var v={title:Object(r._x)("Item Tax Rate(s)","storeabill-core","woocommerce-germanized-pro"),description:Object(r._x)("Inserts the item tax rate(s).","storeabill-core","woocommerce-germanized-pro"),category:"storeabill",icon:c.a,parent:["storeabill/item-table-column"],example:{},attributes:{textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},content:{type:"string",source:"html",selector:"p.sab-block-item-content",default:""}},edit:d,save:function(t){var e,n=t.attributes,r=n.content,o=n.textColor,i=n.customTextColor,c=n.fontSize,u=n.customFontSize,s=Object(a.getColorClassName)("color",o),f=Object(a.getFontSizeClass)(c),d=m()("sab-block-item-content",(e={"has-text-color":o||i},b()(e,f,f),b()(e,s,s),e)),p={color:s?void 0:i,fontSize:f?void 0:u};return Object(l.createElement)(a.RichText.Content,{tagName:"p",className:d,value:r,style:p})}};Object(o.registerBlockType)("storeabill/item-tax-rate",v)},9:function(t,e){t.exports=window.wp.apiFetch}});
