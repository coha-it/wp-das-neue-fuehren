!function(e){var o={};function n(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=o,n.d=function(e,o,r){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)n.d(r,t,function(o){return e[o]}.bind(null,t));return r},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s="./assets/admin/edit-order.js")}({"./assets/admin/edit-order.js":
/*!************************************!*\
  !*** ./assets/admin/edit-order.js ***!
  \************************************/
/*! no static exports found */function(e,o){var n;window.storeabill=window.storeabill||{},window.storeabill.admin=window.storeabill.admin||{},n=jQuery,window.storeabill.admin.edit_order={params:{},invoices:{},cancellations:{},$wrapper:!1,needsSaving:!1,needsFixation:!1,init:function(){var e=storeabill.admin.edit_order;e.params=storeabill_admin_edit_order_params,e.$wrapper=n("#sab-order-invoices"),e.initTiptip(),n(document).ajaxComplete(e.onAjaxComplete),n(document).on("click","#sab-order-invoices #sab-order-invoice-sync",e.onSync).on("click","#sab-order-invoices #sab-order-invoice-finalize",e.onFinalize).on("click","#sab-order-invoices #sab-order-invoice-list .document-delete",e.onDeleteDocument).on("click","#sab-order-invoices #sab-order-invoice-list .document-refresh",e.onRefreshDocument).on("click","#sab-order-invoices #sab-order-invoice-list .document-cancel",e.onCancelInvoice).on("click","#sab-order-invoices #sab-order-invoice-list .document-send",e.onSendDocument).on("click",'#sab-order-invoices #sab-order-invoice-list .sab-document-action-button:not(.document-delete, .document-refresh, .document-cancel, .document-send)[target="_self"]',e.onAction).on("click","#sab-order-invoices .notice-dismiss",e.onRemoveNotice),n(document.body).on("storeabill_ajax_toggle_updated",e.onPaymentStatusUpdate)},onAction:function(){var e=storeabill.admin.edit_order,o=n(this).parents(".order-document"),r=n(this).attr("href");return e.$wrapper.find(".notice-wrapper").empty(),e.block(),n.ajax({type:"GET",url:r+"&display_type=order&do_ajax=yes",success:function(r){r.success?(o.find(".document-actions").html(r.fragments[".sab-document-actions"]),e.$wrapper=n("#sab-order-invoices"),e.initTiptip(),r.hasOwnProperty("message")?e.addNotice(r.message,"success"):r.hasOwnProperty("messages")&&n.each(r.messages,(function(o,n){e.addNotice(n,"success")})),e.unblock()):e.onAjaxError(r)},error:function(o){e.onAjaxError(o)},dataType:"json"}),!1},onActionSuccess:function(e){var o=storeabill.admin.edit_order;o.getDocument(e.document_id),o.unblock()},onPaymentStatusUpdate:function(e,o,n,r){var t=storeabill.admin.edit_order;o.hasClass("sab-toggle-invoice-payment-status")&&(n.success?t.onAjaxSuccess(n):t.onAjaxError(n))},onSendDocument:function(){var e=storeabill.admin.edit_order,o=n(this).parents(".order-document").data("document-id");return e.sendDocument(o),!1},sendDocument:function(e){var o=storeabill.admin.edit_order,n={action:"send_document",document_id:e};o.block(),o.doAjax(n)},onCancelInvoice:function(){var e=storeabill.admin.edit_order,o=n(this).parents(".order-document").data("document-id");return window.confirm(e.getParams().i18n_cancel_invoice_notice)&&e.cancelInvoice(o),!1},cancelInvoice:function(e){var o=storeabill.admin.edit_order,n={action:"cancel_invoice",document_id:e};o.block(),o.doAjax(n)},onRefreshDocument:function(){var e=storeabill.admin.edit_order,o=n(this).parents(".order-document").data("document-id");return e.refreshDocument(o),!1},refreshDocument:function(e){var o=storeabill.admin.edit_order,n={action:"refresh_document",document_id:e};o.block(),o.doAjax(n)},onDeleteDocument:function(){var e=storeabill.admin.edit_order,o=n(this).parents(".order-document").data("document-id");return window.confirm(e.getParams().i18n_delete_document_notice)&&e.deleteDocument(o),!1},deleteDocument:function(e){var o=storeabill.admin.edit_order,n={action:"delete_document",document_id:e};o.block(),o.doAjax(n,o.onDeleteDocumentSuccess)},onDeleteDocumentSuccess:function(e){var o=storeabill.admin.edit_order,n=o.getDocument(e.document_id);n.length>0?(n.slideUp(100),setTimeout((function(){o.onAjaxSuccess(e)}),150)):o.onAjaxSuccess(e)},onAjaxComplete:function(e,o,n){var r=storeabill.admin.edit_order;if(null!=o&&n.hasOwnProperty("data")){var t=n.data,i=!1;try{i=JSON.parse('{"'+t.replace(/&/g,'","').replace(/=/g,'":"')+'"}',(function(e,o){return""===e?o:decodeURIComponent(o)}))}catch(e){i=!1}if(i&&i.hasOwnProperty("action")){var a=i.action;"woocommerce_save_order_items"!==a&&"woocommerce_remove_order_item"!==a&&"woocommerce_add_order_item"!==a&&"woocommerce_delete_refund"!==a&&"woocommerce_calc_line_taxes"!==a&&"woocommerce_remove_order_tax"!==a&&"woocommerce_add_order_shipping"!==a&&"woocommerce_add_order_fee"!==a&&"woocommerce_remove_order_coupon"!==a&&"woocommerce_add_coupon_discount"!==a&&"woocommerce_load_order_items"!==a||r.sync(r.hasInvoices())}}},hasInvoices:function(){return storeabill.admin.edit_order.$wrapper.find(".order-document").length>0},onSync:function(e){var o=storeabill.admin.edit_order;return e.preventDefault(),o.sync(),!1},onFinalize:function(e){var o=storeabill.admin.edit_order;return e.preventDefault(),o.finalize(),!1},finalize:function(){var e=storeabill.admin.edit_order;e.block(),e.doAjax({action:"order_finalize"})},sync:function(e=!0){var o=storeabill.admin.edit_order;o.block();var n={action:"order_sync",add_new:e?1:0};o.doAjax(n)},block:function(){storeabill.admin.edit_order.$wrapper.block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},unblock:function(){storeabill.admin.edit_order.$wrapper.unblock()},getData:function(e){var o=storeabill.admin.edit_order,r={};return e=e||{},n.each(o.$wrapper.find(":input[name]").serializeArray(),(function(e,o){-1!==o.name.indexOf("[]")?(o.name=o.name.replace("[]",""),r[o.name]=n.makeArray(r[o.name]),r[o.name].push(o.value)):r[o.name]=o.value})),n.extend(r,e),r},doAjax:function(e,o,r){var t=storeabill.admin.edit_order,i=t.params.ajax_url;$wrapper=t.$wrapper,$wrapper.find(".notice-wrapper").empty(),o=o||t.onAjaxSuccess,r=r||t.onAjaxError,e.hasOwnProperty("security")||(e.security=t.params.edit_documents_nonce),e.hasOwnProperty("order_id")||(e.order_id=t.params.order_id),e.action.includes("storeabill_woo_admin_")||(e.action="storeabill_woo_admin_"+e.action),e=t.getData(e),n.ajax({type:"POST",url:i,data:e,success:function(e){e.success?o.apply($wrapper,[e]):r.apply($wrapper,[e])},error:function(e){r.apply($wrapper,[e])},dataType:"json"})},refreshFragments:function(e){var o=storeabill.admin.edit_order;e&&n.each(e,(function(e,o){n(e).replaceWith(o),n(e).unblock()})),o.$wrapper=n("#sab-order-invoices"),o.initTiptip()},onAjaxError:function(e){var o=storeabill.admin.edit_order;e.hasOwnProperty("fragments")&&o.refreshFragments(e.fragments),e.hasOwnProperty("message")?o.addNotice(e.message,"error"):e.hasOwnProperty("messages")&&n.each(e.messages,(function(e,n){o.addNotice(n,"error")})),o.unblock()},onAjaxSuccess:function(e){var o=storeabill.admin.edit_order;e.hasOwnProperty("fragments")&&o.refreshFragments(e.fragments),e.hasOwnProperty("message")?o.addNotice(e.message,"success"):e.hasOwnProperty("messages")&&n.each(e.messages,(function(e,n){o.addNotice(n,"success")})),o.unblock()},onRemoveNotice:function(){n(this).parents(".notice").slideUp(150,(function(){n(this).remove()}))},addNotice:function(e,o){storeabill.admin.edit_order.$wrapper.find(".notice-wrapper").append('<div class="notice is-dismissible notice-'+o+'"><p>'+e+'</p><button type="button" class="notice-dismiss"></button></div>')},getParams:function(){return storeabill.admin.edit_order.params},getDocument:function(e){return n("#sab-order-invoice-list").find("#sab-document-"+e)},documentExists:function(e){return storeabill.admin.edit_order.getDocument(e).length>0},initTiptip:function(){storeabill.admin.edit_order,n(document.body).trigger("sab_init_tooltips")}},n(document).ready((function(){storeabill.admin.edit_order.init()}))}});
