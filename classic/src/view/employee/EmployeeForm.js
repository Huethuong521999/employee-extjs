Ext.define("Admin.view.employee.EmployeeForm", {
  extend: "Ext.form.Panel",
  xtype  : 'EmployeeFormView',
  controller: "employeeformcontroller",
  viewModel: {
    type: "employeeviewmodel"
  },
  layout: 'vbox',
  width : "100%",
  height : "100%",
  scrollable: true,
  items :[
    //dong1
    {
      layout : "hbox",
      width : "100%",
      items : [
        {
          xtype: "textfield",
          fieldLabel: "Họ và tên",
          allowBlank: false,
          name: "hoTen",
          labelAlign: "top",
          flex: 3,
          bind: {
            value: "{employeeValue.hoTen}"
          }
        },
        { xtype: "tbspacer", width: 12 },
        {
          xtype: "textfield",
          fieldLabel: "Giới tính",
          allowBlank: false,
          name: "gioiTinh",
          labelAlign: "top",
          flex: 1.2,
          bind: {
            value: "{employeeValue.gioiTinh}"
          }
        },
        { xtype: "tbspacer", width: 12 },
        {
          xtype: "datefield",
          fieldLabel: "Ngày sinh",
          allowBlank: false,
          name: "ngaySinh",
          labelAlign: "top",
          flex: 2,
          bind: {
            value: "{employeeValue.ngaySinh}"
          },
          listeners: {
            change: function (field, newValue, oldValue) {
              console.log('Ngày sinh đã thay đổi11111:', newValue);
              // Thực hiện xử lý phù hợp với giá trị mới
            }
          },
        },
        { xtype: "tbspacer", width: 12 },
        {
          xtype: "textfield",
          fieldLabel: "Số CCCD",
          allowBlank: false,
          name: "soCccd",
          labelAlign: "top",
          flex: 2,
          bind: {
            value: "{employeeValue.soCccd}"
          }
        },
      ]
    },
    //dòng 2
    {
      layout : 'hbox',
      width : '100%',
      items : [
        {
          fieldLabel: "Email",
          allowBlank: false,
          vtype: "email",
          name: "email",
          labelAlign: "top",
          flex: 3,
          xtype: "textfield",
          bind: {
            value: "{employeeValue.email}"
          }
        },
        { xtype: "tbspacer", width: 12 },
        {
          xtype: "textfield",
          fieldLabel: "Số điện thoại",
          allowBlank: false,
          name: "soDienThoai",
          labelAlign: "top",
          flex: 2,
          bind: {
            value: "{employeeValue.ngheNghiep}"
          }
        },
        { xtype: "tbspacer", width: 12 },
        {
          xtype: "textfield",
          fieldLabel: "Nghề nghiệp",
          allowBlank: false,
          name: "ngheNghiep",
          labelAlign: "top",
          flex: 2,
          bind: {
            value: "{employeeValue.ngheNghiep}"
          }
        },
        { xtype: "tbspacer", width: 12 },
        {
          xtype: "textfield",
          fieldLabel: "Nơi làm việc",
          allowBlank: false,
          name: "ctNoiLamViec",
          labelAlign: "top",
          flex: 2,
          bind: {
            value: "{employeeValue.ctNoiLamViec}"
          }
        },
      ]
    },
    //dòng 3
    {
      layout : 'hbox',
      width : '100%',
      items : [
        {
          xtype: "textfield",
          fieldLabel: "Địa chỉ",
          allowBlank: false,
          name: "diaChi",
          labelAlign: "top",
          flex: 2,
          bind: {
            value: "{employeeValue.diaChi}"
          }
        },
        { xtype: "tbspacer", width: 12 },
        {
          fieldLabel: "Xã/Phường/Thị trấn",
          allowBlank: true,
          name: "maXa",
          labelAlign: "top",
          flex: 2,
          xtype : "combobox",
          displayField: "name",
          valueField: "code",
          queryMode: "local",
          bind: {
            value: "{employeeValue.maXa}"
          }
        },
        { xtype: "tbspacer", width: 12 },
        {
          fieldLabel: "Quận/Huyện",
          allowBlank: true,
          name: "maHuyen",
          labelAlign: "top",
          flex: 2,
          xtype : "combobox",
          displayField: "name",
          valueField: "code",
          queryMode: "local",
          listeners: {
            change: "handleSelectDistrict"
          },
        },
        { xtype: "tbspacer", width: 12 },
        {
          xtype: 'combobox',
          fieldLabel: "Tỉnh/Thành phố",
          allowBlank: true,
          name: "maTinh",
          labelAlign: "top",
          flex: 2,
          displayField: "name",
          valueField: "code",
          queryMode: "local",
          store: {
            type: "province",
          },
          listeners: {
            change: "handleSelectProvince"
          },
        },
      ]
    }
  ],
  dockedItems :[
    {
      dock : 'bottom',
      layout:"hbox",
      layout: {
        type: "hbox",
        pack: "center",
      },
      defaults: {
        xtype: "button",
        margin: '0 10 0 0'
      },
      items : [
        {
          text: "Lưu",
          handler: "handleSave",
        },
        {
          text: "Trình lãnh đạo",
          handler: 'onTrinhLanhDao'
        },
        {
          text: "Đóng",
          handler: "OnClose"
        },
      ]
    }
  ]
});
