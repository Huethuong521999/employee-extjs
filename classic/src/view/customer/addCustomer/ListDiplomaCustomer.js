Ext.define("Admin.view.customer.addCustomer.ListDiplomaCustomer", {
  extend: "Ext.grid.Panel",

  xtype: "list-diploma-customer",

  requires: [
    "Admin.view.customer.addCustomer.DiplomaCustomerViewController",
  ],

  controller: 'diplomaCustomer',

  bind: {
    store: '{certificatesStore}'
  },

  id: "list-diploma-customer",

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
      dataIndex: "name",
      text: "Họ và Tên",
      flex: 2.5,
    },
    {
      dataIndex: "field",
      text: "Lĩnh vực",
      flex: 1,
    },
    {
      dataIndex: "issuanceDate",
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
});
