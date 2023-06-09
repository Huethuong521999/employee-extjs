Ext.define('Admin.view.user.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',

    onOpenUserForm: function () {
        let windowForm = Ext.create('Admin.view.user.UserForm', {
            record: null
        });
        this.loadRecord(windowForm, null);
        windowForm.show();
    },

    handleSave: function (window) {
        let form = window.down('form');
        let values = form.getValues();
        console.log(Ext.getCmp('list-user').getStore());
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
            Ext.Msg.alert('Cảnh báo', 'Chưa nhập đủ thông tin.');
        }
    },

    handleDelete: function (sender, record) {
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
            fn: function (buttonValue, inputText, showConfig) {
                if (buttonValue === 'yes') {
                    let store = Ext.getCmp('list-user').getStore();
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
