this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks["document-styles"]=function(t){function e(e){for(var r,c,s=e[0],u=e[1],a=e[2],f=0,d=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);d.length;)d.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={10:0,38:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var l=u;return i.push([109,1,0]),n()}({0:function(t,e){t.exports=window.wp.element},1:function(t,e){t.exports=window.lodash},10:function(t,e){t.exports=window.wp.apiFetch},109:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(13),i=n(31),c=n.n(i),s=n(32),u=n.n(s),a=n(33),l=n.n(a),f=n(34),d=n.n(f),p=n(24),b=n.n(p),g=n(16),h=n(4),y=n(1),v=n(0),m=n(8);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b()(t);if(e){var o=b()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var S=function(t){l()(n,t);var e=O(n);function n(){var t;return c()(this,n),(t=e.apply(this,arguments)).state={fontsFacetsCSS:"",fontsInlineCSS:""},t}return u()(n,[{key:"componentDidMount",value:function(){this.updateFontsCSS(),this.applyWrapperStyles()}},{key:"updateFontsCSS",value:function(){var t=this;Object(y.isEmpty)(this.props.fonts)||Object(m.getSetting)("isFirstPage")?this.setState({fontsFacetsCSS:"",fontsInlineCSS:""}):Object(m.getFontsCSS)(this.props.fonts).then((function(e){t.setState({fontsFacetsCSS:e.facets,fontsInlineCSS:e.inline})})).catch((function(){t.setState({fontsFacetsCSS:"",fontsInlineCSS:""})}))}},{key:"componentDidUpdate",value:function(t,e){Object(y.isEqual)(this.props.fonts,t.fonts)||this.updateFontsCSS(),this.state.fontsFacetsCSS!==e.fontsFacetsCSS&&this.addFonts(),Object(y.isEqual)(this.props.fonts,t.fonts)&&Object(y.isEqual)(this.props.pdfAttachment,t.pdfAttachment)&&Object(y.isEqual)(this.props.margins,t.margins)&&Object(y.isEqual)(this.props.fontSize,t.fontSize)&&Object(y.isEqual)(this.props.color,t.color)||this.applyWrapperStyles()}},{key:"addFonts",value:function(){var t=this.state,e=t.fontsFacetsCSS,n=t.fontsInlineCSS;jQuery("style#sab-block-editor-inline-css")<=0&&jQuery('<style id="sab-block-editor-inline-css">').appendTo("head");var r=jQuery("style#sab-block-editor-inline-css");r.html().trim()!==e&&r.html(e),jQuery("body").find(".sab-font-inline").remove(),jQuery("body").append('<style type="text/css" class="sab-font-inline">'+n+"</style>")}},{key:"getAttachmentThumb",value:function(t,e,n){return Object(y.get)(t,["media_details","sizes",e,n])}},{key:"applyWrapperStyles",value:function(){var t=jQuery(".editor-styles-wrapper").find(".block-editor-block-list__layout:first"),e=this.props,n=e.pdfAttachment,r=e.margins,o=(e.fonts,e.fontSize),i=e.color;o&&t.css("font-size",o+"px"),i&&t.css("color",i),Object(m.getSetting)("isFirstPage")&&t.addClass("sab-is-first-page");var c=!1;if(n){var s=this.getAttachmentThumb(n,"full","source_url");s&&(t.css("background-image","linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.7) 100%), url("+s+")"),t.addClass("has-background-image"),c=!0)}c||(t.css("background-image","none"),t.removeClass("has-background-image")),t.css("padding-left",r.left+"cm"),t.css("padding-right",r.right+"cm"),t.css("padding-top",r.top+"cm"),t.css("padding-bottom",r.bottom+"cm")}},{key:"render",value:function(){return null}}]),n}(v.Component),j=Object(g.compose)(Object(h.withSelect)((function(t,e){e.attributes;var n=t("core").getMedia,r=(0,t("core/editor").getEditedPostAttribute)("meta"),o=r._pdf_template_id,i=r._margins,c=Object(m.getSetting)("defaultMargins"),s=r._font_size,u=Object(m.getSetting)("defaultFontSize"),a=r._color,l=Object(m.getSetting)("defaultColor"),f=Object(m.getCurrentFonts)(),d=Object(m.formatMargins)(i,c);return{pdfAttachment:o?n(o):null,margins:d,fonts:f,fontSize:s||u,color:a||l}})))(S),T=(n(73),{title:Object(r._x)("Document Styles","storeabill-core","woocommerce-germanized-pro"),description:Object(r._x)("Watches for changes within the document and adjusts preview styles.","storeabill-core","woocommerce-germanized-pro"),category:"storeabill",supports:{html:!1,inserter:!1},example:{},attributes:{},edit:j});Object(o.registerBlockType)("storeabill/document-styles",T)},11:function(t,e){t.exports=window.wp.url},13:function(t,e){t.exports=window.wp.blocks},16:function(t,e){t.exports=window.wp.compose},2:function(t,e){t.exports=window.wp.i18n},4:function(t,e){t.exports=window.wp.data},7:function(t,e){t.exports=window.wp.components},73:function(t,e,n){},8:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n.n(r),i=n(17);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u="object"===("undefined"==typeof sabSettings?"undefined":n.n(i)()(sabSettings))?sabSettings:{},a=s(s({},{itemTotalTypes:[],itemMetaTypes:[],itemTableBlockTypes:[],discountTotalTypes:{}}),u);function l(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},r=a.hasOwnProperty(t)?a[t]:e;return n(r,e)}var f=n(2),d=a.itemTotalTypes,p=a.itemMetaTypes,b=a.itemTableBlockTypes,g=a.discountTotalTypes,h=["core/bold","core/italic","core/text-color","core/underline","storeabill/document-shortcode","storeabill/font-size"],y=n(4),v=n(1),m=n(10),O=n.n(m),S=n(11);n(7);function j(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};a[t]=n(e)}function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";return p.hasOwnProperty(t)?p[t]:[]}function w(t,e){Array.isArray(e)||(e=[e]);var n=Object(y.select)("core/block-editor").getBlockParents(t);if(n.length>0){var r=Object(y.select)("core/block-editor").getBlock(n[0]);if(Object(v.includes)(e,r.name))return!0}return!1}function _(t){var e=l("supports");return Object(v.includes)(e,t)}function P(t){var e=l("defaultInnerBlocks");return e.hasOwnProperty(t)?e[t]:[]}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product",n=T(e),r=n.filter((function(e){if(t===e.type)return!0})),o=r.length>0?r[0].preview:"",i=x(e),c=i.meta_data.filter((function(e){if(t===e.key)return!0}));return c.length>0?c[0].value:o}function C(){return l("preview",{})}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product",e=C();return e[t+"_items"][0]}function E(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].default:""}function F(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].title:""}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"total",e=C(),n=e.totals,r=n.filter((function(e){return e.type===t}));return r.length>0?r[0].total_formatted:0}function D(){var t=C().tax_items;return t.length>0?t[0].rate.percent:"{rate}"}function B(){return C().formatted_discount_notice}function I(){var t=C().fee_items;return t.length>0?t[0].name:"{name}"}function M(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"read",r={top:t.top?t.top:e.top,left:t.left?t.left:e.left,right:t.right?t.right:e.right,bottom:t.bottom?t.bottom:e.bottom};if("edit"===n){var o=l("marginTypesSupported"),i={};return o.forEach((function(t){i[t]=r[t]})),i}return r}function z(){return"document_template"===Object(y.select)("core/editor").getCurrentPostType()}function Q(){return l("allowedBlockTypes")}function q(){var t=void 0,e=(0,Object(y.select)("core/block-editor").getBlocks)().filter((function(t){if("storeabill/document-styles"===t.name)return t}));return e.length>0&&(t=e[0]),t}function R(){return l("fonts")}function Y(t){var e=R().filter((function(e){if(e.name===t)return!0}));if(!Object(v.isEmpty)(e))return e[0]}function L(){var t=(0,Object(y.select)("core/editor").getEditedPostAttribute)("meta");return t._fonts?t._fonts:void 0}function W(t){t=t||L();var e=Object(S.addQueryArgs)("/sab/v1/preview_fonts/css",{fonts:t,display_types:l("fontDisplayTypes")});return O()({path:e})}function N(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=t;return"before_discounts"===n&&(r+="_subtotal",Object(v.includes)(t,"total")&&(r=t.replace("total","")),"total"===t&&(r="subtotal")),!1===e&&(Object(v.includes)(t,"_total")&&(r=r.replace("_total","")),r+="_net"),r+"_formatted"}function J(t){var e="";return"document"===t?e=Object(f._x)("Document","storeabill-core","woocommerce-germanized-pro"):"document_item"===t?e=Object(f._x)("Document Item","storeabill-core","woocommerce-germanized-pro"):"document_total"===t?e=Object(f._x)("Document Total","storeabill-core","woocommerce-germanized-pro"):"setting"===t&&(e=Object(f._x)("Settings","storeabill-core","woocommerce-germanized-pro")),e}function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=l("shortcodes"),o=Object.entries(r),i=["blocks","setting"],c={};o.forEach((function(r,o){var s=r[0];if((!(t.length>0&&t!==s)||Object(v.includes)(i,s))&&("blocks"!==s||0!==e.length)){var u=[],a=J(s);if(Object(v.isArray)(r[1]))u=r[1].flat();else if(e.length>0){u=r[1].hasOwnProperty(e)?r[1][e]:[];var l=Object(y.select)("core/blocks").getBlockType(e);a=l?l.title:e}c.hasOwnProperty(s)||(c[s]={label:a,value:s,children:{}}),u.map((function(t){if(!c[s].children.hasOwnProperty(t.shortcode)){if(!n&&t.hasOwnProperty("headerFooterOnly")&&t.headerFooterOnly)return;c[s].children[t.shortcode]={value:t.shortcode,label:t.title}}}))}}));var s=[];return Object.entries(c).map((function(t){var e=Object.values(t[1].children).flat();Object(v.isEmpty)(e)||s.push({value:t[1].value,label:t[1].label,children:e})})),s}function U(t){var e=l("shortcodes"),n=Object.entries(e),r={};return n.forEach((function(t,e){(Object(v.isArray)(t[1])?t[1].flat():Object.values(t[1]).flat()).map((function(t){r.hasOwnProperty(t.shortcode)||(r[t.shortcode]=t)}))})),!!r.hasOwnProperty(t)&&r[t]}function H(t){var e=U(t);return e?e.title:""}function G(){return l("dateTypes")}function V(){return l("barcodeTypes")}function X(){return l("barcodeCodeTypes")}function Z(t){var e=l("dateTypes"),n=Object(f._x)("Date","storeabill-core","woocommerce-germanized-pro");return Object.entries(e).map((function(e){e[0]===t&&(n=e[1])})),n}function $(t){var e=Object(S.addQueryArgs)("/sab/v1/preview_shortcodes",{query:t,document_type:l("documentType")});return O()({path:e})}n.d(e,"getItemMetaTypes",(function(){return T})),n.d(e,"blockHasParent",(function(){return w})),n.d(e,"documentTypeSupports",(function(){return _})),n.d(e,"getDefaultInnerBlocks",(function(){return P})),n.d(e,"getItemMetaTypePreview",(function(){return k})),n.d(e,"getPreview",(function(){return C})),n.d(e,"getPreviewItem",(function(){return x})),n.d(e,"getItemTotalTypeDefaultTitle",(function(){return E})),n.d(e,"getItemTotalTypeTitle",(function(){return F})),n.d(e,"getPreviewTotal",(function(){return A})),n.d(e,"getPreviewTaxRate",(function(){return D})),n.d(e,"getPreviewDiscountNotice",(function(){return B})),n.d(e,"getPreviewFeeName",(function(){return I})),n.d(e,"formatMargins",(function(){return M})),n.d(e,"isDocumentTemplate",(function(){return z})),n.d(e,"getAllowedBlockTypes",(function(){return Q})),n.d(e,"getDocumentStylesBlock",(function(){return q})),n.d(e,"getFonts",(function(){return R})),n.d(e,"getFont",(function(){return Y})),n.d(e,"getCurrentFonts",(function(){return L})),n.d(e,"getFontsCSS",(function(){return W})),n.d(e,"getItemTotalKey",(function(){return N})),n.d(e,"getShortcodeCategoryTitle",(function(){return J})),n.d(e,"getAvailableShortcodeTree",(function(){return K})),n.d(e,"getShortcodeData",(function(){return U})),n.d(e,"getShortcodeTitle",(function(){return H})),n.d(e,"getDateTypes",(function(){return G})),n.d(e,"getBarcodeTypes",(function(){return V})),n.d(e,"getBarcodeCodeTypes",(function(){return X})),n.d(e,"getDateTypeTitle",(function(){return Z})),n.d(e,"getShortcodePreview",(function(){return $})),n.d(e,"ITEM_TOTAL_TYPES",(function(){return d})),n.d(e,"ITEM_META_TYPES",(function(){return p})),n.d(e,"ITEM_TABLE_BLOCK_TYPES",(function(){return b})),n.d(e,"DISCOUNT_TOTAL_TYPES",(function(){return g})),n.d(e,"FORMAT_TYPES",(function(){return h})),n.d(e,"setSetting",(function(){return j})),n.d(e,"getSetting",(function(){return l}))}});
