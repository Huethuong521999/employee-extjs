Ext.define('Admin.view.customer.addCustomer.AddCustomerFormViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.AddCustomer',

  handleSave: function (window) {
    let form = window.down("form");
    let formInfo = window.down("tabInfoCustomer");
    let store = Ext.getCmp("list-customer").getStore();
    let valuesFormFamily = Ext.getCmp("list-family-customer").getStore().getRange();
    let valuesFormDiploma = Ext.getCmp("list-diploma-customer").getStore().getRange();
    let dataFamily = [];
    let dataDiploma = [];

    valuesFormFamily.forEach(item => dataFamily.push(item.getData()));
    valuesFormDiploma.forEach(item => dataDiploma.push(item.getData()));

    if (formInfo.isValid()) {
      let data = {
        ...formInfo.getValues(),
        certificates: dataDiploma,
        familyRelations: dataFamily,
      }

      if (data?.id) {
        Ext.Ajax.request({
          url: `http://localhost:3000/bills/${data.id}`,
          method: 'PUT',
          jsonData: data,
          success: function (response) {
            store.load();
            form.reset();
            window.close();
          },
          failure: function (response) {
            Ext.Msg.alert('Lỗi', 'Cập nhật thất bại.');
          }
        });
      } else {
        Ext.Ajax.request({
          url: 'http://localhost:3000/bills',
          method: 'POST',
          jsonData: data,
          success: function (response) {
            store.load();
            form.reset();
            window.close();
          },
          failure: function (response) {
            Ext.Msg.alert('Lỗi', 'Thêm mới thất bại.');
          }
        });
      }
    } else {
      Ext.Msg.alert('Cảnh báo', 'Chưa nhập đủ thông tin.');
    }
  },
});