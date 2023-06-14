Ext.define("Admin.view.category.CategoryCheckDialog", {
  extend: "Ext.window.Window",
  xtype: "categorycheckdialog",

  title: "Tải file đính kèm",

  requires: ["Admin.view.category.CategoryCheckGrid"],

  layout: "fit",
  width: "60%",
  height: "60%",
  resizable: false,
  modal: true,
  closable: true,

  items: [
    {
      xtype: "container",
      padding: 10,
      layout: {
        type: "vbox",
        align: "stretch",
      },
      defaults: {
        xtype: "grid",
        anchor: "100%",
      },
      listeners: {
        render: function (container) {
          container.getEl().on("dragover", function (event) {
            event.stopEvent();
          });

          container.getEl().on("drop", function (event) {
            event.stopEvent();

            var files = event.browserEvent.dataTransfer.files;

            if (files.length > 0) {
              var filefield = Ext.getCmp("AttachData");
              filefield.fileInputEl.dom.files = files;
              filefield.inputEl.dom.value = files[0].name;

              container.updateLayout();
            }
          });
        },
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
          name: "filename",
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
              text: "Tải file",
              handler: function (sender) {
                let selectedRecords = Ext.getCmp("list-category")
                  .getStore()
                  .getRange();
                let arr = selectedRecords.map((record) => record.getData());
                let grid = Ext.getCmp("list-category-check").getStore().config
                  .data;
                let file = Ext.getCmp("AttachData").fileInputEl.dom.files[0];

                arr.map((record) => {
                  if (grid.some((item) => item.id === record.id)) {
                    record.trangThai = "Đã tải file";
                    record.fileName = `${file.name + " - " + file.size + "kB"}`;
                  }
                });

                let listRecords = Ext.getCmp("list-category");
                listRecords.setStore(arr);
                listRecords.getView().refresh(); //refresh lại danh sách ở grid
                listRecords.getSelectionModel().deselectAll(); //bỏ tích chọn khi đóng dialog

                // upload file lên api
                formData = new FormData();
                formData.append("file", file);

                Ext.Ajax.request({
                  url: "https://api.escuelajs.co/api/v1/files/upload",
                  rawData: formData,
                  method: "POST",
                  headers: {
                    "Content-Type": null,
                  },
                  waitMsg: "Uploading your file...",
                  success: function (response) {
                    Ext.Msg.alert("Success", "Upload Successfull!");
                  },
                  failure: function () {
                    Ext.Msg.alert("Failure", "Upload Failed!");
                  },
                });

                this.up("window").close();
              },
            },
            {
              text: "Đóng",
              handler: function () {
                this.up("window").close();
                let listRecords = Ext.getCmp("list-category");
                listRecords.getSelectionModel().deselectAll(); //bỏ tích chọn khi đóng dialog
              },
            },
          ],
        },
      ],
    },
  ],
});
