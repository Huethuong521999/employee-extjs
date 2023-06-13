Ext.define('Admin.store.Customer', {
    extend: 'Ext.data.Store',

    alias: 'store.customer',

    model: 'Admin.model.customer.Customer',

    pageSize: 20,

    autoLoad: true,
    // proxy: {
    //     type: 'api',
    //     url: '~api/customer'
    // }

    proxy: {
        type: 'ajax',
        // url: "http://localhost:3000/bills",
        url: 'https://em-v2.oceantech.com.vn/em/employee/search?pageIndex=1&pageSize=5&text=&listStatus=1',

        // cors: true,
        // withCredentials: true,
        // useDefaultXhrHeader: false,

        headers: {
            'Authorization': 'Bearer 510718ad-4249-42b4-994f-b23ce9900b37',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
            // 'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
        },
        reader: {
            type: "json",
            rootProperty: "data",
        }
    },
});