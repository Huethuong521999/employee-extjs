Ext.define('Admin.store.ApprovedEmployee', {
    extend: 'Ext.data.Store',

    alias: 'store.approvedEmployee',
    storeId: 'approvedEmployee',

    model: 'Admin.model.ApprovedEmployee',

    pageSize: 10,

    autoLoad: true,
    loadStore: function () {
        let me = this;
        (function updateData() {
            me.setProxy({
                type: 'ajax',
                url: 'https://em-v2.oceantech.com.vn/em/employee/search',
                noCache: false,
                pageParam: 'pageIndex',
                startParam: false,
                limitParam: false,
                extraParams: {
                    pageSize: 10,
                    listStatus: '3,7'
                },

                headers: {
                    Authorization: 'Bearer' + Ext.util.Cookies.get('token')
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'totalElements'
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
