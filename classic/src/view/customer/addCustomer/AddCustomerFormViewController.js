Ext.define('Admin.view.customer.addCustomer.AddCustomerFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.AddCustomer',

    handleSave: function (window) {
        let form = window.down("form");
        let formInfo = window.down("tabInfoCustomer");
        let valuesFormFamily = Ext.getCmp("list-family-customer").getStore().getRange();
        let valuesFormDiploma = Ext.getCmp("list-diploma-customer").getStore().getRange();
        
        if (formInfo.isValid()) {
          let store = Ext.getCmp("list-customer").getStore();
          let values = {
            ...formInfo.getValues(),
            certificates: valuesFormDiploma,
            familyRelations:  valuesFormFamily,
          }
    
          if (form.action === "edit") {
            let record = store.getById(values.id);
            record.set(values);
          } else {
            values.id = store.getCount() + 1;
            store.add(values);
          }
          form.reset();
          window.close();
    
        } else {
          Ext.Msg.alert('Cảnh báo', 'Chưa nhập đủ thông tin.');
        }
      },
});