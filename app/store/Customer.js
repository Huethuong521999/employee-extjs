Ext.define('Admin.store.Customer', {
    extend: 'Ext.data.Store',

    alias: 'store.customer',

    model: 'Admin.model.customer.Customer',

    pageSize: 20,

    autoLoad: true,
    
    proxy: {
        type: 'api',
        url: '~api/customer'
    }
});