Ext.define("Admin.view.customer.addCustomer.ListFamilyCustomer", {
  extend: "Ext.grid.Panel",

  xtype: "list-family-customer",

  requires: [
    "Admin.view.customer.addCustomer.FamilyCustomerViewController",
    "Admin.view.customer.addCustomer.FamilyCustomerViewModel",
  ],

  controller: 'familyCustomer',
  viewModel: {
    type: "familyCustomer",
  },

  bind: {
    store: '{employeeFamilyDtos}'
  },

  reference: "list-family-customer",
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
      renderer : "CheckGender"
    },
    {
      dataIndex: "dateOfBirth",
      text: "Ngày sinh",
      flex: 1,
      renderer: function(value) {
        return  Utils.formatDate(value);
      },
    },
    {
      dataIndex: "citizenIdentificationNumber",
      text: "Số CCCD",
      flex: 1,
    },
    {
      dataIndex: "phoneNumber",
      text: "Số điện thoại",
      flex: 1,
    },
  ],
  listeners: {
    handleEdit: 'handleEdit'
  }
});
