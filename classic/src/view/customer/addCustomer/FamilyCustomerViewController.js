Ext.define("Admin.view.customer.addCustomer.FamilyCustomerViewController", {
    extend: "Ext.app.ViewController",

    alias: "controller.familyCustomer",

    init: function () {
        this.listen({
            controller: {
                '*': {
                    DataFamily: 'setData'
                }
            }
        });
    },

    setData: function (data) {
        let viewModel = this.getViewModel();
        let store = viewModel.getStore('employeeFamilyDtos');

        if (store) {
            store.loadData(data);
        }
    },

    handleSubmitFamily: function (sender, record) {
        let view = this.getView();
        let form = view.getForm();
        let viewModel = this.getViewModel();
        // let store = viewModel.getStore('employeeFamilyDtos');
        let store = view.up('tabpanel').down('list-family-customer').getStore();
        let formInfo = view.up('tabpanel').down('tabInfoCustomer').getValues();

        let values = {
            ...form.getValues(),
            dateOfBirth: Ext.Date.format(new Date(form.getValues().dateOfBirth), 'Y-m-d'),
            employeeId: formInfo.id ? formInfo.id : null
        };

        let listData = store.getRange() || [];
        let dataFamily = [];

        listData.forEach(element => {
            let itemFamily = element.data;
            itemFamily.dateOfBirth = Ext.Date.format(new Date(itemFamily.dateOfBirth), 'Y-m-d');
            dataFamily.push(itemFamily);
        });

        if (form.isValid()) {
            if (values.id) {
                if (formInfo.id) {
                    Ext.Ajax.request({
                        url: `https://em-v2.oceantech.com.vn/em/employee-family/${values.id}`,
                        method: 'PUT',
                        headers: {
                            'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
                        },
                        jsonData: values,
                        success: function (response) {
                            let data = Ext.decode(response.responseText);
                            if (data.code === 200) {
                                let record = store.getById(values.id);
                                record.set(values);
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
                        url: `https://em-v2.oceantech.com.vn/em/employee-family?employeeId=${formInfo.id}`,
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
                        },
                        jsonData: [values],
                        success: function (response) {
                            let data = Ext.decode(response.responseText);
                            if (data.code === 200) {
                                store.loadData(data.data);
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
        data.dateOfBirth = Ext.Date.format(new Date(data.dateOfBirth), 'd/m/Y');
        form.setValues(data);
    },

    handleClear: function (grid, rowIndex, colIndex, item, e, record) {
        let form = this.getView().getForm();
        form.reset();
    },

    handleDelete: function (grid, rowIndex, colIndex, item, e, record) {
        let formInfo = Ext.getCmp("tabInfoCustomer").getValues();
        let viewModel = this.getViewModel();
        let store = viewModel.getStore('employeeFamilyDtos');
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
                            url: `https://em-v2.oceantech.com.vn/em/employee-family/${record.id}`,
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

    CheckGender: function (value) {
        let data = [
            { value: '0', label: 'Nam' },
            { value: '1', label: 'Nữ' },
            { value: '2', label: 'Khác' }
        ]
        let gender = data.find(item => item.value === value.toString())
        return `<span>${gender.label}</span>`
    }
});
