// ==========================================================================
// Project:   MyStore - mainPage
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

// This page describes the main user interface for your application.
MyStore.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['categoryView', 'productView'],

    categoryView: SC.ScrollView.design({
      layout: {top: 5,width: 100,bottom: 5,left: 5},
      contentView: SC.ListView.design({
          contentValueKey: 'title',
          contentBinding: 'MyStore.categoriesController.arrangedObjects',
          selectionBinding: 'MyStore.categoriesController.selection'
      })
    }),

    productView: SC.ListView.design({
      layout: {right: 5, bottom: 5, left: 110, top:5},

      visibilityObserver: function(){
        this.set('isVisible', MyStore.categoryController.get('isProduct'));
      }.observes('MyStore.categoryController.isProduct'),

      childViews: ['productImageView', 'productDescView'],
      productImageView: SC.View.design({
        layout: {left: 5, height: 210, width:200},
        childViews: ['productPhoto', 'buyButton'],
        productPhoto: SC.ImageView.design({
          layout: {left: 5, height: 150, width:190, top: 5},
          valueBinding: 'MyStore.categoryController.image'
        }),
        buyButton: SC.ButtonView.design({
          layout: {left: 5, height: 23, width:190, bottom: 5},
          isEnabledBinding: SC.Binding.bool('MyStore.categoryController.stock'),
          titleBinding: SC.Binding.transform(function (value, binding) {
            return (parseInt(value) > 0 ? 'Add to Cart' : 'Out of stock!!');
          }).from('MyStore.categoryController.stock'),
          target: 'MyStore.cartController',
          action: 'addToCart'
        })
      }),

      productDescView: SC.View.design({
        layout: {right: 5, bottom: 5, left:220},
        childViews: ['productTitle','productDesc', 'productPrice'],
        productTitle: SC.View.design({
          layout: {left:5, right:5, height:30, top:5},
          childViews: ['fieldLabel', 'fieldValue'],
          fieldLabel: SC.LabelView.design({
            layout: {left:5, width:70, height:30, top:5},
            value: 'Title: '
          }),
          fieldValue: SC.LabelView.design({
            layout: {left:80, right:5, height:30, top:5},
            valueBinding: 'MyStore.categoryController.title'
          })
        }),

        productDesc: SC.View.design({
          layout: {left:5, right:5, height:50, top:35},
          childViews: ['fieldLabel', 'fieldValue'],
          fieldLabel: SC.LabelView.design({
            layout: {left:5, width:70, height:30, top:5},
            value: 'Description: '
          }),
          fieldValue: SC.LabelView.design({
            layout: {left:80, right:5, height:30, top:5},
            valueBinding: 'MyStore.categoryController.desc'
          })
        }),

        productPrice: SC.LabelView.design({
          layout: {left:5, right:5, height:30, top:90},
          childViews: ['fieldLabel', 'fieldValue'],
          fieldLabel: SC.LabelView.design({
            layout: {left:5, width:70, height:30, top:5},
            value: 'Price: '
          }),
          fieldValue: SC.LabelView.design({
            layout: {left:80, right:5, height:30, top:5},
            valueBinding:SC.Binding.transform(function (value, binding) {
              return parseFloat(value).toFixed(2);
            }).from('MyStore.categoryController.price')
          })

        })
      })
    })
  })

});
