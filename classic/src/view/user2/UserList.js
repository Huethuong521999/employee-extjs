Ext.define('Admin.view.user2.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'user-list',

    requires: 'Admin.store.User2',

    title: 'Danh sách nhân viên',
    width: '100%',
    height: 500,
    store: {
        type: 'bufferuser'
    },
    scrollable: true,

    plugins: {
        gridfilters: true
    },

    columns: {
        defaults: {
            filter: {
                type: 'string'
            }
        },
        items: [
            {
                text: 'Họ',
                minWidth: 150,
                dataIndex: 'firstName'
            },
            {
                text: 'Tên',
                minWidth: 150,
                dataIndex: 'lastName'
            },
            {
                text: 'Mã nhân viên',
                minWidth: 120,
                dataIndex: 'id',
                filter: {
                    type: 'number'
                }
            },
            {
                text: 'Mô tả',
                minWidth: 250,
                flex: 1,
                dataIndex: 'title'
            },
            {
                text: 'Địa chỉ',
                minWidth: 250,
                flex: 1,
                dataIndex: 'address'
            },
            {
                text: 'Công ty',
                minWidth: 250,
                flex: 1,
                dataIndex: 'company'
            }
        ]
    }
});
