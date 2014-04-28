// ==========================================================================
// Project:   MyStore.categoriesController
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
MyStore.categoryController = SC.ObjectController.create(
/** @scope MyStore.categoryController.prototype */ {
  contentBinding: 'MyStore.categoriesController.selection'
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('my_store');