Ext.define("Admin.model.Employee", {
  extend: "Admin.model.Base",
  fields: [
    {
      type: "string",
      name: "hoTen",
    },
    {
      type: "string",
      name: "gioiTinh",
    },
    {
      type: "date",
      name: "ngaySinh",
    },
    {
      type: "string",
      name: "soCccd",
    },
    {
      type: "string",
      name: "email",
    },
    {
      type: "string",
      name: "soDienThoai",
    },
    {
      type: "string",
      name: "diaChi",
    },
    {
      type: "string",
      name: "agencyName",
    },
    {
      type: "string",
      name: "workAddress",
    },
    {
      type: "string",
      name: "workingPosition",
    },
    {
      type: "string",
      name: "wage",
    },
  ],
});
