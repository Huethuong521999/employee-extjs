Ext.define('Admin.store.Province', {
    extend: 'Ext.data.Store',
    alias: 'store.province',
    fields: [
        'code',
        'name',
    ],

    pageSize: 50,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://training-api.oceantech.com.vn/cms/api/provinces/all',
        reader: {
            rootProperty: 'data',
            // totalProperty: 'totalCount'
        }
    }
});