Ext.define("Admin.view.employee.EmployeeFormController", {
  extend: "Ext.app.ViewController",

  alias: "controller.employeeformcontroller",

  handleSave: function (window) {
    let form = window.down("form");
    let values = form.getValues();

    if (form.isValid()) {
      let store = Ext.data.StoreManager.lookup("employeeStore");
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
});
