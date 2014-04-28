// ==========================================================================
// Project:   MyStore - mainPage
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

MyStore.cartPage = SC.Page.design({

  mainPane: SC.PanelPane.design({
    layout: { centerX: 0, centerY: 0, width: 550, height: 200},

    contentView: SC.View.design({
      childViews: ['actionsView', 'detailView'],

      actionsView: SC.ToolbarView.design({
        layout: {top: 5, height: 28, right: 5, left: 5},
        childViews: ['cartLabel', 'cartActions'],
        cartLabel: SC.LabelView.design({
          layout: {top: 5, width: 150, left: 5, centerY:0},
          value: 'Cart Items'
        }),
        cartActions: SC.View.design({
          layout: {top: 5, width: 250, right: 5, centerY:0},
          childViews: ['checkoutButton', 'closeButton'],
          checkoutButton: SC.ButtonView.design({
            layout: {left:0, width: 100},
            title: 'Checkout',
            target: 'MyStore.cartController',
            action: 'checkout'
          }),
          closeButton: SC.ButtonView.design({
            layout: {right:0, width: 130},
            title: 'Continue shopping',
            target: 'MyStore.cartController',
            action: 'continueShopping'
          })
        })
      }),

      detailView: SC.View.design({
        layout: {top: 35, bottom: 5, right: 5, left: 5},
        childViews: ['cartItems'],
        cartItems: SC.ListView.design({
          contentBinding: 'MyStore.cartController.content',
          selectionBinding: 'MyStore.cartController.selection',
          showAlternatingRows: YES,
          rowHeight: 24,
          exampleView: SC.View.design({
            childViews: ['titleView', 'quantityView', 'deleteButton'],
            quantityView: SC.TextFieldView.design({
              layout: {left: 5, width: 50},
              valueBinding: SC.Binding.oneWay('.parentView.content.quantity'),
              quantityObserver: function () {
                var content = this.getPath('parentView.content');
                if (content.get('quantity')) {
                  var stock     = MyStore.categoryController.get('stock');
                  var quantity  = this.getPath('parentView.content.quantity');
                  var value     = this.get('value');
                  if (value > (stock + quantity)) {
                    alert('Quantity is not available');
                    this.setPath('parentView.content.quantity', quantity);
                  } else if (value < 1) {
                    alert('Invalid quantity');
                    this.setPath('parentView.content.quantity', 1);
                  } else {
                    this.setPath('parentView.content.quantity', value);
                  }
                }
              }.observes('.value')
            }),
            titleView: SC.LabelView.design({
              layout: {left: 60, width: 100},
              valueBinding: '.parentView.content.product.title'
            }),
            deleteButton: SC.ButtonView.design({
              layout: {right: 5, width: 100},
              title: 'Cancel',
              target: 'MyStore.cartItemController',
              action: 'removeItem'
            })
          })
        })
      })
    })
  })
});
