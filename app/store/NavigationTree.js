Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [
        {
            name: 'text'
        }
    ],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard Responsive',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'User-Responsive-Form',
                iconCls: 'x-fa fa-user',
                viewType: 'user',
                leaf: true
            },
            {
                text: 'User-Handle-50k-Records',
                iconCls: 'x-fa fa-user',
                viewType: 'user2',
                leaf: true
            },
            {
                text: 'Employee-Tree',
                iconCls: 'x-fa fa-user',
                viewType: 'employee',
                leaf: true
            },
            {
                text: 'Category-Upload',
                iconCls: 'x-fa fa-list',
                viewType: 'categoryEx',
                routeId: 'category',
                leaf: true
            },
            {
                text: 'Nhân viên CRUD',
                iconCls: 'x-fa fa-user',
                viewType: 'customer',
                leaf: true
            },
            {
                text: 'Big Data Grid',
                iconCls: 'x-fa fa-paper-plane',
                viewType: 'bigdatagridview',
                leaf: true
            },
            {
                text: 'Quản lý nhân viên',
                iconCls: 'x-fab fa-leanpub',
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: 'Lãnh đạo',
                        iconCls: 'x-fab fa-leanpub',
                        expanded: false,
                        selectable: false,
                        children: [
                            {
                                text: 'Chờ duyệt',
                                iconCls: 'x-fab fa-leanpub',
                                expanded: false,
                                selectable: false,
                                leaf: true
                            },
                            {
                                text: 'Đã duyệt',
                                iconCls: 'x-fab fa-leanpub',
                                expanded: false,
                                selectable: false,
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Quản lý',
                        iconCls: 'x-fab fa-leanpub',
                        expanded: false,
                        selectable: false,
                        children: [
                            {
                                text: 'Tạo mới NV',
                                iconCls: 'x-fab fa-leanpub',
                                expanded: false,
                                selectable: false,
                                leaf: true
                            },
                            {
                                text: 'Quản lý NV',
                                iconCls: 'x-fab fa-leanpub',
                                expanded: false,
                                selectable: false,
                                leaf: true
                            },
                            {
                                text: 'Kết thúc NV',
                                iconCls: 'x-fab fa-leanpub',
                                expanded: false,
                                selectable: false,
                                leaf: true
                            },
                        ]
                    }
                ]
            },
            {
                text: 'Email',
                iconCls: 'x-fa fa-paper-plane',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'email',
                leaf: true
            },
            {
                text: 'Profile',
                iconCls: 'x-fa fa-user',
                viewType: 'profile',
                leaf: true
            },
            {
                text: 'Search results',
                iconCls: 'x-fa fa-search',
                viewType: 'searchresults',
                leaf: true
            },
            {
                text: 'FAQ',
                iconCls: 'x-fa fa-question',
                viewType: 'faq',
                leaf: true
            },
            {
                text: 'Pages',
                iconCls: 'x-fab fa-leanpub',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [
                    {
                        text: 'Blank Page',
                        iconCls: 'x-fa fa-file',
                        viewType: 'pageblank',
                        leaf: true
                    },

                    {
                        text: '404 Error',
                        iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    },
                    {
                        text: '500 Error',
                        iconCls: 'x-fa fa-times-circle',
                        viewType: 'page500',
                        leaf: true
                    },
                    {
                        text: 'Lock Screen',
                        iconCls: 'x-fa fa-lock',
                        viewType: 'lockscreen',
                        leaf: true
                    },

                    {
                        text: 'Login',
                        iconCls: 'x-fa fa-check',
                        viewType: 'login',
                        leaf: true
                    },
                    {
                        text: 'Register',
                        iconCls: 'x-fa fa-edit',
                        viewType: 'register',
                        leaf: true
                    },
                    {
                        text: 'Password Reset',
                        iconCls: 'x-fa fa-lightbulb',
                        viewType: 'passwordreset',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Widgets',
                iconCls: 'x-fa fa-flask',
                viewType: 'widgets',
                leaf: true
            },
            {
                text: 'Forms',
                iconCls: 'x-fa fa-edit',
                viewType: 'forms',
                leaf: true
            },
            {
                text: 'Charts',
                iconCls: 'x-fa fa-chart-pie',
                viewType: 'charts',
                leaf: true
            }
        ]
    }
});
