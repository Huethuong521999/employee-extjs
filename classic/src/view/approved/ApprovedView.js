Ext.define('Admin.view.approved.ApprovedView', {
    extend: 'Ext.container.Container',
    padding: '10px',
    xtype: 'approved',

    requires: [
        'Admin.view.approved.ListEmployee',
        'Admin.view.approved.ApprovedController'
    ],

    controller: 'approved',
    viewModel: {
        type: 'approved'
    },

    items: [
        {
            xtype: 'list-approved-employee'
        }
    ]
});
