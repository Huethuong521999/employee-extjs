Ext.define("Admin.view.customer.addCustomer.AddCustomerForm", {
  extend: "Ext.tab.Panel",
  xtype: 'addCustomerForm',
  controller: "AddCustomer",
  viewModel: {
    type: "addCustomer",
  },
  layout: "fit",
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
  ],
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'bottom',
    items: [
      '->',
      {
        xtype: 'button',
        ui: 'gray',
        text: 'Đóng',
        handler: 'handleClose'
      },
      {
        xtype: 'button',
        text: 'Lưu',
        ui: 'soft-red',
        handler: 'handleSave'
      },
      '->',
    ]
  }],
});
