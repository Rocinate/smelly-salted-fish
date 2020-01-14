import request from '../utils/request'

const commonUrl = '/management'

function getList(params) {
  return request.post(`${commonUrl}/list`,params)
}

export default {
  getList
}