// ==========================================================================
// Project:   MyStore.Category
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
MyStore.Category = SC.Record.extend(
/** @scope MyStore.Category.prototype */ {

  title: SC.Record.attr(String),
  products: SC.Record.toMany('MyStore.Product', {
      inverse: 'category',
      isMaster: YES
  }),

  treeItemIsExpanded: NO,

  selectionBinding: 'MyStore.productsController.selection',

  treeItemChildren: function(){
    return this.get("products");
  }.property('products').cacheable()

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('my_store');