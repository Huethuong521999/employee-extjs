Ext.define("Admin.view.customer.Customer", {
  extend: "Ext.container.Container",
  padding: "10px",
  xtype: "customer",

  requires: [
    "Admin.view.customer.ListCustomer",
    "Admin.view.customer.CustomerModel",
    "Admin.view.customer.CustomerController"
  ],

  controller: 'customer',
  viewModel: {
    type: "customer",
  },

  margin: "10px",

  items: [
    {
      xtype: "button",
      text: "Thêm mới nhân viên",
      padding: "10px",
      handler: 'onOpenCustomerForm'
    },
    {
      xtype: "list-customer",
    },
  ],
});
