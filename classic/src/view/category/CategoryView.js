Ext.define("Admin.view.category.CategoryView", {
  extend: "Ext.grid.Panel",
  xtype: "categoryEx",

  viewModel: {
    type : "categoryviewmodel"
  } ,
  controller: "categoryviewcontroller",

  selModel: {
    selType: "checkboxmodel",
    checkOnly: true,
    showHeaderCheckbox: true,
    pruneRemoved: true
  },
  columnLines: true,
  headerBorders: true,
  rowLines: true,
  scrollable: true,
  padding: "10px",
  
  bind: {
    store: "{categoryStore}",
  },

  columns: [
    {
      xtype: "rownumberer",
      dataIndex: "stt",
      text: "STT",
      width: 50,
      align: "center",
    },
    {
      dataIndex: "tenDanhMuc",
      text: "Tên danh mục",
      flex: 2,
    },
    {
      dataIndex: "soLuong",
      text: "Số lượng DM",
      flex: 1.2,
    },

    {
      dataIndex: "soSanPham",
      text: "Số lượng SP",
      flex: 1.2,
    },
    {
      dataIndex: "ngayGiao",
      text: "Ngày giao",
      flex: 1,
      renderer: Ext.util.Format.dateRenderer("d/m/Y"),
    },
    {
      dataIndex: "trangThai",
      text: "Trạng thái",
      flex: 1,
    },
    {
      dataIndex: "fileName",
      text: "Tên file",
      flex: 2.5,
    },
  ],
  dockedItems: [
    {
      dock : 'top',
      layout : 'hbox',
      width: '100%',
      items :[
        {
          xtype: "button",
          text: "Tải file",
          padding: "10px",
          width : 150,
          margin: "0px 0px 10px 10px",
          handler: "onOpenDialog",
        },
        {
          flex: 1
        }
      ]
    }
  ]
});
