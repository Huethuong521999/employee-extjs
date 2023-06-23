Ext.define('Admin.view.pending.PendingController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.pending',

    init: function () {
        let viewModel = this.getViewModel();
        let pendingEmployeeStore = viewModel.getStore('pendingEmployee');
        pendingEmployeeStore.loadStore();
    },

    handleEdit: function () {},
    handleDelete: function () {}
});
