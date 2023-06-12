Ext.define("Admin.view.customer.addCustomer.AddCustomerForm", {
  extend: "Ext.window.Window",

  layout: {
    type: "vbox",
    align: "stretch",
  },
  controller: "AddCustomer",
  layout: "fit",
  width: '90%',
  height: '90%',
  resizable: false,
  modal: true,
  closable: true,
  id: "form-customer",

  items: [
    {
      xtype: "form",
      reference: "userForm",
      bodyPadding: 10,
      defaults: {
        xtype: "textfield",
        anchor: "100%",
        labelWidth: 80,
      },

      items: [
        {
          xtype: 'tabpanel',
          items: [
            {
              xtype: 'tabInfoCustomer'
            },
            {
              xtype: 'tabFamilyCustomer'
            },
            {
              xtype: 'tabDiplomaCustomer'
            }
          ]
        }
      ],

      dockedItems: [{
        xtype: 'toolbar',
        buttonAlign: 'right',
        dock: 'bottom',
        items: [{
          xtype: "button",
          ui: 'gray',
          text: "Đóng",
          handler: function () {
            this.up("window").close();
          },
        },
        {
          xtype: "button",
          text: "Lưu",
          ui: 'soft-red',
          handler: function (sender) {
            let form = this.up("window");
            let controller = form.getController();
            controller.handleSave(form);
          }
        }]
      }],

      listeners: {
        afterrender: function () {
          this.center();
        },
        resize: function () {
          this.center();
        }
      }
    },
  ],
});
