Ext.define("Admin.view.KTNhanVien.KTNhanVienViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.ktnhanvienviewmodel",
    requires: ["Admin.model.KetThucNhanVien", "Admin.store.KetThucNhanVien"],
  
    stores: {
        ktnhanVienStore: {
        type: "ktnhanVienStore",
      },
    },
    
    data: {
      employeeValue: {}
    },
  });
  