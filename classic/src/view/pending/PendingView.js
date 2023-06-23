Ext.define('Admin.view.pending.PendingView', {
    extend: 'Ext.container.Container',
    padding: '10px',
    xtype: 'pending',

    requires: [
        'Admin.view.pending.ListEmployee',
        'Admin.view.pending.PendingController'
    ],

    controller: 'pending',
    viewModel: {
        type: 'pending'
    },

    items: [
        {
            xtype: 'list-employee'
        }
    ]
});
