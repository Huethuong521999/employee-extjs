Ext.define('Admin.view.pending.ListEmployee', {
    extend: 'Ext.grid.Panel',

    xtype: 'list-employee',

    requires: [
        'Admin.view.pending.PendingViewModel',
        'Admin.view.pending.PendingController'
    ],

    viewModel: {
        type: 'pending'
    },

    controller: 'pending',

    bind: {
        store: '{pendingEmployee}'
    },

    viewConfig: {
        preserveScrollOnRefresh: true,
        preserveScrollOnReload: true
    },

    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
        showHeaderCheckbox: true
    },

    plugins: {
        gridfilters: true
    },

    onClearFilters: function () {
        this.getStore().clearFilter();
    },

    headerBorders: true,
    rowLines: true,
    scrollable: false,
    margin: '10px 0 0 0',
    grouped: true,

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
            xtype: 'rownumberer',
            dataIndex: 'stt',
            text: 'STT',
            width: 50,
            align: 'center'
        },
        {
            dataIndex: 'name',
            text: 'Họ và Tên',
            flex: 2.5,
            filter: 'string'
        },
        {
            dataIndex: 'code',
            text: 'Mã nhân viên',
            flex: 2.5,
            filter: 'string'
        },
        {
            dataIndex: 'gender',
            text: 'Giới tính',
            flex: 1,
            filter: 'string',
            renderer: function (value) {
                return Utils.checkGender(value);
            }
        },
        {
            dataIndex: 'dateOfBirth',
            text: 'Ngày sinh',
            flex: 1,
            filter: 'date',
            renderer: function (value) {
                return Utils.formatDate(value);
            }
        },
        {
            dataIndex: 'citizenIdentificationNumber',
            text: 'Số CCCD',
            flex: 1,
            filter: 'string'
        },
        {
            dataIndex: 'email',
            text: 'Email',
            flex: 2,
            filter: 'string'
        },
        {
            dataIndex: 'phone',
            text: 'Số điện thoại',
            flex: 1,
            filter: 'string'
        }
    ],
    bbar: [
        {
            xtype: 'pagingtoolbar',
            bind: {
                store: '{pendingEmployee}'
            },
            displayInfo: true,
            emptyMsg: 'No records to display&nbsp;'
        }
    ]
});
