import db from '../config/db'

const manageModel = '../schema/management.js'
const ManagementDb = db.Management
const management = ManagementDb.import(manageModel)

const getList = async function(params) {
  // const result = await management.findAndCountAll({
  //   // offset: (params.page - 1) * params.pageSize,
  //   offset: 1,
  //   limit: params.pageSize
  // })
  // const result = await management.
  
  return result
}

export default {
  getList
}