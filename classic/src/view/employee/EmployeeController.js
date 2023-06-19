Ext.define("Admin.view.employee.EmployeeController", {
  extend: "Ext.app.ViewController",

  alias: "controller.employeecontroller",

  // init: function () {
  //   // hàm khởi tạo
  //   let viewModel = this.getViewModel();
  //   let employeeStore = viewModel.getStore("employeeStore");
  //   employeeStore.loadStore(); //hàm load store
  // },

  onOpenEmloyeeForm: function () {
    let windowForm = Ext.create("Admin.view.employee.EmployeeForm", {
      record: null,
    });
    this.loadRecord(windowForm, null);
    windowForm.show();
  },

  handleSave: function (window) {
    let form = window.down("form");
    let values = form.getValues();

    if (form.isValid()) {
      let store = Ext.getCmp("list-employee").getStore();
      if (form.action === "edit") {
        let record = store.getById(values.id);
        record.set(values);
      } else {
        values.id = store.getCount() + 1;
        store.add(values);
      }
      form.reset();
      window.close();
    } else {
      Ext.Msg.alert("Cảnh báo", "Chưa nhập đủ thông tin.");
    }
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
});
