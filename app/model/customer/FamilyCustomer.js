Ext.define('Admin.model.customer.FamilyCustomer', {
    extend: 'Ext.data.Model',

    fields: [
        { type: "string", name: "id" },
        { name: 'name', type: 'string' },
        { name: 'gender', type: 'int' },
        { name: 'phoneNumber', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'dateOfBirth', type: 'date' },
        { name: 'citizenIdentificationNumber', type: 'string' },
        { name: 'relationShip', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'email', type: 'string' }
    ],

    belongsTo: 'Customer'
});
