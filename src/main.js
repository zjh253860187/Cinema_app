import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Headers from '@/components/Headers.vue'
import Tabbar from '@/components/Tabbar.vue'
import { PullRefresh } from 'vant'

Vue.use(PullRefresh)
Vue.component('Headers',Headers)
Vue.component('Tabbar',Tabbar)




Vue.prototype.axios = axios

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
