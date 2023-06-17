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
    let viewModel = this.getViewModel();
    let categoryUploadStore = viewModel.getStore("categoryUploadStore");
    categoryUploadStore.loadData(data);
  },

  handleAfterrender: function (field) {
    field.fileInputEl.set({
      multiple: true
    });
  },

  handleChangeMultiple: function (field, value) {
    let files = field.fileInputEl.dom.files;
    let fileList = '';

    for (let i = 0; i < files.length; i++) {
      fileList += files[i].name + ', ';
    }

    fileList = fileList.slice(0, -2);
    field.setRawValue(fileList);
  },
  
  handleSaveUploadFile: function (window) {
    let viewModel = this.getViewModel();

    let categoryGrid = Ext.data.StoreManager.lookup("categoryStore");
    let categoryStore = categoryGrid.data.items;
    const listCategory = categoryStore.map((record) => record.getData());

    let categoryUploadStore = viewModel.getStore("categoryUploadStore").data
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

      let files = event.browserEvent.dataTransfer.files;
      console.log(files);

      let fileField = Ext.getCmp("AttachData");
      let existingFiles = fileField.fileInputEl.dom.files;
      let updatedFiles = existingFiles ? Array.from(existingFiles) : [];

      for (let i = 0; i < files.length; i++) {
        if (!this.isFileInList(files[i], updatedFiles)) {
          updatedFiles.push(files[i]);
        }
      }

      let fileNames = updatedFiles.map(function (file) {
        return file.name;
      }).join(", ");

      let newFileList = this.createFileList(updatedFiles);
      fileField.fileInputEl.dom.files = newFileList;

      fileField.inputEl.dom.value = fileNames;

      container.updateLayout();
    }.bind(this));
  },

  isFileInList: function (file, fileList) {
    for (let i = 0; i < fileList.length; i++) {
      if (fileList[i].name === file.name && fileList[i].size === file.size && fileList[i].type === file.type) {
        return true;
      }
    }
    return false;
  },

  createFileList: function (files) {
    let dataTransfer = new DataTransfer();
    for (let i = 0; i < files.length; i++) {
      dataTransfer.items.add(files[i]);
    }
    return dataTransfer.files;
  },

  handleClose: function (window) {
    let view = this.getView();

    window.up("window").close();
    view.getSelectionModel().deselectAll(); //bỏ tích chọn khi đóng dialog
  },
});
