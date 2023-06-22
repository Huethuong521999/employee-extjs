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
                me.handleClose();
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
                store.load();
                form.reset();
                me.handleClose();
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

  handleClose: function () {
    this.getView().up("window").close();
  },
  validatorName: function (value) {
    return value && (!Utils.regexCheckString(value) ? true : "Chỉ được nhập chữ");
  },
  validatorPhone: function (value) {
    return value && (Utils.regexChecKPhone(value) ? true : "Số điện không đúng định dạng số điện thoại việt nam");
  },
  validatorCCDC: function (value) {
    return value && (Utils.regexChecKCCDC(value) ? true : "Chỉ được nhập số và có độ dài 12 số");
  },
  validatorEmail: function (value) {
    return value && (Utils.regexCheckEmail(value) ? true : "Email phải có định dang 123@gmail.com");
  }
});