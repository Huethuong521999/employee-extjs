Ext.define('Admin.view.customer.addCustomer.InfoCustomer', {
    extend: 'Ext.form.Panel',
    xtype: 'tabInfoCustomer',
    title: 'Thông tin nhân viên',
    controller: "AddCustomer",
    reference: "infoCustomer",
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
                    blankText: 'Trường này là trường bắt buộc',
                    bind: {
                        value: "{info.name}",
                        readOnly: "{isView}"
                    },
                    validator: function (value) {
                        return value && (!Utils.regexCheckString(value) ? true : "Chỉ được nhập chữ");
                    },
                },
                {
                    fieldLabel: "Mã nhân viên",
                    allowBlank: false,
                    name: "code",
                    cls: "inputField w-33",
                    bind: {
                        value: "{info.code}",
                        readOnly: "{isView}"
                    },
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    fieldLabel: "Số điện thoại",
                    allowBlank: false,
                    name: "phone",
                    bind: {
                        value: "{info.phone}",
                        readOnly: "{isView}"
                    },
                    cls: "inputField w-33",
                    blankText: 'Trường này là trường bắt buộc',
                    validator: function (value) {
                        return value && (Utils.regexChecKPhone(value) ? true : "Số điện không đúng định dạng số điện thoại việt nam");
                    },
                },
                {
                    fieldLabel: "Số CCCD",
                    allowBlank: false,
                    name: "citizenIdentificationNumber",
                    bind: {
                        value: "{info.citizenIdentificationNumber}",
                        readOnly: "{isView}"
                    },
                    cls: "inputField w-33",
                    blankText: 'Trường này là trường bắt buộc',
                    validator: function (value) {
                        return value && (Utils.regexCheckCCDC(value) ? true : "Chỉ được nhập số và có độ dài 12 số");
                    },
                },
                {
                    xtype: 'datefield',
                    fieldLabel: "Ngày cấp",
                    allowBlank: false,
                    name: "dateOfIssuanceCard",
                    bind: {
                        value: "{info.dateOfIssuanceCard}",
                        readOnly: "{isView}"
                    },
                    cls: "inputField w-33",
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    fieldLabel: "Nơi cấp",
                    allowBlank: false,
                    name: "placeOfIssueCard",
                    bind: {
                        value: "{info.placeOfIssueCard}",
                        readOnly: "{isView}"
                    },
                    cls: "inputField w-33",
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    fieldLabel: "Email",
                    allowBlank: false,
                    name: "email",
                    bind: {
                        value: "{info.email}",
                        readOnly: "{isView}"
                    },
                    cls: "inputField w-33",
                    blankText: 'Trường này là trường bắt buộc',
                    validator: function (value) {
                        return value && (Utils.regexCheckEmail(value) ? true : "Email phải có định dang 123@gmail.com");
                    },
                },
                {
                    fieldLabel: "Địa chỉ",
                    allowBlank: false,
                    name: "address",
                    bind: {
                        value: "{info.address}",
                        readOnly: "{isView}"
                    },
                    cls: "inputField w-33",
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Giới tính',
                    name: 'gender',
                    bind: {
                        value: "{info.gender}",
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
                    cls: "inputField w-33",
                    emptyText: 'Chọn giới tính...'
                },
                {
                    fieldLabel: "Tôn giáo",
                    allowBlank: false,
                    name: "religion",
                    bind: {
                        value: "{info.religion}",
                        readOnly: "{isView}"
                    },
                    cls: "inputField w-33",
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    fieldLabel: "Dân tộc",
                    allowBlank: false,
                    name: "ethnic",
                    bind: {
                        value: "{info.ethnic}",
                        readOnly: "{isView}"
                    },
                    cls: "inputField w-33",
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    xtype: 'datefield',
                    fieldLabel: "Ngày sinh",
                    allowBlank: false,
                    name: "dateOfBirth",
                    bind: {
                        value: "{info.dateOfBirth}",
                        readOnly: "{isView}"
                    },
                    cls: "inputField w-33",
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Team',
                    name: 'team',
                    bind: {
                        value: "{info.team}",
                        readOnly: "{isView}"
                    },
                    store: Ext.create('Ext.data.Store', {
                        fields: ['value', 'label'],
                        data: [
                            { value: 1, label: 'Backend' },
                            { value: 2, label: 'Frontend' },
                            { value: 3, label: 'FullStack' }
                        ]
                    }),
                    queryMode: 'local',
                    editable: false,
                    displayField: 'label',
                    valueField: 'value',
                    allowBlank: false,
                    cls: "inputField w-33",
                    emptyText: 'Chọn team...'
                },
            ]
        }
    ]


});