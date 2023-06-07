Ext.define('Admin.view.empolyee.EmployeeTabPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'employeeTabPanel',

    width: '100%',

    items: [
        {
            xtype: 'tabpanel',
            items: [
                {
                    xtype: 'tabInfoEmpolyee'
                },
                {
                    xtype: 'tabOrganization'
                }
            ]
        }
    ],
});