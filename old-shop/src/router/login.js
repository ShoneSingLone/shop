export default {
    path: '/pc/login',
    name: 'login', //login
    component: () =>
        import ( /* webpackChunkName: "pc" */ '@/pages/Login/Login'),
}