Ext.define('Admin.store.User3', {
    extend: 'Ext.data.Store',
    alias: 'store.userlarge',
    storeId: 'userlarge',
    fields: [
        'name',
        'division_type',
        'codename',
        {
            name: 'code',
            type: 'int'
        },
        {
            name: 'phone_code',
            type: 'int'
        }
    ],
    remoteSort: true,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '',
        useDefaultXhrHeader: false,
        extraParams: {
            q: ''
        },
        reader: {
            type: 'json',
            rootProperty: 'provinces'
        }
    }
});
