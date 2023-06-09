Ext.define("Admin.view.customer.ListCustomer", {
  extend: "Ext.grid.Panel",

  xtype: "list-customer",

  requires: [
    "Admin.view.customer.CustomerModel",
    "Admin.view.customer.CustomerController"
  ],

  viewModel: {
    type: "customer",
  },

  controller: 'customer',

  bind: {
    store: "{customer}"
  },

  id: "list-customer",

  viewConfig: {
    preserveScrollOnRefresh: true,
    preserveScrollOnReload: true,
  },

  selModel: {
    selType: "checkboxmodel",
    checkOnly: true,
    showHeaderCheckbox: true,
  },

  headerBorders: true,
  rowLines: true,
  scrollable: false,
  margin: "10px 0 0 0",

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
          handler: function (grid, rowIndex, colIndex) {
            let rec = grid.getStore().getAt(rowIndex);
            let controller = grid.up('list-customer').getController();
            controller.handleDelete(this, rec);
          },
        },
      ],
    },
    {
      xtype: "rownumberer",
      dataIndex: "stt",
      text: "STT",
      width: 50,
      align: "center",
    },
    {
      dataIndex: "name",
      text: "Họ và Tên",
      flex: 2.5,
    },
    {
      dataIndex: "code",
      text: "Mã khách hàng",
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
      dataIndex: "email",
      text: "Email",
      flex: 2,
    },
    {
      dataIndex: "phone",
      text: "Số điện thoại",
      flex: 1,
    },
  ],
});
