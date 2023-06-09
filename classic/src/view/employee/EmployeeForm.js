Ext.define("Admin.view.employee.EmployeeForm", {
  extend: "Ext.window.Window",
  layout: {
    type: "vbox",
    align: "stretch",
  },
  controller: "employee",
  layout: "fit",
  width: '90%',
  height: '90%',
  resizable: false,
  modal: true,
  closable: true,
  id: "form-employee",

  items: [
    {
      xtype: "form",
      reference: "userForm",
      bodyPadding: 10,
      defaults: {
        xtype: "textfield",
        anchor: "100%",
        labelWidth: 80,
      },
      
      buttons: [
        {
          text: "Lưu",
          handler: function (sender) {
            let form = this.up("window");
            let controller = form.getController();
            controller.handleSave(form);
          },
        },
        {
          text: "Đóng",
          handler: function () {
            this.up("window").close();
          },
        },
      ],

      items: [
        {
          xtype: 'employeeTabPanel', // Sử dụng TabPanel từ file riêng
        }
      ],

      listeners: {
        afterrender: function () {
          this.center();
        },
        resize: function () {
          this.center();
        }
      }
    },
  ],
});
