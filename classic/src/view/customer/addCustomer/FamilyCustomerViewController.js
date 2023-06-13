Ext.define("Admin.view.customer.addCustomer.FamilyCustomerViewController", {
    extend: "Ext.app.ViewController",

    alias: "controller.familyCustomer",

    handleSubmitFamily: function (sender, record) {
        let form = this.getView().getForm();
        let values = form.getValues();
        if (form.isValid()) {
            let store = Ext.getCmp("list-family-customer").getStore();

            if (values.id) {
                let record = store.getById(values.id);
                record.set(values);
            } else {
                values.id = store.getCount() + 1;
                store.add(values);
            }
            form.reset();
        } else {
            Ext.Msg.alert('Cảnh báo', 'Chưa nhập đủ thông tin.');
        }
    },

    handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
        let form = Ext.getCmp("familyCustomer");
        let data = record.getData();
        data.dateOfBirth = Ext.Date.format(new Date(data.dateOfBirth), 'd/m/Y');
        form.getForm().setValues(data)
    },

    handleClear: function (grid, rowIndex, colIndex, item, e, record) {
        let form = this.getView().getForm();
        form.reset();
    },

    handleDelete: function (grid, rowIndex, colIndex, item, e, record) {
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
                    let store = Ext.getCmp("list-family-customer").getStore();
                    store.remove(record);
                }
            },
            icon: Ext.Msg.QUESTION,
        });
    },
});
