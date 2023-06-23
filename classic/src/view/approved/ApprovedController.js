Ext.define('Admin.view.approved.ApprovedController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.approved',

    init: function () {
        let viewModel = this.getViewModel();
        let approvedEmployeeStore = viewModel.getStore('approvedEmployee');
        approvedEmployeeStore.loadStore();
    },

    handleEdit: function () {},
    handleDelete: function () {}
});
