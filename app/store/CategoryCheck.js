Ext.define("Admin.store.CategoryCheck", {
    extend: "Ext.data.Store",
  
    alias: "store.categorycheck",
  
    model: "Admin.model.CategoryCheck",
  
    pageSize: 20,
  
    proxy: {
      type: "api",
      url: "~api/category-check",
    },
  });