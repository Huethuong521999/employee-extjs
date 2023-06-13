Ext.define('Admin.data.BigDataGrid', {
    extend: 'Admin.data.Simulated',

    data: [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            isVerified: true,
            avg: [12, 4, 1, 15],
            all: 'avfreg',
            dateOfBirth: '07/05/2023'
        },
        {
            id: 2,
            name: 'Nguyễn Văn B',
            isVerified: false,
            avg: 12,
            all: 'avfreg',
            dateOfBirth: '07/05/2023'
        },
        {
            id: 3,
            name: 'Nguyễn Văn C',
            isVerified: true,
            avg: 12,
            all: 'avfreg',
            dateOfBirth: '07/05/2023'
        }
    ]
});
