Ext.define("Admin.model.customer.Customer", {
  extend: "Admin.model.Base",
  fields: [
    { type: "string", name: "id" },
    { type: "string", name: "name" },
    { type: "string", name: "code" },
    { type: "string", name: "gender" },
    { type: "date", name: "dateOfBirth" },
    { type: "string", name: "citizenIdentificationNumber" },
    { type: "string", name: "team" },
    { type: "date", name: "dateOfIssuanceCard" },
    { type: "string", name: "placeOfIssueCard" },
    { type: "string", name: "email" },
    { type: "string", name: "phone" },
    { type: "string", name: "address" },
    { type: "string", name: "ethnic" },
    { type: "string", name: "religion" },
  ],
  hasMany: [
    { model: 'DiplomaCustomer', name: 'certificatesDto' },
    { model: 'FamilyCustomer', name: 'employeeFamilyDtos' }
  ]
});
