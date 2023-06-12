Ext.define('Admin.view.user.UserForm', {
    extend: 'Ext.window.Window',
    controller: 'user',
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
    id: 'form-user',

    items: [
        {
            xtype: 'form',
            reference: 'userForm',
            bodyPadding: 10,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 80
            },

            buttons: [
                {
                    text: 'Lưu',
                    handler: function (sender) {
                        let form = this.up('window');
                        let controller = form.getController();
                        controller.handleSave(form);
                    }
                },
                {
                    text: 'Đóng',
                    handler: function () {
                        this.up('window').close();
                    }
                }
            ],

            items: [
                {
                    xtype: 'userTabPanel'
                }
            ]
        }
    ]
});
