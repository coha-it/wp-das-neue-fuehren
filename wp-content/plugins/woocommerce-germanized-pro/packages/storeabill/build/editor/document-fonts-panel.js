this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks["document-fonts-panel"]=function(t){function e(e){for(var r,a,c=e[0],l=e[1],u=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(s&&s(e);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={6:0,35:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;return i.push([103,1,0]),n()}({0:function(t,e){t.exports=window.wp.element},1:function(t,e){t.exports=window.lodash},10:function(t,e){t.exports=window.wp.apiFetch},103:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(28),n(7)),i=n(4),a=n(15),c=n(2),l=n(1),u=n(8),s=n(6),f=n.n(s),p=n(32),d=n.n(p),b=n(33),h=n.n(b),m=n(22),v=n.n(m),g=n(34),y=n.n(g),O=n(35),j=n.n(O),w=n(26),T=n.n(w),S=n(14),P=n.n(S);n(63);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=T()(t);if(e){var o=T()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j()(this,n)}}var E=function(t){return t.stopPropagation()},F=function(t){y()(n,t);var e=_(n);function n(){var t;return d()(this,n),(t=e.apply(this,arguments)).state={filterValue:"",hoveredItem:null,filteredItems:[],showResults:!1},t.availableFonts=Object(u.getFonts)(),t.onChangeSearchInput=t.onChangeSearchInput.bind(v()(t)),t.onChangeFont=t.onChangeFont.bind(v()(t)),t.onChangeFontVariants=t.onChangeFontVariants.bind(v()(t)),t.onClickCurrentFont=t.onClickCurrentFont.bind(v()(t)),t}return h()(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t){t.filteredItems!==this.props.filteredItems&&this.filter(this.state.filterValue)}},{key:"onChangeSearchInput",value:function(t){this.filter(t.target.value)}},{key:"filter",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""!==t){var e=this.availableFonts.filter((function(e){var n=e.label;e.variations;if(n.toLowerCase().startsWith(t.toLowerCase()))return!0}));this.setState({filterValue:t,filteredItems:e,showResults:!0})}else this.setState({filterValue:t,filteredItems:[],showResults:!1})}},{key:"onClickCurrentFont",value:function(t){var e=this.props.currentFont;this.filter(e.label)}},{key:"onChangeFont",value:function(t){var e=this.props.currentFont;e&&e.name===t.name||this.props.onUpdateFont(t.name,{regular:"regular"})}},{key:"onChangeFontVariants",value:function(t){this.props.onUpdateFont(this.props.currentFont.name,t)}},{key:"render",value:function(){var t=this.state,e=t.filteredItems,n=t.filterValue,i=t.showResults,a=this.props,s=a.currentFont,p=a.currentFontVariants,d=a.displayType,b=(Object(l.isEmpty)(e),this.onChangeFont),h=this.onChangeFontVariants,m=Object(u.getSetting)("fontDisplayTypes")[d],v=Object(u.getSetting)("fontVariationTypes"),g=Object(u.getSetting)("defaultFont"),y=g?Object(u.getFont)(g.name):{};return Object(r.createElement)("div",{className:"sab-fonts-wrapper"},Object(r.createElement)("label",{className:"fonts-wrapper-label"},Object(r.createElement)("span",{className:"inner-label"},m.title),s&&Object(r.createElement)("span",{className:"current-font",onClick:this.onClickCurrentFont},s.label),!s&&y&&Object(r.createElement)("span",{className:"current-font default-font"},y.label)),Object(r.createElement)("div",{className:"sab-fonts-search",onKeyPress:E},Object(r.createElement)("div",{className:"font-list-wrapper"},Object(r.createElement)("input",{type:"search",placeholder:Object(c._x)("Search for a font","storeabill-core","woocommerce-germanized-pro"),className:"font-search",autoFocus:!0,value:n,onChange:this.onChangeSearchInput}),Object(r.createElement)("div",{className:"font-results",tabIndex:"0",role:"region","aria-label":Object(c._x)("Available fonts","storeabill-core","woocommerce-germanized-pro")},i&&Object(r.createElement)("ul",{role:"list",className:"font-list"},e.map((function(t){return Object(r.createElement)("li",{className:P()("font-family",f()({},"active",s&&s.name===t.name)),onClick:function(e){e.preventDefault(),b(t)},key:t.name},Object(r.createElement)("span",{className:"font-title"},t.label),!Object(l.isEmpty)(t.variants)&&s&&t.name===s.name&&Object(r.createElement)("ul",{className:"font-variants"},Object.keys(v).map((function(e,n){var i=p.hasOwnProperty(e)?p[e]:"regular";return Object(r.createElement)("li",{className:"font-variant-select",key:n},Object(r.createElement)(o.SelectControl,{label:v[e],value:i,options:t.variants.map((function(t){return{label:v.hasOwnProperty(t)?v[t]:t,value:t}})),onChange:function(t){h(f()({},e,t))}}))}))))})))))))}}]),n}(r.Component),k=Object(i.withSelect)((function(t,e){var n=e.displayType,r=(0,t("core/editor").getEditedPostAttribute)("meta"),o=Object(l.isEmpty)(r._fonts)?{}:r._fonts,i=o&&o[n]?o[n]:void 0;return{currentFont:i?Object(u.getFont)(i.name):void 0,currentFontVariants:i?i.variants:{}}})),C=Object(i.withDispatch)((function(t,e,n){var r=e.displayType,o=n.select,i=t("core/editor").editPost,a=(0,o("core/editor").getEditedPostAttribute)("meta"),c=a._fonts&&!Object(l.isEmpty)(a._fonts)?Object(l.cloneDeep)(a._fonts):{};return{onUpdateFont:function(t,e){var n=c[r]?c[r].name:"";c[r]&&n!==t&&(c[r].variants={});var o=Object(l.merge)(c[r]?c[r].variants:{},e);c[r]={name:t,variants:o},i({meta:{_fonts:c}})}}})),x=Object(a.compose)(k,C)(F),D=n(29),I=n(30);var N=Object(i.withSelect)((function(t){var e=(0,t("core/editor").getEditedPostAttribute)("meta");return{fontSize:e._font_size?e._font_size:Object(u.getSetting)("defaultFontSize"),color:e._color?e._color:Object(u.getSetting)("defaultColor")}})),A=Object(i.withDispatch)((function(t){var e=t("core/editor").editPost;return{onUpdateFontSize:function(t){e({meta:{_font_size:t?t.toString():""}})},onUpdateColor:function(t){e({meta:{_color:t?t.hex:Object(u.getSetting)("defaultColor")}})}}})),B=Object(a.compose)(N,A)((function(t){var e=t.fontSize,n=t.onUpdateFontSize,i=t.color,a=t.onUpdateColor,l=Object(u.getSetting)("fontDisplayTypes");return Object(r.createElement)(D.PluginDocumentSettingPanel,{name:"sab-fonts-panel",title:Object(c._x)("Typography","storeabill-core","woocommerce-germanized-pro"),className:"sab-fonts-panel"},Object(r.createElement)(o.PanelRow,null,Object(r.createElement)(o.ColorPicker,{color:i,onChangeComplete:a,disableAlpha:!0})),Object(r.createElement)(o.PanelRow,null,Object(r.createElement)(o.FontSizePicker,{fontSizes:Object(u.getSetting)("customFontSizes"),value:e,onChange:n,withSlider:!1,fallbackFontSize:Object(u.getSetting)("defaultFontSize")})),Object(r.createElement)(o.PanelRow,{className:"sab-fonts-panel-row"},Object.keys(l).map((function(t,e){return Object(r.createElement)(x,{key:t,displayType:t})}))))}));Object(u.getSetting)("isFirstPage")||Object(I.registerPlugin)("storeabill-fonts-panel",{render:B,icon:""})},11:function(t,e){t.exports=window.wp.url},15:function(t,e){t.exports=window.wp.compose},2:function(t,e){t.exports=window.wp.i18n},28:function(t,e){t.exports=window.wp.domReady},29:function(t,e){t.exports=window.wp.editPost},30:function(t,e){t.exports=window.wp.plugins},4:function(t,e){t.exports=window.wp.data},63:function(t,e,n){},7:function(t,e){t.exports=window.wp.components},8:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n.n(r),i=n(17);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l="object"===("undefined"==typeof sabSettings?"undefined":n.n(i)()(sabSettings))?sabSettings:{},u=c(c({},{itemTotalTypes:[],itemMetaTypes:[],itemTableBlockTypes:[],discountTotalTypes:{}}),l);function s(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},r=u.hasOwnProperty(t)?u[t]:e;return n(r,e)}var f=n(2),p=u.itemTotalTypes,d=u.itemMetaTypes,b=u.itemTableBlockTypes,h=u.discountTotalTypes,m=["core/bold","core/italic","core/text-color","core/underline","storeabill/document-shortcode","storeabill/font-size"],v=n(4),g=n(1),y=n(10),O=n.n(y),j=n(11);n(7);function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};u[t]=n(e)}function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";return d.hasOwnProperty(t)?d[t]:[]}function S(t,e){Array.isArray(e)||(e=[e]);var n=Object(v.select)("core/block-editor").getBlockParents(t);if(n.length>0){var r=Object(v.select)("core/block-editor").getBlock(n[0]);if(Object(g.includes)(e,r.name))return!0}return!1}function P(t){var e=s("supports");return Object(g.includes)(e,t)}function _(t){var e=s("defaultInnerBlocks");return e.hasOwnProperty(t)?e[t]:[]}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product",n=T(e),r=n.filter((function(e){if(t===e.type)return!0})),o=r.length>0?r[0].preview:"",i=k(e),a=i.meta_data.filter((function(e){if(t===e.key)return!0}));return a.length>0?a[0].value:o}function F(){return s("preview",{})}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product",e=F();return e[t+"_items"][0]}function C(t){var e=p.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].default:""}function x(t){var e=p.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].title:""}function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"total",e=F(),n=e.totals,r=n.filter((function(e){return e.type===t}));return r.length>0?r[0].total_formatted:0}function I(){var t=F().tax_items;return t.length>0?t[0].rate.percent:"{rate}"}function N(){return F().discount_notice}function A(){var t=F().fee_items;return t.length>0?t[0].name:"{name}"}function B(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"read",r={top:t.top?t.top:e.top,left:t.left?t.left:e.left,right:t.right?t.right:e.right,bottom:t.bottom?t.bottom:e.bottom};if("edit"===n){var o=s("marginTypesSupported"),i={};return o.forEach((function(t){i[t]=r[t]})),i}return r}function M(){return"document_template"===Object(v.select)("core/editor").getCurrentPostType()}function R(){var t=void 0,e=(0,Object(v.select)("core/block-editor").getBlocks)().filter((function(t){if("storeabill/document-styles"===t.name)return t}));return e.length>0&&(t=e[0]),t}function z(){return s("fonts")}function V(t){var e=z().filter((function(e){if(e.name===t)return!0}));if(!Object(g.isEmpty)(e))return e[0]}function U(){var t=(0,Object(v.select)("core/editor").getEditedPostAttribute)("meta");return t._fonts?t._fonts:void 0}function L(t){t=t||U();var e=Object(j.addQueryArgs)("/sab/v1/preview_fonts/css",{fonts:t,display_types:s("fontDisplayTypes")});return O()({path:e})}function Y(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=t;return"before_discounts"===n&&(r+="_subtotal",Object(g.includes)(t,"total")&&(r=t.replace("total","")),"total"===t&&(r="subtotal")),!1===e&&(Object(g.includes)(t,"_total")&&(r=r.replace("_total","")),r+="_net"),r+"_formatted"}function K(t){var e="";return"document"===t?e=Object(f._x)("Document","storeabill-core","woocommerce-germanized-pro"):"document_item"===t?e=Object(f._x)("Document Item","storeabill-core","woocommerce-germanized-pro"):"document_total"===t&&(e=Object(f._x)("Document Total","storeabill-core","woocommerce-germanized-pro")),e}function J(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=s("shortcodes"),o=Object.entries(r),i={};o.forEach((function(r,o){var a=r[0];if(!(t.length>0&&t!==a&&"blocks"!==a||"blocks"===a&&0===e.length)){var c=[],l=K(a);if(Object(g.isArray)(r[1]))c=r[1].flat();else if(e.length>0){c=r[1].hasOwnProperty(e)?r[1][e]:[];var u=Object(v.select)("core/blocks").getBlockType(e);l=u?u.title:e}i.hasOwnProperty(a)||(i[a]={label:l,value:a,children:{}}),c.map((function(t){if(!i[a].children.hasOwnProperty(t.shortcode)){if(!n&&t.hasOwnProperty("headerFooterOnly")&&t.headerFooterOnly)return;i[a].children[t.shortcode]={value:t.shortcode,label:t.title}}}))}}));var a=[];return Object.entries(i).map((function(t){var e=Object.values(t[1].children).flat();Object(g.isEmpty)(e)||a.push({value:t[1].value,label:t[1].label,children:e})})),a}function Q(t){var e=s("shortcodes"),n=Object.entries(e),r={};return n.forEach((function(t,e){(Object(g.isArray)(t[1])?t[1].flat():Object.values(t[1]).flat()).map((function(t){r.hasOwnProperty(t.shortcode)||(r[t.shortcode]=t)}))})),!!r.hasOwnProperty(t)&&r[t]}function q(t){var e=Q(t);return e?e.title:""}function H(){return s("dateTypes")}function W(t){var e=s("dateTypes"),n=Object(f._x)("Date","storeabill-core","woocommerce-germanized-pro");return Object.entries(e).map((function(e){e[0]===t&&(n=e[1])})),n}function G(t){var e=Object(j.addQueryArgs)("/sab/v1/preview_shortcodes",{query:t,document_type:s("documentType")});return O()({path:e})}n.d(e,"getItemMetaTypes",(function(){return T})),n.d(e,"blockHasParent",(function(){return S})),n.d(e,"documentTypeSupports",(function(){return P})),n.d(e,"getDefaultInnerBlocks",(function(){return _})),n.d(e,"getItemMetaTypePreview",(function(){return E})),n.d(e,"getPreview",(function(){return F})),n.d(e,"getPreviewItem",(function(){return k})),n.d(e,"getItemTotalTypeDefaultTitle",(function(){return C})),n.d(e,"getItemTotalTypeTitle",(function(){return x})),n.d(e,"getPreviewTotal",(function(){return D})),n.d(e,"getPreviewTaxRate",(function(){return I})),n.d(e,"getPreviewDiscountNotice",(function(){return N})),n.d(e,"getPreviewFeeName",(function(){return A})),n.d(e,"formatMargins",(function(){return B})),n.d(e,"isDocumentTemplate",(function(){return M})),n.d(e,"getDocumentStylesBlock",(function(){return R})),n.d(e,"getFonts",(function(){return z})),n.d(e,"getFont",(function(){return V})),n.d(e,"getCurrentFonts",(function(){return U})),n.d(e,"getFontsCSS",(function(){return L})),n.d(e,"getItemTotalKey",(function(){return Y})),n.d(e,"getShortcodeCategoryTitle",(function(){return K})),n.d(e,"getAvailableShortcodeTree",(function(){return J})),n.d(e,"getShortcodeData",(function(){return Q})),n.d(e,"getShortcodeTitle",(function(){return q})),n.d(e,"getDateTypes",(function(){return H})),n.d(e,"getDateTypeTitle",(function(){return W})),n.d(e,"getShortcodePreview",(function(){return G})),n.d(e,"ITEM_TOTAL_TYPES",(function(){return p})),n.d(e,"ITEM_META_TYPES",(function(){return d})),n.d(e,"ITEM_TABLE_BLOCK_TYPES",(function(){return b})),n.d(e,"DISCOUNT_TOTAL_TYPES",(function(){return h})),n.d(e,"FORMAT_TYPES",(function(){return m})),n.d(e,"setSetting",(function(){return w})),n.d(e,"getSetting",(function(){return s}))}});
