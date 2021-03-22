this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks["item-attributes"]=function(t){function e(e){for(var n,c,u=e[0],l=e[1],a=e[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,u=1;u<r.length;u++){var l=r[u];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={17:0,35:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var s=l;return i.push([105,1,0]),r()}({0:function(t,e){t.exports=window.wp.element},1:function(t,e){t.exports=window.lodash},10:function(t,e){t.exports=window.wp.apiFetch},105:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(12),i=r(109),c=r(6),u=r.n(c),l=r(44),a=r.n(l),s=r(0),f=r(14),d=r.n(f),p=r(5),b=r(8),v=r(7),m=r(15),y=Object(m.compose)([Object(p.withFontSizes)("fontSize")])((function(t){var e=t.attributes,r=(t.setAttributes,t.fontSize),o=t.setFontSize,i=t.className;a()(e);var c=Object(b.getPreviewItem)(),l=Object(p.__experimentalUseColors)([{name:"textColor",property:"color"}],[r.size]),f=l.TextColor,m=l.InspectorControlsColorPanel,y=d()("sab-block-item-content sab-block-item-attributes",i,u()({},r.class,r.class));return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(p.InspectorControls,null,Object(s.createElement)(v.PanelBody,{title:Object(n._x)("Typography","storeabill-core","woocommerce-germanized-pro")},Object(s.createElement)(p.FontSizePicker,{value:r.size,onChange:o}))),m,Object(s.createElement)("div",null,Object(s.createElement)(f,null,Object(s.createElement)("div",{className:y,dangerouslySetInnerHTML:{__html:c.attributes_formatted},style:{fontSize:r.size?r.size+"px":void 0}}))))})),g=(r(66),{title:Object(n._x)("Item Attributes","storeabill-core","woocommerce-germanized-pro"),description:Object(n._x)("Inserts item attribute list.","storeabill-core","woocommerce-germanized-pro"),category:"storeabill",icon:i.a,parent:["storeabill/item-table-column"],example:{},attributes:{textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"}},styles:[{name:"attribute-list",label:Object(n._x)("List","storeabill-core","woocommerce-germanized-pro"),isDefault:!0},{name:"attribute-line",label:Object(n._x)("One line","storeabill-core","woocommerce-germanized-pro")}],edit:y});Object(o.registerBlockType)("storeabill/item-attributes",g)},11:function(t,e){t.exports=window.wp.url},12:function(t,e){t.exports=window.wp.blocks},15:function(t,e){t.exports=window.wp.compose},2:function(t,e){t.exports=window.wp.i18n},4:function(t,e){t.exports=window.wp.data},5:function(t,e){t.exports=window.wp.blockEditor},66:function(t,e,r){},7:function(t,e){t.exports=window.wp.components},8:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r.n(n),i=r(17);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l="object"===("undefined"==typeof sabSettings?"undefined":r.n(i)()(sabSettings))?sabSettings:{},a=u(u({},{itemTotalTypes:[],itemMetaTypes:[],itemTableBlockTypes:[],discountTotalTypes:{}}),l);function s(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},n=a.hasOwnProperty(t)?a[t]:e;return r(n,e)}var f=r(2),d=a.itemTotalTypes,p=a.itemMetaTypes,b=a.itemTableBlockTypes,v=a.discountTotalTypes,m=["core/bold","core/italic","core/text-color","core/underline","storeabill/document-shortcode","storeabill/font-size"],y=r(4),g=r(1),h=r(10),O=r.n(h),w=r(11);r(7);function j(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};a[t]=r(e)}function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";return p.hasOwnProperty(t)?p[t]:[]}function _(t,e){Array.isArray(e)||(e=[e]);var r=Object(y.select)("core/block-editor").getBlockParents(t);if(r.length>0){var n=Object(y.select)("core/block-editor").getBlock(r[0]);if(Object(g.includes)(e,n.name))return!0}return!1}function P(t){var e=s("supports");return Object(g.includes)(e,t)}function S(t){var e=s("defaultInnerBlocks");return e.hasOwnProperty(t)?e[t]:[]}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product",r=T(e),n=r.filter((function(e){if(t===e.type)return!0})),o=n.length>0?n[0].preview:"",i=E(e),c=i.meta_data.filter((function(e){if(t===e.key)return!0}));return c.length>0?c[0].value:o}function k(){return s("preview",{})}function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product",e=k();return e[t+"_items"][0]}function D(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].default:""}function I(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].title:""}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"total",e=k(),r=e.totals,n=r.filter((function(e){return e.type===t}));return n.length>0?n[0].total_formatted:0}function B(){var t=k().tax_items;return t.length>0?t[0].rate.percent:"{rate}"}function C(){return k().discount_notice}function M(){var t=k().fee_items;return t.length>0?t[0].name:"{name}"}function F(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"read",n={top:t.top?t.top:e.top,left:t.left?t.left:e.left,right:t.right?t.right:e.right,bottom:t.bottom?t.bottom:e.bottom};if("edit"===r){var o=s("marginTypesSupported"),i={};return o.forEach((function(t){i[t]=n[t]})),i}return n}function z(){return"document_template"===Object(y.select)("core/editor").getCurrentPostType()}function L(){var t=void 0,e=(0,Object(y.select)("core/block-editor").getBlocks)().filter((function(t){if("storeabill/document-styles"===t.name)return t}));return e.length>0&&(t=e[0]),t}function N(){return s("fonts")}function Y(t){var e=N().filter((function(e){if(e.name===t)return!0}));if(!Object(g.isEmpty)(e))return e[0]}function H(){var t=(0,Object(y.select)("core/editor").getEditedPostAttribute)("meta");return t._fonts?t._fonts:void 0}function J(t){t=t||H();var e=Object(w.addQueryArgs)("/sab/v1/preview_fonts/css",{fonts:t,display_types:s("fontDisplayTypes")});return O()({path:e})}function K(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=t;return"before_discounts"===r&&(n+="_subtotal",Object(g.includes)(t,"total")&&(n=t.replace("total","")),"total"===t&&(n="subtotal")),!1===e&&(Object(g.includes)(t,"_total")&&(n=n.replace("_total","")),n+="_net"),n+"_formatted"}function Q(t){var e="";return"document"===t?e=Object(f._x)("Document","storeabill-core","woocommerce-germanized-pro"):"document_item"===t?e=Object(f._x)("Document Item","storeabill-core","woocommerce-germanized-pro"):"document_total"===t&&(e=Object(f._x)("Document Total","storeabill-core","woocommerce-germanized-pro")),e}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=s("shortcodes"),o=Object.entries(n),i={};o.forEach((function(n,o){var c=n[0];if(!(t.length>0&&t!==c&&"blocks"!==c||"blocks"===c&&0===e.length)){var u=[],l=Q(c);if(Object(g.isArray)(n[1]))u=n[1].flat();else if(e.length>0){u=n[1].hasOwnProperty(e)?n[1][e]:[];var a=Object(y.select)("core/blocks").getBlockType(e);l=a?a.title:e}i.hasOwnProperty(c)||(i[c]={label:l,value:c,children:{}}),u.map((function(t){if(!i[c].children.hasOwnProperty(t.shortcode)){if(!r&&t.hasOwnProperty("headerFooterOnly")&&t.headerFooterOnly)return;i[c].children[t.shortcode]={value:t.shortcode,label:t.title}}}))}}));var c=[];return Object.entries(i).map((function(t){var e=Object.values(t[1].children).flat();Object(g.isEmpty)(e)||c.push({value:t[1].value,label:t[1].label,children:e})})),c}function U(t){var e=s("shortcodes"),r=Object.entries(e),n={};return r.forEach((function(t,e){(Object(g.isArray)(t[1])?t[1].flat():Object.values(t[1]).flat()).map((function(t){n.hasOwnProperty(t.shortcode)||(n[t.shortcode]=t)}))})),!!n.hasOwnProperty(t)&&n[t]}function q(t){var e=U(t);return e?e.title:""}function G(){return s("dateTypes")}function V(t){var e=s("dateTypes"),r=Object(f._x)("Date","storeabill-core","woocommerce-germanized-pro");return Object.entries(e).map((function(e){e[0]===t&&(r=e[1])})),r}function W(t){var e=Object(w.addQueryArgs)("/sab/v1/preview_shortcodes",{query:t,document_type:s("documentType")});return O()({path:e})}r.d(e,"getItemMetaTypes",(function(){return T})),r.d(e,"blockHasParent",(function(){return _})),r.d(e,"documentTypeSupports",(function(){return P})),r.d(e,"getDefaultInnerBlocks",(function(){return S})),r.d(e,"getItemMetaTypePreview",(function(){return x})),r.d(e,"getPreview",(function(){return k})),r.d(e,"getPreviewItem",(function(){return E})),r.d(e,"getItemTotalTypeDefaultTitle",(function(){return D})),r.d(e,"getItemTotalTypeTitle",(function(){return I})),r.d(e,"getPreviewTotal",(function(){return A})),r.d(e,"getPreviewTaxRate",(function(){return B})),r.d(e,"getPreviewDiscountNotice",(function(){return C})),r.d(e,"getPreviewFeeName",(function(){return M})),r.d(e,"formatMargins",(function(){return F})),r.d(e,"isDocumentTemplate",(function(){return z})),r.d(e,"getDocumentStylesBlock",(function(){return L})),r.d(e,"getFonts",(function(){return N})),r.d(e,"getFont",(function(){return Y})),r.d(e,"getCurrentFonts",(function(){return H})),r.d(e,"getFontsCSS",(function(){return J})),r.d(e,"getItemTotalKey",(function(){return K})),r.d(e,"getShortcodeCategoryTitle",(function(){return Q})),r.d(e,"getAvailableShortcodeTree",(function(){return R})),r.d(e,"getShortcodeData",(function(){return U})),r.d(e,"getShortcodeTitle",(function(){return q})),r.d(e,"getDateTypes",(function(){return G})),r.d(e,"getDateTypeTitle",(function(){return V})),r.d(e,"getShortcodePreview",(function(){return W})),r.d(e,"ITEM_TOTAL_TYPES",(function(){return d})),r.d(e,"ITEM_META_TYPES",(function(){return p})),r.d(e,"ITEM_TABLE_BLOCK_TYPES",(function(){return b})),r.d(e,"DISCOUNT_TOTAL_TYPES",(function(){return v})),r.d(e,"FORMAT_TYPES",(function(){return m})),r.d(e,"setSetting",(function(){return j})),r.d(e,"getSetting",(function(){return s}))},9:function(t,e){t.exports=window.wp.primitives}});
