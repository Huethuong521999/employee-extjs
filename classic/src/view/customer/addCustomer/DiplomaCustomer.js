Ext.define('Admin.view.customer.addCustomer.DiplomaCustomer', {
    extend: 'Ext.form.Panel',
    xtype: 'tabDiplomaCustomer',
    title: 'Thông tin văn bằng',

    controller: 'diplomaCustomer',
    id: "diplomaCustomer",
    items: [
        {
            layout: 'form',
            id:"formDiploma",
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
                            fieldLabel: "Tên văn bằng",
                            allowBlank: false,
                            name: "name",
                            cls: "inputField w-40",
                        },
                        {
                            fieldLabel: "Lĩnh vực",
                            allowBlank: false,
                            name: "field",
                            cls: "inputField w-40",
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: "Ngày cấp",
                            allowBlank: false,
                            name: "issuanceDate",
                            cls: "inputField w-20",
                        },
                        {
                            fieldLabel: "Nội dung",
                            allowBlank: false,
                            name: "content",
                            cls: "inputField w-80",
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            cls: 'buttonContainer inputField w-20',
                            items: [
                                {
                                    xtype: 'button',
                                    ui: 'soft-red',
                                    margin: "0 10px 0 0",
                                    text: 'Hủy',
                                    handler: 'handleClear'
                                },
                                {
                                    xtype: 'button',
                                    ui: 'gray',
                                    text: 'Lưu',
                                    handler: 'handleSubmitDiploma'
                                }
                            ]
                        }
                    ],
                },
            ],
        },
        {
            margin: "20px",
            xtype: "list-diploma-customer",
        }
    ]
});