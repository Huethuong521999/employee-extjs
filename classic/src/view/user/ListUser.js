Ext.define('Admin.view.user.ListUser', {
    extend: 'Ext.grid.Panel',

    xtype: 'list-user',

    requires: ['Admin.view.user.UserViewModel'],

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
                    handler: 'handleEdit'
                },
                {
                    iconCls: 'fa fa-trash',
                    tooltip: 'Xóa',
                    handler: 'handleDelete'
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
