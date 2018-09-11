export default {
    path: '/pc',
    name: 'p', //pc
    component: () =>
        import ( /* webpackChunkName: "pc" */ '@/pages/PC/PC'),
    children: [{
        path: 'h', //home
        name: 'p.h',
        component: () =>
            import ( /* webpackChunkName: "home" */ '@/pages/PC/Home/Home'),
    }]
}