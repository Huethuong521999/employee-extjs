Ext.define("Admin.view.category.categoryuploadViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.categoryuploadViewModel",
  requires: ["Admin.store.CategoryCheck"],

  stores: {
    categoryUploadStore: {
      type: "categoryUploadStore"
    },
  },
  data: {
    selectedArr: []
  },
});
