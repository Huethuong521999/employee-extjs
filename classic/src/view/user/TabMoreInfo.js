Ext.define('Admin.view.user.TabMoreInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'tabMoreInfo',
    // ...
    title: 'Thông tin thêm',
    layout: 'form',
    items: [
        {
            xtype: 'fieldcontainer',
            layout: 'column',
            defaultType: 'textfield',
            defaults: {
                labelAlign: 'top'
            },
            items: [
                {
                    fieldLabel: 'Họ và tên',
                    allowBlank: false,
                    name: 'name',
                    cls: 'inputField'
                },
                {
                    fieldLabel: 'Tên tài khoản',
                    allowBlank: false,
                    name: 'username',
                    cls: 'inputField'
                },
                {
                    fieldLabel: 'Email',
                    allowBlank: false,
                    name: 'email',
                    cls: 'inputField'
                }
            ]
        }
    ]
});
