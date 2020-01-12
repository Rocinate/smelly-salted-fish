import request from '../utils/request'

const commonUrl = ''

function login(params) {
  return request.post(`${commonUrl}/login`,params)
}

export default {
  login
}