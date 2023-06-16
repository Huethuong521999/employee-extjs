Ext.define('Admin.view.user.UserViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user2',

    init: function () {
        let store = Ext.data.StoreManager.lookup('userlarge');
        let params = store.getProxy().extraParams;
        if (params.q === '') {
            store.getProxy().url = 'https://provinces.open-api.vn/api/?depth=1';
            store.load();
        }
    },

    handleChangeInput: function (provinceCombobox) {
        let searchKey = provinceCombobox.value;
        let store = Ext.data.StoreManager.lookup('userlarge');
        if (searchKey) {
            let proxy = store.getProxy();
            store.getProxy().url =
                'https://provinces.open-api.vn/api/d/search/';
            let newParams = Ext.apply(proxy.getExtraParams(), { q: searchKey });
            proxy.setExtraParams(newParams);
            store.load();
        } else {
            store.getProxy().url = 'https://provinces.open-api.vn/api/?depth=1';
            store.load();
        }
    }
});
