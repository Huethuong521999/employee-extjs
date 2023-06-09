Ext.define('Admin.model.customer.FamilyCustomer', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'familyRelationId', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'gender', type: 'int' },
        { name: 'phone', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'dateOfBirth', type: 'string' },
        { name: 'citizenId', type: 'string' },
        { name: 'relation', type: 'string' },
        { name: 'address', type: 'string' }
    ],

    belongsTo: 'Customer'
});
