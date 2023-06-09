Ext.define('Admin.utils.Utils', {
    singleton: true,
    alternateClass: 'util',
    getResponsive: function (desktop, tablet, mobile) {
        mobile = mobile || tablet;
        return {
            'width >= 992': desktop,
            'width >= 768 && width < 992': tablet,
            'width < 768': mobile
        };
    }
});
