import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Headers from '@/components/Headers.vue'
import Tabbar from '@/components/Tabbar.vue'

Vue.config.productionTip = false

Vue.component('Headers',Headers)
Vue.component('Tabbar',Tabbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
