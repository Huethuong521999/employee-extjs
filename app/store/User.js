Ext.define('Admin.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.user',
    storeId: 'user',

    model: 'Admin.model.User',

    pageSize: 20,

    autoLoad: true,

    loadStore: function () {
        this.setProxy({
            type: 'api',
            url: 'https://jsonplaceholder.typicode.com/users'
        });
        this.load();
    }
});
