Ext.define("Admin.view.KTNhanVien.KTNhanVienController", {
    extend: "Ext.app.ViewController",
  
    alias: "controller.ktnhanviencontroller",
  
    init: function () {
      // hàm khởi tạo
      let viewModel = this.getViewModel();
      let employeeStore = viewModel.getStore("ktnhanVienStore");

      employeeStore.loadStore(); //hàm load store
    },
  });
  