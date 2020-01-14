import request from '../utils/request'

const commonUrl = '/user'

function login(params) {
  return request.post(`${commonUrl}/login`,params)
}

function info(params) {
  return request.get(`${commonUrl}/info`,{params: params})
}

export default {
  login,
  info
}