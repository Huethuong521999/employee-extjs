Ext.define('Admin.view.user.UserTabPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'userTabPanel',

    width: '100%',

    items: [
        {
            id: 'user-tab-panel',
            xtype: 'tabpanel',
            items: [
                {
                    xtype: 'tabInfo',
                    itemId: 'tabInfo'
                },
                {
                    xtype: 'tabMoreInfo',
                    itemId: 'tabMoreInfo',
                    tabConfig: {
                        hidden: true
                    }
                }
            ]
        }
    ]
});
