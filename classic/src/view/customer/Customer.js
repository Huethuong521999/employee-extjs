Ext.define("Admin.view.customer.Customer", {
  extend: "Ext.container.Container",
  padding: "10px",
  xtype: "customer",
  
  controller: 'customer',

  requires: ["Admin.view.customer.ListCustomer", "Admin.view.customer.CustomerController"],
  margin: "10px",

  items: [
    {
      xtype: "button",
      text: "Thêm mới khách hàng",
      padding: "10px",
      handler: 'onOpenCustomerForm'
    },
    {
      xtype: "list-customer",
    },
  ],
});
