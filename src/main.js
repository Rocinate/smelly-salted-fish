import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import api from './api'
import {message} from 'ant-design-vue'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(antd)

router.beforeEach((to, from, next) =>{
  const token = sessionStorage.getItem('token')
  if(to.meta.requireAuth) {
    if(token !== null) {
      next()
    } else {
      message.error('请先登录!')
      next('/login')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
