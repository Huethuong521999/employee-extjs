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
        let windowForm = Ext.create('Admin.view.bigdatagrid.BigDataUserForm', {
            record: null
        });
        this.loadRecord(windowForm, null);
        windowForm.show();
    },

    handleEdit: function (grid, rowIndex) {
        let record = grid.getStore().getAt(rowIndex);
        let form = Ext.create('Admin.view.bigdatagrid.BigDataUserForm');
        this.loadRecord(form, record);
        form.show();
    },

    handleSave: function (thisForm) {
        let window = thisForm.up('window');
        let form = window.down('form');
        let values = form.getValues();
        let store = Ext.data.StoreManager.lookup('big-data-grid');
        if (form.isValid()) {
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
            multiline: false,
            fn: function (buttonValue) {
                if (buttonValue === 'yes') {
                    let store = Ext.data.StoreManager.lookup('big-data-grid');
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
