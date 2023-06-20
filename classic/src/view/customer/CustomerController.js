Ext.define("Admin.view.customer.CustomerController", {
  extend: "Ext.app.ViewController",

  alias: "controller.customer",

  init: function () {
    let viewModel = this.getViewModel();
    let customerStore = viewModel.getStore("customer");
    customerStore.loadStore();
  },

  onOpenCustomerForm: function () {
    let createForm = Ext.create('Admin.view.customer.addCustomer.AddCustomerForm');
    createForm.show();
  },

  handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
    let thisCustomer = this;
    let editForm = Ext.create("Admin.view.customer.addCustomer.AddCustomerForm");
    let form = editForm.down("form");

    if (record.id) {
      Ext.Ajax.request({
        url: `https://em-v2.oceantech.com.vn/em/employee/${record.id}`,
        method: 'GET',
        headers: {
          'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
        },
        listeners: {
          exception: function (proxy, response, operation) {
            customerStore.checkToken(proxy, response, operation);
          }
        },
        success: function (response) {
          let data = Ext.decode(response.responseText);
          let employee = data.data;

          employee.dateOfBirth = new Date(employee.dateOfBirth)
          employee.dateOfIssuanceCard = new Date(employee.dateOfIssuanceCard)

          if (employee) {
            editForm.setTitle("Sửa thông tin nhân viên");
            form.action = "edit";
            thisCustomer.fireEvent('DataFamily', employee.employeeFamilyDtos || []);
            thisCustomer.fireEvent('DataDiploma', employee.certificatesDto || []);
            form.getForm().setValues(employee);
          } else {
            editForm.setTitle("Thêm mới thông tin nhân viên");
            form.action = "add";
            form.reset();
          }
          editForm.show();
        },
        failure: function (response) {
          Ext.Msg.alert('Lỗi', 'Lấy dữ liệu thất bại.');
        }
      });
    } else {
      Ext.Msg.alert('Lỗi', 'Lấy dữ liệu thất bại.');
    }
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

  handleDelete: function (grid, rowIndex, colIndex, item, e, record) {
    let viewModel = this.getViewModel();
    let store = viewModel.getStore('customer');
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
          Ext.Ajax.request({
            url: `https://em-v2.oceantech.com.vn/em/employee/${record.id}`,
            method: 'DELETE',
            headers: {
              'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
            },
            success: function (response) {
              store.load();
            },
            failure: function (response) {
              Ext.Msg.alert('Lỗi', 'Xóa thất bại.');
            }
          });
        }
      },
      icon: Ext.Msg.QUESTION,
    });
  },
});
