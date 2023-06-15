Ext.define('Admin.view.user2.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user2',

    stores: {
        bufferuser: {
            type: 'bufferuser'
        }
    }
});
