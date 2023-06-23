Ext.define('Admin.model.ApprovedEmployee', {
    extend: 'Admin.model.Base',
    fields: [
        { type: 'string', name: 'id' },
        { type: 'string', name: 'name' },
        { type: 'string', name: 'code' },
        { type: 'string', name: 'gender' },
        { type: 'number', name: 'dateOfBirth' },
        { type: 'string', name: 'citizenIdentificationNumber' },
        { type: 'string', name: 'team' },
        { type: 'number', name: 'dateOfIssuanceCard' },
        { type: 'string', name: 'placeOfIssueCard' },
        { type: 'string', name: 'email' },
        { type: 'string', name: 'phone' },
        { type: 'string', name: 'address' },
        { type: 'string', name: 'ethnic' },
        { type: 'string', name: 'religion' }
    ],
    hasMany: [
        { model: 'ApprovedEmployeeCertificate', name: 'certificatesDto' },
        { model: 'ApprovedEmployeeFamily', name: 'employeeFamilyDtos' }
    ]
});

Ext.define('ApprovedEmployeeCertificate', {
    extend: 'Ext.data.Model',

    fields: [
        { type: 'string', name: 'id' },
        { name: 'certificateName', type: 'string' },
        { name: 'field', type: 'string' },
        { name: 'content', type: 'string' },
        { name: 'issueDate', type: 'date' }
    ],

    belongsTo: 'ApprovedEmployee'
});

Ext.define('ApprovedEmployeeFamily', {
    extend: 'Ext.data.Model',

    fields: [
        { type: 'string', name: 'id' },
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

    belongsTo: 'ApprovedEmployee'
});
