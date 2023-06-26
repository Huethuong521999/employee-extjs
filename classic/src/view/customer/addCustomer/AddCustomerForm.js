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
        itemId: 'card-prev',
        text: '&laquo; Previous',
        handler: 'showPrevious',
        bind: {
          disabled: '{isPrevious}'
        }
      },
      {
        xtype: 'button',
        itemId: "saveButton",
        text: 'Lưu',
        ui: 'soft-red',
        handler: 'handleSave',
        bind: {
          hidden: '{isView}'
        }
      },
      {
        xtype: 'button',
        itemId: "register",
        text: 'Đăng ký',
        ui: 'soft-red',
        handler: 'handleRegister',
        bind: {
          disabled: '{isRegister}'
        }
      },
      {
        xtype: 'button',
        ui: 'gray',
        text: 'Đóng',
        handler: 'handleClose'
      },
      {
        itemId: 'card-next',
        text: 'Next &raquo;',
        handler: 'showNext',
        bind: {
          disabled: '{isNext}'
        }
      },
      '->',
    ]
  }],
  listeners: {
    tabchange: "handleChangeTab"
  }
});
