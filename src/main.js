import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import api from './api'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
