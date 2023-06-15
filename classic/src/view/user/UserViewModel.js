Ext.define('Admin.view.user.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',

    requires: ['Admin.store.User'],

    stores: {
        user: {
            type: 'user'
        }
    }
});
