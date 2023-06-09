Ext.define('Admin.view.customer.addCustomer.FamilyCustomer', {
    extend: 'Ext.form.Panel',
    xtype: 'tabFamilyCustomer',
    title: 'Quan hệ gia đình',

    controller: 'familyCustomer',
    id: "familyCustomer",

    items: [
        {
            layout: 'form',
            id:"formFamaily",
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: 'column',
                    defaultType: 'textfield',
                    defaults: {
                        labelAlign: 'top',
                    },
                    items: [
                        {
                            xtype: "hiddenfield",
                            name: "id",
                        },
                        {
                            fieldLabel: "Họ và tên",
                            allowBlank: false,
                            name: "name",
                            cls: "inputField w-25",
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: "Ngày sinh",
                            allowBlank: false,
                            name: "dateOfBirth",
                            cls: "inputField w-25",
                        },
                        {
                            fieldLabel: "Giới tính",
                            allowBlank: false,
                            name: "gender",
                            cls: "inputField w-25",
                        },
                        {
                            fieldLabel: "Số CCCD",
                            allowBlank: false,
                            name: "citizenId",
                            cls: "inputField w-25",
                        },
                        {
                            fieldLabel: "Mối quan hệ",
                            allowBlank: false,
                            name: "relation",
                            cls: "inputField w-25",
                        },
                        {
                            fieldLabel: "Số điện thoại",
                            allowBlank: false,
                            name: "phone",
                            cls: "inputField w-25",
                        },
                        {
                            fieldLabel: "Địa chỉ",
                            allowBlank: false,
                            name: "address",
                            cls: "inputField w-25",
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            cls: 'buttonContainer inputField w-25',
                            items: [
                                {
                                    xtype: 'button',
                                    ui: 'soft-red',
                                    margin: "0 10px 0 0",
                                    text: 'Hủy',
                                    handler: 'handleClear'
                                },
                                {
                                    xtype: 'button',
                                    ui: 'gray',
                                    text: 'Lưu',
                                    handler: 'handleSubmitFamily'
                                }
                            ]
                        }
                    ],
                },
            ],
        },
        {
            margin: "20px",
            xtype: "list-family-customer"
        }

    ]
});