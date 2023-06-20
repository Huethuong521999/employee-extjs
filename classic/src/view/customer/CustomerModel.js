Ext.define('Admin.view.customer.CustomerModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.customer',

  stores: {
    customer: {
      type: 'customer'
    },
  },
});