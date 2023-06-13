Ext.define('Admin.store.Customer', {
    extend: 'Ext.data.Store',

    alias: 'store.customer',

    model: 'Admin.model.customer.Customer',

    pageSize: 20,

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'https://em-v2.oceantech.com.vn/em/employee/search',
        extraParams: {
            pageIndex: 1,
            pageSize: 20,
            text: '',
            listStatus: 1
        },


        headers: {
            'Authorization': 'Bearer ed568912-5af9-44a7-b861-38b85a771ad4',
        },
        reader: {
            type: "json",
            rootProperty: "data",
        }
    },
});