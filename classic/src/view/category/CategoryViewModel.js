Ext.define("Admin.view.category.CategoryViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.categoryviewmodel",
  requires: ["Admin.model.Category", "Admin.store.Category"],

  stores: {
    categoryStore: {
      type: "categoryStore",
    },
  },
  data: {},
});
