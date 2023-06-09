Ext.define("Admin.model.customer.Customer", {
  extend: "Admin.model.Base",
  fields: [
    { type: "string", name: "name" },
    { type: "string", name: "code" },
    { type: "string", name: "gender" },
    { type: "date", name: "dateOfBirth" },
    { type: "string", name: "citizenId" },
    { type: "string", name: "email" },
    { type: "string", name: "phone" },
    { type: "string", name: "address" },
  ],
  hasMany: [
    { model: 'DiplomaCustomer', name: 'certificates' },
    { model: 'FamilyCustomer', name: 'familyRelations' }
]
});
