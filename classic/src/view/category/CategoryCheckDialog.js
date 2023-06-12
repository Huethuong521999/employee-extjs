Ext.define("Admin.view.category.CategoryCheckDialog", {
  extend: "Ext.window.Window",
  xtype: "categorycheckdialog",

  title: "Kiểm tra danh mục",

  requires: ["Admin.view.category.CategoryCheckGrid"],

  layout: "fit",
  width: "60%",
  height: "60%",
  resizable: false,
  modal: true,
  closable: true,

  items: [
    {
      xtype: "form",
      bodyPadding: 10,
      layout: {
        type: "vbox",
        align: "stretch",
        pack: "center", // Center-align items vertically
      },
      defaults: {
        xtype: "grid",
        anchor: "100%",
      },
      items: [
        {
          xtype: "categorycheckgrid",
          flex: 1,
          bind: {
            store: "{categorycheck}",
          },
        },
        {
          xtype: "filefield",
          id: "AttachData",
          name: "fileAttach",
          emptyText: "Upload the document...",
          margin: "15 0 15 0",
          buttonText: "Upload",
          msgTarget: "side",
          allowBlank: false,
          anchor: "100%",
        },
        {
          xtype: "container",
          layout: {
            type: "hbox",
            pack: "center",
          },

          defaults: {
            xtype: "button",
            margin: "0 10 0 0",
          },
          items: [
            {
              text: "Kiểm tra",
              handler: function (sender) {
                let selectedRecords = Ext.getCmp("list-category")
                  .getStore()
                  .getRange();
                let arr = selectedRecords.map((record) => record.getData());
                let grid = Ext.getCmp("list-category-check").getStore().config
                  .data;
                let file = this.up("form")
                  .down("filefield")
                  .el.down("input[type=file]").dom.files[0];

                arr.map((record) => {
                  if (grid.some((item) => item.id === record.id)) {
                    record.trangThai = "Đã kiểm tra";
                    record.fileName = file.name;
                  }
                });

                let listRecords = Ext.getCmp("list-category");
                listRecords.setStore(arr);
                listRecords.getView().refresh();
                listRecords.getSelectionModel().deselectAll();

                this.up("window").close();
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
      ],
    },
  ],
});
