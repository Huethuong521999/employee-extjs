Ext.define("Admin.view.category.CategoryViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.categoryviewcontroller",

  onOpenDialog: function () {
    let selectedRecords = Ext.getCmp("list-category")
      .getSelectionModel()
      .getSelection();
    let arr = selectedRecords.map((record) => record.getData());

    if (arr.length > 0) {
      let windowDialog = Ext.create("Admin.view.category.CategoryCheckDialog", {
        record: null,
      });

      let grid = Ext.getCmp("list-category-check");

      grid.setStore(arr);
      grid.getView().refresh();

      windowDialog.show();
    } else {
      Ext.Msg.alert("Cảnh báo", "Vui lòng chọn bản ghi muốn tải file");
    }
  },
});
