Ext.define('Admin.view.customer.addCustomer.AddCustomerFormViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.AddCustomer',

  handleSave: function () {
    let view = this.getView();
    let form = view.down("form");
    let tabPanel = view.down('tabpanel');
    let formInfo = view.down("tabInfoCustomer");
    let valuesFormFamily = tabPanel.down('list-family-customer').getStore().getRange() || [];
    let valuesFormDiploma = tabPanel.down('list-diploma-customer').getStore().getRange() || [];
    let store = Ext.data.StoreManager.lookup('customerStoreId');

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
              view.close();
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
              view.close();
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

  handleClose: function () {
    let window = this.getView().close();
  }
});