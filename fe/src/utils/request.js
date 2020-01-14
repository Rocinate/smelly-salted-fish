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
  baseURL: process.env.NODE_ENV === "production" ? baseUrl : '/api',
  headers: {
    'Content-Type': 'application/json',
  }
})

if(sessionStorage.getItem('token')) {
  service.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
}

service.interceptors.response.use(response => {
  if(response.data.code !== 200) {
    message.error(response.data.message)
  } else {
    return response.data
  }
}, error => {
  if(error) {
    if(error.response) {
      message.error(error.response.statusText)
    } else {
      message.error('请求失败')
    }
    return Promise.reject(error)
  } else {
    message.error('网络异常，请重试！')
  }
})

export default service