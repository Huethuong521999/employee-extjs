Ext.define("Admin.view.category.CategoryViewModel", {
    extend: "Ext.app.ViewModel",
    alias: 'viewmodel.categoryviewmodel',
    // requires: ['Admin.model.Category'],

    // data: {
    //     categorytitle: 'Category Product'
    // },

    stores: {
        category: {
            type: 'category',
            // model: 'Admin.model.Category',
            sorters: ['timestamp'],
            autoLoad: true
        }
    },
})