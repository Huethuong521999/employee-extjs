Ext.define('Admin.model.User2', {
    extend: 'Admin.model.Base',
    fields: [
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'string',
            name: 'firstName'
        },
        {
            type: 'string',
            name: 'lastName'
        },
        {
            type: 'string',
            name: 'address'
        },
        {
            type: 'string',
            name: 'company'
        },
        {
            type: 'string',
            name: 'title'
        }
    ]
});
