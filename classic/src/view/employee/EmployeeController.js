Ext.define("Admin.view.employee.EmployeeController", {
  extend: "Ext.app.ViewController",

  alias: "controller.employeecontroller",

  init: function () {
    // hàm khởi tạo
    let viewModel = this.getViewModel();
    let employeeStore = viewModel.getStore("employeeStore");
    employeeStore.loadStore(); //hàm load store
  },

  loadRecord: function (windowForm, record) {
    let form = windowForm.down("form");

    if (record) {
      windowForm.setTitle("Sửa thông tin nhân viên");
      form.action = "edit";
      form.getForm().setValues(record.getData());
    } else {
      windowForm.setTitle("Thêm mới thông tin nhân viên");
      form.action = "add";
      form.reset();
    }
  },

  onOpenEmloyeeForm: function () {
    let windowForm = Ext.create("Admin.view.employee.EmployeeForm", {
      record: null,
    });
    this.loadRecord(windowForm, null);
    windowForm.show();
  },

  handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
    console.log("record", record);
    let editForm = Ext.create("Admin.view.employee.EmployeeForm");
    this.loadRecord(editForm, record);
    editForm.show();
  },

  handleDelete: function (sender, record) {
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
          let store = Ext.data.StoreManager.lookup("employeeStore");

          store.remove(record);
        }
      },
      icon: Ext.Msg.QUESTION,
    });
  },
});
