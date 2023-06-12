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

      buttons: [
        {
          text: "Lưu",
          handler: function (sender) {
            let form = this.up("window");
            let controller = form.getController();
            controller.handleSave(form);
          },
        },
        {
          text: "Đóng",
          handler: function () {
            this.up("window").close();
          },
        },
      ],

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
