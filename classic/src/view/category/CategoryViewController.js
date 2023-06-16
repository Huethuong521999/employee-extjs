Ext.define("Admin.view.category.CategoryViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.categoryviewcontroller",

  init: function () {
    // hàm khởi tạo
    let viewModel = this.getViewModel();
    let categoryStore = viewModel.getStore("categoryStore");
    categoryStore.loadStore(); //hàm load store
  },

  onOpenDialog: function () {
    var viewModel = this.getViewModel();

    let selectedRecords = viewModel
      .getView()
      .getSelectionModel()
      .getSelection();
    let arr = selectedRecords.map((record) => record.getData());

    if (arr.length > 0) {
      let dialog = Ext.create("Ext.window.Window", {
        heigh: "60%",
        width: "45%",
        closable: true,
        closableToolText: "Đóng cửa sổ",
        resizable: true,
        modal: true,
        title: "Tiêu đề",
        closeAction: "destroy",
        layout: "vbox",
        items: [
          {
            xtype: "categorycheckdialog",
            viewModel: {
              data: {
                selectedArr: arr,
              },
            },
          },
        ],
      });
      dialog.show();
      this.fireEvent("getData", arr);
      dialog.down('categorycheckdialog').getController().on("handleSaveUploadFile", function (listCategory) {
        console.log("listCategory", listCategory);
      })
    } else {
      Ext.Msg.alert("Cảnh báo", "Vui lòng chọn bản ghi muốn tải file");
    }
  },
});
