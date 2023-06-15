Ext.define('Admin.view.bigdatagrid.BigDataUserForm', {
    extend: 'Ext.window.Window',
    controller: 'bigdatagridcontroller',
    responsiveConfig: {
        'width >= 992': {
            width: '50%'
        },
        'width < 768 ': {
            width: '90%'
        }
    },
    resizable: false,
    modal: true,
    closable: true,

    items: [
        {
            xtype: 'form',
            reference: 'BigDataUserForm',
            bodyPadding: 10,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 80
            },

            buttons: [
                {
                    text: 'Lưu',
                    handler: 'handleSave'
                },
                {
                    text: 'Đóng',
                    handler: 'handleClose'
                }
            ],

            items: [
                {
                    xtype: 'BigDataUserTabPanel'
                }
            ]
        }
    ]
});
