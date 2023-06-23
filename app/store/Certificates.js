Ext.define('Admin.store.Certificates', {
    extend: 'Ext.data.Store',

    alias: 'store.certificates',
    storeId: "certificatesStoreId",

    model: 'Admin.model.customer.Certificates',

    pageSize: 20,

    autoLoad: false,
    loadStore: function (id) {
        let me = this;
        (function updateData() {
            me.setProxy({
                type: 'ajax',
                url: `https://em-v2.oceantech.com.vn/em/certificate?employeeId=${id}`,
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





