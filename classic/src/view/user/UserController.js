Ext.define('Admin.view.user.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',

    init: function () {
        let viewModel = this.getViewModel();
        let store = viewModel.getStore('user');
        if (store) {
            store.loadStore();
        }
    },

    onOpenUserForm: function () {
        this.showPopup({});
    },

    handleClose: function (thisForm) {
        thisForm.up('window').close();
    },

    getStore: function (name) {
        let store = this.getViewModel().getStore(name);
        return store;
    },

    handleSave: function (saveButton) {
        let window = saveButton.up('window');
        let form = window.down('form');
        let values = form.getValues();
        let checkbox = Ext.getCmp('moreInfoCheckbox');
        let selectedRecord = form.getViewModel().getData().userData;
        if (form.isValid()) {
            let store = this.getStore('user');
            if (selectedRecord.id) {
                let record = store.getById(selectedRecord.id);
                record.set(values);
            } else {
                values.id = store.getCount() + 1;
                store.add(values);
            }
            form.reset();
            window.close();
        } else {
            if (!checkbox.checked) {
                Ext.Msg.alert(
                    'Cảnh báo',
                    'Vui lòng tích chọn thêm thông tin để hoàn tất quá trình nhập'
                );
            } else {
                Ext.Msg.alert('Cảnh báo', 'Chưa nhập đủ thông tin.');
            }
        }
    },

    handleCheckMoreInfo: function (checkbox) {
        const tabMoreInfo = Ext.getCmp('user-tab-panel').child('#tabMoreInfo');
        if (checkbox.checked) {
            tabMoreInfo.tab.show();
        } else {
            tabMoreInfo.tab.hide();
        }
    },

    handleCenterForm: function () {
        let form = Ext.getCmp('form-user');
        if (form) {
            form.center();
        }
    },

    handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
        this.showPopup(record.getData());
    },

    handleDelete: function (grid, rowIndex) {
        let record = grid.getStore().getAt(rowIndex);
        Ext.Msg.show({
            title: 'Xác nhận',
            msg: 'Bạn có chắc chắn muốn xóa bản ghi này không?',
            width: 300,
            closable: true,
            buttons: Ext.Msg.YESNO,
            buttonsText: {
                yes: 'Đồng ý',
                no: 'Hủy'
            },
            scope: this,
            multiline: false,
            fn: function (buttonValue) {
                if (buttonValue === 'yes') {
                    let store = this.getStore('user');
                    store.remove(record);
                }
            },
            icon: Ext.Msg.QUESTION
        });
    },

    showPopup: function (recordUser) {
        var popup = Ext.create('Ext.window.Window', {
            responsiveConfig: {
                'width >= 992': {
                    width: '50%'
                },
                'width < 768 ': {
                    width: '90%'
                }
            },
            resizable: false,
            modal: true,
            closable: true,
            closableToolText: 'Đóng cửa sổ',
            closeAction: 'destroy',
            layout: 'fit',
            title: recordUser.id
                ? 'Cập nhật người dùng'
                : 'Thêm mới người dùng',
            items: [
                {
                    xtype: 'userTabPanelView',
                    viewModel: {
                        data: {
                            userData: recordUser || {}
                        }
                    }
                }
            ],
            buttons: [
                {
                    text: 'Lưu',
                    scope: this,
                    handler: this.handleSave
                },
                {
                    text: 'Đóng',
                    handler: this.handleClose
                }
            ]
        });
        popup.show();
    }
});
