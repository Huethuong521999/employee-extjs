Ext.define('Admin.store.Customer', {
    extend: 'Ext.data.Store',

    alias: 'store.customer',
    storeId: "customerStoreId",

    model: 'Admin.model.customer.Customer',

    pageSize: 20,

    autoLoad: true,
    loadStore: function () {
        let customerStore = this;
        this.setProxy({
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
                    customerStore.checkToken(proxy, response, operation); // Gọi hàm checkException từ đối tượng Customer
                }
            }
        })

        this.load();
        // this.load({
        //     callback: function (records, operation, success) {
        //         console.log("records", records);
        //     }   
        // });
    },

    checkToken: function (proxy, response, operation) {
        let customerStore = this;
        if (response.status === 401) {
            customerStore.login(proxy, response, operation);
        } else if (response.status === 403) {
            console.log('Không có quyền truy cập');
        } else {
            console.log('Lỗi không xác định');
        }
    },

    login: function (proxy, response, operation) {
        let customerStore = this;
        Ext.Ajax.request({
            url: 'https://em-v2.oceantech.com.vn/em/oauth/token',
            method: 'POST',
            params: {
                client_id: 'core_client',
                grant_type: 'password',
                client_secret: 'secret',
                username: 'user',
                password: 'admin'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': "Basic Y29yZV9jbGllbnQ6c2VjcmV0"
            },
            success: function (response) {
                var responseData = Ext.decode(response.responseText);
                var token = responseData.access_token;
                customerStore.setTokenCookie(token);
                // proxy.setHeaders({
                //     'Authorization': 'Bearer ' + token
                // });

                // operation.retry();
            },
            failure: function (response) {
            }
        });
    },

    setTokenCookie: function (token) {
        let expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 10);
        Ext.util.Cookies.set('token', token, expirationDate);
        window.location.reload();
    }
});





