// ==========================================================================
// Project:   MyStore.Product
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
MyStore.Product = SC.Record.extend(
/** @scope MyStore.Product.prototype */ {
  title: SC.Record.attr(String),
  desc: SC.Record.attr(String),
  price: SC.Record.attr(Number),
  image: SC.Record.attr(String),
  stock: SC.Record.attr(Number, {
    defaultValue: 0
  }),
  isProduct: YES
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('my_store');