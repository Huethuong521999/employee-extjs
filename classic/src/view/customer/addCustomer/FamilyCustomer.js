Ext.define('Admin.view.customer.addCustomer.FamilyCustomer', {
    extend: 'Ext.grid.Panel',
    xtype: 'tabFamilyCustomer',
    title: 'Quan hệ gia đình',
    controller: 'familyCustomer',
    width: '100%',
    bind: {
        store: '{employeeFamilyDtos}'
    },
    columns: [
        {
            xtype: "actioncolumn",
            text: "Thao tác",
            width: 80,
            align: "center",
            items: [
                {
                    iconCls: "x-fa fa-edit",
                    tooltip: "Chỉnh sửa",
                    handler: "handleEdit",
                    getClass: "isIconEdit"
                },
                {
                    iconCls: "fa fa-trash",
                    tooltip: "Xóa",
                    handler: "handleDelete",
                    getClass: "isIconDelete"
                },
            ],
        },
        {
            dataIndex: "name",
            text: "Họ và Tên",
            flex: 2.5,
        },
        {
            dataIndex: "gender",
            text: "Giới tính",
            flex: 1,
            renderer: "CheckGender"
        },
        {
            dataIndex: "dateOfBirth",
            text: "Ngày sinh",
            flex: 1,
            renderer: "formatDate",
        },
        {
            dataIndex: "citizenIdentificationNumber",
            text: "Số CCCD",
            flex: 1,
        },
        {
            dataIndex: "phoneNumber",
            text: "Số điện thoại",
            flex: 1,
        },
    ],

    dockedItems: [
        {
            layout: 'vbox',
            dock: 'top',
            width: "100%",
            margin: "0 0 20px 0",
            items: [
                {
                    layout: "hbox",
                    width: "100%",
                    defaultType: 'textfield',
                    defaults: {
                        labelAlign: 'top',
                    },
                    items: [
                        {
                            fieldLabel: "Họ và tên",
                            name: "name",
                            bind: {
                                value: "{itemFamilyRelations.name}",
                                readOnly: "{isView}"
                            },
                            flex: 1,
                            allowBlank: false,
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && (!Utils.regexCheckString(value) ? true : "Chỉ được nhập chữ");
                            },
                        },
                        { xtype: "tbspacer", width: 12 },
                        {
                            xtype: 'datefield',
                            fieldLabel: "Ngày sinh",
                            name: "dateOfBirth",
                            bind: {
                                value: "{itemFamilyRelations.dateOfBirth}",
                                readOnly: "{isView}"
                            },
                            flex: 1,
                            allowBlank: false,
                            format: 'd-m-Y',
                            submitFormat: 'Y-m-d',
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        { xtype: "tbspacer", width: 12 },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Giới tính',
                            name: 'gender',
                            bind: {
                                value: "{itemFamilyRelations.gender}",
                                readOnly: "{isView}"
                            },
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
                            flex: 1,
                            emptyText: 'Chọn giới tính...'
                        },
                    ]
                },
                {
                    layout: "hbox",
                    width: "100%",
                    defaultType: 'textfield',
                    defaults: {
                        labelAlign: 'top',
                    },
                    items: [
                        {
                            fieldLabel: "Số CCCD",
                            name: "citizenIdentificationNumber",
                            bind: {
                                value: "{itemFamilyRelations.citizenIdentificationNumber}",
                                readOnly: "{isView}"
                            },
                            flex: 1,
                            allowBlank: false,
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && (Utils.regexCheckCCDC(value) ? true : "Chỉ được nhập số và có độ dài 12 số");
                            },
                        },
                        { xtype: "tbspacer", width: 12 },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Mối quan hệ',
                            name: 'relationShip',
                            bind: {
                                value: "{itemFamilyRelations.relationShip}",
                                readOnly: "{isView}"
                            },
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
                            flex: 1,
                            emptyText: 'Chọn mối quan hệ...'
                        },
                        { xtype: "tbspacer", width: 12 },
                        {
                            fieldLabel: "Số điện thoại",
                            allowBlank: false,
                            name: "phoneNumber",
                            bind: {
                                value: "{itemFamilyRelations.phoneNumber}",
                                readOnly: "{isView}"
                            },
                            flex: 1,
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && (Utils.regexChecKPhone(value) ? true : "Số điện không đúng định dạng số điện thoại việt nam");
                            },
                        },
                    ]
                },
                {
                    layout: "hbox",
                    width: "100%",
                    defaultType: 'textfield',
                    defaults: {
                        labelAlign: 'top',
                    },
                    items: [
                        {
                            fieldLabel: "Địa chỉ",
                            name: "address",
                            bind: {
                                value: "{itemFamilyRelations.address}",
                                readOnly: "{isView}"
                            },
                            flex: 1,
                            allowBlank: false,
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        { xtype: "tbspacer", width: 12 },
                        {
                            fieldLabel: "Email",
                            name: "email",
                            bind: {
                                value: "{itemFamilyRelations.email}",
                                readOnly: "{isView}"
                            },
                            flex: 1,
                            allowBlank: false,
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && (Utils.regexCheckEmail(value) ? true : "Email phải có định dang 123@gmail.com");
                            },
                        },
                        {
                            xtype: "tbspacer",
                            width: 12,
                            bind: {
                                hidden: '{isView}'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'gray',
                            cls: "buttonContainer mr-10",
                            text: 'Hủy',
                            width: 100,
                            handler: 'handleClear',
                            bind: {
                                hidden: '{isView}'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'soft-red',
                            text: 'Lưu',
                            cls: "buttonContainer",
                            width: 100,
                            handler: 'handleSubmitFamily',
                            bind: {
                                hidden: '{isView}'
                            }
                        }
                    ]
                }
            ],
        },
    ]
});