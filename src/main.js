import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

(() => {
  function dynamicLoadingCSS(cssURL) {
    let linkTag = document.createElement("link");
    linkTag.setAttribute(
      "href",
      cssURL
    );
    linkTag.setAttribute("rel", "stylesheet");
    document.head.appendChild(linkTag);
  }
  let cssURL = "http://at.alicdn.com/t/font_832872_8j7t61kvsa.css"
  dynamicLoadingCSS(cssURL);
})();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')