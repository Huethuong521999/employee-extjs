Ext.define('Admin.view.customer.addCustomer.AddCustomerFormViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.addCustomer',

  stores: {
    certificatesDto: {
      type: 'certificates',
    },
    employeeFamilyDtos: {
      type: 'employeeFamily',
    }
  },

  data: {
    itemCertificates: {
      id: "",
      certificateName: "",
      field: "",
      content: "",
      issueDate: "",
    },
    itemFamilyRelations: {
      id: "",
      name: "",
      gender: "",
      phoneNumber: "",
      email: "",
      dateOfBirth: "",
      citizenIdentificationNumber: "",
      relationShip: "",
      address: "",
      email: "",
    },
    info: {
      id: "",
      name: "",
      code: "",
      gender: "",
      dateOfBirth: "",
      citizenIdentificationNumber: "",
      team: "",
      dateOfIssuanceCard: "",
      placeOfIssueCard: "",
      email: "",
      phone: "",
      address: "",
      ethnic: "",
      religion: "",
    }
  },
});