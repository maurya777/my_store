// ==========================================================================
// Project:   MyStore.Product Fixtures
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

sc_require('models/product');

MyStore.Product.FIXTURES = [
  {guid: 1, title: 'Product 1', desc: 'Description for product 1', price: 347, image: MyStore.productImageUrl, stock: 5},
  {guid: 2, title: 'Product 2', desc: 'Description for product 2', price: 343, image: MyStore.productImageUrl, stock: 5},
  {guid: 3, title: 'Product 3', desc: 'Description for product 3', price: 433, image: MyStore.productImageUrl, stock: 5},
  {guid: 4, title: 'Product 4', desc: 'Description for product 4', price: 67, image: MyStore.productImageUrl, stock: 0},
  {guid: 5, title: 'Product 5', desc: 'Description for product 5', price: 44, image: MyStore.productImageUrl, stock: 0},
  {guid: 6, title: 'Product 6', desc: 'Description for product 6', price: 564, image: MyStore.productImageUrl, stock: 0},
  {guid: 7, title: 'Product 7', desc: 'Description for product 7', price: 567, image: MyStore.productImageUrl, stock: 0},
  {guid: 8, title: 'Product 8', desc: 'Description for product 8', price: 56, image: MyStore.productImageUrl, stock: 0},
  {guid: 9, title: 'Product 9', desc: 'Description for product 9', price: 26, image: MyStore.productImageUrl, stock: 0}
];
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('my_store');