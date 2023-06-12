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
                },
                {
                    fieldLabel: "Mã khách hàng",
                    allowBlank: false,
                    name: "code",
                    cls: "inputField w-33",
                },
                {
                    fieldLabel: "Số CCCD",
                    allowBlank: false,
                    name: "citizenId",
                    cls: "inputField w-33",
                },
                {
                    fieldLabel: "Số điện thoại",
                    allowBlank: false,
                    name: "phone",
                    cls: "inputField w-33",
                },
                {
                    fieldLabel: "Email",
                    allowBlank: false,
                    name: "email",
                    cls: "inputField w-33",
                },
                {
                    fieldLabel: "Địa chỉ",
                    allowBlank: false,
                    name: "address",
                    cls: "inputField w-33",
                },
                {
                    fieldLabel: "Giới tính",
                    allowBlank: false,
                    name: "gender",
                    cls: "inputField w-33",
                },
                {
                    xtype: 'datefield',
                    fieldLabel: "Ngày sinh",
                    allowBlank: false,
                    name: "dateOfBirth",
                    cls: "inputField w-33",
                },
            ]
        }
    ]

    
});