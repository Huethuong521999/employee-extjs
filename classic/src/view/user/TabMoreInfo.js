Ext.define('Admin.view.user.TabMoreInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'tabMoreInfo',
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
                    fieldLabel: 'Tên công ty',
                    allowBlank: false,
                    name: 'company',
                    cls: 'inputField',
                    bind: {
                        value: '{userData.company.name}'
                    },
                    responsiveConfig: {
                        'width >= 768': {
                            width: '50%'
                        },
                        'width < 768 ': {
                            width: '100%'
                        }
                    }
                },
                {
                    fieldLabel: 'Địa chỉ',
                    allowBlank: false,
                    name: 'address',
                    cls: 'inputField',
                    bind: {
                        value: '{userData.address.street}'
                    },
                    responsiveConfig: {
                        'width >= 768': {
                            width: '50%'
                        },
                        'width < 768 ': {
                            width: '100%'
                        }
                    }
                }
            ]
        }
    ]
});
