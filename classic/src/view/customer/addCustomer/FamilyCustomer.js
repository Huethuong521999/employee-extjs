Ext.define('Admin.view.customer.addCustomer.FamilyCustomer', {
    extend: 'Ext.form.Panel',
    xtype: 'tabFamilyCustomer',
    title: 'Quan hệ gia đình',

    controller: 'familyCustomer',
    id: "familyCustomer",

    items: [
        {
            layout: 'form',
            id: "formFamaily",
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
                            validator: function (value) {
                                return value && (!(/[~`!@#$%^&*()+=\-[\]\\';,/{}|\\":<>?0-9]/.test(value)) ? true : "Chỉ được nhập chữ");
                            },
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
                            name: "citizenIdentificationNumber",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && (/^[0-9]{12}$/.test(value) ? true : "Chỉ được nhập số và có độ dài 12 số");
                            },
                        },
                        {
                            fieldLabel: "Mối quan hệ",
                            allowBlank: false,
                            name: "relationShip",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            fieldLabel: "Số điện thoại",
                            allowBlank: false,
                            name: "phoneNumber",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && ((/(84|0[3|5|7|8|9])+([0-9]{8})/.test(value)) ? true : "Số điện không đúng định dạng số điện thoại việt nam");
                            }
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
                            fieldLabel: "Email",
                            allowBlank: false,
                            name: "email",
                            cls: "inputField w-25",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && ((/^[a-zA-Z0-9_.+-]+@gmail\.com$/.test(value)) ? true : "Email phải có định dang 123@gmail.com");
                            }
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            cls: 'inputField w-25',
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