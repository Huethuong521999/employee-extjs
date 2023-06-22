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
    bind: {
        store: '{bigdatagrid}'
    },

    id: 'big-data-grid',
    xtype: 'big-data-grid',
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
            sortable: true
        },
        {
            dataIndex: 'isVerified',
            text: 'Trạng thái',
            align: 'center',
            width: 100,
            showHeaderCheckbox: true,
            renderer: 'rerenderCheckbox'
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
