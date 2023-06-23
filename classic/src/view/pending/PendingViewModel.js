Ext.define('Admin.view.pending.PendingViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.pending',
    requires: ['Admin.model.PendingEmployee', 'Admin.store.PendingEmployee'],

    stores: {
        pendingEmployee: {
            type: 'pendingEmployee'
        }
    },

    data: {}
});
