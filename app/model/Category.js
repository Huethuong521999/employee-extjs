Ext.define("Admin.model.Category", {
    extend: "Admin.model.Base",
    fields: [
      {
        type: "string",
        name: "tenDanhMuc",
      },
      {
        type: "number",
        name: "soLuong",
      },
      {
        type: "number",
        name: "soSanPham",
      },
      {
        type: "date",
        name: "ngayGiao",
      },
    ],
  });
  