Ext.define("Admin.view.customer.CustomerController", {
  extend: "Ext.app.ViewController",

  alias: "controller.customer",

  onOpenCustomerForm: function () {
    let createForm = Ext.create('Admin.view.customer.addCustomer.AddCustomerForm');
    let formFamily = Ext.getCmp("list-family-customer");
    let formDiploma = Ext.getCmp("list-diploma-customer");
    formFamily.setStore([]);
    formDiploma.setStore([]);
    createForm.show()
  },

  handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
    let rec = grid.getStore().getAt(rowIndex);
    let editForm = Ext.create("Admin.view.customer.addCustomer.AddCustomerForm");
    let formFamily = Ext.getCmp("list-family-customer");
    let formDiploma = Ext.getCmp("list-diploma-customer");

    Ext.Ajax.request({
      url: `https://em-v2.oceantech.com.vn/em/employee/${rec.id}`,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ed568912-5af9-44a7-b861-38b85a771ad4',
      },
      success: function (response) {
        let data = Ext.decode(response.responseText);
        let employee = data.data;

        employee.dateOfIssuanceCard = Ext.Date.format(new Date(employee.dateOfIssuanceCard), 'd/m/Y');
        employee.dateOfBirth = Ext.Date.format(new Date(employee.dateOfBirth), 'd/m/Y');

        employee.employeeFamilyDtos.forEach(element => {
          element.dateOfBirth = Date(element.dateOfBirth);
        });

        employee.certificatesDto.forEach(element => {
          element.issueDate = Date(element.issueDate);
        });

        formFamily.setStore(employee.employeeFamilyDtos || []);
        formDiploma.setStore(employee.certificatesDto || []);
        let form = editForm.down("form");
        if (employee) {
          editForm.setTitle("Sửa thông tin nhân viên");
          form.action = "edit";
          form.getForm().setValues(employee);
        } else {
          editForm.setTitle("Thêm mới thông tin nhân viên");
          form.action = "add";
          form.reset();
        }
      },
      failure: function (response) {
        Ext.Msg.alert('Lỗi', 'Lấy dữ liệu thất bại.');
      }
    });

    editForm.show();
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
          let store = Ext.getCmp("list-customer").getStore();
          Ext.Ajax.request({
            url: `https://em-v2.oceantech.com.vn/em/employee/${record.id}`,
            method: 'DELETE',
            headers: {
              'Authorization': 'Bearer 510718ad-4249-42b4-994f-b23ce9900b37',
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
