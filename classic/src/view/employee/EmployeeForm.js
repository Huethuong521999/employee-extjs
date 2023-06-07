Ext.define("Admin.view.employee.EmployeeForm", {
  extend: "Ext.window.Window",
  layout: {
    type: "vbox",
    align: "stretch",
  },
  controller: "employee",
  layout: "fit",
  width: 400,
  height: 350,
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
          xtype: "hiddenfield",
          name: "id",
        },
        {
          fieldLabel: "Họ và tên",
          allowBlank: false,
          name: "hoTen",

          //   bind: {
          //     value: "{currentUser.name.first}",
          //   },
        },
        {
          fieldLabel: "Giới tính",
          allowBlank: false,
          name: "gioiTinh",

          //   bind: {
          //     value: "{currentUser.name.last}",
          //   },
        },
        {
          //   xtype: "datefield",
          fieldLabel: "Ngày sinh",
          allowBlank: false,
          name: "ngaySinh",

          //   bind: {
          //     value: "{currentUser.age}",
          //   },
        },
        {
          fieldLabel: "Số CCCD",
          allowBlank: false,
          name: "soCccd",

          //   bind: {
          //     value: "{currentUser.name.first}",
          //   },
        },
        {
          fieldLabel: "Email",
          allowBlank: false,
          //   vtype: "email",
          name: "email",

          //   bind: {
          //     value: "{currentUser.email}",
          //   },
        },
        {
          fieldLabel: "Số điện thoại",
          allowBlank: false,
          name: "soDienThoai",

          //   bind: {
          //     value: "{currentUser.name.first}",
          //   },
        },
        {
          fieldLabel: "Địa chỉ",
          allowBlank: false,
          name: "diaChi",

          //   bind: {
          //     value: "{currentUser.name.first}",
          //   },
        },
      ],
    },
  ],
});
