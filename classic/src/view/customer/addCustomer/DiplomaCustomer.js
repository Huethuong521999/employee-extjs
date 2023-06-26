Ext.define('Admin.view.customer.addCustomer.DiplomaCustomer', {
    extend: "Ext.grid.Panel",
    xtype: 'tabDiplomaCustomer',
    title: 'Thông tin văn bằng',
    controller: 'diplomaCustomer',
    width: '100%',
    bind: {
        store: '{certificatesDto}'
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
            dataIndex: "certificateName",
            text: "Họ và Tên",
            flex: 2.5,
        },
        {
            dataIndex: "field",
            text: "Lĩnh vực",
            flex: 1,
        },
        {
            dataIndex: "issueDate",
            text: "Ngày cấp",
            flex: 1,
            renderer: "formatDate",
        },
        {
            dataIndex: "content",
            text: "Nội dung",
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
                            fieldLabel: "Tên văn bằng",
                            allowBlank: false,
                            name: "certificateName",
                            flex: 1,
                            blankText: 'Trường này là trường bắt buộc',
                            validator: "validatorName",
                            bind: {
                                value: "{itemCertificates.certificateName}",
                                readOnly: "{isView}"
                            }
                        },
                        { xtype: "tbspacer", width: 12 },
                        {
                            fieldLabel: "Lĩnh vực",
                            allowBlank: false,
                            name: "field",
                            flex: 1,
                            blankText: 'Trường này là trường bắt buộc',
                            bind: {
                                value: "{itemCertificates.field}",
                                readOnly: "{isView}"
                            }
                        },
                        { xtype: "tbspacer", width: 12 },
                        {
                            xtype: 'datefield',
                            fieldLabel: "Ngày cấp",
                            allowBlank: false,
                            name: "issueDate",
                            format: 'd-m-Y',
                            submitFormat: 'Y-m-d',
                            flex: 1,
                            blankText: 'Trường này là trường bắt buộc',
                            bind: {
                                value: "{itemCertificates.issueDate}",
                                readOnly: "{isView}"
                            }
                        },
                    ]
                },
                {
                    layout: "hbox",
                    width: "100%",
                    items: [
                        {
                            fieldLabel: "Nội dung",
                            xtype: 'textfield',
                            allowBlank: false,
                            name: "content",
                            bind: {
                                value: "{itemCertificates.content}",
                                readOnly: "{isView}"
                            },
                            labelAlign: 'top',
                            flex: 1,
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        { xtype: "tbspacer", width: 12 },
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
                            handler: 'handleSubmitDiploma',
                            bind: {
                                hidden: '{isView}'
                            }
                        }
                    ]
                }
            ],
        },
    ],

});