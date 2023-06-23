Ext.define("Admin.view.customer.CustomerController", {
  extend: "Ext.app.ViewController",
  alias: "controller.customer",

  init: function () {
    let viewModel = this.getViewModel();
    let customerStore = viewModel.getStore("customer");
    customerStore.loadStore();
  },

  onOpenCustomerForm: function () {
    this.showPopup(null);
  },

  handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
    let thisCustomer = this;
    let editForm = Ext.create("Admin.view.customer.addCustomer.AddCustomerForm");
    let form = editForm.down("form");

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
            thisCustomer.showPopup(employee)
            thisCustomer.fireEvent('employeeId',(employee && employee.id) || null);
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

  showPopup: function (recordEmployee) {
    let dialog = Ext.create("Ext.window.Window", {
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
    dialog.show();
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
});
