import Vue from 'vue'
require('./components/_globals') // importing all the components
require('../public/css/main.css')
import App from './App.vue'
import store from './store/index'
import router from './routes'
import './registerServiceWorker'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
