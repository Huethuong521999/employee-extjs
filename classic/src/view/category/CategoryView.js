Ext.define("Admin.view.category.CategoryView", {
  extend: "Ext.container.Container",
  xtype: "categoryEx",

  requires: [
    "Admin.view.category.CategoryGrid",
    "Admin.view.category.CategoryViewModel",
    "Admin.view.category.CategoryViewController",
    // "Ext.layout.container.VBox",
  ],

  viewModel: "categoryviewmodel",
  controller: "categoryviewcontroller",

  padding: "10px",

  items: [
    {
      xtype: "button",
      text: "Tải file",
      padding: "10px",
      margin: "0px 0px 10px 10px",
      handler: "onOpenDialog",
    },
    {
      xtype: "categorygrid",
      flex: 1,
      bind: {
        store: "{category}",
      },
    },
  ],
});
