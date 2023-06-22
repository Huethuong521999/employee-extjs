Ext.define('Admin.view.user.UserTabPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'userTabPanelView',
    width: '100%',
    viewModel: {
        type: 'user'
    },

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
