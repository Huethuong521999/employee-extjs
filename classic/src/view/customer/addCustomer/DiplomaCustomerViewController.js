Ext.define("Admin.view.customer.addCustomer.DiplomaCustomerViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.diplomaCustomer",
    listen: {
        controller: {
            customer: {
                employeeId: 'loadData'
            }
        }
    },

    loadData: function (employeeId) {
        let viewModel = this.getViewModel();
        let store = viewModel.getStore('certificatesDto');
        employeeId && store.loadStore(employeeId)
    },

    checkValidate: function (data) {
        if (data.certificateName &&
            data.field &&
            data.content &&
            data.issueDate
        ) {
            return true;
        }
        return false;
    },

    handleSubmitDiploma: function (sender, record) {
        let me = this;
        let viewModel = this.getViewModel();
        let itemCertificates = viewModel.get("itemCertificates");
        let infoEmpolyee = viewModel.get("info");
        let store = viewModel.getStore("certificatesDto");

        let values = {
            ...itemCertificates,
            issueDate: Utils.formatDateTime(itemCertificates.issueDate),
            employeeId: (infoEmpolyee && infoEmpolyee.id) ? infoEmpolyee.id : null
        };

        if (!this.checkValidate(itemCertificates)) {
            Ext.Msg.alert('Cảnh báo', 'Chưa nhập đủ thông tin.');
            return;
        }

        if (values.id) {
            if (infoEmpolyee && infoEmpolyee.id) {
                (function callApiUpdate() {
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
                                store.load();
                                me.handleClear();
                                return;
                            }
                            Ext.Msg.alert('Lỗi', data.message);
                        },
                        failure: function (response) {
                            if (response.status === 401) {
                                CheckToken.checkToken(response, callApiUpdate);
                            } else {
                                Ext.Msg.alert('Lỗi', 'Cập nhật thất bại.');
                            }
                        }
                    });
                })();
                return;
            }
            let record = store.getById(values.id);
            record.set(values);
            me.handleClear();
        } else {
            if (infoEmpolyee && infoEmpolyee.id) {
                (function callApiPost() {
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
                                store.load();
                                me.handleClear();
                                return;
                            }
                            Ext.Msg.alert('Lỗi', data.message);
                        },
                        failure: function (response) {
                            if (response.status === 401) {
                                CheckToken.checkToken(response, callApiPost);
                            } else {
                                Ext.Msg.alert('Lỗi', 'Thêm thất bại.');
                            }
                        }
                    });
                })();
                return;
            }
            values.id = store.getCount() + 1;
            store.add(values);
            me.handleClear();
        }
    },

    handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
        let data = record.getData();
        let viewModel = this.getViewModel();
        data.issueDate = new Date(data.issueDate);
        viewModel.set("itemCertificates", data);
    },

    handleClear: function (grid, rowIndex, colIndex, item, e, record) {
        let fields = this.getView().query('textfield');

        fields.forEach(function (field) {
            field.setValue('');
            field.clearInvalid();
        });
    },

    handleDelete: function (grid, rowIndex, colIndex, item, e, record) {
        let viewModel = this.getViewModel();
        let store = viewModel.getStore("certificatesDto");
        let infoEmpolyee = viewModel.get("info");

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
                    if (infoEmpolyee && infoEmpolyee.id) {
                        (function callApiDelete() {
                            Ext.Ajax.request({
                                url: `https://em-v2.oceantech.com.vn/em/certificate/${record.id}`,
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
                        return;
                    }
                    store.remove(record);
                }
            },
            icon: Ext.Msg.QUESTION,
        });
    },
    formatDate: function (value) {
        return Utils.formatDate(value);
    },
    validatorName: function (value) {
        return value && (!Utils.regexCheckString(value) ? true : "Chỉ được nhập chữ");
    },
});
