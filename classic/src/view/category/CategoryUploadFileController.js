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
    let view = this.getView();
    let viewListCategory = view.up("window").down("categorycheckdialog").down("list-category-check");
    let listcategory = viewListCategory.getViewModel().getStore("categoryUploadStore")
    listcategory.loadData(data);
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

    const categoryUploadStore = viewModel.get('selectedArr');


    let files = Ext.getCmp("AttachData").fileInputEl.dom.files || [];

    if (files.length <= 0) {
      return Ext.Msg.alert("Cảnh báo", "Vui lòng file!");
    }

    let arrFile = [];

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        fileName = files[i].name + " - " + files[i].size + "kB";
        arrFile.push(fileName);
      }
    }

    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      listCategory.forEach((record) => {
        if (categoryUploadStore.some((item) => item.id === record.id)) {
          record.trangThai = 'Đã tải file';
          record.fileName = arrFile.join(", ");
        }
      });

    categoryGrid.loadData(listCategory);

      let formData = new FormData();
      formData.append('file', file);

      Ext.Ajax.request({
        url: 'https://api.escuelajs.co/api/v1/files/upload',
        rawData: formData,
        method: 'POST',
        headers: {
          'Content-Type': null,
        },
        waitMsg: 'Uploading your files...',
        success: function (response) {
          Ext.Msg.alert('Success', 'Upload Successful!');
        },
        failure: function () {
          Ext.Msg.alert('Failure', 'Upload Failed!');
        },
      });
    }

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
