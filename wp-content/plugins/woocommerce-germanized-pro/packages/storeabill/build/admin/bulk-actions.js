!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./assets/admin/bulk-actions.js")}({"./assets/admin/bulk-actions.js":
/*!**************************************!*\
  !*** ./assets/admin/bulk-actions.js ***!
  \**************************************/
/*! no static exports found */function(e,t){var n;window.storeabill=window.storeabill||{},window.storeabill.admin=window.storeabill.admin||{},n=jQuery,window.storeabill.admin.bulk_actions={params:{},init:function(){var e=storeabill.admin.bulk_actions;e.params=storeabill_admin_bulk_actions_params,n(document).on("click","#doaction, #doaction2",e.onBulkSubmit)},onBulkSubmit:function(){var e=storeabill.admin.bulk_actions,t=n(this).parents(".bulkactions").find("select[name^=action]").val(),a=e.params.hasOwnProperty("object_type")?e.params.object_type:n(this).parents("#posts-filter").find("input[name="+e.params.object_input_type_name+"]").val(),i=[];if(e.getForm().find('input[name="'+e.params.table_type+'[]"]:checked').each((function(){i.push(n(this).val())})),e.params.bulk_actions.hasOwnProperty(t)&&i.length>0){var o=e.params.bulk_actions[t];return n(".sab-bulk-action-wrapper").find(".bulk-title").text(o.title),n(".sab-bulk-action-wrapper").addClass("processing"),e.getForm().find(".bulkactions button").prop("disabled",!0).addClass("disabled"),e.handleBulkAction(t,1,i,a),!1}},getForm:function(){var e=storeabill.admin.bulk_actions;return n('input[name="'+e.params.table_type+'[]"]:checked').parents("form")},handleBulkAction:function(e,t,a,i){var o=storeabill.admin.bulk_actions,r=o.params.bulk_actions[e];n.ajax({type:"POST",url:o.params.ajax_url,data:{action:"storeabill_admin_handle_bulk_action",bulk_action:e,step:t,type:i,reference_type:o.params.hasOwnProperty("reference_type")?o.params.reference_type:"",ids:a,security:r.nonce},dataType:"json",success:function(t){t.success?"done"===t.step?(n(".sab-bulk-action-wrapper").find(".sab-bulk-progress").val(t.percentage),window.location=t.url,setTimeout((function(){n(".sab-bulk-action-wrapper").removeClass("processing"),o.getForm().find(".bulkactions button").prop("disabled",!1).removeClass("disabled")}),2e3)):(n(".sab-bulk-action-wrapper").find(".sab-bulk-progress").val(t.percentage),o.handleBulkAction(e,parseInt(t.step,10),t.ids,t.type)):(n(".sab-bulk-notice-wrapper").find(".notice").remove(),n(".sab-bulk-action-wrapper").removeClass("processing"),o.getForm().find(".bulkactions button").prop("disabled",!1).removeClass("disabled"),t.hasOwnProperty("messages")&&n.each(t.messages,(function(e,t){n(".sab-bulk-notice-wrapper").append('<div class="notice is-dismissible notice-error"><p>'+t+'</p><button type="button" class="notice-dismiss"></button></div>')})))}}).fail((function(e){window.console.log(e)}))}},n(document).ready((function(){storeabill.admin.bulk_actions.init()}))}});
