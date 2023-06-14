Ext.define('Admin.view.customer.addCustomer.InfoCustomer', {
    extend: 'Ext.form.Panel',
    xtype: 'tabInfoCustomer',
    title: 'Thông tin nhân viên',
    id: "tabInfoCustomer",
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
                    fieldLabel: "Mã nhân viên",
                    allowBlank: false,
                    name: "code",
                    cls: "inputField w-33",
                    // msgTarget: 'under',
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    fieldLabel: "Số điện thoại",
                    allowBlank: false,
                    name: "phone",
                    cls: "inputField w-33",
                    // msgTarget: 'under',
                    blankText: 'Trường này là trường bắt buộc',
                    validator: function (value) {
                        return value && ((/(84|0[3|5|7|8|9])+([0-9]{8})/.test(value)) ? true : "Số điện không đúng định dạng số điện thoại việt nam");
                    }
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
                    xtype: 'datefield',
                    fieldLabel: "Ngày cấp",
                    allowBlank: false,
                    name: "dateOfIssuanceCard",
                    cls: "inputField w-33",
                    // msgTarget: 'under',
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    fieldLabel: "Nơi cấp",
                    allowBlank: false,
                    name: "placeOfIssueCard",
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
                    fieldLabel: "Địa chỉ",
                    allowBlank: false,
                    name: "address",
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
                    fieldLabel: "Tôn giáo",
                    allowBlank: false,
                    name: "religion",
                    cls: "inputField w-33",
                    // msgTarget: 'under',
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    fieldLabel: "Dân tộc",
                    allowBlank: false,
                    name: "ethnic",
                    cls: "inputField w-33",
                    // msgTarget: 'under',
                    blankText: 'Trường này là trường bắt buộc',
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
                    fieldLabel: 'Team',
                    name: 'team',
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