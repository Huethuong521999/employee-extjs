Ext.define("Admin.store.CategoryCheck", {
    extend: "Ext.data.Store",
  
    alias: "store.categoryUploadStore",
  
    // model: "Admin.model.CategoryCheck",
  
    pageSize: 20,

    // loadStore: function () {
    //   this.setProxy({
    //     type: "api",
    //     url: "~api/category-check",
    //     actionMethods: {
    //       read: "GET",
    //     },
    //     paramsAsJson: true,
    //     noCache: false,
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     timeout: 60000,
    //     reader: {
    //       type: "json",
    //       rootProperty: "children",
    //     },
    //   });
  
    //   this.load();
    // },
  });