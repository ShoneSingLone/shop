export default {
    path: '/mobile',
    name: 'm', //mobile
    component: () =>
        import ( /* webpackChunkName: "pc" */ '@/pages/Mobile/Mobile'),
    children: [{
        path: 'h', //home
        name: 'm.h',
        component: () =>
            import ( /* webpackChunkName: "pc" */ '@/pages/Mobile/Home/Home'),
    }]
}