Ext.define('Admin.view.user.UserTabPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'userTabPanel',

    width: '100%',

    items: [
        {
            xtype: 'tabpanel',
            items: [
                {
                    xtype: 'tabInfo'
                },
                {
                    xtype: 'tabMoreInfo'
                }
            ]
        }
    ]
});
