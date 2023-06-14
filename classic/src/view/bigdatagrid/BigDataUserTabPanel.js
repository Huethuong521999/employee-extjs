Ext.define('Admin.view.bigdatagrid.BigDataUserTabPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'BigDataUserTabPanel',

    width: '100%',

    items: [
        {
            id: 'big-data-user-tab-panel',
            xtype: 'tabpanel',
            items: [
                {
                    xtype: 'BigDataTabInfo',
                    itemId: 'BigDataTabInfo'
                }
            ]
        }
    ]
});