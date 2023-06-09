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
    let certificatesData = record.get('certificates');
    let familyRelationsData = record.get('familyRelations');
    let rec = grid.getStore().getAt(rowIndex);
    let editForm = Ext.create("Admin.view.customer.addCustomer.AddCustomerForm");
    let formFamily = Ext.getCmp("list-family-customer");
    let formDiploma = Ext.getCmp("list-diploma-customer");

    formFamily.setStore(familyRelationsData);
    formDiploma.setStore(certificatesData);

    this.loadRecord(editForm, rec);
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
          store.remove(record);
        }
      },
      icon: Ext.Msg.QUESTION,
    });
  },
});
