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
                            cls: "inputField w-33",
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
                            cls: "inputField w-33",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Giới tính',
                            name: 'gender',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['value', 'label'],
                                data: [
                                    { value: '0', label: 'Nam' },
                                    { value: '1', label: 'Nữ' },
                                    { value: '2', label: 'Khác' }
                                ]
                            }),
                            queryMode: 'local',
                            editable: false,
                            displayField: 'label',
                            valueField: 'value',
                            allowBlank: false,
                            cls: "inputField w-33",
                            emptyText: 'Chọn giới tính...'
                        },
                        {
                            fieldLabel: "Số CCCD",
                            allowBlank: false,
                            name: "citizenIdentificationNumber",
                            cls: "inputField w-33",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && (/^[0-9]{12}$/.test(value) ? true : "Chỉ được nhập số và có độ dài 12 số");
                            },
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Mối quan hệ',
                            name: 'relationShip',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['value', 'label'],
                                data: [
                                    { value: '0', label: 'Ông' },
                                    { value: '1', label: 'Bà' },
                                    { value: '2', label: 'Bố' },
                                    { value: '3', label: 'Mẹ' },
                                    { value: '4', label: 'Anh' },
                                    { value: '5', label: 'Chị' },
                                    { value: '6', label: 'Em' },
                                ]
                            }),
                            queryMode: 'local',
                            editable: false,
                            displayField: 'label',
                            valueField: 'value',
                            allowBlank: false,
                            cls: "inputField w-33",
                            emptyText: 'Chọn mối quan hệ...'
                        },
                        {
                            fieldLabel: "Số điện thoại",
                            allowBlank: false,
                            name: "phoneNumber",
                            cls: "inputField w-33",
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
                            cls: "inputField w-33",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            fieldLabel: "Email",
                            allowBlank: false,
                            name: "email",
                            cls: "inputField w-33",
                            // msgTarget: 'under',
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && ((/^[a-zA-Z0-9_.+-]+@gmail\.com$/.test(value)) ? true : "Email phải có định dang 123@gmail.com");
                            }
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            cls: 'buttonContainer inputField w-33',
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