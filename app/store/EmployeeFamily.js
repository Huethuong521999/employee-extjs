Ext.define('Admin.store.EmployeeFamily', {
    extend: 'Ext.data.Store',

    alias: 'store.employeeFamily',
    storeId: "EmployeeFamilyStoreId",

    model: 'Admin.model.customer.EmployeeFamily',

    pageSize: 20,

    autoLoad: false,
    loadStore: function (id) {
        let me = this;
        (function updateData() {
            me.setProxy({
                type: 'ajax',
                url: `https://em-v2.oceantech.com.vn/em/employee-family?employeeId=${id}`,
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
        })();
    },
});





