Ext.define("Admin.view.QLNhanVien.QLNhanVienController", {
    extend: "Ext.app.ViewController",
  
    alias: "controller.nhanviencontroller",
  
    init: function () {
      // hàm khởi tạo
      let viewModel = this.getViewModel();
      let employeeStore = viewModel.getStore("nhanVienStore");

      employeeStore.loadStore(); //hàm load store
    },
  });
  