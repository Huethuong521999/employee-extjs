Ext.define('Admin.view.bigdatagrid.BigDataUserTabPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'BigDataUserTabPanelView',

    width: '100%',

    viewModel: {
        type: 'bigdatagridviewmodel'
    },

    items: [
        {
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
