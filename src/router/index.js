import Vue from 'vue'
import Router from 'vue-router'
// 小写开始为Router
import pc from './PC/pc'
import mobile from './Mobile/mobile'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '*',
    redirect: '/'
  }, mobile, pc]
})