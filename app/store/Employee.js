Ext.define('Admin.store.Employee', {
    extend: 'Ext.data.Store',

    alias: 'store.employee',

    model: 'Admin.model.Employee',

    pageSize: 20,

    autoLoad: true,

    proxy: {
        type: 'api',
        url: '~api/employee'
    }
});