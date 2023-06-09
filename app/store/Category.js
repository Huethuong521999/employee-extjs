Ext.define("Admin.store.Category", {
    extend: "Ext.data.Store",
  
    alias: "store.category",
  
    model: "Admin.model.Category",
  
    pageSize: 20,
  
    proxy: {
      type: "api",
      url: "~api/category",
    },
  });