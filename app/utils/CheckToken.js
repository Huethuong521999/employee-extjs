Ext.define('CheckToken', {
    statics: {
        checkToken: function (response, callback) {
            let customerStore = this;
            if (response.status === 401) {
                customerStore.login(callback);
            } else if (response.status === 403) {
                console.log('Không có quyền truy cập');
            } else {
                console.log('Lỗi không xác định');
            }
        },

        login: function (callback) {
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
                    callback();
                },
                failure: function (response) {
                }
            });
        },

        setTokenCookie: function (token) {
            let customerStore = this;
            let expirationDate = new Date();
            expirationDate.setFullYear(expirationDate.getFullYear() + 10);
            Ext.util.Cookies.set('token', token, expirationDate);
        }
    }
});