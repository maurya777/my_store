// ==========================================================================
// Project:   MyStore.cartController
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
MyStore.cartController = SC.ArrayController.create(
/** @scope MyStore.cartController.prototype */ {

    addToCart: function () {
      var productId       = MyStore.categoryController.get('id');
      var product         = MyStore.store.find(MyStore.Product, productId);
      var query           = SC.Query.local(MyStore.Cart, {conditions: 'product = {prod}', parameters: {prod:product}});
      var cartItem        = MyStore.store.find(query);

      if (cartItem.get('length') > 0) {
        cartItem  = cartItem.get('firstObject');
        cartItem.set('quantity', cartItem.get('quantity') + 1);
      } else {
        cartItem = MyStore.store.createRecord(MyStore.Cart, {quantity: 1});
        cartItem.set('product', product);
      }
      product.set('stock', product.get('stock') - 1 );
      //cartItem.commitRecord();
      MyStore.cartController.set('content', MyStore.store.find(MyStore.Cart));
      this.invokeLater(function () {
        MyStore.cartController.selectObject(cartItem);
      });
      MyStore.getPath('cartPage.mainPane').append();
      return YES;
    },

    checkout: function () {
      alert('Surprize!! The items are already there in you left drawer')
    },

    continueShopping: function () {
      MyStore.getPath('cartPage.mainPane').remove();
    }
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('my_store');