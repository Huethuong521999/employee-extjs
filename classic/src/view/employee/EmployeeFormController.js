Ext.define("Admin.view.employee.EmployeeFormController", {
  extend: "Ext.app.ViewController",

  alias: "controller.employeeformcontroller",
  init : function () {
    let viewModel = this.getViewModel();
    
  },

  handleSave: function (window) {
    // let form = window.down("form");
    // let values = form.getValues();

    // if (form.isValid()) {
    //   let store = Ext.data.StoreManager.lookup("employeeStore");
    //   if (form.action === "edit") {
    //     let record = store.getById(values.id);
    //     record.set(values);
    //   } else {
    //     values.id = store.getCount() + 1;
    //     store.add(values);
    //   }
    //   form.reset();
    //   window.close();
    // } else {
    //   Ext.Msg.alert("Cảnh báo", "Chưa nhập đủ thông tin.");
    // }
  },

  handleSelectProvince: function (field, newValue, oldValue, eOpts) {
    const value = field.getSelection().data.id;
    const listDistricts = [];
    const form = field.up("window").down("form");
    let cbbIdHuyen = form.down("combobox[name=maHuyen]");
    let cbbIdXa = form.down("combobox[name=maXa]");

    Ext.Ajax.request({
      url: `http://training-api.oceantech.com.vn/cms/api/provinces/${value}/districts`,
      method: "GET",
      success: function (response) {
        var res = Ext.decode(response.responseText);
        if (res !== null) {
          Ext.each(res.data, function (obj) {
            listDistricts.push(obj);
          });
          cbbIdHuyen.setStore(listDistricts);
          cbbIdHuyen.clearValue(); //clear huyện khi select lại tỉnh
          cbbIdXa.clearValue(); //clear xã khi select lại tỉnh
        }
      },
      failure: function (response) {},
    });
  },

  handleSelectDistrict: function (field, newValue, oldValue, eOpts) {
    const selection = field.getSelection();
    const listWards = [];
    const form = field.up("window").down("form");
    const cbbIdXa = form.down("combobox[name=maXa]");

    if (selection) {
      const value = selection.data.id;

      Ext.Ajax.request({
        url: `http://training-api.oceantech.com.vn/cms/api/districts/${value}/wards`,
        method: "GET",
        success: function (response) {
          var res = Ext.decode(response.responseText);
          if (res !== null) {
            Ext.each(res.data, function (obj) {
              listWards.push(obj);
            });
            cbbIdXa.setStore(listWards);
          }
        },
        failure: function (response) {},
      });
    }
    cbbIdXa.clearValue(); //clear xã khi select lại huyện
  },
});
