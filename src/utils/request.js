import axios from 'axios'
import router from '../store/index'
import { message } from 'ant-design-vue'

const baseUrl = ''

const reLogin = () => {
  router.replaceState({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

const service = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? baseUrl : '/dev',
  headers: {
    'Content-Type': 'application/json'
  }
})

service.interceptors.response.use(response => {
  // if(response.)
})

export default service