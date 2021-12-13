this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks["document-margins-panel"]=function(t){function e(e){for(var r,c,u=e[0],a=e[1],l=e[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={9:0,38:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=a;return i.push([103,1,0]),n()}({0:function(t,e){t.exports=window.wp.element},1:function(t,e){t.exports=window.lodash},103:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(6),i=(n(29),n(8)),c=n(3),u=n(9),a=n(19),l=n(1);n(61);var s=Object(o.withSelect)((function(t,e){var n=e.metaKey,r=e.defaultMargins,o=(0,t("core/editor").getEditedPostAttribute)("meta")[n];return{margins:Object(u.formatMargins)(o,r,"edit")}})),f=Object(o.withDispatch)((function(t,e){var n=e.metaKey,r=t("core/editor").editPost;return{onUpdateMargins:function(t){var e={};e[n]=t,r({meta:e})}}})),d=Object(a.compose)(s,f)((function(t){t.metaKey;var e=t.margins,n=t.onUpdateMargins,o=(t.defaultMargins,t.marginTypesSupported),u=function(t,r){e[r]=t,n(e)},a=function(t){var e=o||["left","top","bottom","center"];return Object(l.includes)(e,t)};return Object(r.createElement)("div",{className:"sab-margins-wrapper"},a("left")&&Object(r.createElement)(i.TextControl,{label:Object(c._x)("Left","storeabill-core","woocommerce-germanized-pro"),value:e.left,onChange:function(t){return u(t,"left")},type:"number",step:"0.1"}),a("top")&&Object(r.createElement)(i.TextControl,{label:Object(c._x)("Top","storeabill-core","woocommerce-germanized-pro"),value:e.top,onChange:function(t){return u(t,"top")},type:"number",step:"0.1"}),a("right")&&Object(r.createElement)(i.TextControl,{label:Object(c._x)("Right","storeabill-core","woocommerce-germanized-pro"),value:e.right,onChange:function(t){return u(t,"right")},type:"number",step:"0.1"}),a("bottom")&&Object(r.createElement)(i.TextControl,{label:Object(c._x)("Bottom","storeabill-core","woocommerce-germanized-pro"),value:e.bottom,onChange:function(t){return u(t,"bottom")},type:"number",step:"0.1"}))})),p=n(30),b=n(31);Object(b.registerPlugin)("storeabill-margins-panel",{render:function(){return Object(r.createElement)(p.PluginDocumentSettingPanel,{name:"sab-margins-panel",title:Object(c._x)("Margins (cm)","storeabill-core","woocommerce-germanized-pro"),className:"sab-margins-panel"},Object(r.createElement)(i.PanelRow,{className:"sab-margins-panel-row"},Object(r.createElement)(d,{metaKey:"_margins",defaultMargins:Object(u.getSetting)("defaultMargins"),marginTypesSupported:Object(u.getSetting)("marginTypesSupported")})))},icon:""})},12:function(t,e){t.exports=window.wp.apiFetch},13:function(t,e){t.exports=window.wp.url},19:function(t,e){t.exports=window.wp.compose},29:function(t,e){t.exports=window.wp.domReady},3:function(t,e){t.exports=window.wp.i18n},30:function(t,e){t.exports=window.wp.editPost},31:function(t,e){t.exports=window.wp.plugins},6:function(t,e){t.exports=window.wp.data},61:function(t,e,n){},8:function(t,e){t.exports=window.wp.components},9:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),i=n(22);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a="object"===("undefined"==typeof sabSettings?"undefined":n.n(i)()(sabSettings))?sabSettings:{},l=u(u({},{itemTotalTypes:[],itemMetaTypes:[],itemTableBlockTypes:[],discountTotalTypes:{}}),a);function s(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},r=l.hasOwnProperty(t)?l[t]:e;return n(r,e)}var f=n(3),d=l.itemTotalTypes,p=l.itemMetaTypes,b=l.itemTableBlockTypes,g=l.discountTotalTypes,m=["core/bold","core/italic","core/text-color","core/underline","storeabill/document-shortcode","storeabill/font-size"],v=n(6),y=n(1),h=n(12),O=n.n(h),w=n(13);n(8);function T(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};l[t]=n(e)}function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";return p.hasOwnProperty(t)?p[t]:[]}function _(t,e){Array.isArray(e)||(e=[e]);var n=Object(v.select)("core/block-editor").getBlockParents(t);if(n.length>0){var r=Object(v.select)("core/block-editor").getBlock(n[0]);if(Object(y.includes)(e,r.name))return!0}return!1}function P(t){var e=s("supports");return Object(y.includes)(e,t)}function S(t){var e=s("defaultInnerBlocks");return e.hasOwnProperty(t)?e[t]:[]}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product",n=j(e),r=n.filter((function(e){if(t===e.type)return!0})),o=r.length>0?r[0].preview:"",i=k(e),c=i.meta_data.filter((function(e){if(t===e.key)return!0}));return c.length>0?c[0].value:o}function E(){return s("preview",{})}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product",e=E();return e[t+"_items"][0]}function M(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].default:""}function D(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].title:""}function B(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"total",e=E(),n=e.totals,r=n.filter((function(e){return e.type===t}));return r.length>0?r[0].total_formatted:0}function C(){var t=E().tax_items;return t.length>0?t[0].rate.percent:"{rate}"}function A(){return E().formatted_discount_notice}function I(){var t=E().fee_items;return t.length>0?t[0].name:"{name}"}function F(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"read",r={top:t.top?t.top:e.top,left:t.left?t.left:e.left,right:t.right?t.right:e.right,bottom:t.bottom?t.bottom:e.bottom};if("edit"===n){var o=s("marginTypesSupported"),i={};return o.forEach((function(t){i[t]=r[t]})),i}return r}function K(){return"document_template"===Object(v.select)("core/editor").getCurrentPostType()}function N(){return s("allowedBlockTypes")}function L(){var t=void 0,e=(0,Object(v.select)("core/block-editor").getBlocks)().filter((function(t){if("storeabill/document-styles"===t.name)return t}));return e.length>0&&(t=e[0]),t}function R(){return s("fonts")}function Y(t){var e=R().filter((function(e){if(e.name===t)return!0}));if(!Object(y.isEmpty)(e))return e[0]}function U(){var t=(0,Object(v.select)("core/editor").getEditedPostAttribute)("meta");return t._fonts?t._fonts:void 0}function J(t){t=t||U();var e=Object(w.addQueryArgs)("/sab/v1/preview_fonts/css",{fonts:t,display_types:s("fontDisplayTypes")});return O()({path:e})}function Q(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=t;return"before_discounts"===n&&(r+="_subtotal",Object(y.includes)(t,"total")&&(r=t.replace("total","")),"total"===t&&(r="subtotal")),!1===e&&(Object(y.includes)(t,"_total")&&(r=r.replace("_total","")),r+="_net"),r+"_formatted"}function q(t){var e="";return"document"===t?e=Object(f._x)("Document","storeabill-core","woocommerce-germanized-pro"):"document_item"===t?e=Object(f._x)("Document Item","storeabill-core","woocommerce-germanized-pro"):"document_total"===t?e=Object(f._x)("Document Total","storeabill-core","woocommerce-germanized-pro"):"setting"===t&&(e=Object(f._x)("Settings","storeabill-core","woocommerce-germanized-pro")),e}function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=s("shortcodes"),o=Object.entries(r),i=["blocks","setting"],c={};o.forEach((function(r,o){var u=r[0];if((!(t.length>0&&t!==u)||Object(y.includes)(i,u))&&("blocks"!==u||0!==e.length)){var a=[],l=q(u);if(Object(y.isArray)(r[1]))a=r[1].flat();else if(e.length>0){a=r[1].hasOwnProperty(e)?r[1][e]:[];var s=Object(v.select)("core/blocks").getBlockType(e);l=s?s.title:e}c.hasOwnProperty(u)||(c[u]={label:l,value:u,children:{}}),a.map((function(t){if(!c[u].children.hasOwnProperty(t.shortcode)){if(!n&&t.hasOwnProperty("headerFooterOnly")&&t.headerFooterOnly)return;c[u].children[t.shortcode]={value:t.shortcode,label:t.title}}}))}}));var u=[];return Object.entries(c).map((function(t){var e=Object.values(t[1].children).flat();Object(y.isEmpty)(e)||u.push({value:t[1].value,label:t[1].label,children:e})})),u}function H(t){var e=s("shortcodes"),n=Object.entries(e),r={};return n.forEach((function(t,e){(Object(y.isArray)(t[1])?t[1].flat():Object.values(t[1]).flat()).map((function(t){r.hasOwnProperty(t.shortcode)||(r[t.shortcode]=t)}))})),!!r.hasOwnProperty(t)&&r[t]}function G(t){var e=H(t);return e?e.title:""}function V(){return s("dateTypes")}function W(){return s("barcodeTypes")}function X(){return s("barcodeCodeTypes")}function Z(t){var e=s("dateTypes"),n=Object(f._x)("Date","storeabill-core","woocommerce-germanized-pro");return Object.entries(e).map((function(e){e[0]===t&&(n=e[1])})),n}function $(t){var e=Object(w.addQueryArgs)("/sab/v1/preview_shortcodes",{query:t,document_type:s("documentType")});return O()({path:e})}n.d(e,"getItemMetaTypes",(function(){return j})),n.d(e,"blockHasParent",(function(){return _})),n.d(e,"documentTypeSupports",(function(){return P})),n.d(e,"getDefaultInnerBlocks",(function(){return S})),n.d(e,"getItemMetaTypePreview",(function(){return x})),n.d(e,"getPreview",(function(){return E})),n.d(e,"getPreviewItem",(function(){return k})),n.d(e,"getItemTotalTypeDefaultTitle",(function(){return M})),n.d(e,"getItemTotalTypeTitle",(function(){return D})),n.d(e,"getPreviewTotal",(function(){return B})),n.d(e,"getPreviewTaxRate",(function(){return C})),n.d(e,"getPreviewDiscountNotice",(function(){return A})),n.d(e,"getPreviewFeeName",(function(){return I})),n.d(e,"formatMargins",(function(){return F})),n.d(e,"isDocumentTemplate",(function(){return K})),n.d(e,"getAllowedBlockTypes",(function(){return N})),n.d(e,"getDocumentStylesBlock",(function(){return L})),n.d(e,"getFonts",(function(){return R})),n.d(e,"getFont",(function(){return Y})),n.d(e,"getCurrentFonts",(function(){return U})),n.d(e,"getFontsCSS",(function(){return J})),n.d(e,"getItemTotalKey",(function(){return Q})),n.d(e,"getShortcodeCategoryTitle",(function(){return q})),n.d(e,"getAvailableShortcodeTree",(function(){return z})),n.d(e,"getShortcodeData",(function(){return H})),n.d(e,"getShortcodeTitle",(function(){return G})),n.d(e,"getDateTypes",(function(){return V})),n.d(e,"getBarcodeTypes",(function(){return W})),n.d(e,"getBarcodeCodeTypes",(function(){return X})),n.d(e,"getDateTypeTitle",(function(){return Z})),n.d(e,"getShortcodePreview",(function(){return $})),n.d(e,"ITEM_TOTAL_TYPES",(function(){return d})),n.d(e,"ITEM_META_TYPES",(function(){return p})),n.d(e,"ITEM_TABLE_BLOCK_TYPES",(function(){return b})),n.d(e,"DISCOUNT_TOTAL_TYPES",(function(){return g})),n.d(e,"FORMAT_TYPES",(function(){return m})),n.d(e,"setSetting",(function(){return T})),n.d(e,"getSetting",(function(){return s}))}});
