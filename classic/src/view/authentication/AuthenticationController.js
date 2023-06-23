Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin : function() {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function() {
        this.redirectTo('dashboard', true);
    },

    handleLogin: function(window) {
        var view = window.up('authdialog');
        let values = view.getValues();
        let em = this;

        Ext.Ajax.request({
            url: 'https://em-v2.oceantech.com.vn/em/oauth/token',
            method: 'POST',
            params: {
                client_id: 'core_client',
                grant_type: 'password',
                client_secret: 'secret',
                username: values.userid,
                password: values.password
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': "Basic Y29yZV9jbGllbnQ6c2VjcmV0"
            },
            success: function (response) {
                var responseData = Ext.decode(response.responseText);
                var token = responseData.access_token;
                let expirationDate = new Date();
                expirationDate.setFullYear(expirationDate.getFullYear() + 10);
                Ext.util.Cookies.set('token', token, expirationDate);
                em.redirectTo('dashboard', true);
            },
            failure: function (response) {
                return Ext.Msg.alert('Lỗi', 'Sai tài khoản hoặc mật khẩu');
            }
        });
    },

    onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount:  function() {
        this.redirectTo('register', true);
    },

    onSignupClick:  function() {
        this.redirectTo('dashboard', true);
    },

    onResetClick:  function() {
        this.redirectTo('dashboard', true);
    }
});