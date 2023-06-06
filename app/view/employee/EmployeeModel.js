Ext.define('Admin.view.employee.EmployeeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.employee',

    stores: {
        employee: {
            type: 'employee'
        }
    }
});