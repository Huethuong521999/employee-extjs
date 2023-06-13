Ext.define('Admin.model.customer.DiplomaCustomer', {
    extend: 'Ext.data.Model',

    fields: [
        { type: "string", name: "id" },
        { name: 'certificateName', type: 'string' },
        { name: 'field', type: 'string' },
        { name: 'content', type: 'string' },
        { name: 'issueDate', type: 'date' },
    ],

    belongsTo: 'Customer'
});