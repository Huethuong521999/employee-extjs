Ext.define("Admin.store.Employee", {
  extend: "Ext.data.TreeStore",

  alias: "store.employee",

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
});
