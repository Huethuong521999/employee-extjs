Ext.define('Admin.model.User', {
    extend: 'Admin.model.Base',
    fields: [
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'string',
            name: 'username'
        },
        {
            type: 'string',
            name: 'email'
        },
        {
            type: 'string',
            name: 'phone'
        },
        {
            type: 'string',
            name: 'website'
        }
    ]
});

Ext.define('Address', {
    extend: 'Admin.model.Base',
    fields: [
        {
            type: 'string',
            name: 'street'
        },
        {
            type: 'string',
            name: 'suite'
        },
        {
            type: 'string',
            name: 'city'
        },
        {
            type: 'string',
            name: 'zipcode'
        }
    ],
    hasOne: {
        model: 'Geo',
        name: 'geo',
        associationKey: 'geo'
    },
    associations: [{ type: 'belongsTo', model: 'User' }]
});

Ext.define('Geo', {
    extend: 'Admin.model.Base',
    fields: [
        {
            type: 'string',
            name: 'lat'
        },
        {
            type: 'string',
            name: 'lng'
        }
    ],
    associations: [{ type: 'belongsTo', model: 'Address' }]
});

Ext.define('Company', {
    extend: 'Admin.model.Base',
    fields: [
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'string',
            name: 'catchPhrase'
        },
        {
            type: 'string',
            name: 'bs'
        }
    ],
    associations: [{ type: 'belongsTo', model: 'User' }]
});
