Ext.define('Admin.view.customer.addCustomer.DiplomaCustomer', {
    extend: 'Ext.form.Panel',
    xtype: 'tabDiplomaCustomer',
    title: 'Thông tin văn bằng',

    requires: [
        "Admin.view.customer.addCustomer.DiplomaCustomerViewController",
        "Admin.view.customer.addCustomer.DiplomaCustomerViewModel",
    ],

    controller: 'diplomaCustomer',
    viewModel: {
        type: "diplomaCustomer",
    },

    items: [
        {
            layout: 'form',
            id: "formDiploma",
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
                            name: "certificateName",
                            cls: "inputField w-40",
                            blankText: 'Trường này là trường bắt buộc',
                            validator: function (value) {
                                return value && (!Utils.regexCheckString(value) ? true : "Chỉ được nhập chữ");
                            },
                        },
                        {
                            fieldLabel: "Lĩnh vực",
                            allowBlank: false,
                            name: "field",
                            cls: "inputField w-40",
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: "Ngày cấp",
                            allowBlank: false,
                            name: "issueDate",
                            format: 'd-m-Y',
                            submitFormat: 'Y-m-d',
                            cls: "inputField w-20",
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            fieldLabel: "Nội dung",
                            allowBlank: false,
                            name: "content",
                            cls: "inputField w-80",
                            blankText: 'Trường này là trường bắt buộc',
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            cls: 'buttonContainer inputField w-20',
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
    ],

});