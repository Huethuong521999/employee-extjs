Ext.define('Admin.view.bigdata.BigDataGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bigdatagrid',

    requires: [
        'Ext.grid.filters.Filters',
        'Ext.sparkline.Line',
        'Ext.ux.rating.Picker'
    ],

    controller: 'bigdatagridcontroller',

    columnLines: true,
    headerBorders: true,
    rowLines: true,
    scrollable: true,
    height: 400,
    collapsible: true,
    animCollapse: false,
    multiColumnSort: true,
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true
    },

    id: 'big-data-grid',
    title: 'Big Data Grid',
    plugins: {
        rowexpander: {
            rowBodyTpl: new Ext.XTemplate(
                '<p><b>Họ và tên:</b> {name}</p>',
                '<p><b>Trạng thái:</b> {isVerified:this.formatVerify}</p>',
                '<p><b>Ngày sinh:</b> {dateOfBirth:this.dateFormat}</p>',
                {
                    formatVerify: function (s) {
                        var color = s ? 'green' : 'red';
                        var status = s ? 'Đã xác minh' : 'Chưa xác minh';

                        return (
                            '<span style="color: ' +
                            color +
                            ';">' +
                            status +
                            '</span>'
                        );
                    },
                    dateFormat: function (d) {
                        return Ext.Date.format(d, 'd-m-Y');
                    }
                }
            )
        }
    },

    columns: [
        {
            xtype: 'rownumberer',
            dataIndex: 'stt',
            text: 'STT',
            width: 50,
            align: 'center'
        },
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
                        let controller = grid
                            .up('big-data-grid')
                            .getController();
                        controller.handleDelete(this, rec);
                    }
                }
            ]
        },
        {
            dataIndex: 'id',
            text: 'ID',
            align: 'center',
            width: 70
        },
        {
            dataIndex: 'name',
            text: 'Họ và tên',
            align: 'left',
            flex: 1.5,
            sortable: true,
            sorter: {
                sorterFn: 'nameSorter'
            }
        },
        {
            dataIndex: 'isVerified',
            text: 'Trạng thái',
            align: 'center',
            width: 100,
            showHeaderCheckbox: true,
            renderer: function (value) {
                return (
                    "<input type='checkbox'" +
                    (value ? "checked='checked'" : '') +
                    ' / >'
                );
            }
        },
        {
            text: 'Đánh giá',
            flex: 2,
            columns: [
                {
                    text: 'Biểu đồ',
                    dataIndex: 'avg',
                    flex: 1,
                    xtype: 'widgetcolumn',
                    align: 'center',
                    widget: {
                        xtype: 'sparklineline'
                    }
                },
                {
                    text: 'Sao',
                    dataIndex: 'star',
                    flex: 1,
                    xtype: 'widgetcolumn',
                    align: 'center',
                    widget: {
                        xtype: 'rating',
                        tip: 'Set to {tracking:plural("Star")}'
                    }
                }
            ]
        },
        {
            dataIndex: 'dateOfBirth',
            text: 'Ngày sinh',
            flex: 1,
            xtype: 'datecolumn',
            align: 'center',
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                },
                format: 'Long Date'
            }
        }
    ]
});
