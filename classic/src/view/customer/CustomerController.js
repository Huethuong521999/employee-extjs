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
      url: `http://localhost:3000/bills/${rec.id}`,
      method: 'GET',
      success: function (response) {
        let data = Ext.decode(response.responseText);
        formFamily.setStore(data.familyRelations || []);
        formDiploma.setStore(data.certificates || []);
        let form = editForm.down("form");
        if (rec) {
          editForm.setTitle("Sửa thông tin nhân viên");
          form.action = "edit";
          form.getForm().setValues(rec.getData());
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
            url: `http://localhost:3000/bills/${record.id}`,
            method: 'DELETE',
            success: function(response) {
              store.load();
            },
            failure: function(response) {
              Ext.Msg.alert('Lỗi', 'Xóa thất bại.');
            }
          });
        }
      },
      icon: Ext.Msg.QUESTION,
    });
  },
});
