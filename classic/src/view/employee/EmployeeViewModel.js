Ext.define("Admin.view.employee.EmplooyeeViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.employeeviewmodel",
    requires: ["Admin.model.Employee", "Admin.store.Employee"],
  
    stores: {
        employee: {
        type: "employee",
      },
    },
    data: {},
  });
  