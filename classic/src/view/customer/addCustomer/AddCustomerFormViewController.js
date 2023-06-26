Ext.define('Admin.view.customer.addCustomer.AddCustomerFormViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.AddCustomer',

  handleSave: function () {
    let me = this;
    let view = this.getView();
    let viewModel = this.getViewModel();
    let form = view.down("form");
    let formInfo = view.down("tabInfoCustomer");
    let store = Ext.data.StoreManager.lookup('customerStoreId');
    infoEmpolyee = viewModel.get("info");
    storeCertificates = viewModel.getStore("certificatesDto").getRange() || [];
    storeEmployeeFamily = viewModel.getStore("employeeFamilyDtos").getRange() || [];

    let dataCertificates = [];
    let dataEmployeeFamily = [];

    storeEmployeeFamily.forEach(item => {
      let itemFamily = item.data;
      itemFamily.dateOfBirth = Utils.formatDateDto(itemFamily.dateOfBirth)
      dataEmployeeFamily.push(itemFamily);
    });

    storeCertificates.forEach(item => {
      let itemCertificates = item.data;
      itemCertificates.issueDate = Utils.formatDateDto(itemCertificates.issueDate)
      dataCertificates.push(itemCertificates)
    });

    infoEmpolyee.dateOfBirth = Utils.formatDateDto(infoEmpolyee.dateOfBirth);
    infoEmpolyee.dateOfIssuanceCard = Utils.formatDateDto(infoEmpolyee.dateOfIssuanceCard);

    if (formInfo.isValid()) {
      let data = {
        ...infoEmpolyee,
        submitProfileStatus: 1,
        certificatesDto: dataCertificates,
        employeeFamilyDtos: dataEmployeeFamily,
      }

      if (data.id) {
        (function callApiUpdate() {
          Ext.Ajax.request({
            url: `https://em-v2.oceantech.com.vn/em/employee/${data.id}`,
            method: 'PUT',
            headers: {
              'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
            },
            jsonData: data,
            success: function (response) {
              let data = Ext.decode(response.responseText);
              if (data.code === 200) {
                store.load();
                form.reset();
                me.getViewModel().set("isRegister", false);
                return;
              }
              Ext.Msg.alert('Lỗi', data.message);
            },
            failure: function (response) {
              if (response.status === 401) {
                CheckToken.checkToken(response, callApiUpdate);
              } else {
                Ext.Msg.alert('Lỗi', 'Cập nhật thất bại.');
              }
            }
          });
        })();
      } else {
        (function callApiPost() {
          Ext.Ajax.request({
            url: 'https://em-v2.oceantech.com.vn/em/employee',
            method: 'POST',
            headers: {
              'Authorization': 'Bearer' + Ext.util.Cookies.get('token'),
            },
            jsonData: data,
            success: function (response) {
              let data = Ext.decode(response.responseText);
              if (data.code === 200) {
                me.getViewModel().set("isRegister", false)
                store.load();
                form.reset();
                return;
              }
              Ext.Msg.alert('Lỗi', data.message);
            },
            failure: function (response) {
              if (response.status === 401) {
                CheckToken.checkToken(response, callApiPost);
              } else {
                Ext.Msg.alert('Lỗi', 'Thêm mới thất bại.');
              }
            }
          });
        })();
      }
    } else {
      Ext.Msg.alert('Cảnh báo', 'Chưa nhập đủ thông tin.');
    }
  },

  handleChangeTab: function (tabPanel, newTab, oldTab) {
    this.updateButtonStates();
  },

  showNext: function () {
    let view = this.getView();
    const activeTabIndex = view.items.indexOf(view.getActiveTab());
    if (activeTabIndex <= view.items.getCount() - 1) {
      view.setActiveTab(activeTabIndex + 1);
      this.updateButtonStates();
    }
  },

  showPrevious: function () {
    let view = this.getView();
    const activeTabIndex = view.items.indexOf(view.getActiveTab());
    if (activeTabIndex >= 0) {
      view.setActiveTab(activeTabIndex - 1);
      this.updateButtonStates();
    }
  },

  updateButtonStates: function () {
    let view = this.getView();
    let viewModel = this.getViewModel();
    const activeTabIndex = view.items.indexOf(view.getActiveTab());
    const previousButton = view.down('#card-prev');
    const nextButton = view.down('#card-next');
    if (previousButton) {
      viewModel.set("isPrevious", (activeTabIndex === 0));
    }

    if (nextButton) {
      viewModel.set("isNext", (activeTabIndex === view.items.getCount() - 1));
    }
  },

  handleClose: function () {
    this.getView().up("window").close();
  },
});