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
        regexChecKCCDC: function (value) {
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
        }
    }
});