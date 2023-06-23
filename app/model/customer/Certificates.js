Ext.define('Admin.model.customer.Certificates', {
    extend: 'Ext.data.Model',

    fields: [
        { type: "string", name: "id" },
        { name: 'certificateName', type: 'string' },
        { name: 'field', type: 'string' },
        { name: 'content', type: 'string' },
        { name: 'issueDate', type: 'number' },
    ],

    belongsTo: 'Customer'
});