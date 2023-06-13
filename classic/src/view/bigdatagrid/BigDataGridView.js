Ext.define('Admin.view.bigdatagrid.BigDataGridView', {
    extend: 'Ext.container.Container',
    xtype: 'bigdatagridview',

    requires: ['Admin.view.bigdata.BigDataGrid'],

    viewModel: 'bigdatagridviewmodel',
    controller: 'bigdatagridcontroller',
    id: 'big-data-grid-view',

    padding: '10px',

    items: [
        {
            xtype: 'button',
            text: 'Thêm mới',
            padding: '10px',
            margin: '0px 0px 10px 0px',
            handler: 'openAddForm'
        },
        {
            xtype: 'bigdatagrid',
            flex: 1,
            bind: {
                store: '{bigdatagrid}'
            }
        }
    ]
});
