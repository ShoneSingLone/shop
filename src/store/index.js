import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import product from './modules/pc.product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    'pc.product': product
  }
})