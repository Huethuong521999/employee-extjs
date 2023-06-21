Ext.define('Admin.store.Customer', {
    extend: 'Ext.data.Store',

    alias: 'store.customer',
    storeId: "customerStoreId",

    model: 'Admin.model.customer.Customer',

    pageSize: 20,

    autoLoad: true,
    loadStore: function () {
        let me = this;
        (function updateData() {
            me.setProxy({
                type: 'ajax',
                url: 'https://em-v2.oceantech.com.vn/em/employee/search',
                extraParams: {
                    pageIndex: 1,
                    pageSize: 20,
                    text: '',
                    listStatus: 1
                },

                headers: {
                    'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
                },
                reader: {
                    type: "json",
                    rootProperty: "data",
                    totalProperty: 'total'
                },

                listeners: {
                    exception: function (proxy, response, operation) {
                        CheckToken.checkToken(response, updateData);
                    }
                }
            })
            me.load();
        })()
    },
});





