Ext.define('Admin.store.User2', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.bufferuser',
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
    pageSize: 50,
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