Ext.define('Utils', {
    statics: {
        checkGender: function (value) {
            let data = [
                { value: '0', label: 'Nam' },
                { value: '1', label: 'Nữ' },
                { value: '2', label: 'Khác' }
            ]
            let gender = data.find(item => item.value === value.toString())
            return `<span>${gender.label}</span>`
        },
        regexCheckString: function (value) {
            return (/[~`!@#$%^&*()+=\-[\]\\';,/{}|\\":<>?0-9]/.test(value))
        },
        regexChecKPhone: function (value) {
            return (/(84|0[3|5|7|8|9])+([0-9]{8})/.test(value))
        },
        regexCheckCCDC: function (value) {
            return (/^[0-9]{12}$/.test(value))
        },
        regexCheckEmail: function (value) {
            return (/^[a-zA-Z0-9_.+-]+@gmail\.com$/.test(value))
        },
        formatDate: function (value) {
            let newDate = new Date(value);
            if (value) {
                return Ext.Date.format(newDate, 'd-m-Y');
            }
            return '';
        },
        checkStatus: function (value) {
            let data = [
                { value: '1', label: 'Lưu mới' },
                { value: '2', label: 'Chờ duyệt' },
                { value: '3', label: 'Đã duyệt' },
                { value: '4', label: 'Yêu cầu bổ sung' },
                { value: '5', label: 'Từ chối' },
                { value: '6', label: 'Chờ duyệt KTHS' },
                { value: '7', label: 'Đã duyệt KTHS' },
                { value: '8', label: 'YCBS KTHS' },
                { value: '9', label: 'Từ chối KTHS' },
                { value: '0', label: 'Đã nộp lưu' },
            ]
            let status = data.find(item => item.value === value.toString())
            return `<span>${status.label}</span>`
        },
        formatDateDto: function (value) {
            let newDate = new Date(value);
            if (value) {
                return Ext.Date.format(newDate, 'Y-m-d');
            }
            return '';
        },
        formatDateTime: function (value) {
            let newDate = new Date(value);
            if (value) {
                return newDate.getTime();
            }
            return '';
        }
    }
});