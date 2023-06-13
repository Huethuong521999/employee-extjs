Ext.define('Admin.store.BigDataGrid', {
    extend: 'Ext.data.Store',
    alias: 'store.bigdatagrid',

    model: 'Admin.model.BigDataGrid',

    groupField: 'name',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'app/bigdata.json',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }
});
