Ext.define("Admin.view.customer.addCustomer.ListDiplomaCustomer", {
  extend: "Ext.grid.Panel",

  xtype: "list-diploma-customer",

  requires: [
    "Admin.view.customer.addCustomer.DiplomaCustomerViewController",
    "Admin.view.customer.addCustomer.DiplomaCustomerViewModel",
  ],

  controller: 'diplomaCustomer',
  viewModel: {
    type: "diplomaCustomer",
  },

  bind: {
    store: '{certificatesDto}'
  },
  reference: "list-diploma-customer",

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
          handler: "handleEdit"
        },
        {
          iconCls: "fa fa-trash",
          tooltip: "Xóa",
          handler: "handleDelete",
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
      renderer: Ext.util.Format.dateRenderer("d/m/Y")
    },
    {
      dataIndex: "content",
      text: "Nội dung",
      flex: 1,
    },
  ],
  listeners: {
    handleEdit: 'handleEdit'
  }
});
