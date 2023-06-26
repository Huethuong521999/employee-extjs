Ext.define("Admin.view.customer.addCustomer.FamilyCustomerViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.familyCustomer",
    listen: {
        controller: {
            customer: {
                employeeId: 'loadData'
            }
        }
    },

    loadData: function (employeeId) {
        let viewModel = this.getViewModel();
        let store = viewModel.getStore('employeeFamilyDtos');
        employeeId && store.loadStore(employeeId);
    },

    checkValidate: function (data) {
        if (
            data.name &&
            data.gender &&
            data.phoneNumber &&
            data.email &&
            data.dateOfBirth &&
            data.citizenIdentificationNumber &&
            data.relationShip &&
            data.address &&
            data.email
        ) {
            return true;
        }
        return false;
    },

    handleSubmitFamily: function (sender, record) {
        let me = this;
        let viewModel = this.getViewModel();
        let itemFamilyRelations = viewModel.get("itemFamilyRelations");
        let infoEmpolyee = viewModel.get("info");
        let store = viewModel.getStore("employeeFamilyDtos")

        let values = {
            ...itemFamilyRelations,
            dateOfBirth: Utils.formatDateTime(itemFamilyRelations.dateOfBirth),
            employeeId: (infoEmpolyee && infoEmpolyee.id) ? infoEmpolyee.id : null
        };

        if (!this.checkValidate(itemFamilyRelations)) {
            Ext.Msg.alert('Cảnh báo', 'Chưa nhập đủ thông tin.');
            return;
        }

        if (values.id) {
            if (infoEmpolyee && infoEmpolyee.id) {
                (function callApiUpdate() {
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
                        url: `https://em-v2.oceantech.com.vn/em/employee-family?employeeId=${infoEmpolyee.id}`,
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
        data.dateOfBirth = new Date(data.dateOfBirth);
        viewModel.set("itemFamilyRelations", data);
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
        let infoEmpolyee = viewModel.get("info");
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
                    if (infoEmpolyee && infoEmpolyee.id) {
                        (function callApiDelete() {
                            Ext.Ajax.request({
                                url: `https://em-v2.oceantech.com.vn/em/employee-family/${record.id}`,
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

    CheckGender: function (value) {
        let data = [
            { value: '0', label: 'Nam' },
            { value: '1', label: 'Nữ' },
            { value: '2', label: 'Khác' }
        ]
        let gender = data.find(item => item.value === value.toString())
        return `<span>${gender.label}</span>`
    },

    formatDate: function (value) {
        return Utils.formatDate(value);
    },

    validatorName: function (value) {
        return value && (!Utils.regexCheckString(value) ? true : "Chỉ được nhập chữ");
    },

    validatorPhone: function (value) {
        return value && (Utils.regexChecKPhone(value) ? true : "Số điện không đúng định dạng số điện thoại việt nam");
    },

    validatorCCDC: function (value) {
        return value && (Utils.regexCheckCCDC(value) ? true : "Chỉ được nhập số và có độ dài 12 số");
    },

    validatorEmail: function (value) {
        return value && (Utils.regexCheckEmail(value) ? true : "Email phải có định dang 123@gmail.com");
    },

    isIconEdit: function (v, meta, rec) {
        let isView = this.getViewModel().get("isView");
        if (isView) {
            return 'x-hidden';
        } else {
            return 'x-fa fa-edit';
        }
    },

    isIconDelete: function (v, meta, rec) {
        let isView = this.getViewModel().get("isView");
        if (isView) {
            return 'x-hidden';
        } else {
            return 'fa fa-trash';
        }
    },
});
