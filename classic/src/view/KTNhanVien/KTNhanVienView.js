Ext.define("Admin.view.KTNhanVien.KTNhanVienView", {
    extend: "Ext.grid.Panel",
    padding: "10px",
    xtype: "ktnhanvien",
  
    controller: "ktnhanviencontroller",
    viewModel: {
      type: "ktnhanvienviewmodel",
    },
        
    bind: {
      store: "{ktnhanVienStore}",
    },
  
    headerBorders: true,
    rowLines: true,
    scrollable: true,
    reserveScrollbar: true,
  
    columns: [
      {
        xtype: "actioncolumn",
        text: "Thao tác",
        width: 80,
        align: "center",
        items: [
          {
            iconCls: "x-fa fa-upload",
            tooltip: "Nộp lưu",
            // handler: "handleEdit",
          },
        ],
      },
      {
        xtype: "rownumberer",
        dataIndex: "stt",
        text: "STT",
        width: 50,
        align: "center",
      },
      {
        dataIndex: "code",
        text: "Mã nhân viên",
        flex: 1.3,
        editor: "textfield",
        filter: "string",
      },
      {
        dataIndex: "name",
        text: "Tên nhân viên",
        flex: 2.3,
        editor: "textfield",
        filter: "string",
      },
      {
        dataIndex: "gender",
        text: "Giới tính",
        flex: 1,
        renderer: function (value) {
          return Utils.checkGender(value)
        }
      },
      {
        dataIndex: "dateOfBirth",
        text: "Ngày sinh",
        flex: 1.2,
        renderer: function (value) {
          return Utils.formatDate(value)
        },
      },
      {
        dataIndex: "citizenIdentificationNumber",
        text: "Số CCCD/CMND",
        flex: 1.5,
      },
      {
        dataIndex: "address",
        text: "Địa chỉ",
        flex: 2.3,
      },
      {
        text: "Trạng thái",
        flex: 2,
        dataIndex: "submitProfileStatus",
        renderer: function (value) {
          return Utils.checkStatus(value)
        },
      },
    ],

    bbar: [{
      xtype: 'pagingtoolbar',
      displayInfo: true,
      bind: {
        store: "{ktnhanVienStore}",
      },
    }],
  });
  