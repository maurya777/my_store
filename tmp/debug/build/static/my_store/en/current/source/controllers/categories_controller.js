// ==========================================================================
// Project:   MyStore.categoriesController
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
MyStore.categoriesController = SC.TreeController.create(
/** @scope MyStore.categoriesController.prototype */ {

  populate: function(){
    var rootNode = SC.Object.create({
      treeItemIsExpanded: YES,
      name: "Products",
      treeItemChildren: function(){
        var categoryQuery = SC.Query.local(MyStore.Category, { orderBy: 'title' })
        var categories = MyStore.store.find(categoryQuery);
        return categories;
      }.property().cacheable()
    });
    this.set('content', rootNode);
  }
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('my_store');