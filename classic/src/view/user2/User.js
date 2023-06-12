Ext.define('Admin.view.user2.User', {
    extend: 'Ext.container.Container',
    padding: '10px',
    xtype: 'user2',

    requires: ['Admin.view.user2.UserList'],

    items: [
        {
            xtype: 'user-list'
        },
        {
            margin: '20px 0 0 0',
            xtype: 'combobox',
            reference: 'states',
            pageSize: 10,
            publishes: 'value',
            fieldLabel: 'Select Employee',
            displayField: 'firstName',
            enableKeyEvents: true,
            typeAhead: true,
            triggerAction: 'all',
            editable: true,
            listConfig: {
                minWidth: 500
            },
            store: {
                type: 'userlarge'
            },
            minChars: 0,
            queryParam: 'q',
            queryMode: 'remote'
        }
    ]
});
