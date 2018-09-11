export default {
    path: '/mobile',
    name: 'm', //mobile
    component: () =>
        import ( /* webpackChunkName: "pc" */ '@/pages/PC/PC'),
    children: [{
        path: 'h', //home
        name: 'm.h',
        component: () =>
            import ( /* webpackChunkName: "pc" */ '@c/H'),
    }]
}