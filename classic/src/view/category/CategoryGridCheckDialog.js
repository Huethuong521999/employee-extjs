Ext.define("Admin.view.category.CategoryCheckGrid", {
  extend: "Ext.grid.Panel",
  xtype: "list-category-check",
  alias: "widget.categorycheckgrid",

  requires: ["Admin.view.category.categoryuploadViewModel"],

  viewModel: {
    type: "categoryuploadViewModel",
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
      flex: 2.5,
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
      flex: 1.5,
      renderer: Ext.util.Format.dateRenderer("d/m/Y"),
    },
  ],
});
