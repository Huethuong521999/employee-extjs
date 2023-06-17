Ext.define("Admin.view.category.CategoryUploadController", {
  extend: "Ext.app.ViewController",
  alias: "controller.categoryuploadcontroller",

  init: function () {
    this.listen({
      controller: {
        "*": {
          getData: "loadData",
        },
      },
    });
  },

  loadData: function (data) {
    var viewModel = this.getViewModel();
    var categoryUploadStore = viewModel.getStore("categoryUploadStore");
    categoryUploadStore.loadData(data);
    // console.log("categoryUploadStore", categoryUploadStore);
  },

  handleSaveUploadFile: function (window) {
    var viewModel = this.getViewModel();

    let categoryGrid = Ext.data.StoreManager.lookup("categoryStore");
    let categoryStore = categoryGrid.data.items;
    const listCategory = categoryStore.map((record) => record.getData());

    var categoryUploadStore = viewModel.getStore("categoryUploadStore").data
      .items;
    const listcategoryUpdate = categoryUploadStore.map((record) =>
      record.getData()
    );

    let file = Ext.getCmp("AttachData").fileInputEl.dom.files[0];

    if (!file) {
      return Ext.Msg.alert("Cảnh báo", "Vui lòng file!");
    }

    listCategory.map((record) => {
      if (listcategoryUpdate.some((item) => item.id === record.id)) {
        record.trangThai = "Đã tải file";
        record.fileName = `${file.name + " - " + file.size + "kB"}`;
      }
    });

    categoryGrid.loadData(listCategory);

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

    window.up("window").close();
  },

  handleDragDropFiles: function (container) {
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

  handleClose: function (window) {
    let view = this.getView();

    window.up("window").close();
    view.getSelectionModel().deselectAll(); //bỏ tích chọn khi đóng dialog
  },
});
