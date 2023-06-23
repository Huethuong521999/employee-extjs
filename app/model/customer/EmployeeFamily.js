Ext.define('Admin.model.customer.EmployeeFamily', {
    extend: 'Ext.data.Model',

    fields: [
        { name: "id", type: "string" },
        { name: 'name', type: 'string' },
        { name: 'gender', type: 'int' },
        { name: 'phoneNumber', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'dateOfBirth', type: 'number' },
        { name: 'citizenIdentificationNumber', type: 'string' },
        { name: 'relationShip', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'email', type: 'string' }
    ],

    belongsTo: 'Customer'
});
