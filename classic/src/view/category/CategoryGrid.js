Ext.define("Admin.view.category.CategoryGrid", {
  extend: "Ext.grid.Panel",

  alias: "widget.categorygrid",

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
  
  id: 'list-category',

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
});
