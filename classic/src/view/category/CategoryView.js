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

  headerBorders: true,
  rowLines: true,
  scrollable: true,
  padding: "10px",

  items: [
    {
      xtype: "button",
      text: "Kiểm tra",
      padding: "10px",
      margin: "0px 0px 10px 10px",
      //   handler: "onOpenEmloyeeForm",
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
