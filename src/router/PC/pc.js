export default {
    path: '/',
    name: 'p',//pc
    component: () =>
        import ( /* webpackChunkName: "pc" */ '@/pages/PC/PC'),
    children: [{
        path: 'h',
        name: 'p.h',
        component: () =>
            import ( /* webpackChunkName: "pc" */ '@c/H'),
    }]
}