Ext.define("Admin.view.employee.Employee", {
  extend: "Ext.container.Container",
  padding: "10px",
  xtype: "employee",
  
  controller: 'employee',

  requires: [
    "Admin.view.employee.ListEmployee", 
    "Admin.view.employee.EmployeeController"
  ],

  // layout: {
  //   type: "hbox",
  // },

  items: [
    {
      xtype: "button",
      text: "Thêm mới",
      padding: "10px",
      margin: "0px 0px 10px 10px",
      handler: 'onOpenEmloyeeForm'
    },
    {
      xtype: "list-employee",
      flex: 1
    },
  ],
});
