Ext.define('Admin.model.BigDataGrid', {
    extend: 'Admin.model.Base',

    fields: [
        {
            type: 'string',
            name: 'id'
        },
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'boolean',
            name: 'isVerified'
        },
        {
            type: 'auto',
            name: 'avg'
        },
        {
            type: 'int',
            name: 'star'
        },
        {
            type: 'date',
            name: 'dateOfBirth'
        }
    ]
});
