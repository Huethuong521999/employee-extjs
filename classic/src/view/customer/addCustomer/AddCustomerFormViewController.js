Ext.define('Admin.view.customer.addCustomer.AddCustomerFormViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.AddCustomer',

  handleSave: function (window) {
    let form = window.down("form");
    let formInfo = window.down("tabInfoCustomer");
    let store = Ext.getCmp("list-customer").getStore();
    let valuesFormFamily = Ext.getCmp("list-family-customer").getStore().getRange() || [];
    let valuesFormDiploma = Ext.getCmp("list-diploma-customer").getStore().getRange() || [];

    let dataFamily = [];
    let dataDiploma = [];

    valuesFormFamily.forEach(item => {
      let itemFamily = item.data;
      itemFamily.dateOfBirth = Ext.Date.format(new Date(itemFamily.dateOfBirth), 'Y-m-d');
      dataFamily.push(itemFamily);
    });

    valuesFormDiploma.forEach(item => {
      let itemDiploma = item.data;
      itemDiploma.issueDate = Ext.Date.format(new Date(itemDiploma.issueDate), 'Y-m-d');
      dataDiploma.push(itemDiploma)
    });

    let values = formInfo.getValues();
    values.dateOfBirth = Ext.Date.format(new Date(values.dateOfBirth), 'Y-m-d');
    values.dateOfIssuanceCard = Ext.Date.format(new Date(values.dateOfIssuanceCard), 'Y-m-d');

    if (formInfo.isValid()) {
      let data = {
        ...values,
        submitProfileStatus: 1,
        certificatesDto: dataDiploma,
        employeeFamilyDtos: dataFamily,
      }

      if (data.id) {
        Ext.Ajax.request({
          url: `https://em-v2.oceantech.com.vn/em/employee/${data.id}`,
          method: 'PUT',
          headers: {
            'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
          },
          jsonData: data,
          success: function (response) {
            let data = Ext.decode(response.responseText);
            if (data.code === 200) {
              store.load();
              form.reset();
              window.close();
              return;
            }
            Ext.Msg.alert('Lỗi', data.message);
          },
          failure: function (response) {
            Ext.Msg.alert('Lỗi', 'Cập nhật thất bại.');
          }
        });
      } else {
        Ext.Ajax.request({
          url: 'https://em-v2.oceantech.com.vn/em/employee',
          method: 'POST',
          headers: {
            'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
          },
          jsonData: data,
          success: function (response) {
            let data = Ext.decode(response.responseText);
            if (data.code === 200) {
              store.load();
              form.reset();
              window.close();
              return;
            }
            Ext.Msg.alert('Lỗi', data.message);
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