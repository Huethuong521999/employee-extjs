Ext.define('Admin.view.user.TabInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'tabInfo',
    title: 'Thông tin người dùng',
    layout: 'form',
    controller: 'user',

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
                    fieldLabel: 'Tên tài khoản',
                    allowBlank: false,
                    name: 'username',
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
                    fieldLabel: 'Email',
                    allowBlank: false,
                    name: 'email',
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
                    fieldLabel: 'Số điện thoại',
                    allowBlank: false,
                    name: 'phone',
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
                    fieldLabel: 'Trang web',
                    allowBlank: false,
                    name: 'website',
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
                    fieldLabel: 'Thêm thông tin',
                    id: 'moreInfoCheckbox',
                    cls: 'inputField',
                    handler: 'handleCheckMoreInfo'
                }
            ]
        }
    ]
});
