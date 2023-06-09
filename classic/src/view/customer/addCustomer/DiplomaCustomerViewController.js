Ext.define("Admin.view.customer.addCustomer.DiplomaCustomerViewController", {
    extend: "Ext.app.ViewController",

    alias: "controller.diplomaCustomer",

    handleSubmitDiploma: function (sender, record) {
        let form = this.getView().getForm();
        let values = form.getValues();
        if (form.isValid()) {
            let store = Ext.getCmp("list-diploma-customer").getStore();

            if (values?.id) {
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
        let form = Ext.getCmp("diplomaCustomer");
        form.getForm().setValues(record.getData())
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
                    let store = Ext.getCmp("list-diploma-customer").getStore();
                    store.remove(record);
                }
            },
            icon: Ext.Msg.QUESTION,
        });
    },
});
