Ext.define("Admin.view.category.BigDataGridView", {
  extend: "Ext.container.Container",
  xtype: "bigdatagridview",

  requires: [
    "Admin.view.bigdata.BigDataGrid",
    //   "Admin.view.category.CategoryViewModel",
    //   "Admin.view.category.CategoryViewController",
  ],

  // viewModel: "categoryviewmodel",
  // controller: "categoryviewcontroller",

  padding: "10px",

  items: [
    {
      xtype: "bigdatagrid",
      flex: 1,
      // bind: {
      //   store: "{category}",
      // },
    },
  ],
});
