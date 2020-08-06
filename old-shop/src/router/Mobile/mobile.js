export default {
    path: '/mobile',
    name: 'm', //mobile
    component: () =>
        import ( /* webpackChunkName: "mobile" */ '@/pages/Mobile/Mobile'),
    children: [{
            path: 'home', //home
            name: 'm.h',
            component: () =>
                import ( /* webpackChunkName: "mobile-home" */ '@/pages/Mobile/Home/Home'),
        },
        {
            path: 'category', //home
            name: 'm.category',
            component: () =>
                import ( /* webpackChunkName: "mobile-category" */ '@/pages/Mobile/Category/Category'),
        },
        {
            path: 'trolley', //trolley
            name: 'm.trolley',
            component: () =>
                import ( /* webpackChunkName: "mobile-trolley" */ '@/pages/Mobile/Trolley/Trolley'),
        },
        {
            path: 'user', //user
            name: 'm.user',
            component: () =>
                import ( /* webpackChunkName: "mobile-user" */ '@/pages/Mobile/User/User'),
        },
    ]
}