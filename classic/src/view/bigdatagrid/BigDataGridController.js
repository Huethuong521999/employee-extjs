Ext.define('Admin.view.bigdatagrid.BigDataGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.bigdatagridcontroller',

    openAddForm: function () {
        let windowForm = Ext.create('Admin.view.bigdatagrid.BigDataUserForm', {
            record: null
        });
        this.loadRecord(windowForm, null);
        windowForm.show();
    },

    handleSave: function (window) {
        let form = window.down('form');
        let values = form.getValues();
        let store = Ext.getCmp('big-data-grid').getStore();
        if (form.isValid()) {
            if (form.action === 'edit') {
                let record = store.getById(values.id);
                console.log(values);
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

    nameSorter: function (rec1, rec2) {
        console.log('fsgrg');
        var rec1Name = rec1.get('surname') + rec1.get('forename'),
            rec2Name = rec2.get('surname') + rec2.get('forename');

        if (rec1Name > rec2Name) {
            return 1;
        }

        if (rec1Name < rec2Name) {
            return -1;
        }

        return 0;
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
                    let store = Ext.getCmp('big-data-grid').getStore();
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
