// ==========================================================================
// Project:   MyStore.Cart
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
MyStore.Cart = SC.Record.extend(
/** @scope MyStore.Cart.prototype */ {
  product: SC.Record.toOne('MyStore.Product', {
    inverse: 'cart',
    isMaster: YES
  }),
  quantity: SC.Record.attr(Number)
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('my_store');