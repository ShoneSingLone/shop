export default {
    path: '/',
    name: 'm', //mobile
    component: () =>
        import ( /* webpackChunkName: "pc" */ '@/pages/PC/PC'),
    children: [{
        path: 'article',
        name: 'm.article',
        component: () =>
            import ( /* webpackChunkName: "pc" */ '@c/H'),
    }]
}