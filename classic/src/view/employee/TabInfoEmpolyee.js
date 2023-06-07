Ext.define('Admin.view.empolyee.TabInfoEmpolyee', {
    extend: 'Ext.form.Panel',
    xtype: 'tabInfoEmpolyee',
    // ...
    title: 'Thông tin nhân viên',
    layout: 'form',
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

                    //   bind: {
                    //     value: "{currentUser.name.first}",
                    //   },
                },
                {
                    fieldLabel: "Họ và tên",
                    allowBlank: false,
                    name: "hoTen",
                    cls: "inputField",

                    //   bind: {
                    //     value: "{currentUser.name.first}",
                    //   },
                },
                {
                    fieldLabel: "Giới tính",
                    allowBlank: false,
                    name: "gioiTinh",
                    cls: "inputField",

                    //   bind: {
                    //     value: "{currentUser.name.last}",
                    //   },
                },
                {
                    xtype: 'datefield',
                    fieldLabel: "Ngày sinh",
                    allowBlank: false,
                    name: "ngaySinh",
                    cls: "inputField",

                    //   bind: {
                    //     value: "{currentUser.age}",
                    //   },
                },
                {
                    fieldLabel: "Số CCCD",
                    allowBlank: false,
                    name: "soCccd",
                    cls: "inputField",

                    //   bind: {
                    //     value: "{currentUser.name.first}",
                    //   },
                },
                {
                    fieldLabel: "Email",
                    allowBlank: false,
                    //   vtype: "email",
                    name: "email",
                    cls: "inputField",

                    //   bind: {
                    //     value: "{currentUser.email}",
                    //   },
                },
                {
                    fieldLabel: "Số điện thoại",
                    allowBlank: false,
                    name: "soDienThoai",
                    cls: "inputField",

                    //   bind: {
                    //     value: "{currentUser.name.first}",
                    //   },
                },
                {
                    fieldLabel: "Địa chỉ",
                    allowBlank: false,
                    name: "diaChi",
                    cls: "inputField",

                    //   bind: {
                    //     value: "{currentUser.name.first}",
                    //   },
                },
            ]
        }
    ]
});