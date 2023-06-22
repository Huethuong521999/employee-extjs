Ext.define('Admin.view.bigdatagrid.BigDataGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.bigdatagridcontroller',

    init: function () {
        let viewModel = this.getViewModel();
        let store = viewModel.getStore('bigdatagrid');
        if (store) {
            store.loadStore();
        }
    },

    openAddForm: function () {
        this.showPopup({});
    },

    handleEdit: function (grid, rowIndex, colIndex, item, e, record) {
        this.showPopup(record.getData());
    },

    getStore: function (name) {
        let store = this.getViewModel().getStore(name);
        return store;
    },

    handleSave: function (saveButton) {
        let window = saveButton.up('window');
        let form = window.down('form');
        let values = form.getValues();
        let selectedRecord = form.getViewModel().getData().userData;
        let store = this.getStore('bigdatagrid');
        if (form.isValid()) {
            if (selectedRecord.id) {
                let record = store.getById(selectedRecord.id);
                values.id = selectedRecord.id;
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
                    let store = this.getStore('bigdatagrid');
                    store.remove(record);
                }
            },
            icon: Ext.Msg.QUESTION
        });
    },
    handleClose: function (thisForm) {
        thisForm.up('window').close();
    },
    rerenderCheckbox: function (value) {
        return (
            "<input type='checkbox'" +
            (value ? "checked='checked'" : '') +
            ' / >'
        );
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
            title: recordUser.id
                ? 'Cập nhật người dùng'
                : 'Thêm mới người dùng',
            resizable: false,
            modal: true,
            closable: true,

            items: [
                {
                    xtype: 'BigDataUserTabPanelView',
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
                    handler: this.handleSave,
                    scope: this
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
