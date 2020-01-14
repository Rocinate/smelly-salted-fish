import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/login/login.vue'),
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/',
    name: '首页',
    redirect: '/login',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Home.vue'),
    children: [{
      path: '/home',
      name: '后台管理',
      redirect: '/home/index',
      component: () => import('../views/index/index.vue'),
      children: [{
        path: 'index',
        name: '基本信息',
        component: () => import('../views/index/base.vue'),
        meta: {
          requireAuth: true
        }
      }]
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
