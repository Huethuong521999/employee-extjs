Ext.define('Admin.view.approved.ListEmployee', {
    extend: 'Ext.grid.Panel',

    xtype: 'list-approved-employee',

    requires: [
        'Admin.view.approved.ApprovedViewModel',
        'Admin.view.approved.ApprovedController'
    ],

    viewModel: {
        type: 'approved'
    },

    controller: 'approved',

    bind: {
        store: '{approvedEmployee}'
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
    scrollable: true,
    autoScroll: true,
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
            minWidth: 150,
            filter: 'string'
        },
        {
            dataIndex: 'code',
            text: 'Mã nhân viên',
            minWidth: 125,
            filter: 'string'
        },
        {
            dataIndex: 'gender',
            text: 'Giới tính',
            minWidth: 75,
            filter: 'string',
            renderer: function (value) {
                return Utils.checkGender(value);
            }
        },
        {
            dataIndex: 'dateOfBirth',
            text: 'Ngày sinh',
            minWidth: 100,
            filter: 'date',
            renderer: function (value) {
                return Utils.formatDate(value);
            }
        },
        {
            dataIndex: 'citizenIdentificationNumber',
            text: 'Số CCCD',
            minWidth: 125,
            filter: 'string'
        },
        {
            dataIndex: 'email',
            text: 'Email',
            minWidth: 125,
            filter: 'string'
        },
        {
            dataIndex: 'phone',
            text: 'Số điện thoại',
            minWidth: 125,
            filter: 'string'
        },
        {
            dataIndex: 'submitProfileStatus',
            text: 'Trạng thái',
            minWidth: 200,
            flex: 1,
            filter: 'string',
            renderer: function (value) {
                return Utils.checkStatus(value);
            }
        }
    ],
    bbar: [
        {
            xtype: 'pagingtoolbar',
            bind: {
                store: '{approvedEmployee}'
            },
            displayMsg:
                'Đang hiển thị từ {0} đến {1} trên tổng số {2} &nbsp;bản ghi ',
            displayInfo: true,
            emptyMsg: 'No records to display&nbsp;'
        }
    ]
});
