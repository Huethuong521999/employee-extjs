Ext.define("Admin.view.category.CategoryCheckDialog", {
  extend: "Ext.panel.Panel",
  xtype: "categorycheckdialog",

  controller: "categoryuploadcontroller",
  viewModel: {
    type: "categoryuploadViewModel",
  },
  requires: [
    "Admin.view.category.CategoryCheckGrid",
    "Admin.view.category.CategoryUploadFileDialog",
  ],
  width: "100%",
  height: "100%",

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
        render: "handleDragDropFiles",
      },
      items: [
        {
          xtype: "list-category-check",
          bind: {
            store: "{categoryUploadStore}",
          },
          flex: 1,
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
          listeners: {
            change: function (e, oldValue, newValue) {
              console.log("e", e);
              console.log("oldValue", oldValue);
              console.log("newValue", newValue);
              filefield.inputEl.dom.value = "";
            },
          },
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
              handler: "handleSaveUploadFile",
            },
            {
              text: "Đóng",
              handler: "handleClose",
            },
          ],
        },
      ],
    },
  ],
});
