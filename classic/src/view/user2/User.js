Ext.define('Admin.view.user2.User', {
    extend: 'Ext.container.Container',
    padding: '10px',
    xtype: 'user2',

    viewModel: {
        type: 'user2'
    },
    controller: 'user2',

    requires: ['Admin.view.user2.UserList'],

    items: [
        {
            xtype: 'user-list'
        },
        {
            margin: '20px 0 0 0',
            xtype: 'combobox',
            reference: 'name',
            publishes: 'value',
            fieldLabel: 'Chọn thành phố',
            displayField: 'name',
            enableKeyEvents: true,
            typeAhead: true,
            triggerAction: 'all',
            editable: true,
            store: {
                type: 'userlarge'
            },
            minChars: 0,
            queryParam: 'q',
            queryMode: 'remote',
            listeners: {
                change: 'handleChangeInput'
            }
        }
    ]
});
