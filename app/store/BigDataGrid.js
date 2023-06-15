Ext.define('Admin.store.BigDataGrid', {
    extend: 'Ext.data.Store',
    alias: 'store.bigdatagrid',
    storeId: 'big-data-grid',

    model: 'Admin.model.BigDataGrid',

    groupField: 'name',
    autoLoad: true,
    loadStore: function () {
        this.setProxy({
            type: 'ajax',
            url: 'app/bigdata.json',
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        });
        this.load();
    }
});
