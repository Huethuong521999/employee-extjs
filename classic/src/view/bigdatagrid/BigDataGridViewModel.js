Ext.define('Admin.view.bigdatagrid.BigDataGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.bigdatagridviewmodel',

    stores: {
        bigdatagrid: {
            type: 'bigdatagrid',
            autoLoad: true
        }
    },
    data: {
        userData: {}
    }
});
