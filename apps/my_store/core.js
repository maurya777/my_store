// ==========================================================================
// Project:   MyStore
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals MyStore */

/** @namespace

  My cool new app.  Describe your application.

  @extends SC.Object
*/
MyStore = SC.Application.create(
  /** @scope MyStore.prototype */ {

  NAMESPACE: 'MyStore',
  VERSION: '0.1.0',

  productImageUrl: 'http://undercdn.under30media.netdna-cdn.com/wp-content/uploads/2013/05/Product-Value-300x300.jpg',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures)
});
