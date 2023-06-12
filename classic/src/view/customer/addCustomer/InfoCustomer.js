Ext.define('Admin.view.customer.addCustomer.InfoCustomer', {
    extend: 'Ext.form.Panel',
    xtype: 'tabInfoCustomer',
    title: 'Thông tin nhân viên',
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
                    fieldLabel: "Mã khách hàng",
                    allowBlank: false,
                    name: "code",
                    cls: "inputField w-33",
                    // msgTarget: 'under',
                    blankText: 'Trường này là trường bắt buộc',
                },
                {
                    fieldLabel: "Số CCCD",
                    allowBlank: false,
                    name: "citizenId",
                    cls: "inputField w-33",
                    // msgTarget: 'under',
                    blankText: 'Trường này là trường bắt buộc',
                    validator: function (value) {
                        return value && (/^[0-9]{12}$/.test(value) ? true : "Chỉ được nhập số và có độ dài 12 số");
                    },
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
                    fieldLabel: "Email",
                    allowBlank: false,
                    name: "email",
                    cls: "inputField w-33",
                    // msgTarget: 'under',
                    blankText: 'Trường này là trường bắt buộc',
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
                    fieldLabel: "Giới tính",
                    allowBlank: false,
                    name: "gender",
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
            ]
        }
    ]


});