Ext.define("Admin.store.Category", {
  extend: "Ext.data.Store",
  alias: "store.categoryStore",
  storeId: "categoryStore",
  model: "Admin.model.Category",

  pageSize: 20,

  loadStore: function () {
    this.setProxy({
      type: "api",
      url: "~api/category",
      actionMethods: {
        read: "GET",
      },
      paramsAsJson: true,
      noCache: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      timeout: 60000,
      reader: {
        type: "json",
        rootProperty: "children",
      },
    });

    this.load();
  },
});
