Ext.define('Admin.store.PendingEmployee', {
    extend: 'Ext.data.Store',

    alias: 'store.pendingEmployee',
    storeId: 'pendingEmployee',

    model: 'Admin.model.PendingEmployee',

    pageSize: 10,

    autoLoad: true,
    loadStore: function () {
        let me = this;
        (function updateData() {
            me.setProxy({
                type: 'ajax',
                url: 'https://em-v2.oceantech.com.vn/em/employee/search',
                extraParams: {
                    pageIndex: 1,
                    pageSize: 10,
                    text: '',
                    listStatus: '2,6'
                },

                headers: {
                    Authorization: 'Bearer' + Ext.util.Cookies.get('token')
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                },

                listeners: {
                    exception: function (proxy, response, operation) {
                        CheckToken.checkToken(response, updateData);
                    }
                }
            });
            me.load();
        })();
    }
});
