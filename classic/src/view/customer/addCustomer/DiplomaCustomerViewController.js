Ext.define("Admin.view.customer.addCustomer.DiplomaCustomerViewController", {
    extend: "Ext.app.ViewController",

    alias: "controller.diplomaCustomer",
    init: function () {
        this.listen({
            controller: {
                '*': {
                    DataDiploma: 'setData'
                }
            }
        });
    },

    setData: function (data) {
        let viewModel = this.getViewModel();
        let store = viewModel.getStore('certificatesDto');

        if (store) {
            store.loadData(data);
        }
    },

    handleSubmitDiploma: function (sender, record) {
        let view = this.getView();
        let form = view.getForm();
        let viewModel = this.getViewModel();
        let formInfo = view.up('tabpanel').down('tabInfoCustomer').getValues();
        let store = view.up('tabpanel').down('list-diploma-customer').getStore();

        let values = {
            ...form.getValues(),
            employeeId: formInfo.id ? formInfo.id : null
        };

        let listData = store.getRange() || [];
        let dataDiploma = [];

        if (form.isValid()) {
            if (values.id) {
                if (formInfo.id) {
                    Ext.Ajax.request({
                        url: `https://em-v2.oceantech.com.vn/em/certificate/${values.id}`,
                        method: 'PUT',
                        headers: {
                            'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
                        },
                        jsonData: values,
                        success: function (response) {
                            let data = Ext.decode(response.responseText);
                            if (data.code === 200) {
                                let record = store.getById(values.id);
                                record.set(data.data);
                                form.reset();
                                return;
                            }
                            Ext.Msg.alert('Lỗi', data.message);
                        },
                        failure: function (response) {
                            Ext.Msg.alert('Lỗi', 'Cập nhật thất bại.');
                        }
                    });
                    return;
                }
                let record = store.getById(values.id);
                record.set(values);
                form.reset();
            } else {
                if (formInfo.id) {
                    Ext.Ajax.request({
                        url: `https://em-v2.oceantech.com.vn/em/certificate?employeeId=${formInfo.id}`,
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
                        },
                        jsonData: [values],
                        success: function (response) {
                            let data = Ext.decode(response.responseText);
                            if (data.code === 200) {
                                store.setData(data.data);
                                console.log(store.getRange())
                                form.reset();
                                return;
                            }
                            Ext.Msg.alert('Lỗi', data.message);
                        },
                        failure: function (response) {
                            Ext.Msg.alert('Lỗi', 'Thêm thất bại.');
                        }
                    });
                    return;
                }
                values.id = store.getCount() + 1;
                store.add(values);
                form.reset();
            }
        } else {
            Ext.Msg.alert('Cảnh báo', 'Chưa nhập đủ thông tin.');
        }
    },

    handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
        let form = this.getView().up('form').getForm();
        let data = record.getData();
        data.issueDate = new Date(data.issueDate);
        form.setValues(data)
    },

    handleClear: function (grid, rowIndex, colIndex, item, e, record) {
        let form = this.getView().getForm();
        form.reset();
    },

    handleDelete: function (grid, rowIndex, colIndex, item, e, record) {
        let viewModel = this.getViewModel();
        let store = viewModel.getStore('certificatesDto');
        let formInfo = this.getView().up('tabpanel').down('tabInfoCustomer').getValues();
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
                    if (formInfo.id) {
                        Ext.Ajax.request({
                            url: `https://em-v2.oceantech.com.vn/em/certificate/${record.id}`,
                            method: 'DELETE',
                            headers: {
                                'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
                            },
                            success: function (response) {
                                store.remove(record);
                            },
                            failure: function (response) {
                                Ext.Msg.alert('Lỗi', 'Cập nhật thất bại.');
                            }
                        });
                        return;
                    }
                    store.remove(record);
                }
            },
            icon: Ext.Msg.QUESTION,
        });
    },

});
