Ext.define("Admin.store.Employee", {
  extend: "Ext.data.TreeStore",

  alias: "store.employeeStore",
  storeId: "employeeStore",
  model: "Admin.model.Employee",

  pageSize: 20,

  autoLoad: true,

  proxy: {
    type: "api",
    url: "~api/employee",
    reader: {
      type: "json",
      rootProperty: "children",
    },
  },

  // loadStore: function () {
  //   this.setProxy({
  //     type: "ajax",
  //     url: "~api/employee",
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
