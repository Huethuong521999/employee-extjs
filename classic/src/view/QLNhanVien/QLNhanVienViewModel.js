Ext.define("Admin.view.QLNhanVien.QLNhanVienViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.nhanvienviewmodel",
    requires: ["Admin.model.QuanLyNhanVien", "Admin.store.QuanLyNhanVien"],
  
    stores: {
        nhanVienStore: {
        type: "nhanVienStore",
      },
    },
    
    data: {
      employeeValue: {}
    },
  });
  