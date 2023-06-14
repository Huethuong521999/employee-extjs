Ext.define("Admin.view.employee.EmployeeForm", {
  extend: "Ext.window.Window",

  controller: "employee",
  layout: "fit",
  width: "60%",
  height: "60%",
  resizable: false,
  modal: true,
  closable: true,
  id: "form-employee",

  items: [
    {
      xtype: "form",
      defaults: {
        xtype: "textfield",
        anchor: "100%",
      },
      layout: {
        type: "vbox",
        align: "stretch",
      },

      buttons: {
        xtype: "container",
        layout: {
          type: "hbox",
          pack: "center",
        },
        defaults: {
          xtype: "button",
          margin: '0 10 10 0'
        },
        items: [
          {
            text: "Lưu",
            handler: function (sender) {
              let form = this.up("window");
              let controller = form.getController();
              controller.handleSave(form);
            },
          },
          {
            text: "Trình lãnh đạo",
            handler: function (sender) {
              let form = this.up("window").down("form");
              let value = form.getValues();
              if (form.isValid()) {
              } else {
                Ext.Msg.alert("Cảnh báo", "Chưa nhập đủ thông tin.");
              }
            },
          },
          {
            text: "Đóng",
            handler: function () {
              this.up("window").close();
            },
          },
        ],
      },

      items: [
        {
          xtype: 'tabInfoEmpolyee', // Sử dụng TabPanel từ file riêng
        }
      ],

      listeners: {
        afterrender: function () {
          this.center();
        },
        resize: function () {
          this.center();
        },
      },
    },
  ],
});
