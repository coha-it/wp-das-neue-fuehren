this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks["document-background-panel"]=function(e){function t(t){for(var r,c,a=t[0],l=t[1],u=t[2],d=0,f=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={4:0,35:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;return i.push([104,1,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.lodash},10:function(e,t){e.exports=window.wp.apiFetch},104:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(4),i=(n(28),n(7)),c=n(27),a=n.n(c),l=n(2),u=n(15),s=n(5),d=n(1);n(64);var f=Object(o.withSelect)((function(e,t){var n=t.metaKey,r=e("core").getMedia,o=(0,e("core/editor").getEditedPostAttribute)("meta")[n];return{pdfAttachment:o?r(o):null,pdfAttachmentId:o||void 0}})),p=Object(o.withDispatch)((function(e,t,n){var r=t.metaKey,o=n.select,i=e("core/editor").editPost;return{onUpdateAttachment:function(e){var t={};t[r]=e.id,i({meta:t})},onDropAttachment:function(e){o("core/block-editor").getSettings().mediaUpload({allowedTypes:["application/pdf"],filesList:e,onFileChange:function(e){var t=a()(e,1)[0],n={};n[r]=t.id,t.id&&i({meta:n})},onError:function(e){noticeOperations.removeAllNotices(),noticeOperations.createErrorNotice(e)}})},onRemoveAttachment:function(){var e={};e[r]=0,i({meta:e})}}})),b=Object(u.compose)(f,p)((function(e){var t=e.pdfAttachmentId,n=e.onUpdateAttachment,o=e.onDropAttachment,c=e.onRemoveAttachment,a=(e.metaKey,e.pdfAttachment),u=function(e,t,n){return Object(d.get)(e,["media_details","sizes",t,n])},f=Object(r.createElement)("p",null,Object(l._x)("To edit the PDF file, you need permission to upload media.","storeabill-core","woocommerce-germanized-pro")),p=!1,b=0,m=0;return a&&(p=u(a,"full","source_url"),b=u(a,"full","width"),m=u(a,"full","height")),Object(r.createElement)("div",{className:"editor-document-template-pdf"},Object(r.createElement)(s.MediaUploadCheck,{fallback:f},Object(r.createElement)(s.MediaUpload,{title:Object(l._x)("PDF Attachment","storeabill-core","woocommerce-germanized-pro"),onSelect:n,allowedTypes:["application/pdf"],modalClass:"editor-post-featured-image__media-modal",render:function(e){var n=e.open;return Object(r.createElement)("div",{className:"editor-post-featured-image__container"},Object(r.createElement)(i.Button,{className:t?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:n,"aria-label":t?Object(l._x)("Edit or update the PDF file","storeabill-core","woocommerce-germanized-pro"):null},!!t&&a&&p&&Object(r.createElement)(i.ResponsiveWrapper,{naturalWidth:b,naturalHeight:m,isInline:!0},Object(r.createElement)("img",{src:p,alt:""})),!!t&&a&&!p&&Object(r.createElement)("span",{className:"pdf-image-placeholder"},a.title.rendered),!!t&&!a&&Object(r.createElement)(i.Spinner,null),!t&&Object(l._x)("Set PDF background","storeabill-core","woocommerce-germanized-pro")),Object(r.createElement)(i.DropZone,{onFilesDrop:o}))},value:t})),!!t&&a&&Object(r.createElement)(s.MediaUploadCheck,null,Object(r.createElement)(s.MediaUpload,{title:Object(l._x)("PDF Attachment","storeabill-core","woocommerce-germanized-pro"),onSelect:n,allowedTypes:["application/pdf"],value:t,render:function(e){var t=e.open;return Object(r.createElement)(i.Button,{onClick:t,isDefault:!0,isLarge:!0},Object(l._x)("Replace PDF template","storeabill-core","woocommerce-germanized-pro"))}})),!!t&&Object(r.createElement)(s.MediaUploadCheck,null,Object(r.createElement)(i.Button,{onClick:c,isLink:!0,isDestructive:!0},Object(l._x)("Remove","storeabill-core","woocommerce-germanized-pro"))))})),m=(n(8),n(29)),h=n(30);Object(h.registerPlugin)("storeabill-background-panel",{render:function(){return Object(r.createElement)(m.PluginDocumentSettingPanel,{name:"sab-document-template",title:Object(l._x)("Background","storeabill-core","woocommerce-germanized-pro"),className:"sab-document-template"},Object(r.createElement)(i.PanelRow,{className:"sab-document-template-panel"},Object(r.createElement)(b,{metaKey:"_pdf_template_id"})))},icon:""})},11:function(e,t){e.exports=window.wp.url},15:function(e,t){e.exports=window.wp.compose},2:function(e,t){e.exports=window.wp.i18n},28:function(e,t){e.exports=window.wp.domReady},29:function(e,t){e.exports=window.wp.editPost},30:function(e,t){e.exports=window.wp.plugins},4:function(e,t){e.exports=window.wp.data},5:function(e,t){e.exports=window.wp.blockEditor},64:function(e,t,n){},7:function(e,t){e.exports=window.wp.components},8:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),i=n(17);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l="object"===("undefined"==typeof sabSettings?"undefined":n.n(i)()(sabSettings))?sabSettings:{},u=a(a({},{itemTotalTypes:[],itemMetaTypes:[],itemTableBlockTypes:[],discountTotalTypes:{}}),l);function s(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},r=u.hasOwnProperty(e)?u[e]:t;return n(r,t)}var d=n(2),f=u.itemTotalTypes,p=u.itemMetaTypes,b=u.itemTableBlockTypes,m=u.discountTotalTypes,h=["core/bold","core/italic","core/text-color","core/underline","storeabill/document-shortcode","storeabill/font-size"],v=n(4),g=n(1),O=n(10),y=n.n(O),j=n(11);n(7);function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};u[e]=n(t)}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";return p.hasOwnProperty(e)?p[e]:[]}function _(e,t){Array.isArray(t)||(t=[t]);var n=Object(v.select)("core/block-editor").getBlockParents(e);if(n.length>0){var r=Object(v.select)("core/block-editor").getBlock(n[0]);if(Object(g.includes)(t,r.name))return!0}return!1}function P(e){var t=s("supports");return Object(g.includes)(t,e)}function E(e){var t=s("defaultInnerBlocks");return t.hasOwnProperty(e)?t[e]:[]}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product",n=T(t),r=n.filter((function(t){if(e===t.type)return!0})),o=r.length>0?r[0].preview:"",i=x(t),c=i.meta_data.filter((function(t){if(e===t.key)return!0}));return c.length>0?c[0].value:o}function S(){return s("preview",{})}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product",t=S();return t[e+"_items"][0]}function D(e){var t=f.filter((function(t){if(e===t.type)return!0}));return t&&t[0]?t[0].default:""}function A(e){var t=f.filter((function(t){if(e===t.type)return!0}));return t&&t[0]?t[0].title:""}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"total",t=S(),n=t.totals,r=n.filter((function(t){return t.type===e}));return r.length>0?r[0].total_formatted:0}function B(){var e=S().tax_items;return e.length>0?e[0].rate.percent:"{rate}"}function F(){return S().discount_notice}function I(){var e=S().fee_items;return e.length>0?e[0].name:"{name}"}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"read",r={top:e.top?e.top:t.top,left:e.left?e.left:t.left,right:e.right?e.right:t.right,bottom:e.bottom?e.bottom:t.bottom};if("edit"===n){var o=s("marginTypesSupported"),i={};return o.forEach((function(e){i[e]=r[e]})),i}return r}function N(){return"document_template"===Object(v.select)("core/editor").getCurrentPostType()}function R(){var e=void 0,t=(0,Object(v.select)("core/block-editor").getBlocks)().filter((function(e){if("storeabill/document-styles"===e.name)return e}));return t.length>0&&(e=t[0]),e}function U(){return s("fonts")}function L(e){var t=U().filter((function(t){if(t.name===e)return!0}));if(!Object(g.isEmpty)(t))return t[0]}function K(){var e=(0,Object(v.select)("core/editor").getEditedPostAttribute)("meta");return e._fonts?e._fonts:void 0}function Y(e){e=e||K();var t=Object(j.addQueryArgs)("/sab/v1/preview_fonts/css",{fonts:e,display_types:s("fontDisplayTypes")});return y()({path:t})}function z(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=e;return"before_discounts"===n&&(r+="_subtotal",Object(g.includes)(e,"total")&&(r=e.replace("total","")),"total"===e&&(r="subtotal")),!1===t&&(Object(g.includes)(e,"_total")&&(r=r.replace("_total","")),r+="_net"),r+"_formatted"}function H(e){var t="";return"document"===e?t=Object(d._x)("Document","storeabill-core","woocommerce-germanized-pro"):"document_item"===e?t=Object(d._x)("Document Item","storeabill-core","woocommerce-germanized-pro"):"document_total"===e&&(t=Object(d._x)("Document Total","storeabill-core","woocommerce-germanized-pro")),t}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=s("shortcodes"),o=Object.entries(r),i={};o.forEach((function(r,o){var c=r[0];if(!(e.length>0&&e!==c&&"blocks"!==c||"blocks"===c&&0===t.length)){var a=[],l=H(c);if(Object(g.isArray)(r[1]))a=r[1].flat();else if(t.length>0){a=r[1].hasOwnProperty(t)?r[1][t]:[];var u=Object(v.select)("core/blocks").getBlockType(t);l=u?u.title:t}i.hasOwnProperty(c)||(i[c]={label:l,value:c,children:{}}),a.map((function(e){if(!i[c].children.hasOwnProperty(e.shortcode)){if(!n&&e.hasOwnProperty("headerFooterOnly")&&e.headerFooterOnly)return;i[c].children[e.shortcode]={value:e.shortcode,label:e.title}}}))}}));var c=[];return Object.entries(i).map((function(e){var t=Object.values(e[1].children).flat();Object(g.isEmpty)(t)||c.push({value:e[1].value,label:e[1].label,children:t})})),c}function Q(e){var t=s("shortcodes"),n=Object.entries(t),r={};return n.forEach((function(e,t){(Object(g.isArray)(e[1])?e[1].flat():Object.values(e[1]).flat()).map((function(e){r.hasOwnProperty(e.shortcode)||(r[e.shortcode]=e)}))})),!!r.hasOwnProperty(e)&&r[e]}function W(e){var t=Q(e);return t?t.title:""}function q(){return s("dateTypes")}function Z(e){var t=s("dateTypes"),n=Object(d._x)("Date","storeabill-core","woocommerce-germanized-pro");return Object.entries(t).map((function(t){t[0]===e&&(n=t[1])})),n}function G(e){var t=Object(j.addQueryArgs)("/sab/v1/preview_shortcodes",{query:e,document_type:s("documentType")});return y()({path:t})}n.d(t,"getItemMetaTypes",(function(){return T})),n.d(t,"blockHasParent",(function(){return _})),n.d(t,"documentTypeSupports",(function(){return P})),n.d(t,"getDefaultInnerBlocks",(function(){return E})),n.d(t,"getItemMetaTypePreview",(function(){return k})),n.d(t,"getPreview",(function(){return S})),n.d(t,"getPreviewItem",(function(){return x})),n.d(t,"getItemTotalTypeDefaultTitle",(function(){return D})),n.d(t,"getItemTotalTypeTitle",(function(){return A})),n.d(t,"getPreviewTotal",(function(){return M})),n.d(t,"getPreviewTaxRate",(function(){return B})),n.d(t,"getPreviewDiscountNotice",(function(){return F})),n.d(t,"getPreviewFeeName",(function(){return I})),n.d(t,"formatMargins",(function(){return C})),n.d(t,"isDocumentTemplate",(function(){return N})),n.d(t,"getDocumentStylesBlock",(function(){return R})),n.d(t,"getFonts",(function(){return U})),n.d(t,"getFont",(function(){return L})),n.d(t,"getCurrentFonts",(function(){return K})),n.d(t,"getFontsCSS",(function(){return Y})),n.d(t,"getItemTotalKey",(function(){return z})),n.d(t,"getShortcodeCategoryTitle",(function(){return H})),n.d(t,"getAvailableShortcodeTree",(function(){return J})),n.d(t,"getShortcodeData",(function(){return Q})),n.d(t,"getShortcodeTitle",(function(){return W})),n.d(t,"getDateTypes",(function(){return q})),n.d(t,"getDateTypeTitle",(function(){return Z})),n.d(t,"getShortcodePreview",(function(){return G})),n.d(t,"ITEM_TOTAL_TYPES",(function(){return f})),n.d(t,"ITEM_META_TYPES",(function(){return p})),n.d(t,"ITEM_TABLE_BLOCK_TYPES",(function(){return b})),n.d(t,"DISCOUNT_TOTAL_TYPES",(function(){return m})),n.d(t,"FORMAT_TYPES",(function(){return h})),n.d(t,"setSetting",(function(){return w})),n.d(t,"getSetting",(function(){return s}))}});