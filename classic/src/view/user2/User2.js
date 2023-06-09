Ext.define('Admin.view.user2.User2', {
    extend: 'Ext.grid.Panel',
    xtype: 'user2',

    requires: 'Admin.store.User2',

    title: 'Danh sách nhân viên',
    width: 650,
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
                width: 150,
                dataIndex: 'firstName'
            },
            {
                text: 'Tên',
                width: 150,
                dataIndex: 'lastName'
            },
            {
                text: 'Mã nhân viên',
                width: 120,
                dataIndex: 'id',
                filter: {
                    type: 'number'
                }
            },
            {
                text: 'Mô tả',
                flex: 1,
                dataIndex: 'title'
            },
            {
                text: 'Địa chỉ',
                flex: 1,
                dataIndex: 'address'
            },
            {
                text: 'Công ty',
                flex: 1,
                dataIndex: 'company'
            }
        ]
    }
});
