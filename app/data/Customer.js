Ext.define('Admin.data.Customer', {
    extend: 'Admin.data.Simulated',

    data: [
        {
            id: '1',
            name: 'Phạm Hoàng Trung',
            code: 'KH01',
            gender: 'Nam',
            dateOfBirth: '10/10/2000',
            citizenId: '098665769876',
            email: 'trungph@gmail.com',
            phone: '0987657897',
            address: 'Hải Phòng',
            certificates: [
                {
                    id: "1",
                    name: "van bang 1",
                    field: "linh vuc 1",
                    content: "nội dung gì đó ko thích viết cụ thể đấy thì sao",
                    educationalOrg: "dh bk hn",
                    graduatedWith: "xuat sac, gpa 4.0",
                    issuanceDate: "2020-02-02",
                    educationStartDate: "2015-05-07",
                    educationEndDate: "2019-05-07"
                },
                {
                    id: "2",
                    certificateId: 2,
                    name: "van bang 20",
                    field: "linh vuc 2",
                    content: "đây cũng thế",
                    educationalOrg: "dh quoc gia hn",
                    graduatedWith: "xuat sac, gpa 3.8",
                    issuanceDate: "2018-02-02",
                    educationStartDate: "2013-05-07",
                    educationEndDate: "2017-05-07"
                }
            ],
            familyRelations: [
                {
                    id: "1",
                    familyRelationId: 292,
                    name: "aaa",
                    gender: 1,
                    phone: "016598763",
                    email: "amila@gmail.com",
                    dateOfBirth: "1985-02-03",
                    citizenId: "0326590001450",
                    relation: "sister",
                    address: "so 2 nguyen trai"
                },
                {
                    id: "2",
                    name: "amilu",
                    gender: 0,
                    phone: "016598733",
                    email: "amil0@gmail.com",
                    dateOfBirth: "1995-02-03",
                    citizenId: "03265456901450",
                    relation: "brother",
                    address: "so 1 nguyen trai"
                }
            ]
        },
        {
            id: '2',
            name: 'Phạm Hoàng Huy',
            code: 'KH02',
            gender: 'Nam',
            dateOfBirth: '10/10/2000',
            citizenId: '098665769876',
            email: 'trungph@gmail.com',
            phone: '0987657897',
            address: 'Hải Phòng',
            certificates: [
                {
                    id: "1",
                    name: "van bang 1",
                    field: "linh vuc 1",
                    content: "nội dung gì đó ko thích viết cụ thể đấy thì sao",
                    educationalOrg: "dh bk hn",
                    graduatedWith: "xuat sac, gpa 4.0",
                    issuanceDate: "2020-02-02",
                    educationStartDate: "2015-05-07",
                    educationEndDate: "2019-05-07"
                },
                {
                    id: "2",
                    certificateId: 2,
                    name: "van bang 20",
                    field: "linh vuc 2",
                    content: "đây cũng thế",
                    educationalOrg: "dh quoc gia hn",
                    graduatedWith: "xuat sac, gpa 3.8",
                    issuanceDate: "2018-02-02",
                    educationStartDate: "2013-05-07",
                    educationEndDate: "2017-05-07"
                }
            ],
            familyRelations: [
                {
                    id: "1",
                    familyRelationId: 292,
                    name: "aaa",
                    gender: 1,
                    phone: "016598763",
                    email: "amila@gmail.com",
                    dateOfBirth: "1985-02-03",
                    citizenId: "0326590001450",
                    relation: "sister",
                    address: "so 2 nguyen trai"
                },
                {
                    id: "2",
                    name: "amilu",
                    gender: 0,
                    phone: "016598733",
                    email: "amil0@gmail.com",
                    dateOfBirth: "1995-02-03",
                    citizenId: "03265456901450",
                    relation: "brother",
                    address: "so 1 nguyen trai"
                }
            ]
        },
        {
            id: '3',
            name: 'Phạm Hoàng Nhiệm',
            code: 'KH03',
            gender: 'Nam',
            dateOfBirth: '10/10/2000',
            citizenId: '098665769876',
            email: 'trungph@gmail.com',
            phone: '0987657897',
            address: 'Hải Phòng',
            certificates: [
                {
                    id: "1",
                    name: "van bang 1",
                    field: "linh vuc 1",
                    content: "nội dung gì đó ko thích viết cụ thể đấy thì sao",
                    educationalOrg: "dh bk hn",
                    graduatedWith: "xuat sac, gpa 4.0",
                    issuanceDate: "2020-02-02",
                    educationStartDate: "2015-05-07",
                    educationEndDate: "2019-05-07"
                },
                {
                    id: "2",
                    certificateId: 2,
                    name: "van bang 20",
                    field: "linh vuc 2",
                    content: "đây cũng thế",
                    educationalOrg: "dh quoc gia hn",
                    graduatedWith: "xuat sac, gpa 3.8",
                    issuanceDate: "2018-02-02",
                    educationStartDate: "2013-05-07",
                    educationEndDate: "2017-05-07"
                }
            ],
            familyRelations: [
                {
                    id: "1",
                    familyRelationId: 292,
                    name: "aaa",
                    gender: 1,
                    phone: "016598763",
                    email: "amila@gmail.com",
                    dateOfBirth: "1985-02-03",
                    citizenId: "0326590001450",
                    relation: "sister",
                    address: "so 2 nguyen trai"
                },
                {
                    id: "2",
                    name: "amilu",
                    gender: 0,
                    phone: "016598733",
                    email: "amil0@gmail.com",
                    dateOfBirth: "1995-02-03",
                    citizenId: "03265456901450",
                    relation: "brother",
                    address: "so 1 nguyen trai"
                }
            ]
        },
        {
            id: '4',
            name: 'Phạm Hoàng Anh',
            code: 'KH04',
            gender: 'Nam',
            dateOfBirth: '10/10/2000',
            citizenId: '098665769876',
            email: 'trungph@gmail.com',
            phone: '0987657897',
            address: 'Hải Phòng',
            certificates: [
                {
                    id: "1",
                    name: "van bang 1",
                    field: "linh vuc 1",
                    content: "nội dung gì đó ko thích viết cụ thể đấy thì sao",
                    educationalOrg: "dh bk hn",
                    graduatedWith: "xuat sac, gpa 4.0",
                    issuanceDate: "2020-02-02",
                    educationStartDate: "2015-05-07",
                    educationEndDate: "2019-05-07"
                },
                {
                    id: "2",
                    certificateId: 2,
                    name: "van bang 20",
                    field: "linh vuc 2",
                    content: "đây cũng thế",
                    educationalOrg: "dh quoc gia hn",
                    graduatedWith: "xuat sac, gpa 3.8",
                    issuanceDate: "2018-02-02",
                    educationStartDate: "2013-05-07",
                    educationEndDate: "2017-05-07"
                }
            ],
            familyRelations: [
                {
                    id: "1",
                    familyRelationId: 292,
                    name: "aaa",
                    gender: 1,
                    phone: "016598763",
                    email: "amila@gmail.com",
                    dateOfBirth: "1985-02-03",
                    citizenId: "0326590001450",
                    relation: "sister",
                    address: "so 2 nguyen trai"
                },
                {
                    id: "2",
                    name: "amilu",
                    gender: 0,
                    phone: "016598733",
                    email: "amil0@gmail.com",
                    dateOfBirth: "1995-02-03",
                    citizenId: "03265456901450",
                    relation: "brother",
                    address: "so 1 nguyen trai"
                }
            ]
        },
        {
            id: '5',
            name: 'Phạm Hoàng Chiến',
            code: 'KH05',
            gender: 'Nam',
            dateOfBirth: '10/10/2000',
            citizenId: '098665769876',
            email: 'trungph@gmail.com',
            phone: '0987657897',
            address: 'Hải Phòng',
            certificates: [
                {
                    id: "1",
                    name: "van bang 1",
                    field: "linh vuc 1",
                    content: "nội dung gì đó ko thích viết cụ thể đấy thì sao",
                    educationalOrg: "dh bk hn",
                    graduatedWith: "xuat sac, gpa 4.0",
                    issuanceDate: "2020-02-02",
                    educationStartDate: "2015-05-07",
                    educationEndDate: "2019-05-07"
                },
                {
                    id: "2",
                    certificateId: 2,
                    name: "van bang 20",
                    field: "linh vuc 2",
                    content: "đây cũng thế",
                    educationalOrg: "dh quoc gia hn",
                    graduatedWith: "xuat sac, gpa 3.8",
                    issuanceDate: "2018-02-02",
                    educationStartDate: "2013-05-07",
                    educationEndDate: "2017-05-07"
                }
            ],
            familyRelations: [
                {
                    id: "1",
                    familyRelationId: 292,
                    name: "aaa",
                    gender: 1,
                    phone: "016598763",
                    email: "amila@gmail.com",
                    dateOfBirth: "1985-02-03",
                    citizenId: "0326590001450",
                    relation: "sister",
                    address: "so 2 nguyen trai"
                },
                {
                    id: "2",
                    name: "amilu",
                    gender: 0,
                    phone: "016598733",
                    email: "amil0@gmail.com",
                    dateOfBirth: "1995-02-03",
                    citizenId: "03265456901450",
                    relation: "brother",
                    address: "so 1 nguyen trai"
                }
            ]
        }
    ]
});