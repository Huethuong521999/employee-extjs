Ext.define('Admin.view.employee.ListEmployee', {
    extend: 'Ext.tree.Panel',
    xtype: 'list-employee',
    requires: ['Ext.data.*', 'Ext.grid.*', 'Ext.tree.*'],
    viewModel: {
        type: 'employee'
    },
    reserveScrollbar: true,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,
    controller: 'employee',
    bind: {
        store: '{employee}'
    },
    id: 'list-employee',
    viewConfig: {
        preserveScrollOnRefresh: true,
        preserveScrollOnReload: true
    },
    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
        showHeaderCheckbox: true
    },

    // listeners: {
    //     cellclick: 'onGridCellItemClick'
    // },

    headerBorders: true,
    rowLines: true,
    scrollable: false,

    columns: [
        {
            xtype: 'actioncolumn',
            text: 'Thao tác',
            width: 80,
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-edit',
                    tooltip: 'Chỉnh sửa',
                    handler: function (grid, rowIndex, colIndex) {
                        // Get the selected record
                        let rec = grid.getStore().getAt(rowIndex);
                        // Show the edit form
                        let editForm = Ext.create(
                            'Admin.view.employee.EmployeeForm'
                        );
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
                        let controller = grid
                            .up('list-employee')
                            .getController();
                        controller.handleDelete(this, rec);
                    }
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
            dataIndex: 'hoTen',
            text: 'Họ và Tên',
            flex: 2.5,
            xtype: 'treecolumn'
        },
        {
            dataIndex: 'gioiTinh',
            text: 'Giới tính',
            flex: 1
        },
        {
            type: 'date',
            dataIndex: 'ngaySinh',
            text: 'Ngày sinh',
            flex: 1
        },
        {
            dataIndex: 'soCccd',
            text: 'Số CCCD',
            flex: 1
        },
        {
            dataIndex: 'email',
            text: 'Email',
            flex: 2
        },
        {
            dataIndex: 'soDienThoai',
            text: 'Số điện thoại',
            flex: 1
        },
        {
            dataIndex: 'diaChi',
            text: 'Địa chỉ',
            flex: 2
        }
    ]
});
