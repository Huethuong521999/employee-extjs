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
        let windowForm = Ext.create('Admin.view.user.UserForm', {
            record: null
        });
        this.loadRecord(windowForm, null);
        windowForm.show();
    },

    handleClose: function (thisForm) {
        thisForm.up('window').close();
    },

    handleSave: function (thisForm) {
        let window = thisForm.up('window');
        let form = window.down('form');
        let values = form.getValues();
        let checkbox = Ext.getCmp('moreInfoCheckbox');
        if (form.isValid()) {
            let store = Ext.getCmp('list-user').getStore();
            if (form.action === 'edit') {
                let record = store.getById(values.id);
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

    handleEdit: function (grid, rowIndex, colIndex) {
        let rec = grid.getStore().getAt(rowIndex);
        let editForm = Ext.create('Admin.view.user.UserForm');
        let controller = editForm.getController();
        controller.loadRecord(editForm, rec);
        editForm.show();
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
            multiline: false,
            fn: function (buttonValue) {
                if (buttonValue === 'yes') {
                    let store = Ext.data.StoreManager.lookup('user');
                    store.remove(record);
                }
            },
            icon: Ext.Msg.QUESTION
        });
    },

    loadRecord: function (windowForm, record) {
        let form = windowForm.down('form');
        if (record) {
            windowForm.setTitle('Sửa thông tin người dùng');
            form.action = 'edit';
            form.getForm().setValues(record.getData());
        } else {
            windowForm.setTitle('Thêm mới thông tin người dùng');
            form.action = 'add';
            form.reset();
        }
    }
});
