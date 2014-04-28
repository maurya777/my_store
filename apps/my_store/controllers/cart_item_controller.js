// ==========================================================================
// Project:   MyStore.cartItemController
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
MyStore.cartItemController = SC.ObjectController.create(
/** @scope MyStore.cartItemController.prototype */ {
  contentBinding: 'MyStore.cartController.selection',

  removeItem: function () {
    this.get('content').get('firstObject').destroy(YES);
  }
  });
