Ext.define('Admin.model.customer.DiplomaCustomer', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'field', type: 'string' },
        { name: 'content', type: 'string' },
        { name: 'educationalOrg', type: 'string' },
        { name: 'graduatedWith', type: 'string' },
        { name: 'issuanceDate', type: 'string' },
        { name: 'educationStartDate', type: 'string' },
        { name: 'educationEndDate', type: 'string' }
    ],

    belongsTo: 'Customer'
});