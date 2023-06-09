Ext.define('Admin.view.user.UserModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',

    stores: {
        user: {
            type: 'user'
        }
    }
});
