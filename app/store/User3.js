Ext.define('Admin.store.User3', {
    extend: 'Ext.data.Store',
    alias: 'store.userlarge',
    fields: [
        'firstName',
        'lastName',
        'address',
        'company',
        'title',
        {
            name: 'id',
            type: 'int'
        }
    ],

    leadingBufferZone: 1,
    pageSize: 10,
    remoteSort: true,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user',
        reader: {
            rootProperty: 'users',
            totalProperty: 'totalCount'
        }
    }
});
