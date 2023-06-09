Ext.define('Admin.view.user.ListUser', {
    extend: 'Ext.grid.Panel',

    xtype: 'list-user',

    requires: ['Admin.view.user.UserModel'],

    viewModel: {
        type: 'user'
    },

    controller: 'user',

    bind: {
        store: '{user}'
    },

    id: 'list-user',

    viewConfig: {
        preserveScrollOnRefresh: true,
        preserveScrollOnReload: true,
        forceFit: true
    },
    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
        showHeaderCheckbox: true
    },

    headerBorders: true,
    rowLines: true,

    columns: [
        {
            xtype: 'actioncolumn',
            text: 'Thao tác',
            width: 100,
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-edit',
                    tooltip: 'Chỉnh sửa',
                    handler: function (grid, rowIndex, colIndex) {
                        // Get the selected record
                        let rec = grid.getStore().getAt(rowIndex);
                        // Show the edit form
                        let editForm = Ext.create('Admin.view.user.UserForm');
                        let controller = editForm.getController();
                        controller.loadRecord(editForm, rec);
                        editForm.show();
                    }
                },
                {
                    iconCls: 'fa fa-trash',
                    tooltip: 'Xóa',
                    handler: function (grid, rowIndex, colIndex) {
                        let rec = grid.getStore().getAt(rowIndex);
                        let controller = grid.up('list-user').getController();
                        controller.handleDelete(this, rec);
                    }
                }
            ]
        },
        {
            dataIndex: 'name',
            text: 'Họ và Tên',
            minWidth: 200,
            flex: 1
        },
        {
            dataIndex: 'username',
            text: 'Tên tài khoản',
            minWidth: 150,
            flex: 1
        },
        {
            dataIndex: 'email',
            text: 'Email',
            minWidth: 200,
            flex: 1
        },
        {
            dataIndex: 'phone',
            text: 'Số điện thoại',
            minWidth: 150,
            flex: 1
        },
        {
            dataIndex: 'website',
            text: 'Trang web',
            minWidth: 200,
            flex: 1
        }
    ]
});
