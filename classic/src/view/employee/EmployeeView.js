Ext.define("Admin.view.employee.EmployeeView", {
  extend: "Ext.tree.Panel",
  padding: "10px",
  xtype: "employee",

  controller: "employeecontroller",
  viewModel: {
    type: "employeeviewmodel",
  },

  requires: [
    "Ext.grid.plugin.CellEditing",
    "Ext.data.*",
    "Ext.grid.*",
    "Ext.tree.*",
    "Admin.view.employee.EmployeeController",
  ],

  bind: {
    store: "{employeeStore}",
  },

  selModel: {
    selType: "checkboxmodel",
    checkOnly: true,
    showHeaderCheckbox: true,
  },

  plugins: {
    ptype: "cellediting",
    clicksToEdit: 1,
    gridfilters: true,
  },

  headerBorders: true,
  rowLines: true,
  scrollable: true,
  reserveScrollbar: true,
  useArrows: true,
  rootVisible: false,
  multiSelect: true,
  singleExpand: false,

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
          handler: "handleEdit",
        },
        {
          iconCls: "fa fa-trash",
          tooltip: "Xóa",
          handler: "handleDelete"
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
      xtype: "treecolumn",
      dataIndex: "hoTen",
      text: "Họ và Tên",
      flex: 2.5,
      editor: "textfield",
      filter: "string",
      expanded: true,
      // iconCls: 'x-tree-noicon'
    },
    {
      dataIndex: "gioiTinh",
      text: "Giới tính",
      flex: 1.2,
      editor: {
        xtype: "combo",
        store: [
          { name: "Nam", code: 0 },
          { name: "Nữ", code: 1 },
          { name: "Không xác định", code: 2 },
        ],
        displayField: "name",
        valueField: "name",
        listeners: {},
      },
    },
    {
      dataIndex: "ngaySinh",
      text: "Ngày sinh",
      flex: 1.5,
      renderer: Ext.util.Format.dateRenderer("d/m/Y"),
      editor: "datefield",
    },
    {
      dataIndex: "soCccd",
      text: "Số CCCD",
      flex: 1.5,
      editor: "textfield",
    },
    {
      dataIndex: "email",
      text: "Email",
      flex: 2,
      editor: "textfield",
    },
    {
      dataIndex: "soDienThoai",
      text: "Số điện thoại",
      flex: 1,
      editor: "textfield",
    },
    {
      dataIndex: "diaChi",
      text: "Địa chỉ",
      flex: 1.5,
      editor: {
        xtype: "combo",
        store: [
          { name: "Hải Phòng", code: 0 },
          { name: "Nam Định", code: 1 },
          { name: "Quảng Ninh", code: 2 },
          { name: "Hà Nội", code: 3 },
          { name: "Nghệ An", code: 4 },
          { name: "TP. Hồ Chí Minh", code: 5 },
        ],
        displayField: "name",
        valueField: "name",
        listeners: {},
      },
    },
    {
      text: "Active",
      dataIndex: "active",
      renderer: function (value) {
        return (
          "<input type='checkbox'" + (value ? "checked='checked'" : "") + " / >"
        );
      },
      editor: {
        xtype: "checkbox",
        trueText: true,
        falseText: false,
      },
    },
  ],

  dockedItems: [
    {
      dock: "top",
      layout: "hbox",
      width: "100%",
      items: [
        {
          xtype: "button",
          text: "Thêm mới",
          padding: "10px",
          margin: "0px 0px 10px 10px",
          handler: "onOpenEmloyeeForm",
        },
        {
          flex: 1,
        },
      ],
    },
  ],
});
