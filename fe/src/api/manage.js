import request from '../utils/request'

const commonUrl = '/management'

function getList(params) {
  return request.post(`${commonUrl}/list`,params)
}

function add(params) {
  return request.post(`${commonUrl}/add`,params)
}

function del(params) {
  return request.post(`${commonUrl}/del`,params)
}

export default {
  getList,
  add,
  del
}