Ext.define('Admin.view.user.BigDataTabInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'BigDataTabInfo',
    title: 'Thông tin người dùng',
    layout: 'form',

    items: [
        {
            xtype: 'fieldcontainer',
            layout: {
                type: 'column'
            },
            defaultType: 'textfield',
            defaults: {
                labelAlign: 'top'
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                },
                {
                    fieldLabel: 'Họ và tên',
                    allowBlank: false,
                    name: 'name',
                    cls: 'inputField',
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
                    xtype: 'datefield',
                    fieldLabel: 'Ngày sinh',
                    allowBlank: false,
                    name: 'dateOfBirth',
                    cls: 'inputField',
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
                    xtype: 'checkbox',
                    fieldLabel: 'Trạng thái',
                    name: 'isVerified',
                    id: 'isVerified',
                    cls: 'inputField',
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
