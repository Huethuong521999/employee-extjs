Ext.define("Admin.view.empolyee.TabInfoEmpolyee", {
  extend: "Ext.form.Panel",
  xtype: "tabInfoEmpolyee",

  layout: "form",
  items: [
    {
      xtype: "fieldcontainer",
    //   layout: "column",
        defaultType: "textfield",
      items: [
        {
          xtype: "container",
          layout: {
            type: "hbox",
          },
          defaults: {
            xtype: "textfield",
          },
          items: [
            // {
            //   xtype: "hiddenfield",
            //   name: "id",
            // },
            {
              fieldLabel: "Họ và tên",
              allowBlank: false,
              name: "hoTen",
              labelAlign: "top",
              flex: 3,
              width: "250px",
            },
            { xtype: "tbspacer", width: 12 },
            {
              fieldLabel: "Giới tính",
              allowBlank: false,
              name: "gioiTinh",
              labelAlign: "top",
              flex: 1.2,
              width: "200px",
            },
            { xtype: "tbspacer", width: 12 },
            {
              xtype: "datefield",
              fieldLabel: "Ngày sinh",
              allowBlank: false,
              name: "ngaySinh",
              labelAlign: "top",
              flex: 2,
              width: "250px",
            },
            { xtype: "tbspacer", width: 12 },
            {
              fieldLabel: "Số CCCD",
              allowBlank: false,
              name: "soCccd",
              labelAlign: "top",
              flex: 2,
              width: "250px",
            },
          ],
        },
        {
          xtype: "container",
          layout: {
            type: "hbox",
            align: "stretch"
          },
          defaults: {
            xtype: "textfield",
          },
          items: [
            {
              fieldLabel: "Email",
              allowBlank: false,
              vtype: "email",
              name: "email",
              labelAlign: "top",
              width: "250px",
              height: "63px",
            },
            { xtype: "tbspacer", width: 12 },
            {
              fieldLabel: "Số điện thoại",
              allowBlank: false,
              name: "soDienThoai",
              labelAlign: "top",
              width: "200px",
            },
            { xtype: "tbspacer", width: 12 },
            {
              fieldLabel: "Nghề nghiệp",
              allowBlank: false,
              name: "ngheNghiep",
              labelAlign: "top",
              width: "250px",
            },
            { xtype: "tbspacer", width: 12 },
            {
              fieldLabel: "Nơi làm việc",
              allowBlank: false,
              name: "ctNoiLamViec",
              labelAlign: "top",
              width: "250px",
            },
          ],
        },
        {
          xtype: "container",
          layout: {
            type: "hbox",
          },
          defaults: {
            xtype: "combobox",
          },
          items: [
            {
              xtype: "textfield",
              fieldLabel: "Địa chỉ",
              allowBlank: false,
              name: "diaChi",
              labelAlign: "top",
              width: "200px",
            },
            { xtype: "tbspacer", width: 12 },
            {
              fieldLabel: "Xã/Phường/Thị trấn",
              allowBlank: true,
              name: "maXa",
              id: "comboboxXa",
              labelAlign: "top",
              width: "250px",
              displayField: "name",
              valueField: "code",
              queryMode: "local",
            },
            { xtype: "tbspacer", width: 12 },
            {
              fieldLabel: "Quận/Huyện",
              allowBlank: true,
              name: "maHuyen",
              id: "comboboxHuyen",
              labelAlign: "top",
              width: "250px",
              displayField: "name",
              valueField: "code",
              queryMode: "local",
              listeners: {
                change: function (field) {
                  const selection = field.getSelection();
                  const value = selection.data.id;
                  const listWards = [];
                  const form = this.up('form');
                  const cbbIdXa = form.down("combobox[name=maXa]");

                  if (selection) {
                    Ext.Ajax.request({
                      url: `http://training-api.oceantech.com.vn/cms/api/districts/${value}/wards`,
                      method: "GET",
                      success: function (response) {
                        var res = Ext.decode(response.responseText);
                        if (res !== null) {
                          Ext.each(res.data, function (obj) {
                            listWards.push(obj);
                          });
                          cbbIdXa.setStore(listWards);
                        }
                      },
                      failure: function (response) {},
                    });
                  }
                  cbbIdXa.clearValue(); //clear xã khi select lại huyện
                },
              },
            },
            { xtype: "tbspacer", width: 12 },
            {
              xtype: 'combobox',
              fieldLabel: "Tỉnh/Thành phố",
              allowBlank: true,
              name: "maTinh",
              labelAlign: "top",
              width: "250px",
              displayField: "name",
              valueField: "code",
              queryMode: "local",
              store: {
                type: "province",
              },
              listeners: {
                change: function (field) {
                  const value = field.getSelection().data.id;
                  const listDistricts = [];
                  const form = this.up('form');
                  let cbbIdHuyen = form.down("combobox[name=maHuyen]");
                  let cbbIdXa = form.down("combobox[name=maXa]"); 

                  Ext.Ajax.request({
                    url: `http://training-api.oceantech.com.vn/cms/api/provinces/${value}/districts`,
                    method: "GET",
                    success: function (response) {
                      var res = Ext.decode(response.responseText);
                      if (res !== null) {
                        Ext.each(res.data, function (obj) {
                          listDistricts.push(obj);
                        });
                        cbbIdHuyen.setStore(listDistricts);
                        cbbIdHuyen.clearValue(); //clear huyện khi select lại tỉnh
                        cbbIdXa.clearValue();//clear xã khi select lại tỉnh
                      }
                    },
                    failure: function (response) {},
                  });
                },
              },
            },
          ],
        },
      ],
    },
  ],
});
