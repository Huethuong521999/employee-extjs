Ext.define("Admin.view.customer.addCustomer.ListFamilyCustomer", {
  extend: "Ext.grid.Panel",

  xtype: "list-family-customer",

  requires: [
    "Admin.view.customer.addCustomer.FamilyCustomerViewController",
  ],

  controller: 'familyCustomer',


  bind: {
    store: '{familyRelationsStore}'
  },
  id: "list-family-customer",
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
      dataIndex: "gender",
      text: "Giới tính",
      flex: 1,
    },
    {
      dataIndex: "dateOfBirth",
      text: "Ngày sinh",
      flex: 1,
      renderer: Ext.util.Format.dateRenderer("d/m/Y")
    },
    {
      dataIndex: "citizenId",
      text: "Số CCCD",
      flex: 1,
    },
    {
      dataIndex: "phone",
      text: "Số điện thoại",
      flex: 1,
    },
  ],
});
