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
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: "Ngày sinh",
                            allowBlank: false,
                            name: "dateOfBirth",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            fieldLabel: "Giới tính",
                            allowBlank: false,
                            name: "gender",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            fieldLabel: "Số CCCD",
                            allowBlank: false,
                            name: "citizenId",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            fieldLabel: "Mối quan hệ",
                            allowBlank: false,
                            name: "relation",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            fieldLabel: "Số điện thoại",
                            allowBlank: false,
                            name: "phone",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            fieldLabel: "Địa chỉ",
                            allowBlank: false,
                            name: "address",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            cls: 'buttonContainer inputField w-25',
                            items: [
                                {
                                    xtype: 'button',
                                    ui: 'gray',
                                    margin: "0 10px 0 0",
                                    text: 'Hủy',
                                    handler: 'handleClear'
                                },
                                {
                                    xtype: 'button',
                                    ui: 'soft-red',
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