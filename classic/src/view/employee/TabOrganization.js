Ext.define('Admin.view.empolyee.TabOrganization', {
    extend: 'Ext.form.Panel',
    xtype: 'tabOrganization',
    // ...
    title: 'Thông tin cơ quan',
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
                    fieldLabel: "Tên cơ quan",
                    allowBlank: false,
                    name: "agencyName",
                    cls: "inputField",
                },
                {
                    fieldLabel: "Địa chỉ cơ quan",
                    allowBlank: false,
                    name: "workAddress",
                    cls: "inputField",
                },
                {
                    fieldLabel: "Vị trí làm việc",
                    allowBlank: false,
                    name: "workingPosition",
                    cls: "inputField",
                },
                {
                    fieldLabel: "Lương",
                    allowBlank: false,
                    name: "wage",
                    cls: "inputField",
                },     
            ]
        }
    ]
});