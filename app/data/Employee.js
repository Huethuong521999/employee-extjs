Ext.define('Admin.data.Employee', {
    extend: 'Admin.data.Simulated',
    data: [
        {
            id: '1',
            hoTen: 'Phạm Hoàng Trung',
            gioiTinh: 'Nam',
            ngaySinh: '10/10/2000',
            soCccd: '098665769876',
            email: 'trungph@gmail.com',
            soDienThoai: '0987657897',
            diaChi: 'Hải Phòng',
            children: [
                {
                    hoTen: 'Phạm Hoàng A',
                    gioiTinh: 'Nữ',
                    ngaySinh: '10/10/2000',
                    soCccd: '098665769876',
                    email: 'trungph@gmail.com',
                    soDienThoai: '0987657897',
                    diaChi: 'Hải Phòng',
                    children: [
                        {
                            hoTen: 'Phạm Hoàng C',
                            gioiTinh: 'Nam',
                            ngaySinh: '10/10/2000',
                            soCccd: '098665769876',
                            email: 'trungph@gmail.com',
                            soDienThoai: '0987657897',
                            diaChi: 'Hải Phòng',
                            leaf: true
                        }
                    ]
                },
                {
                    hoTen: 'Phạm Hoàng B',
                    gioiTinh: 'Nam',
                    ngaySinh: '10/10/2000',
                    soCccd: '098665769876',
                    email: 'trungph@gmail.com',
                    soDienThoai: '0987657897',
                    diaChi: 'Hải Phòng',
                    leaf: true
                }
            ]
        },
        {
            id: '2',
            hoTen: 'Lê Hoàng Nam',
            gioiTinh: 'Nam',
            ngaySinh: '12/01/1999',
            soCccd: '098665769876',
            email: 'namlh@gmail.com',
            soDienThoai: '0987657897',
            diaChi: 'Quảng Ninh',
            children: [
                {
                    hoTen: 'Lê Hoàng A',
                    gioiTinh: 'Nam',
                    ngaySinh: '12/01/1999',
                    soCccd: '098665769876',
                    email: 'namlh@gmail.com',
                    soDienThoai: '0987657897',
                    diaChi: 'Quảng Ninh',
                    children: [
                        {
                            hoTen: 'Lê Hoàng C',
                            gioiTinh: 'Nam',
                            ngaySinh: '12/01/2003',
                            soCccd: '098665769876',
                            email: 'namlh@gmail.com',
                            soDienThoai: '0987657897',
                            diaChi: 'Quảng Ninh',
                            leaf: true
                        }
                    ]
                },
                {
                    hoTen: 'Lê Hoàng B',
                    gioiTinh: 'Nữ',
                    ngaySinh: '12/01/2001',
                    soCccd: '098665769876',
                    email: 'namlh@gmail.com',
                    soDienThoai: '0987657897',
                    diaChi: 'Quảng Ninh',
                    leaf: true
                }
            ]
        },
        {
            id: '3',
            hoTen: 'Nguyễn Xuân Vượng',
            gioiTinh: 'Nam',
            ngaySinh: '01/09/2000',
            soCccd: '098665769876',
            email: 'vuongnx@gmail.com',
            soDienThoai: '0987657897',
            diaChi: 'Quảng Ninh',
            children: [
                {
                    hoTen: 'Nguyễn Xuân A',
                    gioiTinh: 'Nam',
                    ngaySinh: '01/09/2000',
                    soCccd: '098665769876',
                    email: 'vuongnx@gmail.com',
                    soDienThoai: '0987657897',
                    diaChi: 'Quảng Ninh',
                    leaf: true
                }
            ]
        },
        {
            id: '4',
            hoTen: 'Trần Hồng Đức',
            gioiTinh: 'Nam',
            ngaySinh: '03/15/1998',
            soCccd: '098665769876',
            email: 'ducth@gmail.com',
            soDienThoai: '0987657897',
            diaChi: 'Nam Định',
            children: [
                {
                    hoTen: 'Trần Hồng A',
                    gioiTinh: 'Nam',
                    ngaySinh: '03/15/1998',
                    soCccd: '098665769876',
                    email: 'ducth@gmail.com',
                    soDienThoai: '0987657897',
                    diaChi: 'Nam Định',
                    leaf: true
                }
            ]
        }
    ]
});
