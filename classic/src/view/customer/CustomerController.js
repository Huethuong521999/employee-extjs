Ext.define("Admin.view.customer.CustomerController", {
  extend: "Ext.app.ViewController",
  alias: "controller.customer",

  init: function () {
    let viewModel = this.getViewModel();
    let customerStore = viewModel.getStore("customer");
    customerStore.loadStore();
  },

  onOpenCustomerForm: function () {
    let popup = this.popup(null);
    popup.show();
  },

  handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
    let thisCustomer = this;

    (function getByIdEmployee() {
      Ext.Ajax.request({
        url: `https://em-v2.oceantech.com.vn/em/employee/${record.id}`,
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + Ext.util.Cookies.get('token'),
        },
        success: function (response) {
          let data = Ext.decode(response.responseText);
          let employee = data.data;

          employee.dateOfBirth = new Date(employee.dateOfBirth)
          employee.dateOfIssuanceCard = new Date(employee.dateOfIssuanceCard)

          if (employee) {
            let popup = thisCustomer.popup(employee);
            popup.down('addCustomerForm').getViewModel().set("isRegister", false)
            thisCustomer.fireEvent('employeeId', (employee && employee.id) || null);
            popup.show();
          }
        },
        failure: function (response) {
          if (response.status === 401) {
            CheckToken.checkToken(response, getByIdEmployee);
          } else {
            Ext.Msg.alert('Lỗi', 'Lấy dữ liệu thất bại.');
          }
        }
      });
    })();
  },

  popup: function (recordEmployee) {
    return Ext.create("Ext.window.Window", {
      layout: "fit",
      width: '90%',
      height: '90%',
      align: "center",
      closable: true,
      closableToolText: "Đóng cửa sổ",
      resizable: true,
      modal: true,
      title: recordEmployee ? "Cập nhật nhân viên" : "Thêm mới nhân viên",
      closeAction: 'destroy',
      layout: 'fit',
      bodyStyle: 'padding:10px',
      items: [
        {
          xtype: "addCustomerForm",
          viewModel: {
            data: {
              info: recordEmployee,
            },
          },
        },
      ],
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
          (function callApiDelete() {
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
                if (response.status === 401) {
                  CheckToken.checkToken(response, callApiDelete);
                } else {
                  Ext.Msg.alert('Lỗi', 'Xóa thất bại.');
                }
              }
            });
          })();
        }
      },
      icon: Ext.Msg.QUESTION,
    });
  },

  showIconEdit: function (v, meta, rec) {
    if (
      rec.get('submitProfileStatus') === 1 ||
      rec.get('submitProfileStatus') === 4 ||
      rec.get('submitProfileStatus') === 5
    ) {
      return 'x-fa fa-edit';
    } else {
      return 'x-hidden';
    }
  },

  showIconView: function (v, meta, rec) {
    if (rec.get('submitProfileStatus') === 2) {
      return 'x-fa fa-eye';
    } else {
      return 'x-hidden';
    }
  },

  showIconDelete: function (v, meta, rec) {
    if (rec.get('submitProfileStatus') === 1) {
      return 'fa fa-trash';
    } else {
      return 'x-hidden';
    }
  },

  handleView: function (grid, rowIndex, colIndex, item, e, record) {
    let thisCustomer = this;
    (function getByIdEmployee() {
      Ext.Ajax.request({
        url: `https://em-v2.oceantech.com.vn/em/employee/${record.id}`,
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + Ext.util.Cookies.get('token'),
        },
        success: function (response) {
          let data = Ext.decode(response.responseText);
          let employee = data.data;

          employee.dateOfBirth = new Date(employee.dateOfBirth)
          employee.dateOfIssuanceCard = new Date(employee.dateOfIssuanceCard)

          if (employee) {
            let popup = thisCustomer.popup(employee);
            popup.down('addCustomerForm').getViewModel().set("isView", true)

            thisCustomer.fireEvent('employeeId', (employee && employee.id) || null);
            popup.show();
          }
        },
        failure: function (response) {
          if (response.status === 401) {
            CheckToken.checkToken(response, getByIdEmployee);
          } else {
            Ext.Msg.alert('Lỗi', 'Lấy dữ liệu thất bại.');
          }
        }
      });
    })();
  }
});
