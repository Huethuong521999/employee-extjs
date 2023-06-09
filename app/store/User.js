Ext.define('Admin.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.user',

    model: 'Admin.model.User',

    pageSize: 20,

    autoLoad: true,

    proxy: {
        type: 'api',
        url: 'https://jsonplaceholder.typicode.com/users'
    }
});
