Ext.define("Admin.view.employee.EmployeeController", {
  extend: "Ext.app.ViewController",

  alias: "controller.employeecontroller",

  init: function () {
    // hàm khởi tạo
    let viewModel = this.getViewModel();
    let employeeStore = viewModel.getStore("employeeStore");
    employeeStore.loadStore(); //hàm load store
  },

  onOpenEmloyeeForm: function () {
    this.showPopup(null);
  },

  handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
    this.showPopup(record.getData());
  },

  handleDelete: function (grid, rowIndex, colIndex, item, e, record) {
    let store = this.getViewModel().getStore("employeeStore");

    Ext.Msg.show({
      title: "Xác nhận",
      msg: "Bạn có chắc chắn muốn xóa bản ghi này không?",
      width: 300,
      closable: true,
      buttons: Ext.Msg.YESNO,
      buttonsText: {
        yes: "Đống ý",
        no: "Hủy",
      },
      multiline: false,
      fn: function (buttonValue, inputText, showConfig) {
        if (buttonValue === "yes") {
          store.remove(record);
        }
      },
      icon: Ext.Msg.QUESTION,
    });
  },
  
  showPopup: function (recordEmployee) {
    var popup = Ext.create("Ext.window.Window", {
      height: 400,
      align: "center",
      width: 750,
      closable: true,
      closableToolText: "Đóng cửa sổ",
      resizable: true,
      modal: true,
      title: recordEmployee ? "Cập nhật nhân viên" : "Thêm mới nhân viên",
      closeAction: "destroy",
      // bodyStyle : 'background-color :transparent',
      layout: "fit",
      bodyStyle: "padding:10px",
      items: [
        {
          xtype: "EmployeeFormView",
          viewModel: {
            data: {
              employeeValue: recordEmployee || {},
            },
          },
        },
      ],
    });
    popup.show();
    popup.down("EmployeeFormView").getController().on("handleSave", function (record) {
        //khi lưu xong ở pop thì đây là hàm xử lý ở dưới
        console.log("record", record);
      });
  },
});
