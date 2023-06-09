Ext.define('Admin.store.Employee', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.employee',

    model: 'Admin.model.Employee',

    pageSize: 20,

    autoLoad: true,

    // proxy: {
    //     type: 'ajax',
    //     actionMethods: { read: 'GET' },
    //     api: { read: 'app/employee.json' },
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'children'
    //     },
    //     listeners: {
    //         exception: function (proxy, response, operation, opts) {
    //             if (typeof operation.error == 'string') {
    //                 Ext.Msg.alert(
    //                     'Error',
    //                     'Connection to server interrupted' + operation.error
    //                 );
    //             }
    //         }
    //     }
    // }

    proxy: {
        type: 'api',
        url: '~api/employee',
        reader: {
            type: 'json',
            rootProperty: 'children'
        }
    }
});
