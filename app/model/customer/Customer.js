Ext.define("Admin.model.customer.Customer", {
  extend: "Admin.model.Base",
  fields: [
    { type: "string", name: "id" },
    { type: "string", name: "name" },
    { type: "string", name: "code" },
    { type: "string", name: "gender" },
    { type: "number", name: "dateOfBirth" },
    { type: "string", name: "citizenIdentificationNumber" },
    { type: "string", name: "team" },
    { type: "number", name: "dateOfIssuanceCard" },
    { type: "string", name: "placeOfIssueCard" },
    { type: "string", name: "email" },
    { type: "string", name: "phone" },
    { type: "string", name: "address" },
    { type: "string", name: "ethnic" },
    { type: "string", name: "religion" },
    { type: "number", name: "submitProfileStatus" },
  ],
  hasMany: [
    { model: 'Certificates', name: 'certificatesDto' },
    { model: 'EmployeeFamily', name: 'employeeFamilyDtos' }
  ]
});
