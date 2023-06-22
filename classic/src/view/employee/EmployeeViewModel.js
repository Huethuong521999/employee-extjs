Ext.define("Admin.view.employee.EmplooyeeViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.employeeviewmodel",
  requires: ["Admin.model.Employee", "Admin.store.Employee"],

  stores: {
    employeeStore: {
      type: "employeeStore",
    },
    province: {
        type: "province",
    }
  },
  
  data: {
    employeeValue: {
      hoTen: "",
      gioiTinh: "",
      ngaySinh: "",
      soCccd: "",
      email: "",
      soDienThoai: "",
      ngheNghiep: "",
      ctNoiLamViec: "",
      diaChi: "",
      maXa: "",
      maHuyen: "",
      maTinh: "",
    }
  },
});
