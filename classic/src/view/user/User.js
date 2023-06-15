Ext.define('Admin.view.user.User', {
    extend: 'Ext.container.Container',
    padding: '10px',
    xtype: 'user',

    controller: 'user',

    requires: ['Admin.view.user.ListUser', 'Admin.view.user.UserController'],

    items: [
        {
            xtype: 'button',
            text: 'Thêm mới',
            padding: '10px',
            margin: '0px 0px 10px 10px',
            handler: 'onOpenUserForm'
        },
        {
            xtype: 'list-user'
        }
    ],
    listeners: {
        resize: 'handleCenterForm'
    }
});
