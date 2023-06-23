Ext.define('Admin.view.approved.ApprovedViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.approved',
    requires: ['Admin.model.ApprovedEmployee', 'Admin.store.ApprovedEmployee'],

    stores: {
        approvedEmployee: {
            type: 'approvedEmployee'
        }
    },

    data: {}
});
